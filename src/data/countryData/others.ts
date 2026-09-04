import { CountryPageData } from '../../types/country';

export const swedenCountryData: CountryPageData = {
  id: 'sweden',
  slug: 'study-in-sweden',
  name: 'Sweden',
  flag: '🇸🇪',
  flagImage: 'https://flagcdn.com/w640/se.png',
  heroImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1600&q=80',
  tagline: 'Home of the Nobel Prize, Sustainability & Unrestricted Part-Time Work Hours',
  overview: 'Sweden offers Scandinavian academic excellence, innovation hubs (Spotify, Skype, IKEA, Volvo), and the unique advantage of no statutory cap on student part-time work hours, along with 1-year job seeker residence permits.',

  heroStats: {
    visaSuccessRate: '93% with Direct Residence Permit',
    postStudyWork: '12 Months Job Search Visa',
    scholarshipRange: 'SI Scholarships (100% Free + Stipend) & Uni Awards',
    nextMajorIntake: 'Autumn (August/September) Intake'
  },

  capitalDetails: {
    capitalCity: 'Stockholm',
    currency: 'Swedish Krona (SEK)',
    currencySymbol: 'kr',
    exchangeRateToBdt: '1 SEK ≈ 11.5 BDT',
    mainLanguage: 'Swedish (English spoken fluently by 90%+ population)',
    timeZoneFromBd: '4 to 5 Hours Behind Bangladesh (CET)',
    majorStudentCities: ['Stockholm', 'Gothenburg', 'Uppsala', 'Lund', 'Linköping']
  },

  expenses: {
    tuition: {
      bachelorPerYear: 'SEK 90,000 - 150,000',
      bachelorBdtPerYear: 'BDT 10.5 - 17.5 Lakh',
      masterPerYear: 'SEK 100,000 - 170,000',
      masterBdtPerYear: 'BDT 11.5 - 19.5 Lakh',
      phdCoverage: '100% Free + Salaried Employee Status (SEK 30,000+/mo gross)',
      notes: 'Swedish Institute (SI) Scholarships for South Asia cover 100% tuition, monthly living allowance (SEK 12,000/mo), and travel grant.'
    },
    living: {
      monthlyTotal: 'SEK 10,314 (Migration Agency statutory requirement)',
      monthlyBdt: 'BDT 1.18 Lakh',
      yearlyTotal: 'SEK 103,140 (10 Months academic year)',
      yearlyBdt: 'BDT 11.8 Lakh',
      breakdown: {
        rent: 'SEK 4,200 - 6,500 (Student room / SSSB corridor room)',
        food: 'SEK 2,500 - 3,200 (Supermarket groceries & cooking)',
        transport: 'SEK 650 (SL Student travel card in Stockholm)',
        utilitiesAndWifi: 'SEK 400',
        personal: 'SEK 800'
      }
    },
    otherExpenses: {
      visaFee: 'SEK 1,500 (Higher Education Residence Permit fee)',
      airfareFromDhaka: 'BDT 70,000 - 110,000 (One way DAC to ARN)',
      healthInsurance: 'Comprehensive insurance provided by Swedish University (FAS/Kammarkollegiet)',
      testsAndSevis: 'UniversityAdmissions.se application fee: SEK 900',
      totalInitialBudget: 'BDT 3 - 4.5 Lakh (Application fee, flight, initial deposit)'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: 'SEK 103,140 (approx. BDT 12–14 Lakh) in student’s personal account',
      holdingPeriod: 'Must be present in applicant’s personal bank account at time of application',
      acceptableSponsors: ['Student’s own personal bank account is strictly preferred by Migrationsverket'],
      financialProofTips: 'The Swedish Migration Agency strictly prefers the bank account to be in the applicant’s own name.'
    }
  },

  whySelect: [
    {
      title: 'No Weekly Limitation on Student Work Hours',
      description: 'Unlike the US, UK, or Canada, Sweden does not place an hourly limit on student part-time work, provided you maintain satisfactory academic progress.',
      highlight: 'Unlimited Part-Time Work Rights'
    },
    {
      title: 'Swedish Institute (SI) 100% Full-Ride Scholarship',
      description: 'The Swedish government SI Scholarship for Global Professionals covers 100% tuition fees, monthly living expenses (SEK 12,000/month), and travel allowance.',
      highlight: 'Full Tuition Waiver + Living Allowance'
    },
    {
      title: 'Silicon Valley of Europe',
      description: 'Stockholm produces more tech unicorns per capita than any other European city, home to Spotify, Klarna, King, Mojang (Minecraft), and Ericsson.',
      highlight: 'Booming Tech Ecosystem'
    },
    {
      title: 'Spouse Can Accompany & Work Full-Time',
      description: 'Your spouse is granted a Residence Permit with full unrestricted work rights for the entire duration of your Master’s or PhD studies.',
      highlight: 'Spousal Work Permit Included'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: 'No statutory weekly hour cap (Recommended: 15–20 hours/week to balance studies)',
    minWageHourly: 'SEK 130 - 170 / hour',
    estMonthlyEarnings: 'SEK 11,000 - 16,000 / month (comfortably covers all living expenses)',
    workPermitAfterStudy: '12 Months Job Search Residence Permit'
  },

  universities: [
    {
      id: 'kth',
      name: 'KTH Royal Institute of Technology',
      location: 'Stockholm',
      ranking: 'QS World Top 75',
      type: 'Public',
      popularMajors: ['Computer Science', 'Machine Learning', 'Electric Power Engineering', 'Cybersecurity'],
      estTuition: 'SEK 155,000 / yr',
      tuitionBdt: 'BDT 17.8 Lakh / yr',
      ieltsReq: '6.5 (min 5.5)',
      pteReq: '62+',
      scholarshipAvailable: 'KTH Scholarship (covers full tuition)',
      intakes: ['Autumn (August)'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'chalmers',
      name: 'Chalmers University of Technology',
      location: 'Gothenburg',
      ranking: 'Top Tier European Engineering',
      type: 'Public',
      popularMajors: ['Automotive Engineering', 'Data Science', 'Wireless Communications', 'Biotechnology'],
      estTuition: 'SEK 140,000 / yr',
      tuitionBdt: 'BDT 16 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '62+',
      scholarshipAvailable: 'Avancez Scholarship (75% tuition waiver)',
      intakes: ['Autumn (August)'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'uppsala',
      name: 'Uppsala University',
      location: 'Uppsala',
      ranking: 'Oldest Nordic University (Founded 1477)',
      type: 'Public',
      popularMajors: ['Bioinformatics', 'Pharmaceutical Science', 'International Business', 'Sustainable Development'],
      estTuition: 'SEK 110,000 - 145,000 / yr',
      tuitionBdt: 'BDT 12.5 - 16.5 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '62+',
      scholarshipAvailable: 'Anders Wall & King Carl Gustaf Scholarships',
      intakes: ['Autumn (August)'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Academic Credentials',
      description: 'Submitted centrally via UniversityAdmissions.se.',
      required: true,
      documents: [
        {
          name: 'SSC, HSC & Bachelor Degrees & Marksheets',
          description: 'Certified color scans uploaded to the centralized Swedish admission portal.'
        },
        {
          name: 'IELTS Academic (6.5) or recognized MOI',
          description: 'Official test result report.'
        }
      ]
    },
    {
      categoryName: 'Financial Guarantee',
      description: 'Migrationsverket personal account proof.',
      required: true,
      documents: [
        {
          name: 'Bank Statement in Student’s Personal Name',
          description: 'Reflecting at least SEK 103,140 in a personal bank account.'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'Swedish Residence Permit for Higher Education Studies',
    embassyInDhaka: 'Embassy of Sweden, Dhaka (Processed online through Migrationsverket; Biometrics at Embassy in Gulshan)',
    processingTime: '6 to 10 weeks',
    interviewRequired: false,
    steps: [
      {
        stepNumber: 1,
        title: 'Centralized Application via UniversityAdmissions.se',
        description: 'Submit up to 4 Master’s program choices by the mid-January deadline.',
        timeline: 'October – January'
      },
      {
        stepNumber: 2,
        title: 'Receive Official Admission Results & Pay 1st Installment',
        description: 'Once admitted in late March, pay the first semester tuition fee directly to the university.',
        timeline: 'Late March / Early April'
      },
      {
        stepNumber: 3,
        title: 'Apply for Residence Permit Online via Migrationsverket',
        description: 'Submit online residence permit application with bank statement showing SEK 103,140.',
        timeline: 'April / May'
      },
      {
        stepNumber: 4,
        title: 'Provide Biometrics at Embassy of Sweden, Dhaka',
        description: 'Attend the Swedish Embassy in Gulshan-2, Dhaka for digital photo and fingerprinting.',
        timeline: 'Upon invitation'
      },
      {
        stepNumber: 5,
        title: 'Residence Permit Card (UT Card) Decision',
        description: 'Receive decision letter and collect residence permit card to travel to Sweden.',
        timeline: '6–10 weeks'
      }
    ],
    topInterviewQuestions: []
  },

  faqs: [
    {
      question: 'Is it true that Sweden has no limit on part-time work hours for students?',
      answer: 'Yes! Unlike most other Western study destinations that limit international students to 20 hours per week, Sweden does not enforce any legal cap on working hours, as long as you make satisfactory progress in your studies.'
    },
    {
      question: 'Can my spouse accompany me and work in Sweden?',
      answer: 'Yes! Sweden has one of the most generous family reunion policies in the world. When you are granted a residence permit for study, your spouse and children receive residence permits for the exact same duration, and your spouse is permitted to work full-time.'
    }
  ]
};

export const finlandCountryData: CountryPageData = {
  id: 'finland',
  slug: 'study-in-finland',
  name: 'Finland',
  flag: '🇫🇮',
  flagImage: 'https://flagcdn.com/w640/fi.png',
  heroImage: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=1600&q=80',
  tagline: 'World’s #1 Happiest Country, 30-Hr/Wk Student Work Rights & 2-Year Post-Study Work Permit',
  overview: 'Finland ranks as the happiest nation in the world for 7 consecutive years. Offering cutting-edge technology degrees, high scholarships (up to 50%-100%), 30-hour weekly student work rights, and an automatic 2-year post-graduation job search permit, Finland is rapidly growing in popularity for Bangladeshi students.',

  heroStats: {
    visaSuccessRate: '94% with Direct Type-A Permit',
    postStudyWork: '2 Years Post-Graduation Residence Permit',
    scholarshipRange: '20% to 100% Tuition Fee Waiver',
    nextMajorIntake: 'Autumn (August/September) Intake'
  },

  capitalDetails: {
    capitalCity: 'Helsinki',
    currency: 'Euro (EUR)',
    currencySymbol: '€',
    exchangeRateToBdt: '1 EUR ≈ 131 BDT',
    mainLanguage: 'Finnish & Swedish (All Master’s taught in English)',
    timeZoneFromBd: '3 to 4 Hours Behind Bangladesh (EET)',
    majorStudentCities: ['Helsinki', 'Espoo', 'Tampere', 'Oulu', 'Turku']
  },

  expenses: {
    tuition: {
      bachelorPerYear: '€6,000 - €12,000',
      bachelorBdtPerYear: 'BDT 7.8 - 15.7 Lakh',
      masterPerYear: '€8,000 - €14,000',
      masterBdtPerYear: 'BDT 10.5 - 18 Lakh',
      phdCoverage: '100% Free Tuition for Doctoral candidates',
      notes: 'Most Finnish universities provide automatic 50% tuition reduction scholarships starting from the 2nd year if 55 ECTS credits are completed.'
    },
    living: {
      monthlyTotal: '€700 - €950',
      monthlyBdt: 'BDT 91,000 - 1.24 Lakh',
      yearlyTotal: '€6,720 (Statutory Migri Requirement per Year: €560/mo)',
      yearlyBdt: 'BDT 8.8 Lakh',
      breakdown: {
        rent: '€300 - €500 (HOAS / student apartment housing)',
        food: '€200 - €280 (Campus student meals are subsidized by government to €2.95/meal)',
        transport: '€35 - €50 (HSL Student public transport card)',
        utilitiesAndWifi: '€30 - €50',
        personal: '€80'
      }
    },
    otherExpenses: {
      visaFee: '€350 (Electronic first residence permit application fee)',
      airfareFromDhaka: 'BDT 70,000 - 115,000 (One way DAC to HEL)',
      healthInsurance: '€180 - €250 / year (SIP / Swisscare health insurance)',
      testsAndSevis: 'Studyinfo.fi application is completely free of charge',
      totalInitialBudget: 'BDT 3 - 4 Lakh (Insurance, flight, first month allowance)'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: '€6,720 + Remaining Tuition (Total approx. BDT 14 - 18 Lakh)',
      holdingPeriod: 'In student’s personal bank account at the time of permit application',
      acceptableSponsors: ['Student’s personal bank account required by Migri'],
      financialProofTips: 'The Finnish Immigration Service (Migri) requires funds to be deposited in a bank account in the applicant’s own name.'
    }
  },

  whySelect: [
    {
      title: 'World’s #1 Happiest Country 7 Years in a Row',
      description: 'Exceptional social safety, pristine nature, universal healthcare, and zero corruption make Finland one of the best places to live and study.',
      highlight: 'Ranked #1 Happiest Nation'
    },
    {
      title: 'Generous 30 Hours/Week Work Allowance',
      description: 'Students in Finland can work up to 30 hours per week throughout the academic year, with average wages between €12 and €17/hour.',
      highlight: '30 Hours / Week Work Rights'
    },
    {
      title: 'Continuous Type-A Residence Permit for Students',
      description: 'Students are granted a Continuous Type-A residence permit for the entire duration of their degree program, which directly counts towards permanent residency.',
      highlight: 'Direct Pathway to PR'
    },
    {
      title: '2-Year Job Search Permit Post-Graduation',
      description: 'Upon finishing your studies, Finland grants a 2-year post-study residence permit to seek employment or start a business.',
      highlight: '2-Year Post-Study Job Search'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: 'Up to 30 Hours/Week during study terms (Full-time during holidays)',
    minWageHourly: '€11.50 - €16.00 / hour',
    estMonthlyEarnings: '€1,000 - €1,500 / month (more than covers all living costs)',
    workPermitAfterStudy: '2 Years Post-Graduation Residence Permit'
  },

  universities: [
    {
      id: 'aalto',
      name: 'Aalto University',
      location: 'Espoo (Helsinki Metropolitan Area)',
      ranking: 'World Top 110 & Premier Nordic Tech/Design University',
      type: 'Public',
      popularMajors: ['Computer Science', 'Data Science', 'Industrial Engineering', 'Architecture'],
      estTuition: '€12,000 - €15,000 / yr',
      tuitionBdt: 'BDT 15.7 - 19.6 Lakh / yr',
      ieltsReq: '6.5 (min 5.5)',
      pteReq: '62+',
      scholarshipAvailable: 'Aalto Scholarship (100% or 50% tuition waiver)',
      intakes: ['Autumn (August)'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'tampere',
      name: 'Tampere University',
      location: 'Tampere',
      ranking: 'Finland’s 2nd Largest University',
      type: 'Public',
      popularMajors: ['Software Engineering', 'Robotics', 'Public Health', 'Business & Tech'],
      estTuition: '€10,000 - €12,000 / yr',
      tuitionBdt: 'BDT 13 - 15.7 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '62+',
      scholarshipAvailable: 'Tampere University Scholarship (up to 100% waiver)',
      intakes: ['Autumn (August)'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'lut',
      name: 'LUT University (Lappeenranta-Lahti)',
      location: 'Lappeenranta & Lahti',
      ranking: 'World Top 300 & Global Climate Action Leader',
      type: 'Public',
      popularMajors: ['Mechanical Engineering', 'Renewable Energy', 'Software Product Management', 'Business Analytics'],
      estTuition: '€9,500 - €13,500 / yr',
      tuitionBdt: 'BDT 12.4 - 17.6 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '62+',
      scholarshipAvailable: '2-Year Full and 50% Tuition Scholarships',
      intakes: ['Autumn (August)'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Educational Documents',
      description: 'Verified certificates submitted on Studyinfo.fi.',
      required: true,
      documents: [
        {
          name: 'Bachelor Transcript and Degree Certificate',
          description: 'Color scans of original documents + English translations.'
        },
        {
          name: 'IELTS Academic (6.5) or PTE Academic (62+)',
          description: 'Official test score report transmitted electronically.'
        }
      ]
    },
    {
      categoryName: 'Financial Proof & Health Insurance',
      description: 'Mandatory proof of funds for Finnish Migri.',
      required: true,
      documents: [
        {
          name: 'Bank Statement in Student’s Name (€6,720)',
          description: 'Showing full living maintenance in an account under the student’s sole name.'
        },
        {
          name: 'Comprehensive Health Insurance Policy (SIP / Swisscare)',
          description: 'Approved health insurance covering up to €120,000 in medical costs.'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'Finnish First Residence Permit for Studies (Type-A Continuous Permit)',
    embassyInDhaka: 'Processed online via Enter Finland; Biometrics at VFS Global / Embassy of Finland (New Delhi / Dhaka center)',
    processingTime: '3 to 6 weeks for electronic applications',
    interviewRequired: false,
    steps: [
      {
        stepNumber: 1,
        title: 'Apply via Centralized Studyinfo.fi Portal',
        description: 'Submit applications to up to 6 degree programs during the joint application window in January.',
        timeline: 'January'
      },
      {
        stepNumber: 2,
        title: 'Accept Admission Offer & Pay Tuition Fee',
        description: 'Accept the study place electronically and pay any remaining tuition fee to receive your official admission certificate.',
        timeline: 'April / May'
      },
      {
        stepNumber: 3,
        title: 'Submit Electronic Residence Permit via Enter Finland',
        description: 'Fill out the online application, upload the bank statement with €6,720, and attach private health insurance.',
        timeline: 'May / June'
      },
      {
        stepNumber: 4,
        title: 'Verify Identity & Biometrics at VFS',
        description: 'Attend your booked appointment at VFS Global to verify original passports and give biometric fingerprints.',
        timeline: 'Within 2 weeks of online submission'
      },
      {
        stepNumber: 5,
        title: 'Receive Digital Decision & Residence Permit Card',
        description: 'Collect your official biometric residence permit card (RP card) and prepare for departure.',
        timeline: '3–6 weeks'
      }
    ],
    topInterviewQuestions: []
  },

  faqs: [
    {
      question: 'How many hours can I work part-time in Finland?',
      answer: 'In 2022, Finland increased the permitted working hours for international students from 25 to 30 hours per week during term time. There are no restrictions on working hours during vacation periods.'
    },
    {
      question: 'Does study time in Finland count towards Permanent Residency?',
      answer: 'Yes! International students in Finland are now issued continuous Type-A residence permits. Time spent on a Type-A student permit counts 100% towards the 4-year residency requirement for Finnish Permanent Residency (PR).'
    }
  ]
};
