"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  badgeHindi?: string;
  titleEnglish: string;
  titleHindi?: string;
  description?: string;
  alignment?: "center" | "left";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeHindi,
  titleEnglish,
  titleHindi,
  description,
  alignment = "center",
  className = "",
}) => {
  const isCenter = alignment === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } mb-12 md:mb-16 ${className}`}
    >
      {(badge || badgeHindi) && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-[#2D4739] bg-[#F1EFEA] border border-[#E5E2DA] mb-3"
        >
          {badgeHindi && <span className="font-devanagari">{badgeHindi}</span>}
          {badgeHindi && badge && <span className="opacity-40">•</span>}
          {badge && <span>{badge}</span>}
        </motion.div>
      )}

      {titleHindi && (
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl font-devanagari text-[#2D4739] font-medium tracking-wide mb-1"
        >
          {titleHindi}
        </motion.h3>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-3xl md:text-4xl font-serif text-[#1E221E] tracking-tight font-semibold"
      >
        {titleEnglish}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`w-12 h-[2px] bg-[#2D4739] mt-3.5 mb-3.5 ${
          isCenter ? "mx-auto" : ""
        }`}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[#5E645E] text-sm md:text-base font-normal leading-relaxed max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
