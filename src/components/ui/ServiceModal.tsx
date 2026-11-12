"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CheckCircle2, PackageCheck, Calendar, ArrowRight } from "lucide-react";
import { ServiceItem } from "@/types";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

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
            className="absolute top-4 right-4 p-2 rounded-full text-[#5E645E] hover:text-[#1E221E] hover:bg-[#F1EFEA] transition-colors z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner image */}
          <div className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden mb-6 border border-[#E5E2DA]">
            <Image
              src={service.imageUrl}
              alt={service.titleEnglish}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/85 via-[#1E221E]/25 to-transparent flex flex-col justify-end p-6">
              <span className="text-white/80 font-devanagari text-lg font-medium">
                {service.titleHindi}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-white tracking-wide font-semibold">
                {service.titleEnglish}
              </h3>
            </div>
          </div>

          {/* Quick specs pill row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white border border-[#E5E2DA] rounded-full text-xs font-semibold text-[#1E221E]">
              <Clock className="w-3.5 h-3.5 text-[#2D4739]" /> Duration: {service.duration}
            </span>
            <span className="inline-flex items-center px-3.5 py-1 bg-[#F1EFEA] border border-[#E5E2DA] rounded-full text-xs font-semibold text-[#2D4739]">
              Contact for Pricing
            </span>
          </div>

          {/* Full description */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-[#2D4739] uppercase tracking-wider mb-2">
              Ceremony Overview
            </h4>
            <p className="text-[#1E221E] text-sm md:text-base leading-relaxed font-normal">
              {service.fullDesc}
            </p>
          </div>

          {/* Significance */}
          <div className="bg-[#F1EFEA] p-4 rounded-xl border border-[#E5E2DA] mb-6">
            <h4 className="text-xs font-semibold text-[#2D4739] uppercase tracking-wider mb-1">
              Spiritual Significance
            </h4>
            <p className="text-sm text-[#1E221E] font-serif leading-relaxed">
              {service.significance}
            </p>
          </div>

          {/* Key rituals and samagri columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pt-2 border-t border-[#E5E2DA]">
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold text-[#2D4739] uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4 text-[#2D4739]" /> Key Rituals Included
              </h4>
              <ul className="space-y-2">
                {service.keyRituals.map((ritual, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-[#1E221E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D4739] mt-1.5 shrink-0" />
                    <span>{ritual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold text-[#2D4739] uppercase tracking-wider mb-3">
                <PackageCheck className="w-4 h-4 text-[#2D4739]" /> Essential Samagri
              </h4>
              <ul className="space-y-2">
                {service.samagriSummary.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-[#5E645E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D4739] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best occasions */}
          <div className="mb-6 pt-4 border-t border-[#E5E2DA]">
            <h4 className="flex items-center gap-2 text-xs font-semibold text-[#2D4739] uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4 text-[#2D4739]" /> Auspicious Occasions
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.bestOccasions.map((occasion, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white border border-[#E5E2DA] text-xs text-[#5E645E] rounded-md font-medium"
                >
                  {occasion}
                </span>
              ))}
            </div>
          </div>

          {/* Footer actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E2DA]">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4739] hover:text-[#1E221E] underline underline-offset-4"
            >
              View Full Dedicated Page <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full border border-[#E5E2DA] text-xs font-semibold text-[#5E645E] hover:bg-[#F1EFEA] transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookService(service.titleEnglish);
                }}
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-full bg-[#2D4739] text-white text-xs font-semibold hover:bg-[#22362B] transition-colors shadow-2xs cursor-pointer"
              >
                Book This Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
