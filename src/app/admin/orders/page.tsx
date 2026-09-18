"use client";

import React, { useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Search, Download, Eye } from "lucide-react";

const MOCK_ADMIN_ORDERS = [
  {
    id: "o1",
    orderNumber: "MSO-2025-00142",
    customer: "Priya Kulal",
    email: "priya.k@example.com",
    city: "Mumbai, MH",
    date: "Sep 12, 2025",
    total: 820.0,
    paymentStatus: "paid",
    orderStatus: "delivered",
  },
  {
    id: "o2",
    orderNumber: "MSO-2025-00141",
    customer: "Anand Rao",
    email: "anand.r@example.com",
    city: "Bengaluru, KA",
    date: "Sep 12, 2025",
    total: 1980.0,
    paymentStatus: "paid",
    orderStatus: "processing",
  },
  {
    id: "o3",
    orderNumber: "MSO-2025-00140",
    customer: "Harshith",
    email: "harshith@example.com",
    city: "Kolkata, WB",
    date: "Sep 11, 2025",
    total: 540.0,
    paymentStatus: "paid",
    orderStatus: "shipped",
  },
];

export default function AdminOrdersPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-slate-900">
            Orders Management
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Track fulfillment, update tracking numbers, and view customer invoices
          </p>
        </div>

        <button
          onClick={() => alert("Exporting orders CSV...")}
          className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
        >
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative max-w-sm w-full">
            <input
              type="text"
              placeholder="Search order #, customer, email..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          <div className="flex items-center gap-2 text-xs">
            {["all", "pending", "processing", "shipped", "delivered"].map((st) => (
              <button
                key={st}
                onClick={() => setFilter(st)}
                className={`px-3 py-1.5 rounded-lg font-semibold capitalize transition-colors ${
                  filter === st
                    ? "bg-brand-saffron text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="py-3 px-2">Order #</th>
                <th className="py-3 px-2">Customer</th>
                <th className="py-3 px-2">Location</th>
                <th className="py-3 px-2">Date</th>
                <th className="py-3 px-2">Payment</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Total</th>
                <th className="py-3 px-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_ADMIN_ORDERS.map((ord) => (
                <tr key={ord.id} className="hover:bg-slate-50">
                  <td className="py-3 px-2 font-bold text-brand-saffron">
                    {ord.orderNumber}
                  </td>
                  <td className="py-3 px-2">
                    <p className="font-semibold text-slate-900">{ord.customer}</p>
                    <p className="text-[11px] text-slate-400">{ord.email}</p>
                  </td>
                  <td className="py-3 px-2 text-slate-600">{ord.city}</td>
                  <td className="py-3 px-2 text-slate-500">{ord.date}</td>
                  <td className="py-3 px-2">
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {ord.paymentStatus.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full capitalize">
                      {ord.orderStatus}
                    </span>
                  </td>
                  <td className="py-3 px-2 font-bold text-slate-900">
                    {formatPrice(ord.total)}
                  </td>
                  <td className="py-3 px-2 text-right">
                    <Link
                      href={`/admin/orders/${ord.id}`}
                      className="p-1.5 text-slate-500 hover:text-brand-saffron inline-block"
                      aria-label="View Order"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
