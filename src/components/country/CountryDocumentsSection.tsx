import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Award, 
  Building2, 
  CheckSquare, 
  Square,
  Sparkles,
  Download,
  Info
} from 'lucide-react';
import { CountryPageData } from '../../types/country';

interface CountryDocumentsSectionProps {
  country: CountryPageData;
  onOpenCounseling: (notes?: string) => void;
}

export const CountryDocumentsSection: React.FC<CountryDocumentsSectionProps> = ({
  country,
  onOpenCounseling
}) => {
  const { documentChecklist } = country;

  // Flattened items for interactive checklist tracker
  const allDocNames = documentChecklist.flatMap(cat => cat.documents.map(doc => doc.name));
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const toggleDoc = (name: string) => {
    setCheckedDocs(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const completedCount = Object.values(checkedDocs).filter(Boolean).length;
  const totalCount = allDocNames.length;
  const percentage = Math.round((completedCount / (totalCount || 1)) * 100);

  return (
    <section id="documents" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Bangladeshi Applicant Checklist</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Required Documents to Study in {country.name}
            </h2>
            <p className="text-slate-600 mt-2 text-base leading-relaxed">
              Step-by-step document dossier tailored for Bangladeshi applicants, including Education Board, MOFA attestation, bank statements, and visa forms.
            </p>
          </div>

          {/* Interactive Progress Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs lg:w-80 shrink-0">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
              <span>Your Readiness Progress:</span>
              <span className="text-blue-600 font-extrabold">{percentage}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden mb-2">
              <div 
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span>{completedCount} of {totalCount} documents prepared</span>
              {percentage === 100 && (
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Ready!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Attestation Notice Bar */}
        <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-blue-950">Attestation Protocol for Bangladeshi Students</h4>
              <p className="text-xs text-blue-800/80 mt-0.5 leading-relaxed">
                All certificates (SSC, HSC, Bachelor) must be verified by your respective Board / University Controller, and subsequently attested by the Ministry of Foreign Affairs (MOFA, Segunbagicha, Dhaka).
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenCounseling(`Attestation Help for ${country.name}`)}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shrink-0 transition-colors"
          >
            Free Attestation Guidance
          </button>
        </div>

        {/* Categorized Document Accordion / List */}
        <div className="space-y-6">
          {documentChecklist.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                      0{catIdx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{category.categoryName}</h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{category.description}</p>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                  {category.required ? 'Mandatory' : 'Optional'}
                </span>
              </div>

              {/* Document items list */}
              <div className="space-y-3.5">
                {category.documents.map((doc, docIdx) => {
                  const isChecked = !!checkedDocs[doc.name];
                  return (
                    <div
                      key={docIdx}
                      onClick={() => toggleDoc(doc.name)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                        isChecked 
                          ? 'bg-blue-50/50 border-blue-200' 
                          : 'bg-slate-50/60 border-slate-200/70 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      <button 
                        type="button" 
                        className="mt-0.5 text-blue-600 focus:outline-none shrink-0"
                        aria-label={isChecked ? `Mark ${doc.name} as incomplete` : `Mark ${doc.name} as prepared`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-400" />
                        )}
                      </button>

                      <div className="flex-1 text-xs">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className={`font-bold text-sm ${isChecked ? 'text-blue-900 line-through' : 'text-slate-800'}`}>
                            {doc.name}
                          </h4>
                          {doc.attestation && (
                            <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded shrink-0">
                              Attestation Required
                            </span>
                          )}
                        </div>

                        <p className="text-slate-600 mt-1 leading-relaxed">{doc.description}</p>

                        {doc.tipsForBangladeshi && (
                          <div className="mt-2 text-[11px] text-blue-700 bg-blue-100/50 p-2 rounded-lg font-medium flex items-start gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span><strong>Tip for BD Applicants:</strong> {doc.tipsForBangladeshi}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-8 text-center bg-white p-6 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-600">
          <span>Need assistance reviewing your Statement of Purpose (SOP) or calculating bank solvency? </span>
          <button
            onClick={() => onOpenCounseling(`Document Review for ${country.name}`)}
            className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1 ml-1"
          >
            <span>Book a Free Document Review Session</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};
