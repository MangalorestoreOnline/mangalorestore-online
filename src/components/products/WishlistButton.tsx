"use client";

import React from "react";
import { Heart } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";

interface WishlistButtonProps {
  productId: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function WishlistButton({
  productId,
  className = "",
  size = "md",
}: WishlistButtonProps) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const active = isWishlisted(productId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(productId);
  };

  const sizeClasses = {
    sm: "w-7 h-7 p-1.5",
    md: "w-8 h-8 p-2",
    lg: "w-10 h-10 p-2.5",
  };

  return (
    <button
      onClick={handleClick}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      className={`rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm border border-brand-cream-300 shadow-sm hover:scale-110 active:scale-95 transition-all ${
        active ? "text-red-500" : "text-gray-400 hover:text-red-500"
      } ${sizeClasses[size]} ${className}`}
    >
      <Heart
        className="w-full h-full"
        fill={active ? "currentColor" : "none"}
      />
    </button>
  );
}
