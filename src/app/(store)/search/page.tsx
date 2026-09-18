"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SearchBar } from "@/components/shared/SearchBar";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Product } from "@/types/product";

const SAMPLE_SEARCH_PRODUCTS: Product[] = [
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
  {
    id: "p4444444-4444-4444-4444-444444444444",
    name: "Laveena Kundapur Chicken Masala Powder (250g)",
    slug: "laveena-kundapur-chicken-masala",
    description: "Secret heritage spice blend handcrafted with Byadgi chillies.",
    short_description: "Aromatic masala blend for Kundapur style curries.",
    base_price: 180,
    compare_price: 210,
    is_variable: false,
    stock_quantity: 120,
    is_in_stock: true,
    is_featured: true,
    is_active: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
        alt: "Laveena Masala",
      },
    ],
    tags: ["masala", "spices"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const filtered = query
    ? SAMPLE_SEARCH_PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : SAMPLE_SEARCH_PRODUCTS;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Search" },
        ]}
      />

      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark">
          {query ? `Search Results for "${query}"` : "Search Products"}
        </h1>
        <div className="max-w-xl">
          <SearchBar defaultValue={query} />
        </div>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-4">
          Found <strong className="text-brand-dark">{filtered.length}</strong> matching products
        </p>
        <ProductGrid products={filtered} emptyMessage={`No products found for "${query}". Try searching for 'kori rotti' or 'masala'.`} />
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs">Loading search results...</div>}>
      <SearchContent />
    </Suspense>
  );
}
