import React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Award, Gift, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoyaltyProgramPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Loyalty Program" },
        ]}
      />

      <div className="bg-gradient-to-r from-brand-teal to-brand-teal-700 text-white rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto backdrop-blur-sm">
          <Award className="w-8 h-8 text-yellow-300" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold">
          MangaloreStore Loyalty Club
        </h1>
        <p className="text-sm sm:text-base text-brand-cream-100 max-w-xl mx-auto">
          Earn points on every authentic order and redeem them for instant discounts on future delicacies!
        </p>
        <div className="pt-2">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-brand-saffron hover:bg-brand-saffron-600 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            Join the Club — It’s Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-brand-cream-300 rounded-xl p-6 text-center space-y-2 shadow-sm">
          <div className="w-12 h-12 bg-brand-cream-200 text-brand-saffron rounded-full flex items-center justify-center mx-auto font-bold text-lg">
            1
          </div>
          <h3 className="font-heading font-bold text-sm text-brand-dark">Shop & Earn</h3>
          <p className="text-xs text-muted-foreground">
            Get 1 Loyalty Point for every ₹10 spent on any items across our store.
          </p>
        </div>

        <div className="bg-white border border-brand-cream-300 rounded-xl p-6 text-center space-y-2 shadow-sm">
          <div className="w-12 h-12 bg-brand-cream-200 text-brand-teal rounded-full flex items-center justify-center mx-auto font-bold text-lg">
            2
          </div>
          <h3 className="font-heading font-bold text-sm text-brand-dark">Collect & Track</h3>
          <p className="text-xs text-muted-foreground">
            Points automatically accumulate in your account profile after each delivered order.
          </p>
        </div>

        <div className="bg-white border border-brand-cream-300 rounded-xl p-6 text-center space-y-2 shadow-sm">
          <div className="w-12 h-12 bg-brand-cream-200 text-brand-saffron rounded-full flex items-center justify-center mx-auto font-bold text-lg">
            3
          </div>
          <h3 className="font-heading font-bold text-sm text-brand-dark">Redeem Savings</h3>
          <p className="text-xs text-muted-foreground">
            Apply points directly at checkout for direct rupee discounts on your cart total.
          </p>
        </div>
      </div>
    </div>
  );
}
