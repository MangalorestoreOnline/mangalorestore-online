"use client";

import { useEffect } from "react";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-brand-cream">
      <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-6">
        <span className="text-2xl font-bold">!</span>
      </div>
      <h2 className="text-2xl font-heading font-bold text-brand-dark mb-2">
        Something went wrong!
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        An unexpected error occurred while loading this page. Please try again.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 bg-brand-saffron text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-saffron-600 transition-colors shadow-sm"
        >
          <RefreshCw className="w-4 h-4" /> Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-brand-dark border border-brand-cream-300 px-6 py-3 rounded-lg font-medium hover:bg-brand-cream-100 transition-colors"
        >
          <Home className="w-4 h-4" /> Home
        </Link>
      </div>
    </div>
  );
}
