import { CountryPageData } from '../../types/country';

export const usaCountryData: CountryPageData = {
  id: 'usa',
  slug: 'study-in-usa',
  name: 'United States',
  flag: '🇺🇸',
  flagImage: 'https://flagcdn.com/w640/us.png',
  heroImage: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=1600&q=80',
  tagline: 'World Leader in STEM, Generous Scholarships & 3-Year STEM OPT',
  overview: 'The United States is the #1 destination for Bangladeshi students seeking cutting-edge research, massive STEM OPT employment opportunities, and substantial graduate assistantships (TA/RA). With over 4,000 accredited universities, the US welcomes thousands of Bangladeshi students every intake.',
  
  heroStats: {
    visaSuccessRate: '88% with Biddaloi Prep',
    postStudyWork: 'Up to 3 Years STEM OPT',
    scholarshipRange: '$5,000 - 100% Full Ride',
    nextMajorIntake: 'Fall 2025 (Aug) / Spring 2026 (Jan)'
  },

  capitalDetails: {
    capitalCity: 'Washington, D.C.',
    currency: 'US Dollar (USD)',
    currencySymbol: '$',
    exchangeRateToBdt: '1 USD ≈ 121 BDT',
    mainLanguage: 'English',
    timeZoneFromBd: '10 to 11 Hours Behind Bangladesh (EST / CST / PST)',
    majorStudentCities: ['Dallas / Fort Worth', 'New York City', 'Chicago', 'Boston', 'Austin', 'San Jose']
  },

  expenses: {
    tuition: {
      bachelorPerYear: '$16,000 - $38,000',
      bachelorBdtPerYear: 'BDT 19.5 - 46 Lakh',
      masterPerYear: '$14,000 - $32,000',
      masterBdtPerYear: 'BDT 17 - 38 Lakh',
      phdCoverage: '100% Tuition Waiver + Monthly Stipend ($1,800 - $2,800/mo)',
      notes: 'State universities often offer in-state tuition waivers for students receiving $1,000+ competitive scholarships.'
    },
    living: {
      monthlyTotal: '$900 - $1,400',
      monthlyBdt: 'BDT 1.1 - 1.7 Lakh',
      yearlyTotal: '$11,000 - $16,000',
      yearlyBdt: 'BDT 13 - 19 Lakh',
      breakdown: {
        rent: '$450 - $800 (Shared Apartment)',
        food: '$200 - $350 (Home cooking)',
        transport: '$60 - $100 (Campus / City pass)',
        utilitiesAndWifi: '$80 - $120',
        personal: '$100 - $150'
      }
    },
    otherExpenses: {
      visaFee: '$185 (DS-160 MRV Fee)',
      airfareFromDhaka: 'BDT 95,000 - 145,000 (One way DAC to US)',
      healthInsurance: '$1,200 - $2,200 / year (Mandatory university plan)',
      testsAndSevis: '$350 (I-901 SEVIS Fee) + IELTS/GRE',
      totalInitialBudget: 'BDT 4.5 - 6.5 Lakh (Flight, Visa, SEVIS & First Month)'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: '$30,000 - $45,000 (BDT 36 - 55 Lakh)',
      holdingPeriod: 'Last 3 to 6 months regular transaction history',
      acceptableSponsors: ['Father & Mother (Primary)', 'Self / Sibling', 'Close Relative with Affidavit of Support'],
      financialProofTips: 'The total liquid balance in the sponsor’s bank account must cover 1 full academic year (Tuition + Living listed on Form I-20). Avoid sudden huge deposits without documentary proof.'
    }
  },

  whySelect: [
    {
      title: '3-Year STEM OPT Work Authorization',
      description: 'Graduates of STEM-designated degrees (Science, Tech, Engineering, Math, Business Analytics) can work in the US for up to 36 months post-graduation on an F-1 visa.',
      highlight: '36 Months STEM Work Rights'
    },
    {
      title: 'Generous Graduate Assistantships (TA/RA)',
      description: 'Master’s and PhD students can receive Teaching Assistantships (TA) or Research Assistantships (RA) offering 100% tuition waivers plus monthly living stipends.',
      highlight: 'Tuition Waiver + $2,000/mo Stipend'
    },
    {
      title: 'Worldwide Academic Prestige & Top Rankings',
      description: 'Home to the majority of the world’s top 100 universities. An American degree commands instant credibility in the global job market.',
      highlight: 'Global Tier-1 Prestige'
    },
    {
      title: 'Strong Bangladeshi Alumni & Cultural Community',
      description: 'Thousands of active Bangladeshi Student Associations (BSA) across US universities provide airport pickups, initial housing, and networking for jobs.',
      highlight: 'Active BSA Support on Campus'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: '20 Hours/Week on-campus during semesters (40 Hours/Week during vacations)',
    minWageHourly: '$12.00 - $18.00 / hour (depending on state)',
    estMonthlyEarnings: '$900 - $1,400 / month (covers monthly living expenses)',
    workPermitAfterStudy: '12 Months standard OPT + 24 Months STEM extension (Total 3 Years)'
  },

  universities: [
    {
      id: 'uta',
      name: 'University of Texas at Arlington',
      location: 'Arlington, Texas',
      area: 'Texas',
      ranking: 'Carnegie R1 Top Tier Research',
      type: 'Public',
      popularMajors: ['Computer Science', 'Data Science', 'Mechanical Engineering', 'Information Systems'],
      estTuition: '$17,500 - $24,000 / yr',
      tuitionBdt: 'BDT 21 - 29 Lakh / yr',
      ieltsReq: '6.5 (min 6.0)',
      pteReq: '58+',
      scholarshipAvailable: 'Up to $10,000 + In-state Tuition Waiver',
      intakes: ['Fall (August)', 'Spring (January)'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'asu',
      name: 'Arizona State University',
      location: 'Tempe & Phoenix, Arizona',
      area: 'Arizona',
      ranking: '#1 Most Innovative University in the US',
      type: 'Public',
      popularMajors: ['Software Engineering', 'Business Analytics', 'Biomedical Science', 'Finance'],
      estTuition: '$26,000 - $34,000 / yr',
      tuitionBdt: 'BDT 31 - 41 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '58+',
      scholarshipAvailable: '$5,000 - $14,500 Merit Award',
      intakes: ['Fall (August)', 'Spring (January)'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'gmu',
      name: 'George Mason University',
      location: 'Fairfax, Virginia (Near Washington D.C.)',
      area: 'Virginia (DC Metro)',
      ranking: 'Top 50 US Public University',
      type: 'Public',
      popularMajors: ['Cyber Security', 'Computer Science', 'Public Policy', 'Data Analytics'],
      estTuition: '$24,000 - $32,000 / yr',
      tuitionBdt: 'BDT 29 - 39 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '59+',
      scholarshipAvailable: 'Merit scholarships up to $12,000/yr',
      intakes: ['Fall (August)', 'Spring (January)'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ubuffalo',
      name: 'University at Buffalo (SUNY)',
      location: 'Buffalo, New York',
      area: 'New York',
      ranking: 'Flagship University of New York (AAU)',
      type: 'Public',
      popularMajors: ['Civil Engineering', 'Computer Science', 'Management', 'Pharmacy'],
      estTuition: '$22,000 - $29,000 / yr',
      tuitionBdt: 'BDT 26 - 35 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '55+',
      scholarshipAvailable: 'International Provost Scholarship up to $10,000',
      intakes: ['Fall (August)', 'Spring (January)'],
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Academic Credentials',
      description: 'Original educational certificates and marksheets attested by respective authorities.',
      required: true,
      documents: [
        {
          name: 'SSC & HSC / O & A Level Marksheets & Certificates',
          description: 'Official academic transcripts and passing certificates.',
          attestation: 'Attested by Education Board and Ministry of Foreign Affairs (MOFA), Dhaka.',
          tipsForBangladeshi: 'Keep both original and 3 sets of attested colored photocopies.'
        },
        {
          name: 'Bachelor’s Transcript & Degree Certificate (For Master’s Applicants)',
          description: 'Official semester-by-semester transcript with grading scale and provisional or main certificate.',
          attestation: 'Issued by Registrar/Controller of Examinations of your University.',
          tipsForBangladeshi: 'If degree is pending, request a "Course Completion Certificate" or Expected Graduation letter.'
        },
        {
          name: 'Medium of Instruction (MOI) Certificate',
          description: 'Certificate from your university stating your Bachelor was taught 100% in English.',
          tipsForBangladeshi: 'Useful for universities offering IELTS waiver.'
        }
      ]
    },
    {
      categoryName: 'Standardized Test Scores',
      description: 'Official English proficiency and graduate admission exams.',
      required: true,
      documents: [
        {
          name: 'IELTS / TOEFL / PTE Score Report',
          description: 'IELTS Academic (minimum 6.0–6.5 overall) or PTE Academic (58+).',
          tipsForBangladeshi: 'Order official electronic score transmission via test center directly to the university code.'
        },
        {
          name: 'GRE / GMAT Score Report (Optional / Program Specific)',
          description: 'Required by select competitive STEM and Business graduate programs; waived by many partner institutions.'
        }
      ]
    },
    {
      categoryName: 'Personal & Profile Dossier',
      description: 'Your narrative, recommendations, and credentials.',
      required: true,
      documents: [
        {
          name: 'Valid Bangladeshi Machine Readable / E-Passport',
          description: 'Must have at least 1–2 years of remaining validity from your intended departure date.'
        },
        {
          name: 'Statement of Purpose (SOP) / Personal Statement',
          description: '1–2 pages detailing your academic background, why this university, research interests, and strong ties to Bangladesh.',
          tipsForBangladeshi: 'Biddaloi provides 1-on-1 SOP drafting and review to avoid generic templates.'
        },
        {
          name: '2 to 3 Letters of Recommendation (LOR)',
          description: 'Academic recommendations from university professors or professional supervisors on institutional letterhead.'
        },
        {
          name: 'Updated Curriculum Vitae (CV / Resume)',
          description: 'US-standard academic CV highlighting research, publications, projects, and work experience.'
        }
      ]
    },
    {
      categoryName: 'Financial & Solvency Documents',
      description: 'Proof of sufficient liquid funds to secure Form I-20 and pass the US Embassy interview.',
      required: true,
      documents: [
        {
          name: 'Bank Solvency Certificate & 6-Month Bank Statement',
          description: 'Original certificate from a recognized commercial bank in Bangladesh showing closing balance equal to 1st year total I-20 cost.',
          tipsForBangladeshi: 'Must reflect genuine, regular fund flow. Large unverified cash deposits just before statement date are red-flagged.'
        },
        {
          name: 'Affidavit of Financial Support',
          description: 'Notarized affidavit on BDT 300 non-judicial stamp by the sponsor declaring financial responsibility.'
        },
        {
          name: 'Sponsor’s Source of Income Proofs',
          description: 'TIN certificate, recent 2-3 years Income Tax Assessment (Pratyayan Patra), Trade License (if business), Salary certificate (if service), Land deed/mutation (if rental/agricultural).'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'F-1 Non-Immigrant Academic Student Visa',
    visaSubclass: 'F-1 Visa',
    embassyInDhaka: 'Embassy of the United States, Madani Avenue, Baridhara, Dhaka 1212',
    processingTime: 'Interview decision is immediate (Passport returned in 3–5 business days)',
    interviewRequired: true,
    steps: [
      {
        stepNumber: 1,
        title: 'Receive Unconditional Offer & Form I-20',
        description: 'Once admitted, submit financial solvency documents to the university International Student Office to generate your official Form I-20.',
        timeline: '2–4 weeks after admission'
      },
      {
        stepNumber: 2,
        title: 'Pay SEVIS I-901 Fee ($350)',
        description: 'Pay the $350 SEVIS fee online at fmjfee.com using an international dual-currency credit card and print the official receipt.',
        timeline: 'Immediately upon I-20 receipt'
      },
      {
        stepNumber: 3,
        title: 'Complete Online DS-160 Form',
        description: 'Fill out the comprehensive online visa application form DS-160 accurately. Keep note of your Application ID.',
        timeline: '1–2 days'
      },
      {
        stepNumber: 4,
        title: 'Pay Visa Fee ($185) & Book Interview Slot',
        description: 'Create an account on the US Travel Docs portal, pay the MRV visa fee at designated Eastern Bank branches, and schedule your biometric and interview date at the US Embassy Dhaka.',
        timeline: 'Book as early as possible (up to 365 days in advance)'
      },
      {
        stepNumber: 5,
        title: 'Attend Embassy Interview in Dhaka',
        description: 'Carry all original academic documents, I-20, SEVIS receipt, DS-160 confirmation, passport, and financial file to Madani Avenue.',
        timeline: 'Interview day (takes 2–3 minutes face-to-face)',
        bdSpecificNote: 'Focus on non-immigrant intent: clearly articulate why you will return to Bangladesh after graduation.'
      },
      {
        stepNumber: 6,
        title: 'Collect Stamped Passport',
        description: 'Upon approval, collect your passport with F-1 visa foil from the VFS/Aramex collection center in Dhaka or Sylhet.',
        timeline: '3–5 business days'
      }
    ],
    topInterviewQuestions: [
      {
        question: 'Why did you choose this specific university over other institutions in the US or Bangladesh?',
        recommendedAnswerGuide: 'Highlight specific faculty members, research labs, curriculum electives, and career alignment. Do not just say "it is a good university".'
      },
      {
        question: 'Who is sponsoring your education and what is their source of income?',
        recommendedAnswerGuide: 'State clearly: "My father is sponsoring me. He is a senior director / business owner in [Industry] with an annual verified income of BDT [Amount]." Have the tax documents ready.'
      },
      {
        question: 'What are your career plans after finishing your degree?',
        recommendedAnswerGuide: 'Clearly describe your plan to return to Bangladesh to work in growing domestic sectors (e.g. software development, fintech, pharmaceuticals, engineering firms).'
      }
    ]
  },

  faqs: [
    {
      question: 'Can I study in the USA without IELTS from Bangladesh?',
      answer: 'Yes! Several recognized universities accept Medium of Instruction (MOI) certificates from Bangladeshi universities (DU, BUET, NSU, BRAC, IUT, etc.) or accept Duolingo English Test (DET) scores (105–120) and PTE Academic. Our counselors can filter 100% MOI-accepting universities for you.'
    },
    {
      question: 'How much bank balance is required for the US F-1 student visa?',
      answer: 'Your sponsor must show liquid funds equal to or slightly higher than the 1-year total estimated cost listed on your Form I-20 (typically $28,000 to $45,000, or roughly BDT 34–55 Lakh). Acceptable funds include savings accounts, fixed deposits (FDR), and provident funds with clear 6-month paper trails.'
    },
    {
      question: 'Can my uncle or relatives sponsor my US student visa?',
      answer: 'While parents are the ideal primary sponsors, first-degree relatives (uncle, maternal uncle, brother) can sponsor provided they sign a notarized Affidavit of Support and provide verifiable bank statements, business tax papers, and a clear statement of relationship.'
    },
    {
      question: 'Can I work while studying in the US?',
      answer: 'Yes. International students on F-1 visas can work up to 20 hours per week on-campus during academic semesters and up to 40 hours per week during summer and winter breaks. Hourly wages range from $12 to $18/hour, which comfortably covers monthly living expenses.'
    },
    {
      question: 'What is STEM OPT and who is eligible?',
      answer: 'Optional Practical Training (OPT) allows F-1 students to work in the US in their field of study. Standard OPT is 12 months, but STEM degree graduates (Science, Technology, Engineering, Math, Data, and Business Analytics) receive a 24-month extension, giving you 3 full years of legal US work authorization.'
    },
    {
      question: 'When should I start applying for the Fall (August) intake?',
      answer: 'We strongly recommend starting 6 to 9 months ahead (October–February for the following Fall) to secure maximum merit scholarships, early I-20 issuance, and prime visa interview appointment dates at the US Embassy in Dhaka.'
    }
  ]
};
