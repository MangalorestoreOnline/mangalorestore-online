import React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { STORE_NAME, STORE_LOCATION } from "@/lib/constants";
import { Heart, Sparkles, Truck, ShieldCheck } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-saffron">
          Our Heritage & Story
        </span>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-dark">
          Bringing Mangalore’s Authentic Coastal Heart to Your Kitchen
        </h1>

        <div className="text-sm text-brand-dark leading-relaxed space-y-4">
          <p>
            Welcome to <strong>{STORE_NAME}</strong>, born out of a profound love for the rich culinary heritage, pure coastal coconut oils, fiery Byadgi-spiced curries, and nostalgic snacks of Mangalore (Tulunadu).
          </p>
          <p>
            Whether you are living in Bengaluru, Mumbai, Delhi, or abroad, we bridge the distance between your fond food memories and your dinner table. We work directly with generational coastal artisans, spice millers, and local women’s self-help groups in Mangalore, Udupi, and Kundapura.
          </p>
          <p>
            Every packet of Kori Rotti, jar of bilona cow ghee, bottle of cold-pressed virgin coconut oil, and traditional spice mix is prepared in small batches following heritage methods to preserve natural aroma and nutrients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-cream-200">
          <div className="p-4 bg-brand-cream-100 rounded-xl space-y-1">
            <Heart className="w-5 h-5 text-brand-saffron" />
            <h3 className="font-heading font-bold text-sm text-brand-dark">Generational Recipes</h3>
            <p className="text-xs text-muted-foreground">Authentic flavors uncompromised by industrial processing.</p>
          </div>
          <div className="p-4 bg-brand-cream-100 rounded-xl space-y-1">
            <ShieldCheck className="w-5 h-5 text-brand-teal" />
            <h3 className="font-heading font-bold text-sm text-brand-dark">Direct Coastal Sourcing</h3>
            <p className="text-xs text-muted-foreground">Empowering regional farmers and coastal producers.</p>
          </div>
          <div className="p-4 bg-brand-cream-100 rounded-xl space-y-1">
            <Truck className="w-5 h-5 text-brand-saffron" />
            <h3 className="font-heading font-bold text-sm text-brand-dark">Pan-India Delivery</h3>
            <p className="text-xs text-muted-foreground">Safe anti-breakage packaging delivered nationwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
