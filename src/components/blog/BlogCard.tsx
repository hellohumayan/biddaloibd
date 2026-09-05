import React, { useState } from 'react';
import { Clock, Eye, ArrowRight, Share2, Check, Bookmark } from 'lucide-react';
import { ResourceArticle } from '../../types';

interface BlogCardProps {
  article: ResourceArticle;
  onReadArticle: (article: ResourceArticle) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  article,
  onReadArticle
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/blog?article=${article.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      onClick={() => onReadArticle(article)}
      className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer text-left"
    >
      <div>
        {/* Thumbnail Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-extrabold uppercase tracking-wide text-blue-700 shadow-2xs border border-white/60">
            {article.category}
          </div>

          {/* Quick Share Icon */}
          <button
            type="button"
            onClick={handleShare}
            title={copied ? 'Link Copied!' : 'Share Article'}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-600 hover:text-blue-600 flex items-center justify-center shadow-xs transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Content Details */}
        <div className="p-5 sm:p-6 space-y-2.5">
          
          {/* Meta Info */}
          <div className="flex items-center gap-2 text-[11px] text-slate-400 flex-wrap">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{article.readTime}</span>
            </div>
            <span>•</span>
            <span>{article.publishedDate}</span>
            {article.views && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3 text-slate-400" />
                  <span>{article.views.toLocaleString()}</span>
                </div>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {article.summary}
          </p>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap pt-1">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Card Footer: Author snippet & Read Button */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-100/80 flex items-center justify-between gap-3">
        {article.author ? (
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-6 h-6 rounded-full object-cover border border-slate-200 shrink-0"
            />
            <span className="text-xs font-semibold text-slate-700 truncate">
              {article.author.name}
            </span>
          </div>
        ) : (
          <span className="text-xs text-slate-400">Biddaloi Guide</span>
        )}

        <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all shrink-0">
          <span>Read Full</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>

    </div>
  );
};
