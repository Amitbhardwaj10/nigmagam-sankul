# निगमागम संकुल (Nigmagam Sankul)
### वैदिक एवं आध्यात्मिक संस्थान | Vedic & Spiritual Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

A modern, responsive personal portfolio and ceremony-booking web application for **निगमागम संकुल** under the venerable guidance of **आचार्य श्री नन्दन मिश्र** (*Vedic Scholar & Spiritual Priest / वैदिक आचार्य एवं कर्मकाण्ड विशेषज्ञ*).

---

## 🕊️ Overview & Vision

**निगमागम संकुल (Nigmagam Sankul)** is dedicated to the preservation, dissemination, and authentic execution of Sanatan Dharma's sacred Vedic traditions:
- **निगम (Nigama):** The eternal sacred Vedas and cosmic spiritual knowledge.
- **आगम (Agama):** Traditional liturgical scriptures, temple rituals, and sacred methods.
- **संकुल (Sankul):** A revered center, sanctuary, and assembly of Vedic scholars.

### Core Vedic Specialization
- **यजुर्वेद (Yajurveda):** Ritualistic methodology, Havans, Yagyas, and transformative mantras.
- **सामवेद (Samaveda):** Sacred musical chanting, divine rhythm, and celestial melodies.
- **अथर्ववेद (Atharvaveda):** Everyday living blessings, family harmony, peace, and spiritual protection.

---

## ✨ Key Features

1. **Modern Luxury Indian Heritage Aesthetic**
   - **Color Palette:** Warm Alabaster Off-White (`#F9F8F4`), Secondary Neutral (`#F1EFEA`), Pure White (`#FFFFFF`), Deep Charcoal Text (`#1E221E`), and Deep Forest Green (`#2D4739` / hover `#22362B`).
   - Clean, light surfaces, refined borders (`#E5E2DA`), and dignified typography without excessive ornamentation or garish gradients.

2. **Clean Bilingual Typography**
   - **English Headings:** *Lora* (refined serif)
   - **Body Text:** *DM Sans* (clean modern sans-serif)
   - **Hindi Headings & Shlokas:** *Noto Sans Devanagari* (authentic scriptural clarity)
   - Plain, respectful, and easily understandable English copy paired naturally with traditional Hindi titles.

3. **Vedic Knowledge Center**
   - Interactive deep dives into the Three Vedas (*Yajurveda, Atharvaveda, Samaveda*).
   - Dedicated modal cards with authentic Sanskrit shlokas, English translations, traditional Shakhas (branches), and spiritual significance.

4. **Sacred Ceremonies & Services**
   - Detailed coverage of 8 core religious ceremonies:
     - **यज्ञ एवं महाहवन (Yagya & Havan)**
     - **रुद्राभिषेक (Rudrabhishek)**
     - **दुर्गा सप्तशती पाठ (Durga Saptashati Path)**
     - **गृह प्रवेश एवं वास्तु शांति (Griha Pravesh & Vastu)**
     - **महामृत्युंजय अनुष्ठान (Mahamrityunjaya Anushthana)**
     - **नवग्रह शांति विधान (Navgrah Shanti Puja)**
     - **सत्यनारायण कथा (Satyanarayan Katha)**
     - **विवाह संस्कार एवं फेरे (Vivah Sanskar & Wedding Rites)**
   - Every service includes duration, essential Samagri list, ceremony steps, spiritual fruits (*Phala-Shruti*), and a dedicated SSG page at `/services/[slug]`.

5. **Direct WhatsApp Ceremony Booking**
   - Validated ceremony booking form using **React Hook Form** and **Zod**.
   - Generates formatted, pre-filled WhatsApp inquiries sent directly to **+91 94143 19347**.

6. **Spiritual Audio Drone Experience**
   - Ambient 136.1 Hz Om / Tanpura background drone (`/audio/vedic-mantra.mp3`) with Web Audio API synthesis fallback.
   - Clean, textless floating audio control widget (Play/Pause circular button, volume slider, mute toggle) stacked vertically directly above the WhatsApp floating icon on the bottom right.

7. **Recognitions & Visual Gallery**
   - Interactive certificate awards preview and categorized devotion gallery with responsive fullscreen lightbox viewer.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16.4 (App Router)** | Framework with Turbopack, SSR, and SSG static route generation |
| **React 19.3** | Component UI library |
| **TypeScript** | Type-safe enterprise code |
| **Tailwind CSS v4 & PostCSS** | Modern utility-first CSS engine |
| **Framer Motion** | Accessible, buttery-smooth UI transitions |
| **React Hook Form & Zod** | Robust form state and client-side validation |
| **Lucide React** | Clean, minimalist iconography |
| **Web Audio API & HTML5 Audio** | Resilient background Vedic drone audio |

---

## 📂 Project Structure

```
nigmagam-sankul/
├── public/
│   ├── audio/
│   │   └── vedic-mantra.mp3      # Loopable 136.1 Hz Om drone audio
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css           # Global theme variables & Tailwind v4
│   │   ├── layout.tsx            # Root layout with fonts & metadata
│   │   ├── page.tsx              # Home page with JSON-LD Schema.org
│   │   └── services/[slug]/
│   │       └── page.tsx          # Dedicated SSG pages for all 8 ceremonies
│   ├── components/
│   │   ├── home/
│   │   │   └── HomeClient.tsx    # Client-side home controller
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky 3-column header & mobile drawer
│   │   │   ├── Footer.tsx        # 4-column footer with Sanskrit quote
│   │   │   └── AudioPlayer.tsx   # Textless floating audio controls
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx   # Hero with authentic Yajna imagery
│   │   │   ├── AboutSection.tsx  # Bio, spiritual journey & credentials
│   │   │   ├── VedicKnowledgeSection.tsx # The Three Vedas cards
│   │   │   ├── ServicesSection.tsx       # 8 Sacred religious ceremonies
│   │   │   ├── WhyChooseSection.tsx      # 6 Guiding principles
│   │   │   ├── AwardsSection.tsx         # Certificate honors & awards
│   │   │   ├── GallerySection.tsx        # Filterable photo gallery
│   │   │   ├── BookingSection.tsx        # Ceremony reservation form
│   │   │   └── ContactSection.tsx        # Direct contact options
│   │   └── ui/
│   │       ├── FloatingWhatsApp.tsx      # WhatsApp quick-chat widget
│   │       ├── SectionHeading.tsx        # Unified bilingual headings
│   │       ├── ServiceModal.tsx          # Ceremony detail deep-dive modal
│   │       ├── VedaModal.tsx             # Veda teachings deep-dive modal
│   │       └── LightboxModal.tsx         # Fullscreen image viewer
│   ├── data/
│   │   ├── siteConfig.ts         # Brand copy, phone, email & social links
│   │   ├── services.ts           # 8 ceremony specifications
│   │   ├── vedas.ts              # Vedic texts, shlokas & translations
│   │   ├── whyChoose.ts          # Authentic service principles
│   │   ├── awards.ts             # Formal honors & recognitions
│   │   └── gallery.ts            # Photo gallery entries
│   └── types/
│       └── index.ts              # Global TypeScript interfaces
├── postcss.config.mjs            # PostCSS configuration for Tailwind v4
├── next.config.ts                # Next.js optimization configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Amitbhardwaj10/nigmagam-sankul.git
   cd nigmagam-sankul
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Start the production server:**
   ```bash
   npm run start
   ```

---

## 📞 Spiritual Guidance & Booking

For ceremony bookings, Muhurat consultations, or scriptural inquiries:
- **Presiding Scholar:** Acharya Shri Nandan Mishra (वैदिक आचार्य श्री नन्दन मिश्र)
- **WhatsApp Direct:** [+91 94143 19347](https://wa.me/919414319347)
- **Email:** `acharya.nandanmishra@gmail.com`
- **Locations:** Kashi (Varanasi), Uttar Pradesh & New Delhi, India

---

## 📜 License

© 2026 **निगमागम संकुल (Nigmagam Sankul)**. All rights reserved.
