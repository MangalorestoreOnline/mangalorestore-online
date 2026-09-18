"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { Plus, Search, Edit, Trash2, CheckCircle, XCircle } from "lucide-react";

const SAMPLE_ADMIN_PRODUCTS = [
  {
    id: "p1",
    name: "Authentic Mangalore Kori Rotti (500g)",
    sku: "MSO-KR-500",
    category: "Traditional Snacks",
    price: 160.0,
    stock: 150,
    isActive: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "p2",
    name: "Vishnu Premium Pure Desi Cow Ghee (500ml)",
    sku: "MSO-VG-500",
    category: "Health & Wellness",
    price: 499.0,
    stock: 80,
    isActive: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "p3",
    name: "Laveena Kundapur Chicken Masala (250g)",
    sku: "MSO-LM-250",
    category: "Spices & Masalas",
    price: 180.0,
    stock: 120,
    isActive: true,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "p4",
    name: "Traditional Cast Iron Neer Dosa Tawa",
    sku: "MSO-CW-NDT",
    category: "Traditional Cookware",
    price: 1250.0,
    stock: 2,
    isActive: true,
    image: "https://images.unsplash.com/photo-1584990347449-397ddc833d7b?auto=format&fit=crop&w=120&q=80",
  },
];

export default function AdminProductsPage() {
  const [search, setSearch] = useState("");

  const filtered = SAMPLE_ADMIN_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-slate-900">
            Products Catalog
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage your inventory, prices, variants and stock levels
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="px-4 py-2.5 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" /> Add New Product
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="relative max-w-sm w-full">
            <input
              type="text"
              placeholder="Search product name or SKU..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Total {filtered.length} products
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="py-3 px-2">Image</th>
                <th className="py-3 px-2">Product Name</th>
                <th className="py-3 px-2">SKU</th>
                <th className="py-3 px-2">Category</th>
                <th className="py-3 px-2">Price</th>
                <th className="py-3 px-2">Stock</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((prod) => (
                <tr key={prod.id} className="hover:bg-slate-50">
                  <td className="py-2.5 px-2">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-200">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="py-2.5 px-2 font-semibold text-slate-900 max-w-xs truncate">
                    {prod.name}
                  </td>
                  <td className="py-2.5 px-2 text-slate-500 font-mono text-[11px]">
                    {prod.sku}
                  </td>
                  <td className="py-2.5 px-2 text-slate-600">{prod.category}</td>
                  <td className="py-2.5 px-2 font-bold text-slate-900">
                    {formatPrice(prod.price)}
                  </td>
                  <td className="py-2.5 px-2">
                    <span
                      className={`font-semibold ${
                        prod.stock < 5 ? "text-red-600" : "text-slate-700"
                      }`}
                    >
                      {prod.stock} units
                    </span>
                  </td>
                  <td className="py-2.5 px-2">
                    {prod.isActive ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        <XCircle className="w-3 h-3" /> Inactive
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-2 text-right space-x-2">
                    <Link
                      href={`/admin/products/${prod.id}/edit`}
                      className="inline-block p-1.5 text-slate-500 hover:text-brand-saffron transition-colors"
                      aria-label="Edit product"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => alert("Delete confirmation dialog")}
                      className="p-1.5 text-slate-500 hover:text-red-600 transition-colors"
                      aria-label="Delete product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
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
