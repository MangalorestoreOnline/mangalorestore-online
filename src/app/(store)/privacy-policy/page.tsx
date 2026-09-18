import React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { STORE_NAME } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark">
          Privacy Policy
        </h1>

        <div className="text-xs sm:text-sm text-brand-dark leading-relaxed space-y-4">
          <p>
            {STORE_NAME} is committed to safeguarding your privacy. This policy outlines how we handle your personal data when you visit or make a purchase from our website.
          </p>

          <h2 className="text-base font-bold text-brand-saffron">1. Information We Collect</h2>
          <p>
            We collect personal details such as your name, delivery address, email, and phone number solely for processing orders, communicating shipment tracking updates, and providing customer support.
          </p>

          <h2 className="text-base font-bold text-brand-saffron">2. Payment Security</h2>
          <p>
            We do <strong>not</strong> store your credit/debit card details, UPI PINs, or net banking passwords on our servers. All financial transactions are encrypted and processed securely by <strong>Razorpay</strong> (PCI-DSS compliant).
          </p>

          <h2 className="text-base font-bold text-brand-saffron">3. No Third-Party Selling</h2>
          <p>
            We will never sell, rent, or trade your personal information to any third-party marketing companies.
          </p>
        </div>
      </div>
    </div>
  );
}
