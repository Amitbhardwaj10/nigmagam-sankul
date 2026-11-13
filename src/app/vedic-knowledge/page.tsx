import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { AudioPlayer } from "@/components/layout/AudioPlayer";
import { VedicKnowledgeSection } from "@/components/sections/VedicKnowledgeSection";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, BookOpen, Volume2, Sparkles, Calendar, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Vedic Knowledge & The Three Vedas | निगमागम संकुल",
  description:
    "Explore the sacred foundations of Yajurveda, Samaveda, and Atharvaveda preserved through traditional Guru-Shishya parampara by Acharya Shri Nandan Mishra at Nigmagam Sankul.",
  openGraph: {
    title: "Vedic Knowledge & The Three Vedas | निगमागम संकुल",
    description:
      "The eternal source of cosmic wisdom, ritual perfection, and spiritual wellbeing preserved through authentic Guru-Shishya parampara.",
  },
};

export default function VedicKnowledgePage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Pranam Acharya Shri Nandan Mishra Ji, I would like to inquire about Vedic rituals and scriptural consultations."
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
            <span className="font-devanagari">ज्ञान की दिव्य धारा</span>
            <span className="opacity-40">•</span>
            <span>Scriptural Foundations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E221E] tracking-tight leading-tight mb-4">
            The Three Vedas of Mastery
          </h1>
          <p className="font-devanagari text-lg sm:text-xl text-[#2D4739] font-medium mb-3">
            यजुर्वेद • सामवेद • अथर्ववेद
          </p>
          <p className="text-sm sm:text-base text-[#5E645E] max-w-2xl mx-auto leading-relaxed">
            The eternal wellspring of Vedic liturgy, melodic contemplation, and family well-being, studied and performed with immaculate Swara precision.
          </p>
        </div>

        {/* Section 1: The Interactive 3 Veda Cards & Modals */}
        <VedicKnowledgeSection />

        {/* Section 2: The Importance of Vedic Pronunciation & Swara Purity */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E2DA] shadow-2xs space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2D4739] block mb-2">
                स्वर एवं उच्चारण शुद्धि • Scriptural Precision
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1E221E] font-semibold mb-3">
                Why Swara Purity Matters in Vedic Chanting
              </h2>
              <p className="text-sm sm:text-base text-[#5E645E] leading-relaxed">
                In Vedic tradition, mantras are not merely symbolic words; they are sound frequencies (*Shabda Brahma*). A minor change in accent (Udatta, Anudatta, Svarita) alters the meaning and cosmic effect of the mantra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E5E2DA]">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F1EFEA] text-[#2D4739] flex items-center justify-center">
                  <Volume2 className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-[#1E221E] font-semibold">
                  Accurate Swara Intonation
                </h4>
                <p className="text-xs text-[#5E645E] leading-relaxed">
                  Strict adherence to traditional Paninian Shiksha ensuring every syllable carries its intended spiritual potency.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F1EFEA] text-[#2D4739] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-[#1E221E] font-semibold">
                  Preserved Shakhas (Lineages)
                </h4>
                <p className="text-xs text-[#5E645E] leading-relaxed">
                  Knowledge transmitted directly through the Guru-Shishya tradition of Kashi, maintaining unchanged scriptural continuity.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F1EFEA] text-[#2D4739] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-[#1E221E] font-semibold">
                  Heartfelt Devotion
                </h4>
                <p className="text-xs text-[#5E645E] leading-relaxed">
                  Scholarly precision coupled with genuine Bhavana (devotional reverence), so the family feels true sanctity in their home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F1EFEA] border border-[#E5E2DA] text-center space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E221E] font-semibold">
              Experience the Sanctity of Authentic Vedic Mantras
            </h3>
            <p className="text-sm sm:text-base text-[#5E645E] max-w-xl mx-auto leading-relaxed">
              Invite Acharya Shri Nandan Mishra to conduct your family ceremonies with authentic Vedic chanting and scriptural vidhi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-widest font-semibold shadow-2xs hover:shadow-md transition-all"
              >
                <Calendar className="w-4 h-4 text-white/80" />
                <span>Book a Vedic Puja</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9F8F4] border border-[#E5E2DA] text-[#1E221E] text-xs uppercase tracking-widest font-semibold transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#2D4739]" />
                <span>Inquire on WhatsApp</span>
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
