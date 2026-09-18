import React from "react";
import { StarRating } from "@/components/shared/StarRating";
import { Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Priya Kulal",
    location: "Mumbai",
    product: "Authentic Kori Rotti & Papads",
    rating: 5,
    comment:
      "Super crispy and light Kori Rotti! Safely packed and delivered to Mumbai without breaking into crumbs. Truly brought back Sunday lunch memories.",
  },
  {
    name: "Vajresh Kumar",
    location: "Mangalore",
    product: "Vishnu Pure Desi Ghee",
    rating: 5,
    comment:
      "The granular bilona texture and the heavenly aroma of Vishnu Ghee is irreplaceable. Highly recommended for genuine traditional purity.",
  },
  {
    name: "Harshith",
    location: "Kolkata",
    product: "Laveena Kundapur Masala",
    rating: 5,
    comment:
      "Making Mangalorean chicken gassi in Kolkata with Laveena masala gave the exact coastal taste and rich Byadgi red color. Amazing quality.",
  },
  {
    name: "Lokesh Rai",
    location: "Madikeri",
    product: "Jackfruit Papad (Halasina Happala)",
    rating: 5,
    comment:
      "Very authentic and homemade flavor. Crisp, perfectly salted, and nostalgic. Fast delivery too!",
  },
  {
    name: "Naina Naidu",
    location: "Bangalore",
    product: "Keramruth Organic Coconut Soap",
    rating: 5,
    comment:
      "Skin feels deeply moisturized without any chemical tightness. Great natural coconut aroma!",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="py-8 sm:py-14 bg-brand-cream-100 border-b border-brand-cream-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-saffron">
            Customer Love
          </span>
          <h2 className="text-xl sm:text-3xl font-heading font-bold text-brand-dark mt-1">
            Loved Across India for Authentic Taste
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Read how customers from Mumbai to Kolkata enjoy our coastal food products
          </p>
        </div>

        {/* Mobile Swipeable / Desktop Grid */}
        <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 overflow-x-auto pb-3 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-auto bg-white p-4 sm:p-5 rounded-2xl border border-brand-cream-300 shadow-xs flex flex-col justify-between snap-start"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <StarRating rating={rev.rating} size="sm" />
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-brand-saffron/25" />
                </div>
                <p className="text-xs text-brand-dark italic leading-relaxed line-clamp-4 sm:line-clamp-none">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 mt-2.5 border-t border-brand-cream-200">
                <p className="text-xs font-bold text-brand-dark">{rev.name}</p>
                <p className="text-[10px] text-muted-foreground truncate">
                  {rev.location} • <span className="text-brand-teal font-medium">{rev.product}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
