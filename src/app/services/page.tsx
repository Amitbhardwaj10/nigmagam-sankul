import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { AudioPlayer } from "@/components/layout/AudioPlayer";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, Calendar, MessageCircle, ShieldCheck, Flame, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Vedic Ceremonies & Spiritual Services | निगमागम संकुल",
  description:
    "Explore authentic Hindu religious ceremonies conducted by Acharya Shri Nandan Mishra: Yagya Havan, Rudrabhishek, Durga Saptashati, Griha Pravesh, Vastu Shanti, and Sanskar rituals.",
  openGraph: {
    title: "Vedic Ceremonies & Spiritual Services | निगमागम संकुल",
    description:
      "Authentic Vedic rituals and ceremonies performed with sacred care, consecrated samagri, and precise scriptural chanting.",
  },
};

export default function ServicesPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Pranam Acharya Shri Nandan Mishra Ji, I would like to inquire about booking a Vedic ceremony for my family."
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
            <span className="font-devanagari">वैदिक एवं पौराणिक अनुष्ठान</span>
            <span className="opacity-40">•</span>
            <span>Sacred Ceremonies</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E221E] tracking-tight leading-tight mb-4">
            Our Spiritual Services & Anushthanas
          </h1>
          <p className="font-devanagari text-lg sm:text-xl text-[#2D4739] font-medium mb-3">
            {siteConfig.websiteNameHindi} — समस्त वैदिक एवं धार्मिक संस्कार
          </p>
          <p className="text-sm sm:text-base text-[#5E645E] max-w-2xl mx-auto leading-relaxed">
            Every ceremony is conducted in strict accordance with Shastra-sammata vidhi, pure Vedic samagri, and traditional Swara chanting for peace, prosperity, and divine blessings.
          </p>
        </div>

        {/* The 8 Services Catalog */}
        <ServicesSection />

        {/* Ceremony Preparation Standards Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E5E2DA] shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#F1EFEA] text-[#2D4739] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base text-[#1E221E] font-semibold">
                Authentic Samagri List
              </h4>
              <p className="text-xs text-[#5E645E] leading-relaxed">
                Prior to every ritual, a clear, authentic list of required items is provided. We avoid wasteful expenditure while ensuring strict scriptural purity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5E2DA] shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#F1EFEA] text-[#2D4739] flex items-center justify-center mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base text-[#1E221E] font-semibold">
                Shubh Muhurat Selection
              </h4>
              <p className="text-xs text-[#5E645E] leading-relaxed">
                Acharya ji calculates the most auspicious Tithi, Nakshatra, and Muhurat tailored to your family&apos;s Janma Kundali and occasion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5E2DA] shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#F1EFEA] text-[#2D4739] flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base text-[#1E221E] font-semibold">
                Family Sankalpa Guidance
              </h4>
              <p className="text-xs text-[#5E645E] leading-relaxed">
                During the ritual, every mantra and Sankalpa is explained in simple Hindi so the entire family participates with clarity, devotion, and peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F1EFEA] border border-[#E5E2DA] text-center space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E221E] font-semibold">
              Ready to Schedule a Ceremony?
            </h3>
            <p className="text-sm sm:text-base text-[#5E645E] max-w-xl mx-auto leading-relaxed">
              Submit your preferred date and ceremony requirements on our reservation page, or message Acharya ji directly on WhatsApp.
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
