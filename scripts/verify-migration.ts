import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function verifyMigration() {
  console.log("🔍 Verifying Supabase Records Post-Migration...");

  const { count: catCount } = await supabase.from("categories").select("*", { count: "exact", head: true });
  const { count: prodCount } = await supabase.from("products").select("*", { count: "exact", head: true });
  const { count: orderCount } = await supabase.from("orders").select("*", { count: "exact", head: true });

  console.log(`📊 Categories count: ${catCount ?? 0}`);
  console.log(`📊 Products count: ${prodCount ?? 0}`);
  console.log(`📊 Orders count: ${orderCount ?? 0}`);

  console.log("✨ Migration Verification Check Complete.");
}

verifyMigration();
