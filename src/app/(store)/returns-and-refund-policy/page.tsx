import React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { STORE_EMAIL, STORE_WHATSAPP } from "@/lib/constants";

export default function ReturnsRefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Returns & Refund Policy" },
        ]}
      />

      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark">
          Returns & Refund Policy
        </h1>

        <div className="text-xs sm:text-sm text-brand-dark leading-relaxed space-y-4">
          <p>
            At <strong>MangaloreStore.Online</strong>, we take immense pride in the freshness and quality of our authentic coastal products. Because most of our products are perishable food items (spices, sweets, pickles, and crispy wafers), we adhere to the following fair return and refund terms.
          </p>

          <h2 className="text-base font-bold text-brand-saffron">1. Damaged or Defective Items in Transit</h2>
          <p>
            If your parcel arrives with visible exterior damage or if any item inside (such as glassware, clay items, or vacuum-sealed packages) is broken or spoiled during transit, please notify us within <strong>48 hours of delivery</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Take clear photos/unboxing video of the damaged product and parcel label.</li>
            <li>Send the details via WhatsApp (+{STORE_WHATSAPP}) or email to {STORE_EMAIL}.</li>
            <li>We will immediately arrange a <strong>free replacement</strong> or issue a <strong>full refund</strong> to your original payment method.</li>
          </ul>

          <h2 className="text-base font-bold text-brand-saffron">2. Non-Returnable Items</h2>
          <p>
            Due to hygiene and food safety guidelines, opened food packets, pickles, sweets, and personal care products cannot be returned unless delivered in a damaged or expired condition.
          </p>

          <h2 className="text-base font-bold text-brand-saffron">3. Refund Processing Time</h2>
          <p>
            Approved refunds are credited directly to your original payment account (UPI / Debit / Credit card) within <strong>5 to 7 business days</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
