"use client";

import React, { useState } from "react";
import { Plus, Folder, ChevronRight, Edit2, Trash2 } from "lucide-react";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([
    {
      id: "c1",
      name: "Sweets & Desserts",
      slug: "sweets-and-desserts",
      count: 24,
      children: ["Traditional Sweets", "Chocolates & Halwa"],
    },
    {
      id: "c2",
      name: "Traditional Snacks",
      slug: "traditional-snacks",
      count: 85,
      children: ["Crispy Delights (Kori Rotti)", "Papads & Sandige"],
    },
    {
      id: "c3",
      name: "Health & Wellness",
      slug: "health-and-wellness",
      count: 140,
      children: ["Keramruth Organics", "Ayurvedic Kashaya & Honey"],
    },
    {
      id: "c4",
      name: "Spices & Masalas",
      slug: "spices-and-masalas",
      count: 62,
      children: ["Kundapur Masalas", "Pickles & Thokku"],
    },
    {
      id: "c5",
      name: "Traditional Cookware",
      slug: "traditional-cookware",
      count: 18,
      children: ["Cast Iron Tawas", "Coconut Scrapers"],
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-slate-900">
            Categories & Taxonomies
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Organize nested category tree up to 3 levels deep
          </p>
        </div>

        <button
          onClick={() => alert("Add category modal")}
          className="px-4 py-2.5 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
        <h2 className="font-heading font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
          Root Categories Tree
        </h2>

        <div className="divide-y divide-slate-100 text-xs">
          {categories.map((cat) => (
            <div key={cat.id} className="py-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Folder className="w-4 h-4 text-brand-saffron" />
                  <span>{cat.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">({cat.slug})</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">{cat.count} products</span>
                  <button className="p-1 hover:text-brand-saffron"><Edit2 className="w-3.5 h-3.5" /></button>
                  <button className="p-1 hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>

              {cat.children && (
                <div className="pl-6 space-y-1">
                  {cat.children.map((sub, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-slate-600">
                      <ChevronRight className="w-3 h-3 text-slate-400" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
