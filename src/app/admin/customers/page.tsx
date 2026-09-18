"use client";

import React, { useState } from "react";
import { formatPrice } from "@/lib/utils";
import { Search, UserCheck, Mail } from "lucide-react";

const SAMPLE_CUSTOMERS = [
  {
    id: "c1",
    name: "Priya Kulal",
    email: "priya.k@example.com",
    phone: "+91 9820123456",
    ordersCount: 4,
    totalSpent: 3450.0,
    loyaltyPoints: 345,
    joined: "Aug 2024",
  },
  {
    id: "c2",
    name: "Vajresh Kumar",
    email: "vajresh.k@example.com",
    phone: "+91 9980112233",
    ordersCount: 6,
    totalSpent: 5600.0,
    loyaltyPoints: 560,
    joined: "May 2024",
  },
  {
    id: "c3",
    name: "Harshith",
    email: "harshith@example.com",
    phone: "+91 9740556677",
    ordersCount: 2,
    totalSpent: 1280.0,
    loyaltyPoints: 128,
    joined: "Sep 2024",
  },
];

export default function AdminCustomersPage() {
  const [search, setSearch] = useState("");

  const filtered = SAMPLE_CUSTOMERS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold text-slate-900">
          Customers Directory
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          View customer lifetime value, order history, and loyalty balances
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="relative max-w-sm w-full">
          <input
            type="text"
            placeholder="Search by customer name, email, phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="py-3 px-2">Customer</th>
                <th className="py-3 px-2">Phone</th>
                <th className="py-3 px-2">Total Orders</th>
                <th className="py-3 px-2">Lifetime Spent</th>
                <th className="py-3 px-2">Loyalty Points</th>
                <th className="py-3 px-2">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((cust) => (
                <tr key={cust.id} className="hover:bg-slate-50">
                  <td className="py-3 px-2">
                    <p className="font-bold text-slate-900">{cust.name}</p>
                    <p className="text-slate-400 text-[11px]">{cust.email}</p>
                  </td>
                  <td className="py-3 px-2 text-slate-600">{cust.phone}</td>
                  <td className="py-3 px-2 font-semibold text-slate-900">{cust.ordersCount} orders</td>
                  <td className="py-3 px-2 font-bold text-brand-teal">{formatPrice(cust.totalSpent)}</td>
                  <td className="py-3 px-2 font-bold text-brand-saffron">{cust.loyaltyPoints} pts</td>
                  <td className="py-3 px-2 text-slate-400">{cust.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
