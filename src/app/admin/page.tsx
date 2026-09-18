"use client";

import React from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import {
  TrendingUp,
  ShoppingBag,
  Package,
  Users,
  AlertTriangle,
  ArrowUpRight,
  Plus,
} from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
            Dashboard Overview
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time sales, order fulfillment, and inventory monitoring
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/products/new"
            className="px-4 py-2.5 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4" /> Add Product
          </Link>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Revenue */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Revenue
            </span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-heading font-extrabold text-slate-900">
              {formatPrice(248650)}
            </h3>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">
              +18.4% from last month
            </p>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Orders
            </span>
            <div className="p-2 bg-orange-50 text-brand-saffron rounded-lg">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-heading font-extrabold text-slate-900">
              342
            </h3>
            <p className="text-[11px] text-slate-500 mt-1">
              12 pending dispatch
            </p>
          </div>
        </div>

        {/* Active Products */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Live Catalog
            </span>
            <div className="p-2 bg-teal-50 text-brand-teal rounded-lg">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-heading font-extrabold text-slate-900">
              4,120
            </h3>
            <p className="text-[11px] text-slate-500 mt-1">Across 32 categories</p>
          </div>
        </div>

        {/* Registered Customers */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Customers
            </span>
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-heading font-extrabold text-slate-900">
              5,280
            </h3>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">
              +140 new this week
            </p>
          </div>
        </div>
      </div>

      {/* Main Tables Row: Recent Orders + Low Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="font-heading font-bold text-base text-slate-900">
              Recent Orders
            </h2>
            <Link
              href="/admin/orders"
              className="text-xs font-semibold text-brand-saffron hover:underline flex items-center gap-1"
            >
              View All <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-100">
                  <th className="py-2.5">Order #</th>
                  <th className="py-2.5">Customer</th>
                  <th className="py-2.5">Status</th>
                  <th className="py-2.5 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 font-bold text-brand-saffron">MSO-2025-00142</td>
                  <td className="py-3">Priya Kulal (Mumbai)</td>
                  <td className="py-3">
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 text-right font-bold text-slate-900">{formatPrice(820)}</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 font-bold text-brand-saffron">MSO-2025-00141</td>
                  <td className="py-3">Anand Rao (Bengaluru)</td>
                  <td className="py-3">
                    <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Processing
                    </span>
                  </td>
                  <td className="py-3 text-right font-bold text-slate-900">{formatPrice(1980)}</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 font-bold text-brand-saffron">MSO-2025-00140</td>
                  <td className="py-3">Harshith (Kolkata)</td>
                  <td className="py-3">
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 text-right font-bold text-slate-900">{formatPrice(540)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-amber-600">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="font-heading font-bold text-base text-slate-900">
              Low Stock Alerts
            </h2>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-amber-50/60 border border-amber-200/60 rounded-xl flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-900">Cast Iron Neer Dosa Tawa</p>
                <p className="text-[11px] text-amber-700 font-semibold">Only 2 left in stock</p>
              </div>
              <Link
                href="/admin/products"
                className="px-2.5 py-1 bg-white border border-amber-300 rounded text-[11px] font-bold text-slate-800 hover:bg-amber-100"
              >
                Restock
              </Link>
            </div>

            <div className="p-3 bg-amber-50/60 border border-amber-200/60 rounded-xl flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-900">Keramruth Virgin Coconut Oil (1L)</p>
                <p className="text-[11px] text-amber-700 font-semibold">Only 4 left in stock</p>
              </div>
              <Link
                href="/admin/products"
                className="px-2.5 py-1 bg-white border border-amber-300 rounded text-[11px] font-bold text-slate-800 hover:bg-amber-100"
              >
                Restock
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
