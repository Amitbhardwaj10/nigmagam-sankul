"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { servicesData } from "@/data/services";
import { ServiceItem } from "@/types";
import { Clock, Eye, Calendar, Sparkles } from "lucide-react";

interface ServicesSectionProps {
  onSelectServiceForBooking?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleBookService = (serviceTitle: string) => {
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(serviceTitle);
    }
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F1EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sacred Rituals & Anushthana"
          badgeHindi="धार्मिक अनुष्ठान"
          titleEnglish="Our Spiritual Services"
          titleHindi="वैदिक एवं पौराणिक अनुष्ठान"
          description="Every ritual is performed with traditional Vedic vidhi, pure samagri, and heartfelt devotion for peace, protection, and prosperity in your home."
        />

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E5E2DA] hover:border-[#2D4739]/40 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[#F1EFEA]">
                <Image
                  src={service.imageUrl}
                  alt={service.titleEnglish}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/85 via-[#1E221E]/20 to-transparent" />

                {/* Overlaid Titles */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <span className="text-white/80 font-devanagari text-xs font-medium block">
                    {service.titleHindi}
                  </span>
                  <h3 className="text-lg font-serif text-white tracking-wide font-semibold">
                    {service.titleEnglish}
                  </h3>
                </div>

                {/* Featured Badge */}
                {service.featured && (
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#2D4739] text-white text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1 shadow-2xs">
                    <Sparkles className="w-2.5 h-2.5" /> Popular
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                {/* Meta Row: Duration & Pricing */}
                <div className="flex items-center justify-between text-xs pt-0.5">
                  <span className="inline-flex items-center gap-1.5 text-[#5E645E] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#2D4739]" /> {service.duration}
                  </span>
                  <span className="text-[11px] font-medium text-[#2D4739] bg-[#F1EFEA] px-2.5 py-0.5 rounded-full border border-[#E5E2DA]">
                    Contact for Pricing
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-xs text-[#5E645E] font-normal leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-[#E5E2DA]">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#E5E2DA] hover:bg-[#F1EFEA] text-[#1E221E] text-xs font-semibold transition-colors cursor-pointer"
                      title="View Details"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#5E645E]" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => handleBookService(service.titleEnglish)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#2D4739] hover:bg-[#22362B] text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
                      title="Book Service"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>Book</span>
                    </button>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="block text-center text-[11px] font-medium text-[#2D4739] hover:text-[#1E221E] transition-colors py-0.5"
                  >
                    Dedicated Page & Vidhi →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookService}
      />
    </section>
  );
};
