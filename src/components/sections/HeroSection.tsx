"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const HeroSection: React.FC = () => {
  const whatsappHeroUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Pranam Acharya Shri Nandan Mishra Ji, I visited your website and would like to connect for Vedic rituals guidance."
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 md:py-32 bg-[#F9F8F4] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* LEFT SIDE: Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EFEA] border border-[#E5E2DA] text-[#2D4739]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2D4739]" />
              <span className="font-devanagari text-xs font-semibold">
                {siteConfig.websiteNameHindi}
              </span>
              <span className="font-devanagari text-xs text-[#5E645E] font-medium hidden sm:inline">
                • {siteConfig.acharyaNameHindi}
              </span>
            </motion.div>

            {/* Hindi Website Name & Acharya Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2.5"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-devanagari text-[#1E221E] tracking-tight font-bold leading-[1.15]">
                {siteConfig.websiteNameHindi}
              </h1>
              <p className="text-xl sm:text-2xl font-devanagari text-[#2D4739] font-medium">
                {siteConfig.acharyaNameHindi} — {siteConfig.hindiTitle}
              </p>
              <p className="text-sm sm:text-base font-serif text-[#5E645E] italic">
                &ldquo;{siteConfig.headlineEnglish}&rdquo;
              </p>
            </motion.div>

            {/* Clear, easily understood description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#5E645E] font-normal leading-relaxed max-w-xl"
            >
              {siteConfig.heroDescription}
            </motion.p>

            {/* Three Vedic Specialization Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2.5 pt-1"
            >
              <span className="text-xs text-[#838A83] uppercase tracking-wider font-semibold">
                Vedic Specialization:
              </span>
              <span className="px-3.5 py-1.5 bg-[#FFFFFF] border border-[#E5E2DA] rounded-full text-xs font-devanagari text-[#1E221E] font-medium shadow-xs">
                यजुर्वेद (Yajurveda)
              </span>
              <span className="px-3.5 py-1.5 bg-[#FFFFFF] border border-[#E5E2DA] rounded-full text-xs font-devanagari text-[#1E221E] font-medium shadow-xs">
                अथर्ववेद (Atharvaveda)
              </span>
              <span className="px-3.5 py-1.5 bg-[#FFFFFF] border border-[#E5E2DA] rounded-full text-xs font-devanagari text-[#1E221E] font-medium shadow-xs">
                सामवेद (Samaveda)
              </span>
            </motion.div>

            {/* CTAs: Primary (Book a Puja) & Secondary (Contact on WhatsApp) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3"
            >
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-widest font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-98 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white/80" />
                <span>Book a Puja</span>
              </a>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F1EFEA] border border-[#E5E2DA] text-[#1E221E] text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#2D4739]" />
                <span>Contact on WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-[#E5E2DA] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#5E645E]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2D4739] shrink-0" />
                <span>Shastra-Sammata Vidhi</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2D4739] shrink-0" />
                <span>Accurate Sanskrit Chanting</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-[#2D4739] shrink-0" />
                <span>Pan-India & Online Puja</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Authentic Spiritual Photograph */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer subtle frame */}
              <div className="absolute -inset-2.5 rounded-3xl border border-[#E5E2DA] pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative h-[460px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5E2DA] bg-[#F1EFEA]">
                <Image
                  src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1200&auto=format&fit=crop"
                  alt="Authentic Vedic Yajna Ceremony with Sacred Fire and Offerings"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/75 via-[#1E221E]/15 to-transparent" />

                {/* Dignified Caption */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#F9F8F4]/95 backdrop-blur-md border border-[#E5E2DA] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-devanagari text-[#2D4739] font-semibold">
                        पवित्र यज्ञ एवं हविष्य अर्पण
                      </p>
                      <p className="text-xs font-serif text-[#1E221E] font-medium mt-0.5">
                        Authentic Vedic Rituals & Mantras
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2D4739] bg-[#2D4739]/10 px-2.5 py-1 rounded-md font-semibold">
                      Kashi Tradition
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
