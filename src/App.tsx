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
}

function MainWebsite({ 
  onNavigateToCountry,
  onOpenSearch,
  onOpenLogin,
  onOpenCounselingWithCountry,
  onOpenCounselingWithCourse,
  onViewCourse,
  onCheckEligibility,
  onWatchVideos
}: MainWebsiteProps) {
  // Filter state synchronized between sections
  const [selectedDestination, setSelectedDestination] = useState<string>('all');

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      {/* Header & Navigation */}
      <Navbar
        onOpenSearch={onOpenSearch}
        onOpenLogin={onOpenLogin}
        onOpenCounseling={() => onOpenCounselingWithCountry()}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onFindCourse={() => onOpenCounselingWithCountry()}
          onTalkCounselor={() => onOpenCounselingWithCountry()}
        />

        {/* 2. Countries We Are Connected With */}
        <ConnectedCountries
          onSelectCountry={(countryId) => handleSelectDestination(countryId)}
          onOpenCounseling={(countryId) => onOpenCounselingWithCountry(countryId)}
          onNavigateToCountry={onNavigateToCountry}
        />

        {/* 3. Why Biddaloi: Benefits & Advantages */}
        <WhyBiddaloi onOpenCounseling={() => onOpenCounselingWithCountry()} />

        {/* 4. How It Works: Step-by-Step Road to Abroad */}
        <HowItWorks 
          onStartJourney={() => onOpenCounselingWithCountry()} 
          onWatchVideos={onWatchVideos}
        />

        {/* 5. Real Student Testimonials */}
        <TestimonialsSection />

        {/* 6. Educational Resources & Guides */}
        <ResourcesSection />

        {/* 7. Final High-Conversion CTA Banner */}
        <FinalCTA
          onFindCourse={() => onOpenCounselingWithCountry()}
          onTalkCounselor={() => onOpenCounselingWithCountry()}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onFilterDestination={handleSelectDestination}
        onNavigateToCountry={onNavigateToCountry}
      />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileStickyBar
        onFindCourse={() => onOpenCounselingWithCountry()}
        onTalkCounselor={() => onOpenCounselingWithCountry()}
      />
    </div>
  );
}

interface RouteState {
  view: 'home' | 'admin' | 'country';
  countryParam: string | null;
}

function resolveCurrentRoute(): RouteState {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const hash = window.location.hash.replace(/^#\/?/, '');

  if (path === 'admin' || hash === 'admin' || path.startsWith('admin/') || hash.startsWith('admin/')) {
    return { view: 'admin', countryParam: null };
  }

  // Country route check: /study-in-xyz or #study-in-xyz
  if (path.startsWith('study-in-')) {
    return { view: 'country', countryParam: path };
  }
  if (hash.startsWith('study-in-')) {
    return { view: 'country', countryParam: hash };
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

  const handleNavigateHome = useCallback(() => {
    window.history.pushState({}, '', '/');
    setRoute({ view: 'home', countryParam: null });
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
  }, []);

  const handleOpenCounseling = useCallback((destId?: string, courseTitle?: string) => {
    if (destId) {
      const cleanId = destId.replace(/^study-in-/, '');
      setCounselingDestination(cleanId);
    }
    setCounselingCourseTitle(courseTitle || '');
    setIsCounselingOpen(true);
  }, []);

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
          onOpenCounseling={(notes) => handleOpenCounseling(countryData.id, notes)}
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
          onWatchVideos={() => setIsLiveClassesOpen(true)}
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
