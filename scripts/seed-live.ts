import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://djorzgprgggpcyoqoktc.supabase.co";
const serviceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqb3J6Z3ByZ2dncGN5b3Fva3RjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTczNDE3NiwiZXhwIjoyMTA1MzEwMTc2fQ.UFjvNGPDWyT1tgwOipw4Fs0nKkCqrfh7ubaPuQzQakU";

const supabase = createClient(supabaseUrl, serviceKey);

async function seed() {
  console.log("🌱 Seeding Live Supabase Database with Categories & Products...");

  // 1. Categories
  const categories = [
    { id: "11111111-1111-4111-8111-111111111111", name: "Sweets & Desserts", slug: "sweets-and-desserts", description: "Authentic Mangalorean halwa and sweets", sort_order: 1 },
    { id: "22222222-2222-4222-8222-222222222222", name: "Traditional Snacks", slug: "traditional-snacks", description: "Crispy Kori Rotti, Banana Chips and Rice Rotti", sort_order: 2 },
    { id: "33333333-3333-4333-8333-333333333333", name: "Health & Wellness", slug: "health-and-wellness", description: "Herbal Kashaya, Keramruth wellness and ghee", sort_order: 3 },
    { id: "44444444-4444-4444-8444-444444444444", name: "Pickles & Thokku", slug: "pickles-and-thokku", description: "Mango, Appemidi, Fish and Prawn Pickles", sort_order: 4 },
    { id: "55555555-5555-4555-8555-555555555555", name: "Spices & Masalas", slug: "spices-and-masalas", description: "Kundapur Chicken Masala, Bafat Powder", sort_order: 5 },
    { id: "66666666-6666-4666-8666-666666666666", name: "Traditional Cookware", slug: "traditional-cookware", description: "Cast iron Neer Dosa Tawa, Coconut Grater", sort_order: 6 },
  ];

  for (const cat of categories) {
    const { error } = await supabase.from("categories").upsert(cat, { onConflict: "id" });
    if (error) console.error("Category insert error:", cat.name, error.message);
    else console.log("✅ Category:", cat.name);
  }

  // 2. Products
  const products = [
    {
      id: "a1111111-1111-4111-8111-111111111111",
      name: "Authentic Mangalore Kori Rotti (Crispy Rice Wafers)",
      slug: "authentic-mangalore-kori-rotti",
      description: "Ultra-thin, feather-light, crispy South Indian rice wafers made using pure coastal rice. The quintessential companion to fiery Kundapur or Mangalorean chicken curry (Kori Gassi).",
      short_description: "Ultra-thin, crispy rice wafers perfect with spicy chicken gassi.",
      sku: "MSO-KR-500",
      category_id: "22222222-2222-4222-8222-222222222222",
      base_price: 160.00,
      compare_price: 190.00,
      is_variable: false,
      stock_quantity: 150,
      is_in_stock: true,
      is_featured: true,
      is_active: true,
      weight_grams: 500,
      images: [{ url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80", alt: "Kori Rotti", sort_order: 0 }],
      tags: ["kori rotti", "mangalorean", "bestseller"]
    },
    {
      id: "a2222222-2222-4222-8222-222222222222",
      name: "Vishnu Premium Pure Desi Cow Ghee",
      slug: "vishnu-premium-pure-desi-cow-ghee",
      description: "Traditional bilona churned aromatic desi cow ghee. Packed with rich aroma, golden granular texture, and unmatched purity from coastal farms.",
      short_description: "Pure golden granular cow ghee made with traditional methods.",
      sku: "MSO-VG-500",
      category_id: "33333333-3333-4333-8333-333333333333",
      base_price: 499.00,
      compare_price: 550.00,
      is_variable: true,
      stock_quantity: 80,
      is_in_stock: true,
      is_featured: true,
      is_active: true,
      weight_grams: 500,
      images: [{ url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80", alt: "Vishnu Ghee", sort_order: 0 }],
      tags: ["ghee", "cow ghee", "pure"]
    },
    {
      id: "a3333333-3333-4333-8333-333333333333",
      name: "Keramruth Pure Cold Pressed Virgin Coconut Oil",
      slug: "keramruth-cold-pressed-virgin-coconut-oil",
      description: "100% natural, chemical-free cold pressed virgin coconut oil sourced directly from select coastal coconuts. Excellent for glowing skin and nourished hair.",
      short_description: "100% pure cold-pressed coastal virgin coconut oil.",
      sku: "MSO-KM-VCO",
      category_id: "33333333-3333-4333-8333-333333333333",
      base_price: 299.00,
      compare_price: 350.00,
      is_variable: true,
      stock_quantity: 120,
      is_in_stock: true,
      is_featured: true,
      is_active: true,
      weight_grams: 500,
      images: [{ url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80", alt: "Keramruth Coconut Oil", sort_order: 0 }],
      tags: ["keramruth", "coconut oil", "wellness"]
    },
    {
      id: "a4444444-4444-4444-8444-444444444444",
      name: "Laveena Special Kundapur Chicken Masala Powder",
      slug: "laveena-kundapur-chicken-masala",
      description: "Secret heritage spice blend handcrafted with roasted Byadgi chillies, coriander, and coastal spices for rich color and authentic flavor.",
      short_description: "Heritage spice blend for authentic coastal Kundapur chicken.",
      sku: "MSO-LM-250",
      category_id: "55555555-5555-4555-8555-555555555555",
      base_price: 180.00,
      compare_price: 210.00,
      is_variable: false,
      stock_quantity: 200,
      is_in_stock: true,
      is_featured: true,
      is_active: true,
      weight_grams: 250,
      images: [{ url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80", alt: "Laveena Masala", sort_order: 0 }],
      tags: ["masala", "chicken masala", "kundapur"]
    },
    {
      id: "a5555555-5555-4555-8555-555555555555",
      name: "Traditional Heavy Cast Iron Neer Dosa Tawa",
      slug: "cast-iron-neer-dosa-tawa",
      description: "Pre-seasoned heavy cast iron pan specially crafted for making lace-thin Neer Dosas, Appams and Rotis with crisp edges.",
      short_description: "Pre-seasoned heavy cast iron tawa for perfect Neer Dosa.",
      sku: "MSO-CW-NDT",
      category_id: "66666666-6666-4666-8666-666666666666",
      base_price: 1250.00,
      compare_price: 1499.00,
      is_variable: false,
      stock_quantity: 45,
      is_in_stock: true,
      is_featured: false,
      is_active: true,
      weight_grams: 2200,
      images: [{ url: "https://images.unsplash.com/photo-1584990347449-397ddc833d7b?auto=format&fit=crop&w=800&q=80", alt: "Cast Iron Tawa", sort_order: 0 }],
      tags: ["cookware", "cast iron", "neer dosa"]
    }
  ];

  for (const prod of products) {
    const { error } = await supabase.from("products").upsert(prod, { onConflict: "id" });
    if (error) console.error("Product insert error:", prod.name, error.message);
    else console.log("✅ Product:", prod.name);
  }

  // 3. Product Variants
  const variants = [
    { product_id: "a2222222-2222-4222-8222-222222222222", variant_name: "500 ml Jar", variant_type: "Size", price: 499.00, compare_price: 550.00, stock_quantity: 50, sku: "MSO-VG-500ML", sort_order: 1 },
    { product_id: "a2222222-2222-4222-8222-222222222222", variant_name: "1000 ml (1L) Jar", variant_type: "Size", price: 950.00, compare_price: 1050.00, stock_quantity: 30, sku: "MSO-VG-1L", sort_order: 2 },
    { product_id: "a3333333-3333-4333-8333-333333333333", variant_name: "250 ml Bottle", variant_type: "Size", price: 160.00, compare_price: 185.00, stock_quantity: 60, sku: "MSO-KM-250", sort_order: 1 },
    { product_id: "a3333333-3333-4333-8333-333333333333", variant_name: "500 ml Bottle", variant_type: "Size", price: 299.00, compare_price: 350.00, stock_quantity: 60, sku: "MSO-KM-500", sort_order: 2 }
  ];

  for (const v of variants) {
    const { error } = await supabase.from("product_variants").insert(v);
    if (error) console.error("Variant insert error:", v.variant_name, error.message);
    else console.log("✅ Variant:", v.variant_name);
  }

  console.log("🎉 Seeding Completed Successfully!");
}

seed();
