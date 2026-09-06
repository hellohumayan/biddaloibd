import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, ServiceItemConfig } from '../types/siteConfig';
import { destinationsData } from '../data/destinations';
import { testimonialsData } from '../data/testimonials';

const STORAGE_KEY = 'biddaloi_site_config_v2';

const DEFAULT_SERVICES: ServiceItemConfig[] = [
  {
    id: 'srv-1',
    iconName: 'Headphones',
    tag: 'Profile & Career',
    title: 'Counseling',
    description: 'Comprehensive profile assessment, course & university shortlisting tailored to your exact CGPA, budget, and long-term career aspirations abroad.',
    accent: 'blue'
  },
  {
    id: 'srv-2',
    iconName: 'BookOpenCheck',
    tag: 'IELTS, PTE & DET',
    title: 'Test Preparation',
    description: 'Diagnostic evaluations, targeted study resources, and scoring strategies for IELTS, TOEFL, PTE, GRE, and Duolingo English Test (DET).',
    accent: 'teal'
  },
  {
    id: 'srv-3',
    iconName: 'FileText',
    tag: 'Admission Filings',
    title: 'Application Assistance',
    description: 'Error-free university portal applications, professional Statement of Purpose (SOP) refinement, academic CV formatting, and LOR guidance.',
    accent: 'indigo'
  },
  {
    id: 'srv-4',
    iconName: 'Award',
    tag: 'Waivers & Grants',
    title: 'Scholarship Guidance',
    description: 'Identifying and applying for merit-based scholarships, tuition fee discounts, graduate research assistantships (RA), and teaching assistantships (TA).',
    accent: 'amber'
  },
  {
    id: 'srv-5',
    iconName: 'Landmark',
    tag: 'Bank & Affidavits',
    title: 'Financial and Doc Preparation',
    description: 'Transparent sponsor documentation, authentic bank solvency proof guidelines, student file opening at authorized commercial banks, and notarization.',
    accent: 'emerald'
  },
  {
    id: 'srv-6',
    iconName: 'ShieldCheck',
    tag: 'Embassy Interviews',
    title: 'Visa Processing',
    description: 'Comprehensive visa document checklist vetting, DS-160/portal submission, and rigorous 1-on-1 embassy mock interview training.',
    accent: 'rose'
  },
  {
    id: 'srv-7',
    iconName: 'PlaneTakeoff',
    tag: 'Post-Visa & Arrival',
    title: 'Pre-Departure Support',
    description: 'Airfare booking assistance, student housing arrangements, forex endorsement, transit briefing, and welcoming alumni network connections on campus.',
    accent: 'sky'
  },
  {
    id: 'srv-8',
    iconName: 'GraduationCap',
    tag: 'Zero Tuition',
    title: 'Free Education',
    description: 'Navigating 100% tuition-free public universities in Germany & Europe, full government fellowships, and zero-tuition higher education pathways.',
    accent: 'emerald'
  }
];

const DEFAULT_STEPS = [
  {
    step: '01',
    title: 'Profile Assessment & Course Search',
    desc: 'Evaluate your academic CGPA, IELTS/MOI scores, budget, and long-term career aspirations across global institutions.',
    detail: 'Complete within 24 hours with our senior education counselors.'
  },
  {
    step: '02',
    title: 'Application & Scholarship Filing',
    desc: 'Craft winning SOPs, format academic CVs, compile recommendation letters, and submit applications for maximum scholarships.',
    detail: 'Average offer letter turnaround: 7-14 business days.'
  },
  {
    step: '03',
    title: 'Financial Docs & Visa Interview',
    desc: 'Verify sponsor affidavits, open bank student files, review source of funds, and undergo embassy mock interview drills.',
    detail: 'Rigorous 1-on-1 embassy questions practice drills.'
  },
  {
    step: '04',
    title: 'Visa Stamping & Fly Abroad',
    desc: 'Receive your approved student visa, book subsidized student flights, arrange accommodation, and join alumni pre-departure briefings.',
    detail: 'Welcome community connection on campus arrival.'
  }
];

const DEFAULT_LIVE_CLASSES = [
  {
    id: 'vid-1',
    title: 'IELTS 7.5+ Band Masterclass: Speaking & Writing Secrets',
    category: 'Test Prep',
    mentor: 'Nafis Imtiaz',
    mentorRole: 'British Council Certified Trainer (Band 8.5)',
    duration: '45 mins',
    isLive: true,
    liveTime: 'Daily at 8:00 PM BST',
    studentsCount: 1420,
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Learn proven answer templates for IELTS Speaking Part 2 & 3, plus Task 2 essay structure that examiners look for.'
  },
  {
    id: 'vid-2',
    title: 'US Embassy Dhaka F-1 Visa Interview Simulation',
    category: 'Visa Interview',
    mentor: 'Tawhidur Rahman',
    mentorRole: 'University of Texas Alumni & Senior Visa Coach',
    duration: '38 mins',
    studentsCount: 2890,
    thumbnail: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Realistic mock drills simulating Madani Avenue consular officer questions: Why this university? Who is funding? Post-study plans.'
  },
  {
    id: 'vid-3',
    title: 'Winning Statement of Purpose (SOP) Masterclass',
    category: 'Application',
    mentor: 'Samira Anjum',
    mentorRole: 'McGill University Alum & SOP Specialist',
    duration: '42 mins',
    studentsCount: 1850,
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Step-by-step breakdown of high-acceptance SOPs: hook introduction, academic alignment, research experience, and career trajectory.'
  },
  {
    id: 'vid-4',
    title: 'Germany 100% Tuition-Free Education & APS Blueprint',
    category: 'Free Education',
    mentor: 'Arif Hossain',
    mentorRole: 'TU Munich Graduate & European Education Advisor',
    duration: '36 mins',
    studentsCount: 2130,
    thumbnail: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Complete roadmap to zero-tuition public universities in Germany: APS certificate procedure, blocked account setup, and Daad scholarships.'
  },
  {
    id: 'vid-5',
    title: 'Canadian Study Permit (SDS) & Bank Solvency Masterclass',
    category: 'Visa & Finance',
    mentor: 'Farhan Kabir',
    mentorRole: 'University of Alberta Graduate',
    duration: '40 mins',
    studentsCount: 1670,
    thumbnail: 'https://images.unsplash.com/photo-1517935703635-27190760468e?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'GIC account opening, tax return verification, authentic source of fund documentation, and avoiding Canadian visa refusal reasons.'
  },
  {
    id: 'vid-6',
    title: 'Full Scholarship & Graduate Assistantship (TA/RA) Guide',
    category: 'Scholarship',
    mentor: 'Dr. Mahbubul Alam',
    mentorRole: 'PhD Researcher, Monash University Australia',
    duration: '50 mins',
    studentsCount: 3100,
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'How to email international professors, find funded research projects, and secure monthly living stipends with tuition waivers.'
  }
];

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  branding: {
    brandName: 'Biddaloi',
    tagline: 'Bangladesh’s Premier Study Abroad Platform',
    logoUrl: 'https://www.biddaloi.com/biddaloiLogo.png',
    logoHeight: 28,
    logoAlt: 'Biddaloi Study Abroad Logo'
  },
  contact: {
    phone: '+880 1712-345678',
    whatsapp: '+880 1712-345678',
    email: 'counseling@biddaloi.com',
    address: 'House 42, Road 11, Block D, Banani, Dhaka-1213, Bangladesh',
    officeHours: 'Saturday – Thursday: 10:00 AM – 7:00 PM',
    facebookUrl: 'https://facebook.com',
    linkedinUrl: 'https://linkedin.com',
    youtubeUrl: 'https://youtube.com'
  },
  hero: {
    eyebrowBadge: 'More Than 12K+ Programs',
    eyebrowSubtext: '',
    headline: 'Find the Right University.',
    headlineHighlight: 'Build Your Future Abroad.',
    subheadline: 'Empowering Bangladeshi students to discover verified courses, secure maximum scholarships, and get transparent visa guidance for USA, Canada, UK, Australia & Europe.',
    primaryCtaText: 'Start Free Assessment',
    secondaryCtaText: 'Talk to an Expert',
    statVisas: '12,500+',
    statRate: '98.6%',
    statUnis: '850+',
    statScholarships: '$4.2M+'
  },
  countries: {
    badge: 'Global Institutional Network',
    title: 'Countries We Work With',
    description: 'Explore verified partner universities across USA, UK, Canada, Australia, Malaysia, India, UAE, China & Europe with transparent visa guidance, tuition waivers, and post-study work permits.',
    items: destinationsData
  },
  services: {
    badge: 'The Biddaloi Advantage',
    title: 'Services We Provide',
    description: 'From initial career counseling and test preparation to university admissions, financial documentation, visa processing, pre-departure support, and zero-tuition pathways.',
    items: DEFAULT_SERVICES
  },
  howItWorks: {
    badge: 'Transparent 4-Step Process',
    title: 'Your Road to Abroad',
    description: 'From your first counseling session to touching down at your dream campus abroad, our step-by-step guidance ensures clarity, compliance, and peace of mind.',
    steps: DEFAULT_STEPS,
    liveClassesCta: {
      badge: 'Live Masterclasses',
      subtext: '100% Free Learning',
      title: 'Watch Live Classes for Learning & Guidance',
      description: 'Attend interactive live sessions and video lessons on IELTS preparation, embassy visa mock interviews, university shortlisting, and high-converting SOP writing.',
      buttonText: 'Watch Videos'
    }
  },
  liveClasses: {
    classes: DEFAULT_LIVE_CLASSES
  },
  testimonials: {
    badge: 'Verified Visa Success',
    title: 'Real Student Stories',
    description: 'Hear from Bangladeshi students who transformed their dreams into reality with Biddaloi’s guidance.',
    items: testimonialsData
  },
  security: {
    adminSecretKey: 'Biddaloi4670@'
  }
};

interface SiteConfigContextType {
  config: SiteConfig;
  updateConfig: (newConfig: SiteConfig | ((prev: SiteConfig) => SiteConfig)) => void;
  updateSection: <K extends keyof SiteConfig>(section: K, value: Partial<SiteConfig[K]>) => void;
  uploadLogo: (file: File) => Promise<string>;
  removeLogo: () => void;
  resetToDefaults: () => void;
  exportConfigJson: () => string;
  importConfigJson: (jsonString: string) => boolean;
}

const SiteConfigContext = createContext<SiteConfigContextType | undefined>(undefined);

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const savedLogoUrl = parsed.branding?.logoUrl;
        const validLogoUrl = (savedLogoUrl && typeof savedLogoUrl === 'string' && savedLogoUrl.trim() !== '')
          ? savedLogoUrl
          : DEFAULT_SITE_CONFIG.branding.logoUrl;

        // Deep merge with defaults so new fields are always present
        return {
          ...DEFAULT_SITE_CONFIG,
          ...parsed,
          branding: { 
            ...DEFAULT_SITE_CONFIG.branding, 
            ...(parsed.branding || {}),
            logoUrl: validLogoUrl
          },
          contact: { ...DEFAULT_SITE_CONFIG.contact, ...(parsed.contact || {}) },
          hero: { 
            ...DEFAULT_SITE_CONFIG.hero, 
            ...(parsed.hero || {}),
            eyebrowBadge: (parsed.hero?.eyebrowBadge && parsed.hero.eyebrowBadge !== 'Bangladesh’s Trusted Study Abroad Platform')
              ? parsed.hero.eyebrowBadge
              : 'More Than 12K+ Programs',
            eyebrowSubtext: (parsed.hero?.eyebrowSubtext && 
              parsed.hero.eyebrowSubtext !== '100% Free Counseling' && 
              parsed.hero.eyebrowSubtext !== '100% Free Counseling To More Than 12K+ Programs')
              ? parsed.hero.eyebrowSubtext
              : ''
          },
          countries: { 
            ...DEFAULT_SITE_CONFIG.countries, 
            ...(parsed.countries || {}),
            items: (parsed.countries?.items?.length && parsed.countries.items.some((c: any) => c.id === 'china')) 
              ? parsed.countries.items 
              : DEFAULT_SITE_CONFIG.countries.items
          },
          services: { 
            ...DEFAULT_SITE_CONFIG.services, 
            ...(parsed.services || {}),
            items: parsed.services?.items?.length ? parsed.services.items : DEFAULT_SITE_CONFIG.services.items
          },
          howItWorks: { 
            ...DEFAULT_SITE_CONFIG.howItWorks, 
            ...(parsed.howItWorks || {}),
            steps: parsed.howItWorks?.steps?.length ? parsed.howItWorks.steps : DEFAULT_SITE_CONFIG.howItWorks.steps,
            liveClassesCta: { ...DEFAULT_SITE_CONFIG.howItWorks.liveClassesCta, ...(parsed.howItWorks?.liveClassesCta || {}) }
          },
          liveClasses: { 
            ...DEFAULT_SITE_CONFIG.liveClasses, 
            ...(parsed.liveClasses || {}),
            classes: parsed.liveClasses?.classes?.length ? parsed.liveClasses.classes : DEFAULT_SITE_CONFIG.liveClasses.classes
          },
          testimonials: { 
            ...DEFAULT_SITE_CONFIG.testimonials, 
            ...(parsed.testimonials || {}),
            items: parsed.testimonials?.items?.length ? parsed.testimonials.items : DEFAULT_SITE_CONFIG.testimonials.items
          },
          security: {
            adminSecretKey: parsed.security?.adminSecretKey || 'Biddaloi4670@'
          }
        };
      }
    } catch (e) {
      console.error('Failed to parse site config from localStorage:', e);
    }
    return DEFAULT_SITE_CONFIG;
  });

  // Save to localStorage on any config change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (e) {
      console.error('Failed to persist site config to localStorage:', e);
    }
  }, [config]);

  const updateConfig = (newConfig: SiteConfig | ((prev: SiteConfig) => SiteConfig)) => {
    setConfig(prev => {
      const next = typeof newConfig === 'function' ? newConfig(prev) : newConfig;
      return next;
    });
  };

  const updateSection = <K extends keyof SiteConfig>(section: K, value: Partial<SiteConfig[K]>) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...value
      }
    }));
  };

  // Helper to convert an uploaded image to a web-friendly Data URL (with client-side resize if > 1MB)
  const uploadLogo = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith('image/')) {
        reject(new Error('Please upload an image file (PNG, JPG, SVG, WebP).'));
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (!result) {
          reject(new Error('Failed to read image file.'));
          return;
        }

        // Check if SVG - SVGs don't need canvas compression
        if (file.type === 'image/svg+xml') {
          updateSection('branding', { logoUrl: result });
          resolve(result);
          return;
        }

        // For large raster images, scale to max width 800px to keep localStorage well under 2MB
        const img = new Image();
        img.onload = () => {
          const maxDim = 800;
          let width = img.width;
          let height = img.height;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const optimizedDataUrl = canvas.toDataURL('image/png', 0.92);
            updateSection('branding', { logoUrl: optimizedDataUrl });
            resolve(optimizedDataUrl);
          } else {
            updateSection('branding', { logoUrl: result });
            resolve(result);
          }
        };
        img.onerror = () => {
          updateSection('branding', { logoUrl: result });
          resolve(result);
        };
        img.src = result;
      };
      reader.onerror = () => reject(new Error('File reading error.'));
      reader.readAsDataURL(file);
    });
  };

  const removeLogo = () => {
    updateSection('branding', { logoUrl: '' });
  };

  const resetToDefaults = () => {
    setConfig(DEFAULT_SITE_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const exportConfigJson = (): string => {
    return JSON.stringify(config, null, 2);
  };

  const importConfigJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === 'object') {
        setConfig({
          ...DEFAULT_SITE_CONFIG,
          ...parsed
        });
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON import:', e);
    }
    return false;
  };

  return (
    <SiteConfigContext.Provider
      value={{
        config,
        updateConfig,
        updateSection,
        uploadLogo,
        removeLogo,
        resetToDefaults,
        exportConfigJson,
        importConfigJson
      }}
    >
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = (): SiteConfigContextType => {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error('useSiteConfig must be used within a SiteConfigProvider');
  }
  return context;
};
