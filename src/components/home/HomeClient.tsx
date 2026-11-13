"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AudioPlayer } from "@/components/layout/AudioPlayer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/services";
import { vedasData } from "@/data/vedas";
import { galleryData } from "@/data/gallery";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  MessageCircle,
  Scroll,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export const HomeClient: React.FC = () => {
  const featuredServices = servicesData.slice(0, 4);
  const featuredGallery = galleryData.slice(0, 4);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Pranam Acharya Shri Nandan Mishra Ji, I visited Nigmagam Sankul and would like to inquire about booking a ceremony."
  )}`;

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#1E221E] flex flex-col selection:bg-[#2D4739]/15">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: About Acharya Ji (Concise Overview) */}
        <section className="py-20 md:py-24 bg-[#F1EFEA] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Sacred Lineage & Dedication"
              badgeHindi="विद्वत परंपरा"
              titleEnglish="About Acharya Shri Nandan Mishra"
              titleHindi={siteConfig.about.headingHindi}
              description="Dedicated to upholding Sanatan dharma through authentic scriptural study, strict Vedic recitation, and heart-centered ritual execution."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Portrait & Highlights (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="absolute -inset-2.5 rounded-3xl border border-[#2D4739]/15 pointer-events-none" />

                  <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#E5E2DA] bg-white aspect-[4/5]">
                    <Image
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop"
                      alt="Acharya Shri Nandan Mishra Vedic Scholar"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/80 via-[#1E221E]/15 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#F9F8F4]/95 backdrop-blur-md border border-[#E5E2DA]">
                      <h4 className="font-devanagari text-lg text-[#1E221E] font-bold">
                        {siteConfig.acharyaNameHindi}
                      </h4>
                      <p className="text-xs font-devanagari text-[#2D4739] font-medium">
                        {siteConfig.websiteNameHindi} • {siteConfig.hindiTitle}
                      </p>
                      <p className="text-[11px] text-[#5E645E] mt-1 font-serif">
                        Traditions of Kashi & Vedic Gurukul Lineage
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Highlights */}
                <div className="grid grid-cols-3 gap-3 mt-6 text-center">
                  <div className="p-3 bg-white rounded-xl border border-[#E5E2DA] shadow-2xs">
                    <BookOpen className="w-4 h-4 text-[#2D4739] mx-auto mb-1" />
                    <span className="text-xs font-serif text-[#1E221E] font-semibold block">3 Vedas</span>
                    <span className="text-[11px] text-[#5E645E]">Adhyayan</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#E5E2DA] shadow-2xs">
                    <Scroll className="w-4 h-4 text-[#2D4739] mx-auto mb-1" />
                    <span className="text-xs font-serif text-[#1E221E] font-semibold block">Shrauta</span>
                    <span className="text-[11px] text-[#5E645E]">Smarta Vidhi</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#E5E2DA] shadow-2xs">
                    <Award className="w-4 h-4 text-[#2D4739] mx-auto mb-1" />
                    <span className="text-xs font-serif text-[#1E221E] font-semibold block">Authentic</span>
                    <span className="text-[11px] text-[#5E645E]">Purity First</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Core Mastery (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1E221E] font-semibold mb-3 leading-snug">
                    A Life Devoted to Vedic Recitation and Sacred Rituals
                  </h3>
                  <p className="text-base text-[#1E221E] leading-relaxed font-normal">
                    {siteConfig.about.shortBio}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E5E2DA] shadow-2xs">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2D4739] mb-2">
                    Spiritual Journey & Gurukul Heritage
                  </h4>
                  <p className="text-sm text-[#5E645E] leading-relaxed font-normal">
                    {siteConfig.about.journey}
                  </p>
                </div>

                {/* Core Domains of Mastery Checklist */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2D4739] mb-3">
                    Core Domains of Mastery
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {siteConfig.about.expertisePoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E221E]">
                        <CheckCircle2 className="w-4 h-4 text-[#2D4739] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-2xs"
                  >
                    <span>Read Full Biography & Lineage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-xs uppercase tracking-wider font-semibold text-[#5E645E] hover:text-[#1E221E] underline underline-offset-4"
                  >
                    Schedule a Consultation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Sacred Ceremonies (4 Popular Ceremonies) */}
        <section className="py-20 md:py-24 bg-[#F9F8F4] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Sacred Rituals & Anushthana"
              badgeHindi="धार्मिक अनुष्ठान"
              titleEnglish="Featured Spiritual Services"
              titleHindi="प्रमुख वैदिक एवं पौराणिक अनुष्ठान"
              description="Conducted with traditional Vedic vidhi, pure samagri, and heartfelt devotion for peace, protection, and prosperity in your home."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E5E2DA] hover:border-[#2D4739]/40 shadow-2xs hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-[#F1EFEA]">
                    <Image
                      src={service.imageUrl}
                      alt={service.titleEnglish}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/85 via-[#1E221E]/20 to-transparent" />

                    <div className="absolute bottom-3.5 left-4 right-4">
                      <span className="text-white/80 font-devanagari text-xs font-medium block">
                        {service.titleHindi}
                      </span>
                      <h3 className="text-lg font-serif text-white tracking-wide font-semibold">
                        {service.titleEnglish}
                      </h3>
                    </div>

                    {service.featured && (
                      <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#2D4739] text-white text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1 shadow-2xs">
                        <Sparkles className="w-2.5 h-2.5" /> Popular
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between text-xs pt-0.5">
                      <span className="inline-flex items-center gap-1.5 text-[#5E645E] font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#2D4739]" /> {service.duration}
                      </span>
                      <span className="text-[11px] font-medium text-[#2D4739] bg-[#F1EFEA] px-2.5 py-0.5 rounded-full border border-[#E5E2DA]">
                        Contact for Pricing
                      </span>
                    </div>

                    <p className="text-xs text-[#5E645E] font-normal leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 border-t border-[#E5E2DA] flex items-center justify-between">
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-xs font-semibold text-[#2D4739] hover:text-[#1E221E] transition-colors inline-flex items-center gap-1"
                      >
                        <span>Vidhi & Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#2D4739] hover:bg-[#22362B] text-white text-[11px] font-semibold transition-colors"
                      >
                        <Calendar className="w-3 h-3 text-white/80" />
                        <span>Book</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-widest font-semibold shadow-2xs hover:shadow-md transition-all"
              >
                <span>View All 8 Sacred Ceremonies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: The Three Vedas Overview */}
        <section className="py-20 md:py-24 bg-[#F1EFEA] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Scriptural Foundations"
              badgeHindi="वेदों का ज्ञान"
              titleEnglish="The Three Vedas of Mastery"
              titleHindi="यजुर्वेद • सामवेद • अथर्ववेद"
              description="The eternal source of sacred rituals, peaceful chanting, and spiritual wellbeing preserved through traditional learning."
            />

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
                  <div className="relative h-52 w-full overflow-hidden bg-[#F1EFEA]">
                    <Image
                      src={veda.imageUrl}
                      alt={veda.titleEnglish}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/85 via-[#1E221E]/25 to-transparent" />

                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="text-white/80 font-devanagari text-base font-medium block mb-0.5">
                        {veda.titleHindi}
                      </span>
                      <h3 className="text-2xl font-serif text-white tracking-wide font-semibold">
                        {veda.titleEnglish}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="p-3 bg-[#F9F8F4] border-l-2 border-[#2D4739] rounded-r-lg">
                      <p className="font-devanagari text-xs text-[#1E221E] font-medium italic truncate">
                        &quot;{veda.sanskritVerse}&quot;
                      </p>
                      <p className="text-[11px] text-[#5E645E] font-serif truncate mt-1">
                        {veda.verseTranslation}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5E645E] font-normal leading-relaxed line-clamp-3">
                      {veda.description}
                    </p>

                    <div className="pt-2 border-t border-[#E5E2DA]">
                      <Link
                        href="/vedic-knowledge"
                        className="w-full inline-flex items-center justify-between text-xs uppercase tracking-wider text-[#2D4739] hover:text-[#1E221E] font-semibold py-1 transition-colors"
                      >
                        <span>Explore Teachings</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/vedic-knowledge"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#F9F8F4] border border-[#E5E2DA] text-[#1E221E] text-xs uppercase tracking-widest font-semibold shadow-2xs hover:shadow-md transition-all"
              >
                <span>Explore Full Scriptural Foundations</span>
                <ArrowRight className="w-4 h-4 text-[#2D4739]" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Moments of Devotion (Gallery Showcase) */}
        <section className="py-20 md:py-24 bg-[#F9F8F4] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Moments of Devotion"
              badgeHindi="चित्र वीथिका"
              titleEnglish="A Glimpse of Spiritual Journey"
              titleHindi="आध्यात्मिक यात्रा की एक झलक"
              description="Moments of solemn Havans, Abhishekams, and traditional ceremonies performed with sincere devotion."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredGallery.map((item) => (
                <div
                  key={item.id}
                  className="group relative h-64 rounded-2xl overflow-hidden bg-[#F1EFEA] border border-[#E5E2DA] shadow-2xs hover:shadow-md transition-all duration-300"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/85 via-[#1E221E]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

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
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-widest font-semibold shadow-2xs hover:shadow-md transition-all"
              >
                <span>View Complete Photo Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: Consultation & Booking Banner */}
        <section className="py-16 md:py-20 bg-[#F1EFEA] relative border-t border-[#E5E2DA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E2DA] text-center shadow-xs space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F1EFEA] text-[#2D4739] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#2D4739] font-semibold block mb-2">
                  पूजा एवं अनुष्ठान संकल्प
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1E221E] font-semibold">
                  Reserve Your Auspicious Ceremony
                </h3>
                <p className="text-xs sm:text-sm text-[#5E645E] mt-2 max-w-md mx-auto leading-relaxed">
                  Connect with Acharya Shri Nandan Mishra for traditional Hindu pujas, Yagya, Rudrabhishek, and personalized spiritual guidance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-widest font-semibold shadow-2xs hover:shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4 text-white/80" />
                  <span>Reserve Ceremony Online</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F9F8F4] hover:bg-white border border-[#E5E2DA] text-[#1E221E] text-xs uppercase tracking-widest font-semibold transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#2D4739]" />
                  <span>Chat on WhatsApp (+91 94143 19347)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Controls */}
      <FloatingWhatsApp />
      <AudioPlayer />
    </div>
  );
};
