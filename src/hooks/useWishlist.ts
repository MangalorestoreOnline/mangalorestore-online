"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types/product";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("mangalorestore-wishlist");
      if (stored) {
        setWishlist(JSON.parse(stored));
      }
    } catch {}
    setMounted(true);
  }, []);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const next = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      try {
        localStorage.setItem("mangalorestore-wishlist", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const isWishlisted = (productId: string) => {
    return wishlist.includes(productId);
  };

  return {
    wishlist: mounted ? wishlist : [],
    toggleWishlist,
    isWishlisted,
    count: mounted ? wishlist.length : 0,
  };
}
