import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://djorzgprgggpcyoqoktc.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqb3J6Z3ByZ2dncGN5b3Fva3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3MzQxNzYsImV4cCI6MjEwNTMxMDE3Nn0.UIV3VHtfC9hR4k81pdWKWki_MwOj8XTEgPvE4OET_P0";

const supabase = createClient(supabaseUrl, anonKey);

async function check() {
  const { data: categories, error: catErr } = await supabase.from("categories").select("*");
  const { data: products, error: prodErr } = await supabase.from("products").select("*");

  console.log("Categories check:", catErr ? `Error: ${catErr.message}` : `Found ${categories?.length} categories`);
  console.log("Products check:", prodErr ? `Error: ${prodErr.message}` : `Found ${products?.length} products`);
}

check();
