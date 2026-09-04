import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle,
  FileCheck,
  Building,
  Sparkles
} from 'lucide-react';
import { CountryPageData } from '../../types/country';

interface CountryVisaSectionProps {
  country: CountryPageData;
  onOpenCounseling: (notes?: string) => void;
}

export const CountryVisaSection: React.FC<CountryVisaSectionProps> = ({
  country,
  onOpenCounseling
}) => {
  const { visaInfo } = country;

  return (
    <section id="visa-guide" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Embassy Visa Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {country.name} Student Visa Requirements
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            Everything you need to know about the {visaInfo.visaName}, embassy processing in Dhaka, interview guidelines, and biometric submissions.
          </p>
        </div>

        {/* Quick Visa Snapshot Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <span className="text-xs text-blue-400 font-bold block uppercase tracking-wider">
              Visa Category
            </span>
            <span className="text-lg font-bold text-white mt-1 block">
              {visaInfo.visaName}
            </span>
          </div>

          <div>
            <span className="text-xs text-blue-400 font-bold block uppercase tracking-wider">
              Embassy / VFS Center in Dhaka
            </span>
            <span className="text-xs sm:text-sm text-slate-300 mt-1 block leading-snug">
              {visaInfo.embassyInDhaka}
            </span>
          </div>

          <div>
            <span className="text-xs text-blue-400 font-bold block uppercase tracking-wider">
              Estimated Processing Time
            </span>
            <span className="text-lg font-bold text-emerald-400 mt-1 block">
              {visaInfo.processingTime}
            </span>
          </div>
        </div>

        {/* Step-by-Step Roadmap */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-blue-600" />
            <span>Step-by-Step Visa Process for Bangladeshi Applicants</span>
          </h3>

          <div className="relative border-l-2 border-blue-100 ml-4 sm:ml-6 space-y-8">
            {visaInfo.steps.map((step) => (
              <div key={step.stepNumber} className="relative pl-6 sm:pl-8 group">
                {/* Step Circle Indicator */}
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-md ring-4 ring-white">
                  {step.stepNumber}
                </div>

                <div className="bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {step.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg w-fit">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{step.timeline}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {step.bdSpecificNote && (
                    <div className="mt-3 text-xs text-amber-800 bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Key Tip for Dhaka Interview:</strong> {step.bdSpecificNote}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Embassy Interview Questions (if applicable) */}
        {visaInfo.topInterviewQuestions.length > 0 && (
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Top Embassy Interview Questions & Recommended Answers
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Our certified counselors conduct realistic mock interviews in our Dhaka office to prepare you for these exact questions.
            </p>

            <div className="space-y-4">
              {visaInfo.topInterviewQuestions.map((qa, index) => (
                <div key={index} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                    <span className="text-blue-600 font-black">Q{index + 1}:</span>
                    <span>"{qa.question}"</span>
                  </h4>
                  <div className="mt-2 pl-6 text-xs text-slate-600 leading-relaxed bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                    <strong className="text-blue-900 block mb-1">Recommended Response Strategy:</strong>
                    {qa.recommendedAnswerGuide}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-600 font-medium text-center sm:text-left">
                Want 1-on-1 personalized visa interview prep with our senior counselor?
              </span>
              <button
                onClick={() => onOpenCounseling(`Visa Mock Interview for ${country.name}`)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shrink-0 flex items-center gap-2 shadow-xs"
              >
                <span>Book Free Mock Interview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
