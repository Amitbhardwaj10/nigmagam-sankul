import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { AudioPlayer } from "@/components/layout/AudioPlayer";
import {
  Clock,
  CheckCircle2,
  PackageCheck,
  Calendar,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found | Shri Nandan Mishra",
    };
  }

  return {
    title: `${service.titleEnglish} (${service.titleHindi}) | Shri Nandan Mishra`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.titleEnglish} | Acharya Shri Nandan Mishra`,
      description: service.shortDesc,
      images: [{ url: service.imageUrl }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Pranam Acharya Shri Nandan Mishra Ji, I would like to inquire about booking the ${service.titleEnglish} (${service.titleHindi}) ceremony.`
  )}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F9F8F4] pt-24 pb-20">
        {/* Breadcrumb / Back Navigation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#5E645E] hover:text-[#1E221E] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Spiritual Services</span>
          </Link>
        </div>

        {/* Hero Section of Service */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-72 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden border border-[#E5E2DA] shadow-sm mb-10 bg-[#F1EFEA]">
            <Image
              src={service.imageUrl}
              alt={service.titleEnglish}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/90 via-[#1E221E]/35 to-transparent" />

            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 text-white">
              <span className="font-devanagari text-xl sm:text-2xl text-white/80 block mb-1 font-medium">
                {service.titleHindi}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide">
                {service.titleEnglish}
              </h1>
              <p className="text-xs sm:text-sm text-white/85 max-w-2xl mt-2 font-normal">
                {service.shortDesc}
              </p>
            </div>
          </div>

          {/* Quick Specifications Pill Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-[#E5E2DA] shadow-2xs mb-10">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-[#1E221E]">
                <Clock className="w-4 h-4 text-[#2D4739]" />
                <span className="font-semibold">Estimated Duration:</span>
                <span className="text-[#5E645E]">{service.duration}</span>
              </div>
              <span className="text-[#E5E2DA]">•</span>
              <div className="flex items-center gap-2 text-xs text-[#1E221E]">
                <Sparkles className="w-4 h-4 text-[#2D4739]" />
                <span className="font-semibold">Pricing:</span>
                <span className="text-[#2D4739] font-medium bg-[#F1EFEA] px-2.5 py-0.5 rounded-full border border-[#E5E2DA]">
                  Contact for Pricing
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F1EFEA] border border-[#E5E2DA] text-[#1E221E] text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#2D4739]" />
                <span>Inquire on WhatsApp</span>
              </a>

              <Link
                href="/#booking"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-wider font-semibold transition-colors shadow-2xs"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Ceremony</span>
              </Link>
            </div>
          </div>

          {/* Main Editorial Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Detailed Description */}
              <div className="bg-white p-8 rounded-3xl border border-[#E5E2DA] shadow-2xs space-y-4">
                <h2 className="font-serif text-2xl text-[#1E221E] font-semibold">
                  Ceremony Overview & Significance
                </h2>
                <div className="w-12 h-0.5 bg-[#2D4739]" />
                <p className="text-sm md:text-base text-[#1E221E] leading-relaxed font-normal">
                  {service.fullDesc}
                </p>

                <div className="p-4 bg-[#F9F8F4] rounded-xl border-l-4 border-[#2D4739] mt-4">
                  <h4 className="text-xs uppercase tracking-wider text-[#2D4739] font-semibold mb-1">
                    Spiritual Fruit (Phala-Shruti)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5E645E] font-serif italic">
                    {service.significance}
                  </p>
                </div>
              </div>

              {/* Key Rituals Involved */}
              <div className="bg-white p-8 rounded-3xl border border-[#E5E2DA] shadow-2xs space-y-4">
                <h2 className="font-serif text-2xl text-[#1E221E] font-semibold">
                  Key Rituals & Vidhi Steps Included
                </h2>
                <div className="w-12 h-0.5 bg-[#2D4739]" />
                <p className="text-xs sm:text-sm text-[#5E645E] font-normal">
                  Conducted meticulously in accordance with Vedic tradition and Shastra guidelines:
                </p>

                <div className="space-y-3 pt-2">
                  {service.keyRituals.map((ritual, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F9F8F4] border border-[#E5E2DA]"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#F1EFEA] text-[#2D4739] text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5 border border-[#E5E2DA]">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[#1E221E]">{ritual}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Occasions */}
              <div className="bg-white p-8 rounded-3xl border border-[#E5E2DA] shadow-2xs space-y-4">
                <h2 className="font-serif text-2xl text-[#1E221E] font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#2D4739]" />
                  <span>Auspicious Days & Occasions</span>
                </h2>
                <div className="w-12 h-0.5 bg-[#2D4739]" />
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {service.bestOccasions.map((occasion, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#F9F8F4] border border-[#E5E2DA] rounded-xl text-xs sm:text-sm text-[#1E221E] font-medium"
                    >
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Samagri Checklist Card */}
              <div className="bg-[#F1EFEA] p-6 rounded-3xl border border-[#E5E2DA] space-y-4">
                <h3 className="font-serif text-xl text-[#1E221E] font-semibold flex items-center gap-2">
                  <PackageCheck className="w-5 h-5 text-[#2D4739]" />
                  <span>Required Samagri</span>
                </h3>
                <p className="text-xs text-[#5E645E] font-normal">
                  A detailed, authenticated list is shared upon booking confirmation:
                </p>
                <ul className="space-y-2.5 pt-2">
                  {service.samagriSummary.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#1E221E]">
                      <CheckCircle2 className="w-4 h-4 text-[#2D4739] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Assurance Card */}
              <div className="bg-white p-6 rounded-3xl border border-[#E5E2DA] space-y-4 shadow-2xs">
                <h3 className="font-serif text-lg text-[#1E221E] font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#2D4739]" />
                  <span>Acharya Ji&apos;s Assurance</span>
                </h3>
                <ul className="space-y-3 text-xs text-[#5E645E] font-normal">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D4739] mt-1.5 shrink-0" />
                    <span>Pure Vedic chanting with correct intonation and Swaras.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D4739] mt-1.5 shrink-0" />
                    <span>Step-by-step guidance on all Sankalpa rituals for the family.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D4739] mt-1.5 shrink-0" />
                    <span>Complete adherence to Shubh Muhurat times.</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#2D4739] text-white text-xs uppercase tracking-wider font-semibold transition-colors hover:bg-[#22362B]"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Chat with Acharya Ji</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Ceremonies Carousel/Grid */}
          <div className="mt-20 pt-12 border-t border-[#E5E2DA]">
            <h3 className="font-serif text-2xl text-[#1E221E] font-semibold mb-6">
              Other Vedic Ceremonies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E5E2DA] hover:border-[#2D4739]/40 shadow-2xs hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative h-36 w-full overflow-hidden bg-[#F1EFEA]">
                    <Image
                      src={rel.imageUrl}
                      alt={rel.titleEnglish}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E221E]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
                      <span className="font-devanagari text-xs text-white/80 block">
                        {rel.titleHindi}
                      </span>
                      <h4 className="font-serif text-sm font-semibold">{rel.titleEnglish}</h4>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-[#5E645E] line-clamp-2">{rel.shortDesc}</p>
                    <span className="text-[11px] font-semibold text-[#2D4739] mt-2 block group-hover:translate-x-1 transition-transform">
                      View Ceremony Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <AudioPlayer />
    </>
  );
}
