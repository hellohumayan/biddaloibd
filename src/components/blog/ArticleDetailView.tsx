import React, { useState, useEffect } from 'react';
import { 
  Share2, 
  Check, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight, 
  PhoneCall, 
  ListOrdered,
  CheckCheck,
  ExternalLink,
  HelpCircle,
  PlayCircle
} from 'lucide-react';
import { ResourceArticle } from '../../types';

interface ArticleDetailViewProps {
  article: ResourceArticle;
  allArticles: ResourceArticle[];
  onBack: () => void;
  onSelectArticle: (article: ResourceArticle) => void;
  onOpenCounseling: (notes?: string) => void;
  onNavigateIeltsRoadmap?: () => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  article,
  allArticles,
  onBack,
  onSelectArticle,
  onOpenCounseling,
  onNavigateIeltsRoadmap
}) => {
  const [copied, setCopied] = useState(false);

  // Scroll to top on article open and update document title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const originalTitle = document.title;
    document.title = `${article.title} | Biddaloi`;
    return () => {
      document.title = originalTitle;
    };
  }, [article.id, article.title]);

  const getArticleUrl = () => {
    if (
      article.slug === 'study-in-india-from-bangladesh-guide' ||
      article.id === 'study-in-india-guide-2026'
    ) {
      return `${window.location.origin}/study-in-india-from-bangladesh-guide`;
    }
    return window.location.href;
  };

  const handleCopyLink = () => {
    const url = getArticleUrl();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareSocial = (platform: 'whatsapp' | 'facebook' | 'linkedin') => {
    const url = encodeURIComponent(getArticleUrl());
    const title = encodeURIComponent(article.title);
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  // Related articles from same category or fallback
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .sort((a, b) => (a.category === article.category ? -1 : 1))
    .slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto text-left py-8 sm:py-12 px-4 sm:px-6">
      
      {/* Main H1 Headline */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight">
          {article.title}
        </h1>
      </div>

      {/* Hero Thumbnail Image */}
      <div className="relative rounded-3xl overflow-hidden mb-8 border border-slate-200/80 shadow-md max-h-[440px] bg-slate-100">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Executive Summary Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-slate-800 mb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-extrabold text-blue-900 uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span>Executive Summary</span>
        </div>
        <p className="text-sm sm:text-base font-medium leading-relaxed text-blue-950">
          {article.summary}
        </p>
      </div>

      {/* Key Takeaways Box (if present) */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-amber-200/80 shadow-2xs mb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-800 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Key Takeaways for Applicants</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Table of Contents (if provided) */}
      {article.toc && article.toc.length > 0 && (
        <nav className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 mb-8 space-y-3" aria-label="সূচিপত্র">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
            <ListOrdered className="w-4 h-4 text-emerald-700" />
            <span>এই গাইডে যা যা আছে (সূচিপত্র)</span>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-semibold text-slate-700 list-none pl-0">
            {article.toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-emerald-800 hover:text-emerald-950 hover:underline flex items-center gap-1.5 py-0.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Article Body Content */}
      <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
        
        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium bg-slate-50/70 p-5 rounded-2xl border border-slate-200/70">
          {article.featuredContent}
        </p>

        {/* Detailed Sections */}
        {article.sections && article.sections.map((section, idx) => (
          <section key={idx} id={section.id} className="space-y-4 pt-2 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug flex items-center gap-2">
              <span>{section.heading}</span>
            </h2>
            
            {section.content && (
              <p className="leading-relaxed text-slate-700 font-normal">
                {section.content}
              </p>
            )}

            {/* Checklist items */}
            {section.checklist && section.checklist.length > 0 && (
              <ul className="space-y-2.5 my-3 pl-1 text-xs sm:text-sm text-slate-800">
                {section.checklist.map((cItem, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5">
                    <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{cItem}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Regular Bullet points */}
            {section.points && section.points.length > 0 && (
              <ul className="space-y-2 pl-2 sm:pl-4 pt-1 text-xs sm:text-sm text-slate-700">
                {section.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Subsections */}
            {section.subsections && section.subsections.map((sub, sIdx) => (
              <div key={sIdx} className="my-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {sub.subheading}
                </h3>
                {sub.content && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sub.content}
                  </p>
                )}
                {sub.points && (
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-1">
                    {sub.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Steps format */}
            {section.steps && section.steps.length > 0 && (
              <div className="space-y-3.5 my-4">
                {section.steps.map((st, stIdx) => (
                  <div key={stIdx} className="relative bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 pl-14 sm:pl-16 shadow-2xs">
                    <div className="absolute left-3.5 sm:left-4 top-4 sm:top-5 w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-black text-sm shadow-xs">
                      {stIdx + 1}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      {st.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Table */}
            {section.table && (
              <div className="overflow-x-auto my-4 rounded-xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-emerald-800 text-white font-bold">
                      {section.table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3 sm:p-3.5 border-b border-emerald-900">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 sm:p-3.5 border-b border-slate-200 text-slate-800 leading-relaxed font-medium">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Callouts (note / tip) */}
            {section.callouts && section.callouts.map((callout, cIdx) => (
              <div
                key={cIdx}
                className={`p-4 sm:p-4.5 rounded-xl text-xs sm:text-sm my-4 border-l-4 leading-relaxed ${
                  callout.type === 'note'
                    ? 'bg-amber-50/90 border-amber-500 text-amber-950'
                    : 'bg-emerald-50/90 border-emerald-600 text-emerald-950'
                }`}
              >
                {callout.title && <strong className="font-extrabold mr-1.5">{callout.title}</strong>}
                <span>{callout.text}</span>
              </div>
            ))}

            {/* Embedded YouTube Videos */}
            {section.videos && section.videos.map((vid, vIdx) => (
              <div key={vIdx} className="my-6 space-y-2">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-900">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${vid.youtubeId}`}
                    title={vid.title || 'Study abroad video guide'}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                {vid.caption && (
                  <p className="text-xs text-center text-slate-500 font-medium flex items-center justify-center gap-1.5">
                    <PlayCircle className="w-3.5 h-3.5 text-red-600" />
                    <span><strong>ভিডিও:</strong> {vid.caption}</span>
                  </p>
                )}
              </div>
            ))}

          </section>
        ))}

        {/* Action Steps for Students (if present) */}
        {article.actionSteps && article.actionSteps.length > 0 && (
          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 shadow-2xs space-y-3 mt-8">
            <div className="flex items-center gap-2 text-xs font-black text-emerald-900 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Recommended Action Steps for Applicants</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
              {article.actionSteps.map((step, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {sIdx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Interactive FAQ Accordion (if present) */}
        {article.faqs && article.faqs.length > 0 && (
          <div id="faq" className="pt-6 my-8 space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 text-slate-900">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                সাধারণ প্রশ্নোত্তর (FAQ)
              </h2>
            </div>
            <div className="space-y-2.5">
              {article.faqs.map((faq, fIdx) => (
                <details
                  key={fIdx}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 transition-all open:bg-slate-50 open:border-emerald-200 shadow-2xs"
                >
                  <summary className="cursor-pointer font-bold text-sm sm:text-base text-slate-900 list-none flex items-center justify-between gap-3 select-none">
                    <span>{faq.question}</span>
                    <span className="text-emerald-700 font-black text-base group-open:rotate-45 transition-transform shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pl-1 pt-2 border-t border-slate-100">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Custom High-Conversion CTA Banner */}
        {article.customCta ? (
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-xl text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {article.customCta.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              {article.customCta.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenCounseling(`Blog CTA: ${article.title}`)}
                className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                {article.customCta.primaryBtnText}
              </button>
              {article.customCta.secondaryBtnUrl && (
                <a
                  href={article.customCta.secondaryBtnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all inline-flex items-center gap-1.5"
                >
                  <span>{article.customCta.secondaryBtnText || 'YouTube-এ সাবস্ক্রাইব'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ) : (
          /* Default Counseling Banner */
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-300 bg-blue-800/60 px-2.5 py-1 rounded-full border border-blue-700">
                <Sparkles className="w-3 h-3" />
                1-on-1 Profile Assessment
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Need Expert Guidance for Your Study Abroad Application?
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed max-w-xl">
                Biddaloi's certified counselors guide you through university selection, scholarship SOP reviews, and visa documentation with 100% transparency.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenCounseling(`Guide Inquiry: ${article.title}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Free Consultation</span>
                </button>
                {onNavigateIeltsRoadmap && (
                  <button
                    type="button"
                    onClick={onNavigateIeltsRoadmap}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
                  >
                    <span>60 Days IELTS Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Detailed Author Bio Box */}
        {article.author && (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 my-8">
            {article.author.avatar ? (
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-emerald-700 shrink-0"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-emerald-800 text-white font-black flex items-center justify-center text-lg shrink-0 shadow-sm">
                {article.author.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
            )}
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="text-base font-extrabold text-slate-900">{article.author.name}</h4>
                {article.author.youtubeUrl && (
                  <a
                    href={article.author.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-full border border-red-200 transition-colors"
                  >
                    <span>YouTube Channel</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {article.author.bio || article.author.role}
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Tags and Social Share Bar */}
      <div className="pt-8 mt-10 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Tags */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-slate-500 mr-1">Tags:</span>
          {article.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Social Share Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-slate-500 mr-1">Share:</span>
          <button
            type="button"
            onClick={handleCopyLink}
            title="Copy Article Link"
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Copied' : 'Copy Link'}</span>
          </button>
          <button
            type="button"
            onClick={() => handleShareSocial('whatsapp')}
            title="Share on WhatsApp"
            className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs border border-emerald-200 transition-colors cursor-pointer"
          >
            WhatsApp
          </button>
          <button
            type="button"
            onClick={() => handleShareSocial('facebook')}
            title="Share on Facebook"
            className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs border border-blue-200 transition-colors cursor-pointer"
          >
            Facebook
          </button>
          <button
            type="button"
            onClick={() => handleShareSocial('linkedin')}
            title="Share on LinkedIn"
            className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition-colors cursor-pointer"
          >
            LinkedIn
          </button>
        </div>

      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="pt-8 border-t border-slate-200 space-y-6 mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Related Admissions Guides
            </h3>
            <button
              type="button"
              onClick={onBack}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel)}
                className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-32 rounded-xl overflow-hidden mb-3 bg-slate-100">
                    <img
                      src={rel.thumbnail}
                      alt={rel.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-white/90 backdrop-blur-xs rounded text-[9px] font-bold text-blue-700">
                      {rel.category}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 hover:text-blue-600 transition-colors">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{rel.readTime}</span>
                  <span className="text-blue-600 font-bold inline-flex items-center gap-0.5">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </article>
  );
};
