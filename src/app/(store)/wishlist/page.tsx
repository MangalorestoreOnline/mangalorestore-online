"use client";

import React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ProductGrid } from "@/components/products/ProductGrid";
import { useWishlist } from "@/hooks/useWishlist";
import { EmptyState } from "@/components/shared/EmptyState";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";

const SAMPLE_WISHLIST_PRODUCTS: Product[] = [
  {
    id: "p1111111-1111-1111-1111-111111111111",
    name: "Authentic Mangalore Kori Rotti (Crispy Rice Wafers)",
    slug: "authentic-mangalore-kori-rotti",
    description: "Ultra-thin, feather-light, crispy South Indian rice wafers.",
    short_description: "Feather-light crispy rice wafers for chicken gassi.",
    base_price: 160,
    compare_price: 190,
    is_variable: false,
    stock_quantity: 100,
    is_in_stock: true,
    is_featured: true,
    is_active: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        alt: "Kori Rotti",
      },
    ],
    tags: ["kori rotti", "bestseller"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  const wishlistedItems = SAMPLE_WISHLIST_PRODUCTS.filter((p) =>
    wishlist.includes(p.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "My Wishlist" },
        ]}
      />

      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark">
          My Saved Items ({wishlist.length})
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Keep track of your favorite Mangalorean delicacies and stock up anytime.
        </p>
      </div>

      {wishlist.length === 0 ? (
        <EmptyState
          title="Your Wishlist is Empty"
          description="Click the heart icon on any product to save it here for later."
          actionText="Discover Delicacies"
          actionHref="/"
          icon={<Heart className="w-8 h-8 text-red-500" />}
        />
      ) : (
        <ProductGrid products={wishlistedItems.length > 0 ? wishlistedItems : SAMPLE_WISHLIST_PRODUCTS} />
      )}
    </div>
  );
}
