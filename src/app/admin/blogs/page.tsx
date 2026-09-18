"use client";

import React from "react";
import Link from "next/link";
import { Plus, Edit2, Trash2, Eye } from "lucide-react";

export default function AdminBlogsPage() {
  const blogs = [
    {
      id: "b1",
      title: "How to Make the Perfect Authentic Kundapur Chicken Curry (Kori Gassi)",
      slug: "authentic-kundapur-chicken-curry-recipe",
      author: "Kitchen Team",
      publishedAt: "Sep 15, 2024",
      isPublished: true,
    },
    {
      id: "b2",
      title: "The Art of Kori Rotti: Why It’s South India’s Most Crisp Culinary Wonder",
      slug: "the-art-of-mangalore-kori-rotti",
      author: "Sneha Shetty",
      publishedAt: "Sep 10, 2024",
      isPublished: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-slate-900">
            Blog & Recipe Posts
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Publish heritage recipes and coastal culinary stories for SEO
          </p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="px-4 py-2.5 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" /> New Article
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="py-3 px-2">Article Title</th>
                <th className="py-3 px-2">Author</th>
                <th className="py-3 px-2">Date</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {blogs.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50">
                  <td className="py-3 px-2 font-bold text-slate-900">{b.title}</td>
                  <td className="py-3 px-2 text-slate-500">{b.author}</td>
                  <td className="py-3 px-2 text-slate-500">{b.publishedAt}</td>
                  <td className="py-3 px-2">
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Published
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right space-x-2">
                    <Link href={`/blogs/${b.slug}`} target="_blank" className="p-1 hover:text-brand-saffron inline-block">
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                    <button className="p-1 hover:text-brand-saffron"><Edit2 className="w-3.5 h-3.5" /></button>
                    <button className="p-1 hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
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
