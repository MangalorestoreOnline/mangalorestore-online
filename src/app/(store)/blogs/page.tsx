import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Calendar, User, ArrowRight } from "lucide-react";

const SAMPLE_BLOGS = [
  {
    title: "How to Make the Perfect Authentic Kundapur Chicken Curry (Kori Gassi)",
    slug: "authentic-kundapur-chicken-curry-recipe",
    excerpt: "Learn the traditional coconut and Byadgi chilli paste secret passed down through generations in coastal Tulunadu.",
    author: "MangaloreStore Kitchen",
    date: "September 15, 2024",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Art of Kori Rotti: Why It’s South India’s Most Crisp Culinary Wonder",
    slug: "the-art-of-mangalore-kori-rotti",
    excerpt: "Discover how pure rice batter is transformed into wafer-thin sheets that absorb coastal gravies like a dream.",
    author: "Sneha Shetty",
    date: "September 10, 2024",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cold-Pressed Virgin Coconut Oil: 5 Traditional Ayurvedic Uses for Hair & Health",
    slug: "cold-pressed-virgin-coconut-oil-benefits",
    excerpt: "Why coastal families in Mangalore have used pure unrefined coconut oil for glowing skin and strong hair for centuries.",
    author: "Dr. Acharya",
    date: "September 02, 2024",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Coastal Stories & Recipes" },
        ]}
      />

      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-10 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-saffron">
          Stories, Culture & Recipes
        </span>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mt-1">
          Mangalore Food Journal
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl">
          Authentic recipe guides, regional heritage stories, wellness tips, and culinary secrets straight from the coast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SAMPLE_BLOGS.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white border border-brand-cream-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video w-full bg-brand-cream-200">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {blog.author}
                  </span>
                </div>
                <h2 className="font-heading font-bold text-base text-brand-dark hover:text-brand-saffron transition-colors line-clamp-2">
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className="text-xs text-muted-foreground line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href={`/blogs/${blog.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-saffron hover:underline"
              >
                Read Recipe <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
