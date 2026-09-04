import React from 'react';
import { useSiteConfig } from '../../../context/SiteConfigContext';
import { Sparkles, BarChart2, MessageSquare } from 'lucide-react';

export const HeroTab: React.FC = () => {
  const { config, updateSection } = useSiteConfig();
  const hero = config.hero;

  const handleChange = (field: string, val: string) => {
    updateSection('hero', { [field]: val });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Hero Section Content</h3>
        <p className="text-sm text-slate-500 mt-1">
          Customize the main entrance banner, high-impact headline, value propositions, and action buttons.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <h4 className="text-base font-bold text-slate-900">Headlines & Eyebrow Badges</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Top Badge Text
            </label>
            <input
              type="text"
              value={hero.eyebrowBadge}
              onChange={(e) => handleChange('eyebrowBadge', e.target.value)}
              placeholder="Bangladesh’s Trusted Study Abroad Platform"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Top Badge Sub-pill Text
            </label>
            <input
              type="text"
              value={hero.eyebrowSubtext}
              onChange={(e) => handleChange('eyebrowSubtext', e.target.value)}
              placeholder="100% Free Counseling"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Main Headline */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Primary Headline (First Part)
          </label>
          <input
            type="text"
            value={hero.headline}
            onChange={(e) => handleChange('headline', e.target.value)}
            placeholder="Find the Right University."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
          />
        </div>

        {/* Highlight Headline */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Gradient Highlighted Phrase
          </label>
          <input
            type="text"
            value={hero.headlineHighlight}
            onChange={(e) => handleChange('headlineHighlight', e.target.value)}
            placeholder="Build Your Future Abroad."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-blue-600"
          />
          <p className="text-[11px] text-slate-400 mt-1">This text receives the rich blue-to-teal gradient highlight</p>
        </div>

        {/* Subheadline */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Supporting Subheadline / Paragraph
          </label>
          <textarea
            rows={3}
            value={hero.subheadline}
            onChange={(e) => handleChange('subheadline', e.target.value)}
            placeholder="Empowering Bangladeshi students to discover verified courses..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Action Button Labels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Primary Action Button Label
            </label>
            <input
              type="text"
              value={hero.primaryCtaText}
              onChange={(e) => handleChange('primaryCtaText', e.target.value)}
              placeholder="Start Free Assessment"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Secondary Action Button Label
            </label>
            <input
              type="text"
              value={hero.secondaryCtaText}
              onChange={(e) => handleChange('secondaryCtaText', e.target.value)}
              placeholder="Talk to an Expert"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
            />
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
        <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-blue-600" />
          Hero Trust Stats & Metrics
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Visas Approved
            </label>
            <input
              type="text"
              value={hero.statVisas}
              onChange={(e) => handleChange('statVisas', e.target.value)}
              placeholder="12,500+"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Success Rate
            </label>
            <input
              type="text"
              value={hero.statRate}
              onChange={(e) => handleChange('statRate', e.target.value)}
              placeholder="98.6%"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Partner Universities
            </label>
            <input
              type="text"
              value={hero.statUnis}
              onChange={(e) => handleChange('statUnis', e.target.value)}
              placeholder="850+"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-blue-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Scholarships Secured
            </label>
            <input
              type="text"
              value={hero.statScholarships}
              onChange={(e) => handleChange('statScholarships', e.target.value)}
              placeholder="$4.2M+"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-amber-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
