export interface CommissionTier {
  destination: string;
  countryCode: string;
  commissionUsd: string;
  commissionUsdMin: number;
  commissionUsdMax: number;
  commissionBdt: string;
  avgVisaRate: string;
  popularIntakes: string;
  visaTurnaround: string;
  flag: string;
  highlight?: boolean;
}

export interface AffiliateFaq {
  question: string;
  answer: string;
  category: 'commission' | 'workflow' | 'payout' | 'general';
}

export const AFFILIATE_TIERS: CommissionTier[] = [
  {
    destination: 'United States (USA)',
    countryCode: 'usa',
    commissionUsd: '$700 – $1,000 USD',
    commissionUsdMin: 700,
    commissionUsdMax: 1000,
    commissionBdt: '৳84,000 – ৳1,20,000 BDT',
    avgVisaRate: '98.2%',
    popularIntakes: 'Fall (August) & Spring (January)',
    visaTurnaround: '3 to 6 weeks',
    flag: '🇺🇸',
    highlight: true
  },
  {
    destination: 'Canada',
    countryCode: 'canada',
    commissionUsd: '$600 – $950 USD',
    commissionUsdMin: 600,
    commissionUsdMax: 950,
    commissionBdt: '৳72,000 – ৳1,14,000 BDT',
    avgVisaRate: '97.8%',
    popularIntakes: 'Fall (Sept) & Winter (Jan)',
    visaTurnaround: '4 to 8 weeks',
    flag: '🇨🇦',
    highlight: true
  },
  {
    destination: 'Australia',
    countryCode: 'australia',
    commissionUsd: '$600 – $900 USD',
    commissionUsdMin: 600,
    commissionUsdMax: 900,
    commissionBdt: '৳72,000 – ৳1,08,000 BDT',
    avgVisaRate: '98.5%',
    popularIntakes: 'Semester 1 (Feb) & Semester 2 (July)',
    visaTurnaround: '3 to 5 weeks',
    flag: '🇦🇺',
    highlight: true
  },
  {
    destination: 'United Kingdom (UK)',
    countryCode: 'uk',
    commissionUsd: '$450 – $800 USD',
    commissionUsdMin: 450,
    commissionUsdMax: 800,
    commissionBdt: '৳54,000 – ৳96,000 BDT',
    avgVisaRate: '98.9%',
    popularIntakes: 'September & January/February',
    visaTurnaround: '3 to 4 weeks',
    flag: '🇬🇧'
  },
  {
    destination: 'Germany & Sweden',
    countryCode: 'germany',
    commissionUsd: '$350 – $650 USD',
    commissionUsdMin: 350,
    commissionUsdMax: 650,
    commissionBdt: '৳42,000 – ৳78,000 BDT',
    avgVisaRate: '97.4%',
    popularIntakes: 'Winter (Oct) & Summer (April)',
    visaTurnaround: '6 to 12 weeks',
    flag: '🇩🇪'
  },
  {
    destination: 'Malaysia & UAE',
    countryCode: 'malaysia',
    commissionUsd: '$150 – $350 USD',
    commissionUsdMin: 150,
    commissionUsdMax: 350,
    commissionBdt: '৳18,000 – ৳42,000 BDT',
    avgVisaRate: '99.1%',
    popularIntakes: 'March, July & October',
    visaTurnaround: '2 to 3 weeks',
    flag: '🇲🇾'
  },
  {
    destination: 'Finland & Denmark',
    countryCode: 'finland',
    commissionUsd: '$300 – $600 USD',
    commissionUsdMin: 300,
    commissionUsdMax: 600,
    commissionBdt: '৳36,000 – ৳72,000 BDT',
    avgVisaRate: '98.0%',
    popularIntakes: 'Autumn (August/September)',
    visaTurnaround: '4 to 6 weeks',
    flag: '🇫🇮'
  },
  {
    destination: 'Language & Pathway Programs',
    countryCode: 'pathway',
    commissionUsd: '$100 – $250 USD',
    commissionUsdMin: 100,
    commissionUsdMax: 250,
    commissionBdt: '৳12,000 – ৳30,000 BDT',
    avgVisaRate: '99.4%',
    popularIntakes: 'Year-round monthly starts',
    visaTurnaround: '2 to 4 weeks',
    flag: '🌐'
  }
];

export const AFFILIATE_STEPS = [
  {
    stepNumber: '01',
    title: 'Recommend Biddaloi',
    subtitle: 'Share your personal referral link or introduce the student',
    description:
      'Recommend Biddaloi to students, relatives, or community members interested in higher education abroad. Share your unique referral link, give them our Mirpur office address, or submit their profile details through your affiliate portal.',
    bulletPoints: [
      'Share your referral link on WhatsApp, Facebook, LinkedIn, or YouTube',
      'Direct students to free expert counseling with verified counselors',
      'Track referral clicks and submissions in real-time'
    ],
    icon: 'Share2',
    badge: 'Step 1: Referral'
  },
  {
    stepNumber: '02',
    title: 'Student Opens File',
    subtitle: 'Free profile assessment & university admission file activation',
    description:
      'Once the referred student contacts Biddaloi, our counseling team evaluates their academic credentials, selects suitable universities, arranges scholarship assessments, and officially opens the student’s admission file.',
    bulletPoints: [
      'Immediate confirmation notification sent to your dashboard',
      'Assistance with documentation, SOP, and University Offer Letters',
      'Affiliate is assigned transparent ownership of the student lead'
    ],
    icon: 'FileText',
    badge: 'Step 2: File Opening'
  },
  {
    stepNumber: '03',
    title: 'Student Gets Visa ➔ Commission Payout',
    subtitle: 'Receive $100 to $1,000 USD directly to your account',
    description:
      'When the student’s study visa is successfully stamped and approved by the embassy, your affiliate commission ($100 to $1,000 USD) is released immediately. No hidden deductions, paid within 48 to 72 hours.',
    bulletPoints: [
      'Guaranteed $100 to $1,000 USD (approx ৳12,000 to ৳1,20,000 BDT) per student',
      'Paid via bKash, Nagad, Bangladeshi Bank Wire, Wise, or USD Transfer',
      'Automated payout invoice & confirmation receipt provided'
    ],
    icon: 'BadgeDollarSign',
    badge: 'Step 3: Visa Approval & Payout'
  }
];

export const AFFILIATE_FAQS: AffiliateFaq[] = [
  {
    category: 'workflow',
    question: 'How exactly does the Biddaloi Affiliate Program work?',
    answer:
      'The process follows three simple stages: 1) You recommend Biddaloi to any student planning to study abroad. 2) The student visits or contacts us, receives free counseling, and officially opens an admission file. 3) Once the student receives their embassy study visa and confirms enrollment, you receive your commission of $100 to $1,000 USD.'
  },
  {
    category: 'commission',
    question: 'How much commission will I receive per student?',
    answer:
      'Commissions range from $100 to $1,000 USD per successful student visa. For premium destinations like the USA, Canada, and Australia, commissions are typically $600 to $1,000 USD (approx ৳72,000 – ৳1,20,000 BDT). For the UK and Europe, commissions are $350 to $800 USD. For Malaysia, UAE, and pathway programs, commissions are $100 to $350 USD.'
  },
  {
    category: 'payout',
    question: 'When and how will my commission be disbursed?',
    answer:
      'Commissions are disbursed within 48 to 72 hours of the student’s official visa grant and enrollment confirmation. We support direct Bangladeshi Bank Wire (EFT/BEFTN/RTGS), mobile financial services (bKash/Nagad/Rocket), Wise, or USD international wire transfer.'
  },
  {
    category: 'general',
    question: 'Is there any registration fee to become a Biddaloi Affiliate?',
    answer:
      'No. Joining the Biddaloi Affiliate Partner Program is 100% free with no deposit, subscription, or minimum quota requirements. Anyone passionate about education counseling can sign up.'
  },
  {
    category: 'workflow',
    question: 'What happens if a referred student changes their destination country?',
    answer:
      'If your referred student initially intended to study in one destination (e.g. UK) and subsequently switches to another destination (e.g. USA or Canada), your referral stays permanently mapped to you. You will receive the commission applicable to the final country where the student receives their visa.'
  },
  {
    category: 'general',
    question: 'Who can join as a Biddaloi Affiliate?',
    answer:
      'University students, alumni abroad, teachers, IELTS/PTE trainers, social media creators, education consultants, travel agents, and community leaders in Bangladesh or overseas are all welcome to register.'
  }
];

export const AFFILIATE_BENEFITS = [
  {
    title: 'High-Yield Commission ($100 – $1,000 USD)',
    description: 'Earn substantial, transparent rewards for each successful student visa grant.',
    icon: 'BadgeDollarSign'
  },
  {
    title: 'High Visa Success Rate (98.4%)',
    description: 'Our certified counselors ensure your referred students receive genuine visa approvals.',
    icon: 'Award'
  },
  {
    title: 'Dedicated Affiliate Manager in Dhaka',
    description: 'Get direct WhatsApp and phone support from our Dhaka head office for lead updates.',
    icon: 'Users'
  },
  {
    title: 'Multiple Payout Methods in BDT & USD',
    description: 'Instant payouts via bKash, Nagad, Bank Wire, Wise, or International USD transfer.',
    icon: 'Wallet'
  },
  {
    title: 'Free Marketing & Promotion Toolkits',
    description: 'Receive verified university flyers, intake banners, and social media templates to share.',
    icon: 'Share2'
  },
  {
    title: 'Real-Time Lead & Milestone Tracking',
    description: 'Know immediately when your student opens their file, receives an offer, and gets their visa.',
    icon: 'TrendingUp'
  }
];
