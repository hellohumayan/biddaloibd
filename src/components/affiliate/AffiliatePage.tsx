import React, { useState, useMemo } from 'react';
import { 
  BadgeDollarSign, 
  Share2, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Users, 
  Award, 
  Wallet, 
  TrendingUp, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Phone, 
  Copy, 
  Check, 
  Send,
  Building2,
  Calendar,
  DollarSign,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Clock,
  ArrowUpRight,
  Globe
} from 'lucide-react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { MobileStickyBar } from '../MobileStickyBar';
import { 
  AFFILIATE_TIERS, 
  AFFILIATE_STEPS, 
  AFFILIATE_FAQS, 
  AFFILIATE_BENEFITS, 
  CommissionTier 
} from '../../data/affiliateData';

interface AffiliatePageProps {
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigateToCountry: (countryId: string) => void;
  onNavigateToPartners?: () => void;
  onOpenCounseling: (notes?: string) => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
}

export const AffiliatePage: React.FC<AffiliatePageProps> = ({
  onNavigateHome,
  onNavigateSection,
  onNavigateToCountry,
  onNavigateToPartners,
  onOpenCounseling,
  onOpenSearch,
  onOpenLogin
}) => {
  // Calculator state
  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number>(0);
  const [referredCount, setReferredCount] = useState<number>(3);

  // Registration Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [generatedCode, setGeneratedCode] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Dhaka',
    profession: 'Current University Student',
    destinationFocus: 'USA & Canada',
    payoutMethod: 'bKash / Nagad',
    monthlyStudents: '2-4 students'
  });

  // FAQ Accordion State
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Calculate earnings
  const currentTier = AFFILIATE_TIERS[selectedCountryIndex];
  const avgUsdPerStudent = Math.round((currentTier.commissionUsdMin + currentTier.commissionUsdMax) / 2);
  const totalUsdEarnings = avgUsdPerStudent * referredCount;
  const totalBdtEarnings = totalUsdEarnings * 120; // approximate conversion 1 USD = 120 BDT

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    
    // Generate a unique affiliate code
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const cleanName = formData.fullName.split(' ')[0].toUpperCase().replace(/[^A-Z]/g, '') || 'BDL';
    const code = `${cleanName}-${randomSuffix}`;
    setGeneratedCode(code);
    setFormSubmitted(true);

    // Scroll to success card smoothly
    const successCard = document.getElementById('registration-success');
    if (successCard) {
      successCard.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyLink = () => {
    const link = `https://biddaloi.com/ref/${generatedCode}`;
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      
      {/* 1. Global Navigation Bar */}
      <Navbar
        onOpenSearch={onOpenSearch}
        onOpenLogin={onOpenLogin}
        onOpenCounseling={() => onOpenCounseling('Affiliate Partner Inquiries')}
        onNavigateSection={onNavigateSection}
        onNavigatePartners={onNavigateToPartners}
      />

      {/* Main Affiliate Content */}
      <main className="pt-16 sm:pt-18">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO BANNER - High impact, transparent commission explanation */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-24 border-b border-slate-800">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb back to Home */}
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
                
                {/* Program Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold shadow-xs backdrop-blur-sm">
                  <BadgeDollarSign className="w-4 h-4 text-emerald-400" />
                  <span>Biddaloi Global Referral & Affiliate Network</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 font-semibold">$100 – $1,000 USD / Visa</span>
                </div>

                {/* Hero Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">$100 to $1,000 USD</span> for Every Student Visa
                </h1>

                {/* Plain-English Commission Breakdown */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Recommend Biddaloi to aspiring students in Bangladesh. When your referred student opens their file and is successfully granted their study visa, you receive your guaranteed high-yield commission paid directly in USD or BDT.
                </p>

                {/* Quick 3-Step Pill Bar */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The 3-Step Milestone Workflow</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                        1
                      </div>
                      <span className="font-semibold text-slate-200 leading-tight">Recommend Biddaloi</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                        2
                      </div>
                      <span className="font-semibold text-slate-200 leading-tight">Student Opens File</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">
                        3
                      </div>
                      <span className="font-bold text-emerald-300 leading-tight">Visa Granted: Get Commission!</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href="#affiliate-form"
                    className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all text-center flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Register as Affiliate Partner</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#commission-calculator"
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-blue-400" />
                    <span>Calculate Your Earnings</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Dynamic Commission Card */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl shadow-blue-950/50 space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">Commission Per Student</span>
                      <span className="text-3xl sm:text-4xl font-black text-white block mt-1">
                        $100 – $1,000 <span className="text-sm font-semibold text-emerald-400">USD</span>
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <BadgeDollarSign className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Equivalent in BDT */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">BDT Equivalent</span>
                      <span className="text-lg sm:text-xl font-extrabold text-emerald-300">
                        ৳12,000 to ৳1,20,000 BDT
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2 py-1 rounded-md">
                      Rate: ~৳120/$
                    </span>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>98.4% Visa Success:</strong> High conversion ensures your earnings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Fast Disbursal:</strong> Paid within 48–72 hours of visa grant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>All 8 Major Destinations:</strong> USA, Canada, UK, Australia & more</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Local & International Payout:</strong> bKash, Nagad, Bank Wire, Wise</span>
                    </div>
                  </div>

                  {/* WhatsApp Support Callout */}
                  <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      <span>Affiliate Desk in Mirpur, Dhaka:</span>
                      <strong className="block text-slate-200">+880 1722-200432</strong>
                    </div>
                    <a
                      href="https://wa.me/8801722200432?text=Hello%20Biddaloi%20Team%2C%20I%20want%20to%20register%20as%20an%20Affiliate%20Partner."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 2: HOW IT WORKS - The 3 Core Milestones in detail                  */}
        {/* ========================================================================= */}
        <section id="how-it-works" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Transparent Referral Process</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                How You Earn with Biddaloi in 3 Simple Steps
              </h2>
              <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
                No complicated hurdles or hidden clauses. Here is how our affiliate partnership works from student recommendation to commission payout:
              </p>
            </div>

            {/* 3 Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {AFFILIATE_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between group"
                >
                  {/* Step Number Bubble */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800">
                        {step.badge}
                      </span>
                      <span className="text-3xl font-black text-slate-200 group-hover:text-blue-500 transition-colors">
                        {step.stepNumber}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                    {step.bulletPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

            {/* Flow Banner Summary */}
            <div className="mt-12 bg-white rounded-2xl border border-blue-200 p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <BadgeDollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">
                    Guaranteed Payout Guarantee
                  </h4>
                  <p className="text-xs text-slate-600">
                    Every file opened through your unique link is digitally linked to your account. When the visa is approved, payment is credited within 72 hours.
                  </p>
                </div>
              </div>

              <a
                href="#affiliate-form"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all whitespace-nowrap cursor-pointer"
              >
                Join the Network Now
              </a>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 3: COMMISSION CALCULATOR                                          */}
        {/* ========================================================================= */}
        <section id="commission-calculator" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>Interactive Earnings Estimator</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Calculate Your Commission Potential
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Select your preferred study destination and projected student referrals per month to see your estimated earnings in both USD and BDT.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Calculator Controls (7 Cols) */}
              <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
                
                {/* 1. Destination Tier Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    1. Select Study Abroad Destination:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {AFFILIATE_TIERS.map((tier, idx) => (
                      <button
                        key={tier.countryCode}
                        onClick={() => setSelectedCountryIndex(idx)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                          selectedCountryIndex === idx
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="text-xl mb-1">{tier.flag}</div>
                        <div className="text-xs font-bold leading-tight line-clamp-1">{tier.destination}</div>
                        <div className={`text-[11px] font-semibold mt-1 ${selectedCountryIndex === idx ? 'text-blue-100' : 'text-emerald-600'}`}>
                          {tier.commissionUsd}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Number of Students Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      2. Estimated Successful Students / Month:
                    </label>
                    <span className="text-sm font-black px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                      {referredCount} {referredCount === 1 ? 'Student' : 'Students'}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={referredCount}
                    onChange={(e) => setReferredCount(parseInt(e.target.value, 10))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />

                  <div className="flex justify-between text-[11px] text-slate-400 font-bold mt-2">
                    <span>1 student</span>
                    <span>5 students</span>
                    <span>10 students</span>
                    <span>15 students</span>
                  </div>
                </div>

                {/* Selected Destination Details Info Box */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Selected Destination:</span>
                    <strong className="text-slate-900 font-bold">{currentTier.destination}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Commission Rate Range:</span>
                    <strong className="text-emerald-600 font-extrabold">{currentTier.commissionUsd}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Typical Visa Processing Time:</span>
                    <span className="text-slate-700">{currentTier.visaTurnaround}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Visa Success Benchmark:</span>
                    <span className="text-blue-600 font-bold">{currentTier.avgVisaRate}</span>
                  </div>
                </div>

              </div>

              {/* Calculator Summary Card (5 Cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">
                      Estimated Monthly Earning
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white">
                        ${totalUsdEarnings.toLocaleString()}
                      </span>
                      <span className="text-lg font-bold text-emerald-400">USD</span>
                    </div>
                  </div>

                  {/* BDT Calculation */}
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                    <span className="text-xs text-slate-300 block font-medium">Equivalent in Bangladeshi Taka</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 mt-1">
                      ৳{totalBdtEarnings.toLocaleString()} <span className="text-xs font-semibold text-slate-300">BDT</span>
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-1">
                      *Calculated at approx rate 1 USD = 120 BDT
                    </span>
                  </div>

                  {/* Annual Projection */}
                  <div className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Annual Projection (12 mos):</span>
                      <strong className="text-white font-bold">${(totalUsdEarnings * 12).toLocaleString()} USD</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Annual in BDT:</span>
                      <strong className="text-emerald-400 font-bold">৳{(totalBdtEarnings * 12).toLocaleString()} BDT</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <a
                    href="#affiliate-form"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs text-center block shadow-md transition-all cursor-pointer active:scale-98"
                  >
                    Start Referring & Earn Commission
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 4: DESTINATION COMMISSION TIERS TABLE                             */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Transparent Reward Matrix</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Commission Breakdown by Country
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                All payouts are 100% transparent with zero deductions. You get paid for every student who receives a visa.
              </p>
            </div>

            {/* Responsive Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 border-b border-slate-200 text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                      <th className="py-4 px-6">Destination</th>
                      <th className="py-4 px-6">Commission (USD)</th>
                      <th className="py-4 px-6">Approx BDT</th>
                      <th className="py-4 px-6">Popular Intakes</th>
                      <th className="py-4 px-6">Visa Turnaround</th>
                      <th className="py-4 px-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                    {AFFILIATE_TIERS.map((tier) => (
                      <tr key={tier.countryCode} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                          <span className="text-xl">{tier.flag}</span>
                          <span>{tier.destination}</span>
                          {tier.highlight && (
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                              Top Tier
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-6 font-extrabold text-blue-700">
                          {tier.commissionUsd}
                        </td>
                        <td className="py-4 px-6 font-semibold text-emerald-700">
                          {tier.commissionBdt}
                        </td>
                        <td className="py-4 px-6 text-slate-500">
                          {tier.popularIntakes}
                        </td>
                        <td className="py-4 px-6 text-slate-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{tier.visaTurnaround}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <a
                            href="#affiliate-form"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-bold text-[11px] transition-colors"
                          >
                            <span>Refer Now</span>
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
        {/* SECTION 5: WHO CAN BECOME AN AFFILIATE & BENEFITS                         */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Who Can Join?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Designed for Students, Teachers & Edu Leaders
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Whether you are a current student in Dhaka, an international student abroad, or an IELTS mentor, our program empowers you to earn reliably.
              </p>
            </div>

            {/* Profile Archetypes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: 'University Students',
                  subtitle: 'Campus Brand Ambassadors',
                  desc: 'Help friends and batchmates achieve their study abroad dream while earning substantial commission in BDT.',
                  icon: GraduationCap,
                  color: 'bg-blue-50 text-blue-600 border-blue-200'
                },
                {
                  title: 'Alumni Abroad',
                  subtitle: 'Students living overseas',
                  desc: 'Living in USA, UK, Canada, or Australia? Guide juniors from Bangladesh to your country and earn in USD.',
                  icon: Globe,
                  color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
                },
                {
                  title: 'Teachers & Trainers',
                  subtitle: 'IELTS / PTE / English Mentors',
                  desc: 'Recommend your test-preparation students to our certified admission desk with full confidence.',
                  icon: Briefcase,
                  color: 'bg-purple-50 text-purple-600 border-purple-200'
                },
                {
                  title: 'Creators & Community',
                  subtitle: 'Influencers & Agencies',
                  desc: 'Leverage your social following or existing travel agency clientele with verified institutional partnerships.',
                  icon: Share2,
                  color: 'bg-amber-50 text-amber-600 border-amber-200'
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50/70 rounded-3xl border border-slate-200/80 p-6 space-y-3 shadow-2xs hover:shadow-md transition-all">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <div className="text-xs font-semibold text-blue-600">{item.subtitle}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
              <div className="max-w-2xl mb-8">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 block mb-1">
                  Why Partner with Biddaloi?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Built to Empower Affiliates with Trust, Speed, and Support
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {AFFILIATE_BENEFITS.map((benefit, bIdx) => (
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
        {/* SECTION 6: INTERACTIVE AFFILIATE REGISTRATION FORM                        */}
        {/* ========================================================================= */}
        <section id="affiliate-form" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 scroll-mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
                <Send className="w-4 h-4 text-emerald-600" />
                <span>Instant Affiliate Registration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Join the Biddaloi Affiliate Partner Program
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Sign up in under 60 seconds. Get your personal referral code and start earning $100 to $1,000 USD per visa.
              </p>
            </div>

            {/* Registration Success Card */}
            {formSubmitted ? (
              <div id="registration-success" className="bg-white rounded-3xl border-2 border-emerald-500 p-8 sm:p-10 shadow-xl space-y-6 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                    Registration Approved
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Welcome to the Biddaloi Affiliate Family!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
                    Your affiliate account has been provisioned. Below is your unique referral code and referral link to share with students.
                  </p>
                </div>

                {/* Generated Referral Code Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-md mx-auto space-y-4">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Your Unique Referral Code
                    </span>
                    <span className="text-2xl font-black text-blue-700 tracking-wider font-mono block mt-1">
                      {generatedCode}
                    </span>
                  </div>

                  {/* Copyable Link */}
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={`https://biddaloi.com/ref/${generatedCode}`}
                      className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 w-full font-mono font-medium focus:outline-none"
                    />
                    <button
                      onClick={handleCopyLink}
                      className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-200/60 max-w-lg mx-auto text-left space-y-2 text-xs text-slate-700">
                  <h4 className="font-extrabold text-blue-900">What Happens Next:</h4>
                  <p>1. Share your code or referral link with students planning to study abroad.</p>
                  <p>2. When they contact Biddaloi, our counselor records your code and opens their file.</p>
                  <p>3. As soon as the embassy stamps their visa, we notify you and transfer your $100–$1,000 USD commission.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/8801722200432?text=Hello%20Biddaloi%20Team%2C%20I%20just%20registered%20as%20an%20affiliate.%20My%20code%20is%20${generatedCode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect with Affiliate Manager on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        city: 'Dhaka',
                        profession: 'Current University Student',
                        destinationFocus: 'USA & Canada',
                        payoutMethod: 'bKash / Nagad',
                        monthlyStudents: '2-4 students'
                      });
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline cursor-pointer"
                  >
                    Register another profile
                  </button>
                </div>

              </div>
            ) : (
              /* Registration Form */
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg shadow-slate-200/50">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tanvir Ahmed"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>

                    {/* WhatsApp / Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        WhatsApp / Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 17XX-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="tanvir@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>

                    {/* City / District */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        City / District in Bangladesh or Country
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dhaka, Chittagong, Sylhet, or Overseas"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Role / Profession */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Background / Profession
                      </label>
                      <select
                        value={formData.profession}
                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      >
                        <option value="Current University Student">Current University Student</option>
                        <option value="Bangladeshi Alumni Living Abroad">Bangladeshi Alumni Living Abroad</option>
                        <option value="IELTS / English Teacher / Mentor">IELTS / English Teacher / Mentor</option>
                        <option value="Education Agent / Freelance Counselor">Education Agent / Freelance Counselor</option>
                        <option value="Content Creator / Edu Influencer">Content Creator / Edu Influencer</option>
                        <option value="Other">Other Community Leader</option>
                      </select>
                    </div>

                    {/* Target Destination Focus */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary Destination Focus
                      </label>
                      <select
                        value={formData.destinationFocus}
                        onChange={(e) => setFormData({ ...formData, destinationFocus: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      >
                        <option value="USA & Canada (Tier 1: $700–$1,000 USD)">USA & Canada (Tier 1: $700–$1,000 USD)</option>
                        <option value="UK & Europe (Tier 2: $450–$800 USD)">UK & Europe (Tier 2: $450–$800 USD)</option>
                        <option value="Australia (Tier 1: $600–$900 USD)">Australia (Tier 1: $600–$900 USD)</option>
                        <option value="Malaysia & Asia (Tier 3: $150–$350 USD)">Malaysia & Asia (Tier 3: $150–$350 USD)</option>
                        <option value="All Destinations">All Destinations</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Expected Referrals */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Expected Referrals / Season
                      </label>
                      <select
                        value={formData.monthlyStudents}
                        onChange={(e) => setFormData({ ...formData, monthlyStudents: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      >
                        <option value="1-2 students">1-2 students (~$200 - $2,000 USD)</option>
                        <option value="3-5 students">3-5 students (~$1,500 - $5,000 USD)</option>
                        <option value="6-10 students">6-10 students (~$4,000 - $10,000 USD)</option>
                        <option value="10+ students">10+ students (Enterprise Tier Partner)</option>
                      </select>
                    </div>

                    {/* Preferred Payout Channel */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Commission Payout Method
                      </label>
                      <select
                        value={formData.payoutMethod}
                        onChange={(e) => setFormData({ ...formData, payoutMethod: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      >
                        <option value="bKash / Nagad / Rocket (BDT)">bKash / Nagad / Rocket (BDT)</option>
                        <option value="Bangladeshi Bank Account Wire (BDT)">Bangladeshi Bank Account Wire (BDT)</option>
                        <option value="Wise / Direct USD Wire Transfer">Wise / Direct USD Wire Transfer</option>
                        <option value="Direct Cash Payout at Dhaka Office">Direct Cash Payout at Dhaka Office</option>
                      </select>
                    </div>
                  </div>

                  {/* Privacy & Trust note */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 text-[11px] leading-relaxed">
                    By submitting this form, you will receive a unique affiliate referral code. There is zero signup fee and no minimum quota. You earn commission solely when your student receives their visa.
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-99"
                  >
                    <span>Activate My Affiliate Account & Get Link</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </form>
              </div>
            )}

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (FAQ)                               */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>Clear Answers</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Everything you need to know about student file opening, tracking, and visa commission disbursal.
              </p>
            </div>

            <div className="space-y-4">
              {AFFILIATE_FAQS.map((faq, fIdx) => {
                const isExpanded = expandedFaqIndex === fIdx;

                return (
                  <div
                    key={fIdx}
                    className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedFaqIndex(isExpanded ? null : fIdx)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-blue-600 shrink-0" />
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
        {/* SECTION 8: AFFILIATE HELPDESK & CONTACT                                    */}
        {/* ========================================================================= */}
        <section className="py-14 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Dedicated Dhaka Affiliate Relationship Desk</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Have questions before registering?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                  Talk directly with our Affiliate Lead in Pallabi, Mirpur 12, Dhaka. We provide customized materials and direct student lead tracking.
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
                  href="https://wa.me/8801722200432?text=Hello%20Biddaloi%2C%20I%20have%20an%20affiliate%20referral%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Affiliate Desk</span>
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 9. Global Footer identical to main site */}
      <Footer
        onOpenCounseling={() => onOpenCounseling('Affiliate Page Footer Inquiries')}
        onNavigateSection={onNavigateSection}
        onFilterDestination={onNavigateToCountry}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateToAffiliate={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToPartners={onNavigateToPartners}
      />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar
        onOpenCounseling={() => onOpenCounseling('Affiliate Mobile Action')}
        onOpenSearch={onOpenSearch}
      />

    </div>
  );
};
