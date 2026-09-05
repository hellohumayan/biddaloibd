import React from 'react';
import { Search, Sparkles, BookOpen, GraduationCap, Compass, CheckCircle2 } from 'lucide-react';

interface BlogHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  totalArticlesCount: number;
}

export const BlogHero: React.FC<BlogHeroProps> = ({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onSelectCategory,
  totalArticlesCount
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F5FF] via-[#F8FAFD] to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/70">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-left space-y-4 sm:space-y-5">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-extrabold text-blue-800 tracking-wide">
              Biddaloi Knowledge Base & Blog
            </span>
            <span className="text-[11px] font-bold text-blue-600 bg-white px-2 py-0.5 rounded-full border border-blue-100">
              {totalArticlesCount} In-Depth Guides
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Study Abroad Blog & <span className="text-blue-600">Admissions Guides</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            In-depth admission roadmaps, US/Canada/UK visa blueprints, scholarship application tactics, and student banking guides written specifically for Bangladeshi students.
          </p>

          {/* Live Search Bar */}
          <div className="pt-2 max-w-xl">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search articles by topic, visa type, country, bank solvency..."
                className="w-full pl-11 pr-24 py-3 bg-white rounded-2xl border border-slate-200 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-100 rounded-lg transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-slate-800">Updated for 2025/2026 Intakes</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-slate-800">Verified by Global Advisors</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span className="font-semibold text-slate-800">100% Free Advice</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
