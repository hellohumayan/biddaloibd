import { CountryPageData } from '../../types/country';

export const australiaCountryData: CountryPageData = {
  id: 'australia',
  slug: 'study-in-australia',
  name: 'Australia',
  flag: '🇦🇺',
  flagImage: 'https://flagcdn.com/w640/au.png',
  heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1600&q=80',
  tagline: 'World Top 100 Group of Eight Universities, Highest Global Student Wage & 2-4 Year Post-Study Work Visas',
  overview: 'Australia combines academic excellence with high quality of life, favorable climate, and the world’s highest minimum wage. Under the Genuine Student (GS) criteria, genuine Bangladeshi applicants enjoy transparent admissions and strong post-study regional career opportunities.',

  heroStats: {
    visaSuccessRate: '86% with Genuine Student (GS) Profile',
    postStudyWork: '2 to 4 Years Subclass 485',
    scholarshipRange: '20% to 50% Tuition Waiver',
    nextMajorIntake: 'February (Semester 1) & July (Semester 2)'
  },

  capitalDetails: {
    capitalCity: 'Canberra, ACT',
    currency: 'Australian Dollar (AUD)',
    currencySymbol: 'AUD $',
    exchangeRateToBdt: '1 AUD ≈ 78 BDT',
    mainLanguage: 'English',
    timeZoneFromBd: '4 to 5 Hours Ahead of Bangladesh (AEST / ACST / AWST)',
    majorStudentCities: ['Melbourne', 'Sydney', 'Brisbane', 'Perth', 'Adelaide', 'Geelong']
  },

  expenses: {
    tuition: {
      bachelorPerYear: 'AUD $24,000 - $44,000',
      bachelorBdtPerYear: 'BDT 19 - 34 Lakh',
      masterPerYear: 'AUD $26,000 - $46,000',
      masterBdtPerYear: 'BDT 20 - 36 Lakh',
      phdCoverage: 'Research Training Program (RTP) full scholarship + stipend',
      notes: 'Regional universities (Adelaide, Perth, Wollongong, Geelong) offer generous scholarships up to 30% and an extra 1-2 years of post-study work rights.'
    },
    living: {
      monthlyTotal: 'AUD $1,600 - $2,200',
      monthlyBdt: 'BDT 1.25 - 1.7 Lakh',
      yearlyTotal: 'AUD $29,710 (Department of Home Affairs standard)',
      yearlyBdt: 'BDT 23 Lakh',
      breakdown: {
        rent: 'AUD $800 - $1,200 (Shared apartment / student accommodation)',
        food: 'AUD $350 - $500 (Home cooking & markets)',
        transport: 'AUD $140 - $200 (Subsidized public transport pass)',
        utilitiesAndWifi: 'AUD $100 - $150',
        personal: 'AUD $150 - $200'
      }
    },
    otherExpenses: {
      visaFee: 'AUD $1,600 (Subclass 500 Student Visa fee)',
      airfareFromDhaka: 'BDT 85,000 - 135,000 (One way DAC to MEL/SYD)',
      healthInsurance: 'AUD $650 - $1,100 / year (Overseas Student Health Cover - OSHC)',
      testsAndSevis: 'IELTS / PTE Academic + upfront medical examination',
      totalInitialBudget: 'BDT 5 - 6.5 Lakh (Visa fee, OSHC, flight & initial bond)'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: '1st Year Tuition + AUD $29,710 Living Cost + AUD $2,000 Travel (Total: BDT 45 - 65 Lakh)',
      holdingPeriod: 'Minimum 3 to 6 months aged funds or authorized Student Education Loan',
      acceptableSponsors: ['Parents (Father/Mother) primary', 'Self or authorized banking financial institutions'],
      financialProofTips: 'The Department of Home Affairs requires strong evidence that the student and sponsor have genuine access to the funds declared.'
    }
  },

  whySelect: [
    {
      title: 'Group of Eight (Go8) & World Top Rankings',
      description: '9 Australian universities rank among the World Top 100 in the QS World Rankings, offering cutting-edge research facilities and global reputation.',
      highlight: '9 World Top 100 Universities'
    },
    {
      title: 'World’s Highest Minimum Student Wage',
      description: 'With an adult minimum wage of AUD $24.10/hour, students working the permitted 48 hours per fortnight can comfortably earn AUD $2,000–$2,800/month.',
      highlight: 'AUD $24.10 / hr Min Wage'
    },
    {
      title: 'Regional Study Post-Study Work Extensions',
      description: 'Studying in designated regional cities (Adelaide, Perth, Wollongong, Newcastle, Hobart) adds 1 to 2 extra years to your Temporary Graduate Visa (Subclass 485).',
      highlight: 'Up to 4 Years Post-Study Work'
    },
    {
      title: 'High Safety, Favorable Weather & Quality of Life',
      description: 'Melbourne, Sydney, and Adelaide consistently rank in the world’s top 10 most livable cities with pleasant weather and strong safety standards.',
      highlight: 'Top 10 Most Livable Cities'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: '48 Hours per Fortnight (2 weeks) during study periods (Unrestricted during course vacations)',
    minWageHourly: 'AUD $24.10 / hour (Australia Fair Work standard)',
    estMonthlyEarnings: 'AUD $2,000 - $2,800 / month (covers full monthly living expenses)',
    workPermitAfterStudy: '2 to 4 Years Temporary Graduate Subclass 485 Visa'
  },

  universities: [
    {
      id: 'deakin',
      name: 'Deakin University',
      location: 'Melbourne & Geelong, Victoria',
      area: 'Victoria (Melbourne / Geelong)',
      ranking: 'World Top 1% (QS World Rankings 2025)',
      type: 'Public',
      popularMajors: ['Information Technology', 'Cyber Security', 'Business Analytics', 'Nursing'],
      estTuition: 'AUD $34,000 - $42,000 / yr',
      tuitionBdt: 'BDT 26 - 33 Lakh / yr',
      ieltsReq: '6.5 (min 6.0)',
      pteReq: '58+',
      scholarshipAvailable: '20% to 25% Deakin STEM / International Scholarship',
      intakes: ['March (Trimester 1)', 'July (Trimester 2)', 'November (Trimester 3)'],
      image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'wollongong',
      name: 'University of Wollongong (UOW)',
      location: 'Wollongong & Sydney, NSW',
      area: 'New South Wales (Sydney / Wollongong)',
      ranking: 'World Top 165 (QS 2025)',
      type: 'Public',
      popularMajors: ['Computer Science', 'Civil Engineering', 'Finance', 'Supply Chain Management'],
      estTuition: 'AUD $32,000 - $39,000 / yr',
      tuitionBdt: 'BDT 25 - 30 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '58+',
      scholarshipAvailable: 'Up to 30% University Excellence Award',
      intakes: ['Autumn (February)', 'Spring (July)'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'latrobe',
      name: 'La Trobe University',
      location: 'Melbourne & Bendigo, Victoria',
      area: 'Victoria (Melbourne / Regional)',
      ranking: 'World Top 250 (QS 2025)',
      type: 'Public',
      popularMajors: ['Public Health', 'Data Science', 'Biotechnology', 'Accounting'],
      estTuition: 'AUD $33,000 - $40,000 / yr',
      tuitionBdt: 'BDT 25 - 31 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '58+',
      scholarshipAvailable: '15% to 25% High Achiever Scholarship',
      intakes: ['February', 'July', 'November'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'curtin',
      name: 'Curtin University',
      location: 'Perth, Western Australia',
      area: 'Western Australia (Perth)',
      ranking: 'World Top 175 (QS 2025) - Regional Post-Study Perks',
      type: 'Public',
      popularMajors: ['Mining & Petroleum Engineering', 'Information Systems', 'Marketing', 'Pharmacy'],
      estTuition: 'AUD $31,000 - $39,000 / yr',
      tuitionBdt: 'BDT 24 - 30 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '58+',
      scholarshipAvailable: '25% Merit Scholarship for Bangladeshi students',
      intakes: ['February', 'July'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Academic Credentials',
      description: 'Educational certificates and official transcripts.',
      required: true,
      documents: [
        {
          name: 'SSC & HSC / O & A Level Certificates & Transcripts',
          description: 'Official academic documents with attestation.'
        },
        {
          name: 'Bachelor’s Degree Certificate & Semester Transcripts',
          description: 'Attested copy of original degree and full grade transcripts.'
        },
        {
          name: 'Confirmation of Enrolment (CoE)',
          description: 'Official electronic certificate issued by the university upon paying initial tuition deposit.'
        }
      ]
    },
    {
      categoryName: 'Genuine Student (GS) Statements',
      description: 'Replaced GTE in 2024. Narrative demonstrating true study intent.',
      required: true,
      documents: [
        {
          name: 'Genuine Student (GS) Written Assessment',
          description: 'Answers to targeted questions explaining your choice of course, reasons for studying in Australia, expected career progression, and ties to Bangladesh.'
        }
      ]
    },
    {
      categoryName: 'Language Proficiency',
      description: 'Standardized English tests.',
      required: true,
      documents: [
        {
          name: 'PTE Academic or IELTS Academic',
          description: 'Minimum overall 6.5 (no band less than 6.0) for Master’s; minimum 6.0 (no band less than 5.5) for Bachelor’s.'
        }
      ]
    },
    {
      categoryName: 'Financial Capacity Evidence',
      description: 'Strict proof of funds adhering to Home Affairs requirements.',
      required: true,
      documents: [
        {
          name: 'Bank Solvency & 3-6 Month Statement / Education Loan',
          description: 'Proving total tuition + AUD $29,710 living expenses in an approved commercial bank.'
        },
        {
          name: 'Sponsor Income Documents',
          description: 'Salary certificates, pay slips, income tax assessment records, and property asset valuation report.'
        }
      ]
    },
    {
      categoryName: 'Health & Insurance',
      description: 'Mandatory health protection.',
      required: true,
      documents: [
        {
          name: 'Overseas Student Health Cover (OSHC) Policy',
          description: 'Continuous health insurance policy covering the entire duration of your Australian student visa.'
        },
        {
          name: 'HAP ID & Upfront Medical Examination Report',
          description: 'Conducted at an approved clinic in Dhaka (e.g. IOM or Green Crescent).'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'Australian Student Visa',
    visaSubclass: 'Subclass 500',
    embassyInDhaka: 'Australian High Commission Dhaka (Applications lodged online via ImmiAccount; Biometrics at VFS Dhaka/Sylhet)',
    processingTime: '4 to 8 weeks',
    interviewRequired: false,
    steps: [
      {
        stepNumber: 1,
        title: 'Receive Letter of Offer & Clear GS Assessment',
        description: 'Submit academic profile, English test, and Genuine Student (GS) response to the university.',
        timeline: '2–4 weeks'
      },
      {
        stepNumber: 2,
        title: 'Pay Initial Deposit & Purchase OSHC',
        description: 'Pay the tuition deposit and health insurance premium to receive your official Confirmation of Enrolment (CoE).',
        timeline: '1–2 weeks'
      },
      {
        stepNumber: 3,
        title: 'Undergo Upfront Medical Examination',
        description: 'Generate your HAP letter through ImmiAccount and complete health screening at an approved panel clinic.',
        timeline: '1 week'
      },
      {
        stepNumber: 4,
        title: 'Lodge Visa Application via ImmiAccount',
        description: 'Upload CoE, GS statements, financial solvency evidence, OSHC certificate, and passport.',
        timeline: '1–2 days'
      },
      {
        stepNumber: 5,
        title: 'Attend Biometrics Appointment at VFS Global',
        description: 'Provide digital fingerprints and photo at VFS Global in Dhaka or Sylhet within 14 days of lodgment.',
        timeline: '3–5 days after lodgment'
      },
      {
        stepNumber: 6,
        title: 'Visa Grant Notification',
        description: 'Receive your electronic Visa Grant Notice (no physical passport sticker required).',
        timeline: '4–8 weeks'
      }
    ],
    topInterviewQuestions: [
      {
        question: 'Why have you chosen to study in Australia over continuing your career in Bangladesh?',
        recommendedAnswerGuide: 'Highlight the practical industry-oriented curriculum, accreditation by Engineers Australia or ACS, and high post-graduation career opportunities in BD.'
      },
      {
        question: 'How do you plan to finance your tuition and living costs in Australia?',
        recommendedAnswerGuide: 'State clearly your sponsor’s verifiable income, savings account balance, and that you understand part-time work is only for secondary support, not primary tuition.'
      }
    ]
  },

  faqs: [
    {
      question: 'What replaced the GTE requirement for Australian student visas?',
      answer: 'In March 2024, Australia replaced the Genuine Temporary Entrant (GTE) requirement with the "Genuine Student" (GS) criteria. The GS requirement focuses on assessing whether the applicant genuinely intends to obtain a quality Australian qualification, while recognizing that some students may subsequently seek permanent migration pathways.'
    },
    {
      question: 'How much living cost fund is required for Australia?',
      answer: 'As of May 2024, the Department of Home Affairs increased the annual living cost requirement to AUD $29,710. In addition, you must show funds for your first year of tuition fees and AUD $2,000 for return travel expenses.'
    },
    {
      question: 'Can Bangladeshi students work part-time in Australia?',
      answer: 'Yes! International students with a Subclass 500 visa can work up to 48 hours per fortnight during teaching periods and unlimited hours during scheduled course holidays. With Australia’s high minimum wage of AUD $24.10/hour, students can earn between AUD $2,000 and $2,800 monthly.'
    }
  ]
};
