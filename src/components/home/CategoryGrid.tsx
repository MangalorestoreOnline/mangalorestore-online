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
    <section className="py-10 bg-white border-b border-brand-cream-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-dark">
              Explore Popular Categories
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Authentic ingredients straight from Karnataka’s coastal belt
            </p>
          </div>
          <Link
            href="/categories/traditional-snacks"
            className="text-xs sm:text-sm font-semibold text-brand-saffron hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* Categories Strip */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {POPULAR_CATEGORIES.map((cat, idx) => (
            <Link
              key={idx}
              href={`/categories/${cat.slug}`}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-brand-cream border border-brand-cream-300 hover:border-brand-saffron hover:bg-brand-cream-100 hover:shadow-md transition-all text-center group"
            >
              <span className="text-2xl sm:text-3xl mb-1.5 group-hover:scale-110 transition-transform">
                {cat.icon}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-brand-dark line-clamp-2">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
