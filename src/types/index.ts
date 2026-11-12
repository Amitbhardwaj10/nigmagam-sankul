export interface ServiceItem {
  id: string;
  slug: string;
  titleEnglish: string;
  titleHindi: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  significance: string;
  keyRituals: string[];
  samagriSummary: string[];
  bestOccasions: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface VedaCard {
  id: string;
  titleEnglish: string;
  titleHindi: string;
  sanskritVerse: string;
  verseTranslation: string;
  description: string;
  extendedDetails: {
    branches: string[];
    focus: string;
    significanceInRituals: string;
    relevanceToday: string;
  };
  imageUrl: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  titleHindi: string;
  description: string;
  icon: string;
}

export interface AwardItem {
  id: string;
  title: string;
  titleHindi: string;
  issuer: string;
  year: string;
  description: string;
  imageUrl: string;
  category: "Sanman" | "Certificate" | "Recognition" | "Honor";
}

export interface GalleryItem {
  id: string;
  title: string;
  titleHindi?: string;
  category: "Havan & Yagya" | "Rudrabhishek" | "Temple & Rituals" | "Ceremonies";
  imageUrl: string;
  caption: string;
}

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  message?: string;
}

