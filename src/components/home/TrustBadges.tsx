import React from "react";
import { ShieldCheck, CreditCard, HeartHandshake, Award } from "lucide-react";

export function TrustBadges() {
  return (
    <section className="py-6 sm:py-10 bg-white border-y border-brand-cream-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-brand-cream border border-brand-cream-200">
            <div className="p-2 sm:p-3 bg-brand-saffron/10 rounded-xl text-brand-saffron">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-brand-dark">100% Authentic</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Direct coastal recipes</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-brand-cream border border-brand-cream-200">
            <div className="p-2 sm:p-3 bg-brand-teal/10 rounded-lg text-brand-teal">
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-brand-dark">Secure UPI/Cards</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Safe Razorpay checkout</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-brand-cream border border-brand-cream-200">
            <div className="p-2 sm:p-3 bg-brand-saffron/10 rounded-xl text-brand-saffron">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-brand-dark">WhatsApp Help</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Quick customer support</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-brand-cream border border-brand-cream-200">
            <div className="p-2 sm:p-3 bg-brand-teal/10 rounded-xl text-brand-teal">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-brand-dark">4+ Years Trust</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">10,000+ happy buyers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
