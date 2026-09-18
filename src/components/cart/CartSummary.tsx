"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Tag, Truck } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

interface CartSummaryProps {
  onCheckoutClick?: () => void;
  showCheckoutButton?: boolean;
}

export function CartSummary({
  onCheckoutClick,
  showCheckoutButton = true,
}: CartSummaryProps) {
  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");

  const subtotal = useCartStore((state) => state.getSubtotal());
  const shipping = useCartStore((state) => state.getShippingAmount());
  const discount = useCartStore((state) => state.discountAmount);
  const total = useCartStore((state) => state.getTotal());
  const couponCode = useCartStore((state) => state.couponCode);
  const applyCoupon = useCartStore((state) => state.applyCoupon);
  const removeCoupon = useCartStore((state) => state.removeCoupon);
  const freeShippingDiff = useCartStore((state) => state.getFreeShippingDifference());

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError("");
    if (!couponInput.trim()) return;

    // Demo coupon support: MANGALORE10 for 10% off, FIRSTBUY for ₹100 off
    const code = couponInput.trim().toUpperCase();
    if (code === "MANGALORE10") {
      applyCoupon("MANGALORE10", 10, true);
      setCouponInput("");
    } else if (code === "FIRSTBUY") {
      applyCoupon("FIRSTBUY", 100, false);
      setCouponInput("");
    } else {
      setCouponError("Invalid coupon code");
    }
  };

  return (
    <div className="bg-white border border-brand-cream-300 rounded-xl p-5 space-y-4 shadow-sm">
      <h3 className="font-heading font-semibold text-base text-brand-dark pb-3 border-b border-brand-cream-300">
        Order Summary
      </h3>

      {/* Free Shipping Progress Indicator */}
      <div className="bg-brand-cream-100 p-3 rounded-lg border border-brand-cream-300">
        <div className="flex items-center gap-2 text-xs font-medium text-brand-dark mb-1.5">
          <Truck className="w-4 h-4 text-brand-saffron" />
          {freeShippingDiff === 0 ? (
            <span className="text-green-700 font-bold">🎉 You qualify for FREE Delivery!</span>
          ) : (
            <span>
              Add <strong className="text-brand-saffron">{formatPrice(freeShippingDiff)}</strong> more for FREE delivery
            </span>
          )}
        </div>
        <div className="w-full bg-brand-cream-300 h-2 rounded-full overflow-hidden">
          <div
            className="bg-brand-saffron h-full transition-all duration-500 rounded-full"
            style={{
              width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%`,
            }}
          />
        </div>
      </div>

      {/* Coupon Code Input */}
      <div className="space-y-1.5">
        {couponCode ? (
          <div className="flex items-center justify-between p-2.5 bg-green-50 border border-green-200 rounded-lg text-xs">
            <div className="flex items-center gap-1.5 text-green-800 font-semibold">
              <Tag className="w-3.5 h-3.5" /> Coupon: {couponCode}
            </div>
            <button
              onClick={removeCoupon}
              className="text-red-500 hover:text-red-700 font-medium ml-2"
            >
              Remove
            </button>
          </div>
        ) : (
          <form onSubmit={handleApplyCoupon} className="flex gap-2">
            <input
              type="text"
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
              placeholder="Coupon code (e.g. MANGALORE10)"
              className="flex-1 px-3 py-2 text-xs border border-brand-cream-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-brand-teal text-white text-xs font-semibold rounded-lg hover:bg-brand-teal-600 transition-colors"
            >
              Apply
            </button>
          </form>
        )}
        {couponError && <p className="text-[11px] text-red-500">{couponError}</p>}
      </div>

      {/* Financial Breakdown */}
      <div className="space-y-2 text-xs text-muted-foreground pt-2 border-t border-brand-cream-200">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-brand-dark font-medium">{formatPrice(subtotal)}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-700 font-medium">
            <span>Discount</span>
            <span>-{formatPrice(discount)}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>Delivery</span>
          <span className="text-brand-dark font-medium">
            {shipping === 0 ? (
              <span className="text-green-700 font-semibold">FREE</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>

        <div className="flex justify-between text-sm font-bold text-brand-dark pt-3 border-t border-brand-cream-300">
          <span>Total</span>
          <span className="text-brand-saffron text-base">{formatPrice(total)}</span>
        </div>
      </div>

      {/* Checkout Action */}
      {showCheckoutButton && (
        <div className="pt-2">
          {onCheckoutClick ? (
            <button
              onClick={onCheckoutClick}
              disabled={subtotal === 0}
              className="w-full flex items-center justify-center gap-2 bg-brand-saffron hover:bg-brand-saffron-600 disabled:opacity-50 text-white py-3 rounded-lg font-semibold text-sm transition-colors shadow-sm"
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link
              href="/checkout"
              className="w-full flex items-center justify-center gap-2 bg-brand-saffron hover:bg-brand-saffron-600 text-white py-3 rounded-lg font-semibold text-sm transition-colors shadow-sm"
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
