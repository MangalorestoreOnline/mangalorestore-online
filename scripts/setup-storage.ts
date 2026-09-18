import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://djorzgprgggpcyoqoktc.supabase.co";
const serviceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqb3J6Z3ByZ2dncGN5b3Fva3RjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTczNDE3NiwiZXhwIjoyMTA1MzEwMTc2fQ.UFjvNGPDWyT1tgwOipw4Fs0nKkCqrfh7ubaPuQzQakU";

const supabase = createClient(supabaseUrl, serviceKey);

async function setup() {
  console.log("🔗 Testing connection to Supabase...");
  
  // Create product-images bucket
  const { data: buckets, error: listErr } = await supabase.storage.listBuckets();
  if (listErr) {
    console.error("❌ List buckets error:", listErr.message);
  } else {
    console.log("📦 Current buckets:", buckets?.map(b => b.name));
    const exists = buckets?.some(b => b.name === "product-images");
    if (!exists) {
      const { data, error } = await supabase.storage.createBucket("product-images", {
        public: true,
        fileSizeLimit: 10485760, // 10MB
        allowedMimeTypes: ["image/png", "image/jpeg", "image/webp", "image/svg+xml"]
      });
      if (error) {
        console.error("❌ Error creating product-images bucket:", error.message);
      } else {
        console.log("✅ Successfully created 'product-images' public bucket!");
      }
    } else {
      console.log("✅ 'product-images' bucket already exists.");
    }
  }
}

setup();
