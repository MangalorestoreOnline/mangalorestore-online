import React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import {
  STORE_NAME,
  STORE_EMAIL,
  STORE_PHONE,
  STORE_LOCATION,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Get in Touch
            </span>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mt-1">
              We’d Love to Hear From You
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Have questions about your order, bulk corporate requirements, or looking for a specific Mangalorean specialty? Reach out anytime!
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 bg-green-50 text-green-900 border border-green-200 rounded-xl font-semibold hover:bg-green-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
              <span>Instant Support on WhatsApp: +91 7975928765</span>
            </a>

            <div className="flex items-center gap-3 p-3.5 bg-brand-cream-100 rounded-xl text-brand-dark">
              <Phone className="w-4 h-4 text-brand-saffron shrink-0" />
              <span>{STORE_PHONE}</span>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-brand-cream-100 rounded-xl text-brand-dark">
              <Mail className="w-4 h-4 text-brand-saffron shrink-0" />
              <span>{STORE_EMAIL}</span>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-brand-cream-100 rounded-xl text-brand-dark">
              <MapPin className="w-4 h-4 text-brand-saffron shrink-0" />
              <span>{STORE_LOCATION}</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg font-heading font-bold text-brand-dark pb-2 border-b border-brand-cream-200">
            Send us a Message
          </h2>
          <form className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-brand-dark mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Hegde"
                className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-dark mb-1">Email or Phone</label>
              <input
                type="text"
                required
                placeholder="name@example.com or phone"
                className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-dark mb-1">Message</label>
              <textarea
                rows={4}
                required
                placeholder="How can we help you today?"
                className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
