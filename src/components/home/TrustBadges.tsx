import React from "react";
import { ShieldCheck, CreditCard, HeartHandshake, Award } from "lucide-react";

export function TrustBadges() {
  return (
    <section className="py-10 bg-white border-y border-brand-cream-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream border border-brand-cream-200">
            <div className="p-3 bg-brand-saffron/10 rounded-lg text-brand-saffron">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-brand-dark">100% Trust, Guaranteed</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Your peace of mind, our promise.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream border border-brand-cream-200">
            <div className="p-3 bg-brand-teal/10 rounded-lg text-brand-teal">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-brand-dark">Hassle-Free Payments</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Pay your way - simple, fast, and secure.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream border border-brand-cream-200">
            <div className="p-3 bg-brand-saffron/10 rounded-lg text-brand-saffron">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-brand-dark">Customer-Friendly Service</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Your comfort and delight is our priority.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream border border-brand-cream-200">
            <div className="p-3 bg-brand-teal/10 rounded-lg text-brand-teal">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-brand-dark">4+ Years of Trust</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Built on trust, strengthened by coastal heritage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
