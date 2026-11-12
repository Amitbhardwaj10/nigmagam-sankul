"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImageItem {
  id: string;
  title: string;
  titleHindi?: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
}

interface LightboxModalProps {
  items: LightboxImageItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < items.length - 1) onNavigate(currentIndex + 1);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#252A25]/85 backdrop-blur-md">
        <div onClick={onClose} className="absolute inset-0" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {currentIndex < items.length - 1 && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Main Content Modal Card */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full max-h-[90vh] bg-[#FCFBF7] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-20 border border-[#E8E2D6]"
        >
          {/* Image */}
          <div className="relative w-full h-[50vh] md:h-[65vh] bg-[#252A25]">
            <Image
              src={currentItem.imageUrl}
              alt={currentItem.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </div>

          {/* Details Bar */}
          <div className="p-5 md:p-6 bg-[#F9F8F4] border-t border-[#E5E2DA]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                {currentItem.titleHindi && (
                  <span className="text-xs md:text-sm font-devanagari text-[#2D4739] font-medium block mb-0.5">
                    {currentItem.titleHindi}
                  </span>
                )}
                <h3 className="text-lg md:text-xl font-serif text-[#1E221E] font-semibold">
                  {currentItem.title}
                </h3>
              </div>
              {currentItem.subtitle && (
                <span className="text-xs uppercase tracking-wider text-[#2D4739] bg-[#F1EFEA] border border-[#E5E2DA] px-3 py-1 rounded-full self-start md:self-auto font-medium">
                  {currentItem.subtitle}
                </span>
              )}
            </div>

            {currentItem.description && (
              <p className="mt-2 text-xs md:text-sm text-[#5E645E] font-normal leading-relaxed">
                {currentItem.description}
              </p>
            )}

            <div className="mt-3 text-[11px] text-[#5E645E]">
              Image {currentIndex + 1} of {items.length}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
