export interface PartnershipTier {
  name: string;
  sharePercentage: number;
  visaRange: string;
  badge: string;
  color: string;
  perks: string[];
  isPopular?: boolean;
}

export interface UniversityCommissionSample {
  country: string;
  flag: string;
  avgTuitionUsd: number;
  avgGrossCommissionUsd: number;
  commissionRateLabel: string;
  partnerShare75Usd: number;
  partnerShare75Bdt: string;
}

export interface PartnerFaq {
  question: string;
  answer: string;
  category: 'commission' | 'operations' | 'eligibility' | 'payments';
}

export const PARTNERSHIP_TIERS: PartnershipTier[] = [
  {
    name: 'Silver Partner',
    sharePercentage: 55,
    visaRange: '1 – 5 Successful Visas / year',
    badge: 'Starter Tier',
    color: 'border-slate-300 text-slate-700 bg-slate-50',
    perks: [
      '55% gross university commission share',
      'Direct access to 1,200+ university partner portals',
      'Dedicated Dhaka application processing officer',
      '48–72 hr preliminary document assessment',
      'Standard BDT or USD wire payouts'
    ]
  },
  {
    name: 'Gold Partner',
    sharePercentage: 65,
    visaRange: '6 – 15 Successful Visas / year',
    badge: 'Growth Tier',
    color: 'border-blue-300 text-blue-800 bg-blue-50',
    perks: [
      '65% gross university commission share',
      'Priority application submission & express review',
      'Free visa mock interview training for students',
      'Co-branded marketing brochures & posters',
      'Direct WhatsApp helpline with senior admissions head'
    ]
  },
  {
    name: 'Platinum Partner',
    sharePercentage: 70,
    visaRange: '16 – 30 Successful Visas / year',
    badge: 'Elite Tier',
    color: 'border-purple-300 text-purple-800 bg-purple-50',
    isPopular: true,
    perks: [
      '70% gross university commission share',
      'Fast-track offer letters directly from university liaisons',
      'Embassy SOP & financial document vetting desk',
      'University delegate roadshow hosting in your city/center',
      'Dedicated relationship account manager'
    ]
  },
  {
    name: 'Diamond Master Partner',
    sharePercentage: 75,
    visaRange: '31+ Successful Visas / year',
    badge: 'Maximum Revenue Share',
    color: 'border-emerald-400 text-emerald-900 bg-emerald-50',
    perks: [
      'Up to 75% maximum gross university commission share',
      'Highest priority processing with same-day application lodging',
      'Co-funded district marketing campaigns & digital ads',
      'Direct university representative visits at your office',
      'Advance commission release options on selected institutions'
    ]
  }
];

export const UNIVERSITY_COMMISSION_SAMPLES: UniversityCommissionSample[] = [
  {
    country: 'United States (USA)',
    flag: '🇺🇸',
    avgTuitionUsd: 24000,
    avgGrossCommissionUsd: 3600,
    commissionRateLabel: '15% Avg Commission',
    partnerShare75Usd: 2700,
    partnerShare75Bdt: '৳3,24,000 BDT'
  },
  {
    country: 'United Kingdom (UK)',
    flag: '🇬🇧',
    avgTuitionUsd: 21000,
    avgGrossCommissionUsd: 3150,
    commissionRateLabel: '15% Avg Commission',
    partnerShare75Usd: 2362,
    partnerShare75Bdt: '৳2,83,440 BDT'
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    avgTuitionUsd: 19000,
    avgGrossCommissionUsd: 3040,
    commissionRateLabel: '16% Avg Commission',
    partnerShare75Usd: 2280,
    partnerShare75Bdt: '৳2,73,600 BDT'
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    avgTuitionUsd: 23000,
    avgGrossCommissionUsd: 3220,
    commissionRateLabel: '14% Avg Commission',
    partnerShare75Usd: 2415,
    partnerShare75Bdt: '৳2,89,800 BDT'
  },
  {
    country: 'Germany & EU Private Hubs',
    flag: '🇩🇪',
    avgTuitionUsd: 14000,
    avgGrossCommissionUsd: 2240,
    commissionRateLabel: '16% Avg Commission',
    partnerShare75Usd: 1680,
    partnerShare75Bdt: '৳2,01,600 BDT'
  },
  {
    country: 'Malaysia & UAE',
    flag: '🇲🇾',
    avgTuitionUsd: 9000,
    avgGrossCommissionUsd: 1350,
    commissionRateLabel: '15% Avg Commission',
    partnerShare75Usd: 1012,
    partnerShare75Bdt: '৳1,21,440 BDT'
  }
];

export const PARTNER_BENEFITS = [
  {
    title: 'Up to 75% Revenue Share',
    description: 'The highest commission sharing model in the Bangladeshi education sector for every successful student visa.',
    icon: 'BadgePercent'
  },
  {
    title: '1,200+ Direct University Contracts',
    description: 'No need to maintain costly individual global agreements. Submit student files directly through Biddaloi’s official contracts.',
    icon: 'Building2'
  },
  {
    title: 'Speedy Offer Letters (48–72h)',
    description: 'Our certified Dhaka admissions desk expedites application vetting and ensures rapid unconditional and conditional offers.',
    icon: 'Clock'
  },
  {
    title: 'Visa File Auditing & Mock Interviews',
    description: 'We help you prepare high-converting visa files, financial documentation, and conduct mock interview coaching.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Transparent Ledger & Timely Payouts',
    description: 'Clear B2B commission invoices with real-time disbursement tracking. Paid directly into your company bank account in BDT or USD.',
    icon: 'Wallet'
  },
  {
    title: 'Co-Branded Marketing Support',
    description: 'Receive flyers, intake event banners, and social media materials featuring your agency’s contact details alongside Biddaloi.',
    icon: 'Share2'
  }
];

export const PARTNER_FAQS: PartnerFaq[] = [
  {
    category: 'commission',
    question: 'How does the "Up to 75% University Commission" model work?',
    answer:
      'Universities globally pay an authorized agency commission (typically 12% to 20% of first-year tuition). Through our partnership program, Biddaloi retains only a minor operational share (25% to 45%) and transfers up to 75% directly to your agency upon the student receiving their study visa and completing university fee enrollment.'
  },
  {
    category: 'commission',
    question: 'How much can our agency earn per student?',
    answer:
      'Depending on tuition fees and destination, our partners typically earn between $1,000 and $3,500+ USD (approx. ৳1,20,000 to ৳4,00,000+ BDT) per student visa for premier destinations like the USA, Canada, Australia, and the UK.'
  },
  {
    category: 'operations',
    question: 'Can we retain our client branding and student relationship?',
    answer:
      'Absolutely. You remain the primary student advisor and face of your agency. Biddaloi acts as your trusted master processing engine behind the scenes, ensuring smooth university lodging, offer turnaround, and visa guidance.'
  },
  {
    category: 'payments',
    question: 'When and how are partner commissions disbursed?',
    answer:
      'Commissions are disbursed promptly once the student commences classes and the university processes the institutional intake commission. We provide formal credit notes and transfer payments via Bangladeshi corporate bank transfer (BEFTN/RTGS), USD wire transfer, or Wise.'
  },
  {
    category: 'eligibility',
    question: 'Who is eligible to become a B2B Partner?',
    answer:
      'Education consultancies, coaching centers, language academies (IELTS/PTE), independent career counselors, travel agencies, and student advisors across all 64 districts in Bangladesh or overseas are eligible.'
  },
  {
    category: 'operations',
    question: 'Are there any signup or annual partnership fees?',
    answer:
      'No. Joining Biddaloi as an Agency Partner is 100% free of charge. We believe in performance-driven win-win collaboration.'
  }
];
