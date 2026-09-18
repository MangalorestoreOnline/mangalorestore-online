import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);

    const categorySlug = searchParams.get("category");
    const query = searchParams.get("q");
    const sort = searchParams.get("sort") || "newest";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const featured = searchParams.get("featured") === "true";

    const offset = (page - 1) * limit;

    let dbQuery = supabase
      .from("products")
      .select("*, category:categories(id, name, slug), variants:product_variants(*)", {
        count: "exact",
      })
      .eq("is_active", true);

    if (featured) {
      dbQuery = dbQuery.eq("is_featured", true);
    }

    if (categorySlug) {
      const { data: catData } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", categorySlug)
        .single();

      if (catData) {
        dbQuery = dbQuery.eq("category_id", catData.id);
      }
    }

    if (query) {
      dbQuery = dbQuery.ilike("name", `%${query}%`);
    }

    if (sort === "price-low") {
      dbQuery = dbQuery.order("base_price", { ascending: true });
    } else if (sort === "price-high") {
      dbQuery = dbQuery.order("base_price", { ascending: false });
    } else {
      dbQuery = dbQuery.order("created_at", { ascending: false });
    }

    dbQuery = dbQuery.range(offset, offset + limit - 1);

    const { data: products, error, count } = await dbQuery;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      data: products || [],
      meta: {
        page,
        limit,
        total: count || 0,
        totalPages: count ? Math.ceil(count / limit) : 0,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}
