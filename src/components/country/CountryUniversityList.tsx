import React, { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  MapPin, 
  Award, 
  DollarSign, 
  BookOpen, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Calendar
} from 'lucide-react';
import { CountryPageData, UniversityItem } from '../../types/country';

interface CountryUniversityListProps {
  country: CountryPageData;
  onOpenCounseling: (notes?: string) => void;
}

export const CountryUniversityList: React.FC<CountryUniversityListProps> = ({
  country,
  onOpenCounseling
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const universities = country.universities;

  const filteredUnis = universities.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.popularMajors.some(m => m.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="universities" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Institutional Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Top Recognized Universities in {country.name}
            </h2>
            <p className="text-slate-600 mt-2 text-base leading-relaxed">
              Explore partner institutions offering guaranteed scholarship assessments, English waivers, and streamlined admissions for Bangladeshi students.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search university or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredUnis.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Ranking Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 px-2.5 py-1 rounded-lg text-xs font-bold shadow-xs flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>{uni.ranking}</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-xs">
                    {uni.type}
                  </div>

                  {/* University Title & City on overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold leading-snug drop-shadow-sm">
                      {uni.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-200 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>{uni.location}</span>
                    </div>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Tuition & Language Requirements */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Annual Tuition</span>
                      <span className="font-bold text-slate-900 text-sm mt-0.5 block">{uni.estTuition}</span>
                      <span className="text-[10px] text-slate-500 block">{uni.tuitionBdt}</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">English Requirement</span>
                      <span className="font-bold text-slate-900 text-sm mt-0.5 block">IELTS: {uni.ieltsReq}</span>
                      <span className="text-[10px] text-slate-500 block">PTE: {uni.pteReq}</span>
                    </div>
                  </div>

                  {/* Scholarship Pill */}
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-800 text-xs font-medium">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Scholarship Available:</strong> {uni.scholarshipAvailable}
                    </div>
                  </div>

                  {/* Popular Majors */}
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block mb-1.5">Popular In-Demand Programs:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {uni.popularMajors.map((major, i) => (
                        <span key={i} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                          {major}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Intakes */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Intakes: {uni.intakes.join(' • ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <button
                  onClick={() => onOpenCounseling(`Admission Application for ${uni.name} (${country.name})`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply to {uni.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredUnis.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-sm">No universities matched your search query "{searchTerm}".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 text-xs font-bold text-blue-600 hover:underline"
            >
              Clear Search Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
