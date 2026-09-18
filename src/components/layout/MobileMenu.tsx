"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronRight, Phone, Mail, MessageCircle } from "lucide-react";
import { MAIN_NAV_CATEGORIES } from "./MegaMenu";
import { STORE_PHONE, STORE_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleCategory = (slug: string) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-xs bg-brand-cream h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-brand-cream-300 bg-white">
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-brand-saffron">
              MangaloreStore
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
              Coastal Flavors
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-brand-cream-200 text-brand-dark"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links List */}
        <div className="flex-1 py-4 px-3 space-y-1">
          <Link
            href="/"
            onClick={onClose}
            className="block px-3 py-2 text-sm font-medium text-brand-dark hover:bg-white rounded-lg transition-colors"
          >
            Home
          </Link>

          {MAIN_NAV_CATEGORIES.map((cat) => (
            <div key={cat.slug} className="space-y-1">
              <button
                onClick={() => toggleCategory(cat.slug)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-brand-dark hover:bg-white rounded-lg transition-colors text-left"
              >
                <span>{cat.title}</span>
                {expandedCategory === cat.slug ? (
                  <ChevronDown className="w-4 h-4 text-brand-saffron" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
              </button>

              {expandedCategory === cat.slug && cat.subcategories && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-white/70 rounded-lg">
                  {cat.subcategories.map((sub) => (
                    <div key={sub.slug} className="py-1">
                      <Link
                        href={`/categories/${sub.slug}`}
                        onClick={onClose}
                        className="text-xs font-semibold text-brand-saffron block py-1"
                      >
                        {sub.title}
                      </Link>
                      {sub.items?.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/products/${item.slug}`}
                          onClick={onClose}
                          className="text-xs text-muted-foreground hover:text-brand-dark block py-1 pl-2"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/loyalty-program"
            onClick={onClose}
            className="block px-3 py-2 text-sm font-medium text-brand-teal hover:bg-white rounded-lg transition-colors"
          >
            Loyalty Club
          </Link>
          <Link
            href="/about-us"
            onClick={onClose}
            className="block px-3 py-2 text-sm font-medium text-brand-dark hover:bg-white rounded-lg transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="block px-3 py-2 text-sm font-medium text-brand-dark hover:bg-white rounded-lg transition-colors"
          >
            Contact & Support
          </Link>
        </div>

        {/* Contact Footer */}
        <div className="p-4 border-t border-brand-cream-300 bg-white space-y-2 text-xs text-muted-foreground">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#25D366] font-medium"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Support
          </a>
          <a href={`tel:${STORE_PHONE}`} className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> {STORE_PHONE}
          </a>
          <a href={`mailto:${STORE_EMAIL}`} className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> {STORE_EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}
