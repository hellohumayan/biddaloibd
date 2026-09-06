import { CountryPageData } from '../../types/country';

export const chinaCountryData: CountryPageData = {
  id: 'china',
  slug: 'study-in-china',
  name: 'China',
  flag: '🇨🇳',
  flagImage: 'https://flagcdn.com/w640/cn.png',
  heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80',
  tagline: 'World-Class QS Top Universities, Full CSC Scholarships, English-Taught MBBS & High-Tech R&D',
  overview: 'China has emerged as one of the most attractive global education destinations for Bangladeshi students, renowned for world-ranked research institutions (Tsinghua, Peking, Zhejiang), affordable English-taught Clinical Medicine (MBBS) recognized by BMDC/WHO, and generous Chinese Government Scholarships (CSC) covering 100% tuition, accommodation, and monthly living stipends.',

  heroStats: {
    visaSuccessRate: '96% Fast JW202/X1 Visa Processing',
    postStudyWork: 'Post-Study Work & Tech R&D Employment',
    scholarshipRange: 'CSC Full Scholarships (100% Free + Monthly Stipend) & Provincial Awards',
    nextMajorIntake: 'September (Fall) & March (Spring) Intakes'
  },

  capitalDetails: {
    capitalCity: 'Beijing',
    currency: 'Chinese Yuan Renminbi (CNY/RMB)',
    currencySymbol: '¥',
    exchangeRateToBdt: '1 CNY ≈ 16.8 BDT',
    mainLanguage: 'Mandarin (English medium for international degree programs)',
    timeZoneFromBd: '2 Hours Ahead of Bangladesh (CST)',
    majorStudentCities: ['Beijing', 'Shanghai', 'Hangzhou', 'Nanjing', 'Guangzhou', 'Wuhan']
  },

  expenses: {
    tuition: {
      bachelorPerYear: 'RMB 18,000 - 35,000 ($2,500 - $5,000 / yr)',
      bachelorBdtPerYear: 'BDT 3 - 6 Lakh / yr',
      masterPerYear: 'RMB 22,000 - 40,000 ($3,000 - $6,000 / yr)',
      masterBdtPerYear: 'BDT 3.5 - 6.5 Lakh / yr',
      phdCoverage: '100% CSC Tuition Waiver + RMB 3,500/mo Living Stipend',
      notes: 'Most Bangladeshi Master’s & PhD candidates receive CSC Type A or Type B, or University Presidential Scholarships covering full tuition and campus accommodation.'
    },
    living: {
      monthlyTotal: 'RMB 1,500 - 2,500 ($210 - $350)',
      monthlyBdt: 'BDT 25,000 - 42,000',
      yearlyTotal: 'RMB 15,000 - 25,000',
      yearlyBdt: 'BDT 2.5 - 4.2 Lakh',
      breakdown: {
        rent: 'RMB 400 - 900 (On-campus international student dormitory)',
        food: 'RMB 800 - 1,200 (Campus university canteens with certified Muslim/Halal food)',
        transport: 'RMB 100 - 150 (Subway / Metro & public shared bikes)',
        utilitiesAndWifi: 'RMB 100 - 150',
        personal: 'RMB 200'
      }
    },
    otherExpenses: {
      visaFee: 'BDT 8,000 - 12,000 (Chinese Embassy Dhaka X1 Visa submission)',
      airfareFromDhaka: 'BDT 35,000 - 55,000 (Direct Dhaka to Kunming/Guangzhou/Beijing)',
      healthInsurance: 'RMB 800 / yr (Ping An Comprehensive International Student Insurance)',
      testsAndSevis: 'Medical physical exam at designated clinic: BDT 5,000 - 8,000',
      totalInitialBudget: 'BDT 2.5 - 3.5 Lakh (Flight, JW202 visa, initial campus registration)'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: 'BDT 6 - 10 Lakh in personal or parent bank account',
      holdingPeriod: '1 - 3 months balance certificate',
      acceptableSponsors: ['Father', 'Mother', 'Self', 'First-degree blood relative'],
      financialProofTips: 'Chinese visa authorities require clear bank solvency and 6-month transaction statements showing stable funds.'
    }
  },

  whySelect: [
    {
      title: 'Generous Full CSC & Provincial Scholarships',
      description: 'The Chinese Government Scholarship (CSC), Belt and Road Scholarship, and university presidential awards provide 100% free tuition, free campus accommodation, and monthly cash stipends.',
      highlight: '100% Funding Available'
    },
    {
      title: 'Globally Recognized English-Medium MBBS',
      description: 'Dozens of Ministry of Education (MOE) listed universities offer English-taught MBBS programs with state-of-the-art affiliated hospitals, fully approved by BMDC and WHO.',
      highlight: 'BMDC & WHO Approved'
    },
    {
      title: 'World Leader in AI, Robotics & Engineering',
      description: 'Study at institutions leading the fourth industrial revolution in electric vehicles, 5G/6G, artificial intelligence, civil engineering, and high-speed rail technology.',
      highlight: 'High-Tech Superpower'
    },
    {
      title: 'Halal Canteens & Welcoming Campuses',
      description: 'Every major Chinese university features dedicated Muslim canteens (Qingzhen Canting) serving authentic halal food prepared under Islamic dietary standards.',
      highlight: 'Halal Certified'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: 'On-campus work-study & approved corporate internships',
    minWageHourly: 'RMB 25 - 45 / hour',
    estMonthlyEarnings: 'RMB 1,200 - 2,000 / month',
    workPermitAfterStudy: 'Post-Graduation Internship & Work Permit (Z-Visa) upon securing employment'
  },

  universities: [
    {
      id: 'tsinghua',
      name: 'Tsinghua University',
      location: 'Beijing',
      ranking: 'QS #20 Globally',
      type: 'Research',
      popularMajors: ['Computer Science', 'AI & Robotics', 'Electrical Engineering', 'Architecture'],
      estTuition: 'RMB 26,000 - 40,000 / yr',
      tuitionBdt: 'BDT 4.3 - 6.7 Lakh / yr',
      ieltsReq: '6.5 (or MOI certificate)',
      pteReq: '58+',
      scholarshipAvailable: 'CSC Full Scholarship (100% waiver + stipend)',
      intakes: ['September'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'zhejiang-uni',
      name: 'Zhejiang University',
      location: 'Hangzhou, Zhejiang',
      ranking: 'QS #44 Globally',
      type: 'Research',
      popularMajors: ['Clinical Medicine (MBBS)', 'Computer Science', 'Agriculture', 'Materials Science'],
      estTuition: 'RMB 24,000 - 32,000 / yr',
      tuitionBdt: 'BDT 4 - 5.3 Lakh / yr',
      ieltsReq: '6.0 (or MOI certificate)',
      pteReq: '52+',
      scholarshipAvailable: 'CSC & Zhejiang Provincial Government Scholarships',
      intakes: ['September', 'March'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Academic Credentials',
      description: 'Notarized educational certificates and academic transcripts.',
      required: true,
      documents: [
        {
          name: 'SSC & HSC / O & A Level Certificates & Transcripts',
          description: 'Notarized color copies of academic certificates.'
        },
        {
          name: 'Bachelor Degree & Transcripts (for Master’s/PhD)',
          description: 'Notarized graduation certificate and complete transcripts.'
        }
      ]
    },
    {
      categoryName: 'Visa & Health Forms',
      description: 'Chinese visa authority mandatory clearance forms.',
      required: true,
      documents: [
        {
          name: 'JW202 / JW201 Form',
          description: 'Official Ministry of Education visa authorization document issued with admission notice.'
        },
        {
          name: 'Foreigner Physical Examination Form',
          description: 'Completed medical examination with blood test and chest X-ray reports.'
        },
        {
          name: 'Police Clearance Certificate',
          description: 'Legalized Non-Criminal Record Certificate from Bangladesh police.'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'Chinese Student Visa (X1 Visa for >180 days / X2 for <180 days)',
    embassyInDhaka: 'Chinese Visa Application Service Center, Dhaka',
    processingTime: '5 to 10 working days',
    interviewRequired: false,
    steps: [
      {
        stepNumber: 1,
        title: 'Receive Admission & JW202 Form',
        description: 'University issues your official Admission Notice along with the official JW202/JW201 government visa authorization form.',
        timeline: '2 - 4 weeks'
      },
      {
        stepNumber: 2,
        title: 'Complete Physical Exam & Police Clearance',
        description: 'Undergo the Foreigner Physical Examination at an approved medical center in Dhaka and obtain a police clearance certificate.',
        timeline: '1 week'
      },
      {
        stepNumber: 3,
        title: 'Submit X1 Visa Application',
        description: 'Submit passport, photos, JW202, Admission Notice, and solvency statement at the Chinese Visa Application Center in Dhaka.',
        timeline: '5 - 7 days'
      },
      {
        stepNumber: 4,
        title: 'Fly to China & Residence Permit',
        description: 'Fly to China and convert your 30-day entry visa into a multi-entry Student Residence Permit at the local Exit-Entry Bureau.',
        timeline: 'Within 30 days of arrival'
      }
    ],
    topInterviewQuestions: [
      {
        question: 'Why did you choose China for your higher education?',
        recommendedAnswerGuide: 'Highlight the prestige of the university, world-class research facilities, CSC scholarship opportunities, and advanced technology programs.'
      }
    ]
  },

  faqs: [
    {
      question: 'Are Chinese MBBS degrees recognized in Bangladesh by BMDC?',
      answer: 'Yes. Universities listed on the Chinese Ministry of Education (MOE) approved list for English-medium Clinical Medicine are recognized by the Bangladesh Medical and Dental Council (BMDC) and the World Health Organization (WHO).'
    },
    {
      question: 'What does the Chinese Government Scholarship (CSC) cover?',
      answer: 'A full CSC scholarship covers 100% of your tuition fees, on-campus university dormitory accommodation, comprehensive health insurance, and provides a monthly living allowance (RMB 2,500/month for Bachelor, RMB 3,000/month for Master’s, RMB 3,500/month for PhD).'
    },
    {
      question: 'Is IELTS mandatory for studying in China?',
      answer: 'For many universities, an English Medium of Instruction (MOI) certificate from your previous Bangladeshi college or university is sufficient. However, having an IELTS score of 6.0+ significantly strengthens your application for top CSC and provincial scholarships.'
    }
  ]
};
