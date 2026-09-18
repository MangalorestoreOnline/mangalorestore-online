import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const POPULAR_CATEGORIES = [
  { name: "Pooja Essentials", slug: "pooja-essentials", icon: "🪔" },
  { name: "Masala Powders", slug: "spices-and-masalas", icon: "🌶️" },
  { name: "Baby Care", slug: "health-and-wellness", icon: "👶" },
  { name: "Pickles & Thokku", slug: "pickles-and-thokku", icon: "🥭" },
  { name: "Squash & Syrups", slug: "health-and-wellness", icon: "🍹" },
  { name: "Personal Care", slug: "health-and-wellness", icon: "🥥" },
  { name: "Non-Veg Delicacies", slug: "traditional-snacks", icon: "🐟" },
  { name: "Wellness Oils", slug: "health-and-wellness", icon: "🌿" },
  { name: "Traditional Cookware", slug: "traditional-cookware", icon: "🍳" },
];

export function CategoryGrid() {
  return (
    <section className="py-6 sm:py-10 bg-white border-b border-brand-cream-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <h2 className="text-lg sm:text-2xl font-heading font-bold text-brand-dark">
              Explore Popular Categories
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Authentic ingredients straight from Karnataka’s coastal belt
            </p>
          </div>
          <Link
            href="/categories/traditional-snacks"
            className="text-xs sm:text-sm font-semibold text-brand-saffron hover:underline whitespace-nowrap ml-2"
          >
            View All →
          </Link>
        </div>

        {/* Mobile: Horizontal Swipe Carousel / Desktop: Grid */}
        <div className="flex sm:grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-2.5 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
          {POPULAR_CATEGORIES.map((cat, idx) => (
            <Link
              key={idx}
              href={`/categories/${cat.slug}`}
              className="flex-shrink-0 w-24 sm:w-auto flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-2xl bg-brand-cream border border-brand-cream-300 hover:border-brand-saffron hover:bg-brand-cream-100 hover:shadow-md transition-all text-center group snap-start active:scale-95"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-xs border border-brand-cream-200 mb-1.5 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl">
                  {cat.icon}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-brand-dark line-clamp-2 text-center leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
