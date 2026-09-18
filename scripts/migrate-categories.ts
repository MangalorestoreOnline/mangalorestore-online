import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { slugify } from "../src/lib/utils";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrateCategories() {
  console.log("🚀 Starting Zoho Category Migration...");

  // Example Category Tree matching Zoho export
  const categoriesToMigrate = [
    { name: "Sweets & Desserts", slug: "sweets-and-desserts", sort_order: 1 },
    { name: "Traditional Snacks", slug: "traditional-snacks", sort_order: 2 },
    { name: "Health & Wellness", slug: "health-and-wellness", sort_order: 3 },
    { name: "Pickles & Thokku", slug: "pickles-and-thokku", sort_order: 4 },
    { name: "Spices & Masalas", slug: "spices-and-masalas", sort_order: 5 },
    { name: "Traditional Cookware", slug: "traditional-cookware", sort_order: 6 },
    { name: "Pooja Essentials", slug: "pooja-essentials", sort_order: 7 },
  ];

  for (const cat of categoriesToMigrate) {
    const { error } = await supabase.from("categories").upsert(
      {
        name: cat.name,
        slug: cat.slug,
        sort_order: cat.sort_order,
        is_active: true,
      },
      { onConflict: "slug" }
    );

    if (error) {
      console.error(`❌ Failed to insert category ${cat.name}:`, error.message);
    } else {
      console.log(`✅ Migrated Category: ${cat.name}`);
    }
  }

  console.log("🎉 Category Migration Completed!");
}

migrateCategories();
