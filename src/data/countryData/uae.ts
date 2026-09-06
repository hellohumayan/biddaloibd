import { CountryPageData } from '../../types/country';

export const uaeCountryData: CountryPageData = {
  id: 'uae',
  slug: 'study-in-uae',
  name: 'United Arab Emirates',
  flag: '🇦🇪',
  flagImage: 'https://flagcdn.com/w640/ae.png',
  heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
  tagline: 'World Commerce Capital, Prestigious British & Global Campuses in Dubai & Golden Visa Opportunities',
  overview: 'The United Arab Emirates—particularly Dubai and Abu Dhabi—has rapidly transformed into one of the world’s leading international education centers. Home to established branch campuses of top British, Australian, and American universities (Heriot-Watt, Middlesex, Wollongong, Murdoch), the UAE offers tax-free living, vibrant multicultural career opportunities, and direct transition to full-time employment visas.',

  heroStats: {
    visaSuccessRate: '98% Fast University-Sponsored Visa',
    postStudyWork: 'Direct Full-Time Work Visa & 10-Yr Golden Visa',
    scholarshipRange: '20% to 50% Academic Merit Scholarships',
    nextMajorIntake: 'September (Fall) & January (Spring) Intakes'
  },

  capitalDetails: {
    capitalCity: 'Abu Dhabi (Dubai is main international education hub)',
    currency: 'United Arab Emirates Dirham (AED)',
    currencySymbol: 'AED',
    exchangeRateToBdt: '1 AED ≈ 32.5 BDT',
    mainLanguage: 'Arabic (100% English medium across all international universities)',
    timeZoneFromBd: '2 Hours Behind Bangladesh (GST)',
    majorStudentCities: ['Dubai (Dubai Knowledge Park / Academic City)', 'Abu Dhabi', 'Sharjah']
  },

  expenses: {
    tuition: {
      bachelorPerYear: 'AED 38,000 - 75,000 ($10,000 - $20,000 / yr)',
      bachelorBdtPerYear: 'BDT 12 - 24 Lakh / yr',
      masterPerYear: 'AED 45,000 - 85,000 ($12,000 - $23,000 total program)',
      masterBdtPerYear: 'BDT 14 - 27 Lakh (Total Degree)',
      phdCoverage: 'Graduate Research Assistantships & Corporate Fellowships',
      notes: 'Branch campuses award the exact identical degree certificates as their home parent universities in the UK or Australia.'
    },
    living: {
      monthlyTotal: 'AED 2,500 - 3,800 ($680 - $1,030)',
      monthlyBdt: 'BDT 80,000 - 1.25 Lakh',
      yearlyTotal: 'AED 30,000 - 45,000',
      yearlyBdt: 'BDT 9.8 - 14.6 Lakh',
      breakdown: {
        rent: 'AED 1,500 - 2,400 (Student housing or shared apartment in Dubai)',
        food: 'AED 700 - 1,000 (Halal groceries & diverse international food)',
        transport: 'AED 150 - 250 (Dubai Metro Nol student card)',
        utilitiesAndWifi: 'AED 150 - 200',
        personal: 'AED 200'
      }
    },
    otherExpenses: {
      visaFee: 'AED 2,500 - 3,500 (Annual University Student Residence Visa & Emirates ID)',
      airfareFromDhaka: 'BDT 35,000 - 55,000 (Direct 4.5 hour flight DAC to DXB/SHJ)',
      healthInsurance: 'AED 1,200 - 2,000 / yr (Mandatory UAE Student Health Insurance)',
      testsAndSevis: 'Emirates ID & medical fitness screening: AED 600',
      totalInitialBudget: 'BDT 3 - 4.5 Lakh (Flight, initial visa fee, first semester deposit)'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: 'BDT 10 - 15 Lakh in student or sponsor bank account',
      holdingPeriod: '3 months statement showing solvent balance',
      acceptableSponsors: ['Father', 'Mother', 'Self', 'Sponsor in UAE or Bangladesh'],
      financialProofTips: 'UAE universities sponsor the student visa directly, making the visa approval process fast and document-friendly.'
    }
  },

  whySelect: [
    {
      title: 'Same British & Australian Degrees in Dubai',
      description: 'Study at Heriot-Watt, Middlesex, or Wollongong in Dubai and graduate with the exact same UK/Australian degree at lower living and flight expenses.',
      highlight: 'Dual Recognition'
    },
    {
      title: 'Tax-Free Career & Corporate Hub',
      description: 'Dubai hosts regional headquarters of Google, Microsoft, Amazon, Emirates Airlines, and PwC with tax-free corporate salaries.',
      highlight: 'Tax-Free Income'
    },
    {
      title: '10-Year Golden Visa for High Achievers',
      description: 'Outstanding students graduating with GPA 3.8+ or high academic distinction are eligible for the prestigious 10-year UAE Golden Visa.',
      highlight: 'Golden Visa Eligible'
    },
    {
      title: 'Safe, Multicultural & Muslim-Friendly',
      description: 'Voted one of the safest cities in the world, with 100% halal lifestyle, mosques everywhere, and direct 4.5-hour flights to Dhaka.',
      highlight: 'World’s Safest City'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: '15 - 20 hours per week with university No Objection Certificate (NOC)',
    minWageHourly: 'AED 25 - 50 / hour',
    estMonthlyEarnings: 'AED 1,500 - 3,000 / month',
    workPermitAfterStudy: 'Immediate transition to employer-sponsored 2-year renewable Employment Visa upon graduation'
  },

  universities: [
    {
      id: 'mdx-dubai-uni',
      name: 'Middlesex University Dubai',
      location: 'Dubai Knowledge Park',
      ranking: '5-Star KHDA Rated British Campus',
      type: 'Private',
      popularMajors: ['Computer Science', 'International Business', 'Digital Marketing', 'Law', 'Psychology'],
      estTuition: 'AED 48,000 - 62,000 / yr',
      tuitionBdt: 'BDT 15.6 - 20 Lakh / yr',
      ieltsReq: '6.0 (or MOI certificate)',
      pteReq: '51+',
      scholarshipAvailable: 'Up to 30% Academic Excellence Scholarship',
      intakes: ['September', 'January'],
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'heriot-watt-dubai',
      name: 'Heriot-Watt University Dubai',
      location: 'Dubai International Academic City',
      ranking: 'Top Scottish University Campus',
      type: 'Private',
      popularMajors: ['Robotics', 'Data Science', 'Civil Engineering', 'Finance & Accounting'],
      estTuition: 'AED 55,000 - 78,000 / yr',
      tuitionBdt: 'BDT 17.8 - 25 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '58+',
      scholarshipAvailable: 'Vice-Chancellor Merit Scholarship up to 50%',
      intakes: ['September', 'January'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Academic Credentials',
      description: 'Educational certificates with certified copies.',
      required: true,
      documents: [
        {
          name: 'SSC & HSC / O & A Level Certificates & Transcripts',
          description: 'Attested academic certificates and marksheets.'
        },
        {
          name: 'Bachelor Degree (if applying for Master’s)',
          description: 'Official degree certificate and transcript.'
        }
      ]
    },
    {
      categoryName: 'Passport & Identification',
      description: 'UAE immigration passport requirements.',
      required: true,
      documents: [
        {
          name: 'Passport Copy (Minimum 6 months validity)',
          description: 'Clear color scan of passport bio page.'
        },
        {
          name: 'Passport Size Photographs (White background)',
          description: 'Digital photos in UAE visa format.'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'UAE Student Residence Visa (Sponsored by University)',
    embassyInDhaka: 'Online processing via UAE GDRFA / ICP (No embassy interview needed in Dhaka)',
    processingTime: '5 to 10 working days',
    interviewRequired: false,
    steps: [
      {
        stepNumber: 1,
        title: 'Receive University Offer & Fee Payment',
        description: 'Accept your admission offer and pay the initial tuition & visa sponsorship fees.',
        timeline: '1 - 2 weeks'
      },
      {
        stepNumber: 2,
        title: 'Receive Student E-Visa Online',
        description: 'The university applies for and receives your official electronic entry permit via email.',
        timeline: '5 - 10 days'
      },
      {
        stepNumber: 3,
        title: 'Travel to Dubai & Medical Fitness Exam',
        description: 'Fly to the UAE and complete the mandatory blood test and chest X-ray screening.',
        timeline: 'Within 10 days of arrival'
      },
      {
        stepNumber: 4,
        title: 'Emirates ID & Visa Stamping',
        description: 'Submit biometrics and receive your physical Emirates ID card and student residence visa.',
        timeline: '1 - 2 weeks'
      }
    ],
    topInterviewQuestions: [
      {
        question: 'Why choose Dubai for international higher education?',
        recommendedAnswerGuide: 'Highlight the opportunity to obtain an identical British/Australian degree, tax-free career opportunities, and world-class safety.'
      }
    ]
  },

  faqs: [
    {
      question: 'Is there an embassy interview for a UAE student visa in Bangladesh?',
      answer: 'No! UAE student visas are sponsored directly by your university through the UAE government (GDRFA/ICP). Once approved, an electronic visa entry permit is issued online without requiring an embassy appointment or interview in Dhaka.'
    },
    {
      question: 'Can I work part-time in Dubai while studying?',
      answer: 'Yes. Students enrolled at universities in Dubai Free Zones (Dubai Knowledge Park, Academic City) can legally work part-time or undertake paid corporate internships with a university No Objection Certificate (NOC).'
    }
  ]
};
