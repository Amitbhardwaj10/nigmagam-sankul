import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { AudioPlayer } from "@/components/layout/AudioPlayer";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, Calendar, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Acharya Shri Nandan Mishra | निगमागम संकुल",
  description:
    "Learn about Acharya Shri Nandan Mishra, Vedic Scholar and Spiritual Priest steeped in the sacred Gurukul traditions of Kashi, specializing in Yajurveda, Atharvaveda, and Samaveda.",
  openGraph: {
    title: "About Acharya Shri Nandan Mishra | निगमागम संकुल",
    description:
      "Vedic scholar, spiritual lineage, scriptural philosophy, and sacred ceremonial standards.",
  },
};

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Pranam Acharya Shri Nandan Mishra Ji, I would like to seek your blessings and consult regarding an upcoming ceremony."
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
            <span className="font-devanagari">विद्वत परंपरा एवं परिचय</span>
            <span className="opacity-40">•</span>
            <span>Vedic Scholar Heritage</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E221E] tracking-tight leading-tight mb-4">
            About Acharya Shri Nandan Mishra
          </h1>
          <p className="font-devanagari text-lg sm:text-xl text-[#2D4739] font-medium mb-3">
            {siteConfig.websiteNameHindi} — {siteConfig.hindiTitle}
          </p>
          <p className="text-sm sm:text-base text-[#5E645E] max-w-2xl mx-auto leading-relaxed">
            A life devoted to authentic Vedic study, pure mantra recitation, and heart-centered ceremony execution preserved through the sacred lineages of Kashi.
          </p>
        </div>

        {/* Section 1: Detailed Biography & Lineage */}
        <AboutSection />

        {/* Section 2: Why Choose & Guiding Principles */}
        <WhyChooseSection />

        {/* Section 3: Awards & Formal Recognitions */}
        <AwardsSection />

        {/* Bottom CTA Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F1EFEA] border border-[#E5E2DA] text-center space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E221E] font-semibold">
              Seek Guidance for Your Family&apos;s Auspicious Occasion
            </h3>
            <p className="text-sm sm:text-base text-[#5E645E] max-w-xl mx-auto leading-relaxed">
              Connect directly with Acharya ji for Muhurat determination, Gotra Sankalpa, and authentic scriptural advice for your home ceremonies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-widest font-semibold shadow-2xs hover:shadow-md transition-all"
              >
                <Calendar className="w-4 h-4 text-white/80" />
                <span>Schedule a Consultation</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9F8F4] border border-[#E5E2DA] text-[#1E221E] text-xs uppercase tracking-widest font-semibold transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#2D4739]" />
                <span>Chat on WhatsApp</span>
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
