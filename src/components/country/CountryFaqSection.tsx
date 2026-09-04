import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, ArrowRight } from 'lucide-react';
import { CountryPageData } from '../../types/country';

interface CountryFaqSectionProps {
  country: CountryPageData;
  onOpenCounseling: (notes?: string) => void;
}

export const CountryFaqSection: React.FC<CountryFaqSectionProps> = ({
  country,
  onOpenCounseling
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = country.faqs;

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-slate-50/70 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Study in {country.name} FAQs
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Common questions Bangladeshi students ask about {country.name} admissions, visa approval rates, and scholarships.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 pr-2">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-center shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-3">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Have a question not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Our study abroad counselors are available right now to answer your specific case inquiries.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenCounseling(`Specific Question about ${country.name}`)}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2"
            >
              <span>Ask a Counselor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
