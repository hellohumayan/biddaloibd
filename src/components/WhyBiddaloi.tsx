import React from 'react';
import { 
  Compass, 
  BookOpenCheck, 
  Award, 
  FileCheck2, 
  ShieldCheck, 
  PlaneTakeoff,
  ArrowRight,
  Sparkles,
  Landmark,
  Headphones,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

interface WhyBiddaloiProps {
  onOpenCounseling: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Headphones,
  BookOpenCheck,
  Compass,
  FileCheck2,
  Award,
  Landmark,
  ShieldCheck,
  PlaneTakeoff,
  GraduationCap,
  Sparkles,
  Briefcase
};

export const WhyBiddaloi: React.FC<WhyBiddaloiProps> = ({ onOpenCounseling }) => {
  const { config } = useSiteConfig();
  const servicesConfig = config.services;
  const items = servicesConfig.items || [];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/60 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Left Aligned */}
        <div className="text-left max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{servicesConfig.badge || 'The Biddaloi Advantage'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {servicesConfig.title || 'Services We Provide'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {servicesConfig.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((s) => {
            const IconComponent = iconMap[s.iconName || ''] || Briefcase;
            return (
              <div
                key={s.id}
                onClick={onOpenCounseling}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Icon & Micro Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-2xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {s.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Bottom Interactive Link */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Get Free Support</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-blue-50/80 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
              0৳
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Zero Processing & File Opening Charge</p>
              <p className="text-xs text-slate-500">We do not charge students for primary assessment, university shortlisting, or counseling.</p>
            </div>
          </div>
          <button
            onClick={onOpenCounseling}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all flex-shrink-0 cursor-pointer"
          >
            <span>Book 1-on-1 Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
