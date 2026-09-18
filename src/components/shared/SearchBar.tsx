"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({
  placeholder = "Search spices, kori rotti, halwa, oils...",
  defaultValue = "",
  className = "",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (onSearch) {
      onSearch(query.trim());
    } else {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center w-full ${className}`}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 bg-white border border-brand-cream-300 rounded-full text-sm text-brand-dark placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-saffron/50 focus:border-brand-saffron transition-all shadow-sm"
      />
      <Search className="absolute left-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />

      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-10 text-muted-foreground hover:text-brand-dark p-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}

      <button
        type="submit"
        aria-label="Search"
        className="absolute right-1.5 bg-brand-saffron hover:bg-brand-saffron-600 text-white p-1.5 rounded-full transition-colors"
      >
        <Search className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}
