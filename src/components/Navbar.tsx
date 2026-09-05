import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Phone, ChevronDown, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { destinationsData } from '../data/destinations';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenLogin?: () => void;
  onOpenCounseling: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigateToCountry?: (countryId: string) => void;
  onNavigateAffiliate?: () => void;
  onNavigatePartners?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenLogin,
  onOpenCounseling,
  onNavigateSection,
  onNavigateToCountry,
  onNavigateAffiliate,
  onNavigatePartners
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsCountriesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCountriesOpen(false);
    }, 150);
  };

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Services', target: 'services' },
    { label: 'How It Works', target: 'how-it-works' },
    { label: 'Resources', target: 'resources' },
    { label: 'Testimonials', target: 'testimonials' }
  ];

  const handleNavClick = (target: string) => {
    onNavigateSection(target);
    setMobileMenuOpen(false);
    setIsCountriesOpen(false);
  };

  const handleCountryClick = (countryId: string) => {
    setIsCountriesOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateToCountry) {
      onNavigateToCountry(countryId);
    } else {
      onNavigateSection('countries');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-2.5 sm:py-3'
            : 'bg-white/90 backdrop-blur-sm py-3 sm:py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11 sm:h-12">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="group focus:outline-none flex items-center shrink-0"
            >
              <Logo size="md" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* Home */}
              <button
                type="button"
                onClick={() => handleNavClick('hero')}
                className="px-3 py-1.5 text-sm font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50/80 rounded-lg transition-colors"
              >
                Home
              </button>

              {/* Countries Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setIsCountriesOpen(!isCountriesOpen)}
                  className={`px-3 py-1.5 text-sm font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 ${
                    isCountriesOpen
                      ? 'text-blue-600 bg-blue-50/80'
                      : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50/80'
                  }`}
                  aria-expanded={isCountriesOpen}
                  aria-haspopup="true"
                >
                  <span>Countries</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isCountriesOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isCountriesOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-84 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-slate-100 mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        <Globe className="w-3 h-3 text-blue-500" />
                        Study Destinations
                      </span>
                      <button
                        type="button"
                        onClick={() => handleNavClick('destinations')}
                        className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        <span>View All</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-1">
                      {destinationsData.map((country) => (
                        <button
                          key={country.id}
                          type="button"
                          onClick={() => handleCountryClick(country.id)}
                          className="flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-blue-50/80 group transition-colors"
                        >
                          <span className="text-xl shrink-0" role="img" aria-label={country.name}>
                            {country.flag}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-slate-900 group-hover:text-blue-700 truncate">
                              {country.name}
                            </p>
                            <p className="text-[10px] text-slate-400 truncate">
                              {country.universityCount}+ Unis
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other navigation links */}
              {navLinks.slice(1).map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.target)}
                  className="px-3 py-1.5 text-sm font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50/80 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden sm:flex items-center">
              <button
                onClick={onOpenCounseling}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs shadow-blue-500/20 transition-all transform active:scale-95"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl z-10 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <div className="p-4 space-y-1">
                {/* Home */}
                <button
                  onClick={() => handleNavClick('hero')}
                  className="w-full text-left px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>

                {/* Countries Accordion */}
                <div>
                  <button
                    onClick={() => setMobileCountriesOpen(!mobileCountriesOpen)}
                    className="w-full text-left px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>Countries</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        mobileCountriesOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {mobileCountriesOpen && (
                    <div className="pl-3 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl mt-1 mb-2 border border-slate-100">
                      <button
                        onClick={() => {
                          handleNavClick('destinations');
                          setMobileCountriesOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-bold text-blue-600 hover:bg-blue-100/50 rounded-lg transition-colors flex items-center justify-between"
                      >
                        <span>Explore All Countries</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      {destinationsData.map((country) => (
                        <button
                          key={country.id}
                          onClick={() => handleCountryClick(country.id)}
                          className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-800 hover:text-blue-600 hover:bg-white rounded-lg transition-colors flex items-center gap-2.5"
                        >
                          <span className="text-base">{country.flag}</span>
                          <span className="flex-1 truncate">{country.name}</span>
                          <span className="text-[10px] text-slate-400 font-normal">{country.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other Nav Links */}
                {navLinks.slice(1).map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.target)}
                    className="w-full text-left px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="px-4 py-3 border-t border-slate-100 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCounseling();
                  }}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Helpline contact */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Dhaka Helpline: +880 1722-200432</span>
              </div>
              <p className="text-[11px] text-slate-500">Pallabi, Mirpur, Dhaka 1216</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
