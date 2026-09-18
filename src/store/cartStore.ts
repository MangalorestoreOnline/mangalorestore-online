import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product, ProductVariant } from "@/types/product";
import { FREE_SHIPPING_THRESHOLD, FLAT_SHIPPING_RATE } from "@/lib/constants";

export interface CartItem {
  productId: string;
  variantId?: string | null;
  product: Product;
  variant?: ProductVariant | null;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
  couponCode: string | null;
  discountPercentage: number;
  discountAmount: number;
  isOpen: boolean;

  // Actions
  addItem: (product: Product, variant?: ProductVariant | null, quantity?: number) => void;
  removeItem: (productId: string, variantId?: string | null) => void;
  updateQuantity: (productId: string, variantId: string | null | undefined, quantity: number) => void;
  clearCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  applyCoupon: (code: string, discount: number, isPercentage: boolean) => void;
  removeCoupon: () => void;

  // Computations
  getItemCount: () => number;
  getSubtotal: () => number;
  getShippingAmount: () => number;
  getTotal: () => number;
  getFreeShippingDifference: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: null,
      discountPercentage: 0,
      discountAmount: 0,
      isOpen: false,

      addItem: (product, variant = null, quantity = 1) => {
        set((state) => {
          const effectivePrice = variant ? variant.price : product.base_price;
          const existingIndex = state.items.findIndex(
            (item) =>
              item.productId === product.id &&
              (item.variantId || null) === (variant?.id || null)
          );

          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingIndex].quantity += quantity;
            return { items: updatedItems, isOpen: true };
          }

          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                variantId: variant?.id || null,
                product,
                variant,
                quantity,
                price: effectivePrice,
              },
            ],
            isOpen: true,
          };
        });
      },

      removeItem: (productId, variantId = null) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.productId === productId &&
                (item.variantId || null) === (variantId || null)
              )
          ),
        }));
      },

      updateQuantity: (productId, variantId = null, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, variantId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) => {
            if (
              item.productId === productId &&
              (item.variantId || null) === (variantId || null)
            ) {
              return { ...item, quantity };
            }
            return item;
          }),
        }));
      },

      clearCart: () => set({ items: [], couponCode: null, discountPercentage: 0, discountAmount: 0 }),

      setIsOpen: (isOpen) => set({ isOpen }),

      applyCoupon: (code, discount, isPercentage) => {
        set((state) => {
          const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
          const computedDiscount = isPercentage ? (subtotal * discount) / 100 : discount;
          return {
            couponCode: code,
            discountPercentage: isPercentage ? discount : 0,
            discountAmount: Math.min(subtotal, computedDiscount),
          };
        });
      },

      removeCoupon: () => set({ couponCode: null, discountPercentage: 0, discountAmount: 0 }),

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },

      getShippingAmount: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD) {
          return 0;
        }
        return FLAT_SHIPPING_RATE;
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const shipping = get().getShippingAmount();
        const discount = get().discountAmount;
        return Math.max(0, subtotal - discount + shipping);
      },

      getFreeShippingDifference: () => {
        const subtotal = get().getSubtotal();
        return Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
      },
    }),
    {
      name: "mangalorestore-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
