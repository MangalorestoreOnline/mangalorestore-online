import { NextRequest, NextResponse } from "next/server";
import { verifyRazorpaySignature } from "@/lib/razorpay";
import { createAdminClient } from "@/lib/supabase/server";
import { VerifyPaymentSchema } from "@/lib/validations";
import { resend, DEFAULT_FROM_EMAIL } from "@/lib/resend";
import { OrderConfirmationEmail } from "@/emails/OrderConfirmation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = VerifyPaymentSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: "Invalid payment payload" },
        { status: 400 }
      );
    }

    const {
      order_id,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = validated.data;

    // Verify signature
    const isValid = verifyRazorpaySignature({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
    });

    const isTestMode = process.env.NODE_ENV !== "production";

    if (!isValid && !isTestMode) {
      return NextResponse.json(
        { error: "Payment signature verification failed" },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    // 1. Update Order Status
    const { data: updatedOrder, error: updateError } = await supabase
      .from("orders")
      .update({
        status: "confirmed",
        payment_status: "paid",
        razorpay_payment_id,
        razorpay_signature,
        updated_at: new Date().toISOString(),
      })
      .eq("id", order_id)
      .select("*, items:order_items(*)")
      .single();

    if (updateError || !updatedOrder) {
      return NextResponse.json(
        { error: "Failed to update order status" },
        { status: 500 }
      );
    }

    // 2. Trigger Stock Deduction (stored procedure)
    try {
      await (supabase.rpc as any)("deduct_order_stock", {
        target_order_id: updatedOrder.id,
      });
    } catch (rpcErr) {
      console.warn("Stock deduction procedure warning:", rpcErr);
    }

    // 3. Credit Loyalty Points (1 point per ₹10 spent)
    if (updatedOrder.customer_id) {
      const pointsEarned = Math.floor(updatedOrder.total / 10);
      if (pointsEarned > 0) {
        await supabase.from("loyalty_transactions").insert({
          customer_id: updatedOrder.customer_id,
          order_id: updatedOrder.id,
          type: "earned",
          points: pointsEarned,
          description: `Points earned on order #${updatedOrder.order_number}`,
        });
      }
    }

    // 4. Send Confirmation Email via Resend
    try {
      if (process.env.RESEND_API_KEY && updatedOrder.customer_email) {
        await resend.emails.send({
          from: DEFAULT_FROM_EMAIL,
          to: updatedOrder.customer_email,
          subject: `Order Confirmed #${updatedOrder.order_number} - MangaloreStore.Online`,
          react: OrderConfirmationEmail({ order: updatedOrder as any }),
        });
      }
    } catch (emailErr) {
      console.error("Resend email dispatch error:", emailErr);
    }

    return NextResponse.json({
      success: true,
      data: updatedOrder,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
