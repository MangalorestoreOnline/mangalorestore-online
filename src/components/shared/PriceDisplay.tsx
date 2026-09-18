import React from "react";
import { formatPrice, calculateDiscount } from "@/lib/utils";

interface PriceDisplayProps {
  price: number;
  comparePrice?: number | null;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function PriceDisplay({
  price,
  comparePrice,
  className = "",
  size = "md",
}: PriceDisplayProps) {
  const discount = calculateDiscount(price, comparePrice);

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base font-semibold",
    lg: "text-xl font-bold",
    xl: "text-2xl sm:text-3xl font-bold",
  };

  return (
    <div className={`flex items-baseline flex-wrap gap-2 ${className}`}>
      <span className={`${sizeClasses[size]} text-brand-dark`}>
        {formatPrice(price)}
      </span>

      {comparePrice && comparePrice > price && (
        <>
          <span className="text-xs sm:text-sm line-through text-muted-foreground">
            {formatPrice(comparePrice)}
          </span>
          <span className="text-xs font-semibold text-green-700 bg-green-50 px-1.5 py-0.5 rounded">
            {discount}% OFF
          </span>
        </>
      )}
    </div>
  );
}
