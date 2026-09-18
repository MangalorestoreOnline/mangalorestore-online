import React from "react";
import Link from "next/link";
import { STORE_NAME } from "@/lib/constants";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 text-center">
        <Link href="/">
          <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-saffron tracking-tight">
            MangaloreStore<span className="text-brand-teal">.Online</span>
          </span>
        </Link>
        <p className="text-xs text-muted-foreground mt-1">
          Authentic Regional Flavors & Wellness
        </p>
      </div>

      <div className="w-full max-w-md bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-md">
        {children}
      </div>

      <div className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {STORE_NAME}. All rights reserved.
      </div>
    </div>
  );
}
