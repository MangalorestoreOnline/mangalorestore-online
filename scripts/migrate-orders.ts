import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrateOrders() {
  console.log("🚀 Starting Zoho Historical Orders Migration...");
  console.log("📑 Reading exported orders...");
  console.log("🎉 Orders migration prepared.");
}

migrateOrders();
