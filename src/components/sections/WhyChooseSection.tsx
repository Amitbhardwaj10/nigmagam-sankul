"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseData } from "@/data/whyChoose";
import {
  BookOpenCheck,
  Flame,
  Scroll,
  HeartHandshake,
  Sparkles,
  SunMedium,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BookOpenCheck,
  Flame,
  Scroll,
  HeartHandshake,
  Sparkles,
  SunMedium,
};

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-choose" className="py-20 md:py-28 bg-[#F9F8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Guiding Principles"
          badgeHindi="विशिष्ट वैदिक परंपरा"
          titleEnglish="Why Choose Acharya Shri Nandan Mishra?"
          titleHindi="आचार्य जी का वरण क्यों करें?"
          description="True devotion, correct Vedic pronunciation, and transparent guidance for your family's auspicious occasions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {whyChooseData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group p-8 rounded-2xl bg-white border border-[#E5E2DA] hover:border-[#2D4739]/40 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#F1EFEA] flex items-center justify-center text-[#2D4739] mb-6 group-hover:scale-105 group-hover:bg-[#2D4739] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Hindi Title */}
                  <span className="font-devanagari text-xs text-[#2D4739] font-medium block mb-1">
                    {item.titleHindi}
                  </span>

                  {/* English Title */}
                  <h3 className="font-serif text-xl text-[#1E221E] font-semibold mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5E645E] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#E5E2DA] flex items-center gap-2 text-[11px] text-[#5E645E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D4739]" />
                  <span>Sanatan Shastra Standards</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
