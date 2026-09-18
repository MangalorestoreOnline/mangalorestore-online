import React from "react";
import Link from "next/link";
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { PromoBanner } from "@/components/home/PromoBanner";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ProductCard } from "@/components/products/ProductCard";
import { Product } from "@/types/product";

// Sample initial products (or fetched from Supabase / SSR)
const SAMPLE_FEATURED_PRODUCTS: Product[] = [
  {
    id: "p1111111-1111-1111-1111-111111111111",
    name: "Authentic Mangalore Kori Rotti (Crispy Rice Wafers)",
    slug: "authentic-mangalore-kori-rotti",
    description: "Ultra-thin, feather-light, crispy South Indian rice wafers.",
    short_description: "Feather-light crispy rice wafers for chicken gassi.",
    base_price: 160,
    compare_price: 190,
    is_variable: false,
    stock_quantity: 100,
    is_in_stock: true,
    is_featured: true,
    is_active: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        alt: "Kori Rotti",
      },
    ],
    tags: ["kori rotti", "bestseller"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "p2222222-2222-2222-2222-222222222222",
    name: "Vishnu Premium Pure Desi Cow Ghee (500ml)",
    slug: "vishnu-premium-pure-desi-cow-ghee",
    description: "Traditional bilona churned aromatic desi cow ghee.",
    short_description: "Rich aroma and golden granular texture.",
    base_price: 499,
    compare_price: 550,
    is_variable: true,
    stock_quantity: 50,
    is_in_stock: true,
    is_featured: true,
    is_active: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        alt: "Vishnu Ghee",
      },
    ],
    tags: ["ghee", "pure"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "p3333333-3333-3333-3333-333333333333",
    name: "Keramruth Cold Pressed Virgin Coconut Oil (500ml)",
    slug: "keramruth-cold-pressed-virgin-coconut-oil",
    description: "100% pure cold-pressed coastal virgin coconut oil.",
    short_description: "Chemical-free wellness oil for skin and hair.",
    base_price: 299,
    compare_price: 350,
    is_variable: true,
    stock_quantity: 80,
    is_in_stock: true,
    is_featured: true,
    is_active: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
        alt: "Keramruth Oil",
      },
    ],
    tags: ["keramruth", "coconut oil"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "p4444444-4444-4444-4444-444444444444",
    name: "Laveena Kundapur Chicken Masala Powder (250g)",
    slug: "laveena-kundapur-chicken-masala",
    description: "Secret heritage spice blend handcrafted with Byadgi chillies.",
    short_description: "Aromatic masala blend for Kundapur style curries.",
    base_price: 180,
    compare_price: 210,
    is_variable: false,
    stock_quantity: 120,
    is_in_stock: true,
    is_featured: true,
    is_active: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
        alt: "Laveena Masala",
      },
    ],
    tags: ["masala", "spices"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const SAMPLE_COOKWARE: Product[] = [
  {
    id: "p5555555-5555-5555-5555-555555555555",
    name: "Traditional Heavy Cast Iron Neer Dosa Tawa",
    slug: "cast-iron-neer-dosa-tawa",
    description: "Pre-seasoned heavy cast iron pan for paper thin Neer Dosas.",
    short_description: "Pre-seasoned tawa for lace-thin Neer Dosas.",
    base_price: 1250,
    compare_price: 1499,
    is_variable: false,
    stock_quantity: 20,
    is_in_stock: true,
    is_featured: false,
    is_active: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1584990347449-397ddc833d7b?auto=format&fit=crop&w=600&q=80",
        alt: "Cast Iron Tawa",
      },
    ],
    tags: ["cookware", "cast iron"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "p6666666-6666-6666-6666-666666666666",
    name: "Traditional Wooden Coconut Scraper (Peradane)",
    slug: "traditional-wooden-coconut-scraper",
    description: "Classic foldable wooden seat with stainless steel scraper blade.",
    short_description: "Heritage kitchen scraper for freshly grated coconut.",
    base_price: 799,
    compare_price: 950,
    is_variable: false,
    stock_quantity: 15,
    is_in_stock: true,
    is_featured: false,
    is_active: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=600&q=80",
        alt: "Coconut Scraper",
      },
    ],
    tags: ["cookware", "peradane"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export default function HomePage() {
  return (
    <div className="space-y-6 sm:space-y-10">
      {/* 1. Hero Carousel */}
      <HeroBanner />

      {/* 2. Popular Categories Grid */}
      <CategoryGrid />

      {/* 3. Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-dark">
              Coastal Bestsellers & Favorites
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Top-rated authentic delights loved by thousands across India
            </p>
          </div>
          <Link
            href="/categories/traditional-snacks"
            className="text-xs sm:text-sm font-semibold text-brand-saffron hover:underline"
          >
            Explore All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {SAMPLE_FEATURED_PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 4. Promo Banner */}
      <PromoBanner />

      {/* 5. Traditional Cookware Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-dark">
              Traditional Mangalorean Cookware
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Heavy cast-iron tawas, brass items, and heritage coconut scrapers
            </p>
          </div>
          <Link
            href="/categories/traditional-cookware"
            className="text-xs sm:text-sm font-semibold text-brand-saffron hover:underline"
          >
            View Cookware →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {SAMPLE_COOKWARE.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 6. Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* 7. YouTube Video Section */}
      <section className="py-8 sm:py-12 bg-white border-y border-brand-cream-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-teal">
              See How It’s Made
            </span>
            <h2 className="text-xl sm:text-3xl font-heading font-bold text-brand-dark mt-1">
              Watch Our Authentic Coastal Recipes & Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md bg-black">
              <iframe
                src="https://www.youtube.com/embed/BiWWJWjlcr0"
                title="MangaloreStore Video 1"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md bg-black">
              <iframe
                src="https://www.youtube.com/embed/QfbBSYi4uIU"
                title="MangaloreStore Video 2"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Trust Badges Row */}
      <TrustBadges />
    </div>
  );
}
