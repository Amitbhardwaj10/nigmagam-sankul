"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ExternalLink,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Pranam Acharya Shri Nandan Mishra Ji, I would like to seek spiritual guidance and inquire about Vedic ceremonies."
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F9F8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Inquiries & Guidance"
          badgeHindi="संपर्क सूत्र"
          titleEnglish="Connect With Acharya Ji"
          titleHindi="आध्यात्मिक परामर्श एवं संपर्क"
          description="Whether you wish to schedule a Griha Pravesh on an auspicious Muhurat or discuss a puja for your family, reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Cards: 4 Info Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="p-6 rounded-2xl bg-white border border-[#E5E2DA] hover:border-[#2D4739]/40 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2D4739]/10 text-[#2D4739] flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#1E221E] font-semibold mb-1">
                  WhatsApp Direct
                </h4>
                <p className="text-xs text-[#5E645E] mb-3">
                  Fastest way to check Muhurat dates and share birth chart details.
                </p>
                <p className="text-sm font-semibold text-[#1E221E]">
                  {siteConfig.contact.phoneDisplay}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#E5E2DA]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4739] hover:text-[#22362B]"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Direct Calling Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="p-6 rounded-2xl bg-white border border-[#E5E2DA] hover:border-[#2D4739]/40 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1EFEA] text-[#2D4739] flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#1E221E] font-semibold mb-1">
                  Phone Consultation
                </h4>
                <p className="text-xs text-[#5E645E] mb-3">
                  Direct telephone dialogue for urgent inquiries and ceremonial planning.
                </p>
                <p className="text-sm font-semibold text-[#1E221E]">
                  {siteConfig.contact.phoneDisplay}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#E5E2DA]">
                <a
                  href={siteConfig.contact.phoneUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4739] hover:text-[#1E221E]"
                >
                  <span>Call Acharya Ji</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Email Inquiries */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="p-6 rounded-2xl bg-white border border-[#E5E2DA] hover:border-[#2D4739]/40 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1EFEA] text-[#2D4739] flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#1E221E] font-semibold mb-1">
                  Email Correspondence
                </h4>
                <p className="text-xs text-[#5E645E] mb-3">
                  For formal invitations, family functions, and ceremony questions.
                </p>
                <p className="text-xs font-medium text-[#1E221E] break-all">
                  {siteConfig.contact.email}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#E5E2DA]">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4739] hover:text-[#1E221E]"
                >
                  <span>Send an Email</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Sacred Locations */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="p-6 rounded-2xl bg-white border border-[#E5E2DA] hover:border-[#2D4739]/40 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1EFEA] text-[#2D4739] flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#1E221E] font-semibold mb-1">
                  Sacred Locations
                </h4>
                <p className="text-xs text-[#5E645E] mb-3">
                  Base in sacred Kashi (Varanasi) & New Delhi.
                </p>
                <p className="text-xs font-medium text-[#1E221E]">
                  {siteConfig.contact.address}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#E5E2DA]">
                <span className="text-[11px] text-[#2D4739] font-semibold">
                  {siteConfig.contact.availability}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Banner Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full p-8 sm:p-10 rounded-3xl bg-[#F1EFEA] border border-[#E5E2DA] flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#2D4739] font-semibold block mb-2">
                  Devoted & Accessible
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1E221E] font-semibold leading-tight mb-3">
                  Experience Authentic Vedic Grace for Your Family
                </h3>
                <p className="text-xs sm:text-sm text-[#5E645E] leading-relaxed font-normal mb-6">
                  Every ritual is performed with sincere devotion and traditional Vedic chanting. If you are uncertain about dates or which puja is best suited, Acharya ji provides warm, thoughtful guidance.
                </p>

                <div className="space-y-3 border-t border-[#E5E2DA] pt-5 text-xs text-[#1E221E]">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#2D4739]" />
                    <span>Inquiry Hours: 8:00 AM – 8:00 PM IST (Daily)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CalendarCheck className="w-4 h-4 text-[#2D4739]" />
                    <span>Advance Booking Recommended for Auspicious Muhurats</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#2D4739]" />
                    <span>Authentic Samagri List provided prior to ceremony</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-widest font-semibold shadow-sm hover:shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
