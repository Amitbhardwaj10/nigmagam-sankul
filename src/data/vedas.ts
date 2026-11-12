import { VedaCard } from "@/types";

export const vedasData: VedaCard[] = [
  {
    id: "yajurveda",
    titleHindi: "यजुर्वेद",
    titleEnglish: "Yajurveda",
    sanskritVerse: "यज्ञो वै श्रेष्ठतमं कर्म",
    verseTranslation: "Yagya (selfless offering) is the highest of all actions.",
    description:
      "The Veda of sacred rituals, daily ceremonies, and prayers. It explains how to perform Havans, invoke divine blessings, and live in harmony with nature.",
    extendedDetails: {
      branches: ["Shukla Yajurveda", "Krishna Yajurveda"],
      focus: "Guidelines for sacred fire ceremonies, Yajna procedures, and the famous Sri Rudram hymn.",
      significanceInRituals:
        "Most Hindu ceremonies—from housewarming to weddings and Havans—draw their core mantras directly from the Yajurveda.",
      relevanceToday:
        "Teaches mindfulness, discipline, and the value of giving back to society and nature.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "atharvaveda",
    titleHindi: "अथर्ववेद",
    titleEnglish: "Atharvaveda",
    sanskritVerse: "माता भूमिः पुत्रो अहं पृथिव्याः",
    verseTranslation: "The Earth is my mother, and I am her child.",
    description:
      "The Veda focused on daily well-being, peace prayers (Shanti Mantras), family harmony, and living in balance with the environment.",
    extendedDetails: {
      branches: ["Shaunaka", "Paippalada"],
      focus: "Family health, protection, peaceful home life, and respect for nature (Bhumi Sukta).",
      significanceInRituals:
        "Provides the foundational peace mantras (Shanti Path) recited at the conclusion of every Hindu ceremony.",
      relevanceToday:
        "Highlights the connection between human lifestyle, mental peace, and environmental preservation.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "samaveda",
    titleHindi: "सामवेद",
    titleEnglish: "Samaveda",
    sanskritVerse: "वेदानां सामवेदोऽस्मि",
    verseTranslation: "Among the Vedas, I am the Samaveda. — Bhagavad Gita",
    description:
      "The Veda of sacred music and melodic chanting. It sets Vedic verses into musical notes, inspiring deep devotion and mental calm.",
    extendedDetails: {
      branches: ["Kauthuma", "Ranayaniya"],
      focus: "Sacred melodies (Sama Gana), meditation through sound, and devotional chanting.",
      significanceInRituals:
        "Chanted during large religious ceremonies and festivals to create an uplifting and peaceful atmosphere.",
      relevanceToday:
        "The ancient origin of Indian classical music, showing how sound and vibration bring calm to the mind.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1200&auto=format&fit=crop",
  },
];
