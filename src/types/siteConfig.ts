import { Destination, Testimonial } from '../types';

export interface BrandingConfig {
  brandName: string;
  tagline: string;
  logoUrl: string; // Base64 data URL or external URL
  logoHeight: number; // in pixels (e.g. 36)
  logoAlt: string;
}

export interface ContactConfig {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  officeHours: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
}

export interface HeroConfig {
  eyebrowBadge: string;
  eyebrowSubtext: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  statVisas: string;
  statRate: string;
  statUnis: string;
  statScholarships: string;
}

export interface CountriesSectionConfig {
  badge: string;
  title: string;
  description: string;
  items: Destination[];
}

export interface ServiceItemConfig {
  id: string;
  tag: string;
  title: string;
  description: string;
  accent: 'blue' | 'teal' | 'indigo' | 'amber' | 'emerald' | 'rose' | 'sky';
  iconName: string;
}

export interface ServicesSectionConfig {
  badge: string;
  title: string;
  description: string;
  items: ServiceItemConfig[];
}

export interface RoadmapStepConfig {
  step: string;
  title: string;
  desc: string;
  detail: string;
}

export interface HowItWorksConfig {
  badge: string;
  title: string;
  description: string;
  steps: RoadmapStepConfig[];
  liveClassesCta: {
    badge: string;
    subtext: string;
    title: string;
    description: string;
    buttonText: string;
  };
}

export interface LiveClassItem {
  id: string;
  title: string;
  category: string;
  mentor: string;
  mentorRole: string;
  duration: string;
  isLive?: boolean;
  liveTime?: string;
  studentsCount: number;
  thumbnail: string;
  youtubeId: string;
  description: string;
}

export interface LiveClassesConfig {
  classes: LiveClassItem[];
}

export interface TestimonialsSectionConfig {
  badge: string;
  title: string;
  description: string;
  items: Testimonial[];
}

export interface SecurityConfig {
  adminSecretKey: string;
}

export interface SiteConfig {
  branding: BrandingConfig;
  contact: ContactConfig;
  hero: HeroConfig;
  countries: CountriesSectionConfig;
  services: ServicesSectionConfig;
  howItWorks: HowItWorksConfig;
  liveClasses: LiveClassesConfig;
  testimonials: TestimonialsSectionConfig;
  security?: SecurityConfig;
}
