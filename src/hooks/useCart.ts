"use client";

import { useCartStore } from "@/store/cartStore";

export function useCart() {
  const store = useCartStore();

  return {
    items: store.items,
    isOpen: store.isOpen,
    couponCode: store.couponCode,
    discountAmount: store.discountAmount,
    addItem: store.addItem,
    removeItem: store.removeItem,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    setIsOpen: store.setIsOpen,
    applyCoupon: store.applyCoupon,
    removeCoupon: store.removeCoupon,
    itemCount: store.getItemCount(),
    subtotal: store.getSubtotal(),
    shippingAmount: store.getShippingAmount(),
    total: store.getTotal(),
    freeShippingDifference: store.getFreeShippingDifference(),
  };
}
