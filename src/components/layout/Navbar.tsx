"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Vedic Knowledge", href: "/vedic-knowledge" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F9F8F4]/95 backdrop-blur-md shadow-xs border-b border-[#E5E2DA] py-3.5"
          : "bg-[#F9F8F4]/90 backdrop-blur-xs border-b border-[#E5E2DA]/60 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* LEFT: Brand Logo & Title */}
          <Link
            href="/"
            className="flex flex-col group text-left shrink-0"
          >
            <span className="font-devanagari text-xl sm:text-2xl font-bold tracking-wide text-[#1E221E] group-hover:text-[#2D4739] transition-colors leading-tight">
              {siteConfig.websiteNameHindi}
            </span>
            <span className="text-[11px] text-[#5E645E] font-normal tracking-wide flex items-center gap-1.5 mt-0.5">
              <span className="font-devanagari">{siteConfig.acharyaNameHindi}</span>
              <span className="hidden sm:inline font-devanagari text-[#2D4739]">
                • वैदिक शोध एवं अनुष्ठान
              </span>
            </span>
          </Link>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 px-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] tracking-wide transition-colors relative py-1 whitespace-nowrap ${
                    isActive
                      ? "text-[#2D4739] font-semibold"
                      : "text-[#5E645E] font-medium hover:text-[#1E221E]"
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2D4739] rounded-full" />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2D4739] transition-all duration-300 group-hover:w-full rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full text-[#5E645E] hover:text-[#2D4739] hover:bg-[#F1EFEA] border border-[#E5E2DA] transition-colors cursor-pointer"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs font-semibold tracking-wider uppercase shadow-2xs hover:shadow-md transition-all duration-200 transform active:scale-98 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white/80" />
              <span>Book a Puja</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="sm:hidden inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#2D4739] text-white text-xs font-medium"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1E221E] hover:bg-[#F1EFEA] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#F9F8F4] border-b border-[#E5E2DA] px-6 pt-4 pb-6 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm py-2 border-b border-[#E5E2DA]/60 transition-colors ${
                      isActive
                        ? "text-[#2D4739] font-bold"
                        : "text-[#5E645E] font-medium hover:text-[#1E221E]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full bg-[#2D4739] text-white text-xs uppercase tracking-wider font-semibold shadow-2xs"
                >
                  Book a Puja Ceremony
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 rounded-full border border-[#2D4739]/30 text-[#2D4739] text-xs font-medium"
                >
                  WhatsApp: +91 94143 19347
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
