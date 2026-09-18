import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-brand-cream">
      <div className="w-20 h-20 rounded-full bg-brand-saffron/10 text-brand-saffron flex items-center justify-center mb-6">
        <span className="text-4xl font-heading font-bold">404</span>
      </div>
      <h1 className="text-3xl font-heading font-bold text-brand-dark mb-3">
        Page Not Found
      </h1>
      <p className="text-muted-foreground max-w-md mb-8">
        We could not find the page you are looking for. It might have been moved or doesn’t exist anymore.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-saffron text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-saffron-600 transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" /> Return to Homepage
        </Link>
        <Link
          href="/search"
          className="inline-flex items-center gap-2 bg-white text-brand-dark border border-brand-cream-300 px-6 py-3 rounded-lg font-medium hover:bg-brand-cream-100 transition-colors"
        >
          <Search className="w-4 h-4" /> Search Products
        </Link>
      </div>
    </div>
  );
}
