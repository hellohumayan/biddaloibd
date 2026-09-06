import { CountryPageData } from '../../types/country';

export const indiaCountryData: CountryPageData = {
  id: 'india',
  slug: 'study-in-india',
  name: 'India',
  flag: '🇮🇳',
  flagImage: 'https://flagcdn.com/w640/in.png',
  heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
  tagline: 'World-Leading Tech Hub, 100% SII Scholarships & Affordable High-Quality Education Next Door',
  overview: 'India is one of the most practical and high-value study destinations for Bangladeshi students. Located right next door with zero cultural barriers, India offers world-renowned engineering, technology, and pharmacy institutes, prestigious Study in India (SII) government tuition waivers up to 100%, and an annual total cost lower than private universities in Dhaka.',

  heroStats: {
    visaSuccessRate: '99% Direct Student Visa Processing',
    postStudyWork: 'Campus Corporate Placements & Regional Hubs',
    scholarshipRange: 'Up to 100% Tuition Fee Waivers via SII & Uni Merit',
    nextMajorIntake: 'July / August Monsoon Intake'
  },

  capitalDetails: {
    capitalCity: 'New Delhi',
    currency: 'Indian Rupee (INR)',
    currencySymbol: '₹',
    exchangeRateToBdt: '1 INR ≈ 1.42 BDT',
    mainLanguage: 'Hindi & English (100% English medium for higher education)',
    timeZoneFromBd: '30 Minutes Behind Bangladesh (IST)',
    majorStudentCities: ['Delhi NCR / Greater Noida', 'Bengaluru', 'Chandigarh', 'Chennai', 'Pune']
  },

  expenses: {
    tuition: {
      bachelorPerYear: '₹1,50,000 - ₹3,50,000 ($1,800 - $4,200 / yr)',
      bachelorBdtPerYear: 'BDT 2.1 - 4.9 Lakh / yr',
      masterPerYear: '₹1,80,000 - ₹4,00,000 ($2,100 - $4,800 / yr)',
      masterBdtPerYear: 'BDT 2.5 - 5.6 Lakh / yr',
      phdCoverage: 'Full Tuition Fee Waiver + Monthly Research Stipends',
      notes: 'Under Study in India (SII) and institution-specific South Asian concessions, Bangladeshi students regularly receive 50% to 100% tuition scholarships.'
    },
    living: {
      monthlyTotal: '₹12,000 - ₹18,000 ($145 - $215)',
      monthlyBdt: 'BDT 17,000 - 26,000',
      yearlyTotal: '₹1,20,000 - ₹1,80,000 (Including on-campus hostel + 4 meals/day)',
      yearlyBdt: 'BDT 1.7 - 2.6 Lakh',
      breakdown: {
        rent: '₹6,000 - ₹9,000 (On-campus air-conditioned or non-AC hostel)',
        food: '₹4,000 - ₹6,000 (Hostel mess providing South Asian / Bengali food)',
        transport: '₹1,000 (Local auto rickshaw / metro / campus shuttle)',
        utilitiesAndWifi: '₹1,000 (Campus Wi-Fi included)',
        personal: '₹1,000'
      }
    },
    otherExpenses: {
      visaFee: 'BDT 800 - 1,500 (Indian Visa Application Center - IVAC processing fee)',
      airfareFromDhaka: 'BDT 6,000 - 18,000 (Air or Maitree Express train / Benapole land border)',
      healthInsurance: '₹3,000 - ₹6,000 / yr (Campus medical insurance)',
      testsAndSevis: 'No costly SAT or GRE required; direct evaluation by 12th board marks',
      totalInitialBudget: 'BDT 80,000 - 1.5 Lakh (Very low initial overhead)'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: 'BDT 3 - 5 Lakh in parent’s or sponsor’s bank account',
      holdingPeriod: '1 month balance certificate',
      acceptableSponsors: ['Father', 'Mother', 'Self', 'Guardian'],
      financialProofTips: 'Standard 6-month bank statement and solvency certificate issued by any scheduled Bangladeshi bank.'
    }
  },

  whySelect: [
    {
      title: 'Very Affordable Total Budget',
      description: 'The combined tuition and on-campus hostel fee is often comparable to or lower than private universities in Bangladesh, with international campus exposure.',
      highlight: 'Maximum Value'
    },
    {
      title: 'Silicon Valley of the East',
      description: 'Bengaluru, Hyderabad, and Delhi NCR host the world’s largest tech hubs (Google, Microsoft, Infosys, TCS) with direct on-campus placement drives.',
      highlight: 'Top Tech Ecosystem'
    },
    {
      title: 'Close to Home & Easy Travel',
      description: 'Only 30 minutes time difference and reachable via direct 45-minute flights from Dhaka or convenient train/road routes, making family visits easy.',
      highlight: 'Zero Jetlag'
    },
    {
      title: 'Study in India (SII) Scholarships',
      description: 'The Indian Ministry of Education offers up to 100% fee waivers for meritorious Bangladeshi students through the Study in India portal.',
      highlight: 'Up to 100% Waiver'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: 'Paid corporate internships and university research projects',
    minWageHourly: 'Internship stipends ₹10,000 - ₹35,000 / month',
    estMonthlyEarnings: '₹10,000 - ₹25,000 / month during internships',
    workPermitAfterStudy: 'Campus placement recruitment with multinational corporations across South Asia'
  },

  universities: [
    {
      id: 'sharda-uni',
      name: 'Sharda University',
      location: 'Greater Noida, Delhi NCR',
      ranking: 'NAAC A+ Accredited',
      type: 'Private',
      popularMajors: ['B.Tech Computer Science', 'Pharmacy', 'BBA & MBA', 'Physiotherapy'],
      estTuition: '$2,000 - $3,800 / yr',
      tuitionBdt: 'BDT 2.4 - 4.5 Lakh / yr',
      ieltsReq: 'MOI Certificate accepted (No IELTS required)',
      pteReq: 'Optional',
      scholarshipAvailable: 'Up to 50% Bangladesh SAARC Special Scholarship',
      intakes: ['July', 'August'],
      image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'lpu',
      name: 'Lovely Professional University (LPU)',
      location: 'Punjab, India',
      ranking: 'Top 25 in India (NIRF)',
      type: 'Private',
      popularMajors: ['Computer Science & Engineering', 'Agriculture', 'Architecture', 'Biotechnology'],
      estTuition: '$2,200 - $4,200 / yr',
      tuitionBdt: 'BDT 2.6 - 5 Lakh / yr',
      ieltsReq: 'MOI Accepted',
      pteReq: 'Optional',
      scholarshipAvailable: 'LPUNEST Merit Scholarship up to 50%',
      intakes: ['July', 'August'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Academic Credentials',
      description: 'Educational certificates with certified copies.',
      required: true,
      documents: [
        {
          name: 'SSC & HSC / O & A Level Marksheets & Certificates',
          description: 'Original color scanned copies of academic transcripts.'
        },
        {
          name: 'Equivalence Certificate (if required)',
          description: 'Association of Indian Universities (AIU) equivalence certificate if applicable.'
        }
      ]
    },
    {
      categoryName: 'Visa & Identification',
      description: 'Indian student visa documentation for IVAC.',
      required: true,
      documents: [
        {
          name: 'Bonafide Certificate & Fee Structure',
          description: 'Official letter from the admitting university indicating course details.'
        },
        {
          name: 'Bank Solvency & Statement',
          description: 'Bank certificate showing BDT 3 - 5 Lakh balance.'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'Indian Student Visa (Multiple Entry)',
    embassyInDhaka: 'High Commission of India, Dhaka (IVAC Centers)',
    processingTime: '7 to 14 working days',
    interviewRequired: false,
    steps: [
      {
        stepNumber: 1,
        title: 'Receive University Admission & Bonafide Letter',
        description: 'Submit your 10th and 12th marks to secure provisional admission and the official Bonafide Certificate.',
        timeline: '1 - 2 weeks'
      },
      {
        stepNumber: 2,
        title: 'Apply Online via IVAC',
        description: 'Complete the online visa application and book an appointment at your nearest IVAC center in Bangladesh.',
        timeline: '2 - 3 days'
      },
      {
        stepNumber: 3,
        title: 'Submit Passport & Documents',
        description: 'Submit original passport, photos, university bonafide, fee receipt, and solvency certificate at IVAC.',
        timeline: '7 - 10 working days'
      },
      {
        stepNumber: 4,
        title: 'Travel to India & Campus Registration',
        description: 'Travel by flight or border crossing and complete FRRO registration with assistance from the university.',
        timeline: 'Within 14 days of arrival'
      }
    ],
    topInterviewQuestions: [
      {
        question: 'Why did you select this university in India?',
        recommendedAnswerGuide: 'Highlight the NAAC accreditation, placement record with top multinationals, and specialized curriculum.'
      }
    ]
  },

  faqs: [
    {
      question: 'Is IELTS required for Bangladeshi students to study in India?',
      answer: 'No. Most top Indian universities do not require IELTS if your previous secondary and higher secondary education was conducted in English (English Medium of Instruction certificate).'
    },
    {
      question: 'Are Indian degrees recognized in Bangladesh?',
      answer: 'Yes. Degrees from AICTE and UGC recognized universities are accepted for equivalence by the Bangladesh University Grants Commission (UGC) and employers.'
    }
  ]
};
