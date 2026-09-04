import { CountryPageData } from '../../types/country';

export const malaysiaCountryData: CountryPageData = {
  id: 'malaysia',
  slug: 'study-in-malaysia',
  name: 'Malaysia',
  flag: '🇲🇾',
  flagImage: 'https://flagcdn.com/w640/my.png',
  heroImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&q=80',
  tagline: 'Affordable UK & Australian Dual Degrees, 100% Halal Living & Fast 3-Week e-VAL Visa',
  overview: 'Malaysia is Southeast Asia’s prime education hub for Bangladeshi students seeking world-class British and Australian twin-degree programs at one-third of the cost. With an easy online eVAL visa process, safe Muslim-friendly environment, and close proximity to Bangladesh (just 3.5 hours flight), Malaysia offers exceptional value.',

  heroStats: {
    visaSuccessRate: '98% Fast e-VAL Approval',
    postStudyWork: 'Internship & TalentCorp Employment',
    scholarshipRange: '15% to 50% High Achiever Scholarships',
    nextMajorIntake: 'March, July & September Intakes'
  },

  capitalDetails: {
    capitalCity: 'Kuala Lumpur (Putrajaya administrative center)',
    currency: 'Malaysian Ringgit (MYR)',
    currencySymbol: 'RM',
    exchangeRateToBdt: '1 MYR ≈ 27.5 BDT',
    mainLanguage: 'Bahasa Melayu & English (English is medium of instruction)',
    timeZoneFromBd: '2 Hours Ahead of Bangladesh (MYT)',
    majorStudentCities: ['Kuala Lumpur', 'Subang Jaya', 'Petaling Jaya', 'Penang', 'Johor Bahru']
  },

  expenses: {
    tuition: {
      bachelorPerYear: 'RM 18,000 - RM 36,000 ($4,000 - $8,000)',
      bachelorBdtPerYear: 'BDT 5 - 10 Lakh / yr',
      masterPerYear: 'RM 20,000 - RM 40,000 ($4,500 - $9,000)',
      masterBdtPerYear: 'BDT 5.5 - 11 Lakh (Total Program)',
      phdCoverage: 'Research Assistantships & Graduate Fellowships',
      notes: 'Study at Taylor’s, APU, or Sunway and receive a dual degree awarded by Lancaster University (UK) or De Montfort University (UK).'
    },
    living: {
      monthlyTotal: 'RM 1,200 - RM 1,800 ($280 - $420)',
      monthlyBdt: 'BDT 33,000 - 50,000',
      yearlyTotal: 'RM 15,000 - RM 22,000',
      yearlyBdt: 'BDT 4.1 - 6 Lakh',
      breakdown: {
        rent: 'RM 600 - RM 900 (Condominium room with swimming pool & gym)',
        food: 'RM 450 - RM 650 (Halal meals, Mamak stalls, groceries)',
        transport: 'RM 50 - RM 100 (RapidKL LRT / MRT student card)',
        utilitiesAndWifi: 'RM 60 - RM 90',
        personal: 'RM 100'
      }
    },
    otherExpenses: {
      visaFee: 'RM 2,000 - RM 2,800 (EMGS Visa Approval Letter - eVAL fee)',
      airfareFromDhaka: 'BDT 28,000 - 45,000 (One way direct flight DAC to KUL)',
      healthInsurance: 'Included within the EMGS annual student pass package',
      testsAndSevis: 'IELTS Academic (5.5 - 6.0) or University English Placement Test',
      totalInitialBudget: 'BDT 2 - 3 Lakh (EMGS fee, airfare, initial tuition installment)'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: 'BDT 8 - 14 Lakh in sponsor’s personal bank account',
      holdingPeriod: 'Last 3 months transaction history',
      acceptableSponsors: ['Parents (Father/Mother) or Self'],
      financialProofTips: 'Malaysia has one of the simplest financial solvency requirements globally. A standard bank solvency certificate from any commercial bank in Bangladesh is sufficient.'
    }
  },

  whySelect: [
    {
      title: 'UK & Australian Dual Degrees at 1/3rd Cost',
      description: 'Graduate with dual diplomas from top UK/Australian partner universities while paying affordable Malaysian tuition fees and living costs.',
      highlight: 'Dual Degree Recognition'
    },
    {
      title: '98%+ Visa Success with 100% Online e-VAL',
      description: 'Processed digitally through Education Malaysia Global Services (EMGS). No complex embassy interviews or lengthy visa queues in Dhaka.',
      highlight: '3-4 Weeks Online Visa Approval'
    },
    {
      title: '100% Halal Food, Mosques & Safe Living',
      description: 'Modern Muslim-majority country with halal dining across all campuses, prayer rooms, modern high-rise condos, and zero language barriers.',
      highlight: 'Comfortable Muslim-Friendly Life'
    },
    {
      title: 'Close to Bangladesh (3.5 Hours Direct Flight)',
      description: 'Convenient direct flights daily from Dhaka to Kuala Lumpur via Biman, US-Bangla, AirAsia, and Malaysia Airlines, enabling easy family visits.',
      highlight: 'Only 3.5 Hours from Dhaka'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: 'Up to 20 Hours/Week during semester breaks (in approved sectors: restaurants, petrol stations, mini markets, and hotels)',
    minWageHourly: 'RM 10 - RM 15 / hour',
    estMonthlyEarnings: 'RM 800 - RM 1,400 / month (covers food & pocket money)',
    workPermitAfterStudy: 'Employment Pass (Category I, II, III) or TalentCorp Returning Expert/Graduate pathways'
  },

  universities: [
    {
      id: 'taylors',
      name: "Taylor's University",
      location: 'Subang Jaya, Selangor (Kuala Lumpur area)',
      ranking: '#1 Private University in Southeast Asia (QS 2025 #251)',
      type: 'Private',
      popularMajors: ['Hospitality & Tourism (#16 Worldwide)', 'Computer Science', 'Business & Law', 'Architecture'],
      estTuition: 'RM 28,000 - RM 42,000 / yr',
      tuitionBdt: 'BDT 7.7 - 11.5 Lakh / yr',
      ieltsReq: '5.5 - 6.0',
      pteReq: '50+',
      scholarshipAvailable: 'Taylor’s Talent Scholarship up to 50% tuition waiver',
      intakes: ['March', 'August', 'October'],
      image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'apu',
      name: 'Asia Pacific University of Technology & Innovation (APU)',
      location: 'Technology Park Malaysia, Bukit Jalil, Kuala Lumpur',
      ranking: '#1 for International Students & Premier Digital Tech Institution',
      type: 'Private',
      popularMajors: ['Cyber Security', 'AI & Machine Learning', 'Software Engineering', 'Fintech'],
      estTuition: 'RM 24,000 - RM 36,000 / yr',
      tuitionBdt: 'BDT 6.6 - 9.9 Lakh / yr',
      ieltsReq: '5.5 - 6.0 (or internal English course)',
      pteReq: '50+',
      scholarshipAvailable: '15% to 30% Merit Scholarships based on SSC/HSC GPA',
      intakes: ['March', 'May', 'July', 'September', 'November'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ucsi',
      name: 'UCSI University',
      location: 'Cheras, Kuala Lumpur',
      ranking: 'QS Top 265 Globally',
      type: 'Private',
      popularMajors: ['Pharmacy', 'Biotechnology', 'Engineering', 'Music & Performing Arts'],
      estTuition: 'RM 22,000 - RM 34,000 / yr',
      tuitionBdt: 'BDT 6 - 9.3 Lakh / yr',
      ieltsReq: '5.5',
      pteReq: '48+',
      scholarshipAvailable: 'UCSI University Trust Scholarship up to 50%',
      intakes: ['January', 'May', 'September'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sunway',
      name: 'Sunway University',
      location: 'Sunway City, Selangor',
      ranking: 'QS 5-Star Rated & Partner with Lancaster University (UK)',
      type: 'Private',
      popularMajors: ['Accounting & Finance', 'Computer Science', 'Psychology', 'Culinary Arts'],
      estTuition: 'RM 26,000 - RM 39,000 / yr',
      tuitionBdt: 'BDT 7 - 10.7 Lakh / yr',
      ieltsReq: '6.0',
      pteReq: '50+',
      scholarshipAvailable: 'Jeffrey Cheah Entrance Scholarship up to RM 12,000',
      intakes: ['January', 'March', 'August'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Academic Credentials',
      description: 'Educational certificates with scanned color copies.',
      required: true,
      documents: [
        {
          name: 'SSC & HSC / O & A Level Certificates & Marksheets',
          description: 'Original color scanned copies of certificates and transcripts.'
        },
        {
          name: 'Bachelor Degree & Transcripts (If applying for Master’s)',
          description: 'Attested certificates and complete transcript.'
        }
      ]
    },
    {
      categoryName: 'Passport & Identification',
      description: 'Malaysian immigration passport requirements.',
      required: true,
      documents: [
        {
          name: 'Full Passport Scan (All Pages including blank pages)',
          description: 'Color scan of every single page from cover to cover with at least 18 months remaining validity.'
        },
        {
          name: 'Passport-Sized White Background Photos',
          description: 'Recent photographs (35mm x 45mm, white background without spectacles).'
        }
      ]
    },
    {
      categoryName: 'Health Declaration & Financial Solvency',
      description: 'EMGS Health clearance.',
      required: true,
      documents: [
        {
          name: 'EMGS Health Declaration Form',
          description: 'Pre-arrival health screening declaration.'
        },
        {
          name: 'Bank Solvency Certificate',
          description: 'Standard letter from a recognized bank in Bangladesh showing BDT 8–12 Lakh balance.'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'Electronic Visa Approval Letter (e-VAL) & Single Entry Visa (SEV)',
    embassyInDhaka: 'High Commission of Malaysia, Dhaka (Processed online via EMGS & eVISA Portal)',
    processingTime: '3 to 5 weeks for e-VAL + 3 days for SEV sticker',
    interviewRequired: false,
    steps: [
      {
        stepNumber: 1,
        title: 'Receive University Offer Letter',
        description: 'Submit academic documents to your chosen Malaysian university to receive the unconditional Offer Letter.',
        timeline: '3–5 days'
      },
      {
        stepNumber: 2,
        title: 'Apply for EMGS e-VAL Clearance',
        description: 'University submits your file to Education Malaysia Global Services (EMGS). Track progress online on the EMGS website.',
        timeline: '3–4 weeks'
      },
      {
        stepNumber: 3,
        title: 'Receive Official Electronic VAL (e-VAL)',
        description: 'The Malaysian Immigration Department issues the official digital yellow e-VAL certificate.',
        timeline: 'Instant digital download'
      },
      {
        stepNumber: 4,
        title: 'Apply for Single Entry Visa (SEV) Online / VFS',
        description: 'Apply for the Single Entry Visa online through the official Malaysian eVISA portal using your e-VAL.',
        timeline: '2–4 business days'
      },
      {
        stepNumber: 5,
        title: 'Arrive in Kuala Lumpur & Campus Medical',
        description: 'Fly to Kuala Lumpur International Airport (KLIA), clear immigration with university representative, and complete post-arrival medical check-up.',
        timeline: 'Within 7 days of arrival'
      }
    ],
    topInterviewQuestions: []
  },

  faqs: [
    {
      question: 'Do I need IELTS to study in Malaysia?',
      answer: 'While top universities prefer IELTS (5.5 - 6.0), many universities allow you to sit for an internal English placement test upon arrival or take a preliminary English course before commencing your main academic degree.'
    },
    {
      question: 'How does the twin / dual degree system work in Malaysia?',
      answer: 'Top private institutions like Taylor’s, Sunway, and APU offer dual degree programs in partnership with prestigious UK universities (such as Lancaster, De Montfort, and Birmingham City). You study entirely in Malaysia and graduate with two accredited degree certificates: one from Malaysia and one from the UK.'
    },
    {
      question: 'Can Bangladeshi students work part-time in Malaysia?',
      answer: 'International students are permitted to work up to 20 hours per week during semester breaks and holidays of more than seven days in approved sectors, with wages averaging RM 10–15 per hour.'
    }
  ]
};
