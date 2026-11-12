"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AudioPlayer } from "@/components/layout/AudioPlayer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VedicKnowledgeSection } from "@/components/sections/VedicKnowledgeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const HomeClient: React.FC = () => {
  const [preselectedService, setPreselectedService] = useState<string>("Yagya & Havan");

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#1E221E] flex flex-col selection:bg-[#2D4739]/15">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 2: Hero */}
        <HeroSection />

        {/* Section 3: About Me */}
        <AboutSection />

        {/* Section 4: Vedic Knowledge (The Three Vedas) */}
        <VedicKnowledgeSection />

        {/* Section 5: Religious Services */}
        <ServicesSection onSelectServiceForBooking={handleSelectService} />

        {/* Section 6: Why Choose Me */}
        <WhyChooseSection />

        {/* Section 7: Awards & Achievements */}
        <AwardsSection />

        {/* Section 8: Gallery */}
        <GallerySection />

        {/* Section 9: Booking Section */}
        <BookingSection preselectedService={preselectedService} />

        {/* Section 10: Contact Section */}
        <ContactSection />
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Persistent Floating Controls */}
      <FloatingWhatsApp />
      <AudioPlayer />
    </div>
  );
};

