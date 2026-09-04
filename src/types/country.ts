export interface UniversityItem {
  id: string;
  name: string;
  location: string;
  ranking: string;
  type: 'Public' | 'Private' | 'Research';
  popularMajors: string[];
  estTuition: string;
  tuitionBdt: string;
  ieltsReq: string;
  pteReq: string;
  scholarshipAvailable: string;
  intakes: string[];
  image: string;
}

export interface WhySelectPoint {
  title: string;
  description: string;
  highlight?: string;
  iconName?: string;
}

export interface DocumentCategory {
  categoryName: string;
  description: string;
  required: boolean;
  documents: {
    name: string;
    description: string;
    attestation?: string;
    tipsForBangladeshi?: string;
  }[];
}

export interface VisaStep {
  stepNumber: number;
  title: string;
  description: string;
  timeline: string;
  bdSpecificNote?: string;
}

export interface CountryFaq {
  question: string;
  answer: string;
  category?: string;
}

export interface CountryPageData {
  id: string; // e.g. 'usa'
  slug: string; // e.g. 'study-in-usa'
  name: string;
  flag: string;
  flagImage: string;
  heroImage: string;
  tagline: string;
  overview: string;
  
  // Section 1: Hero & Registration info
  heroStats: {
    visaSuccessRate: string;
    postStudyWork: string;
    scholarshipRange: string;
    nextMajorIntake: string;
  };

  // Section 2: Country details (Tuition, living, other expense, capital)
  capitalDetails: {
    capitalCity: string;
    currency: string;
    currencySymbol: string;
    exchangeRateToBdt: string;
    mainLanguage: string;
    timeZoneFromBd: string;
    majorStudentCities: string[];
  };

  expenses: {
    tuition: {
      bachelorPerYear: string;
      bachelorBdtPerYear: string;
      masterPerYear: string;
      masterBdtPerYear: string;
      phdCoverage: string;
      notes: string;
    };
    living: {
      monthlyTotal: string;
      monthlyBdt: string;
      yearlyTotal: string;
      yearlyBdt: string;
      breakdown: {
        rent: string;
        food: string;
        transport: string;
        utilitiesAndWifi: string;
        personal: string;
      };
    };
    otherExpenses: {
      visaFee: string;
      airfareFromDhaka: string;
      healthInsurance: string;
      testsAndSevis: string;
      totalInitialBudget: string;
    };
    capitalAndBankSolvency: {
      amountRequiredInBank: string;
      holdingPeriod: string;
      acceptableSponsors: string[];
      financialProofTips: string;
    };
  };

  // Section 3: Why select this country
  whySelect: WhySelectPoint[];
  partTimeWorkRules: {
    hoursAllowedPerWeek: string;
    minWageHourly: string;
    estMonthlyEarnings: string;
    workPermitAfterStudy: string;
  };

  // Section 4: University List
  universities: UniversityItem[];

  // Section 5: Documents for Bangladeshi Students
  documentChecklist: DocumentCategory[];

  // Section 6: Student Visa Requirements
  visaInfo: {
    visaName: string;
    visaSubclass?: string;
    embassyInDhaka: string;
    processingTime: string;
    interviewRequired: boolean;
    steps: VisaStep[];
    topInterviewQuestions: {
      question: string;
      recommendedAnswerGuide: string;
    }[];
  };

  // Section 7: FAQs
  faqs: CountryFaq[];
}
