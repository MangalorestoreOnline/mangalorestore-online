"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { StarRating } from "@/components/shared/StarRating";
import { WishlistButton } from "@/components/products/WishlistButton";
import { useCartStore } from "@/store/cartStore";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  MessageCircle,
  Plus,
  Minus,
  Check,
  ShoppingBag,
} from "lucide-react";
import { Product, ProductVariant } from "@/types/product";
import { SOCIAL_LINKS } from "@/lib/constants";

// Sample mock product for detailed view
const SAMPLE_PRODUCT: Product = {
  id: "p1111111-1111-1111-1111-111111111111",
  name: "Authentic Mangalore Kori Rotti (Crispy Rice Wafers)",
  slug: "authentic-mangalore-kori-rotti",
  description: `Experience the real heritage flavor of coastal Karnataka with our ultra-thin, crispy Kori Rotti. 
Handmade by coastal masters using pure high-grade rice, these wafers remain shatteringly crisp and dissolve delightfully when drenched in rich chicken gassi, coconut gravy, or spicy vegetable sambar.

- 100% Gluten-free & Natural
- Made with pure coastal rice & water
- Zero artificial preservatives or colors
- Shipped in secure protective packaging to prevent breakage`,
  short_description: "Ultra-thin, feather-light crispy rice wafers made using pure coastal rice.",
  sku: "MSO-KR-500",
  category_id: "c2222222-2222-2222-2222-222222222222",
  category: {
    id: "c2222222-2222-2222-2222-222222222222",
    name: "Traditional Snacks",
    slug: "traditional-snacks",
  },
  base_price: 160,
  compare_price: 190,
  is_variable: true,
  stock_quantity: 100,
  is_in_stock: true,
  is_featured: true,
  is_active: true,
  weight_grams: 500,
  images: [
    {
      url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      alt: "Kori Rotti Pack",
    },
    {
      url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
      alt: "Kori Rotti with Gravy",
    },
  ],
  tags: ["kori rotti", "snacks", "mangalorean"],
  variants: [
    {
      id: "v1",
      product_id: "p1111111-1111-1111-1111-111111111111",
      variant_name: "500g Pack",
      variant_type: "Size",
      price: 160,
      compare_price: 190,
      stock_quantity: 60,
      sku: "MSO-KR-500G",
    },
    {
      id: "v2",
      product_id: "p1111111-1111-1111-1111-111111111111",
      variant_name: "1kg Family Pack",
      variant_type: "Size",
      price: 310,
      compare_price: 360,
      stock_quantity: 40,
      sku: "MSO-KR-1KG",
    },
  ],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    SAMPLE_PRODUCT.variants ? SAMPLE_PRODUCT.variants[0] : null
  );
  const [selectedImage, setSelectedImage] = useState<string>(
    SAMPLE_PRODUCT.images[0]?.url || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const currentPrice = selectedVariant
    ? selectedVariant.price
    : SAMPLE_PRODUCT.base_price;
  const currentComparePrice = selectedVariant
    ? selectedVariant.compare_price
    : SAMPLE_PRODUCT.compare_price;

  const handleAddToCart = () => {
    addItem(SAMPLE_PRODUCT, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: SAMPLE_PRODUCT.category?.name || "Products",
            href: `/categories/${SAMPLE_PRODUCT.category?.slug || "traditional-snacks"}`,
          },
          { label: SAMPLE_PRODUCT.name },
        ]}
      />

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-10 shadow-sm">
        {/* Left: Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-brand-cream-100 border border-brand-cream-300">
            <Image
              src={selectedImage}
              alt={SAMPLE_PRODUCT.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute top-3 right-3 z-10">
              <WishlistButton productId={SAMPLE_PRODUCT.id} size="md" />
            </div>
          </div>

          {/* Thumbnails */}
          {SAMPLE_PRODUCT.images.length > 1 && (
            <div className="flex items-center gap-3">
              {SAMPLE_PRODUCT.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img.url)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === img.url
                      ? "border-brand-saffron ring-2 ring-brand-saffron/20"
                      : "border-brand-cream-300 hover:border-brand-cream-400"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt || "Thumbnail"}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Purchase Form */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              {SAMPLE_PRODUCT.category?.name}
            </span>

            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark">
              {SAMPLE_PRODUCT.name}
            </h1>

            {/* Ratings */}
            <div className="flex items-center gap-3">
              <StarRating rating={5} showNumber size="sm" />
              <span className="text-xs text-muted-foreground">
                (24 verified reviews)
              </span>
            </div>

            {/* Price */}
            <div className="pt-2">
              <PriceDisplay
                price={currentPrice}
                comparePrice={currentComparePrice}
                size="xl"
              />
              <p className="text-[11px] text-muted-foreground mt-1">
                Inclusive of all taxes. Free shipping on orders above ₹1999.
              </p>
            </div>

            {/* Variants Selector */}
            {SAMPLE_PRODUCT.variants && SAMPLE_PRODUCT.variants.length > 0 && (
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Select Pack Size:
                </label>
                <div className="flex flex-wrap gap-2">
                  {SAMPLE_PRODUCT.variants.map((v) => {
                    const isSelected = selectedVariant?.id === v.id;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                          isSelected
                            ? "bg-brand-saffron text-white border-brand-saffron shadow-sm"
                            : "bg-white text-brand-dark border-brand-cream-400 hover:border-brand-saffron"
                        }`}
                      >
                        {v.variant_name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector + Add To Cart */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Quantity:
                </span>
                <div className="flex items-center border border-brand-cream-400 rounded-lg bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-brand-cream-100 text-brand-dark rounded-l-lg transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-bold text-brand-dark">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-brand-cream-100 text-brand-dark rounded-r-lg transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    added
                      ? "bg-green-600 text-white shadow-md scale-95"
                      : "bg-brand-saffron hover:bg-brand-saffron-600 active:scale-95 text-white shadow-lg shadow-brand-saffron/30"
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </>
                  )}
                </button>

                <a
                  href={`${SOCIAL_LINKS.whatsapp}?text=Hi,%20I%20have%20a%20question%20about%20${encodeURIComponent(
                    SAMPLE_PRODUCT.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-brand-cream-400 bg-white text-brand-dark hover:bg-brand-cream-100 rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" /> Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-brand-cream-200 text-center">
              <div className="p-3 bg-brand-cream-100 rounded-lg">
                <Truck className="w-5 h-5 text-brand-saffron mx-auto mb-1" />
                <p className="text-[11px] font-bold text-brand-dark">Fast Dispatch</p>
                <p className="text-[10px] text-muted-foreground">Within 24-48 Hours</p>
              </div>
              <div className="p-3 bg-brand-cream-100 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-brand-teal mx-auto mb-1" />
                <p className="text-[11px] font-bold text-brand-dark">100% Pure</p>
                <p className="text-[10px] text-muted-foreground">Direct Coastal Source</p>
              </div>
              <div className="p-3 bg-brand-cream-100 rounded-lg">
                <RotateCcw className="w-5 h-5 text-brand-saffron mx-auto mb-1" />
                <p className="text-[11px] font-bold text-brand-dark">Safe Transit</p>
                <p className="text-[10px] text-muted-foreground">Anti-Breakage Pack</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Full Details */}
      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-10 shadow-sm space-y-4">
        <h2 className="text-lg font-heading font-bold text-brand-dark pb-3 border-b border-brand-cream-200">
          Product Details & Highlights
        </h2>
        <div className="text-xs sm:text-sm text-brand-dark leading-relaxed whitespace-pre-line">
          {SAMPLE_PRODUCT.description}
        </div>
      </div>
    </div>
  );
}
