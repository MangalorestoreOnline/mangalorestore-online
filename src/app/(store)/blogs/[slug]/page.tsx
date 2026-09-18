import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Calendar, User, ArrowLeft } from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const title = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: title },
        ]}
      />

      <article className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
            Coastal Recipe & Secrets
          </span>
          <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-brand-dark">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-muted-foreground border-b border-brand-cream-200 pb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-saffron" /> September 15, 2024
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-brand-saffron" /> MangaloreStore Kitchen Team
            </span>
          </div>
        </div>

        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-brand-cream-200">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80"
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="text-sm sm:text-base text-brand-dark leading-relaxed space-y-4">
          <p>
            The hallmark of Mangalorean cooking is the skillful balance of roasted Byadgi chillies, freshly grated coconut, coriander seeds, and a hint of tamarind. When paired with ultra-thin, crispy Kori Rotti, the resulting dish is an explosion of texture and savory depth.
          </p>
          <h2 className="text-xl font-heading font-bold text-brand-saffron">Ingredients You’ll Need:</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>500g Fresh Chicken or country chicken (Nati Kori)</li>
            <li>3 tablespoons of Laveena Kundapur Chicken Masala Powder</li>
            <li>1 cup freshly grated coconut</li>
            <li>1 large onion & 6 cloves of garlic</li>
            <li>1 packet of Authentic Mangalore Kori Rotti</li>
          </ul>
          <h2 className="text-xl font-heading font-bold text-brand-saffron">How to Serve:</h2>
          <p>
            Crush the crispy Kori Rotti gently on a shallow plate, pour piping hot chicken gassi generously all over the wafers, let it soak for 30 seconds, and savor every bite with a splash of pure desi ghee.
          </p>
        </div>

        <div className="pt-6 border-t border-brand-cream-200 flex items-center justify-between">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-saffron hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Articles
          </Link>
          <Link
            href="/products/authentic-mangalore-kori-rotti"
            className="px-4 py-2 bg-brand-saffron text-white rounded-lg text-xs font-semibold hover:bg-brand-saffron-600 transition-colors shadow-sm"
          >
            Buy Kori Rotti Now
          </Link>
        </div>
      </article>
    </div>
  );
}
