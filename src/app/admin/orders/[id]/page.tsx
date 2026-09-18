"use client";

import React, { useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, Save, Mail, CheckCircle, Truck } from "lucide-react";

export default function AdminOrderDetailPage({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState("shipped");
  const [trackingNumber, setTrackingNumber] = useState("DEL-9842104928");
  const [courier, setCourier] = useState("Delhivery");

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order status & tracking updated! Customer notified via email.");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin/orders"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Orders
          </Link>
          <h1 className="text-2xl font-heading font-bold text-slate-900">
            Order #MSO-2025-00142
          </h1>
          <p className="text-xs text-slate-500">Customer: Priya Kulal • Placed on Sep 12, 2025</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert("Sending status email via Resend...")}
            className="px-3.5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50 flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> Email Customer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Details */}
        <div className="md:col-span-2 space-y-6">
          {/* Status Update Form */}
          <form onSubmit={handleUpdate} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
            <h2 className="font-heading font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
              Update Fulfillment Status
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-semibold mb-1 text-slate-700">Order Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full p-2 border border-slate-200 rounded-lg bg-white"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700">Courier Name</label>
                <input
                  type="text"
                  value={courier}
                  onChange={(e) => setCourier(e.target.value)}
                  placeholder="e.g. Delhivery / Bluedart"
                  className="w-full p-2 border border-slate-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700">AWB / Tracking Number</label>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="AWB Number"
                  className="w-full p-2 border border-slate-200 rounded-lg font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Save className="w-3.5 h-3.5" /> Update Status & Notify
            </button>
          </form>

          {/* Items Table */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3 text-xs">
            <h2 className="font-heading font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
              Ordered Items
            </h2>
            <div className="divide-y divide-slate-100">
              <div className="py-2.5 flex justify-between">
                <div>
                  <p className="font-bold text-slate-900">Authentic Mangalore Kori Rotti (500g)</p>
                  <p className="text-slate-400 text-[11px]">SKU: MSO-KR-500 • Qty: 2</p>
                </div>
                <p className="font-bold text-slate-900">{formatPrice(320)}</p>
              </div>
              <div className="py-2.5 flex justify-between">
                <div>
                  <p className="font-bold text-slate-900">Vishnu Pure Desi Cow Ghee (500ml)</p>
                  <p className="text-slate-400 text-[11px]">SKU: MSO-VG-500 • Qty: 1</p>
                </div>
                <p className="font-bold text-slate-900">{formatPrice(499)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer / Delivery Info */}
        <div className="space-y-4 text-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
            <h3 className="font-heading font-bold text-sm text-slate-900">Customer Details</h3>
            <p className="font-semibold text-slate-900">Priya Kulal</p>
            <p className="text-slate-500">priya.k@example.com</p>
            <p className="text-slate-500">+91 9820123456</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
            <h3 className="font-heading font-bold text-sm text-slate-900">Delivery Address</h3>
            <p className="text-slate-600">Flat 402, Sea Breeze Apts, Bandra West, Mumbai, Maharashtra - 400050</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
            <h3 className="font-heading font-bold text-sm text-slate-900">Payment Gateway</h3>
            <p className="text-slate-600">Razorpay Payment ID: <span className="font-mono text-[11px]">pay_P19xKa92K</span></p>
            <p className="text-slate-600">Total: <strong className="text-slate-900">{formatPrice(819)}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
