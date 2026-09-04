import React, { useState } from 'react';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2,
  Facebook, 
  Linkedin, 
  Instagram, 
  Youtube,
  MessageCircle,
  Lock
} from 'lucide-react';
import { Logo } from './Logo';
import { useSiteConfig } from '../context/SiteConfigContext';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onFilterDestination: (destId: string) => void;
  onNavigateToCountry?: (countryId: string) => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onFilterDestination,
  onNavigateToCountry,
  onOpenAdmin
}) => {
  const { config } = useSiteConfig();
  const contact = config.contact;
  const branding = config.branding;

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {branding.tagline || "Biddaloi is Bangladesh's leading digital study abroad and higher education discovery platform. Helping students connect with accredited universities across 10+ countries with 100% transparency."}
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{contact.email}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={contact.facebookUrl || 'https://facebook.com'}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={contact.linkedinUrl || 'https://linkedin.com'}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={contact.instagramUrl || 'https://instagram.com'}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contact.youtubeUrl || 'https://youtube.com'}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Study Abroad Destinations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Study Abroad</h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Study in USA', id: 'usa' },
                { name: 'Study in Canada', id: 'canada' },
                { name: 'Study in UK', id: 'uk' },
                { name: 'Study in Australia', id: 'australia' },
                { name: 'Study in Germany', id: 'germany' },
                { name: 'Study in Malaysia', id: 'malaysia' },
                { name: 'Study in Sweden', id: 'sweden' },
                { name: 'Study in Finland', id: 'finland' }
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`/study-in-${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigateToCountry) {
                        onNavigateToCountry(item.id);
                      } else {
                        onFilterDestination(item.id);
                      }
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Explore (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('courses')} className="text-slate-400 hover:text-blue-400 transition-colors">
                  Course Finder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('courses')} className="text-slate-400 hover:text-blue-400 transition-colors">
                  Degree Programs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('services')} className="text-slate-400 hover:text-blue-400 transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('resources')} className="text-slate-400 hover:text-blue-400 transition-colors">
                  Blog & Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('how-it-works')} className="text-slate-400 hover:text-blue-400 transition-colors">
                  Road to Abroad
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('testimonials')} className="text-slate-400 hover:text-blue-400 transition-colors">
                  Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('services')} className="text-slate-400 hover:text-blue-400 transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
                  Contact Us
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
                  Terms & Conditions
                </span>
              </li>
              {onOpenAdmin && (
                <li>
                  <button 
                    onClick={onOpenAdmin}
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Access Admin CMS Panel (Ctrl+Shift+A)"
                  >
                    <Lock className="w-3 h-3 text-slate-500" />
                    <span>Admin Portal</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 5: Newsletter (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Newsletter</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get study abroad updates, scholarships and application tips.
            </p>

            {subscribed ? (
              <div className="p-2.5 bg-emerald-950/60 border border-emerald-800 rounded-xl text-xs text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Thank you! You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Biddaloi.com. All rights reserved. Dhaka, Bangladesh.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Verified EdTech Platform</span>
            <span>•</span>
            <span>Mirpur Section 11, Dhaka</span>
            {onOpenAdmin && (
              <>
                <span>•</span>
                <button
                  onClick={onOpenAdmin}
                  className="text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors cursor-pointer"
                  title="Admin CMS Login (Ctrl+Shift+A)"
                >
                  <Lock className="w-3 h-3" />
                  <span>Admin Panel</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
