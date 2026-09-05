import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Radio, 
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
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-xs max-w-full">
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse flex-shrink-0" />
              <span className="text-sm sm:text-base font-extrabold text-blue-900 tracking-tight">
                {hero.eyebrowBadge === 'Bangladesh’s Trusted Study Abroad Platform' || !hero.eyebrowBadge
                  ? 'More Than 12K+ Programs'
                  : hero.eyebrowBadge}
              </span>
              {hero.eyebrowSubtext && 
               hero.eyebrowSubtext !== '100% Free Counseling' && 
               hero.eyebrowSubtext !== '100% Free Counseling To More Than 12K+ Programs' ? (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-medium text-slate-600">{hero.eyebrowSubtext}</span>
                </>
              ) : null}
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

          </div>

          {/* RIGHT COLUMN: Realistic Visual & Social Proof Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              
              {/* Main Student Photo Showcase */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 h-[460px] sm:h-[485px] lg:h-[495px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                  alt="Bangladeshi Students Celebrating Graduation Abroad"
                  className="w-full h-full object-cover object-[center_20%]"
                  loading="eager"
                />
                
                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10" />

                {/* Bottom Card Inside Photo */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-white/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Nusrat Jahan • University of Windsor</p>
                    <p className="text-[11px] text-slate-500 font-medium">M.S. Applied Computing (Canada)</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-xs" title="Visa Approved">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Left - Biddaloi Update */}
              <div className="hidden sm:flex absolute -top-3 -left-4 px-3 py-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <p className="text-xs font-bold text-slate-900">Biddaloi Update</p>
              </div>

              {/* Floating Badge 2: Middle Right - Visa Approved */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 px-3 py-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FileCheck className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-xs font-bold text-slate-900">Visa Approved</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
