"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Pranam Acharya Shri Nandan Mishra Ji, I would like to inquire about Vedic rituals and ceremony booking."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip */}
      {showTooltip && (
        <div className="mr-3 px-3.5 py-1.5 rounded-xl bg-[#1E221E] text-white text-xs font-normal shadow-xl border border-[#E5E2DA]/30 whitespace-nowrap animate-in fade-in slide-in-from-right-2">
          Chat on WhatsApp (+91 94143 19347)
          <span className="font-devanagari text-[#A4B8A9] ml-1.5">• संपर्क करें</span>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-13 h-13 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 group relative cursor-pointer"
        aria-label="Direct WhatsApp Contact"
      >
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#4A6B56] rounded-full border-2 border-[#F9F8F4]" />
        <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-6 text-white" />
      </a>
    </div>
  );
};
