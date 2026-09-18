import React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FREE_SHIPPING_THRESHOLD, FLAT_SHIPPING_RATE } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Shipping Policy" },
        ]}
      />

      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark">
          Shipping & Delivery Policy
        </h1>

        <div className="text-xs sm:text-sm text-brand-dark leading-relaxed space-y-4">
          <h2 className="text-base font-bold text-brand-saffron">1. Free Shipping Threshold</h2>
          <p>
            We offer <strong>FREE shipping across all serviceable pincodes in India</strong> on all orders with a subtotal of <strong>{formatPrice(FREE_SHIPPING_THRESHOLD)} or more</strong>. For orders below {formatPrice(FREE_SHIPPING_THRESHOLD)}, a flat shipping charge of {formatPrice(FLAT_SHIPPING_RATE)} is applied automatically at checkout.
          </p>

          <h2 className="text-base font-bold text-brand-saffron">2. Processing & Dispatch Timelines</h2>
          <p>
            All orders are freshly packed directly in Mangalore and dispatched within <strong>24 to 48 business hours</strong> from the time payment is confirmed. Fragile products such as Kori Rotti, Cast Iron Cookware, and Pickles are packed with multi-layered protective cushioning to prevent breakage during transit.
          </p>

          <h2 className="text-base font-bold text-brand-saffron">3. Estimated Delivery Times</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
            <li><strong>South India (Karnataka, Kerala, Tamil Nadu, Andhra, Telangana, Goa):</strong> 2 to 4 business days</li>
            <li><strong>Western & Central India (Maharashtra, Gujarat, MP):</strong> 3 to 5 business days</li>
            <li><strong>Northern & Eastern India (Delhi NCR, UP, West Bengal, etc.):</strong> 4 to 6 business days</li>
            <li><strong>North-East & Remote Areas:</strong> 5 to 8 business days</li>
          </ul>

          <h2 className="text-base font-bold text-brand-saffron">4. Tracking Your Shipment</h2>
          <p>
            As soon as your parcel is handed over to our courier partners (Bluedart, Delhivery, DTDC, India Post), you will receive an automated tracking link via SMS, WhatsApp, and Email.
          </p>
        </div>
      </div>
    </div>
  );
}
