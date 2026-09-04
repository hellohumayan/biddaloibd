import { CountryPageData } from '../../types/country';

export const canadaCountryData: CountryPageData = {
  id: 'canada',
  slug: 'study-in-canada',
  name: 'Canada',
  flag: '🇨🇦',
  flagImage: 'https://flagcdn.com/w640/ca.png',
  heroImage: 'https://images.unsplash.com/photo-1517935703635-27c94660ab4f?auto=format&fit=crop&w=1600&q=80',
  tagline: 'World-Class Education, 3-Year Post-Graduation Work Permit (PGWP) & PR Pathways',
  overview: 'Canada remains a top destination for Bangladeshi students due to its safe, multicultural society, globally respected degrees, and the Post-Graduation Work Permit (PGWP) program that provides clear pathways to Canadian Permanent Residency (PR).',

  heroStats: {
    visaSuccessRate: '85% with PAL & Complete Proofs',
    postStudyWork: 'Up to 3 Years PGWP',
    scholarshipRange: 'CAD $2,000 - CAD $20,000',
    nextMajorIntake: 'Fall (September) / Winter (January)'
  },

  capitalDetails: {
    capitalCity: 'Ottawa, Ontario',
    currency: 'Canadian Dollar (CAD)',
    currencySymbol: 'CAD $',
    exchangeRateToBdt: '1 CAD ≈ 88 BDT',
    mainLanguage: 'English & French (Bilingual)',
    timeZoneFromBd: '10 to 11 Hours Behind Bangladesh (EST / CST / PST)',
    majorStudentCities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary', 'Windsor']
  },

  expenses: {
    tuition: {
      bachelorPerYear: 'CAD $18,000 - $36,000',
      bachelorBdtPerYear: 'BDT 16 - 32 Lakh',
      masterPerYear: 'CAD $16,000 - $32,000',
      masterBdtPerYear: 'BDT 14 - 28 Lakh',
      phdCoverage: 'Substantial graduate research funding + tuition assistantships',
      notes: 'Tuition fees vary significantly between provinces; Ontario and BC are higher, while Manitoba, Saskatchewan, and Atlantic provinces are more economical.'
    },
    living: {
      monthlyTotal: 'CAD $1,200 - $1,700',
      monthlyBdt: 'BDT 1.05 - 1.5 Lakh',
      yearlyTotal: 'CAD $14,000 - $20,000',
      yearlyBdt: 'BDT 12.5 - 18 Lakh',
      breakdown: {
        rent: 'CAD $600 - $950 (Shared room / basement apartment)',
        food: 'CAD $300 - $450 (Home cooking & groceries)',
        transport: 'CAD $100 - $150 (Public transit student pass)',
        utilitiesAndWifi: 'CAD $80 - $120',
        personal: 'CAD $100 - $150'
      }
    },
    otherExpenses: {
      visaFee: 'CAD $150 (Study Permit) + CAD $85 (Biometrics)',
      airfareFromDhaka: 'BDT 105,000 - 165,000 (One way DAC to YYZ/YVR)',
      healthInsurance: 'CAD $600 - $1,100 / year (UHIP or provincial coverage)',
      testsAndSevis: 'IELTS / PTE / Medical check-up in Dhaka (BDT 8,000)',
      totalInitialBudget: 'BDT 4.5 - 6 Lakh (Airfare, Visa, Medical & First Month)'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: 'CAD $20,635 (Living Cost per IRCC) + 1st Year Tuition (Total: BDT 35 - 50 Lakh)',
      holdingPeriod: 'Last 4 to 6 months consistent bank transactions',
      acceptableSponsors: ['Parents (Father/Mother) preferred', 'Self or Sibling with verifiable tax documents'],
      financialProofTips: 'IRCC requires proof of the new living cost threshold (CAD $20,635) in addition to first-year tuition. A GIC (Guaranteed Investment Certificate) is highly recommended.'
    }
  },

  whySelect: [
    {
      title: 'Up to 3-Year Post-Graduation Work Permit (PGWP)',
      description: 'Graduating from an eligible designated learning institution (DLI) grants an open work permit of up to 3 years without requiring a specific job offer.',
      highlight: '3-Year Open Work Rights'
    },
    {
      title: 'Direct Pathways to Permanent Residency (PR)',
      description: 'Canadian study and work experience award high points in the Express Entry (Canadian Experience Class) and Provincial Nominee Programs (PNP).',
      highlight: 'High CRS Points for PR'
    },
    {
      title: 'Safe, Multicultural & Welcoming Society',
      description: 'Ranked consistently among the top 5 safest countries globally with large, active Bangladeshi diaspora communities across Ontario, Quebec, and BC.',
      highlight: 'Top 5 Safest Countries'
    },
    {
      title: 'Spousal Work Permit & Child Education',
      description: 'Master’s and Doctoral degree students can bring their spouse on an Open Work Permit, and children can attend Canadian public schools for free.',
      highlight: 'Family Friendly Policy'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: 'Up to 24 Hours/Week off-campus during terms (Full-time during scheduled breaks)',
    minWageHourly: 'CAD $16.50 - $17.30 / hour (Ontario / BC)',
    estMonthlyEarnings: 'CAD $1,400 - $1,900 / month (covers food & housing)',
    workPermitAfterStudy: '1 to 3 Years PGWP depending on program length'
  },

  universities: [
    {
      id: 'windsor',
      name: 'University of Windsor',
      location: 'Windsor, Ontario',
      ranking: 'Top 15 Comprehensive Canadian University',
      type: 'Public',
      popularMajors: ['Applied Computing (MAC)', 'Automotive Engineering', 'Management', 'Biotechnology'],
      estTuition: 'CAD $22,000 - $29,000 / yr',
      tuitionBdt: 'BDT 19 - 25 Lakh / yr',
      ieltsReq: '6.5 (min 6.0 in each band)',
      pteReq: '60+',
      scholarshipAvailable: 'CAD $2,500 - $7,500 Entrance Awards',
      intakes: ['Fall (September)', 'Winter (January)', 'Intersession (May)'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'york',
      name: 'York University',
      location: 'Toronto, Ontario',
      ranking: '#3 Largest University in Canada',
      type: 'Public',
      popularMajors: ['Computer Science', 'Business Administration (Schulich)', 'Health Science', 'Digital Media'],
      estTuition: 'CAD $29,000 - $38,000 / yr',
      tuitionBdt: 'BDT 25 - 33 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '60+',
      scholarshipAvailable: 'Global Leader of Tomorrow Award up to CAD $20,000',
      intakes: ['Fall (September)', 'Winter (January)'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'concordia',
      name: 'Concordia University',
      location: 'Montreal, Quebec',
      ranking: 'Top 10 Comprehensive in Canada',
      type: 'Public',
      popularMajors: ['Software Engineering', 'Aerospace', 'Information Systems Security', 'Supply Chain'],
      estTuition: 'CAD $20,000 - $28,000 / yr',
      tuitionBdt: 'BDT 17 - 24 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '61+',
      scholarshipAvailable: 'Excellence scholarships available for graduate research',
      intakes: ['Fall (September)', 'Winter (January)'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'mun',
      name: 'Memorial University of Newfoundland',
      location: 'St. John’s, Newfoundland',
      ranking: 'Most Affordable Canadian University',
      type: 'Public',
      popularMajors: ['Marine Science', 'Oil & Gas Engineering', 'Computer Science', 'MBA'],
      estTuition: 'CAD $11,500 - $18,000 / yr',
      tuitionBdt: 'BDT 10 - 16 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '58+',
      scholarshipAvailable: 'Entrance scholarships up to CAD $4,000',
      intakes: ['Fall (September)', 'Winter (January)'],
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Academic Credentials',
      description: 'Official attested academic records.',
      required: true,
      documents: [
        {
          name: 'SSC & HSC / O & A Level Certificates & Marksheets',
          description: 'Original and board-attested educational documents.',
          attestation: 'Attested by Education Board & MOFA Bangladesh.',
          tipsForBangladeshi: 'Ensure name and date of birth match your Bangladeshi Passport exactly.'
        },
        {
          name: 'Bachelor Degree Certificate & Transcripts',
          description: 'Official degree certificate and 4-year consolidated grade sheets.'
        },
        {
          name: 'Provincial Attestation Letter (PAL)',
          description: 'Under current IRCC rules, undergraduate students require a PAL issued by the province via their university.'
        }
      ]
    },
    {
      categoryName: 'Language Proficiency',
      description: 'English proficiency test results.',
      required: true,
      documents: [
        {
          name: 'IELTS Academic or PTE Core/Academic',
          description: 'IELTS minimum 6.0 in each band, or PTE 60+.',
          tipsForBangladeshi: 'IRCC requires reliable language tests for smooth study permit approvals.'
        }
      ]
    },
    {
      categoryName: 'Financial Proofs & GIC',
      description: 'Proof of funds adhering to the latest IRCC criteria.',
      required: true,
      documents: [
        {
          name: 'Guaranteed Investment Certificate (GIC) or Bank Solvency',
          description: 'CAD $20,635 living cost deposited in a Canadian bank (CIBC, Scotiabank, RBC) or equivalent in BD bank.',
          tipsForBangladeshi: 'Opening a student GIC account with CIBC directly from Bangladesh significantly strengthens your visa file.'
        },
        {
          name: 'Sponsor Income & Tax Papers',
          description: '3 years Income Tax Returns, e-TIN certificate, trade license/salary statement, and property asset valuation report.'
        }
      ]
    },
    {
      categoryName: 'Immigration & Medical',
      description: 'Official clearance and identification.',
      required: true,
      documents: [
        {
          name: 'Upfront Medical Examination Sheet (e-Medical)',
          description: 'Approved panel physician test (e.g., IOM Dhaka, Apollo, or Green Crescent Clinic).'
        },
        {
          name: 'Police Clearance Certificate (PCC)',
          description: 'Obtained from Dhaka Metropolitan Police or local District Police Superintendent.'
        },
        {
          name: 'Study Plan / Statement of Purpose',
          description: 'Explaining your study motivations, academic progression, and clear commitment to return to Bangladesh.'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'Canadian Study Permit & Temporary Resident Visa (TRV)',
    embassyInDhaka: 'High Commission of Canada in Dhaka (Processed online via IRCC Portal; Biometrics at VFS Dhaka/Sylhet)',
    processingTime: '6 to 12 weeks',
    interviewRequired: false,
    steps: [
      {
        stepNumber: 1,
        title: 'Receive Letter of Acceptance (LOA) & PAL',
        description: 'Secure admission from a Designated Learning Institution (DLI) and obtain your Provincial Attestation Letter.',
        timeline: '3–6 weeks'
      },
      {
        stepNumber: 2,
        title: 'Pay First Semester / Annual Tuition Deposit',
        description: 'Pay the mandatory tuition deposit to the university and obtain the official official receipt.',
        timeline: '1–2 weeks'
      },
      {
        stepNumber: 3,
        title: 'Complete Upfront Medical Examination',
        description: 'Book an upfront medical exam at an IRCC-approved panel physician in Dhaka (e.g. IOM or Green Crescent).',
        timeline: '1 week before submitting'
      },
      {
        stepNumber: 4,
        title: 'Submit Online Visa Application via IRCC Portal',
        description: 'Upload all forms (IMM 1294, IMM 5645), financial documents, LOA, upfront medical, and comprehensive Study Plan.',
        timeline: '1–3 days'
      },
      {
        stepNumber: 5,
        title: 'Provide Biometrics at VFS Global (Dhaka / Sylhet)',
        description: 'Within 30 days of receiving your Biometrics Instruction Letter (BIL), attend VFS Global for fingerprinting and digital photo.',
        timeline: 'Usually 3–5 days after application submission'
      },
      {
        stepNumber: 6,
        title: 'Passport Request (PPR) & Visa Stamping',
        description: 'Upon approval, submit your original passport to VFS for the TRV visa foil and Port of Entry (POE) letter.',
        timeline: '1–2 weeks'
      }
    ],
    topInterviewQuestions: [
      {
        question: 'How do you justify this study program with your previous educational background in Bangladesh?',
        recommendedAnswerGuide: 'Provide a logical progression connecting your Bachelor degree and professional experience to this specific Canadian curriculum.'
      },
      {
        question: 'Why not complete a similar program in Bangladesh?',
        recommendedAnswerGuide: 'Emphasize the practical hands-on co-op labs, modern industry tools, and technological infrastructure not yet accessible in BD.'
      }
    ]
  },

  faqs: [
    {
      question: 'What is a Provincial Attestation Letter (PAL) and do I need one?',
      answer: 'Under the 2024 IRCC policy, international undergraduate and diploma students must obtain a Provincial Attestation Letter (PAL) issued by the university’s province before applying for a Study Permit. Master’s and PhD students are exempt from the PAL requirement.'
    },
    {
      question: 'How much living cost fund must Bangladeshi students show?',
      answer: 'As of 2024, IRCC requires students to demonstrate at least CAD $20,635 for one year of living expenses (in addition to first-year tuition). Showing funds through a Canadian GIC account or a well-documented 6-month bank solvency certificate is standard practice.'
    },
    {
      question: 'Can I bring my spouse to Canada while studying?',
      answer: 'Spouses of students enrolled in Master’s, Doctoral, and professional degree programs (like Law and Medicine) remain eligible to apply for an Open Work Permit. Spouses of undergraduate students are generally not eligible under the new rules.'
    },
    {
      question: 'Can I work off-campus during my studies in Canada?',
      answer: 'Yes! International students with a valid Study Permit can work off-campus up to 24 hours per week during academic semesters, and full-time (up to 40 hours per week) during scheduled breaks and summer vacations.'
    }
  ]
};
