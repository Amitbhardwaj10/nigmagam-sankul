"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LightboxModal, LightboxImageItem } from "@/components/ui/LightboxModal";
import { galleryData } from "@/data/gallery";
import { ZoomIn } from "lucide-react";

const categories = [
  "All",
  "Havan & Yagya",
  "Rudrabhishek",
  "Temple & Rituals",
  "Ceremonies",
] as const;

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const lightboxItems: LightboxImageItem[] = filteredItems.map((item) => ({
    id: item.id,
    title: item.title,
    titleHindi: item.titleHindi,
    subtitle: item.category,
    description: item.caption,
    imageUrl: item.imageUrl,
  }));

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F9F8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Moments of Devotion"
          badgeHindi="चित्र वीथिका"
          titleEnglish="A Glimpse of Spiritual Journey"
          titleHindi="आध्यात्मिक यात्रा की एक झलक"
          description="Moments of solemn Havans, Abhishekams, and traditional ceremonies performed with devotion."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#2D4739] text-white shadow-2xs"
                  : "bg-white text-[#5E645E] border border-[#E5E2DA] hover:bg-[#F1EFEA] hover:text-[#1E221E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer relative h-64 rounded-2xl overflow-hidden bg-[#F1EFEA] border border-[#E5E2DA] shadow-2xs hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/85 via-[#1E221E]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Zoom icon badge */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>

                {/* Overlaid caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-wider text-white/80 font-semibold block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base text-white font-medium leading-snug">
                    {item.title}
                  </h3>
                  {item.titleHindi && (
                    <span className="font-devanagari text-[11px] text-white/80 block mt-0.5">
                      {item.titleHindi}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
