import React from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-2xl bg-gradient-to-r from-brand-saffron to-brand-saffron-700 text-white overflow-hidden p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Decorative background circle */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-xl space-y-3 z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Flame className="w-3.5 h-3.5 text-yellow-300" /> Coastal Special
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold leading-tight">
              Crispy Kori Rotti & Coastal Curries
            </h2>
            <p className="text-xs sm:text-sm text-brand-cream-100 font-sans">
              Handmade rice wafers crafted using age-old coastal techniques. Order now and enjoy authentic Mangalorean feast at home.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <Link
              href="/products/authentic-mangalore-kori-rotti"
              className="inline-flex items-center gap-2 bg-white text-brand-saffron px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-brand-cream-100 transition-colors shadow-lg active:scale-95"
            >
              Order Kori Rotti Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
