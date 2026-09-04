export type StudyDestinationId = 
  | 'usa' 
  | 'canada' 
  | 'uk' 
  | 'australia' 
  | 'germany' 
  | 'malaysia' 
  | 'uae' 
  | 'india';

export type StudyLevel = "Bachelor's" | "Master's" | "PhD" | "Foundation / Diploma";

export interface Destination {
  id: StudyDestinationId;
  name: string;
  flag: string;
  code: string;
  heroImage: string;
  flagImage?: string;
  shortDesc: string;
  popularFor: string;
  avgTuition: string;
  avgLiving: string;
  workPermit: string;
  universityCount: number;
  featuredUnis: string[];
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  country: string;
  flag: string;
  destinationId: StudyDestinationId;
  logo: string;
  ranking: string;
  location: string;
  featured: boolean;
}

export interface Course {
  id: string;
  title: string;
  universityId: string;
  universityName: string;
  universityLogo: string;
  country: string;
  flag: string;
  destinationId: StudyDestinationId;
  level: StudyLevel;
  duration: string;
  intake: string;
  tuitionUsd: number;
  tuitionBdt: string;
  scholarshipAvailable: string;
  scholarshipPercentMax: number;
  englishRequirement: string;
  category: string;
  overview: string;
  careerProspects: string[];
  requirements: {
    minGpa: string;
    ielts: string;
    duolingo?: string;
    deadline: string;
  };
}

export interface Scholarship {
  id: string;
  name: string;
  university: string;
  country: string;
  flag: string;
  level: string;
  amount: string;
  coverage: string;
  eligibility: string;
  deadline: string;
  badge: string;
  destinationId: StudyDestinationId;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  hometown: string;
  destination: string;
  flag: string;
  university: string;
  program: string;
  quote: string;
  rating: number;
  visaIntake: string;
  scholarshipReceived?: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  thumbnail: string;
  publishedDate: string;
  featuredContent: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CourseFilterState {
  destination: string;
  level: string;
  subject: string;
  intake: string;
  budget: string;
  englishTest: string;
  scholarshipOnly: boolean;
  searchQuery: string;
}
