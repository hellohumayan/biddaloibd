import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { resourcesData } from '../data/resources';
import { ResourceArticle } from '../types';

export const ResourcesSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);

  return (
    <section id="resources" className="py-20 bg-[#F8FAFD] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learn Before You Apply
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            In-depth guides, visa blueprints, and expert admission strategies written specifically for Bangladeshi students.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-extrabold uppercase tracking-wide text-blue-700 shadow-xs">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-44 bg-slate-900 overflow-hidden">
              <img
                src={activeArticle.thumbnail}
                alt={activeArticle.title}
                className="w-full h-full object-cover opacity-60"
              />
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-600 text-white">
                  {activeArticle.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mt-1 text-white leading-tight">
                  {activeArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs font-medium text-blue-900">
                {activeArticle.summary}
              </div>
              <p>{activeArticle.featuredContent}</p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
                Action Steps for Bangladeshi Applicants
              </h4>
              <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5">
                <li>Check university application deadlines early for priority scholarship consideration.</li>
                <li>Ensure passport validity covers at least 6 months beyond intended program completion.</li>
                <li>Maintain clean financial solvency proofs with authentic tax identification numbers (TIN).</li>
                <li>Connect with a dedicated Biddaloi mentor to review your application drafts.</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
