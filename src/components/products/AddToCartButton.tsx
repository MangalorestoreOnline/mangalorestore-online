"use client";

import React, { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Product, ProductVariant } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

interface AddToCartButtonProps {
  product: Product;
  variant?: ProductVariant | null;
  quantity?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function AddToCartButton({
  product,
  variant = null,
  quantity = 1,
  className = "",
  size = "md",
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const isOutOfStock = variant
    ? variant.stock_quantity <= 0
    : !product.is_in_stock || product.stock_quantity <= 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOutOfStock) return;

    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const sizeClasses = {
    sm: "py-1.5 px-3 text-xs",
    md: "py-2 px-4 text-xs sm:text-sm",
    lg: "py-3 px-6 text-sm sm:text-base font-semibold",
  };

  return (
    <button
      onClick={handleAdd}
      disabled={isOutOfStock}
      className={`flex items-center justify-center gap-1.5 rounded-lg font-medium transition-all duration-200 ${
        isOutOfStock
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : added
          ? "bg-green-600 text-white shadow-md scale-95"
          : "bg-brand-saffron hover:bg-brand-saffron-600 active:scale-95 text-white shadow-sm"
      } ${sizeClasses[size]} ${className}`}
    >
      {added ? (
        <>
          <Check className="w-4 h-4" /> Added
        </>
      ) : isOutOfStock ? (
        "Out of Stock"
      ) : (
        <>
          <ShoppingBag className="w-4 h-4" /> Add to Cart
        </>
      )}
    </button>
  );
}
