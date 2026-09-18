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
    <section className="py-14 bg-brand-cream-100 border-b border-brand-cream-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-saffron">
            Customer Love
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mt-1">
            Loved Across India for Authentic Taste
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Read how customers from Mumbai to Kolkata enjoy our coastal food products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-brand-cream-300 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <StarRating rating={rev.rating} size="sm" />
                  <Quote className="w-5 h-5 text-brand-saffron/20" />
                </div>
                <p className="text-xs text-brand-dark italic leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-brand-cream-200">
                <p className="text-xs font-bold text-brand-dark">{rev.name}</p>
                <p className="text-[10px] text-muted-foreground">
                  {rev.location} • <span className="text-brand-teal">{rev.product}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
