"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, BookOpen, Layers } from "lucide-react";
import { VedaCard } from "@/types";

interface VedaModalProps {
  veda: VedaCard | null;
  onClose: () => void;
  onBookRelated?: () => void;
}

export const VedaModal: React.FC<VedaModalProps> = ({
  veda,
  onClose,
  onBookRelated,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (veda) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [veda, onClose]);

  if (!veda) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#1E221E]/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F9F8F4] border border-[#E5E2DA] rounded-3xl shadow-xl p-6 md:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[#5E645E] hover:text-[#1E221E] hover:bg-[#F1EFEA] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header image banner */}
          <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-6 border border-[#E5E2DA]">
            <Image
              src={veda.imageUrl}
              alt={veda.titleEnglish}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/85 via-[#1E221E]/25 to-transparent flex flex-col justify-end p-6">
              <span className="text-white/80 font-devanagari text-lg font-medium">
                {veda.titleHindi}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-white tracking-wide font-semibold">
                {veda.titleEnglish}
              </h3>
            </div>
          </div>

          {/* Shloka highlight */}
          <div className="bg-[#F1EFEA] border-l-4 border-[#2D4739] p-4 rounded-r-xl mb-6">
            <p className="font-devanagari text-base md:text-lg text-[#1E221E] font-medium italic">
              &quot;{veda.sanskritVerse}&quot;
            </p>
            <p className="text-xs md:text-sm text-[#5E645E] mt-1 font-serif">
              {veda.verseTranslation}
            </p>
          </div>

          {/* Main description */}
          <p className="text-[#1E221E] text-sm md:text-base leading-relaxed mb-6 font-normal">
            {veda.description}
          </p>

          {/* Extended details */}
          <div className="space-y-4 border-t border-[#E5E2DA] pt-5">
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold text-[#2D4739] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4 text-[#2D4739]" /> Traditional Branches (Shakhas)
              </h4>
              <div className="flex flex-wrap gap-2">
                {veda.extendedDetails.branches.map((branch, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-[#E5E2DA] text-xs text-[#1E221E] rounded-md font-medium"
                  >
                    {branch}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold text-[#2D4739] uppercase tracking-wider mb-1">
                <BookOpen className="w-4 h-4 text-[#2D4739]" /> Scriptural Focus & Content
              </h4>
              <p className="text-xs sm:text-sm text-[#5E645E] leading-relaxed">
                {veda.extendedDetails.focus}
              </p>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold text-[#2D4739] uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-[#2D4739]" /> Significance in Vedic Rituals
              </h4>
              <p className="text-xs sm:text-sm text-[#5E645E] leading-relaxed">
                {veda.extendedDetails.significanceInRituals}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[#2D4739] uppercase tracking-wider mb-1">
                Universal Relevance
              </h4>
              <p className="text-xs sm:text-sm text-[#5E645E] leading-relaxed">
                {veda.extendedDetails.relevanceToday}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#E5E2DA]">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#E5E2DA] text-xs font-semibold text-[#5E645E] hover:bg-[#F1EFEA] transition-colors cursor-pointer"
            >
              Close
            </button>
            {onBookRelated && (
              <button
                onClick={() => {
                  onClose();
                  onBookRelated();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#2D4739] text-white text-xs font-semibold hover:bg-[#22362B] transition-colors shadow-2xs cursor-pointer"
              >
                Inquire for Ceremony
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
