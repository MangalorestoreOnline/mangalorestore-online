"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, Trash2 } from "lucide-react";
import { CartItem as CartItemType, useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const imageUrl =
    (item.product.images && item.product.images[0]?.url) ||
    "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=300&q=80";

  return (
    <div className="flex gap-3 py-3 border-b border-brand-cream-300">
      {/* Product Image */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-brand-cream-200 shrink-0 border border-brand-cream-300">
        <Image
          src={imageUrl}
          alt={item.product.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <Link
            href={`/products/${item.product.slug}`}
            className="text-xs sm:text-sm font-semibold text-brand-dark hover:text-brand-saffron transition-colors line-clamp-2"
          >
            {item.product.name}
          </Link>
          {item.variant && (
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Variant: {item.variant.variant_name}
            </p>
          )}
          <p className="text-xs font-bold text-brand-saffron mt-1">
            {formatPrice(item.price)}
          </p>
        </div>

        {/* Quantity Controls + Remove */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-brand-cream-400 rounded-md bg-white">
            <button
              onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
              className="p-1 hover:bg-brand-cream-100 text-brand-dark rounded-l-md transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-2.5 text-xs font-semibold text-brand-dark">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
              className="p-1 hover:bg-brand-cream-100 text-brand-dark rounded-r-md transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={() => removeItem(item.productId, item.variantId)}
            className="text-muted-foreground hover:text-red-500 p-1 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
