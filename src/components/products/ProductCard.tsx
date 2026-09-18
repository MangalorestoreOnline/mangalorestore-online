"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { AddToCartButton } from "./AddToCartButton";
import { WishlistButton } from "./WishlistButton";
import { calculateDiscount } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl =
    (product.images && product.images[0]?.url) ||
    "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80";

  const discount = calculateDiscount(product.base_price, product.compare_price);
  const isOutOfStock = !product.is_in_stock || product.stock_quantity <= 0;

  return (
    <div className="group relative bg-white border border-brand-cream-300 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      {/* Top Image Container */}
      <div className="relative w-full pt-[90%] bg-brand-cream-100 overflow-hidden">
        <Link href={`/products/${product.slug}`} className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {discount > 0 && !isOutOfStock && (
            <span className="bg-brand-saffron text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
              {discount}% OFF
            </span>
          )}
          {product.is_featured && (
            <span className="bg-brand-teal text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Out of Stock Overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center z-10">
            <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">
              Sold Out
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <div className="absolute top-2 right-2 z-20">
          <WishlistButton productId={product.id} size="sm" />
        </div>
      </div>

      {/* Content Container */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {product.category && (
            <span className="text-[10px] uppercase font-semibold text-brand-teal tracking-wider block mb-1">
              {product.category.name}
            </span>
          )}
          <Link
            href={`/products/${product.slug}`}
            className="font-heading font-semibold text-xs sm:text-sm text-brand-dark hover:text-brand-saffron transition-colors line-clamp-2"
          >
            {product.name}
          </Link>
          {product.short_description && (
            <p className="text-[11px] text-muted-foreground line-clamp-1 mt-1">
              {product.short_description}
            </p>
          )}
        </div>

        {/* Price & Action */}
        <div className="pt-2 border-t border-brand-cream-200 space-y-2.5">
          <PriceDisplay
            price={product.base_price}
            comparePrice={product.compare_price}
            size="md"
          />

          <AddToCartButton
            product={product}
            className="w-full"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}
