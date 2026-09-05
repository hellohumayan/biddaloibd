import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  Search, 
  MapPin, 
  Award, 
  Sparkles,
  Calendar,
  LayoutList,
  LayoutGrid,
  ArrowRight,
  Compass,
  X,
  Building2
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
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const universities = country.universities;

  // Extract unique areas from universities
  const availableAreas = useMemo(() => {
    const areaMap = new Map<string, number>();
    
    universities.forEach((uni) => {
      const areaName = uni.area || uni.location.split(',').pop()?.trim() || 'General';
      areaMap.set(areaName, (areaMap.get(areaName) || 0) + 1);
    });

    return Array.from(areaMap.entries()).map(([area, count]) => ({
      area,
      count
    }));
  }, [universities]);

  // Filter universities based on search query and selected area
  const filteredUnis = useMemo(() => {
    return universities.filter(uni => {
      const areaName = uni.area || uni.location.split(',').pop()?.trim() || '';
      const matchesArea = selectedArea === 'all' || areaName.toLowerCase() === selectedArea.toLowerCase();

      const term = searchTerm.toLowerCase();
      const matchesSearch = !searchTerm || (
        uni.name.toLowerCase().includes(term) ||
        uni.location.toLowerCase().includes(term) ||
        (uni.area && uni.area.toLowerCase().includes(term)) ||
        uni.popularMajors.some(m => m.toLowerCase().includes(term)) ||
        uni.ranking.toLowerCase().includes(term)
      );

      return matchesArea && matchesSearch;
    });
  }, [universities, selectedArea, searchTerm]);

  return (
    <section id="universities" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Institutional Directory</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-blue-600 font-semibold">{universities.length} Institutions Listed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recognized University Directory in {country.name}
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Explore partner institutions grouped by geographical area and campus location, offering scholarship assessments, English waivers, and direct admission pathways for Bangladeshi applicants.
            </p>
          </div>

          {/* Search Bar & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search university, area, major..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-2xs transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200 shadow-2xs self-start sm:self-auto">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                title="List View"
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Area / Regional Filter Toolbar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 shrink-0">
              <Compass className="w-4 h-4 text-blue-600" />
              <span>Browse by Area / State:</span>
            </div>

            {/* Area Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedArea('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedArea === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                All Areas ({universities.length})
              </button>

              {availableAreas.map(({ area, count }) => (
                <button
                  key={area}
                  onClick={() => setSelectedArea(area)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedArea.toLowerCase() === area.toLowerCase()
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <MapPin className={`w-3 h-3 ${selectedArea.toLowerCase() === area.toLowerCase() ? 'text-white' : 'text-slate-400'}`} />
                  <span>{area}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedArea.toLowerCase() === area.toLowerCase()
                      ? 'bg-blue-700/60 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Universities Display */}
        {viewMode === 'list' ? (
          /* ============================================================ */
          /* LIST VIEW: Streamlined, high-density, informative directory   */
          /* ============================================================ */
          <div className="space-y-4">
            {filteredUnis.map((uni) => {
              const displayArea = uni.area || uni.location.split(',').pop()?.trim() || uni.location;

              return (
                <div
                  key={uni.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-md transition-all duration-200 p-5 sm:p-6 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    
                    {/* Left: University Profile & Identity */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                      {/* Thumbnail with overlay badge */}
                      <div className="relative w-full sm:w-44 sm:h-32 h-44 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                        <img
                          src={uni.image}
                          alt={uni.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[11px] font-bold">
                          {uni.type}
                        </div>
                      </div>

                      {/* Header details */}
                      <div className="space-y-2.5 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {uni.name}
                          </h3>
                        </div>

                        {/* Badges: Area, Location, Ranking */}
                        <div className="flex flex-wrap items-center gap-2">
                          {/* Dedicated Area Badge */}
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
                            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Area: <strong className="font-extrabold">{displayArea}</strong></span>
                          </span>

                          <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                            <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                            <span>{uni.location}</span>
                          </span>

                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg">
                            <Award className="w-3 h-3 text-amber-600 shrink-0" />
                            <span>{uni.ranking}</span>
                          </span>
                        </div>

                        {/* Popular Majors */}
                        <div className="pt-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1">Majors:</span>
                            {uni.popularMajors.map((major, i) => (
                              <span 
                                key={i} 
                                className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                              >
                                {major}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Intakes */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>Intakes: <strong className="text-slate-700">{uni.intakes.join(' • ')}</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Key Requirements, Tuition, & Action Button */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between gap-4 lg:w-72 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 shrink-0">
                      
                      {/* Metric cards */}
                      <div className="grid grid-cols-2 gap-2 w-full text-xs">
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 text-left">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Tuition / Year</span>
                          <span className="font-bold text-slate-900 block text-xs truncate">{uni.estTuition}</span>
                          <span className="text-[10px] text-slate-500 block truncate">{uni.tuitionBdt}</span>
                        </div>

                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 text-left">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">English Benchmark</span>
                          <span className="font-bold text-slate-900 block text-xs truncate">IELTS: {uni.ieltsReq}</span>
                          <span className="text-[10px] text-slate-500 block truncate">PTE: {uni.pteReq}</span>
                        </div>
                      </div>

                      {/* Scholarship highlight */}
                      <div className="w-full flex items-start gap-1.5 p-2 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-emerald-800 text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight line-clamp-2">
                          <strong>Scholarship:</strong> {uni.scholarshipAvailable}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => onOpenCounseling(`Admission Application for ${uni.name} (${country.name} - ${displayArea})`)}
                        className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Apply to {uni.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ============================================================ */
          /* GRID VIEW: Visual card layout with prominent Area tags        */
          /* ============================================================ */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredUnis.map((uni) => {
              const displayArea = uni.area || uni.location.split(',').pop()?.trim() || uni.location;

              return (
                <div
                  key={uni.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Image Banner */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={uni.image}
                        alt={uni.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <div className="bg-white/95 backdrop-blur-md text-slate-900 px-2.5 py-1 rounded-lg text-xs font-bold shadow-xs flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-amber-500" />
                          <span>{uni.ranking}</span>
                        </div>
                      </div>

                      <div className="absolute top-3 right-3 bg-blue-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-xs">
                        {uni.type}
                      </div>

                      {/* University Title & City & Area on overlay */}
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="inline-flex items-center gap-1 bg-blue-500/90 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[11px] font-bold">
                            <MapPin className="w-3 h-3" />
                            <span>Area: {displayArea}</span>
                          </span>
                        </div>
                        <h3 className="text-lg font-bold leading-snug drop-shadow-sm">
                          {uni.name}
                        </h3>
                        <div className="text-xs text-slate-300 mt-0.5">
                          {uni.location}
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
                      onClick={() => onOpenCounseling(`Admission Application for ${uni.name} (${country.name} - ${displayArea})`)}
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Apply to {uni.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {filteredUnis.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
            <GraduationCap className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-800 font-bold text-sm">No institutions found matching your criteria.</p>
            <p className="text-slate-500 text-xs mt-1">
              Try choosing "All Areas" or clearing your search term.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedArea('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Area Summary info footer */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>
              Covering <strong className="text-slate-800 font-bold">{availableAreas.length} key educational regions</strong> across {country.name}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <span>Official partner universities accredited for Bangladeshi student admissions</span>
          </div>
        </div>

      </div>
    </section>
  );
};
