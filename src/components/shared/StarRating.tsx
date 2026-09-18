import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = false,
}: StarRatingProps) {
  const starSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center text-amber-500">
        {Array.from({ length: maxRating }).map((_, i) => (
          <Star
            key={i}
            className={`${starSizes[size]} ${
              i < Math.round(rating)
                ? "fill-amber-400 text-amber-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      {showNumber && (
        <span className="text-xs font-semibold text-brand-dark ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
