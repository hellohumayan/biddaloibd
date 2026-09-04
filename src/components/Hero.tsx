import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Star, 
  Award, 
  Globe, 
  GraduationCap, 
  FileCheck
} from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

interface HeroProps {
  onFindCourse: () => void;
  onTalkCounselor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFindCourse, onTalkCounselor }) => {
  const { config } = useSiteConfig();
  const hero = config.hero;

  return (
    <section id="hero" className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-[#F0F5FD] via-[#F8FAFE] to-white">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-blue-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-36 right-4 w-64 h-64 bg-teal-100/50 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Main Value Prop, Headlines, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold text-blue-900 tracking-wide">
                {hero.eyebrowBadge}
              </span>
              <span className="hidden sm:inline-block text-slate-300">•</span>
              <span className="hidden sm:inline-block text-xs font-medium text-slate-600">{hero.eyebrowSubtext}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              {hero.headline}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600">
                {hero.headlineHighlight}
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {hero.subheadline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onFindCourse}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/25 transition-all transform active:scale-95 group cursor-pointer"
              >
                <span>{hero.primaryCtaText || 'Start Free Assessment'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onTalkCounselor}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300/80 shadow-xs transition-all hover:border-teal-500 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-teal-600" />
                <span>{hero.secondaryCtaText || 'Talk to an Expert'}</span>
              </button>
            </div>

            {/* Social Proof Badges */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                
                {/* 1. Trusted by BD Students */}
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2 overflow-hidden flex-shrink-0">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=75"
                      alt="Student Nusrat"
                      width="32"
                      height="32"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=75"
                      alt="Student Tanvir"
                      width="32"
                      height="32"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=75"
                      alt="Student Farhan"
                      width="32"
                      height="32"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-slate-800 mt-0.5">
                      {hero.statVisas} Visas
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium">Approved for BD students</p>
                  </div>
                </div>

                {/* 2. Success Rate */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{hero.statRate} Visa Success</p>
                    <p className="text-[10px] text-slate-500 font-medium">USA, CAN, UK, AUS, EUR</p>
                  </div>
                </div>

                {/* 3. Scholarships Won */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{hero.statScholarships} Scholarships</p>
                    <p className="text-[10px] text-slate-500 font-medium">{hero.statUnis} Universities</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Realistic Visual & Social Proof Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Student Photo Showcase */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/4.8]">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                  alt="Bangladeshi Students Celebrating Graduation Abroad"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                
                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10" />

                {/* Bottom Card Inside Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/80 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Fall 2024 Visa Approved</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 mt-0.5">Nusrat Jahan • University of Windsor</p>
                    <p className="text-[11px] text-slate-500 font-medium">M.S. Applied Computing (Canada)</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-xs" title="Visa Approved">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Left - World Ranked */}
              <div className="hidden sm:flex absolute -top-3 -left-4 p-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">World Top 1%</p>
                  <p className="text-[10px] text-slate-500">Ranked Universities</p>
                </div>
              </div>

              {/* Floating Badge 2: Top Right - Scholarship Award */}
              <div className="hidden sm:flex absolute -top-3 -right-4 p-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-900">৳15 Lakh+ Waiver</p>
                  <p className="text-[10px] text-slate-500">Secured Scholarship</p>
                </div>
              </div>

              {/* Floating Badge 3: Middle Right - Visa Approved */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 p-2 sm:p-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <p className="text-xs font-bold text-slate-900">Visa Approved</p>
                  </div>
                  <p className="text-[10px] text-slate-500">{hero.statRate} Success Rate</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
