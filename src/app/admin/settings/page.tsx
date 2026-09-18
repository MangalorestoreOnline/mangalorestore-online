"use client";

import React, { useState } from "react";
import { Save, Check } from "lucide-react";
import {
  STORE_NAME,
  STORE_EMAIL,
  STORE_PHONE,
  STORE_WHATSAPP,
  FREE_SHIPPING_THRESHOLD,
  FLAT_SHIPPING_RATE,
} from "@/lib/constants";

export default function AdminSettingsPage() {
  const [storeName, setStoreName] = useState(STORE_NAME);
  const [email, setEmail] = useState(STORE_EMAIL);
  const [phone, setPhone] = useState(STORE_PHONE);
  const [whatsapp, setWhatsapp] = useState(STORE_WHATSAPP);
  const [freeThreshold, setFreeThreshold] = useState(FREE_SHIPPING_THRESHOLD.toString());
  const [shippingRate, setShippingRate] = useState(FLAT_SHIPPING_RATE.toString());
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <form onSubmit={handleSave} className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-slate-900">
            Store Settings & Integrations
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure contact info, shipping limits, payment keys, and transactional emails
          </p>
        </div>

        <button
          type="submit"
          className="px-5 py-2.5 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
        >
          {saved ? (
            <>
              <Check className="w-4 h-4" /> Saved!
            </>
          ) : (
            <>
              <Save className="w-4 h-4" /> Save Configuration
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="font-heading font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
            Store Profile & Contact
          </h2>

          <div>
            <label className="block font-semibold mb-1 text-slate-700">Store Name</label>
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-700">Support Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-700">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-700">WhatsApp Number</label>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
          </div>
        </div>

        {/* Shipping Rates */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="font-heading font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
            Shipping & Delivery Policy
          </h2>

          <div>
            <label className="block font-semibold mb-1 text-slate-700">
              Free Shipping Order Threshold (₹)
            </label>
            <input
              type="number"
              value={freeThreshold}
              onChange={(e) => setFreeThreshold(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
            <span className="text-[10px] text-slate-400 mt-1 block">
              Cart subtotals equal or greater will receive ₹0 delivery fee.
            </span>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-700">
              Standard Flat Shipping Rate (₹)
            </label>
            <input
              type="number"
              value={shippingRate}
              onChange={(e) => setShippingRate(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
            <span className="text-[10px] text-slate-400 mt-1 block">
              Charged on orders below free shipping threshold.
            </span>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <h3 className="font-bold text-slate-800">Connected Services</h3>
            <p className="text-slate-500 text-[11px]">Database: <strong className="text-emerald-700">Supabase (PostgreSQL)</strong></p>
            <p className="text-slate-500 text-[11px]">Payment: <strong className="text-emerald-700">Razorpay (Test / Live)</strong></p>
            <p className="text-slate-500 text-[11px]">Email Dispatch: <strong className="text-emerald-700">Resend API</strong></p>
          </div>
        </div>
      </div>
    </form>
  );
}
