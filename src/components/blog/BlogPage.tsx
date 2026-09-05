import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Search, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Tag, 
  TrendingUp, 
  BookOpen, 
  PhoneCall, 
  Calendar,
  Compass
} from 'lucide-react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { MobileStickyBar } from '../MobileStickyBar';

import { resourcesData } from '../../data/resources';
import { ResourceArticle } from '../../types';

import { BlogHero } from './BlogHero';
import { FeaturedArticleBanner } from './FeaturedArticleBanner';
import { BlogCard } from './BlogCard';
import { ArticleDetailView } from './ArticleDetailView';
import { BlogNewsletterCTA } from './BlogNewsletterCTA';

interface BlogPageProps {
  initialArticleId?: string | null;
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigateToCountry: (countryId: string) => void;
  onNavigateToAffiliate?: () => void;
  onNavigateToPartners?: () => void;
  onNavigateIeltsRoadmap?: () => void;
  onOpenCounseling: (notes?: string) => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  initialArticleId,
  onNavigateHome,
  onNavigateSection,
  onNavigateToCountry,
  onNavigateToAffiliate,
  onNavigateToPartners,
  onNavigateIeltsRoadmap,
  onOpenCounseling,
  onOpenSearch,
  onOpenLogin
}) => {
  // Sync page title and meta description
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Study Abroad Blog & Admissions Guides for Bangladeshi Students | Biddaloi';

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    const originalDesc = metaDesc ? metaDesc.content : '';

    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Explore comprehensive study abroad articles, F-1/Canada/UK visa blueprints, scholarship application strategies, and Bangladeshi student banking guides.';

    return () => {
      document.title = originalTitle;
      if (metaDesc) metaDesc.content = originalDesc;
    };
  }, []);

  // Filter & Search State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'readTime'>('newest');

  // Active reading article
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(() => {
    if (initialArticleId) {
      const match = resourcesData.find((a) => a.id === initialArticleId || a.slug === initialArticleId);
      return match || null;
    }
    return null;
  });

  // Sync active article when initialArticleId prop updates
  useEffect(() => {
    if (initialArticleId) {
      const match = resourcesData.find((a) => a.id === initialArticleId || a.slug === initialArticleId);
      if (match) {
        setActiveArticle(match);
      }
    }
  }, [initialArticleId]);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    resourcesData.forEach((a) => set.add(a.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Extract popular tags
  const popularTags = useMemo(() => {
    const tagCount: Record<string, number> = {};
    resourcesData.forEach((a) => {
      a.tags?.forEach((t) => {
        tagCount[t] = (tagCount[t] || 0) + 1;
      });
    });
    return Object.keys(tagCount)
      .sort((a, b) => tagCount[b] - tagCount[a])
      .slice(0, 10);
  }, []);

  // Top featured article for banner
  const featuredArticle = useMemo(() => {
    return resourcesData.find((a) => a.featured) || resourcesData[0];
  }, []);

  // Filtered and sorted articles
  const filteredArticles = useMemo(() => {
    return resourcesData.filter((article) => {
      // Category filter
      if (selectedCategory !== 'All' && article.category !== selectedCategory) {
        return false;
      }

      // Tag filter
      if (selectedTag && (!article.tags || !article.tags.includes(selectedTag))) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = article.title.toLowerCase().includes(q);
        const matchSummary = article.summary.toLowerCase().includes(q);
        const matchCategory = article.category.toLowerCase().includes(q);
        const matchTags = article.tags?.some((t) => t.toLowerCase().includes(q));
        const matchContent = article.featuredContent.toLowerCase().includes(q);
        return matchTitle || matchSummary || matchCategory || matchTags || matchContent;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popular') {
        return (b.views || 0) - (a.views || 0);
      }
      if (sortBy === 'readTime') {
        const timeA = parseInt(a.readTime, 10) || 0;
        const timeB = parseInt(b.readTime, 10) || 0;
        return timeA - timeB;
      }
      // 'newest' default
      return 0;
    });
  }, [selectedCategory, selectedTag, searchQuery, sortBy]);

  // Handle article selection
  const handleSelectArticle = useCallback((article: ResourceArticle) => {
    setActiveArticle(article);
    if (
      article.slug === 'study-in-india-from-bangladesh-guide' || 
      article.id === 'study-in-india-guide-2026'
    ) {
      window.history.pushState({}, '', '/study-in-india-from-bangladesh-guide');
    } else {
      window.history.pushState({}, '', `/blog?article=${article.slug || article.id}`);
    }
  }, []);

  // Handle back to all articles
  const handleBackToArticles = useCallback(() => {
    setActiveArticle(null);
    window.history.pushState({}, '', '/blog');
  }, []);

  // Reset filters
  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTag(null);
    setSearchQuery('');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      
      {/* 1. Header & Navigation (Unchanged from existing website) */}
      <Navbar
        onOpenSearch={onOpenSearch}
        onOpenLogin={onOpenLogin}
        onOpenCounseling={() => onOpenCounseling('Blog Visitor Consultation')}
        onNavigateSection={onNavigateSection}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateAffiliate={onNavigateToAffiliate}
        onNavigatePartners={onNavigateToPartners}
      />

      {/* Main Body */}
      <main className="pt-16 sm:pt-20">
        
        {activeArticle ? (
          /* Single Article Detail View */
          <ArticleDetailView
            article={activeArticle}
            allArticles={resourcesData}
            onBack={handleBackToArticles}
            onSelectArticle={handleSelectArticle}
            onOpenCounseling={onOpenCounseling}
            onNavigateIeltsRoadmap={onNavigateIeltsRoadmap}
          />
        ) : (
          /* All Articles Archive / Discovery View */
          <>
            {/* 1. Hero Section */}
            <BlogHero
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              totalArticlesCount={resourcesData.length}
            />

            {/* 2. Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
              
              {/* Category Filter Pills (Horizontal Scrollable on Mobile) */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-slate-200/80">
                {categories.map((cat) => {
                  const count = cat === 'All' 
                    ? resourcesData.length 
                    : resourcesData.filter((a) => a.category === cat).length;
                  const isSelected = selectedCategory === cat;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSelectedTag(null);
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all border ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                          isSelected
                            ? 'bg-blue-700/90 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Editorial Featured Article (Shown when on "All" tab and no active search) */}
              {selectedCategory === 'All' && !selectedTag && !searchQuery && featuredArticle && (
                <FeaturedArticleBanner
                  article={featuredArticle}
                  onReadArticle={handleSelectArticle}
                />
              )}

              {/* Grid + Sidebar Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                
                {/* Left: Articles Grid (8 Cols) */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Results Count & Sort Bar */}
                  <div className="flex items-center justify-between gap-4 pb-2">
                    <div className="text-left">
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                        <span>
                          {selectedTag 
                            ? `Articles tagged with #${selectedTag}` 
                            : selectedCategory === 'All' 
                            ? 'All Admissions Articles' 
                            : `${selectedCategory} Articles`}
                        </span>
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                          {filteredArticles.length}
                        </span>
                      </h2>
                      {selectedTag && (
                        <button
                          type="button"
                          onClick={() => setSelectedTag(null)}
                          className="text-xs text-blue-600 hover:underline mt-0.5 block"
                        >
                          ✕ Remove tag filter
                        </button>
                      )}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-bold text-slate-400 hidden sm:inline">Sort:</span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 focus:outline-none focus:border-blue-500 shadow-2xs"
                      >
                        <option value="newest">Newest First</option>
                        <option value="popular">Most Popular</option>
                        <option value="readTime">Shortest Read</option>
                      </select>
                    </div>
                  </div>

                  {/* Empty State */}
                  {filteredArticles.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3 shadow-2xs">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                        <Search className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800">
                        No articles found
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        We couldn't find any articles matching your search criteria. Try different keywords or clear your active filters.
                      </p>
                      <button
                        type="button"
                        onClick={handleClearFilters}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  ) : (
                    /* 2-Column Grid of Blog Cards */
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      {filteredArticles.map((article) => (
                        <BlogCard
                          key={article.id}
                          article={article}
                          onReadArticle={handleSelectArticle}
                        />
                      ))}
                    </div>
                  )}

                </div>

                {/* Right: Sticky Sidebar (4 Cols) */}
                <div className="lg:col-span-4 space-y-6 text-left">
                  
                  {/* Sidebar Card 1: 1-on-1 Profile Assessment CTA */}
                  <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-6 shadow-md relative overflow-hidden border border-blue-800/80">
                    <div className="relative z-10 space-y-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-300 bg-blue-800/60 px-2.5 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        Free Profile Evaluation
                      </span>
                      <h3 className="text-lg font-black text-white leading-snug">
                        Ready to Begin Your Study Abroad Journey?
                      </h3>
                      <p className="text-xs text-blue-200 leading-relaxed">
                        Talk directly to our experienced admission counselors for university selection, scholarship strategy, and visa filing.
                      </p>
                      <button
                        type="button"
                        onClick={() => onOpenCounseling('Sidebar Blog Consultation')}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>Book Free Counseling</span>
                      </button>
                    </div>
                  </div>

                  {/* Sidebar Card 2: 60 Days IELTS Roadmap Widget */}
                  {onNavigateIeltsRoadmap && (
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:border-blue-300 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Interactive Tool</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1.5">
                        ৬০ দিনে IELTS প্রস্তুতির সম্পূর্ণ Roadmap
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        প্রতিদিনের রিডিং, রাইটিং, লিসেনিং ও স্পিকিং টাস্ক ট্র্যাক করে Band 7.5+ অর্জনের ফ্রি ইন্টারেক্টিভ গাইড।
                      </p>
                      <button
                        type="button"
                        onClick={onNavigateIeltsRoadmap}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition-colors"
                      >
                        <span>Start IELTS Roadmap</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Sidebar Card 3: Popular Tags Cloud */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      <Tag className="w-3.5 h-3.5 text-blue-600" />
                      <span>Popular Topics</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {popularTags.map((tag) => {
                        const isTagActive = selectedTag === tag;
                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => {
                              setSelectedTag(isTagActive ? null : tag);
                            }}
                            className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                              isTagActive
                                ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                          >
                            #{tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sidebar Card 4: Top Destination Guides */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                      <Compass className="w-3.5 h-3.5 text-blue-600" />
                      <span>Destination Guides</span>
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      {[
                        { name: 'Study in USA Guide', id: 'usa' },
                        { name: 'Study in Canada Guide', id: 'canada' },
                        { name: 'Study in UK Guide', id: 'uk' },
                        { name: 'Study in Australia Guide', id: 'australia' },
                        { name: 'Study in Germany Guide', id: 'germany' },
                      ].map((item) => (
                        <li key={item.id}>
                          <button
                            type="button"
                            onClick={() => onNavigateToCountry(item.id)}
                            className="w-full flex items-center justify-between text-left p-1.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
                          >
                            <span>{item.name}</span>
                            <ArrowRight className="w-3 h-3 text-slate-400" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

            </div>

            {/* 3. Newsletter Section */}
            <BlogNewsletterCTA />
          </>
        )}

      </main>

      {/* Footer (Unchanged from existing website) */}
      <Footer
        onNavigateSection={onNavigateSection}
        onFilterDestination={onNavigateToCountry}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateToAffiliate={onNavigateToAffiliate}
        onNavigateToPartners={onNavigateToPartners}
        onOpenCounseling={() => onOpenCounseling('Blog Footer Inquiry')}
      />

      {/* Mobile Sticky Bar (Unchanged from existing website) */}
      <MobileStickyBar
        onFindCourse={() => onOpenCounseling('Find Courses from Blog')}
        onTalkCounselor={() => onOpenCounseling('Talk with Counselor from Blog')}
      />

    </div>
  );
};
