import React, { useState } from 'react';
import { 
  Globe2, 
  Building2, 
  Briefcase, 
  GraduationCap, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Info,
  X
} from 'lucide-react';
import { destinationsData } from '../data/destinations';
import { Destination } from '../types';
import { useSiteConfig } from '../context/SiteConfigContext';

interface ConnectedCountriesProps {
  onSelectCountry: (countryId: string) => void;
  onOpenCounseling: (countryId?: string) => void;
  onNavigateToCountry?: (countryId: string) => void;
}

export const ConnectedCountries: React.FC<ConnectedCountriesProps> = ({
  onSelectCountry,
  onOpenCounseling,
  onNavigateToCountry
}) => {
  const { config } = useSiteConfig();
  const countriesConfig = config.countries;
  const countriesList = countriesConfig.items?.length ? countriesConfig.items : destinationsData;
  const [activeQuickFactCountry, setActiveQuickFactCountry] = useState<Destination | null>(null);

  return (
    <section id="countries" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-20 relative">
      <span id="destinations" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left Aligned */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <Globe2 className="w-4 h-4 text-blue-600" />
            <span>{countriesConfig.badge || 'Global Institutional Network'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {countriesConfig.title || 'Countries We Are Connected With'}
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            {countriesConfig.description}
          </p>
        </div>

        {/* Country Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countriesList.map((country) => (
            <div
              key={country.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Header with Country Flag Image & Badges */}
                <div className="relative h-44 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={country.flagImage || country.heroImage}
                    alt={`${country.name} Flag`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Partner Count Badge */}
                  <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-xs flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{country.universityCount}+ Unis</span>
                  </div>

                  {/* Country Name at Bottom of Image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-sm flex items-center justify-between">
                      <span>{country.name}</span>
                    </h3>
                  </div>
                </div>

                {/* Country Details Body */}
                <div className="p-4 space-y-3.5">
                  {/* Key Advantage / Work Permit Tag */}
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-blue-50/70 border border-blue-100/80 text-xs text-blue-900 font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span className="truncate">{country.workPermit}</span>
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {country.shortDesc}
                  </p>

                  {/* Tuition & Living Spec */}
                  <div className="pt-1 grid grid-cols-2 gap-2 text-xs border-t border-slate-100">
                    <div className="bg-slate-50 p-2 rounded-lg">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Avg. Tuition</span>
                      <span className="font-semibold text-slate-800 truncate block">{country.avgTuition}</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Living Cost</span>
                      <span className="font-semibold text-slate-800 truncate block">{country.avgLiving}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-2 bg-slate-50/60 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`/study-in-${country.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToCountry) {
                      onNavigateToCountry(country.id);
                    } else {
                      onSelectCountry(country.id);
                    }
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 group/btn"
                >
                  <span>Study in {country.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveQuickFactCountry(country)}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-white text-slate-600 hover:text-slate-900 transition-colors"
                  title="Quick View"
                >
                  <Info className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Expert Counselor Connection */}
        <div className="mt-12 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold">Unsure which country suits your GPA & budget?</h4>
              <p className="text-blue-100 text-xs sm:text-sm mt-0.5">
                Our certified senior counselors will compare visa probability, IELTS criteria, and tuition fees for you.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenCounseling()}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-blue-900 font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-blue-700" />
            <span>Talk With Expert</span>
          </button>
        </div>

      </div>

      {/* Country Quick Fact Sheet Modal */}
      {activeQuickFactCountry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div 
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-32 bg-slate-900 overflow-hidden">
              <img
                src={activeQuickFactCountry.flagImage || activeQuickFactCountry.heroImage}
                alt={`${activeQuickFactCountry.name} Flag`}
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <button
                onClick={() => setActiveQuickFactCountry(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                <span className="text-2xl">{activeQuickFactCountry.flag}</span>
                <div>
                  <h4 className="text-lg font-bold">{activeQuickFactCountry.name}</h4>
                  <p className="text-xs text-blue-200">{activeQuickFactCountry.universityCount}+ Connected Institutions</p>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Why Study in {activeQuickFactCountry.name}
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeQuickFactCountry.shortDesc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Post-Study Work</span>
                  <span className="font-bold text-slate-800 text-sm mt-0.5 block">{activeQuickFactCountry.workPermit}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Annual Tuition</span>
                  <span className="font-bold text-slate-800 text-sm mt-0.5 block">{activeQuickFactCountry.avgTuition}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-1">High-Demand Programs:</span>
                <p className="text-xs font-medium text-slate-800 bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
                  {activeQuickFactCountry.popularFor}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-1.5">Top Represented Institutions:</span>
                <div className="space-y-1">
                  {activeQuickFactCountry.featuredUnis.map((uni, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{uni}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`/study-in-${activeQuickFactCountry.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const cid = activeQuickFactCountry.id;
                    setActiveQuickFactCountry(null);
                    if (onNavigateToCountry) {
                      onNavigateToCountry(cid);
                    }
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Full {activeQuickFactCountry.name} Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => {
                    const countryId = activeQuickFactCountry.id;
                    setActiveQuickFactCountry(null);
                    onOpenCounseling(countryId);
                  }}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  <span>Quick Apply</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
