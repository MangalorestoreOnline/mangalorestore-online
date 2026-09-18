"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyState } from "@/components/shared/EmptyState";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Shopping Cart" },
        ]}
      />

      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark">
          Shopping Cart ({items.length})
        </h1>
        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs text-red-600 hover:underline font-semibold"
          >
            Clear All
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <EmptyState
          title="Your Cart is Empty"
          description="Looks like you haven't added any authentic Mangalorean delicacies yet."
          actionText="Start Shopping"
          actionHref="/"
          icon={<ShoppingBag className="w-8 h-8 text-brand-saffron" />}
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 bg-white border border-brand-cream-300 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="space-y-2">
              {items.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.variantId || "default"}`}
                  item={item}
                />
              ))}
            </div>

            <div className="pt-4 border-t border-brand-cream-200">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-saffron hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
