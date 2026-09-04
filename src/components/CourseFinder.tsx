import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  Award, 
  Calendar, 
  Clock, 
  DollarSign, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ChevronDown,
  Globe,
  SlidersHorizontal,
  X,
  ShieldCheck
} from 'lucide-react';
import { Course } from '../types';
import { coursesData } from '../data/courses';

interface CourseFinderProps {
  selectedDestination: string;
  onDestinationChange: (dest: string) => void;
  onViewCourse: (course: Course) => void;
  onCheckEligibility: (course: Course) => void;
}

export const CourseFinder: React.FC<CourseFinderProps> = ({
  selectedDestination,
  onDestinationChange,
  onViewCourse,
  onCheckEligibility
}) => {
  const [level, setLevel] = useState<string>('all');
  const [subject, setSubject] = useState<string>('all');
  const [intake, setIntake] = useState<string>('all');
  const [budget, setBudget] = useState<string>('all');
  const [englishTest, setEnglishTest] = useState<string>('all');
  const [scholarshipOnly, setScholarshipOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currencyMode, setCurrencyMode] = useState<'USD' | 'BDT'>('USD');
  const [sortBy, setSortBy] = useState<'recommended' | 'tuition-asc' | 'tuition-desc' | 'scholarship'>('recommended');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);

  // Quick destinations list
  const quickDestinations = [
    { id: 'all', label: 'All Destinations', flag: '🌍' },
    { id: 'usa', label: 'USA', flag: '🇺🇸' },
    { id: 'canada', label: 'Canada', flag: '🇨🇦' },
    { id: 'uk', label: 'United Kingdom', flag: '🇬🇧' },
    { id: 'australia', label: 'Australia', flag: '🇦🇺' },
    { id: 'germany', label: 'Germany', flag: '🇩🇪' },
    { id: 'malaysia', label: 'Malaysia', flag: '🇲🇾' },
    { id: 'uae', label: 'UAE', flag: '🇦🇪' }
  ];

  // Filter & Sort logic
  const filteredCourses = useMemo(() => {
    let result = coursesData.filter((course) => {
      // Destination
      if (selectedDestination !== 'all' && course.destinationId !== selectedDestination) {
        return false;
      }
      // Level
      if (level !== 'all' && course.level !== level) {
        return false;
      }
      // Subject
      if (subject !== 'all' && course.category !== subject) {
        return false;
      }
      // Intake
      if (intake !== 'all' && !course.intake.toLowerCase().includes(intake.toLowerCase())) {
        return false;
      }
      // Budget
      if (budget === 'under15k' && course.tuitionUsd > 15000) return false;
      if (budget === '15k-25k' && (course.tuitionUsd < 15000 || course.tuitionUsd > 25000)) return false;
      if (budget === 'above25k' && course.tuitionUsd < 25000) return false;

      // English Test
      if (englishTest === 'moi' && !course.englishRequirement.toLowerCase().includes('moi')) {
        return false;
      }
      if (englishTest === 'duolingo' && !course.englishRequirement.toLowerCase().includes('duolingo')) {
        return false;
      }

      // Scholarship
      if (scholarshipOnly && course.scholarshipPercentMax < 25) {
        return false;
      }

      // Search text
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = course.title.toLowerCase().includes(q);
        const matchUni = course.universityName.toLowerCase().includes(q);
        const matchCountry = course.country.toLowerCase().includes(q);
        const matchCategory = course.category.toLowerCase().includes(q);
        if (!matchTitle && !matchUni && !matchCountry && !matchCategory) return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'tuition-asc') {
      result = [...result].sort((a, b) => a.tuitionUsd - b.tuitionUsd);
    } else if (sortBy === 'tuition-desc') {
      result = [...result].sort((a, b) => b.tuitionUsd - a.tuitionUsd);
    } else if (sortBy === 'scholarship') {
      result = [...result].sort((a, b) => b.scholarshipPercentMax - a.scholarshipPercentMax);
    }

    return result;
  }, [selectedDestination, level, subject, intake, budget, englishTest, scholarshipOnly, searchQuery, sortBy]);

  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 6);

  const handleResetFilters = () => {
    onDestinationChange('all');
    setLevel('all');
    setSubject('all');
    setIntake('all');
    setBudget('all');
    setEnglishTest('all');
    setScholarshipOnly(false);
    setSearchQuery('');
    setSortBy('recommended');
  };

  const activeFiltersCount = 
    (selectedDestination !== 'all' ? 1 : 0) +
    (level !== 'all' ? 1 : 0) +
    (subject !== 'all' ? 1 : 0) +
    (intake !== 'all' ? 1 : 0) +
    (budget !== 'all' ? 1 : 0) +
    (englishTest !== 'all' ? 1 : 0) +
    (scholarshipOnly ? 1 : 0) +
    (searchQuery.trim() !== '' ? 1 : 0);

  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFD] relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Course Finder for Bangladeshi Students</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Your Program & Check Eligibility
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Filter 1,000+ verified undergraduate & postgraduate degrees by country, IELTS requirement, and guaranteed tuition waivers.
          </p>
        </div>

        {/* QUICK DESTINATION TABS BAR */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {quickDestinations.map((dest) => {
            const isActive = selectedDestination === dest.id;
            return (
              <button
                key={dest.id}
                type="button"
                onClick={() => onDestinationChange(dest.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs'
                }`}
              >
                <span>{dest.flag}</span>
                <span>{dest.label}</span>
              </button>
            );
          })}
        </div>

        {/* INTERACTIVE SEARCH & CONTROL BAR */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-200/80 p-4 sm:p-6 mb-8">
          
          {/* Top Search, Mobile Filter Toggle, Currency & Sort */}
          <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between pb-4 border-b border-slate-100">
            
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-blue-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search degree, subject, or university (e.g. Master in Computing, Cyber Security, Texas)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Controls Right: Currency Toggle, Sort, Mobile Filter Button */}
            <div className="flex items-center justify-between sm:justify-end gap-2.5 flex-wrap">
              
              {/* Mobile Filter Button */}
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
                <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-1.5">
                <span className="hidden sm:inline text-xs font-semibold text-slate-500">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort courses"
                  className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="recommended">⭐ Recommended</option>
                  <option value="tuition-asc">Tuition: Low to High</option>
                  <option value="tuition-desc">Tuition: High to Low</option>
                  <option value="scholarship">Highest Scholarship</option>
                </select>
              </div>

              {/* Currency Mode (USD vs BDT) */}
              <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setCurrencyMode('USD')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                    currencyMode === 'USD'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrencyMode('BDT')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                    currencyMode === 'BDT'
                      ? 'bg-white text-emerald-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  BDT (৳)
                </button>
              </div>

            </div>

          </div>

          {/* EXPANDABLE FILTER GRID (Always open on lg+, toggled on mobile) */}
          <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block pt-4 space-y-4`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              
              {/* 1. Study Destination */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  Study Destination
                </label>
                <select
                  value={selectedDestination}
                  onChange={(e) => onDestinationChange(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">🌍 All Destinations</option>
                  <option value="usa">🇺🇸 United States</option>
                  <option value="canada">🇨🇦 Canada</option>
                  <option value="uk">🇬🇧 United Kingdom</option>
                  <option value="australia">🇦🇺 Australia</option>
                  <option value="germany">🇩🇪 Germany & Europe</option>
                  <option value="malaysia">🇲🇾 Malaysia</option>
                  <option value="uae">🇦🇪 United Arab Emirates</option>
                  <option value="india">🇮🇳 India</option>
                </select>
              </div>

              {/* 2. Study Level */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                  Degree Level
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">🎓 All Levels</option>
                  <option value="Master's">Master's Degree</option>
                  <option value="Bachelor's">Bachelor's Degree</option>
                  <option value="PhD">PhD / Research</option>
                  <option value="Foundation / Diploma">Foundation / Diploma</option>
                </select>
              </div>

              {/* 3. Subject / Field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  Subject Discipline
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">📚 All Subjects</option>
                  <option value="Computer Science & AI">Computer Science & AI</option>
                  <option value="Business & Management">Business & Management</option>
                  <option value="Data Science">Data Science & Analytics</option>
                  <option value="Engineering">Engineering & Tech</option>
                  <option value="Public Health & Medicine">Healthcare & Medicine</option>
                </select>
              </div>

              {/* 4. Intake Season */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  Target Intake
                </label>
                <select
                  value={intake}
                  onChange={(e) => setIntake(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">🗓️ Any Intake</option>
                  <option value="Fall">Fall 2025 (Sept / Oct)</option>
                  <option value="Spring">Spring 2026 (Jan / Feb)</option>
                  <option value="Summer">Summer 2026 (May / July)</option>
                </select>
              </div>

              {/* 5. Tuition Budget */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                  Budget Range
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">💰 Any Tuition</option>
                  <option value="under15k">Under $15,000 / yr (&lt;৳18 Lakh)</option>
                  <option value="15k-25k">$15,000 - $25,000 / yr (৳18L - ৳30L)</option>
                  <option value="above25k">$25,000+ / yr (&gt;৳30 Lakh)</option>
                </select>
              </div>

              {/* 6. English Test Preference */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  English Test
                </label>
                <select
                  value={englishTest}
                  onChange={(e) => setEnglishTest(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Requirements</option>
                  <option value="duolingo">Accepts Duolingo (DET)</option>
                  <option value="moi">Without IELTS (MOI Accepted)</option>
                </select>
              </div>

              {/* 7. High Scholarship Toggle */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  Scholarship
                </label>
                <label className="flex items-center gap-2.5 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={scholarshipOnly}
                    onChange={(e) => setScholarshipOnly(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <span className="text-xs font-bold text-slate-800">25%+ Waiver Only</span>
                </label>
              </div>

              {/* 8. Reset Action */}
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  disabled={activeFiltersCount === 0}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeFiltersCount > 0
                      ? 'bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200'
                      : 'bg-slate-50 text-slate-400 cursor-not-allowed border border-slate-100'
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              </div>

            </div>
          </div>

          {/* ACTIVE FILTER TAGS & RESULT COUNT */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md">
                {filteredCourses.length} Programs Found
              </span>
              <span className="text-slate-400">matching your criteria</span>
            </div>

            {activeFiltersCount > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                {selectedDestination !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700">
                    {selectedDestination.toUpperCase()}
                    <X className="w-3 h-3 cursor-pointer hover:text-red-600" onClick={() => onDestinationChange('all')} />
                  </span>
                )}
                {level !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700">
                    {level}
                    <X className="w-3 h-3 cursor-pointer hover:text-red-600" onClick={() => setLevel('all')} />
                  </span>
                )}
                {subject !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700">
                    {subject}
                    <X className="w-3 h-3 cursor-pointer hover:text-red-600" onClick={() => setSubject('all')} />
                  </span>
                )}
                {scholarshipOnly && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 text-[11px] font-medium">
                    25%+ Waiver
                    <X className="w-3 h-3 cursor-pointer hover:text-red-600" onClick={() => setScholarshipOnly(false)} />
                  </span>
                )}
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-blue-600 hover:underline font-bold ml-1"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

        </div>

        {/* SAMPLE PROGRAM CARDS GRID */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto shadow-sm">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching programs found</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
              Try adjusting your tuition budget, destination, or study level filters to see more results.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md hover:bg-blue-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Card Top Section */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  
                  {/* Uni Logo, Name & Verified Partner */}
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-11 h-11 rounded-xl overflow-hidden bg-white border border-slate-200/80 flex-shrink-0 p-1 flex items-center justify-center shadow-2xs">
                        <img
                          src={course.universityLogo}
                          alt={course.universityName}
                          className="w-full h-full object-cover rounded-lg"
                          loading="lazy"
                          decoding="async"
                          width="44"
                          height="44"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <h4 className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                            {course.universityName}
                          </h4>
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" title="Verified University Partner" />
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                          <span>{course.flag}</span>
                          <span>{course.country}</span>
                        </div>
                      </div>
                    </div>

                    {/* Level Pill */}
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] border border-blue-100/80 flex-shrink-0">
                      {course.level}
                    </span>
                  </div>

                  {/* Course Title */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {course.overview}
                    </p>
                  </div>

                  {/* Program Meta Specs */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{course.intake}</span>
                    </div>
                  </div>

                  {/* Tuition Fee & Scholarship Box */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 space-y-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Tuition Fee:</span>
                      <span className="text-sm font-extrabold text-slate-900">
                        {currencyMode === 'USD' 
                          ? `$${course.tuitionUsd.toLocaleString()} / yr`
                          : course.tuitionBdt
                        }
                      </span>
                    </div>

                    {/* Scholarship Badge */}
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-bold bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200/80">
                      <Award className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{course.scholarshipAvailable}</span>
                    </div>
                  </div>

                  {/* English Requirement & BD Admission Tip */}
                  <div className="text-[11px] text-slate-600 flex items-center justify-between gap-1 pt-0.5">
                    <span className="font-semibold text-slate-700">English:</span>
                    <span className="text-slate-600 font-medium truncate text-right">{course.englishRequirement}</span>
                  </div>

                </div>

                {/* Card Action Buttons */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onViewCourse(course)}
                    className="py-2.5 px-3 rounded-xl border border-slate-200 hover:border-blue-500 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-bold transition-all text-center"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onCheckEligibility(course)}
                    className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs shadow-blue-500/20 transition-all text-center flex items-center justify-center gap-1"
                  >
                    <span>Check Eligibility</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* View All Courses CTA */}
        {filteredCourses.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-blue-600 hover:border-blue-500 font-bold text-sm shadow-xs transition-all"
            >
              <span>{showAll ? 'Show Fewer Programs' : `View All ${filteredCourses.length} Programs`}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

