import React from "react";
import { MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-subtle group"
    >
      <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
