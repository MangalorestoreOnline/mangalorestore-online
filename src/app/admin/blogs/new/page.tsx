"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { slugify } from "@/lib/utils";

export default function NewBlogPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setSlug(slugify(e.target.value));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Blog post published!");
  };

  return (
    <form onSubmit={handleSave} className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin/blogs"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
          </Link>
          <h1 className="text-2xl font-heading font-bold text-slate-900">
            Write New Recipe or Article
          </h1>
        </div>

        <button
          type="submit"
          className="px-5 py-2.5 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
        >
          <Save className="w-4 h-4" /> Publish Post
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div>
          <label className="block font-semibold mb-1 text-slate-700">Article Title *</label>
          <input
            type="text"
            required
            value={title}
            onChange={handleTitle}
            placeholder="e.g. Traditional Mangalorean Banana Halwa Secret"
            className="w-full p-2.5 border border-slate-200 rounded-lg text-sm font-semibold"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-slate-700">Slug</label>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full p-2.5 border border-slate-200 rounded-lg font-mono"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-slate-700">Short Summary</label>
          <textarea
            rows={2}
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="A brief snippet displayed in search and card grids..."
            className="w-full p-2.5 border border-slate-200 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-slate-700">Full Article Content</label>
          <textarea
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your article in markdown or rich text..."
            className="w-full p-2.5 border border-slate-200 rounded-lg"
          />
        </div>
      </div>
    </form>
  );
}
