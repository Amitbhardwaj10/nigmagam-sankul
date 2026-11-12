import type { Metadata } from "next";
import { HomeClient } from "@/components/home/HomeClient";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "निगमागम संकुल | आचार्य श्री नन्दन मिश्र - Vedic Scholar & Spiritual Services",
  description:
    "निगमागम संकुल - वैदिक आचार्य श्री नन्दन मिश्र के मार्गदर्शन में पारंपरिक वैदिक पूजा, यज्ञ, रुद्राभिषेक, गृह प्रवेश एवं अनुष्ठान।",
  keywords: [
    "निगमागम संकुल",
    "Nigmagam Sankul",
    "Shri Nandan Mishra",
    "आचार्य श्री नन्दन मिश्र",
    "Pandit ji",
    "Vedic Scholar",
    "Spiritual Priest",
    "Yajurveda",
    "Atharvaveda",
    "Samaveda",
    "Rudrabhishek",
    "Yagya Havan",
    "Puja Booking",
    "Vedic Rituals",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.websiteNameHindi,
    alternateName: siteConfig.websiteNameEnglish,
    founder: {
      "@type": "Person",
      name: siteConfig.acharyaNameHindi,
      jobTitle: siteConfig.englishTitle,
    },
    description: siteConfig.heroDescription,
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Varanasi",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    knowsAbout: ["Yajurveda", "Atharvaveda", "Samaveda", "Vedic Rituals", "Vastu Shanti", "Yagya"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
