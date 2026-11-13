import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { AudioPlayer } from "@/components/layout/AudioPlayer";
import { GallerySection } from "@/components/sections/GallerySection";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, Calendar, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Spiritual Gallery & Moments of Devotion | निगमागम संकुल",
  description:
    "Explore the visual chronicle of sacred Havans, Abhishekams, Temple celebrations, and traditional ceremonies conducted by Acharya Shri Nandan Mishra.",
  openGraph: {
    title: "Spiritual Gallery & Moments of Devotion | निगमागम संकुल",
    description:
      "A visual chronicle of solemn Havans, Abhishekams, temple celebrations, and traditional ceremonies conducted across sacred spaces.",
  },
};

export default function GalleryPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Pranam Acharya Shri Nandan Mishra Ji, I visited the gallery on your website and would like to inquire about organizing a ceremony."
  )}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F9F8F4] pt-24 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#5E645E] hover:text-[#1E221E] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EFEA] border border-[#E5E2DA] text-[#2D4739] text-xs font-medium tracking-wider uppercase mb-4">
            <span className="font-devanagari">चित्र वीथिका</span>
            <span className="opacity-40">•</span>
            <span>Moments of Devotion</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E221E] tracking-tight leading-tight mb-4">
            Spiritual Gallery & Sacred Moments
          </h1>
          <p className="font-devanagari text-lg sm:text-xl text-[#2D4739] font-medium mb-3">
            {siteConfig.websiteNameHindi} — पावन स्मृतियां एवं अनुष्ठान
          </p>
          <p className="text-sm sm:text-base text-[#5E645E] max-w-2xl mx-auto leading-relaxed">
            A dignified visual collection of sacred Havans, Abhishekams, temple celebrations, and traditional ceremonies conducted with deep devotion.
          </p>
        </div>

        {/* Gallery Grid with Category Filters & Lightbox */}
        <GallerySection />

        {/* Bottom CTA Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F1EFEA] border border-[#E5E2DA] text-center space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E221E] font-semibold">
              Bring Sacred Energy to Your Home
            </h3>
            <p className="text-sm sm:text-base text-[#5E645E] max-w-xl mx-auto leading-relaxed">
              Every occasion is sanctified through pure Vedic chanting and traditional rituals. Contact Acharya ji today to schedule your auspicious event.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-widest font-semibold shadow-2xs hover:shadow-md transition-all"
              >
                <Calendar className="w-4 h-4 text-white/80" />
                <span>Reserve Ceremony Online</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9F8F4] border border-[#E5E2DA] text-[#1E221E] text-xs uppercase tracking-widest font-semibold transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#2D4739]" />
                <span>WhatsApp Acharya Ji</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <AudioPlayer />
    </>
  );
}
