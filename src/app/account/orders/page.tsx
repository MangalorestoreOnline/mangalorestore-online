"use client";

import React from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Package, ArrowRight, Eye } from "lucide-react";
import { EmptyState } from "@/components/shared/EmptyState";

const MOCK_ORDERS = [
  {
    id: "o1",
    order_number: "MSO-2025-00142",
    date: "Sep 12, 2025",
    total: 820.0,
    status: "delivered",
    items_count: 3,
  },
  {
    id: "o2",
    order_number: "MSO-2025-00089",
    date: "Aug 28, 2025",
    total: 2150.0,
    status: "shipped",
    items_count: 5,
  },
];

export default function OrdersPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Delivered</span>;
      case "shipped":
        return <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Shipped</span>;
      case "confirmed":
        return <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Confirmed</span>;
      case "cancelled":
        return <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Cancelled</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Pending</span>;
    }
  };

  return (
    <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      <h1 className="text-xl font-heading font-bold text-brand-dark pb-2 border-b border-brand-cream-200">
        My Orders ({MOCK_ORDERS.length})
      </h1>

      {MOCK_ORDERS.length === 0 ? (
        <EmptyState
          title="No Orders Placed Yet"
          description="You have not placed any orders with us yet."
          actionText="Browse Store"
          actionHref="/"
          icon={<Package className="w-8 h-8 text-brand-saffron" />}
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-brand-cream-300 text-muted-foreground uppercase text-[10px] tracking-wider">
                <th className="py-3 px-2">Order #</th>
                <th className="py-3 px-2">Date</th>
                <th className="py-3 px-2">Items</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Total</th>
                <th className="py-3 px-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-cream-200">
              {MOCK_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-brand-cream-50">
                  <td className="py-3.5 px-2 font-bold text-brand-saffron">
                    {order.order_number}
                  </td>
                  <td className="py-3.5 px-2 text-muted-foreground">{order.date}</td>
                  <td className="py-3.5 px-2">{order.items_count} items</td>
                  <td className="py-3.5 px-2">{getStatusBadge(order.status)}</td>
                  <td className="py-3.5 px-2 font-bold text-brand-dark">{formatPrice(order.total)}</td>
                  <td className="py-3.5 px-2 text-right">
                    <Link
                      href={`/account/orders/${order.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-teal hover:underline"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
