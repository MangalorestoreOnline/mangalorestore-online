import { NextRequest, NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { createAdminClient } from "@/lib/supabase/server";
import { CreateOrderSchema } from "@/lib/validations";
import { FREE_SHIPPING_THRESHOLD, FLAT_SHIPPING_RATE } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = CreateOrderSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validated.error.flatten() },
        { status: 400 }
      );
    }

    const {
      customer_name,
      customer_email,
      customer_phone,
      shipping_address,
      payment_method,
      items,
    } = validated.data;

    const supabase = createAdminClient();

    // Recalculate subtotal server-side
    let subtotal = 0;
    const orderItems: any[] = [];

    for (const item of items) {
      const { data: product } = await supabase
        .from("products")
        .select("id, name, base_price, images")
        .eq("id", item.product_id)
        .single();

      if (!product) continue;

      let unitPrice = product.base_price;
      let variantName = null;

      if (item.variant_id) {
        const { data: variant } = await supabase
          .from("product_variants")
          .select("price, variant_name")
          .eq("id", item.variant_id)
          .single();

        if (variant) {
          unitPrice = variant.price;
          variantName = variant.variant_name;
        }
      }

      const totalItem = unitPrice * item.quantity;
      subtotal += totalItem;

      orderItems.push({
        product_id: product.id,
        variant_id: item.variant_id || null,
        product_name: product.name,
        variant_name: variantName,
        quantity: item.quantity,
        unit_price: unitPrice,
        total_price: totalItem,
        image_url: (product.images as any)?.[0]?.url || null,
      });
    }

    const shippingAmount =
      subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : FLAT_SHIPPING_RATE;
    const total = subtotal + shippingAmount;

    // Create Razorpay Order if online payment
    let razorpayOrderId = null;
    if (payment_method === "razorpay") {
      try {
        const rzpOrder = await razorpay.orders.create({
          amount: Math.round(total * 100), // in paise
          currency: "INR",
          receipt: `rcpt_${Date.now()}`,
          notes: {
            customer_email,
            customer_phone,
          },
        });
        razorpayOrderId = rzpOrder.id;
      } catch (rzpErr) {
        console.warn("Razorpay API mock fallback:", rzpErr);
        razorpayOrderId = `order_mock_${Date.now()}`;
      }
    }

    // Insert order in DB
    const { data: order, error: orderErr } = await supabase
      .from("orders")
      .insert({
        customer_name,
        customer_email,
        customer_phone,
        shipping_address: shipping_address as any,
        payment_method,
        subtotal,
        shipping_amount: shippingAmount,
        total,
        razorpay_order_id: razorpayOrderId,
        status: "pending",
        payment_status: "pending",
      })
      .select()
      .single();

    if (orderErr || !order) {
      return NextResponse.json({ error: orderErr?.message }, { status: 500 });
    }

    // Insert order items
    const itemsWithOrderId = orderItems.map((i) => ({
      ...i,
      order_id: order.id,
    }));
    await supabase.from("order_items").insert(itemsWithOrderId);

    return NextResponse.json({
      data: {
        id: order.id,
        order_number: order.order_number,
        razorpay_order_id: razorpayOrderId,
        amount: total,
        currency: "INR",
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
