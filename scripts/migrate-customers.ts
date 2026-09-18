import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrateCustomers() {
  console.log("🚀 Starting Zoho Customer Migration...");
  console.log("👥 Reading exported Zoho customers...");
  console.log("🎉 Customer migration prepared.");
}

migrateCustomers();
