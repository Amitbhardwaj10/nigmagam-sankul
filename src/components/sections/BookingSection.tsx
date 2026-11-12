"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import { generateWhatsAppBookingUrl } from "@/lib/utils";
import { BookingFormData } from "@/types";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
  MessageSquare,
  Sparkles,
  CheckCircle,
  MessageCircle,
  Send,
} from "lucide-react";

// Schema for Indian Mobile number & booking fields
const bookingSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name (minimum 2 characters)" }),
  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, {
      message: "Please enter a valid 10-digit Indian mobile number (e.g. 9414319347)",
    }),
  service: z.string().min(1, { message: "Please select a puja or ceremony" }),
  preferredDate: z.string().min(1, { message: "Please select a preferred date" }),
  preferredTime: z.string().min(1, { message: "Please specify preferred time (e.g. Morning / Muhurat)" }),
  location: z
    .string()
    .min(2, { message: "Please enter your city, area, or state" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof bookingSchema>;

interface BookingSectionProps {
  preselectedService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
}) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      service: preselectedService || servicesData[0]?.titleEnglish || "Yagya & Havan",
      preferredDate: "",
      preferredTime: "Morning (प्रातःकाल - Shubh Muhurat)",
      location: "",
      message: "",
    },
  });

  useEffect(() => {
    if (preselectedService) {
      setValue("service", preselectedService);
    }
  }, [preselectedService, setValue]);

  const onSubmit = (data: FormValues) => {
    setSubmittedData(data);
    setIsSubmitted(true);

    // Generate formatted WhatsApp URL and open in new tab
    const url = generateWhatsAppBookingUrl(data);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    reset();
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-[#F1EFEA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Booking & Consultation"
          badgeHindi="अनुष्ठान संकल्प"
          titleEnglish="Book Your Religious Ceremony"
          titleHindi="वैदिक अनुष्ठान एवं पूजा बुकिंग"
          description="Enter your ceremony details below. When you click proceed, your details will open directly in WhatsApp with Acharya Shri Nandan Mishra."
        />

        <div className="bg-white rounded-3xl border border-[#E5E2DA] shadow-sm p-6 sm:p-10 md:p-12 relative overflow-hidden">
          {/* Subtle top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#2D4739]" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#252A25] mb-2">
                      Full Name (यजमान का नाम) <span className="text-[#812D2D]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#686B63]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Chandra Sharma"
                        {...register("fullName")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FCFBF7] border text-sm text-[#252A25] placeholder-[#8E9289] focus:outline-none focus:ring-2 focus:ring-[#344C40] transition-colors ${
                          errors.fullName ? "border-[#812D2D]" : "border-[#E8E2D6]"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[11px] text-[#812D2D] mt-1.5">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#252A25] mb-2">
                      Mobile Number (WhatsApp) <span className="text-[#812D2D]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#686B63]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit number (e.g. 9414319347)"
                        {...register("mobileNumber")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FCFBF7] border text-sm text-[#252A25] placeholder-[#8E9289] focus:outline-none focus:ring-2 focus:ring-[#344C40] transition-colors ${
                          errors.mobileNumber ? "border-[#812D2D]" : "border-[#E8E2D6]"
                        }`}
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="text-[11px] text-[#812D2D] mt-1.5">
                        {errors.mobileNumber.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E221E] mb-2">
                    Select Puja / Service (अनुष्ठान का चयन) <span className="text-[#812D2D]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5E645E]">
                      <Sparkles className="w-4 h-4 text-[#2D4739]" />
                    </div>
                    <select
                      {...register("service")}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FCFBF7] border text-sm text-[#252A25] focus:outline-none focus:ring-2 focus:ring-[#344C40] transition-colors appearance-none cursor-pointer ${
                        errors.service ? "border-[#812D2D]" : "border-[#E8E2D6]"
                      }`}
                    >
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.titleEnglish}>
                          {svc.titleEnglish} ({svc.titleHindi})
                        </option>
                      ))}
                      <option value="Other Vedic Ceremony / Consultation">
                        Other Vedic Ceremony / Consultation (अन्य वैदिक अनुष्ठान)
                      </option>
                    </select>
                  </div>
                  {errors.service && (
                    <p className="text-[11px] text-[#812D2D] mt-1.5">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#252A25] mb-2">
                      Preferred Date (तिथि) <span className="text-[#812D2D]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#686B63]">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        min={today}
                        {...register("preferredDate")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FCFBF7] border text-sm text-[#252A25] focus:outline-none focus:ring-2 focus:ring-[#344C40] transition-colors ${
                          errors.preferredDate ? "border-[#812D2D]" : "border-[#E8E2D6]"
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="text-[11px] text-[#812D2D] mt-1.5">
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#252A25] mb-2">
                      Preferred Time (समय) <span className="text-[#812D2D]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#686B63]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        {...register("preferredTime")}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FCFBF7] border border-[#E8E2D6] text-sm text-[#252A25] focus:outline-none focus:ring-2 focus:ring-[#344C40] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="Morning (प्रातःकाल - Shubh Muhurat)">Morning (प्रातःकाल)</option>
                        <option value="Afternoon (मध्याह्नकाल)">Afternoon (मध्याह्नकाल)</option>
                        <option value="Evening (सायंकाल / प्रदोष)">Evening (सायंकाल)</option>
                        <option value="As per Astrological Muhurat">As per Astrological Muhurat</option>
                      </select>
                    </div>
                  </div>

                  {/* City / Location */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#252A25] mb-2">
                      City / Location (स्थान) <span className="text-[#812D2D]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#686B63]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Varanasi, Delhi, Mumbai"
                        {...register("location")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FCFBF7] border text-sm text-[#252A25] placeholder-[#8E9289] focus:outline-none focus:ring-2 focus:ring-[#344C40] transition-colors ${
                          errors.location ? "border-[#812D2D]" : "border-[#E8E2D6]"
                        }`}
                      />
                    </div>
                    {errors.location && (
                      <p className="text-[11px] text-[#812D2D] mt-1.5">
                        {errors.location.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#252A25] mb-2">
                    Additional Message / Specific Requirements (विशिष्ट विवरण)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-[#686B63]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific Gotra, family members, questions regarding Samagri, or special requests..."
                      {...register("message")}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FCFBF7] border border-[#E8E2D6] text-sm text-[#252A25] placeholder-[#8E9289] focus:outline-none focus:ring-2 focus:ring-[#344C40] transition-colors"
                    />
                  </div>
                </div>

                {/* Submission CTA */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#5E645E]">
                    <MessageCircle className="w-4 h-4 text-[#2D4739]" />
                    <span>Connects directly to Acharya Ji&apos;s WhatsApp (+91 94143 19347).</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-widest font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform active:scale-98 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>{isSubmitting ? "Processing..." : "Proceed to WhatsApp Booking"}</span>
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success State Card */
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 bg-[#2D4739]/10 rounded-full flex items-center justify-center mx-auto text-[#2D4739]">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <div>
                  <span className="font-devanagari text-base text-[#2D4739] font-medium block">
                    संकल्प विवरण प्रेषित
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1E221E] font-semibold">
                    Booking Request Prepared
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E645E] mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, {submittedData?.fullName}. Your ceremony details have been formatted and opened in WhatsApp.
                  </p>
                </div>

                {/* Summary Card */}
                {submittedData && (
                  <div className="bg-[#F9F8F4] p-5 rounded-2xl border border-[#E5E2DA] max-w-md mx-auto text-left text-xs space-y-2 text-[#1E221E]">
                    <div className="flex justify-between border-b border-[#E5E2DA] pb-1.5">
                      <span className="text-[#5E645E]">Ceremony:</span>
                      <span className="font-semibold text-[#2D4739]">{submittedData.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E2DA] pb-1.5">
                      <span className="text-[#5E645E]">Date & Time:</span>
                      <span className="font-medium">{submittedData.preferredDate} ({submittedData.preferredTime})</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E2DA] pb-1.5">
                      <span className="text-[#5E645E]">Location:</span>
                      <span className="font-medium">{submittedData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5E645E]">Contact Mobile:</span>
                      <span className="font-medium">{submittedData.mobileNumber}</span>
                    </div>
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {submittedData && (
                    <a
                      href={generateWhatsAppBookingUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#2D4739] hover:bg-[#22362B] text-white text-xs uppercase tracking-wider font-semibold shadow-2xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Re-open WhatsApp Chat</span>
                    </a>
                  )}

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#E5E2DA] text-[#5E645E] hover:text-[#1E221E] text-xs uppercase tracking-wider font-semibold hover:bg-[#F1EFEA] transition-colors cursor-pointer"
                  >
                    Submit Another Booking
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
