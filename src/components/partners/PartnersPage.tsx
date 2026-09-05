import React, { useState } from 'react';
import {
  Handshake,
  BadgePercent,
  Building2,
  TrendingUp,
  ShieldCheck,
  Award,
  Users,
  Wallet,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Share2,
  Check,
  Send,
  Building,
  GraduationCap,
  Sparkles,
  FileCheck
} from 'lucide-react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { MobileStickyBar } from '../MobileStickyBar';
import {
  PARTNERSHIP_TIERS,
  UNIVERSITY_COMMISSION_SAMPLES,
  PARTNER_BENEFITS,
  PARTNER_FAQS,
  PartnershipTier
} from '../../data/partnersData';

interface PartnersPageProps {
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigateToCountry: (countryId: string) => void;
  onNavigateToAffiliate?: () => void;
  onOpenCounseling: (notes?: string) => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({
  onNavigateHome,
  onNavigateSection,
  onNavigateToCountry,
  onNavigateToAffiliate,
  onOpenCounseling,
  onOpenSearch,
  onOpenLogin
}) => {
  // Calculator state
  const [tuitionUsd, setTuitionUsd] = useState<number>(20000);
  const [universityCommissionPct, setUniversityCommissionPct] = useState<number>(15);
  const [partnerSharePct, setPartnerSharePct] = useState<number>(75);
  const [annualVisas, setAnnualVisas] = useState<number>(10);

  // Registration Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [partnerId, setPartnerId] = useState<string>('');
  const [formData, setFormData] = useState({
    agencyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    district: 'Dhaka',
    businessType: 'Education Consultancy Agency',
    yearsInBusiness: '2-5 years',
    annualStudents: '10-25 students/year',
    preferredDestinations: 'USA, UK & Canada',
    payoutMethod: 'Company Bank Account (BDT/BEFTN)'
  });

  // FAQ Accordion State
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Revenue Calculations
  const grossUniversityCommission = (tuitionUsd * universityCommissionPct) / 100;
  const partnerPerStudentUsd = Math.round((grossUniversityCommission * partnerSharePct) / 100);
  const partnerPerStudentBdt = partnerPerStudentUsd * 120; // 1 USD ≈ 120 BDT
  const totalAnnualPartnerUsd = partnerPerStudentUsd * annualVisas;
  const totalAnnualPartnerBdt = totalAnnualPartnerUsd * 120;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agencyName || !formData.contactPerson || !formData.phone) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const prefix = formData.agencyName.slice(0, 3).toUpperCase().replace(/[^A-Z]/g, '') || 'B2B';
    const id = `BDL-PTR-${prefix}-${randomNum}`;
    setPartnerId(id);
    setFormSubmitted(true);

    const successEl = document.getElementById('b2b-registration-success');
    if (successEl) {
      successEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      
      {/* 1. Top Navbar */}
      <Navbar
        onOpenSearch={onOpenSearch}
        onOpenLogin={onOpenLogin}
        onOpenCounseling={() => onOpenCounseling('B2B Partnership Inquiry')}
        onNavigateSection={onNavigateSection}
        onNavigateAffiliate={onNavigateToAffiliate}
        onNavigatePartners={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Main Content Body */}
      <main className="pt-16 sm:pt-18">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO - Up to 75% University Commission Sharing                 */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white py-16 sm:py-24 border-b border-slate-800">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb back to Main Site */}
            <div className="mb-6">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg backdrop-blur-xs cursor-pointer"
              >
                <span>← Back to Main Portal</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold shadow-xs">
                  <Handshake className="w-4 h-4 text-emerald-400" />
                  <span>Biddaloi B2B Institutional & Agency Partnership</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-extrabold">Upto 75% Revenue Share</span>
                </div>

                {/* Hero Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Share Up To <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">75% University Commission</span> for Every Successful Visa
                </h1>

                {/* Description */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Empower your education consultancy, language academy, or counseling agency with Biddaloi’s network of 1,200+ direct global university contracts. We handle university lodging and visa support while sharing <strong>up to 75% of the university commission</strong> directly with your agency for every visa granted.
                </p>

                {/* Quick Enterprise Pillars */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-xl font-black text-emerald-400">Upto 75%</span>
                    <span className="text-[11px] text-slate-300 font-medium">Commission Share</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-xl font-black text-blue-400">1,200+</span>
                    <span className="text-[11px] text-slate-300 font-medium">Global Universities</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-xl font-black text-purple-400">48–72h</span>
                    <span className="text-[11px] text-slate-300 font-medium">Offer Turnaround</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-xl font-black text-amber-400">98.4%</span>
                    <span className="text-[11px] text-slate-300 font-medium">Visa Success</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                  <a
                    href="#partner-registration"
                    className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all text-center flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Apply for B2B Partnership</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#b2b-calculator"
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-emerald-400" />
                    <span>Calculate 75% Commission Share</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Live Share Model Card */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">Agency Revenue Share</span>
                      <span className="text-3xl sm:text-4xl font-black text-white block mt-1">
                        Up To <span className="text-emerald-400">75%</span>
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <BadgePercent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Typical Student Yield */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-2">
                    <span className="text-xs text-slate-400 block font-medium">Average Partner Earning Per Student Visa:</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300">
                        $1,500 – $3,500+ <span className="text-xs font-semibold text-slate-300">USD</span>
                      </span>
                      <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-lg">
                        ৳1.8L – ৳4.2L BDT
                      </span>
                    </div>
                  </div>

                  {/* What Biddaloi Provides */}
                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Tier-1 Contracts:</strong> Access top institutions without individual contracts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Retain Your Brand:</strong> Your student remains your client</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Visa Vetting Desk:</strong> SOP, funding, and embassy mock tests included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Direct Bank Settlement:</strong> Fast BDT or USD wire payments</span>
                    </div>
                  </div>

                  {/* B2B Partnership Helpline */}
                  <div className="pt-3 border-t border-slate-700 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      <span>B2B Partnerships Lead:</span>
                      <strong className="block text-slate-200">+880 1722-200432</strong>
                    </div>
                    <a
                      href="https://wa.me/8801722200432?text=Hello%20Biddaloi%2C%20our%20agency%20wants%20to%20apply%20for%20a%20B2B%20partnership%20with%20upto%2075%25%20commission%20share."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>B2B WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 2: INTERACTIVE B2B COMMISSION REVENUE SHARE CALCULATOR             */}
        {/* ========================================================================= */}
        <section id="b2b-calculator" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>B2B Commission Revenue Share Calculator</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Simulate Your Agency's Earnings at Up to 75% Share
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Adjust tuition fees, standard university commission rates, and partnership tiers to view exact net agency payouts.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Controls (7 cols) */}
              <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
                
                {/* 1. Tuition Fee Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      1. Average 1st Year University Tuition (USD):
                    </label>
                    <span className="text-sm font-black px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                      ${tuitionUsd.toLocaleString()} USD
                    </span>
                  </div>
                  <input
                    type="range"
                    min="8000"
                    max="45000"
                    step="1000"
                    value={tuitionUsd}
                    onChange={(e) => setTuitionUsd(parseInt(e.target.value, 10))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                    <span>$8,000 (Malaysia/Europe)</span>
                    <span>$24,000 (USA/UK)</span>
                    <span>$45,000 (Top Tier)</span>
                  </div>
                </div>

                {/* 2. University Commission Rate */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    2. Standard University Commission Paid by Institution:
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {[12, 14, 15, 18].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setUniversityCommissionPct(pct)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                          universityCommissionPct === pct
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        <span>{pct}%</span>
                        <span className="block text-[10px] opacity-80 font-normal">
                          {pct === 15 ? 'Standard' : pct === 18 ? 'High Yield' : 'Base'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Partner Revenue Share Percentage Tier */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    3. Biddaloi Partner Revenue Share Percentage:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { pct: 55, label: 'Silver (1-5)' },
                      { pct: 65, label: 'Gold (6-15)' },
                      { pct: 70, label: 'Platinum (16-30)' },
                      { pct: 75, label: 'Diamond (75%)', star: true }
                    ].map((item) => (
                      <button
                        key={item.pct}
                        type="button"
                        onClick={() => setPartnerSharePct(item.pct)}
                        className={`p-3 rounded-xl text-center border transition-all cursor-pointer flex flex-col justify-between ${
                          partnerSharePct === item.pct
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                        }`}
                      >
                        <span className="text-base font-black">{item.pct}%</span>
                        <span className={`text-[10px] font-semibold mt-0.5 ${partnerSharePct === item.pct ? 'text-emerald-100' : 'text-slate-500'}`}>
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Number of Student Visas / Year */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      4. Projected Successful Student Visas / Year:
                    </label>
                    <span className="text-sm font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {annualVisas} {annualVisas === 1 ? 'Visa' : 'Visas'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={annualVisas}
                    onChange={(e) => setAnnualVisas(parseInt(e.target.value, 10))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                    <span>1 student</span>
                    <span>15 students</span>
                    <span>30 students</span>
                    <span>50+ students</span>
                  </div>
                </div>

                {/* Breakdown Summary Box */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Gross University Commission (per student):</span>
                    <strong className="text-slate-900 font-bold">${grossUniversityCommission.toLocaleString()} USD</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Selected Partner Share Rate:</span>
                    <strong className="text-emerald-600 font-extrabold">{partnerSharePct}% of Gross Commission</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Your Net Agency Payout (per visa):</span>
                    <strong className="text-blue-700 font-extrabold">${partnerPerStudentUsd.toLocaleString()} USD (~৳{partnerPerStudentBdt.toLocaleString()} BDT)</strong>
                  </div>
                </div>

              </div>

              {/* Right Summary Card (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">
                      Total Annual Agency Revenue ({annualVisas} Visas)
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white">
                        ${totalAnnualPartnerUsd.toLocaleString()}
                      </span>
                      <span className="text-lg font-bold text-emerald-400">USD</span>
                    </div>
                  </div>

                  {/* BDT Calculation */}
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                    <span className="text-xs text-slate-300 block font-medium">Estimated Revenue in BDT</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 mt-1">
                      ৳{totalAnnualPartnerBdt.toLocaleString()} <span className="text-xs font-semibold text-slate-300">BDT</span>
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-1">
                      *Estimated at ~৳120/$ exchange rate. Paid upon student enrollment.
                    </span>
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Net Earning Per Visa:</span>
                      <strong className="text-emerald-400 font-bold">${partnerPerStudentUsd.toLocaleString()} USD</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Partner Revenue Share:</span>
                      <strong className="text-white font-bold">{partnerSharePct}%</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">File Processing Fee:</span>
                      <strong className="text-emerald-400 font-bold">৳0 (Free for Partners)</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <a
                    href="#partner-registration"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs text-center block shadow-md transition-all cursor-pointer active:scale-98"
                  >
                    Lock In Your Up to 75% Commission Share
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 3: THE 4 PARTNERSHIP TIERS (55% TO 75%)                           */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Structured Tier Progression</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Partnership Tiers & Revenue Shares
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                From growing independent advisors to established agencies, our tiered model scales up to <strong>75% commission sharing</strong>.
              </p>
            </div>

            {/* 4 Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PARTNERSHIP_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`bg-white rounded-3xl border p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all relative ${
                    tier.isPopular ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-200'
                  }`}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      Most Popular Tier
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {tier.badge}
                      </span>
                      <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800">
                        {tier.visaRange}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-1">
                      {tier.name}
                    </h3>

                    <div className="my-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      <span className="text-3xl sm:text-4xl font-black text-emerald-600">
                        {tier.sharePercentage}%
                      </span>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-1">
                        Commission Share
                      </span>
                    </div>

                    {/* Perks */}
                    <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                      {tier.perks.map((perk, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <a
                      href="#partner-registration"
                      className={`w-full py-2.5 rounded-xl text-xs font-bold text-center block transition-all ${
                        tier.isPopular
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      Join as {tier.name}
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 4: COUNTRY REVENUE SHARE SAMPLES TABLE                            */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
                <BadgePercent className="w-4 h-4 text-emerald-600" />
                <span>Representative Earnings Matrix</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Sample 75% Payout Breakdown by Destination
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Real-world examples of agency commission sharing for standard undergraduate and master's enrollments.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 border-b border-slate-200 text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                      <th className="py-4 px-6">Destination</th>
                      <th className="py-4 px-6">Avg Tuition (1st Yr)</th>
                      <th className="py-4 px-6">Gross Uni Commission</th>
                      <th className="py-4 px-6">Your 75% Share (USD)</th>
                      <th className="py-4 px-6">Your 75% Share (BDT)</th>
                      <th className="py-4 px-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                    {UNIVERSITY_COMMISSION_SAMPLES.map((sample) => (
                      <tr key={sample.country} className="hover:bg-emerald-50/30 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                          <span className="text-xl">{sample.flag}</span>
                          <span>{sample.country}</span>
                        </td>
                        <td className="py-4 px-6 text-slate-600 font-semibold">
                          ${sample.avgTuitionUsd.toLocaleString()} USD
                        </td>
                        <td className="py-4 px-6 text-slate-600 font-semibold">
                          ${sample.avgGrossCommissionUsd.toLocaleString()} USD ({sample.commissionRateLabel})
                        </td>
                        <td className="py-4 px-6 font-extrabold text-emerald-700">
                          ${sample.partnerShare75Usd.toLocaleString()} USD
                        </td>
                        <td className="py-4 px-6 font-bold text-blue-700">
                          {sample.partnerShare75Bdt}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <a
                            href="#partner-registration"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-800 font-bold text-[11px] transition-colors"
                          >
                            <span>Partner</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 5: HOW PARTNERSHIP WORKS (4 STREAMLINED STEPS)                    */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
                <FileCheck className="w-4 h-4 text-blue-600" />
                <span>Simple Operational Flow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                How B2B Partnership Works in 4 Steps
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Zero friction, zero complicated paperwork. Start lodging student files within 24 hours of onboarding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Register Your Agency',
                  desc: 'Complete our short online onboarding form. Receive your official B2B Partner ID and access to university portal guides.',
                  icon: Building2
                },
                {
                  step: '02',
                  title: 'Lodge Student Applications',
                  desc: 'Submit student transcripts and preferences to our Dhaka processing desk. We audit files and secure admissions in 48–72 hours.',
                  icon: FileCheck
                },
                {
                  step: '03',
                  title: 'Visa Vetting & Approval',
                  desc: 'Our certified counselors guide your team on embassy document preparation, financial verification, and mock interviews.',
                  icon: ShieldCheck
                },
                {
                  step: '04',
                  title: '75% Commission Disbursal',
                  desc: 'Upon the student’s visa grant and semester enrollment, receive up to 75% of the university commission paid directly into your bank.',
                  icon: Wallet
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-200">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 6: ENTERPRISE BENEFITS GRID                                       */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
              <div className="max-w-2xl mb-8">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 block mb-1">
                  Why Partner with Biddaloi?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Built to Supercharge Bangladeshi Education Agencies
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PARTNER_BENEFITS.map((benefit, bIdx) => (
                  <div key={bIdx} className="bg-white/5 rounded-2xl border border-white/10 p-5 space-y-2">
                    <div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{benefit.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 7: B2B PARTNER APPLICATION FORM                                   */}
        {/* ========================================================================= */}
        <section id="partner-registration" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 scroll-mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
                <Handshake className="w-4 h-4 text-emerald-600" />
                <span>B2B Institutional Onboarding</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Apply for Biddaloi B2B Agency Partnership
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Join our partner network today. Submit your agency credentials to activate your <strong>up to 75% commission sharing agreement</strong>.
              </p>
            </div>

            {/* Submission Success Box */}
            {formSubmitted ? (
              <div id="b2b-registration-success" className="bg-white rounded-3xl border-2 border-emerald-500 p-8 sm:p-10 shadow-xl space-y-6 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                    Application Received & Verified
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Welcome, {formData.agencyName}!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
                    Your agency partnership record has been created. A senior B2B account manager from our Dhaka office will review your agreement within 24 hours.
                  </p>
                </div>

                {/* Partner ID Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-md mx-auto space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Your B2B Partner Identification
                  </span>
                  <span className="text-2xl font-black text-blue-700 tracking-wider font-mono block">
                    {partnerId}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md inline-block">
                    Commission Agreement: Eligible for up to 75% Share
                  </span>
                </div>

                {/* Next Steps */}
                <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-200/60 max-w-lg mx-auto text-left space-y-2 text-xs text-slate-700">
                  <h4 className="font-extrabold text-blue-900">Immediate Next Steps:</h4>
                  <p>1. Our B2B partnership officer will reach out via WhatsApp/Call to share the master university portal login.</p>
                  <p>2. You can begin forwarding student profiles for priority offer letter processing.</p>
                  <p>3. Complete commission statements will be reconciled monthly to your company bank account.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/8801722200432?text=Hello%20Biddaloi%20Partnership%20Team%2C%20our%20agency%20${encodeURIComponent(formData.agencyName)}%20has%20registered%20for%20B2B%20Partnership.%20Partner%20ID%3A%20${partnerId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect with B2B Relationship Head on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        agencyName: '',
                        contactPerson: '',
                        phone: '',
                        email: '',
                        district: 'Dhaka',
                        businessType: 'Education Consultancy Agency',
                        yearsInBusiness: '2-5 years',
                        annualStudents: '10-25 students/year',
                        preferredDestinations: 'USA, UK & Canada',
                        payoutMethod: 'Company Bank Account (BDT/BEFTN)'
                      });
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline cursor-pointer"
                  >
                    Register another branch / agency
                  </button>
                </div>

              </div>
            ) : (
              /* Application Form */
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Agency Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Agency / Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Global Education Ltd"
                        value={formData.agencyName}
                        onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      />
                    </div>

                    {/* Contact Person Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary Contact Person <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mohammad Rafiq (Director)"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* WhatsApp / Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Official WhatsApp / Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 17XX-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Agency Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="info@youragency.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Office Location / District */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Office Location / District
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dhanmondi, Dhaka or GEC, Chittagong"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      />
                    </div>

                    {/* Business Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Type of Organization
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      >
                        <option value="Education Consultancy Agency">Education Consultancy Agency</option>
                        <option value="IELTS / PTE / English Language Academy">IELTS / PTE / English Language Academy</option>
                        <option value="Regional Sub-Agent / Freelance Counselor">Regional Sub-Agent / Freelance Counselor</option>
                        <option value="Travel & Visa Consultancy">Travel & Visa Consultancy</option>
                        <option value="School / College / University Career Center">School / College / University Career Center</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Annual Student Volume */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Expected Annual Student Volume
                      </label>
                      <select
                        value={formData.annualStudents}
                        onChange={(e) => setFormData({ ...formData, annualStudents: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      >
                        <option value="1-5 students/year">1-5 students/year (Silver Tier - 55%)</option>
                        <option value="6-15 students/year">6-15 students/year (Gold Tier - 65%)</option>
                        <option value="16-30 students/year">16-30 students/year (Platinum Tier - 70%)</option>
                        <option value="31+ students/year">31+ students/year (Diamond Tier - 75% Share)</option>
                      </select>
                    </div>

                    {/* Payout Channel Preference */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Payout Channel
                      </label>
                      <select
                        value={formData.payoutMethod}
                        onChange={(e) => setFormData({ ...formData, payoutMethod: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      >
                        <option value="Company Bank Account (BDT/BEFTN/RTGS)">Company Bank Account (BDT/BEFTN/RTGS)</option>
                        <option value="Direct USD International Bank Wire">Direct USD International Bank Wire</option>
                        <option value="Wise Corporate Account">Wise Corporate Account</option>
                        <option value="bKash / Nagad Corporate Merchant">bKash / Nagad Corporate Merchant</option>
                      </select>
                    </div>
                  </div>

                  {/* Trust note */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 text-[11px] leading-relaxed">
                    By submitting this application, you express interest in partnering with Biddaloi under our revenue-sharing framework. There are no registration fees or exclusivity mandates.
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-99"
                  >
                    <span>Submit Agency Partnership Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </form>
              </div>
            )}

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 8: PARTNERSHIP FAQS                                               */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>B2B Partnership FAQs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions for Partners
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Everything agency directors and counselors need to know about our up to 75% commission sharing program.
              </p>
            </div>

            <div className="space-y-4">
              {PARTNER_FAQS.map((faq, fIdx) => {
                const isExpanded = expandedFaqIndex === fIdx;

                return (
                  <div
                    key={fIdx}
                    className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedFaqIndex(isExpanded ? null : fIdx)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:text-emerald-700 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 9: DIRECT B2B HELPDESK & CONTACT                                  */}
        {/* ========================================================================= */}
        <section className="py-14 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Dhaka Head Office B2B Partnerships Desk</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Speak Directly with our Head of Global Partnerships
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                  Visit our office at Pallabi, Mirpur 12, Dhaka or connect via WhatsApp to discuss agency contracts, university portfolio representation, and customized commission tiers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <a
                  href="tel:+8801722200432"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call +880 1722-200432</span>
                </a>

                <a
                  href="https://wa.me/8801722200432?text=Hello%20Biddaloi%2C%20I%20am%20calling%20regarding%20an%20Agency%20B2B%20Partnership."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp B2B Lead</span>
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer
        onOpenCounseling={() => onOpenCounseling('Partners Page Footer Inquiries')}
        onNavigateSection={onNavigateSection}
        onFilterDestination={onNavigateToCountry}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateToAffiliate={onNavigateToAffiliate}
        onNavigateToPartners={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar
        onOpenCounseling={() => onOpenCounseling('Partners Mobile Action')}
        onOpenSearch={onOpenSearch}
      />

    </div>
  );
};
