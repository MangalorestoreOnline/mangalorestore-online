import React from "react";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { EmptyState } from "@/components/shared/EmptyState";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export function ProductGrid({
  products,
  emptyMessage = "No products found matching your selection.",
}: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <EmptyState
        title="No Products Available"
        description={emptyMessage}
        actionText="Browse Categories"
        actionHref="/categories/traditional-snacks"
      />
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
