import React, { useEffect } from 'react';
import {
  Compass,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Search,
  BookOpen,
  Award,
  Users,
  Check,
  Globe,
  Layers,
  HeartHandshake,
  Target,
  FileCheck,
  Plane,
  FileText,
  UserCheck,
  HelpCircle,
  Clock,
  Laptop,
  MessageSquare,
  AlertCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { MobileStickyBar } from '../MobileStickyBar';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigateToCountry: (countryId: string) => void;
  onNavigateToAffiliate?: () => void;
  onNavigateToPartners?: () => void;
  onNavigateBlog?: (articleId?: string) => void;
  onNavigateContact?: () => void;
  onOpenCounseling: (notes?: string) => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateSection,
  onNavigateToCountry,
  onNavigateToAffiliate,
  onNavigateToPartners,
  onNavigateBlog,
  onNavigateContact,
  onOpenCounseling,
  onOpenSearch,
  onOpenLogin
}) => {
  // Set SEO metadata on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const originalTitle = document.title;
    document.title = 'About Biddaloi | Study Abroad Platform for Bangladeshi Students';

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about Biddaloi, a student-first education platform helping Bangladeshi students explore study destinations, courses, universities, scholarships, admissions, and visa guidance.'
      );
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  const handleScrollToServices = () => {
    const el = document.getElementById('services-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      
      {/* 1. Header & Navigation (Completely unchanged from existing website) */}
      <Navbar
        onOpenSearch={onOpenSearch}
        onOpenLogin={onOpenLogin}
        onOpenCounseling={() => (onNavigateContact ? onNavigateContact() : onOpenCounseling('About Page Visitor Consultation'))}
        onNavigateSection={onNavigateSection}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateAffiliate={onNavigateToAffiliate}
        onNavigatePartners={onNavigateToPartners}
        onNavigateHome={onNavigateHome}
        onNavigateBlog={onNavigateBlog}
        onNavigateAbout={() => onNavigateSection('about')}
        onNavigateContact={onNavigateContact}
      />

      {/* Main Body */}
      <main className="pt-16 sm:pt-20">

        {/* ===================================================================
            1. HERO SECTION
           =================================================================== */}
        <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-200/70 bg-linear-to-b from-white via-blue-50/25 to-[#F8FAFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Headline & Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>About Biddaloi</span>
                </div>

                {/* Single H1 Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Empowering Students to Make Better{' '}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-blue-600 to-indigo-700">
                    Study Abroad
                  </span>{' '}
                  Decisions
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                  Biddaloi is a student-first education platform that helps Bangladeshi students explore suitable countries, universities, courses, and scholarships based on their academic background, budget, and career goals.
                </p>

                {/* Primary & Secondary Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleScrollToServices}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenCounseling('Hero Section - About Page')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 font-bold text-sm sm:text-base border border-slate-300/80 shadow-2xs hover:border-slate-400 transition-all cursor-pointer"
                  >
                    <span>Get Free Counselling</span>
                  </button>
                </div>

                {/* Trust Line */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reliable Information</span>
                  <span className="text-slate-300">•</span>
                  <span>Personalized Planning</span>
                  <span className="text-slate-300">•</span>
                  <span>Step-by-Step Support</span>
                </div>

              </div>

              {/* Right Column: Premium Visual Card (stacked on mobile) */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Background Glow */}
                  <div className="absolute -inset-1 rounded-3xl bg-linear-to-tr from-blue-400/20 via-teal-400/20 to-indigo-400/20 blur-xl opacity-70" />

                  {/* Visual Container */}
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-5 sm:p-7 space-y-5">
                    
                    {/* Visual Card Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-slate-900">Biddaloi Platform</div>
                          <div className="text-[11px] text-slate-500 font-medium">Student Decision Engine</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold border border-emerald-200">
                        100% Student-First
                      </span>
                    </div>

                    {/* Interactive Showcase Preview */}
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                            01
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">Academic Background</div>
                            <div className="text-[10px] text-slate-500">HSC / Bachelor's / Study Gap & GPA</div>
                          </div>
                        </div>
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold">
                            02
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">Destination & Budget Match</div>
                            <div className="text-[10px] text-slate-500">USA, UK, Canada, Australia, Europe & Asia</div>
                          </div>
                        </div>
                        <Check className="w-4 h-4 text-teal-600" />
                      </div>

                      <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/90 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                            03
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-blue-950">Practical Roadmaps & Scholarships</div>
                            <div className="text-[10px] text-blue-700 font-medium">Clear Requirements, Realistic Costs</div>
                          </div>
                        </div>
                        <Sparkles className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>

                    {/* Floating micro-stats badge */}
                    <div className="p-3 rounded-xl bg-linear-to-r from-slate-900 to-blue-950 text-white flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-[11px] font-bold text-blue-200">Our Primary Mission</div>
                        <div className="text-xs font-extrabold text-white">“More Than a Traditional Consultancy”</div>
                      </div>
                      <Globe className="w-5 h-5 text-blue-400 shrink-0" />
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ===================================================================
            2. OUR STORY SECTION
           =================================================================== */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Visual Journey (confusion to clarity) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
                  
                  <div className="space-y-1">
                    <span className="text-[11px] font-extrabold text-blue-700 uppercase tracking-wider">
                      Student Journey
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      From Confusion to Complete Clarity
                    </h3>
                  </div>

                  {/* Flow Diagram */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-rose-200 shadow-2xs flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✕
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">The Traditional Confusion</div>
                        <div className="text-[11px] text-slate-500 leading-relaxed">
                          Contradictory consultancy advice, hidden charges, and generic course pushing without profile alignment.
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-blue-200 shadow-2xs flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Biddaloi Structured Guidance</div>
                        <div className="text-[11px] text-slate-500 leading-relaxed">
                          Clear comparison of tuition fees, genuine admission requirements, and transparent visa preparation.
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 shadow-2xs flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ★
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-emerald-950">Successful International Study</div>
                        <div className="text-[11px] text-emerald-800 leading-relaxed">
                          Enrolling in the right university, aligned with career ambitions, family budget, and future prospects.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span>Targeted for Bangladeshi Students</span>
                    <span className="font-bold text-blue-600">Student First</span>
                  </div>

                </div>
              </div>

              {/* Right Column: Story Copy */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
                
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-blue-600">
                  <span>Our Story</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Why We Created Biddaloi
                </h2>

                <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    Studying abroad is more than choosing a university or submitting an application. It is a major decision involving a student’s education, finances, family, and future career.
                  </p>
                  <p>
                    With thousands of courses, universities, scholarships, and visa requirements to consider, finding the right path can feel overwhelming. Incomplete information or unsuitable advice can lead to wasted time, unnecessary expenses, and missed opportunities.
                  </p>
                  <p>
                    Biddaloi was created to make this journey clearer and more organized. We help students understand their options and develop a practical roadmap based on their individual profiles and long-term goals.
                  </p>
                </div>

                {/* Highlighted Quote */}
                <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/80 border-l-4 border-blue-600 text-slate-900 my-4 shadow-2xs">
                  <blockquote className="text-base sm:text-lg font-bold italic leading-snug">
                    “Our goal is not simply to help students go abroad. We want to help them make the right decision for their future.”
                  </blockquote>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* ===================================================================
            3. WHO WE ARE SECTION
           =================================================================== */}
        <section className="py-16 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-blue-600">
                <span>Who We Are</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                More Than a Traditional Consultancy
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Biddaloi is a technology-driven education and study abroad platform. We combine reliable information, digital tools, educational content, and personalized guidance to simplify every stage of the student journey.
              </p>
            </div>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Education Platform
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Explore useful information about destinations, universities, courses, scholarships, admissions, and student visas.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-blue-600 gap-1">
                  <span>Comprehensive Research</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Personalized Guidance
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Receive guidance based on your academic history, study preferences, budget, and future career plans.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-teal-700 gap-1">
                  <span>Tailored Roadmaps</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Digital Support
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Use our Course Finder, online resources, and digital communication tools to manage your journey more efficiently.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-indigo-600 gap-1">
                  <span>Modern Web Tools</span>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ===================================================================
            4. MISSION AND VISION
           =================================================================== */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                Guiding Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Mission & Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Mission Card */}
              <div className="bg-linear-to-br from-blue-50/70 via-white to-blue-50/30 rounded-2xl sm:rounded-3xl p-7 sm:p-10 border border-blue-200/80 shadow-xs text-left space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    To make study abroad information, course selection, and application guidance simpler, more transparent, and more accessible for Bangladeshi students.
                  </p>
                </div>
                <div className="pt-4 border-t border-blue-100/80 flex items-center gap-2 text-xs font-bold text-blue-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Simplicity • Transparency • Accessibility</span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-linear-to-br from-teal-50/70 via-white to-teal-50/30 rounded-2xl sm:rounded-3xl p-7 sm:p-10 border border-teal-200/80 shadow-xs text-left space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center shadow-xs">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    To build a global education ecosystem where every student can discover the right learning opportunity based on their abilities, ambitions, and circumstances.
                  </p>
                </div>
                <div className="pt-4 border-t border-teal-100/80 flex items-center gap-2 text-xs font-bold text-teal-800">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span>Equal Learning Opportunities For All</span>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ===================================================================
            5. OUR CORE VALUES
           =================================================================== */}
        <section className="py-16 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                Ethical Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                The Values That Guide Us
              </h2>
            </div>

            {/* 5 Value Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Value 1: Student First */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs text-left space-y-3 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Student First</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We prioritize the student’s academic interests, financial situation, and long-term career goals.
                </p>
              </div>

              {/* Value 2: Transparency */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs text-left space-y-3 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Transparency</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We communicate application processes, costs, requirements, and potential challenges clearly.
                </p>
              </div>

              {/* Value 3: Reliable Information */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs text-left space-y-3 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <CheckCheckIcon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Reliable Information</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We prioritize trustworthy and verifiable information instead of assumptions or misleading promises.
                </p>
              </div>

              {/* Value 4: Personalized Guidance */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs text-left space-y-3 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Personalized Guidance</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every student has a different journey, so we avoid offering the same solution to everyone.
                </p>
              </div>

              {/* Value 5: Long-Term Impact */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs text-left space-y-3 hover:border-blue-300 transition-colors sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Long-Term Impact</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We consider the value of a student’s education and future career—not just admission.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ===================================================================
            6. WHAT WE HELP WITH
           =================================================================== */}
        <section id="services-grid" className="py-16 sm:py-20 bg-white border-b border-slate-200/70 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                End-to-End Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Support for Every Stage of Your Journey
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We review your academic background, budget, study gap, English proficiency, and career goals to identify suitable study options with complete transparency.
              </p>
            </div>

            {/* Modern 8-Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {[
                {
                  icon: UserCheck,
                  title: 'Profile Assessment',
                  desc: 'We review your academic background, budget, study gap, English proficiency, and career goals to identify suitable study options.',
                  category: 'Assessment'
                },
                {
                  icon: Globe,
                  title: 'Country Selection',
                  desc: 'Compare global destinations based on post-study work permits, budget, language requirements, and living conditions.',
                  category: 'Destinations'
                },
                {
                  icon: GraduationCap,
                  title: 'University Selection',
                  desc: 'Find accredited universities that fit your academic grade, test scores, and career ambitions without generic quotas.',
                  category: 'Institutions'
                },
                {
                  icon: BookOpen,
                  title: 'Course Selection',
                  desc: 'Select future-ready degree programs aligned with global industry demand and your personal academic interests.',
                  category: 'Academics'
                },
                {
                  icon: Award,
                  title: 'Scholarship Guidance',
                  desc: 'Explore merit-based, need-based, and government scholarship opportunities with realistic eligibility criteria.',
                  category: 'Funding'
                },
                {
                  icon: FileCheck,
                  title: 'Application Support',
                  desc: 'Get organized support with SOP writing, document checklists, reference letters, and direct portal submissions.',
                  category: 'Admissions'
                },
                {
                  icon: ShieldCheck,
                  title: 'Visa Guidance',
                  desc: 'Comprehensive checklist preparation, financial documentation advice, and realistic visa interview coaching.',
                  category: 'Visa Support'
                },
                {
                  icon: Plane,
                  title: 'Pre-Departure Support',
                  desc: 'Practical orientation on student accommodation, forex, health insurance, and smooth campus life transition.',
                  category: 'Transition'
                }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAFD] rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onOpenCounseling(`About Page - ${service.title} Service Inquiry`)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Note against guarantees */}
            <div className="max-w-2xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500 font-medium">
              * Note: Biddaloi does not promise or guarantee admission, scholarships, or visa approval. All decisions rest strictly with the respective universities and immigration authorities.
            </div>

          </div>
        </section>


        {/* ===================================================================
            7. HOW BIDDALOI WORKS
           =================================================================== */}
        <section className="py-16 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                Process Flow
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Your Journey, Step by Step
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                A structured, connected timeline designed to bring clarity and eliminate stress.
              </p>
            </div>

            {/* Connected Timeline (Horizontal on desktop, vertical on mobile) */}
            <div className="relative">
              
              {/* Connecting line on desktop */}
              <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-blue-200 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                
                {/* Step 01 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs text-left space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                        01
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        Discovery
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Step 01 — Counselling
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Tell us about your education, budget, preferences, and future goals.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                    Understanding Your Profile
                  </div>
                </div>

                {/* Step 02 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs text-left space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-xl bg-teal-700 text-white font-black text-sm flex items-center justify-center shadow-xs">
                        02
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                        Strategy
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Step 02 — Planning
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Receive a shortlist of suitable countries, courses, and universities based on your profile.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                    Data-Driven Options
                  </div>
                </div>

                {/* Step 03 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs text-left space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                        03
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        Execution
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Step 03 — Application
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Get organized support with document preparation and university applications.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                    SOP & Admission Checklists
                  </div>
                </div>

                {/* Step 04 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs text-left space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                        04
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Transition
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Step 04 — Visa & Departure
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Prepare for the visa process, travel arrangements, and your transition to student life abroad.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                    Visa Prep & Campus Ready
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ===================================================================
            8. BIDDALOI DIGITAL ECOSYSTEM (Soft Blue Background)
           =================================================================== */}
        <section className="py-16 sm:py-20 bg-[#F0F5FD] border-b border-blue-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                Digital Ecosystem
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Information, Technology, and Human Guidance—Together
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Biddaloi combines accessible information with practical digital tools and personalized support.
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Course Finder */}
              <div className="bg-white rounded-2xl p-6 border border-blue-200/80 shadow-2xs text-left space-y-3 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Course Finder</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Find courses using filters such as country, study level, intake, tuition fees, and academic requirements.
                </p>
              </div>

              {/* Study Abroad Resources */}
              <div className="bg-white rounded-2xl p-6 border border-blue-200/80 shadow-2xs text-left space-y-3 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Study Abroad Resources</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Explore practical content covering destinations, admissions, scholarships, student visas, and career planning.
                </p>
              </div>

              {/* Personal Dashboard */}
              <div className="bg-white rounded-2xl p-6 border border-blue-200/80 shadow-2xs text-left space-y-3 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Personal Dashboard</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Organize your enquiries, shortlisted options, documents, and application journey in one place.
                </p>
              </div>

              {/* Expert Support */}
              <div className="bg-white rounded-2xl p-6 border border-blue-200/80 shadow-2xs text-left space-y-3 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Expert Support</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Connect with the Biddaloi team whenever you need personalized assistance.
                </p>
              </div>

            </div>

            {/* Premium Dashboard-Style Product Preview */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-blue-200/90 shadow-lg overflow-hidden">
              
              {/* Mock Browser Header */}
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] text-slate-400 ml-2 font-mono hidden sm:inline">
                    https://biddaloi.com/portal/course-finder
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-900/50 px-2 py-0.5 rounded">
                  Biddaloi Digital Workspace
                </span>
              </div>

              {/* Dashboard Content Mock */}
              <div className="p-5 sm:p-7 space-y-5 text-left">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Course & Scholarship Finder</h4>
                    <p className="text-xs text-slate-500">Filtered by: Bangladeshi Students • Minimum GPA 3.0 • Budget-friendly</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                      3,500+ Verified Programs
                    </span>
                  </div>
                </div>

                {/* Sample Filter Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-slate-500">Quick Filters:</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md text-xs font-semibold text-slate-700">USA & Canada</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md text-xs font-semibold text-slate-700">STEM Programs</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md text-xs font-semibold text-slate-700">Under $15,000/yr</span>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md text-xs font-bold border border-emerald-200">
                    Scholarships Available
                  </span>
                </div>

                {/* Shortlist Snapshot Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">B.Sc in Computer Science</div>
                      <div className="text-[11px] text-slate-500">Arizona State University (USA)</div>
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                      Shortlisted
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Master of Data Analytics</div>
                      <div className="text-[11px] text-slate-500">Deakin University (Australia)</div>
                    </div>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-100/70 px-2 py-0.5 rounded">
                      Shortlisted
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ===================================================================
            9. WHY CHOOSE BIDDALOI
           =================================================================== */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                Distinct Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Students Choose Biddaloi
              </h2>
            </div>

            {/* Checklist Layout */}
            <div className="max-w-4xl mx-auto bg-[#F8FAFD] rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
                
                {[
                  'Clear and practical study abroad information',
                  'Recommendations based on individual student profiles',
                  'Support across multiple stages of the journey',
                  'A combination of digital tools and human guidance',
                  'Content designed for Bangladeshi students',
                  'Transparent communication about requirements and limitations'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              {/* Supporting Statement */}
              <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                <p className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed italic">
                  “We help students evaluate their options carefully instead of pressuring them into making rushed decisions.”
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ===================================================================
            10. FOUNDER AND TEAM SECTION
           =================================================================== */}
        <section className="py-16 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                Our People
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                The People Behind Biddaloi
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Biddaloi is supported by a committed team working across education, technology, content, and student services.
              </p>
            </div>

            {/* Founder Card & Team Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Founder Card (Takes prominent space) */}
              <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-md text-left flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                
                <div className="relative shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    alt="Humayan Rashid"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-blue-600 shadow-xs"
                  />
                  <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-blue-600 text-white rounded-md text-[10px] font-extrabold uppercase tracking-wider">
                    Founder
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Humayan Rashid
                    </h3>
                    <a
                      href="https://www.youtube.com/@humayanrashid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-600 transition-colors p-1"
                      title="Follow Humayan Rashid"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="text-xs font-bold text-blue-700">
                    Founder and Study Abroad Content Creator
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Drawing from his international education journey and digital experience, Humayan created Biddaloi to help students access practical information and make more informed study abroad decisions.
                  </p>
                </div>

              </div>

              {/* Team Highlights (3 compact team capability cards) */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs text-left space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-extrabold text-slate-900">Admissions Advisory</div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Experienced counselors evaluating academic records, entry requirements, and university selections.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs text-left space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-extrabold text-slate-900">Tech & Tools</div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Engineers and data researchers maintaining our Course Finder and digital student tools.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs text-left space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-extrabold text-slate-900">Student Support</div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Dedicated coordinators assisting students with document preparation and visa interview orientation.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ===================================================================
            11. TRANSPARENCY STATEMENT
           =================================================================== */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-left space-y-3 shadow-2xs">
              <div className="flex items-center gap-2.5 text-amber-900 font-extrabold text-sm sm:text-base">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Our Commitment to Transparency</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Admission, scholarship, and visa decisions are made by the relevant universities, institutions, and government authorities. Biddaloi does not guarantee approval. We provide professional guidance, reliable information, and application support to help students prepare more effectively.
              </p>
            </div>
          </div>
        </section>


        {/* ===================================================================
            12. FINAL CTA SECTION
           =================================================================== */}
        <section className="py-16 sm:py-24 bg-linear-to-b from-white via-blue-50/40 to-[#F8FAFD]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-extrabold tracking-wide">
              <span>Start Your Journey</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Not Sure Which Country, Course, or University Is Right for You?
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Share your academic profile and future goals with us. The Biddaloi team will help you understand the study options that may suit your needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenCounseling('Final CTA - About Page')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
              >
                <span>Get Free Counselling</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigateSection('courses')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-2xs hover:border-slate-400 transition-all cursor-pointer"
              >
                <span>Explore Course Finder</span>
              </button>
            </div>

            {/* Trust Line */}
            <p className="text-xs text-slate-500 pt-2 font-medium">
              Your first conversation will focus on understanding your profile, budget, and study goals.
            </p>

          </div>
        </section>

      </main>

      {/* Footer (Unchanged) */}
      <Footer
        onNavigateSection={onNavigateSection}
        onFilterDestination={onNavigateToCountry}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateToAffiliate={onNavigateToAffiliate}
        onNavigateToPartners={onNavigateToPartners}
        onOpenCounseling={() => onOpenCounseling('Footer About Consultation')}
      />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar
        onFindCourse={() => onNavigateSection('courses')}
        onTalkCounselor={() => onOpenCounseling('Mobile Bar About Page')}
      />

    </div>
  );
};

// Helper for check icon
function CheckCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 7 17l-5-5" />
      <path d="m22 10-7.5 7.5L13 16" />
    </svg>
  );
}
