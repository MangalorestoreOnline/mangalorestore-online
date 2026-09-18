"use client";

import React from "react";
import Link from "next/link";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { CartItem } from "./CartItem";
import { formatPrice } from "@/lib/utils";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export function CartDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const setIsOpen = useCartStore((state) => state.setIsOpen);
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const freeShippingDiff = useCartStore((state) => state.getFreeShippingDifference());

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-4 border-b border-brand-cream-300 flex items-center justify-between bg-brand-cream-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-saffron" />
            <h2 className="font-heading font-bold text-base text-brand-dark">
              Your Cart ({items.length})
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-brand-cream-300 text-brand-dark transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free shipping bar */}
        <div className="bg-brand-cream-50 px-4 py-2 border-b border-brand-cream-200 text-xs">
          {freeShippingDiff === 0 ? (
            <span className="text-green-700 font-semibold">
              🎉 Congrats! You have unlocked FREE Delivery.
            </span>
          ) : (
            <span className="text-muted-foreground">
              Add <strong className="text-brand-saffron">{formatPrice(freeShippingDiff)}</strong> more for FREE delivery
            </span>
          )}
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-muted-foreground">
              <ShoppingBag className="w-12 h-12 text-brand-cream-400 mb-3" />
              <p className="text-sm font-semibold text-brand-dark">Your cart is empty</p>
              <p className="text-xs mt-1">Explore our authentic Mangalorean delicacies!</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-brand-saffron text-white text-xs font-semibold rounded-lg hover:bg-brand-saffron-600 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <CartItem
                key={`${item.productId}-${item.variantId || "default"}`}
                item={item}
              />
            ))
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-4 border-t border-brand-cream-300 bg-brand-cream-50 space-y-3">
            <div className="flex items-center justify-between text-sm font-bold text-brand-dark">
              <span>Subtotal</span>
              <span className="text-brand-saffron text-base">{formatPrice(subtotal)}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 px-3 border border-brand-cream-400 bg-white text-brand-dark hover:bg-brand-cream-100 rounded-lg text-xs font-semibold transition-colors"
              >
                View Full Cart
              </Link>
              <Link
                href="/checkout"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
              >
                Checkout <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
