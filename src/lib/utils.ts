import { BookingFormData } from "@/types";
import { siteConfig } from "@/data/siteConfig";

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function generateWhatsAppBookingUrl(data: BookingFormData): string {
  const text = `*Pranam Acharya Shri Nandan Mishra Ji,*

I would like to request a booking for a Vedic ceremony:

• *Devotee Name:* ${data.fullName.trim()}
• *Mobile Number:* ${data.mobileNumber.trim()}
• *Selected Ceremony:* ${data.service}
• *Preferred Date:* ${data.preferredDate}
• *Preferred Time:* ${data.preferredTime}
• *City / Location:* ${data.location.trim()}
${data.message ? `• *Special Notes:* ${data.message.trim()}\n` : ""}
Kindly let me know your availability, the Shubh Muhurat, and the necessary samagri list.

Dhanyavad.`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedText}`;
}

export function generateWhatsAppInquiryUrl(customTopic?: string): string {
  const message = customTopic
    ? `Pranam Acharya Shri Nandan Mishra Ji, I would like to inquire about ${customTopic}.`
    : `Pranam Acharya Shri Nandan Mishra Ji, I would like to seek spiritual guidance and inquire about Vedic ceremonies.`;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

