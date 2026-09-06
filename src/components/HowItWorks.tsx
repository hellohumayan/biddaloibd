import React from 'react';
import { 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  Plane, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Tv,
  Play
} from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

interface HowItWorksProps {
  onStartJourney: () => void;
  onWatchVideos?: () => void;
}

const stepIcons = [MessageSquare, Send, ShieldCheck, Plane];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartJourney, onWatchVideos }) => {
  const { config } = useSiteConfig();
  const howItWorks = config.howItWorks;
  const steps = howItWorks.steps || [];
  const cta = howItWorks.liveClassesCta;

  return (
    <section id="how-it-works" className="py-20 bg-[#F8FAFD] border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Left Aligned */}
        <div className="text-left max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{howItWorks.badge || 'Simple 4-Step Journey'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {howItWorks.title || 'Your Road to Abroad'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            {howItWorks.description}
          </p>
        </div>

        {/* 4 Steps Grid with Connected Visual Flow */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Desktop Connecting Line behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, index) => {
              const IconComponent = stepIcons[index % stepIcons.length];
              return (
                <div
                  key={item.step}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                        Step {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Highlight pill */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                      {item.detail}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-slate-300 group-hover:text-teal-600 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 mb-10">
          <button
            onClick={onStartJourney}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all transform active:scale-95 cursor-pointer"
          >
            <span>Start with Counselling</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Live Classes For Learning CTA Banner */}
        <div className="mt-8 bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-amber-300">
              <Tv className="w-6 h-6 text-amber-300 animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold">
                {cta?.title || 'Watch Live Classes for Learning & Guidance'}
              </h4>
              <p className="text-blue-100 text-xs sm:text-sm mt-0.5 max-w-2xl">
                {cta?.description || 'Attend interactive live sessions and video lessons on IELTS preparation, embassy visa mock interviews, university shortlisting, and high-converting SOP writing.'}
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@Biddaloi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-900 font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2.5 flex-shrink-0 cursor-pointer group"
          >
            <Play className="w-4 h-4 text-red-600 fill-current" />
            <span>{cta?.buttonText || 'Watch Videos'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
