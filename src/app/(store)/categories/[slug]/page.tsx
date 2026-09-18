import React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Product } from "@/types/product";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryTitle = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  // Sample products for category view
  const sampleProducts: Product[] = [
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <Breadcrumb
        items={[
          { label: "Categories", href: "/" },
          { label: categoryTitle },
        ]}
      />

      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark">
          {categoryTitle}
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
          Discover our handcrafted, pure and authentic {categoryTitle.toLowerCase()} collection prepared directly from coastal recipes.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-muted-foreground">
            Showing <strong className="text-brand-dark">{sampleProducts.length}</strong> items
          </p>
        </div>
        <ProductGrid products={sampleProducts} />
      </div>
    </div>
  );
}
