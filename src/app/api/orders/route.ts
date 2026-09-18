import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { CreateOrderSchema } from "@/lib/validations";
import { FREE_SHIPPING_THRESHOLD, FLAT_SHIPPING_RATE } from "@/lib/constants";

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    let query = supabase.from("orders").select("*, items:order_items(*)");

    if (profile?.role !== "admin") {
      query = query.eq("customer_id", user.id);
    }

    const { data: orders, error } = await query.order("created_at", {
      ascending: false,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data: orders || [] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient();
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
      notes,
      items,
    } = validated.data;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Calculate subtotal server-side
    let subtotal = 0;
    const orderItemsToInsert: any[] = [];

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

      const itemTotal = unitPrice * item.quantity;
      subtotal += itemTotal;

      orderItemsToInsert.push({
        product_id: product.id,
        variant_id: item.variant_id || null,
        product_name: product.name,
        variant_name: variantName,
        quantity: item.quantity,
        unit_price: unitPrice,
        total_price: itemTotal,
        image_url: (product.images as any)?.[0]?.url || null,
      });
    }

    const shippingAmount =
      subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : FLAT_SHIPPING_RATE;
    const total = subtotal + shippingAmount;

    // Create Order
    const { data: newOrder, error: orderError } = await supabase
      .from("orders")
      .insert({
        customer_id: user?.id || null,
        customer_name,
        customer_email,
        customer_phone,
        shipping_address: shipping_address as any,
        payment_method,
        subtotal,
        shipping_amount: shippingAmount,
        total,
        notes: notes || null,
        status: "pending",
        payment_status: "pending",
      })
      .select()
      .single();

    if (orderError || !newOrder) {
      return NextResponse.json(
        { error: orderError?.message || "Failed to create order" },
        { status: 500 }
      );
    }

    // Insert Order Items
    const itemsWithOrderId = orderItemsToInsert.map((i) => ({
      ...i,
      order_id: newOrder.id,
    }));

    await supabase.from("order_items").insert(itemsWithOrderId);

    return NextResponse.json({ data: newOrder });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
