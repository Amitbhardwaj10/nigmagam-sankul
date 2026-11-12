"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LightboxModal, LightboxImageItem } from "@/components/ui/LightboxModal";
import { awardsData } from "@/data/awards";
import { ZoomIn, Building2 } from "lucide-react";

export const AwardsSection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxImageItem[] = awardsData.map((award) => ({
    id: award.id,
    title: award.title,
    titleHindi: award.titleHindi,
    subtitle: `${award.category} • ${award.year}`,
    description: `${award.description} Conferred by ${award.issuer}.`,
    imageUrl: award.imageUrl,
  }));

  return (
    <section id="awards" className="py-20 md:py-28 bg-[#F1EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Recognitions & Honours"
          badgeHindi="सम्मान एवं प्रशस्ति"
          titleEnglish="Awards, Honours & Achievements"
          titleHindi="सम्मान, प्रशस्ति पत्र एवं उपलब्धियां"
          description="Formal recognitions and blessings received from Vedic assemblies, gurukuls, and religious institutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {awardsData.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E5E2DA] hover:border-[#2D4739]/40 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative h-48 w-full overflow-hidden bg-[#F1EFEA]">
                <Image
                  src={award.imageUrl}
                  alt={award.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-[#1E221E]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/95 text-[#1E221E] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-4 h-4 text-[#2D4739]" />
                  </span>
                </div>

                {/* Category & Year Tag */}
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[#2D4739] text-[10px] uppercase tracking-wider font-semibold border border-[#E5E2DA]">
                  {award.category} • {award.year}
                </span>
              </div>

              {/* Award Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="font-devanagari text-xs text-[#2D4739] font-medium block mb-0.5">
                    {award.titleHindi}
                  </span>
                  <h3 className="font-serif text-base text-[#1E221E] font-semibold leading-snug">
                    {award.title}
                  </h3>

                  <p className="text-[11px] text-[#5E645E] flex items-center gap-1.5 mt-2">
                    <Building2 className="w-3.5 h-3.5 text-[#2D4739] shrink-0" />
                    <span className="truncate">{award.issuer}</span>
                  </p>
                </div>

                <p className="text-xs text-[#5E645E] font-normal leading-relaxed line-clamp-2 pt-2 border-t border-[#E5E2DA]">
                  {award.description}
                </p>

                <div className="text-right">
                  <span className="text-[11px] text-[#2D4739] group-hover:text-[#1E221E] font-semibold transition-colors">
                    Click to Preview Certificate →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
};
