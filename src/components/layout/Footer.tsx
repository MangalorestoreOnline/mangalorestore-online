"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  CreditCard,
  Truck,
  HeartHandshake,
  ChevronDown,
} from "lucide-react";
import {
  STORE_NAME,
  STORE_EMAIL,
  STORE_PHONE,
  STORE_LOCATION,
  STORE_CREDIT,
  SOCIAL_LINKS,
} from "@/lib/constants";

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer className="bg-brand-cream-200 border-t border-brand-cream-300 text-brand-dark pt-8 sm:pt-12 pb-12 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Perks Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pb-8 sm:pb-12 border-b border-brand-cream-300">
          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 bg-white/60 sm:bg-transparent rounded-xl">
            <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-brand-saffron shrink-0" />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-brand-dark">Free Delivery</h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Orders ₹1999+ in India</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 bg-white/60 sm:bg-transparent rounded-xl">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-brand-teal shrink-0" />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-brand-dark">100% Authentic</h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Pure coastal recipes</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 bg-white/60 sm:bg-transparent rounded-xl">
            <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-brand-saffron shrink-0" />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-brand-dark">Safe UPI & Cards</h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Razorpay encrypted</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 bg-white/60 sm:bg-transparent rounded-xl">
            <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8 text-brand-teal shrink-0" />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-brand-dark">WhatsApp Help</h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Quick assistance</p>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 py-6 sm:py-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading font-extrabold text-xl text-brand-saffron tracking-tight">
                MangaloreStore<span className="text-brand-teal">.Online</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bringing the authentic aroma of Mangalore right to your kitchen. Pure masalas, crispy kori rotti, virgin coconut oils, and regional snacks.
            </p>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                {STORE_LOCATION}
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                <a href={`tel:${STORE_PHONE}`} className="hover:text-brand-saffron">
                  {STORE_PHONE}
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                <a href={`mailto:${STORE_EMAIL}`} className="hover:text-brand-saffron">
                  {STORE_EMAIL}
                </a>
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-brand-saffron hover:text-white transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-brand-saffron hover:text-white transition-colors shadow-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-brand-saffron hover:text-white transition-colors shadow-xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop by Category */}
          <div className="border-t sm:border-t-0 border-brand-cream-300 pt-3 sm:pt-0">
            <button
              onClick={() => toggleSection("categories")}
              className="w-full flex items-center justify-between sm:cursor-default"
            >
              <h4 className="font-heading font-semibold text-xs sm:text-sm text-brand-dark uppercase tracking-wider">
                Shop Categories
              </h4>
              <ChevronDown
                className={`w-4 h-4 sm:hidden text-brand-dark transition-transform ${
                  openSections.categories ? "rotate-180 text-brand-saffron" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-xs pt-2.5 sm:pt-3 ${
                openSections.categories ? "block" : "hidden sm:block"
              }`}
            >
              <li>
                <Link href="/categories/sweets-and-desserts" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Sweets & Halwa
                </Link>
              </li>
              <li>
                <Link href="/categories/traditional-snacks" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Kori Rotti & Snacks
                </Link>
              </li>
              <li>
                <Link href="/categories/health-and-wellness" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link href="/categories/spices-and-masalas" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Spices & Masalas
                </Link>
              </li>
              <li>
                <Link href="/categories/pickles-and-thokku" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Pickles & Thokku
                </Link>
              </li>
              <li>
                <Link href="/categories/traditional-cookware" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Traditional Cookware
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: For Business */}
          <div className="border-t sm:border-t-0 border-brand-cream-300 pt-3 sm:pt-0">
            <button
              onClick={() => toggleSection("business")}
              className="w-full flex items-center justify-between sm:cursor-default"
            >
              <h4 className="font-heading font-semibold text-xs sm:text-sm text-brand-dark uppercase tracking-wider">
                For Business
              </h4>
              <ChevronDown
                className={`w-4 h-4 sm:hidden text-brand-dark transition-transform ${
                  openSections.business ? "rotate-180 text-brand-saffron" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-xs pt-2.5 sm:pt-3 ${
                openSections.business ? "block" : "hidden sm:block"
              }`}
            >
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Brand Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Bulk & Corporate Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About Us */}
          <div className="border-t sm:border-t-0 border-brand-cream-300 pt-3 sm:pt-0">
            <button
              onClick={() => toggleSection("about")}
              className="w-full flex items-center justify-between sm:cursor-default"
            >
              <h4 className="font-heading font-semibold text-xs sm:text-sm text-brand-dark uppercase tracking-wider">
                About Us
              </h4>
              <ChevronDown
                className={`w-4 h-4 sm:hidden text-brand-dark transition-transform ${
                  openSections.about ? "rotate-180 text-brand-saffron" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-xs pt-2.5 sm:pt-3 ${
                openSections.about ? "block" : "hidden sm:block"
              }`}
            >
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Recipes & Blog
                </Link>
              </li>
              <li>
                <Link href="/loyalty-program" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Loyalty Rewards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Customer Support & Policies */}
          <div className="border-t sm:border-t-0 border-brand-cream-300 pt-3 sm:pt-0">
            <button
              onClick={() => toggleSection("support")}
              className="w-full flex items-center justify-between sm:cursor-default"
            >
              <h4 className="font-heading font-semibold text-xs sm:text-sm text-brand-dark uppercase tracking-wider">
                Customer Support
              </h4>
              <ChevronDown
                className={`w-4 h-4 sm:hidden text-brand-dark transition-transform ${
                  openSections.support ? "rotate-180 text-brand-saffron" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-xs pt-2.5 sm:pt-3 ${
                openSections.support ? "block" : "hidden sm:block"
              }`}
            >
              <li>
                <Link href="/account/orders" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns-and-refund-policy" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Returns & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-brand-saffron transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-brand-cream-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {STORE_NAME}. All rights reserved.</p>
          <p className="text-[11px]">{STORE_CREDIT}</p>
        </div>
      </div>
    </footer>
  );
}
