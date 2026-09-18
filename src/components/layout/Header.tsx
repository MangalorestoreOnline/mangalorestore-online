"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Heart,
  User,
  Menu,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SearchBar } from "@/components/shared/SearchBar";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { useCartStore } from "@/store/cartStore";
import { useWishlist } from "@/hooks/useWishlist";
import { useAuth } from "@/hooks/useAuth";
import { SOCIAL_LINKS, STORE_PHONE, STORE_EMAIL } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());
  const setIsCartOpen = useCartStore((state) => state.setIsOpen);
  const { count: wishlistCount } = useWishlist();
  const { user, isAdmin } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-brand-cream-300 shadow-sm">
      {/* 1. TOP ANNOUNCEMENT / UTILITY BAR */}
      <div className="bg-brand-saffron text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_PHONE}`}
              className="hidden md:flex items-center gap-1 hover:text-brand-cream-200 transition-colors"
            >
              <Phone className="w-3 h-3" /> {STORE_PHONE}
            </a>
            <a
              href={`mailto:${STORE_EMAIL}`}
              className="hidden lg:flex items-center gap-1 hover:text-brand-cream-200 transition-colors"
            >
              <Mail className="w-3 h-3" /> {STORE_EMAIL}
            </a>
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3 text-yellow-300" /> Free Delivery on Orders Above ₹1999 Across India!
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-cream-200 transition-colors font-semibold"
            >
              WhatsApp Us
            </a>
            <div className="hidden sm:flex items-center gap-2 border-l border-white/30 pl-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:scale-110 transition-transform"
              >
                <Facebook className="w-3 h-3" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:scale-110 transition-transform"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href={SOCIAL_LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="hover:scale-110 transition-transform"
              >
                <MapPin className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button + Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 text-brand-dark hover:bg-brand-cream rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link href="/" className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-brand-saffron tracking-tight">
                MangaloreStore<span className="text-brand-teal">.Online</span>
              </span>
              <span className="hidden sm:block text-[9px] uppercase tracking-widest text-muted-foreground font-medium">
                Authentic Spices & Regional Flavors
              </span>
            </Link>
          </div>

          {/* Search Bar (Center on Desktop) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-6">
            <SearchBar />
          </div>

          {/* User Controls: Wishlist, Account, Cart */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative p-2 text-brand-dark hover:text-brand-saffron transition-colors"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-brand-teal rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Account / Admin */}
            {user ? (
              <Link
                href={isAdmin ? "/admin" : "/account/profile"}
                className="flex items-center gap-1.5 p-2 text-brand-dark hover:text-brand-saffron transition-colors text-xs font-medium"
              >
                <div className="w-7 h-7 rounded-full bg-brand-saffron/10 text-brand-saffron flex items-center justify-center font-bold">
                  {user.email?.[0].toUpperCase() || "U"}
                </div>
                <span className="hidden sm:inline">
                  {isAdmin ? "Admin" : "Account"}
                </span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-1.5 p-2 text-brand-dark hover:text-brand-saffron transition-colors text-xs font-medium"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            )}

            {/* Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View Cart"
              className="flex items-center gap-2 bg-brand-saffron hover:bg-brand-saffron-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors shadow-sm"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-brand-saffron bg-white rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-semibold">Cart</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Row */}
        <div className="md:hidden mt-3">
          <SearchBar />
        </div>
      </div>

      {/* 3. NAVIGATION BAR (Desktop MegaMenu) */}
      <div className="hidden lg:block border-t border-brand-cream-300 bg-brand-cream-50">
        <div className="max-w-7xl mx-auto px-4">
          <MegaMenu />
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
