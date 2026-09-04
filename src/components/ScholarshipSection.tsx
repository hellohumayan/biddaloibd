import React from 'react';
import { Award, Calendar, CheckCircle, ArrowRight, DollarSign, Sparkles } from 'lucide-react';
import { scholarshipsData } from '../data/scholarships';
import { Scholarship } from '../types';

interface ScholarshipSectionProps {
  onOpenCounseling: () => void;
  onFilterDestination: (destId: string) => void;
}

export const ScholarshipSection: React.FC<ScholarshipSectionProps> = ({
  onOpenCounseling,
  onFilterDestination
}) => {
  return (
    <section id="scholarships" className="py-20 bg-[#F8FAFD] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Financial Aid & Tuition Waivers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Find Scholarships That Match Your Profile
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Over ৳15 Crore in scholarships unlocked for Bangladeshi students through structured profile optimization.
            </p>
          </div>
          
          <button
            onClick={onOpenCounseling}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
          >
            <span>Check My Scholarship Chances</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarshipsData.map((sch) => (
            <div
              key={sch.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Badge & Country Flag */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-extrabold tracking-wide uppercase">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    {sch.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <span>{sch.flag}</span>
                    <span>{sch.country}</span>
                  </div>
                </div>

                {/* Scholarship Name & Uni */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {sch.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {sch.university} • <span className="text-blue-600">{sch.level}</span>
                  </p>
                </div>

                {/* Maximum Award Box */}
                <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50/60 rounded-xl border border-emerald-100">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                    Maximum Award Amount
                  </span>
                  <p className="text-lg font-black text-emerald-700 mt-0.5">
                    {sch.amount}
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    {sch.coverage}
                  </p>
                </div>

                {/* Eligibility Summary */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-start gap-2 text-slate-600">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{sch.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>Deadline: <strong className="text-slate-800">{sch.deadline}</strong></span>
                  </div>
                </div>

              </div>

              {/* Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onFilterDestination(sch.destinationId)}
                  className="text-xs font-semibold text-slate-600 hover:text-blue-600"
                >
                  View Programs
                </button>
                <button
                  type="button"
                  onClick={onOpenCounseling}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Apply with Biddaloi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="text-center mt-10">
          <p className="text-xs text-slate-500">
            *Scholarship criteria are evaluated by individual admissions committees. Biddaloi assists with SOP drafting and early priority submission.
          </p>
        </div>

      </div>
    </section>
  );
};
