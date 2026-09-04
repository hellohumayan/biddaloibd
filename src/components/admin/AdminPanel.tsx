import React, { useState, useEffect } from 'react';
import { useSiteConfig } from '../../context/SiteConfigContext';
import { Logo } from '../Logo';
import { BrandingTab } from './tabs/BrandingTab';
import { ContactTab } from './tabs/ContactTab';
import { HeroTab } from './tabs/HeroTab';
import { CountriesTab } from './tabs/CountriesTab';
import { ServicesTab } from './tabs/ServicesTab';
import { HowItWorksTab } from './tabs/HowItWorksTab';
import { LiveClassesTab } from './tabs/LiveClassesTab';
import { TestimonialsTab } from './tabs/TestimonialsTab';
import { BackupResetTab } from './tabs/BackupResetTab';
import { AdminLogin } from './AdminLogin';

import { 
  Palette, 
  Phone, 
  Sparkles, 
  Globe, 
  Briefcase, 
  Route, 
  Tv, 
  MessageSquareQuote, 
  Database,
  ExternalLink,
  CheckCircle2,
  Menu,
  X,
  ShieldCheck,
  Eye,
  LogOut
} from 'lucide-react';

interface AdminPanelProps {
  onExit: () => void;
}

type TabType = 
  | 'branding' 
  | 'contact' 
  | 'hero' 
  | 'countries' 
  | 'services' 
  | 'howItWorks' 
  | 'liveClasses' 
  | 'testimonials' 
  | 'backup';

export const AdminPanel: React.FC<AdminPanelProps> = ({ onExit }) => {
  const { config } = useSiteConfig();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('biddaloi_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [activeTab, setActiveTab] = useState<TabType>('branding');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleLogout = () => {
    try {
      sessionStorage.removeItem('biddaloi_admin_auth');
    } catch {}
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onSuccess={() => setIsAuthenticated(true)} onExit={onExit} />;
  }

  const tabs = [
    { id: 'branding' as TabType, label: 'Logo & Branding', icon: Palette, badge: config.branding.logoUrl ? 'Custom Logo' : undefined },
    { id: 'contact' as TabType, label: 'Contact & Office', icon: Phone },
    { id: 'hero' as TabType, label: 'Hero Section', icon: Sparkles },
    { id: 'countries' as TabType, label: 'Connected Countries', icon: Globe, count: config.countries?.items?.length },
    { id: 'services' as TabType, label: 'Services We Provide', icon: Briefcase, count: config.services?.items?.length },
    { id: 'howItWorks' as TabType, label: 'Road to Abroad', icon: Route },
    { id: 'liveClasses' as TabType, label: 'Live Classes & Videos', icon: Tv, count: config.liveClasses?.classes?.length },
    { id: 'testimonials' as TabType, label: 'Student Stories', icon: MessageSquareQuote, count: config.testimonials?.items?.length },
    { id: 'backup' as TabType, label: 'Security & Backup', icon: Database },
  ];

  // Trigger brief saved feedback whenever user modifies things
  const triggerSaveNotification = () => {
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-800 font-sans">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left: Mobile hamburger & Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-200">
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold tracking-wide">
                  ADMIN STUDIO
                </span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync Active
                </span>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {showSavedToast && (
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full transition-all">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Changes saved to site</span>
              </div>
            )}

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-700 text-xs font-semibold transition-all border border-slate-200 hover:border-red-200 cursor-pointer"
              title="Lock Admin Studio & Log Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Log Out</span>
            </button>

            <button
              onClick={onExit}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Website</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-1">
            <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Content Sections
            </div>

            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span className="truncate">{tab.label}</span>
                  </div>

                  {tab.count !== undefined && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isActive ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                  {tab.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                        isActive ? 'bg-blue-500 text-white' : 'bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-3 mt-3 border-t border-slate-100 px-3 py-2 text-[11px] text-slate-400">
              <p>Direct URL: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">/admin</code></p>
              <p className="mt-1">Hidden from public visitor navigation.</p>
            </div>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setMobileSidebarOpen(false)} />
            <div className="relative w-72 max-w-[80vw] bg-white h-full shadow-2xl p-4 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase">Admin Navigation</span>
                  <button onClick={() => setMobileSidebarOpen(false)} className="p-1 text-slate-400">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMobileSidebarOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold ${
                        isActive ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </div>
                      {tab.count !== undefined && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          {tab.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={onExit}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  <Eye className="w-4 h-4" />
                  View Website
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 text-xs font-semibold transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Lock & Log Out
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          <div className="bg-transparent pb-16">
            {activeTab === 'branding' && <BrandingTab />}
            {activeTab === 'contact' && <ContactTab />}
            {activeTab === 'hero' && <HeroTab />}
            {activeTab === 'countries' && <CountriesTab />}
            {activeTab === 'services' && <ServicesTab />}
            {activeTab === 'howItWorks' && <HowItWorksTab />}
            {activeTab === 'liveClasses' && <LiveClassesTab />}
            {activeTab === 'testimonials' && <TestimonialsTab />}
            {activeTab === 'backup' && <BackupResetTab />}
          </div>
        </main>
      </div>
    </div>
  );
};
