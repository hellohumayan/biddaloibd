import { Scholarship } from '../types';

export const scholarshipsData: Scholarship[] = [
  {
    id: 'sch-1',
    name: 'Presidential International Merit Scholarship',
    university: 'University of Texas at Arlington',
    country: 'USA',
    flag: '🇺🇸',
    level: "Bachelor's & Master's",
    amount: 'Up to $10,000 / Year',
    coverage: 'Tuition Waiver + In-state Tuition Qualification',
    eligibility: 'Bangladeshi applicants with CGPA 3.4+ or SAT 1280+ / GRE 310+',
    deadline: 'May 1, 2025',
    badge: 'High Value',
    destinationId: 'usa'
  },
  {
    id: 'sch-2',
    name: 'Commonwealth Shared Scholarship',
    university: 'Partner UK Universities',
    country: 'United Kingdom',
    flag: '🇬🇧',
    level: "Master's (1 Year)",
    amount: '100% Full Ride + Living Stipend',
    coverage: 'Tuition, Flight Tickets, Monthly Allowance (£1,300/mo)',
    eligibility: 'Citizens of Bangladesh with 1st Class Honours degree in development/STEM subjects',
    deadline: 'December 2025',
    badge: 'Full Ride',
    destinationId: 'uk'
  },
  {
    id: 'sch-3',
    name: 'Ontario Graduate Scholarship (OGS)',
    university: 'University of Windsor / York University',
    country: 'Canada',
    flag: '🇨🇦',
    level: "Master's & PhD",
    amount: 'CAD $15,000 Total Award',
    coverage: 'Direct research and tuition grant',
    eligibility: 'Demonstrated academic excellence in graduate research studies',
    deadline: 'June 30, 2025',
    badge: 'Research Grant',
    destinationId: 'canada'
  },
  {
    id: 'sch-4',
    name: 'Vice-Chancellor International Excellence Award',
    university: 'Deakin University',
    country: 'Australia',
    flag: '🇦🇺',
    level: "Bachelor's & Master's",
    amount: 'Up to 50% Tuition Fee Reduction',
    coverage: 'Annual tuition deduction across degree duration',
    eligibility: 'Minimum 85% overall academic score / GPA 3.8+ equivalent',
    deadline: 'Rolling Intake Assessment',
    badge: 'Merit Excellence',
    destinationId: 'australia'
  },
  {
    id: 'sch-5',
    name: 'Taylor’s World Class Scholarship (TWCS)',
    university: "Taylor's University",
    country: 'Malaysia',
    flag: '🇲🇾',
    level: "Undergraduate Degrees",
    amount: '100% Full Tuition Waiver',
    coverage: 'Full tuition + guaranteed internship placement',
    eligibility: 'HSC GPA 5.0 or 3 A’s in A-Levels + extracurricular leadership',
    deadline: 'July 15, 2025',
    badge: 'Full Tuition',
    destinationId: 'malaysia'
  },
  {
    id: 'sch-6',
    name: 'Study in India (SII) South Asia Grant',
    university: 'Sharda & Chandigarh University',
    country: 'India',
    flag: '🇮🇳',
    level: "B.Tech & BBA Programs",
    amount: 'Up to 50% - 100% Fee Waiver',
    coverage: 'Tuition fee reduction under Ministry of Education, India',
    eligibility: 'Bangladeshi passport holders with HSC minimum 65%',
    deadline: 'August 1, 2025',
    badge: 'Government Supported',
    destinationId: 'india'
  }
];
