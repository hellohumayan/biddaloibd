import React, { useState, useEffect, useCallback } from 'react';
import { SiteConfigProvider } from './context/SiteConfigContext';
import { AdminPanel } from './components/admin/AdminPanel';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConnectedCountries } from './components/ConnectedCountries';
import { WhyBiddaloi } from './components/WhyBiddaloi';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

// Modals
import { CounselingModal } from './components/CounselingModal';
import { CourseDetailsModal } from './components/CourseDetailsModal';
import { EligibilityModal } from './components/EligibilityModal';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { LiveClassesModal } from './components/LiveClassesModal';

// Country Page & Data
import { CountryPage } from './components/country/CountryPage';
import { getCountryData } from './data/countryData';

// Affiliate Page
import { AffiliatePage } from './components/affiliate/AffiliatePage';

// Partners Page
import { PartnersPage } from './components/partners/PartnersPage';

// 60 Days IELTS Roadmap Page
import { IeltsRoadmapPage } from './components/ieltsRoadmap/IeltsRoadmapPage';

// Blog Page
import { BlogPage } from './components/blog/BlogPage';
import { resourcesData } from './data/resources';

// About Us Page
import { AboutPage } from './components/about/AboutPage';

// Contact Us Page
import { ContactPage } from './components/contact/ContactPage';

import { Course } from './types';

interface MainWebsiteProps {
  onNavigateToCountry: (countryIdOrSlug: string) => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
  onOpenCounselingWithCountry: (countryId?: string) => void;
  onOpenCounselingWithCourse: (course?: Course) => void;
  onViewCourse: (course: Course) => void;
  onCheckEligibility: (course: Course) => void;
  onWatchVideos: () => void;
  onNavigateAffiliate?: () => void;
  onNavigatePartners?: () => void;
  onNavigateBlog?: (articleId?: string) => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
}

function MainWebsite({ 
  onNavigateToCountry,
  onOpenSearch,
  onOpenLogin,
  onOpenCounselingWithCountry,
  onOpenCounselingWithCourse,
  onViewCourse,
  onCheckEligibility,
  onWatchVideos,
  onNavigateAffiliate,
  onNavigatePartners,
  onNavigateBlog,
  onNavigateAbout,
  onNavigateContact
}: MainWebsiteProps) {
  // Filter state synchronized between sections
  const [selectedDestination, setSelectedDestination] = useState<string>('all');

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    if ((sectionId === 'blog' || sectionId === 'blogs') && onNavigateBlog) {
      onNavigateBlog();
      return;
    }
    if ((sectionId === 'about' || sectionId === 'about-us' || sectionId === 'about-biddaloi') && onNavigateAbout) {
      onNavigateAbout();
      return;
    }
    if ((sectionId === 'contact' || sectionId === 'contact-us') && onNavigateContact) {
      onNavigateContact();
      return;
    }
    const targetId = (sectionId === 'universities' || sectionId === 'courses' || sectionId === 'destinations') ? 'countries' : sectionId;
    const el = document.getElementById(targetId) || document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDestination = (destId: string) => {
    setSelectedDestination(destId);
    onOpenCounselingWithCountry(destId);
  };

  const handleContactAction = () => {
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      onOpenCounselingWithCountry();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      {/* Header & Navigation */}
      <Navbar
        onOpenSearch={onOpenSearch}
        onOpenLogin={onOpenLogin}
        onOpenCounseling={handleContactAction}
        onNavigateSection={scrollToSection}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateAffiliate={onNavigateAffiliate}
        onNavigatePartners={onNavigatePartners}
        onNavigateHome={() => scrollToSection('hero')}
        onNavigateBlog={onNavigateBlog}
        onNavigateAbout={onNavigateAbout}
        onNavigateContact={onNavigateContact}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onFindCourse={handleContactAction}
          onTalkCounselor={handleContactAction}
          onNavigateContact={onNavigateContact}
        />

        {/* 2. Countries We Are Connected With */}
        <ConnectedCountries
          onSelectCountry={(countryId) => handleSelectDestination(countryId)}
          onOpenCounseling={() => handleContactAction()}
          onNavigateToCountry={onNavigateToCountry}
          onNavigateContact={onNavigateContact}
        />

        {/* 3. Why Biddaloi: Benefits & Advantages */}
        <WhyBiddaloi onOpenCounseling={handleContactAction} />

        {/* 4. How It Works: Step-by-Step Road to Abroad */}
        <HowItWorks 
          onStartJourney={handleContactAction} 
          onWatchVideos={onWatchVideos}
        />

        {/* 5. Real Student Testimonials */}
        <TestimonialsSection />

        {/* 6. Educational Resources & Guides */}
        <ResourcesSection onNavigateBlog={onNavigateBlog} />

        {/* 7. Final High-Conversion CTA Banner */}
        <FinalCTA
          onFindCourse={handleContactAction}
          onTalkCounselor={handleContactAction}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onFilterDestination={handleSelectDestination}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateToAffiliate={onNavigateAffiliate}
        onNavigateToPartners={onNavigatePartners}
      />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileStickyBar
        onFindCourse={handleContactAction}
        onTalkCounselor={handleContactAction}
      />
    </div>
  );
}

interface RouteState {
  view: 'home' | 'admin' | 'country' | 'affiliate' | 'partners' | 'ielts-roadmap' | 'blog' | 'about' | 'contact';
  countryParam: string | null;
  articleParam?: string | null;
}

function resolveCurrentRoute(): RouteState {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const hash = window.location.hash.replace(/^#\/?/, '');
  const search = new URLSearchParams(window.location.search);

  // Admin route check: supports /admin, /admin/, #admin, ?admin, ?view=admin
  if (
    path === 'admin' || 
    path.startsWith('admin/') || 
    hash === 'admin' || 
    hash.startsWith('admin/') ||
    search.has('admin') ||
    search.get('view') === 'admin'
  ) {
    return { view: 'admin', countryParam: null };
  }

  // Contact route check: /contact, /contact-us, #contact, #contact-us, ?contact, ?view=contact
  if (
    path === 'contact' ||
    path.startsWith('contact/') ||
    path === 'contact-us' ||
    path.startsWith('contact-us/') ||
    hash === 'contact' ||
    hash === 'contact-us' ||
    hash.startsWith('contact/') ||
    search.has('contact') ||
    search.get('view') === 'contact'
  ) {
    return { view: 'contact', countryParam: null };
  }

  // About route check: /about, /about-us, /about-biddaloi, #about, #about-us, #about-biddaloi, ?about, ?view=about
  if (
    path === 'about' ||
    path.startsWith('about/') ||
    path === 'about-us' ||
    path.startsWith('about-us/') ||
    path === 'about-biddaloi' ||
    path.startsWith('about-biddaloi/') ||
    hash === 'about' ||
    hash === 'about-us' ||
    hash === 'about-biddaloi' ||
    hash.startsWith('about/') ||
    search.has('about') ||
    search.get('view') === 'about'
  ) {
    return { view: 'about', countryParam: null };
  }

  // 60 Days IELTS Roadmap route check: /ielts-roadmap, /roadmap, #ielts-roadmap, #roadmap, ?roadmap, ?ielts-roadmap, ?view=ielts-roadmap, ?view=roadmap
  if (
    path === 'ielts-roadmap' ||
    path.startsWith('ielts-roadmap/') ||
    path === 'roadmap' ||
    path.startsWith('roadmap/') ||
    hash === 'ielts-roadmap' ||
    hash.startsWith('ielts-roadmap/') ||
    hash === 'roadmap' ||
    hash.startsWith('roadmap/') ||
    search.has('ielts-roadmap') ||
    search.has('roadmap') ||
    search.get('view') === 'ielts-roadmap' ||
    search.get('view') === 'roadmap'
  ) {
    return { view: 'ielts-roadmap', countryParam: null };
  }

  // Blog route check: /blog, /blogs, /articles, #blog, #blogs, ?blog, ?blogs, ?view=blog, ?view=blogs
  if (
    path === 'blog' ||
    path.startsWith('blog/') ||
    path === 'blogs' ||
    path.startsWith('blogs/') ||
    path === 'articles' ||
    path.startsWith('articles/') ||
    hash === 'blog' ||
    hash.startsWith('blog/') ||
    hash === 'blogs' ||
    hash.startsWith('blogs/') ||
    search.has('blog') ||
    search.has('blogs') ||
    search.get('view') === 'blog' ||
    search.get('view') === 'blogs'
  ) {
    const article = search.get('article') || (path.startsWith('blog/') ? path.split('/')[1] : null);
    return { view: 'blog', countryParam: null, articleParam: article };
  }

  // Affiliate route check: /affiliate, /affiliate/, #affiliate, ?affiliate, ?view=affiliate
  if (
    path === 'affiliate' ||
    path.startsWith('affiliate/') ||
    hash === 'affiliate' ||
    hash.startsWith('affiliate/') ||
    search.has('affiliate') ||
    search.get('view') === 'affiliate'
  ) {
    return { view: 'affiliate', countryParam: null };
  }

  // Partners route check: /partners, /partner, #partners, ?partners, ?view=partners
  if (
    path === 'partners' ||
    path === 'partner' ||
    path.startsWith('partners/') ||
    path.startsWith('partner/') ||
    hash === 'partners' ||
    hash === 'partner' ||
    hash.startsWith('partners/') ||
    search.has('partners') ||
    search.has('partner') ||
    search.get('view') === 'partners' ||
    search.get('view') === 'partner'
  ) {
    return { view: 'partners', countryParam: null };
  }

  // Direct article route check: e.g. /study-in-india-from-bangladesh-guide
  if (
    path === 'study-in-india-from-bangladesh-guide' ||
    path.startsWith('study-in-india-from-bangladesh-guide/') ||
    hash === 'study-in-india-from-bangladesh-guide' ||
    hash.startsWith('study-in-india-from-bangladesh-guide/') ||
    search.has('study-in-india-from-bangladesh-guide') ||
    search.get('article') === 'study-in-india-from-bangladesh-guide'
  ) {
    return { view: 'blog', countryParam: null, articleParam: 'study-in-india-from-bangladesh-guide' };
  }

  // Any other direct article slug check from resourcesData (before country check)
  const matchedArticle = resourcesData.find(
    (a) => a.slug === path || a.id === path || a.slug === hash || a.id === hash
  );
  if (matchedArticle) {
    return { view: 'blog', countryParam: null, articleParam: matchedArticle.slug || matchedArticle.id };
  }

  // Country route check: /study-in-xyz or #study-in-xyz or ?country=xyz
  if (path.startsWith('study-in-')) {
    return { view: 'country', countryParam: path };
  }
  if (hash.startsWith('study-in-')) {
    return { view: 'country', countryParam: hash };
  }
  if (search.has('country')) {
    const c = search.get('country') || '';
    const slug = c.startsWith('study-in-') ? c : `study-in-${c}`;
    return { view: 'country', countryParam: slug };
  }

  return { view: 'home', countryParam: null };
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => resolveCurrentRoute());

  // Global modal states shared across Home and Country pages
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [counselingDestination, setCounselingDestination] = useState<string>('usa');
  const [counselingCourseTitle, setCounselingCourseTitle] = useState<string>('');

  const [isCourseDetailsOpen, setIsCourseDetailsOpen] = useState(false);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState<Course | null>(null);

  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [selectedCourseEligibility, setSelectedCourseEligibility] = useState<Course | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLiveClassesOpen, setIsLiveClassesOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(resolveCurrentRoute());
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);

    // Keyboard shortcut to toggle admin: Ctrl+Shift+A or Cmd+Shift+A
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setRoute((prev) => {
          if (prev.view === 'admin') {
            window.history.pushState({}, '', '/');
            return { view: 'home', countryParam: null };
          } else {
            window.history.pushState({}, '', '/admin');
            return { view: 'admin', countryParam: null };
          }
        });
      }
      // Quick search shortcut (⌘K / Ctrl+K)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleExitAdmin = useCallback(() => {
    window.history.pushState({}, '', '/');
    setRoute({ view: 'home', countryParam: null });
  }, []);

  const handleNavigateAdmin = useCallback(() => {
    window.history.pushState({}, '', '/admin');
    setRoute({ view: 'admin', countryParam: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateHome = useCallback(() => {
    window.history.pushState({}, '', '/');
    setRoute({ view: 'home', countryParam: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateAffiliate = useCallback(() => {
    window.history.pushState({}, '', '/affiliate');
    setRoute({ view: 'affiliate', countryParam: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigatePartners = useCallback(() => {
    window.history.pushState({}, '', '/partners');
    setRoute({ view: 'partners', countryParam: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateIeltsRoadmap = useCallback(() => {
    window.history.pushState({}, '', '/ielts-roadmap');
    setRoute({ view: 'ielts-roadmap', countryParam: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateAbout = useCallback(() => {
    window.history.pushState({}, '', '/about');
    setRoute({ view: 'about', countryParam: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateContact = useCallback(() => {
    window.history.pushState({}, '', '/contact');
    setRoute({ view: 'contact', countryParam: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateBlog = useCallback((articleId?: string) => {
    let url = '/blog';
    if (articleId) {
      if (
        articleId === 'study-in-india-from-bangladesh-guide' ||
        articleId === 'study-in-india-guide-2026'
      ) {
        url = '/study-in-india-from-bangladesh-guide';
      } else {
        url = `/blog?article=${articleId}`;
      }
    }
    window.history.pushState({}, '', url);
    setRoute({ view: 'blog', countryParam: null, articleParam: articleId || null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateToCountry = useCallback((countryIdOrSlug: string) => {
    const cleanId = countryIdOrSlug.replace(/^study-in-/, '');
    const slug = `study-in-${cleanId}`;
    window.history.pushState({}, '', `/${slug}`);
    setRoute({ view: 'country', countryParam: slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateSectionFromCountry = useCallback((sectionId: string) => {
    if (sectionId === 'blog' || sectionId === 'blogs') {
      handleNavigateBlog();
      return;
    }
    if (sectionId === 'about' || sectionId === 'about-us' || sectionId === 'about-biddaloi') {
      handleNavigateAbout();
      return;
    }
    if (sectionId === 'contact' || sectionId === 'contact-us') {
      handleNavigateContact();
      return;
    }
    window.history.pushState({}, '', '/');
    setRoute({ view: 'home', countryParam: null });
    setTimeout(() => {
      const targetId = (sectionId === 'universities' || sectionId === 'courses' || sectionId === 'destinations') ? 'countries' : sectionId;
      const el = document.getElementById(targetId) || document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 80);
  }, [handleNavigateBlog, handleNavigateAbout, handleNavigateContact]);

  const handleOpenCounseling = useCallback((destId?: string, courseTitle?: string) => {
    if (destId) {
      const cleanId = destId.replace(/^study-in-/, '');
      setCounselingDestination(cleanId);
    }
    setCounselingCourseTitle(courseTitle || '');
    // Direct all form triggers to Contact Page
    handleNavigateContact();
  }, [handleNavigateContact]);

  // Country view resolution
  const countryData = route.view === 'country' && route.countryParam 
    ? getCountryData(route.countryParam) 
    : null;

  return (
    <SiteConfigProvider>
      {route.view === 'admin' ? (
        <AdminPanel onExit={handleExitAdmin} />
      ) : route.view === 'country' && countryData ? (
        <CountryPage
          country={countryData}
          onNavigateHome={handleNavigateHome}
          onNavigateSection={handleNavigateSectionFromCountry}
          onSelectCountrySlug={handleNavigateToCountry}
          onOpenCounseling={() => handleNavigateContact()}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenLogin={() => setIsAuthOpen(true)}
          onNavigateAffiliate={handleNavigateAffiliate}
          onNavigatePartners={handleNavigatePartners}
          onNavigateBlog={handleNavigateBlog}
          onNavigateAbout={handleNavigateAbout}
          onNavigateContact={handleNavigateContact}
        />
      ) : route.view === 'affiliate' ? (
        <AffiliatePage
          onNavigateHome={handleNavigateHome}
          onNavigateSection={handleNavigateSectionFromCountry}
          onNavigateToCountry={handleNavigateToCountry}
          onNavigateToPartners={handleNavigatePartners}
          onOpenCounseling={() => handleNavigateContact()}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenLogin={() => setIsAuthOpen(true)}
        />
      ) : route.view === 'partners' ? (
        <PartnersPage
          onNavigateHome={handleNavigateHome}
          onNavigateSection={handleNavigateSectionFromCountry}
          onNavigateToCountry={handleNavigateToCountry}
          onNavigateToAffiliate={handleNavigateAffiliate}
          onOpenCounseling={() => handleNavigateContact()}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenLogin={() => setIsAuthOpen(true)}
        />
      ) : route.view === 'ielts-roadmap' ? (
        <IeltsRoadmapPage
          onNavigateHome={handleNavigateHome}
          onNavigateSection={handleNavigateSectionFromCountry}
          onNavigateToCountry={handleNavigateToCountry}
          onNavigateToAffiliate={handleNavigateAffiliate}
          onNavigateToPartners={handleNavigatePartners}
          onOpenCounseling={() => handleNavigateContact()}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenLogin={() => setIsAuthOpen(true)}
          onViewCourses={() => setIsLiveClassesOpen(true)}
        />
      ) : route.view === 'blog' ? (
        <BlogPage
          initialArticleId={route.articleParam}
          onNavigateHome={handleNavigateHome}
          onNavigateSection={handleNavigateSectionFromCountry}
          onNavigateToCountry={handleNavigateToCountry}
          onNavigateToAffiliate={handleNavigateAffiliate}
          onNavigateToPartners={handleNavigatePartners}
          onNavigateIeltsRoadmap={handleNavigateIeltsRoadmap}
          onNavigateAbout={handleNavigateAbout}
          onNavigateContact={handleNavigateContact}
          onOpenCounseling={() => handleNavigateContact()}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenLogin={() => setIsAuthOpen(true)}
        />
      ) : route.view === 'about' ? (
        <AboutPage
          onNavigateHome={handleNavigateHome}
          onNavigateSection={handleNavigateSectionFromCountry}
          onNavigateToCountry={handleNavigateToCountry}
          onNavigateToAffiliate={handleNavigateAffiliate}
          onNavigateToPartners={handleNavigatePartners}
          onNavigateBlog={handleNavigateBlog}
          onNavigateContact={handleNavigateContact}
          onOpenCounseling={() => handleNavigateContact()}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenLogin={() => setIsAuthOpen(true)}
        />
      ) : route.view === 'contact' ? (
        <ContactPage
          onNavigateHome={handleNavigateHome}
          onNavigateSection={handleNavigateSectionFromCountry}
          onNavigateToCountry={handleNavigateToCountry}
          onNavigateToAffiliate={handleNavigateAffiliate}
          onNavigateToPartners={handleNavigatePartners}
          onNavigateBlog={handleNavigateBlog}
          onOpenCounseling={(notes) => handleOpenCounseling(undefined, notes)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenLogin={() => setIsAuthOpen(true)}
        />
      ) : (
        <MainWebsite 
          onNavigateToCountry={handleNavigateToCountry}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenLogin={() => setIsAuthOpen(true)}
          onOpenCounselingWithCountry={(countryId) => handleOpenCounseling(countryId)}
          onOpenCounselingWithCourse={(course) => handleOpenCounseling(course?.destinationId, course?.title)}
          onViewCourse={(course) => {
            setSelectedCourseDetails(course);
            setIsCourseDetailsOpen(true);
          }}
          onCheckEligibility={(course) => {
            setSelectedCourseEligibility(course);
            setIsEligibilityOpen(true);
          }}
          onWatchVideos={() => window.open('https://www.youtube.com/@Biddaloi', '_blank', 'noopener,noreferrer')}
          onNavigateAffiliate={handleNavigateAffiliate}
          onNavigatePartners={handleNavigatePartners}
          onNavigateBlog={handleNavigateBlog}
          onNavigateAbout={handleNavigateAbout}
          onNavigateContact={handleNavigateContact}
        />
      )}

      {/* Global Modals: Accessible across Home and Country pages */}
      <CounselingModal
        isOpen={isCounselingOpen}
        onClose={() => setIsCounselingOpen(false)}
        preferredDestination={counselingDestination || 'usa'}
        courseTitle={counselingCourseTitle}
      />

      <CourseDetailsModal
        isOpen={isCourseDetailsOpen}
        onClose={() => setIsCourseDetailsOpen(false)}
        course={selectedCourseDetails}
        onApply={(course) => {
          setIsCourseDetailsOpen(false);
          handleOpenCounseling(course.destinationId, course.title);
        }}
        onCheckEligibility={(course) => {
          setIsCourseDetailsOpen(false);
          setSelectedCourseEligibility(course);
          setIsEligibilityOpen(true);
        }}
      />

      <EligibilityModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        course={selectedCourseEligibility}
        onProceedToCounseling={(course) => {
          setIsEligibilityOpen(false);
          handleOpenCounseling(course.destinationId, course.title);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={(course) => {
          setSelectedCourseDetails(course);
          setIsCourseDetailsOpen(true);
        }}
        onSelectDestination={(destId) => {
          handleNavigateToCountry(destId);
        }}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      <LiveClassesModal
        isOpen={isLiveClassesOpen}
        onClose={() => setIsLiveClassesOpen(false)}
        onBookCounseling={() => handleOpenCounseling()}
      />
    </SiteConfigProvider>
  );
}
