import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";

    if (!query || query.trim().length < 2) {
      return NextResponse.json({ data: [] });
    }

    const cleanQuery = query.trim();

    // Use full text search or ilike
    const { data: products, error } = await supabase
      .from("products")
      .select("id, name, slug, base_price, compare_price, images, short_description, is_in_stock")
      .eq("is_active", true)
      .ilike("name", `%${cleanQuery}%`)
      .limit(10);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data: products || [] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
