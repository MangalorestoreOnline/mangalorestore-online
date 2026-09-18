"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    title: "Nature's Finest Selection",
    subtitle: "Hand-Picked Coastal Dry Fruits & Cashews",
    description: "Premium graded Mangalorean cashews, dry fruits, and healthy snacks delivered right to your home.",
    ctaText: "Shop Dry Fruits",
    ctaLink: "/categories/traditional-snacks",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=80",
    badge: "100% Coastal Pure",
  },
  {
    id: 2,
    title: "Crispy Kori Rotti Delight",
    subtitle: "Ultra-Thin, Authentic South Indian Wafers",
    description: "The classic coastal favorite! Enjoy paper-thin crispy rice wafers paired with aromatic spicy chicken gassi.",
    ctaText: "Get My Kori Rotti",
    ctaLink: "/products/authentic-mangalore-kori-rotti",
    imageUrl: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1600&q=80",
    badge: "Bestseller #1",
  },
  {
    id: 3,
    title: "Pure Keramruth Organics",
    subtitle: "Cold-Pressed Virgin Coconut Oils & Wellness",
    description: "Nourish your skin and hair with unrefined, chemical-free cold pressed virgin coconut oils and herbal soaps.",
    ctaText: "Explore Keramruth",
    ctaLink: "/categories/health-and-wellness",
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1600&q=80",
    badge: "Ayurvedic Care",
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] bg-brand-dark overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 transition-all duration-700">
        <Image
          src={slide.imageUrl}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl text-white space-y-4 sm:space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-saffron/90 text-white rounded-full text-xs font-bold tracking-wide uppercase shadow">
            {slide.badge}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
            {slide.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-200 line-clamp-2 sm:line-clamp-none font-sans">
            {slide.description}
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              href={slide.ctaLink}
              className="inline-flex items-center gap-2 bg-brand-saffron hover:bg-brand-saffron-600 text-white px-6 py-3.5 rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-brand-saffron/50 active:scale-95"
            >
              {slide.ctaText} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-brand-saffron flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-brand-saffron flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-brand-saffron"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
