import { CountryPageData } from '../../types/country';

export const ukCountryData: CountryPageData = {
  id: 'uk',
  slug: 'study-in-uk',
  name: 'United Kingdom',
  flag: '🇬🇧',
  flagImage: 'https://flagcdn.com/w640/gb.png',
  heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
  tagline: '1-Year Fast-Track Master’s, 2-Year Graduate Route Work Visa & Historic Russell Group Prestige',
  overview: 'The United Kingdom offers Bangladeshi students world-renowned academic heritage, accelerated 1-year Master’s programs (saving an entire year of tuition and living expenses), and the popular 2-year Graduate Route post-study work visa.',

  heroStats: {
    visaSuccessRate: '92% with CAS & 28-Day Funds',
    postStudyWork: '2 Years Graduate Route (3 Yrs for PhD)',
    scholarshipRange: '£1,500 - £10,000 /yr',
    nextMajorIntake: 'September (Main) & January (Spring)'
  },

  capitalDetails: {
    capitalCity: 'London, England',
    currency: 'British Pound Sterling (GBP)',
    currencySymbol: '£',
    exchangeRateToBdt: '1 GBP ≈ 155 BDT',
    mainLanguage: 'English',
    timeZoneFromBd: '5 to 6 Hours Behind Bangladesh (GMT / BST)',
    majorStudentCities: ['London', 'Manchester', 'Birmingham', 'Bristol', 'Leeds', 'Coventry']
  },

  expenses: {
    tuition: {
      bachelorPerYear: '£13,000 - £24,000',
      bachelorBdtPerYear: 'BDT 20 - 37 Lakh',
      masterPerYear: '£13,500 - £26,000 (1 Year Complete Master’s)',
      masterBdtPerYear: 'BDT 21 - 40 Lakh (Total Program)',
      phdCoverage: 'Commonwealth & Vice-Chancellor Research Scholarships',
      notes: 'Because most Master’s in the UK are completed in exactly 12 months, the total cost is significantly lower than 2-year programs in other countries.'
    },
    living: {
      monthlyTotal: '£900 - £1,400 (Outer London) / £1,300 - £1,800 (Inner London)',
      monthlyBdt: 'BDT 1.4 - 2.2 Lakh',
      yearlyTotal: '£10,224 (Outside London UKVI rate) / £13,348 (Inside London)',
      yearlyBdt: 'BDT 16 - 21 Lakh',
      breakdown: {
        rent: '£450 - £750 (Outside London student housing)',
        food: '£180 - £260 (Groceries & Asian markets)',
        transport: '£60 - £110 (16-25 Railcard / Bus pass)',
        utilitiesAndWifi: '£60 - £90',
        personal: '£100 - £150'
      }
    },
    otherExpenses: {
      visaFee: '£490 (Student Visa) + £776/year (Immigration Health Surcharge - IHS)',
      airfareFromDhaka: 'BDT 80,000 - 130,000 (One way DAC to LHR/MAN)',
      healthInsurance: 'Included via UK NHS through the paid IHS surcharge',
      testsAndSevis: 'IELTS Academic / UKVI IELTS or University English Test (ELLT)',
      totalInitialBudget: 'BDT 4 - 5.5 Lakh (Visa, IHS, Flight & Initial Allowance)'
    },
    capitalAndBankSolvency: {
      amountRequiredInBank: 'Remaining Tuition + £10,224 (Outside London) or £13,348 (Inside London) (Total: BDT 28 - 42 Lakh)',
      holdingPeriod: 'Strictly 28 Consecutive Days holding in bank prior to visa submission',
      acceptableSponsors: ['Self', 'Parents (Father/Mother with Birth Certificate proof)'],
      financialProofTips: 'The funds must not drop even a single penny below the threshold during the 28-day holding window. Must be in a personal savings account in an authorized bank.'
    }
  },

  whySelect: [
    {
      title: 'Fast-Track 1-Year Master’s Degree',
      description: 'Complete your entire Master’s qualification in just 12 months, saving a full year of living expenses and entering the workforce much faster.',
      highlight: 'Save 1 Year Living Expenses'
    },
    {
      title: '2-Year Unrestricted Graduate Route Visa',
      description: 'After graduation, students receive a 2-year post-study work visa allowing them to work in any role or sector across England, Scotland, Wales, and Northern Ireland.',
      highlight: '2-Year Open UK Work Permit'
    },
    {
      title: 'No IELTS Required with Select MOI & Internal Tests',
      description: 'Many accredited UK universities accept Medium of Instruction (MOI) certificates from Bangladeshi universities or provide free online internal English assessments (ELLT).',
      highlight: 'IELTS Waiver Available'
    },
    {
      title: 'Rich History & Huge Bangladeshi Community',
      description: 'With over 800,000 British-Bangladeshis, halal food, mosques, and cultural warmth are accessible in almost every major student hub from London to Birmingham.',
      highlight: 'Halal Food & Warm Diaspora'
    }
  ],

  partTimeWorkRules: {
    hoursAllowedPerWeek: '20 Hours/Week during term time (Full-time during official vacation periods)',
    minWageHourly: '£11.44 / hour (UK National Living Wage)',
    estMonthlyEarnings: '£900 - £1,100 / month (covers monthly rent & groceries)',
    workPermitAfterStudy: '2 Years Graduate Route (3 Years for PhD graduates)'
  },

  universities: [
    {
      id: 'coventry',
      name: 'Coventry University',
      location: 'Coventry & Central London',
      ranking: 'Top 30 UK University (Guardian Guide)',
      type: 'Public',
      popularMajors: ['Data Science', 'Automotive Engineering', 'Global Business', 'Cyber Security'],
      estTuition: '£16,500 - £20,500 / yr',
      tuitionBdt: 'BDT 25 - 31 Lakh / yr',
      ieltsReq: '6.5 (min 5.5 in each band)',
      pteReq: '59+',
      scholarshipAvailable: '£2,000 - £3,000 International Academic Award',
      intakes: ['September', 'January', 'May'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'herts',
      name: 'University of Hertfordshire',
      location: 'Hatfield (20 mins from Central London)',
      ranking: 'Top TEF Gold Rated Teaching',
      type: 'Public',
      popularMajors: ['Computer Science with Placement', 'Biomedical Science', 'Finance', 'Aerospace'],
      estTuition: '£15,000 - £18,500 / yr',
      tuitionBdt: 'BDT 23 - 28 Lakh / yr',
      ieltsReq: '6.0 (or MOI waiver)',
      pteReq: '56+',
      scholarshipAvailable: 'Vice-Chancellor Scholarship up to £4,000',
      intakes: ['September', 'January'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'uwe',
      name: 'UWE Bristol (University of the West of England)',
      location: 'Bristol, England',
      ranking: 'Top 25 UK Institution (Guardian 2024)',
      type: 'Public',
      popularMajors: ['Robotics', 'Business Analytics', 'Architecture', 'Information Technology'],
      estTuition: '£15,500 - £19,000 / yr',
      tuitionBdt: 'BDT 24 - 29 Lakh / yr',
      ieltsReq: '6.5 (min 5.5)',
      pteReq: '58+',
      scholarshipAvailable: 'Up to £4,000 International Student Scholarship',
      intakes: ['September', 'January'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'greenwich',
      name: 'University of Greenwich',
      location: 'Greenwich, Maritime London',
      ranking: 'UNESCO World Heritage Historic Campus',
      type: 'Public',
      popularMajors: ['Big Data & AI', 'Logistics & Supply Chain', 'Pharmaceutical Science', 'Accounting'],
      estTuition: '£16,000 - £19,500 / yr',
      tuitionBdt: 'BDT 24 - 30 Lakh / yr',
      ieltsReq: '6.0 (min 5.5)',
      pteReq: '56+',
      scholarshipAvailable: '£3,000 First-Year Tuition Reduction',
      intakes: ['September', 'January'],
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80'
    }
  ],

  documentChecklist: [
    {
      categoryName: 'Academic Documents',
      description: 'Verified educational certificates and marksheets.',
      required: true,
      documents: [
        {
          name: 'SSC & HSC / O & A Level Certificates & Transcripts',
          description: 'Official academic documents with attestation.',
          attestation: 'Attested by Education Board & MOFA.'
        },
        {
          name: 'Bachelor’s Degree Certificate & Marksheets',
          description: 'Consolidated semester transcript and passing certificate.'
        },
        {
          name: 'Confirmation of Acceptance for Studies (CAS)',
          description: 'Electronic document issued by the university containing your unique CAS reference number.'
        }
      ]
    },
    {
      categoryName: 'English Assessment',
      description: 'English proficiency scores or waiver documents.',
      required: true,
      documents: [
        {
          name: 'IELTS Academic / IELTS for UKVI / PTE / Internal ELLT Test',
          description: 'Minimum 6.0 overall with at least 5.5 in all four sub-skills (Reading, Writing, Listening, Speaking).'
        },
        {
          name: 'Medium of Instruction (MOI) Certificate',
          description: 'Eligible for select UK universities that offer direct IELTS waiver.'
        }
      ]
    },
    {
      categoryName: 'Financial Proof (28-Day Rule)',
      description: 'Strict UKVI compliance for living and tuition fees.',
      required: true,
      documents: [
        {
          name: '28-Day Bank Statement & Bank Solvency Letter',
          description: 'Must show the required fund held continuously for a minimum of 28 consecutive days.',
          tipsForBangladeshi: 'Bank statement must be dated within 31 days of your visa application date. Acceptable banks include City Bank, Prime Bank, Standard Chartered, EBL, BRAC Bank, etc.'
        },
        {
          name: 'Consent Letter & Birth Certificate (If using parents’ bank account)',
          description: 'English translated & notarized Birth Certificate + signed sponsorship letter from parents.'
        }
      ]
    },
    {
      categoryName: 'Medical & Police Clearances',
      description: 'Required health screening for Bangladeshi applicants.',
      required: true,
      documents: [
        {
          name: 'Tuberculosis (TB) Screening Certificate',
          description: 'Mandatory test conducted at the IOM (International Organization for Migration) Clinic in Dhaka.',
          tipsForBangladeshi: 'Book your IOM TB test appointment at least 3-4 weeks prior to CAS release.'
        }
      ]
    }
  ],

  visaInfo: {
    visaName: 'UK Student Visa (Points-Based Immigration System)',
    visaSubclass: 'Student Route',
    embassyInDhaka: 'British High Commission Dhaka (Biometrics and passport handling via VFS Global, Delta Life Tower, Gulshan-2, Dhaka)',
    processingTime: '3 weeks (Standard) / 5 business days (Priority service available)',
    interviewRequired: true,
    steps: [
      {
        stepNumber: 1,
        title: 'Receive Unconditional Offer & Pay Deposit',
        description: 'Meet all academic and English conditions and transfer the initial university tuition deposit.',
        timeline: '2–4 weeks'
      },
      {
        stepNumber: 2,
        title: 'Complete Credibility Pre-CAS Interview',
        description: 'Attend a brief online credibility interview with the university compliance team to assess your course knowledge.',
        timeline: '1 week'
      },
      {
        stepNumber: 3,
        title: 'Fulfill the 28-Day Bank Holding Rule',
        description: 'Ensure the full maintenance funds plus balance tuition are held uninterrupted for 28 consecutive days.',
        timeline: '28 days'
      },
      {
        stepNumber: 4,
        title: 'CAS Issuance & Online Visa Submission',
        description: 'University issues your official CAS. Complete the Gov.uk Student Visa application and pay the Visa + IHS fee.',
        timeline: '1–2 days'
      },
      {
        stepNumber: 5,
        title: 'Attend Biometrics Appointment at VFS Dhaka / Sylhet',
        description: 'Submit fingerprints, photo, and passport at VFS Global. Some applicants may undergo a brief video credibility interview.',
        timeline: '1 day'
      },
      {
        stepNumber: 6,
        title: 'Passport Collection & BRP Vignette',
        description: 'Collect your passport with the 90-day travel vignette foil to enter the UK.',
        timeline: '3 weeks standard / 5 days priority'
      }
    ],
    topInterviewQuestions: [
      {
        question: 'Why did you choose this university in the UK instead of a university in Bangladesh?',
        recommendedAnswerGuide: 'Discuss the specialized UK modular curriculum, 1-year duration, practical industry projects, and international faculty.'
      },
      {
        question: 'Explain the 28-day financial statement and who is funding you.',
        recommendedAnswerGuide: 'State clearly that funds are in your or your parent’s account, mention the bank name, branch, and exact balance held.'
      }
    ]
  },

  faqs: [
    {
      question: 'What is the 28-day bank rule for the UK Student Visa?',
      answer: 'The UKVI requires that the total remaining tuition fee plus 9 months of living maintenance funds (£10,224 outside London or £13,348 inside London) must be held in your personal or parents’ bank account continuously for at least 28 consecutive days without dipping below the required balance for even one day.'
    },
    {
      question: 'Can I study in the UK without IELTS from Bangladesh?',
      answer: 'Yes! Many reputable UK universities accept an official Medium of Instruction (MOI) letter from recognized Bangladeshi universities or offer free online university English proficiency exams (such as the Oxford ELLT test) that replace IELTS completely.'
    },
    {
      question: 'Can I bring my spouse or dependents to the UK?',
      answer: 'Following the January 2024 UK immigration policy update, students on taught Master’s courses can no longer bring dependants. Only students enrolled in postgraduate research programs (PhDs, MPhils, and designated Research Master’s) are permitted to sponsor dependants.'
    },
    {
      question: 'How does the 2-Year Graduate Route Work Visa operate?',
      answer: 'Upon successfully completing your degree in the UK, you can apply inside the UK for the Graduate Route visa. This grants 2 full years of unrestricted work authorization (3 years for PhD graduates) with no minimum salary or job sponsorship requirement.'
    }
  ]
};
