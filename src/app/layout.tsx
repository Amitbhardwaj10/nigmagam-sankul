import type { Metadata } from "next";
import { Lora, DM_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "निगमागम संकुल | आचार्य श्री नन्दन मिश्र - Vedic Scholar & Spiritual Priest",
  description:
    "निगमागम संकुल - वैदिक आचार्य श्री नन्दन मिश्र के मार्गदर्शन में प्रामाणिक वैदिक पूजा, यज्ञ, रुद्राभिषेक, गृह प्रवेश एवं अनुष्ठान सेवाएं।",
  keywords: [
    "निगमागम संकुल",
    "Nigmagam Sankul",
    "Shri Nandan Mishra",
    "Acharya Shri Nandan Mishra",
    "आचार्य श्री नन्दन मिश्र",
    "Pandit ji",
    "Vedic Scholar",
    "Spiritual Priest",
    "वैदिक आचार्य",
    "कर्मकाण्ड",
    "Yajurveda",
    "Atharvaveda",
    "Samaveda",
    "Rudrabhishek",
    "Yagya Havan",
    "Puja Booking",
  ],
  authors: [{ name: "निगमागम संकुल - आचार्य श्री नन्दन मिश्र" }],
  openGraph: {
    title: "निगमागम संकुल | वैदिक आचार्य श्री नन्दन मिश्र",
    description:
      "निगमागम संकुल - वैदिक ज्ञान एवं सनातन संस्कृति की दिव्य परंपरा। प्रामाणिक वैदिक अनुष्ठान एवं धार्मिक सेवाएं।",
    type: "website",
    locale: "hi_IN",
    siteName: "निगमागम संकुल",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${dmSans.variable} ${notoDevanagari.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F9F8F4] text-[#1E221E] antialiased selection:bg-[#2D4739]/15 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
