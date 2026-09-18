"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, UploadCloud } from "lucide-react";

export default function EditProductPage({ params }: { params: { id: string } }) {
  const [name, setName] = useState("Authentic Mangalore Kori Rotti (500g)");
  const [slug, setSlug] = useState("authentic-mangalore-kori-rotti");
  const [price, setPrice] = useState("160");
  const [comparePrice, setComparePrice] = useState("190");
  const [stock, setStock] = useState("150");
  const [sku, setSku] = useState("MSO-KR-500");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Product updated successfully!");
  };

  return (
    <form onSubmit={handleSave} className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Products
          </Link>
          <h1 className="text-2xl font-heading font-bold text-slate-900">
            Edit Product: {name}
          </h1>
        </div>

        <button
          type="submit"
          className="px-5 py-2.5 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
        >
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <h2 className="font-heading font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
          Basic Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-slate-700">Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-slate-700">Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg font-mono"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-slate-700">Price (₹)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-slate-700">MRP Compare (₹)</label>
            <input
              type="number"
              value={comparePrice}
              onChange={(e) => setComparePrice(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-slate-700">Stock Units</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
