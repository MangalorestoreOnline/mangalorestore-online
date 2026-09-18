"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, UploadCloud } from "lucide-react";
import { slugify } from "@/lib/utils";

export default function NewProductPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [price, setPrice] = useState("");
  const [comparePrice, setComparePrice] = useState("");
  const [stock, setStock] = useState("50");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("traditional-snacks");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isVariable, setIsVariable] = useState(false);
  const [variants, setVariants] = useState([
    { name: "500g Pack", price: "160", comparePrice: "190", stock: "50", sku: "" },
  ]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);
    setSlug(slugify(val));
  };

  const addVariant = () => {
    setVariants([...variants, { name: "", price: "", comparePrice: "", stock: "0", sku: "" }]);
  };

  const removeVariant = (index: number) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Product saved successfully!");
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
            Add New Product
          </h1>
        </div>

        <button
          type="submit"
          className="px-5 py-2.5 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
        >
          <Save className="w-4 h-4" /> Save Product
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <h2 className="font-heading font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
          Basic Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-slate-700">Product Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={handleNameChange}
              placeholder="e.g. Mangalore Wheat Halwa"
              className="w-full p-2.5 border border-slate-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-slate-700">URL Slug *</label>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg font-mono"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-slate-700">Category *</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg bg-white"
            >
              <option value="sweets-and-desserts">Sweets & Desserts</option>
              <option value="traditional-snacks">Traditional Snacks</option>
              <option value="health-and-wellness">Health & Wellness</option>
              <option value="spices-and-masalas">Spices & Masalas</option>
              <option value="pickles-and-thokku">Pickles & Thokku</option>
              <option value="traditional-cookware">Traditional Cookware</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-slate-700">SKU Code</label>
            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              placeholder="e.g. MSO-WH-500"
              className="w-full p-2.5 border border-slate-200 rounded-lg font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1 text-slate-700">Short Summary</label>
          <input
            type="text"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
            placeholder="Brief 1-line description for cards"
            className="w-full p-2.5 border border-slate-200 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-slate-700">Detailed Description</label>
          <textarea
            rows={5}
            value={fullDesc}
            onChange={(e) => setFullDesc(e.target.value)}
            placeholder="Heritage details, ingredients, cooking/storage tips..."
            className="w-full p-2.5 border border-slate-200 rounded-lg"
          />
        </div>
      </div>

      {/* Pricing & Stock */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h2 className="font-heading font-bold text-sm text-slate-900">
            Pricing & Variants
          </h2>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isVariable}
              onChange={(e) => setIsVariable(e.target.checked)}
              className="text-brand-saffron rounded"
            />
            <span className="font-semibold text-slate-700">This product has multiple size/weight variants</span>
          </label>
        </div>

        {!isVariable ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold mb-1 text-slate-700">Base Selling Price (₹) *</label>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="160"
                className="w-full p-2.5 border border-slate-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-slate-700">Compare MRP (₹)</label>
              <input
                type="number"
                value={comparePrice}
                onChange={(e) => setComparePrice(e.target.value)}
                placeholder="190"
                className="w-full p-2.5 border border-slate-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-slate-700">Stock Quantity *</label>
              <input
                type="number"
                required
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="50"
                className="w-full p-2.5 border border-slate-200 rounded-lg"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {variants.map((v, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Variant (e.g. 500g / 1kg)"
                  value={v.name}
                  onChange={(e) => {
                    const next = [...variants];
                    next[i].name = e.target.value;
                    setVariants(next);
                  }}
                  className="flex-1 p-2 border border-slate-200 rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Price (₹)"
                  value={v.price}
                  onChange={(e) => {
                    const next = [...variants];
                    next[i].price = e.target.value;
                    setVariants(next);
                  }}
                  className="w-24 p-2 border border-slate-200 rounded-lg"
                />
                <input
                  type="number"
                  placeholder="MRP (₹)"
                  value={v.comparePrice}
                  onChange={(e) => {
                    const next = [...variants];
                    next[i].comparePrice = e.target.value;
                    setVariants(next);
                  }}
                  className="w-24 p-2 border border-slate-200 rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Stock"
                  value={v.stock}
                  onChange={(e) => {
                    const next = [...variants];
                    next[i].stock = e.target.value;
                    setVariants(next);
                  }}
                  className="w-20 p-2 border border-slate-200 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeVariant(i)}
                  className="p-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addVariant}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-semibold flex items-center gap-1 text-[11px]"
            >
              <Plus className="w-3.5 h-3.5" /> Add Variant Row
            </button>
          </div>
        )}
      </div>

      {/* Media Upload */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3 text-xs">
        <h2 className="font-heading font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
          Product Images (Supabase Storage)
        </h2>
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-brand-saffron transition-colors cursor-pointer bg-slate-50">
          <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p className="font-semibold text-slate-700">Drag & drop product images here, or browse files</p>
          <p className="text-[11px] text-slate-400 mt-1">Supports JPG, PNG, WEBP up to 5MB</p>
        </div>
      </div>
    </form>
  );
}
