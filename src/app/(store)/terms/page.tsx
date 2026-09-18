import React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { STORE_NAME, STORE_LOCATION } from "@/lib/constants";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />

      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark">
          Terms & Conditions
        </h1>

        <div className="text-xs sm:text-sm text-brand-dark leading-relaxed space-y-4">
          <p>
            Welcome to {STORE_NAME}. By accessing and purchasing from our platform, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-base font-bold text-brand-saffron">1. Pricing & Currency</h2>
          <p>
            All prices listed on the store are in Indian Rupees (INR ₹) and are inclusive of applicable GST taxes. We reserve the right to modify prices without prior notice based on seasonal raw spice market rates.
          </p>

          <h2 className="text-base font-bold text-brand-saffron">2. Product Authenticity</h2>
          <p>
            All products are sourced directly from authenticated producers in the coastal belt of Karnataka. Because many items are handmade in small artisanal batches, slight variations in natural color, texture, and aroma may occur.
          </p>

          <h2 className="text-base font-bold text-brand-saffron">3. Jurisdiction</h2>
          <p>
            Any legal dispute arising out of transactions on this website shall be subject to the exclusive jurisdiction of the courts in {STORE_LOCATION}.
          </p>
        </div>
      </div>
    </div>
  );
}
