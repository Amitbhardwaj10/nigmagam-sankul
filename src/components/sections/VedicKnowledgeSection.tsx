"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VedaModal } from "@/components/ui/VedaModal";
import { vedasData } from "@/data/vedas";
import { VedaCard } from "@/types";
import { ArrowRight, BookOpen } from "lucide-react";

export const VedicKnowledgeSection: React.FC = () => {
  const [selectedVeda, setSelectedVeda] = useState<VedaCard | null>(null);

  const handleBookRelated = () => {
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="vedic-knowledge" className="py-20 md:py-28 bg-[#F9F8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Scriptural Foundations"
          badgeHindi="वेदों का ज्ञान"
          titleEnglish="The Three Vedas of Mastery"
          titleHindi="यजुर्वेद • सामवेद • अथर्ववेद"
          description="The eternal source of sacred rituals, peaceful chanting, and spiritual wellbeing preserved through traditional learning."
        />

        {/* 3 Interactive Veda Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vedasData.map((veda, index) => (
            <motion.div
              key={veda.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E5E2DA] hover:border-[#2D4739]/40 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              {/* Card Visual Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-[#F1EFEA]">
                <Image
                  src={veda.imageUrl}
                  alt={veda.titleEnglish}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/85 via-[#1E221E]/25 to-transparent" />

                {/* Overlaid Title */}
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-white/80 font-devanagari text-base font-medium block mb-0.5">
                    {veda.titleHindi}
                  </span>
                  <h3 className="text-2xl font-serif text-white tracking-wide font-semibold">
                    {veda.titleEnglish}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                {/* Shloka highlight */}
                <div className="p-3.5 bg-[#F9F8F4] border-l-2 border-[#2D4739] rounded-r-lg">
                  <p className="font-devanagari text-xs text-[#1E221E] font-medium italic truncate">
                    &quot;{veda.sanskritVerse}&quot;
                  </p>
                  <p className="text-[11px] text-[#5E645E] font-serif truncate mt-1">
                    {veda.verseTranslation}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5E645E] font-normal leading-relaxed">
                  {veda.description}
                </p>

                {/* Read More Interaction */}
                <div className="pt-2 border-t border-[#E5E2DA]">
                  <button
                    onClick={() => setSelectedVeda(veda)}
                    className="w-full inline-flex items-center justify-between text-xs uppercase tracking-wider text-[#2D4739] group-hover:text-[#1E221E] font-semibold py-2 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#2D4739]" />
                      Explore Veda Teachings
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#2D4739]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Veda Deep Dive Modal */}
      <VedaModal
        veda={selectedVeda}
        onClose={() => setSelectedVeda(null)}
        onBookRelated={handleBookRelated}
      />
    </section>
  );
};
