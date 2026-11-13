"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2D4739] text-white pt-16 pb-12 border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sanskrit blessing banner */}
        <div className="text-center pb-12 mb-12 border-b border-white/10">
          <p className="font-devanagari text-2xl md:text-3xl text-white/90 font-medium tracking-wide">
            &quot;{siteConfig.sanskritQuote}&quot;
          </p>
          <p className="text-xs md:text-sm text-white/70 mt-2 font-serif italic max-w-xl mx-auto">
            {siteConfig.sanskritQuoteTranslation}
          </p>
        </div>

        {/* 4-column footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-devanagari text-white tracking-wide font-bold">
                {siteConfig.websiteNameHindi}
              </h3>
              <p className="text-xs uppercase tracking-widest text-white/75 font-medium mt-1 font-devanagari">
                {siteConfig.acharyaNameHindi} • {siteConfig.hindiTitle}
              </p>
            </div>
            <p className="text-xs text-white/70 font-normal leading-relaxed">
              Dedicated to preserving the pure traditions of Vedic recitation, sacred Yajna, and authentic Sanatan ceremonies performed with devotion, precision, and humility.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-colors shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Acharya Ji</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-4">
              Explore Portfolio
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home (मुख्य पृष्ठ)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Acharya Ji (परिचय एवं परंपरा)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Spiritual Services (वैदिक अनुष्ठान)
                </Link>
              </li>
              <li>
                <Link href="/vedic-knowledge" className="hover:text-white transition-colors">
                  The Three Vedas (त्रि-वेद ज्ञान)
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Spiritual Gallery (चित्र वीथिका)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book a Puja (पूजा बुकिंग एवं संपर्क)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Sacred Ceremonies */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-4">
              Sacred Ceremonies
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{service.titleEnglish}</span>
                    <span className="font-devanagari text-[11px] text-white/70">
                      {service.titleHindi}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Sacred Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-4">
              Sacred Connect
            </h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/80 shrink-0" />
                <a href={siteConfig.contact.phoneUrl} className="hover:text-white">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/80 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="text-[11px] text-white/50 pt-2 border-t border-white/10">
                {siteConfig.contact.availability}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {siteConfig.copyrightYear} {siteConfig.websiteNameHindi} ({siteConfig.acharyaNameEnglish}). All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-devanagari text-white/80">
              सत्यं वद • धर्मं चर
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
