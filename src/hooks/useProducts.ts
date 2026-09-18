"use client";

import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product";

interface UseProductsParams {
  categorySlug?: string;
  search?: string;
  sort?: string;
  page?: number;
  limit?: number;
  featured?: boolean;
}

export function useProducts(params?: UseProductsParams) {
  return useQuery<{ products: Product[]; total: number }>({
    queryKey: ["products", params],
    queryFn: async () => {
      const searchParams = new URLSearchParams();
      if (params?.categorySlug) searchParams.set("category", params.categorySlug);
      if (params?.search) searchParams.set("q", params.search);
      if (params?.sort) searchParams.set("sort", params.sort);
      if (params?.page) searchParams.set("page", params.page.toString());
      if (params?.limit) searchParams.set("limit", params.limit.toString());
      if (params?.featured) searchParams.set("featured", "true");

      const res = await fetch(`/api/products?${searchParams.toString()}`);
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    },
  });
}
