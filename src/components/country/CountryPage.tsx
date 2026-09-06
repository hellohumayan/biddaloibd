import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { CountryPageData } from '../../types/country';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { MobileStickyBar } from '../MobileStickyBar';
import { CountryHero } from './CountryHero';
import { CountryDetailsSection } from './CountryDetailsSection';
import { CountryWhyChoose } from './CountryWhyChoose';
import { CountryUniversityList } from './CountryUniversityList';
import { CountryDocumentsSection } from './CountryDocumentsSection';
import { CountryVisaSection } from './CountryVisaSection';
import { CountryFaqSection } from './CountryFaqSection';
import { useSiteConfig } from '../../context/SiteConfigContext';

interface CountryPageProps {
  country: CountryPageData;
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectCountrySlug: (slug: string) => void;
  onOpenCounseling: (notes?: string) => void;
  onOpenSearch?: () => void;
  onOpenLogin?: () => void;
  onNavigateAffiliate?: () => void;
  onNavigatePartners?: () => void;
  onNavigateBlog?: (articleId?: string) => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
}

export const CountryPage: React.FC<CountryPageProps> = ({
  country,
  onNavigateHome,
  onNavigateSection,
  onSelectCountrySlug,
  onOpenCounseling,
  onOpenSearch,
  onOpenLogin,
  onNavigateAffiliate,
  onNavigatePartners,
  onNavigateBlog,
  onNavigateAbout,
  onNavigateContact
}) => {
  const { config } = useSiteConfig();

  // Set document title and meta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `Study in ${country.name} from Bangladesh | Universities, Visa & Fees - ${config.branding.brandName}`;
  }, [country, config.branding.brandName]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      
      {/* 1. Header: Exactly identical to the Home Page */}
      <Navbar
        onOpenSearch={onOpenSearch}
        onOpenLogin={onOpenLogin}
        onOpenCounseling={() => (onNavigateContact ? onNavigateContact() : onOpenCounseling(`Direct Application: Study in ${country.name}`))}
        onNavigateSection={onNavigateSection}
        onNavigateToCountry={onSelectCountrySlug}
        onNavigateAffiliate={onNavigateAffiliate}
        onNavigatePartners={onNavigatePartners}
        onNavigateHome={onNavigateHome}
        onNavigateBlog={onNavigateBlog}
        onNavigateAbout={onNavigateAbout}
        onNavigateContact={onNavigateContact}
      />

      {/* Main Content Body */}
      <main className="pt-16 sm:pt-18">
        
        {/* Section 1: Hero section with Student Registration QR Code */}
        <CountryHero 
          country={country} 
          onOpenCounseling={onOpenCounseling}
          onNavigateToSection={scrollToSection}
          onNavigateHome={onNavigateHome}
        />

        {/* Section 2: Country details section (Estimated tuition fee, living expenses, other expense, capital) */}
        <CountryDetailsSection 
          country={country} 
          onOpenCounseling={onOpenCounseling}
        />

        {/* Section 3: Why they select this country & Part-Time Work Rights */}
        <CountryWhyChoose 
          country={country} 
          onOpenCounseling={onOpenCounseling}
        />

        {/* Section 4: University List section */}
        <CountryUniversityList 
          country={country} 
          onOpenCounseling={onOpenCounseling}
        />

        {/* Section 5: Documents for study this country for Bangladeshi students */}
        <CountryDocumentsSection 
          country={country} 
          onOpenCounseling={onOpenCounseling}
        />

        {/* Section 6: Student visa requirement & embassy roadmap section */}
        <CountryVisaSection 
          country={country} 
          onOpenCounseling={onOpenCounseling}
        />

        {/* Section 7: FAQ section */}
        <CountryFaqSection 
          country={country} 
          onOpenCounseling={onOpenCounseling}
        />

        {/* High Conversion Bottom CTA Banner */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Free End-to-End Application & Visa Processing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to Study in {country.name}?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Book a free consultation session with our certified {country.name} counselors at our Dhaka office or online via WhatsApp video call.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenCounseling(`Bottom Banner: Study in ${country.name}`)}
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2 transform active:scale-95"
              >
                <span>Book Free Profile Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateHome}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition-colors"
              >
                Explore Other Countries
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero File Opening Fees</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Scholarship Assessment</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Embassy Mock Interview Prep</span>
              </span>
            </div>

          </div>
        </section>
      </main>

      {/* 2. Footer: Exactly identical to the Home Page */}
      <Footer
        onNavigateSection={onNavigateSection}
        onFilterDestination={(destId) => onSelectCountrySlug(`study-in-${destId}`)}
        onNavigateToCountry={(destId) => onSelectCountrySlug(`study-in-${destId}`)}
        onNavigateToAffiliate={onNavigateAffiliate}
        onNavigateToPartners={onNavigatePartners}
      />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileStickyBar
        onFindCourse={() => onOpenCounseling(`Mobile Bar: Study in ${country.name}`)}
        onTalkCounselor={() => onOpenCounseling(`Mobile Bar: Talk Counselor for ${country.name}`)}
      />

    </div>
  );
};
