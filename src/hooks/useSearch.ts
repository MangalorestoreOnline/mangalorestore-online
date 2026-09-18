"use client";

import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product";

export function useSearch(query: string) {
  return useQuery<Product[]>({
    queryKey: ["search", query],
    queryFn: async () => {
      if (!query || query.trim().length < 2) return [];
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error("Search failed");
      }
      const json = await res.json();
      return json.data || [];
    },
    enabled: query.trim().length >= 2,
  });
}
