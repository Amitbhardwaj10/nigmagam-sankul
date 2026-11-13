import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { AudioPlayer } from "@/components/layout/AudioPlayer";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Ceremony Booking | निगमागम संकुल",
  description:
    "Connect directly with Acharya Shri Nandan Mishra on WhatsApp (+91 94143 19347) or submit a ceremony reservation form for Griha Pravesh, Yagya, Rudrabhishek, and Vedic rituals.",
  openGraph: {
    title: "Contact & Ceremony Booking | निगमागम संकुल",
    description:
      "Schedule a consultation or book a traditional Vedic ceremony with Acharya Shri Nandan Mishra.",
  },
};

export default function ContactPage() {
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
            <span className="font-devanagari">संपर्क सूत्र एवं पूजा संकल्प</span>
            <span className="opacity-40">•</span>
            <span>Direct Inquiries & Booking</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E221E] tracking-tight leading-tight mb-4">
            Connect & Reserve a Vedic Ceremony
          </h1>
          <p className="font-devanagari text-lg sm:text-xl text-[#2D4739] font-medium mb-3">
            {siteConfig.websiteNameHindi} — आचार्य श्री नन्दन मिश्र
          </p>
          <p className="text-sm sm:text-base text-[#5E645E] max-w-2xl mx-auto leading-relaxed">
            Whether you wish to consult on an auspicious Muhurat or reserve a ceremony date, submit your requirements below to connect directly with Acharya ji on WhatsApp.
          </p>
        </div>

        {/* Section 1: Ceremony Reservation Form */}
        <BookingSection />

        {/* Section 2: Direct Contact Channels & Location Information */}
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <AudioPlayer />
    </>
  );
}
