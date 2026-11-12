"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle2, BookOpen, Scroll, Award, ChevronDown } from "lucide-react";

export const AboutSection: React.FC = () => {
  const [showFullBiography, setShowFullBiography] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F1EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sacred Lineage & Dedication"
          badgeHindi="विद्वत परंपरा"
          titleEnglish="About Acharya Shri Nandan Mishra"
          titleHindi={siteConfig.about.headingHindi}
          description="Dedicated to upholding Sanatan dharma through authentic scriptural study, strict Vedic recitation, and heart-centered ritual execution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Portrait & Highlights (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Outer decorative subtle ring */}
              <div className="absolute -inset-2.5 rounded-3xl border border-[#2D4739]/15 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#E5E2DA] bg-white aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop"
                  alt="Acharya Shri Nandan Mishra Vedic Scholar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/80 via-[#1E221E]/15 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#F9F8F4]/95 backdrop-blur-md border border-[#E5E2DA]">
                  <h4 className="font-devanagari text-lg text-[#1E221E] font-bold">
                    {siteConfig.acharyaNameHindi}
                  </h4>
                  <p className="text-xs font-devanagari text-[#2D4739] font-medium">
                    {siteConfig.websiteNameHindi} • {siteConfig.hindiTitle}
                  </p>
                  <p className="text-[11px] text-[#5E645E] mt-1 font-serif">
                    Traditions of Kashi & Vedic Gurukul Lineage
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-3 gap-3 mt-6 text-center">
              <div className="p-3.5 bg-white rounded-xl border border-[#E5E2DA] shadow-2xs">
                <BookOpen className="w-4 h-4 text-[#2D4739] mx-auto mb-1.5" />
                <span className="text-xs font-serif text-[#1E221E] font-semibold block">3 Vedas</span>
                <span className="text-[11px] text-[#5E645E]">Adhyayan</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-[#E5E2DA] shadow-2xs">
                <Scroll className="w-4 h-4 text-[#2D4739] mx-auto mb-1.5" />
                <span className="text-xs font-serif text-[#1E221E] font-semibold block">Shrauta</span>
                <span className="text-[11px] text-[#5E645E]">Smarta Vidhi</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-[#E5E2DA] shadow-2xs">
                <Award className="w-4 h-4 text-[#2D4739] mx-auto mb-1.5" />
                <span className="text-xs font-serif text-[#1E221E] font-semibold block">Authentic</span>
                <span className="text-[11px] text-[#5E645E]">Purity First</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Expertise (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1E221E] font-semibold mb-3 leading-snug">
                A Life Devoted to Vedic Recitation and Sacred Rituals
              </h3>
              <p className="text-base text-[#1E221E] leading-relaxed font-normal">
                {siteConfig.about.shortBio}
              </p>
            </div>

            {/* Spiritual Journey */}
            <div className="bg-white p-5 rounded-2xl border border-[#E5E2DA] shadow-2xs">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2D4739] mb-2">
                Spiritual Journey & Lineage
              </h4>
              <p className="text-sm text-[#5E645E] leading-relaxed font-normal">
                {siteConfig.about.journey}
              </p>
            </div>

            {/* Religious Philosophy */}
            <div className="bg-white p-5 rounded-2xl border border-[#E5E2DA] shadow-2xs">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2D4739] mb-2">
                Ritual Philosophy & Strict Standards
              </h4>
              <p className="text-sm text-[#5E645E] leading-relaxed font-normal">
                {siteConfig.about.philosophy}
              </p>
            </div>

            {/* Core Expertise Checklist */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2D4739] mb-3">
                Core Domains of Mastery
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {siteConfig.about.expertisePoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E221E]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D4739] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Know More Expandable Biography */}
            {showFullBiography && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="p-5 bg-white rounded-2xl border border-[#2D4739]/20 space-y-3 text-xs sm:text-sm text-[#5E645E] leading-relaxed shadow-2xs"
              >
                <h5 className="font-serif text-[#1E221E] text-base font-semibold">
                  Vedic Integrity & Clear Ceremony Guidance
                </h5>
                <p>
                  Acharya Shri Nandan Mishra believes in making ancient wisdom clear and accessible. For every Griha Pravesh, Yagya, or Rudrabhishek, he explains the sacred meaning behind the mantras, ensuring that families experience genuine peace and spiritual understanding.
                </p>
                <p>
                  Every ritual requirement is guided with care and transparency, avoiding unnecessary complexity while maintaining highest devotional purity.
                </p>
              </motion.div>
            )}

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setShowFullBiography(!showFullBiography)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2D4739] text-xs uppercase tracking-wider text-[#2D4739] hover:bg-[#2D4739] hover:text-white transition-all font-semibold"
              >
                <span>{showFullBiography ? "Show Less" : "Know More About Acharya Ji"}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    showFullBiography ? "rotate-180" : ""
                  }`}
                />
              </button>

              <a
                href="#booking"
                className="text-xs uppercase tracking-wider font-semibold text-[#5E645E] hover:text-[#1E221E] underline underline-offset-4"
              >
                Schedule a Consultation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
