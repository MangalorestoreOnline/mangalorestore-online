"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, MapPin, Award, LogOut } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { CartDrawer } from "@/components/cart/CartDrawer";

const NAV_ITEMS = [
  { label: "My Profile", href: "/account/profile", icon: User },
  { label: "Order History", href: "/account/orders", icon: Package },
  { label: "Saved Addresses", href: "/account/address", icon: MapPin },
  { label: "Loyalty Rewards", href: "/loyalty-program", icon: Award },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, profile, signOut } = useAuth();

  return (
    <div className="flex min-h-screen flex-col bg-brand-cream">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-4">
            <div className="bg-white border border-brand-cream-300 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-brand-cream-200">
                <div className="w-12 h-12 rounded-full bg-brand-saffron/10 text-brand-saffron flex items-center justify-center font-bold text-lg">
                  {user?.email?.[0].toUpperCase() || "U"}
                </div>
                <div className="overflow-hidden">
                  <p className="font-heading font-bold text-sm text-brand-dark truncate">
                    {profile?.full_name || "Customer"}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {user?.email}
                  </p>
                </div>
              </div>

              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        isActive
                          ? "bg-brand-saffron text-white shadow-sm"
                          : "text-brand-dark hover:bg-brand-cream-100"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}

                <button
                  onClick={() => signOut()}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors text-left"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Account Area */}
          <section className="md:col-span-3">{children}</section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartDrawer />
    </div>
  );
}
