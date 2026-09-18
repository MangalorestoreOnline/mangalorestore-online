import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export interface NavCategory {
  title: string;
  slug: string;
  subcategories?: {
    title: string;
    slug: string;
    items?: { title: string; slug: string }[];
  }[];
}

export const MAIN_NAV_CATEGORIES: NavCategory[] = [
  {
    title: "Sweets & Desserts",
    slug: "sweets-and-desserts",
    subcategories: [
      {
        title: "Traditional Sweets",
        slug: "sweets",
        items: [
          { title: "Mangalore Halwa", slug: "mangalore-halwa" },
          { title: "Wheat Halwa", slug: "wheat-halwa" },
          { title: "Banana Halwa", slug: "banana-halwa" },
        ],
      },
      {
        title: "Chocolates & Bites",
        slug: "chocolates",
        items: [
          { title: "Handcrafted Chocolates", slug: "handcrafted-chocolates" },
          { title: "Dry Fruit Bites", slug: "dry-fruit-bites" },
        ],
      },
    ],
  },
  {
    title: "Traditional Snacks",
    slug: "traditional-snacks",
    subcategories: [
      {
        title: "Crispy Delights",
        slug: "snacks",
        items: [
          { title: "Kori Rotti Wafers", slug: "kori-rotti" },
          { title: "Banana Chips (Pure Coconut Oil)", slug: "banana-chips" },
          { title: "Jackfruit Chips", slug: "jackfruit-chips" },
          { title: "Chakkuli & Murukku", slug: "chakkuli" },
        ],
      },
      {
        title: "Papads & Sandige",
        slug: "papads-and-sandige",
        items: [
          { title: "Jackfruit Papads", slug: "jackfruit-papads" },
          { title: "Rice Happala", slug: "rice-happala" },
          { title: "Urad Dal Papads", slug: "urad-dal-papads" },
        ],
      },
    ],
  },
  {
    title: "Health & Wellness",
    slug: "health-and-wellness",
    subcategories: [
      {
        title: "Keramruth Organics",
        slug: "keramruth-personal-care",
        items: [
          { title: "Virgin Coconut Oil", slug: "virgin-coconut-oil" },
          { title: "Organic Coconut Soap", slug: "coconut-soap" },
          { title: "Herbal Hair Oil", slug: "herbal-hair-oil" },
        ],
      },
      {
        title: "Ayurvedic & Staples",
        slug: "herbal-and-ayurvedic-products",
        items: [
          { title: "Kashaya Powder Mix", slug: "kashaya-mix" },
          { title: "Vishnu Pure Desi Ghee", slug: "pure-cow-ghee" },
          { title: "Organic Forest Honey", slug: "organic-honey" },
        ],
      },
    ],
  },
  {
    title: "Spices & Masalas",
    slug: "spices-and-masalas",
    subcategories: [
      {
        title: "Authentic Masala Blends",
        slug: "masala-powders",
        items: [
          { title: "Laveena Kundapur Chicken Masala", slug: "kundapur-chicken-masala" },
          { title: "Mangalorean Bafat Powder", slug: "bafat-powder" },
          { title: "Fish Curry Masala", slug: "fish-curry-masala" },
        ],
      },
      {
        title: "Pickles & Specials",
        slug: "pickles-and-thokku",
        items: [
          { title: "Appemidi Tender Mango", slug: "appemidi-mango-pickle" },
          { title: "Prawn & Fish Pickles", slug: "fish-pickles" },
        ],
      },
    ],
  },
  {
    title: "Mangalore Specials",
    slug: "mangalore-specials",
    subcategories: [
      {
        title: "Traditional Cookware",
        slug: "traditional-cookware",
        items: [
          { title: "Cast Iron Neer Dosa Tawa", slug: "cast-iron-neer-dosa-tawa" },
          { title: "Coconut Grater (Peradane)", slug: "coconut-grater" },
          { title: "Pavu & Seru Measure", slug: "pavu-and-seru" },
        ],
      },
    ],
  },
];

export function MegaMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-6 justify-center">
      <Link
        href="/"
        className="text-sm font-medium text-brand-dark hover:text-brand-saffron transition-colors py-3"
      >
        Home
      </Link>

      {MAIN_NAV_CATEGORIES.map((category) => (
        <div key={category.slug} className="relative group py-3">
          <Link
            href={`/categories/${category.slug}`}
            className="flex items-center gap-1 text-sm font-medium text-brand-dark group-hover:text-brand-saffron transition-colors"
          >
            {category.title}
            <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
          </Link>

          {/* Mega Menu Dropdown Panel */}
          {category.subcategories && (
            <div className="absolute top-full left-0 hidden group-hover:flex bg-white border border-brand-cream-300 rounded-xl shadow-xl p-6 min-w-[500px] z-50 animate-fadeIn">
              <div className="grid grid-cols-2 gap-8 w-full">
                {category.subcategories.map((sub) => (
                  <div key={sub.slug} className="space-y-3">
                    <Link
                      href={`/categories/${sub.slug}`}
                      className="font-heading font-semibold text-brand-saffron hover:underline text-sm block"
                    >
                      {sub.title}
                    </Link>
                    <ul className="space-y-2 text-xs">
                      {sub.items?.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/products/${item.slug}`}
                            className="text-muted-foreground hover:text-brand-dark transition-colors block py-0.5"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <Link
        href="/loyalty-program"
        className="text-sm font-medium text-brand-teal hover:text-brand-teal-600 transition-colors py-3"
      >
        Loyalty Club
      </Link>
    </nav>
  );
}
