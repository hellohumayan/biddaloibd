import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Award, 
  Briefcase, 
  ShieldCheck, 
  QrCode, 
  Sparkles,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { CountryPageData } from '../../types/country';

interface CountryHeroProps {
  country: CountryPageData;
  onOpenCounseling: (notes?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
  onNavigateHome?: () => void;
}

export const CountryHero: React.FC<CountryHeroProps> = ({
  country,
  onOpenCounseling,
  onNavigateToSection,
  onNavigateHome
}) => {
  // Construct registration URL for the QR code
  const registrationUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/study-in-${country.id}#register` 
    : `https://biddaloi.com/study-in-${country.id}`;

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(registrationUrl)}&margin=10&color=1d4ed8`;

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white pt-10 pb-16 lg:pb-20 overflow-hidden">
      {/* Background Ambience & Flag Accent */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: `url(${country.heroImage})` }}
      />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Info Left, QR Registration Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headings, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Country Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold backdrop-blur-md">
              <span className="text-base sm:text-lg">{country.flag}</span>
              <span>Study in {country.name} for Bangladeshi Students (2025/2026)</span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Study In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-sky-400">{country.id === 'usa' ? 'USA' : country.name}</span> From Bangladesh
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {country.tagline}. {country.overview}
              </p>
            </div>

            {/* Key Quick Highlight Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Visa Success</span>
                </div>
                <div className="text-sm font-bold text-white truncate">
                  {country.heroStats.visaSuccessRate}
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-semibold mb-1">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Post-Study Work</span>
                </div>
                <div className="text-sm font-bold text-white truncate">
                  {country.heroStats.postStudyWork}
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Scholarships</span>
                </div>
                <div className="text-sm font-bold text-white truncate">
                  {country.heroStats.scholarshipRange}
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Next Intake</span>
                </div>
                <div className="text-sm font-bold text-white truncate">
                  {country.heroStats.nextMajorIntake}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenCounseling(`Inquiry: Study in ${country.name}`)}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm sm:text-base font-bold shadow-lg shadow-blue-600/30 transition-all transform active:scale-95 flex items-center gap-2"
              >
                <span>Book Free 1-on-1 Counseling</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateToSection('universities')}
                className="px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 text-sm font-bold transition-colors flex items-center gap-2"
              >
                <span>View Universities ({country.universities.length})</span>
              </button>

              <button
                onClick={() => onNavigateToSection('expenses')}
                className="px-4 py-3.5 rounded-xl hover:bg-white/10 text-slate-300 text-xs sm:text-sm font-semibold transition-colors"
              >
                Tuition & Living Costs ↓
              </button>
            </div>
          </div>

          {/* Right Column: Hero QR Code Card for Student Registration */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl text-slate-900 border border-slate-100 relative group overflow-hidden">
              {/* Header inside QR card */}
              <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold mb-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Instant Mobile Registration</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    Scan QR Code to Register
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Free profile evaluation & scholarship screening for {country.name}
                  </p>
                </div>
                
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <QrCode className="w-5 h-5" />
                </div>
              </div>

              {/* Centered QR Code Image Display */}
              <div className="flex flex-col items-center justify-center py-2">
                <button
                  onClick={() => onOpenCounseling(`QR Code Registration for ${country.name}`)}
                  className="relative p-3 bg-white rounded-2xl border-2 border-dashed border-blue-200 hover:border-blue-500 shadow-xs transition-all hover:scale-[1.02] cursor-pointer group/qr"
                  title="Click or scan to open registration"
                >
                  <img
                    src={qrImageUrl}
                    alt={`QR Code to Register for Study in ${country.name}`}
                    className="w-48 h-48 sm:w-52 sm:h-52 object-contain rounded-xl"
                    loading="eager"
                  />
                  
                  {/* Subtle hover overlay indicating clickability */}
                  <div className="absolute inset-0 bg-blue-900/10 rounded-2xl opacity-0 group-hover/qr:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                      <span>Click to Register</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </button>

                <p className="text-[11px] text-slate-400 mt-3 text-center max-w-xs leading-normal">
                  Point your smartphone camera at this QR code to register in 60 seconds, or click directly.
                </p>
              </div>

              {/* Quick direct button under QR code */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenCounseling(`Online Registration: ${country.name}`)}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Register Profile Online Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>100% Free Assessment</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Direct WhatsApp Call</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
