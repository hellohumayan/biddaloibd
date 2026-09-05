import React from 'react';
import { Clock, Eye, ArrowRight, Sparkles, BookOpen, User } from 'lucide-react';
import { ResourceArticle } from '../../types';

interface FeaturedArticleBannerProps {
  article: ResourceArticle;
  onReadArticle: (article: ResourceArticle) => void;
}

export const FeaturedArticleBanner: React.FC<FeaturedArticleBannerProps> = ({
  article,
  onReadArticle
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mb-10 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left: Thumbnail Image (5 Cols) */}
        <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-slate-100">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-wider text-blue-700 shadow-sm border border-white/60">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Featured Guide</span>
          </div>
        </div>

        {/* Right: Content details (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-left space-y-4">
          
          <div className="space-y-3">
            
            {/* Meta Row: Category, Read time, Date */}
            <div className="flex items-center gap-3 text-xs text-slate-500 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-bold border border-blue-100">
                {article.category}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.readTime}</span>
              </div>
              <span>•</span>
              <span>{article.publishedDate}</span>
              {article.views && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.views.toLocaleString()} reads</span>
                  </div>
                </>
              )}
            </div>

            {/* Title */}
            <h2
              onClick={() => onReadArticle(article)}
              className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer"
            >
              {article.title}
            </h2>

            {/* Summary */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
              {article.summary}
            </p>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                {article.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

          </div>

          {/* Bottom Row: Author & Action Button */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Author */}
            {article.author ? (
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {article.author.name}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {article.author.role}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Biddaloi Admissions Editorial Team</span>
              </div>
            )}

            {/* Read Button */}
            <button
              type="button"
              onClick={() => onReadArticle(article)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all transform group-hover:translate-x-0.5 shrink-0"
            >
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
