"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Heart, ShoppingBag, Search } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlist } from "@/hooks/useWishlist";

export function MobileBottomNav() {
  const pathname = usePathname();
  const itemCount = useCartStore((state) => state.getItemCount());
  const setIsCartOpen = useCartStore((state) => state.setIsOpen);
  const { count: wishlistCount } = useWishlist();

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Categories",
      href: "/categories/traditional-snacks",
      icon: Grid,
      isActive: pathname.startsWith("/categories"),
    },
    {
      label: "Search",
      href: "/search",
      icon: Search,
      isActive: pathname.startsWith("/search"),
    },
    {
      label: "Wishlist",
      href: "/wishlist",
      icon: Heart,
      badge: wishlistCount,
      isActive: pathname === "/wishlist",
    },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-cream-300 md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-2 py-1.5 safe-area-inset-bottom"
    >
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors relative ${
                item.isActive
                  ? "text-brand-saffron font-bold"
                  : "text-muted-foreground hover:text-brand-dark"
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 ${
                    item.isActive ? "stroke-[2.5]" : "stroke-[1.75]"
                  }`}
                />
                {Boolean(item.badge && item.badge > 0) && (
                  <span className="absolute -top-1.5 -right-2 flex items-center justify-center min-w-[16px] h-4 px-1 text-[10px] font-bold text-white bg-brand-teal rounded-full animate-in zoom-in-50">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Cart Trigger */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-lg text-muted-foreground hover:text-brand-dark transition-colors relative"
          aria-label="Open Cart Drawer"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 flex items-center justify-center min-w-[16px] h-4 px-1 text-[10px] font-bold text-white bg-brand-saffron rounded-full animate-bounce">
                {itemCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">
            Cart
          </span>
        </button>
      </div>
    </nav>
  );
}
