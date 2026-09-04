import { CountryPageData } from '../../types/country';

export const germanyCountryData: CountryPageData = {
  id: 'germany',
  slug: 'study-in-germany',
  name: 'Germany & Europe',
  flag: '🇩🇪',
  flagImage: 'https://flagcdn.com/w640/de.png',
  heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
  tagline: 'Zero or Low Tuition at Public Universities, Engineering Capital of Europe & 18-Month Job Search Visa',
  overview: 'Germany is the economic powerhouse of Europe and a dream destination for Bangladeshi engineers, data scientists, and researchers. With virtually tuition-free education at public universities and an 18-month job seeker visa upon graduation, Germany offers unparalleled return on investment.',

  heroStats: {
    visaSuccessRate: '90% with Blocked Account & Admission',
    postStudyWork: '18 Months Job Seeker Visa',
    scholarshipRange: '0% Tuition (Free Public Unis) / DAAD',
    nextMajorIntake: 'Winter (October) & Summer (April)'
  },

  capitalDetails: {
    capitalCity: 'Berlin',
    currency: 'Euro (EUR)',
    currencySymbol: '€',
    exchangeRateToBdt: '1 EUR ≈ 131 BDT',
    mainLanguage: 'German (English for International Master’s)',
    timeZoneFromBd: '4 to 5 Hours Behind Bangladesh (CET / CEST)',
    majorStudentCities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Aachen', 'Stuttgart']
  },

  expenses: {
    tuition: {
      bachelorPerYear: '€0 - €1,500 (Public Universities)',
      bachelorBdtPerYear: 'BDT 0 - 2 Lakh (Semester ticket only)',
      masterPerYear: '€0 - €3,000 (Public) / €8,000 - €16,000 (Private Universities)',
      masterBdtPerYear: 'BDT 0 - 4 Lakh (Public) / BDT 10 - 20 Lakh (Private)',
      phdCoverage: '100% Free + Salaried Employee Status (TV-L E13 ~ €2,200 - €2,800/mo net)',
      notes: 'Most public universities charge only a nominal "Semesterbeitrag" (administrative fee €200–€350) which includes free public transportation across the state.'
    },
    living: {
      monthlyTotal: '€850 - €1,100',
      monthlyBdt: 'BDT 1.1 - 1.45 Lakh',
      yearlyTotal: '€11,208 (Statutory Blocked Account Amount)',
      yearlyBdt: 'BDT 14.6 Lakh',
      breakdown: {
        rent: '€350 - €600 (Studentenwerk dormitory or WG flatshare)',
        food: '€200 - €300 (Mensa student canteen & supermarket)',
        transport: '€0 (Included in Semester ticket)',
        utilitiesAndWifi: '€70 - €100 (Broadband & GEZ broadcasting)',
        personal: '€120 (Mandatory statutory student health insurance)'
      }
    },
    otherExpenses: {
      visaFee: '€75 (National Student Visa fee)',
      airfareFromDhaka: 'BDT 75,000 - 120,000 (One way DAC to FRA/BER)',
      healthInsurance: '€120 - €130 / month (Techniker Krankenkasse / Barmer / AOK)',
      testsAndSevis: 'APS Certificate (if applicable) + IELTS Academic',
      totalInitialBudget: '€11,208 in Blocked Account + BDT 2 - 3 Lakh travel and initial expenses'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: '€11,208 deposited into a German Blocked Account (Sperrkonto)',
      holdingPeriod: 'Deposited prior to visa appointment in Expatrio, Fintiba, or Coracle',
      acceptableSponsors: ['Student or Parent depositing into official Blocked Account', 'Formal Obligation Letter (Verpflichtungserklärung) from Germany'],
      financialProofTips: 'The German Embassy in Dhaka requires an official Blocked Account confirmation (Expatrio or Fintiba) showing €11,208 ready to disburse €934/month after arrival.'
    }
  },

  whySelect: [
    {
      title: 'Tuition-Free Public Higher Education',
      description: 'Public universities across Germany charge zero tuition fees for both domestic and international students, making it the most affordable high-quality study destination.',
      highlight: '€0 Tuition Fee'
    },
    {
      title: 'Global Engineering & Tech Hub',
      description: 'Home to industry giants like Siemens, BMW, Bosch, SAP, Volkswagen, and BASF. Internships (Werkstudent) and industry master’s theses are readily available.',
      highlight: 'Automotive & STEM Capital'
    },
    {
      title: '18-Month Job Search Visa Post-Graduation',
      description: 'Graduates receive an 18-month residence permit to seek qualified employment. Once employed, you can transition to the EU Blue Card and permanent residency.',
      highlight: '18-Month Job Search & EU Blue Card'
    },
    {
      title: 'Schengen Area Mobility',
      description: 'A German student visa grants visa-free travel across 29 European countries in the Schengen Zone, providing wide networking and travel opportunities.',
      highlight: '29 Schengen Countries Free Travel'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: '140 Full Days or 280 Half Days per calendar year (Working student jobs earn €14-€20/hour)',
    minWageHourly: '€12.41 / hour (German Federal Statutory Minimum Wage)',
    estMonthlyEarnings: '€950 - €1,300 / month (comfortably covers food and room rent)',
    workPermitAfterStudy: '18 Months Job Search Residence Permit + Fast-track EU Blue Card'
  },

  universities: [
    {
      id: 'iu',
      name: 'IU International University of Applied Sciences',
      location: 'Berlin & Bad Honnef',
      ranking: 'Germany’s Largest Accredited Private University',
      type: 'Private',
      popularMajors: ['Artificial Intelligence', 'Data Science', 'International Management', 'Cyber Security'],
      estTuition: '€6,500 - €9,800 / yr',
      tuitionBdt: 'BDT 8.5 - 13 Lakh / yr',
      ieltsReq: '6.0 (or MOI waiver)',
      pteReq: '56+',
      scholarshipAvailable: 'Up to 50% Tuition Scholarship available online/on-campus',
      intakes: ['Rolling monthly intakes & October/April'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'srh',
      name: 'SRH Berlin University of Applied Sciences',
      location: 'Berlin, Dresden & Hamburg',
      ranking: 'Top Practical Industry-Aligned University in Berlin',
      type: 'Private',
      popularMajors: ['Computer Science (Software Technology)', 'Supply Chain', 'International Business', 'Digital Media'],
      estTuition: '€9,000 - €13,500 / yr',
      tuitionBdt: 'BDT 12 - 17.5 Lakh / yr',
      ieltsReq: '6.5',
      pteReq: '58+',
      scholarshipAvailable: 'High Performance Scholarships up to €3,000',
      intakes: ['October (Winter)', 'April (Summer)'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'gisma',
      name: 'Gisma University of Applied Sciences',
      location: 'Potsdam & Berlin',
      ranking: 'AMBA Accredited Tech & Business School',
      type: 'Private',
      popularMajors: ['Data Science & AI', 'Leadership & Digital Transformation', 'Software Engineering', 'Global MBA'],
      estTuition: '€8,500 - €12,500 / yr',
      tuitionBdt: 'BDT 11 - 16 Lakh / yr',
      ieltsReq: '6.0',
      pteReq: '56+',
      scholarshipAvailable: 'Up to 30% Future Leaders Grant',
      intakes: ['January', 'April', 'July', 'October'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'eubs',
      name: 'EU Business School (Munich Campus)',
      location: 'Munich, Bavaria',
      ranking: 'Top Tier European Business School',
      type: 'Private',
      popularMajors: ['Digital Business', 'Blockchain Management', 'Finance', 'International Marketing'],
      estTuition: '€11,000 - €15,000 / yr',
      tuitionBdt: 'BDT 14 - 19 Lakh / yr',
      ieltsReq: '6.0',
      pteReq: '56+',
      scholarshipAvailable: 'Merit reductions up to 20%',
      intakes: ['October', 'February', 'June', 'August'],
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Academic Certificates',
      description: 'Educational qualifications with necessary verifications.',
      required: true,
      documents: [
        {
          name: 'SSC & HSC / O & A Levels Marksheets & Certificates',
          description: 'Attested by Education Board, Ministry of Education, and MOFA Bangladesh.'
        },
        {
          name: 'Bachelor’s Degree Certificate & Transcript',
          description: 'Official 4-year degree from a recognized university in Bangladesh.'
        },
        {
          name: 'Admission Letter (Zulassungsbescheid)',
          description: 'Official letter of admission or conditional admission from the German university.'
        }
      ]
    },
    {
      categoryName: 'Financial Confirmation (Blocked Account)',
      description: 'Statutory German financial guarantee.',
      required: true,
      documents: [
        {
          name: 'Official Blocked Account Confirmation Letter (€11,208)',
          description: 'From an approved provider (Expatrio, Fintiba, Coracle, or Deutsche Bank).'
        }
      ]
    },
    {
      categoryName: 'Health Insurance & Embassy Dossier',
      description: 'Mandatory German coverage.',
      required: true,
      documents: [
        {
          name: 'Statutory or Travel Health Insurance',
          description: 'Proof of German public health insurance (TK, AOK) or incoming insurance for the first months.'
        },
        {
          name: 'Motivational Letter & Curriculum Vitae (Europass Format)',
          description: 'Structured CV and personal motivation letter tailored to German academic standards.'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'German National Visa for Study (§ 16b AufenthG)',
    embassyInDhaka: 'German Embassy Dhaka, 11 Madani Avenue, Baridhara, Dhaka 1212',
    processingTime: '4 to 8 weeks after interview',
    interviewRequired: true,
    steps: [
      {
        stepNumber: 1,
        title: 'Receive University Admission (Zulassung)',
        description: 'Secure your direct or conditional admission letter from a recognized German university.',
        timeline: '4–8 weeks'
      },
      {
        stepNumber: 2,
        title: 'Open and Fund Blocked Account (€11,208)',
        description: 'Open a digital blocked account via Expatrio or Fintiba and transfer funds using student outward remittance from a Bangladeshi bank.',
        timeline: '1–2 weeks'
      },
      {
        stepNumber: 3,
        title: 'Book Appointment on Embassy Waitlist',
        description: 'Register on the German Embassy Dhaka online appointment waitlist as early as possible.',
        timeline: 'Register early (waitlist varies)'
      },
      {
        stepNumber: 4,
        title: 'Attend In-Person Embassy Interview in Baridhara',
        description: 'Submit Videx form, passport, certificates, blocked account confirmation, and answer questions regarding course content.',
        timeline: 'Interview day'
      },
      {
        stepNumber: 5,
        title: 'Visa Stamping & Passport Collection',
        description: 'Upon approval from the local Aliens Authority (Ausländerbehörde) in Germany, collect stamped passport.',
        timeline: '4–8 weeks'
      }
    ],
    topInterviewQuestions: [
      {
        question: 'Why did you choose Germany instead of English-speaking countries?',
        recommendedAnswerGuide: 'Highlight Germany’s engineering reputation, low tuition costs, cutting-edge laboratory infrastructure, and Europe’s strong industrial job market.'
      },
      {
        question: 'Do you know German language or plan to learn it?',
        recommendedAnswerGuide: 'Confirm your current proficiency (A1/A2 or English fluency) and clearly state your intention to learn conversational German while in Germany.'
      }
    ]
  },

  faqs: [
    {
      question: 'Is higher education really free in Germany for Bangladeshi students?',
      answer: 'Yes! All public universities in 15 out of 16 German federal states charge €0 tuition fees to international students (only Baden-Württemberg charges €1,500/semester). Students only pay a semester administrative ticket fee of €200 to €350, which includes free regional transit.'
    },
    {
      question: 'What is a German Blocked Account (Sperrkonto)?',
      answer: 'It is a special bank account required by German immigration laws. You deposit €11,208 before your visa interview. Once you arrive in Germany, the bank unlocks €934 each month into your local checking account to cover your living expenses.'
    },
    {
      question: 'Can I study in Germany completely in English without knowing German?',
      answer: 'Yes! Over 2,000 Master’s programs across Germany are taught 100% in English. While basic German (A1/A2) is helpful for daily life and part-time jobs, it is not required for admission into English-medium degree programs.'
    }
  ]
};
