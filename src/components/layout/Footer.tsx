import React from "react";
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
  return (
    <footer className="bg-brand-cream-200 border-t border-brand-cream-300 text-brand-dark pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Perks Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-brand-cream-300 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Truck className="w-8 h-8 text-brand-saffron shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-brand-dark">Free Delivery</h4>
              <p className="text-xs text-muted-foreground">Orders above ₹1999 across India</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="w-8 h-8 text-brand-teal shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-brand-dark">100% Authentic</h4>
              <p className="text-xs text-muted-foreground">Direct from coastal kitchens</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <CreditCard className="w-8 h-8 text-brand-saffron shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-brand-dark">Secure Payments</h4>
              <p className="text-xs text-muted-foreground">Razorpay UPI, Cards & Netbanking</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <HeartHandshake className="w-8 h-8 text-brand-teal shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-brand-dark">Dedicated Support</h4>
              <p className="text-xs text-muted-foreground">Quick WhatsApp assistance</p>
            </div>
          </div>
        </div>

        {/* Main 5-Column Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 space-y-4">
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
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-brand-saffron hover:text-white transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-brand-saffron hover:text-white transition-colors shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-brand-saffron hover:text-white transition-colors shadow-sm"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop by Category */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-brand-dark mb-3 uppercase tracking-wider">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/categories/sweets-and-desserts" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Sweets & Halwa
                </Link>
              </li>
              <li>
                <Link href="/categories/traditional-snacks" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Kori Rotti & Snacks
                </Link>
              </li>
              <li>
                <Link href="/categories/health-and-wellness" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link href="/categories/spices-and-masalas" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Spices & Masalas
                </Link>
              </li>
              <li>
                <Link href="/categories/pickles-and-thokku" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Pickles & Thokku
                </Link>
              </li>
              <li>
                <Link href="/categories/traditional-cookware" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Traditional Cookware
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: For Business */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-brand-dark mb-3 uppercase tracking-wider">
              For Business
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Brand Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Bulk & Corporate Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About Us */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-brand-dark mb-3 uppercase tracking-wider">
              About Us
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Recipes & Blog
                </Link>
              </li>
              <li>
                <Link href="/loyalty-program" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Loyalty Rewards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Customer Support & Policies */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-brand-dark mb-3 uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/account/orders" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns-and-refund-policy" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Returns & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-brand-saffron transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-cream-300 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {STORE_NAME}. All rights reserved.</p>
          <p className="text-[11px]">{STORE_CREDIT}</p>
        </div>
      </div>
    </footer>
  );
}
