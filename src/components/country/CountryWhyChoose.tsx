import React from 'react';
import { 
  Sparkles, 
  Briefcase, 
  Clock, 
  TrendingUp, 
  Award, 
  Globe, 
  HeartHandshake, 
  Check,
  DollarSign
} from 'lucide-react';
import { CountryPageData } from '../../types/country';

interface CountryWhyChooseProps {
  country: CountryPageData;
  onOpenCounseling: (notes?: string) => void;
}

export const CountryWhyChoose: React.FC<CountryWhyChooseProps> = ({
  country,
  onOpenCounseling
}) => {
  const { whySelect, partTimeWorkRules } = country;

  return (
    <section id="why-choose" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Strategic Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose {country.name} for Your Higher Education?
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            Discover why thousands of ambitious students from Bangladesh select {country.name} each year for their undergraduate, Master’s, and doctoral studies.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {whySelect.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    0{index + 1}
                  </div>
                  {point.highlight && (
                    <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full">
                      {point.highlight}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Part-Time Work Rights Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-blue-200 text-xs font-bold">
                <Briefcase className="w-3.5 h-3.5 text-blue-300" />
                <span>Earn While You Learn</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Part-Time Work Rights in {country.name}
              </h3>
              <p className="text-sm text-blue-100/90 leading-relaxed">
                Legal work rights for international students help you offset living expenses while gaining valuable local work experience.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <span className="text-[11px] text-blue-200 block font-semibold">Allowed Hours</span>
                <span className="text-sm font-bold text-white mt-1 block leading-snug">
                  {partTimeWorkRules.hoursAllowedPerWeek}
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <span className="text-[11px] text-blue-200 block font-semibold">Minimum Wage</span>
                <span className="text-sm font-bold text-white mt-1 block">
                  {partTimeWorkRules.minWageHourly}
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <span className="text-[11px] text-blue-200 block font-semibold">Monthly Income</span>
                <span className="text-sm font-bold text-emerald-300 mt-1 block">
                  {partTimeWorkRules.estMonthlyEarnings}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
