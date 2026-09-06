import React from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  RotateCcw, 
  Map, 
  ExternalLink, 
  CheckCircle2, 
  Globe2, 
  Building2, 
  GraduationCap, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

export type LegalPolicyTab = 'terms' | 'refund' | 'sitemap' | 'privacy';

interface LegalPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalPolicyTab;
  onNavigateToCountry?: (countryId: string) => void;
  onNavigateAffiliate?: () => void;
  onNavigatePartners?: () => void;
  onNavigateBlog?: () => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
  onNavigateIeltsRoadmap?: () => void;
}

export const LegalPolicyModal: React.FC<LegalPolicyModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'terms',
  onNavigateToCountry,
  onNavigateAffiliate,
  onNavigatePartners,
  onNavigateBlog,
  onNavigateAbout,
  onNavigateContact,
  onNavigateIeltsRoadmap
}) => {
  const [activeTab, setActiveTab] = React.useState<LegalPolicyTab>(initialTab);

  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      id="legal-policy-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                Biddaloi LLC • Legal & Directory
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Official transparency documents and navigational directory
              </p>
            </div>
          </div>
          <button
            id="close-legal-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 px-5 sm:px-7 py-2.5 border-b border-slate-100 bg-white overflow-x-auto no-scrollbar">
          <button
            id="tab-terms-btn"
            onClick={() => setActiveTab('terms')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms & Conditions</span>
          </button>
          <button
            id="tab-refund-btn"
            onClick={() => setActiveTab('refund')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'refund'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Refund Policy</span>
          </button>
          <button
            id="tab-sitemap-btn"
            onClick={() => setActiveTab('sitemap')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'sitemap'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>Site Map</span>
          </button>
          <button
            id="tab-privacy-btn"
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 text-sm text-slate-600 leading-relaxed space-y-6">
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                  Legal Agreement
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1.5">
                  Terms & Conditions — Biddaloi LLC
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Last Updated: January 2026 • Governed by Biddaloi LLC
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <section className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    1. Acceptance of Terms
                  </h4>
                  <p className="text-slate-600">
                    By accessing, browsing, or utilizing the services provided by Biddaloi LLC (&ldquo;Biddaloi&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) via Biddaloi.com or related consultation channels, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, you must refrain from using the platform.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">2. Nature of Advisory Services</h4>
                  <p>
                    Biddaloi LLC operates an authorized educational counseling, university matching, and admission processing service. We provide discovery tools, course listings, tuition estimations, scholarship eligibility assessments, and visa interview training. 
                  </p>
                  <p>
                    <strong>Admissions & Visa Decisions:</strong> Final admission decisions and scholarship awards are made solely by the respective partner colleges and universities. Visa issuance remains strictly within the discretionary authority of sovereign immigration departments and embassies (e.g. US Department of State, UK Visas and Immigration, IRCC Canada). Biddaloi LLC does not guarantee university admission or visa approval.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">3. Student Responsibilities & Document Authenticity</h4>
                  <p>
                    Students and legal guardians are strictly required to submit authentic, verifiable, and accurate academic records, transcripts, English proficiency test scores (IELTS/TOEFL/PTE), and financial documentation. Submission of fraudulent, manipulated, or fabricated documents will result in immediate termination of services, forfeiture of any advisory arrangements, and notification to relevant educational authorities.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">4. Intellectual Property & Digital Tools</h4>
                  <p>
                    All materials, proprietary course guides, the 60 Days IELTS Roadmap, mock interview rubrics, and digital assets published on Biddaloi.com are the exclusive intellectual property of Biddaloi LLC. Unauthorized reproduction, scraping, commercial redistribution, or resale is strictly prohibited.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">5. Limitation of Liability</h4>
                  <p>
                    To the maximum extent permitted by applicable law, Biddaloi LLC and its officers shall not be held liable for indirect, punitive, or consequential damages resulting from university curriculum changes, embassy processing delays, flight schedule alterations, or policy modifications introduced by foreign governments.
                  </p>
                </section>
              </div>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded">
                  Fair & Transparent Guarantee
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1.5">
                  Refund & Cancellation Policy — Biddaloi LLC
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Effective 2026 • Clear standards for student counseling, institutional fees, and retainers
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <section className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <h4 className="font-bold text-emerald-950 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    100% Free Initial Discovery & Profile Review
                  </h4>
                  <p className="text-emerald-900">
                    Biddaloi LLC believes higher education guidance should be accessible to all deserving students. Our initial profile evaluation, university discovery sessions, general eligibility audits, and WhatsApp advisory consultations are <strong>100% free of charge</strong>.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">1. Direct University Application & Processing Fees</h4>
                  <p>
                    Application fees charged directly by partner universities, credential evaluation services (such as WES or ECE), and official testing agencies (such as IDP/British Council IELTS, ETS TOEFL, or Pearson PTE) are paid directly by the applicant to the respective institutions and are non-refundable according to their independent institutional policies.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">2. Advisory Service Packages & Retainers</h4>
                  <p>
                    Where an applicant engages Biddaloi LLC for specialized premium services (e.g. customized SOP drafting, comprehensive financial affidavit attestation coordination, or intensive 1-on-1 embassy mock interview bootcamps):
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                    <li><strong>Before Service Initiation:</strong> 100% refund of the service fee if requested within 48 hours of enrolment prior to documentation assignment.</li>
                    <li><strong>During Active Application Drafting:</strong> 50% refund if requested prior to university submission.</li>
                    <li><strong>After University Dispatch / Offer Letter Issued:</strong> Service fees are non-refundable once the university application file has been officially transmitted to admissions committees.</li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">3. Visa Refusal & Tuition Deposit Protection</h4>
                  <p>
                    In the unfortunate event of an embassy visa refusal, partner universities typically refund student tuition deposits in accordance with their international student refund schedule (subject to nominal administrative fees). Biddaloi LLC counselors actively assist the student in preparing and submitting official refund withdrawal documentation to the university free of charge.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">4. Refund Claim Procedure & Timeline</h4>
                  <p>
                    Eligible refund requests must be submitted in writing via email to <strong>hello@biddaloi.com</strong> with full payment receipts, applicant ID, and banking details. Approved refunds are processed via original payment methods (or official bank transfer) within 7–14 business days.
                  </p>
                </section>
              </div>
            </div>
          )}

          {activeTab === 'sitemap' && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded">
                  Navigational Directory
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1.5">
                  Biddaloi LLC • Complete Site Map
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Explore all study destinations, programs, guides, and corporate resources
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                {/* Column 1: Study Abroad Destinations */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Globe2 className="w-4 h-4 text-blue-600" />
                    <span>Study Destinations</span>
                  </div>
                  <ul className="space-y-2 text-xs">
                    {[
                      { name: 'Study in USA (F-1 Visa & Scholarships)', id: 'usa', slug: 'study-in-usa' },
                      { name: 'Study in United Kingdom (CAS & Graduate Route)', id: 'uk', slug: 'study-in-uk' },
                      { name: 'Study in Canada (Study Permit & PGWP)', id: 'canada', slug: 'study-in-canada' },
                      { name: 'Study in Australia (Subclass 500 Visa)', id: 'australia', slug: 'study-in-australia' },
                      { name: 'Study in Germany (Zero Tuition & APS)', id: 'germany', slug: 'study-in-germany' },
                      { name: 'Study in Ireland (European Tech Hub)', id: 'ireland', slug: 'study-in-ireland' },
                      { name: 'Study in Sweden (Nordic Excellence)', id: 'sweden', slug: 'study-in-sweden' },
                      { name: 'Study in Malaysia (Budget-Friendly)', id: 'malaysia', slug: 'study-in-malaysia' },
                      { name: 'Study in Japan (MEXT & High Tech)', id: 'japan', slug: 'study-in-japan' },
                      { name: 'Study in China (CSC Full Scholarships)', id: 'china', slug: 'study-in-china' },
                      { name: 'Study in India (Top Engineering & Medical)', id: 'india', slug: 'study-in-india' }
                    ].map((dest) => (
                      <li key={dest.id}>
                        <button
                          onClick={() => {
                            onClose();
                            if (onNavigateToCountry) {
                              onNavigateToCountry(dest.slug);
                            } else {
                              window.history.pushState({}, '', `/${dest.slug}`);
                              window.dispatchEvent(new PopStateEvent('popstate'));
                            }
                          }}
                          className="w-full text-left font-medium text-slate-700 hover:text-blue-600 flex items-center justify-between py-1 px-1.5 rounded hover:bg-white transition-colors cursor-pointer"
                        >
                          <span>{dest.name}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Programs & Tools */}
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                      <span>Programs & Student Tools</span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      <li>
                        <button
                          onClick={() => {
                            onClose();
                            if (onNavigateIeltsRoadmap) {
                              onNavigateIeltsRoadmap();
                            } else {
                              window.history.pushState({}, '', '/ielts-roadmap');
                              window.dispatchEvent(new PopStateEvent('popstate'));
                            }
                          }}
                          className="w-full text-left font-medium text-slate-700 hover:text-emerald-600 flex items-center justify-between py-1 px-1.5 rounded hover:bg-white transition-colors cursor-pointer"
                        >
                          <span>60 Days IELTS 7.5+ Roadmap (Free)</span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded">PDF</span>
                        </button>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@Biddaloi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-left font-medium text-slate-700 hover:text-red-600 flex items-center justify-between py-1 px-1.5 rounded hover:bg-white transition-colors cursor-pointer"
                        >
                          <span>Biddaloi YouTube Masterclasses</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            onClose();
                            if (onNavigateBlog) {
                              onNavigateBlog();
                            } else {
                              window.history.pushState({}, '', '/blog');
                              window.dispatchEvent(new PopStateEvent('popstate'));
                            }
                          }}
                          className="w-full text-left font-medium text-slate-700 hover:text-blue-600 flex items-center justify-between py-1 px-1.5 rounded hover:bg-white transition-colors cursor-pointer"
                        >
                          <span>Knowledge Base & Visa Guides</span>
                          <BookOpen className="w-3 h-3 text-slate-400" />
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Corporate & Agency Partnerships */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <Building2 className="w-4 h-4 text-teal-600" />
                      <span>Company & Partnerships</span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      <li>
                        <button
                          onClick={() => {
                            onClose();
                            if (onNavigateAffiliate) {
                              onNavigateAffiliate();
                            } else {
                              window.history.pushState({}, '', '/affiliate');
                              window.dispatchEvent(new PopStateEvent('popstate'));
                            }
                          }}
                          className="w-full text-left font-medium text-slate-700 hover:text-emerald-600 flex items-center justify-between py-1 px-1.5 rounded hover:bg-white transition-colors cursor-pointer"
                        >
                          <span>Affiliate Partner Program ($100–$1,000 USD)</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            onClose();
                            if (onNavigatePartners) {
                              onNavigatePartners();
                            } else {
                              window.history.pushState({}, '', '/partners');
                              window.dispatchEvent(new PopStateEvent('popstate'));
                            }
                          }}
                          className="w-full text-left font-medium text-slate-700 hover:text-teal-600 flex items-center justify-between py-1 px-1.5 rounded hover:bg-white transition-colors cursor-pointer"
                        >
                          <span>B2B Agency & Sub-Agent Desk (Up to 75% Share)</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            onClose();
                            if (onNavigateAbout) {
                              onNavigateAbout();
                            } else {
                              window.history.pushState({}, '', '/about');
                              window.dispatchEvent(new PopStateEvent('popstate'));
                            }
                          }}
                          className="w-full text-left font-medium text-slate-700 hover:text-blue-600 flex items-center justify-between py-1 px-1.5 rounded hover:bg-white transition-colors cursor-pointer"
                        >
                          <span>About Biddaloi LLC & Leadership</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            onClose();
                            if (onNavigateContact) {
                              onNavigateContact();
                            } else {
                              window.history.pushState({}, '', '/contact');
                              window.dispatchEvent(new PopStateEvent('popstate'));
                            }
                          }}
                          className="w-full text-left font-medium text-slate-700 hover:text-blue-600 flex items-center justify-between py-1 px-1.5 rounded hover:bg-white transition-colors cursor-pointer"
                        >
                          <span>Contact Us & Counseling Hub (Rajshahi Office)</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded">
                  Data Security & Privacy
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1.5">
                  Privacy Policy — Biddaloi LLC
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Compliance with data protection standards for international applicants
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <p>
                  Biddaloi LLC respects student confidentiality. We strictly collect academic transcripts, test certificates, contact numbers, and identification documents solely for university admission applications, embassy appointment filings, and scholarship matching.
                </p>
                <p>
                  We never sell, rent, or lease personal student data to external marketing agencies or third-party advertisers. All records are transmitted through encrypted channels directly to authorized university admissions portals.
                </p>
                <p>
                  For data access or deletion requests, contact our privacy compliance desk at <strong>hello@biddaloi.com</strong>.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer info banner */}
        <div className="px-5 sm:px-8 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Biddaloi LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-3 font-semibold text-slate-600">
            <span>House No - 124, Raninagor, Monnafer Mor, Rajshahi</span>
            <span>•</span>
            <a href="mailto:hello@biddaloi.com" className="text-blue-600 hover:underline">
              hello@biddaloi.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
