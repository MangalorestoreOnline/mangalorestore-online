import React from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, CheckCircle2, Truck, Package, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const orderNumber = "MSO-2025-00142";

  return (
    <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-cream-200">
        <div>
          <Link
            href="/account/orders"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-brand-dark mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Orders
          </Link>
          <h1 className="text-xl font-heading font-bold text-brand-dark">
            Order #{orderNumber}
          </h1>
          <p className="text-xs text-muted-foreground">Placed on Sep 12, 2025 • Paid via Razorpay</p>
        </div>

        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full w-fit">
          Delivered
        </span>
      </div>

      {/* Status Timeline */}
      <div className="grid grid-cols-4 gap-2 text-center py-4 bg-brand-cream-50 rounded-xl">
        <div className="space-y-1">
          <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
          <p className="text-[11px] font-bold text-brand-dark">Confirmed</p>
        </div>
        <div className="space-y-1">
          <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
          <p className="text-[11px] font-bold text-brand-dark">Packed</p>
        </div>
        <div className="space-y-1">
          <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
          <p className="text-[11px] font-bold text-brand-dark">Shipped</p>
        </div>
        <div className="space-y-1">
          <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
          <p className="text-[11px] font-bold text-green-700">Delivered</p>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-3">
        <h2 className="text-sm font-heading font-bold text-brand-dark">Ordered Items</h2>
        <div className="divide-y divide-brand-cream-200 border-y border-brand-cream-200 text-xs">
          <div className="py-3 flex justify-between items-center">
            <div>
              <p className="font-semibold text-brand-dark">Authentic Mangalore Kori Rotti (500g)</p>
              <p className="text-muted-foreground text-[11px]">Qty: 2 × ₹160.00</p>
            </div>
            <p className="font-bold text-brand-dark">{formatPrice(320)}</p>
          </div>
          <div className="py-3 flex justify-between items-center">
            <div>
              <p className="font-semibold text-brand-dark">Vishnu Pure Desi Cow Ghee (500ml)</p>
              <p className="text-muted-foreground text-[11px]">Qty: 1 × ₹499.00</p>
            </div>
            <p className="font-bold text-brand-dark">{formatPrice(499)}</p>
          </div>
        </div>
      </div>

      {/* Addresses and Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
        <div className="p-4 bg-brand-cream-100 rounded-xl space-y-1">
          <p className="font-bold text-brand-dark">Shipping Address</p>
          <p className="text-muted-foreground">Priya Kulal</p>
          <p className="text-muted-foreground">Flat 402, Sea Breeze Apts, Bandra West, Mumbai, Maharashtra - 400050</p>
          <p className="text-muted-foreground">Phone: +91 9820123456</p>
        </div>

        <div className="p-4 bg-brand-cream-100 rounded-xl space-y-1.5">
          <p className="font-bold text-brand-dark mb-2">Payment Breakdown</p>
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>{formatPrice(819)}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Shipping</span>
            <span className="text-green-700 font-semibold">FREE</span>
          </div>
          <div className="flex justify-between font-bold text-brand-dark pt-2 border-t border-brand-cream-300">
            <span>Total Paid</span>
            <span className="text-brand-saffron">{formatPrice(819)}</span>
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between">
        <a
          href={`${SOCIAL_LINKS.whatsapp}?text=Hi,%20I%20have%20a%20query%20regarding%20Order%20${orderNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-semibold hover:underline"
        >
          <MessageCircle className="w-4 h-4" /> Need Help with this Order? WhatsApp Us
        </a>
      </div>
    </div>
  );
}
