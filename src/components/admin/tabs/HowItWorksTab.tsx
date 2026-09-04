import React, { useState } from 'react';
import { useSiteConfig } from '../../../context/SiteConfigContext';
import { RoadmapStepConfig } from '../../../types/siteConfig';
import { Route, Edit2, Check, X, Tv } from 'lucide-react';

export const HowItWorksTab: React.FC = () => {
  const { config, updateSection } = useSiteConfig();
  const howItWorks = config.howItWorks;
  const steps = howItWorks.steps || [];

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editStep, setEditStep] = useState<Partial<RoadmapStepConfig>>({});

  const handleStartEdit = (idx: number, step: RoadmapStepConfig) => {
    setEditingIndex(idx);
    setEditStep({ ...step });
  };

  const handleSaveEdit = (idx: number) => {
    const updated = [...steps];
    updated[idx] = { ...updated[idx], ...editStep } as RoadmapStepConfig;
    updateSection('howItWorks', { steps: updated });
    setEditingIndex(null);
  };

  const handleCtaChange = (field: string, val: string) => {
    updateSection('howItWorks', {
      liveClassesCta: {
        ...howItWorks.liveClassesCta,
        [field]: val
      }
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Road to Abroad & Live Classes CTA</h3>
        <p className="text-sm text-slate-500 mt-1">
          Customize the 4-step student roadmap and the Live Classes for Learning banner right beneath it.
        </p>
      </div>

      {/* Section Headings */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h4 className="text-base font-bold text-slate-900">Roadmap Section Heading</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
            <input
              type="text"
              value={howItWorks.badge}
              onChange={(e) => updateSection('howItWorks', { badge: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Section Title</label>
            <input
              type="text"
              value={howItWorks.title}
              onChange={(e) => updateSection('howItWorks', { title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Section Description</label>
          <textarea
            rows={2}
            value={howItWorks.description}
            onChange={(e) => updateSection('howItWorks', { description: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* 4 Steps Management */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
        <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Route className="w-4 h-4 text-blue-600" />
          Roadmap Steps ({steps.length})
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, idx) => {
            const isEditing = editingIndex === idx;

            if (isEditing) {
              return (
                <div key={idx} className="p-4 rounded-xl border-2 border-blue-400 bg-blue-50/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900">Step {step.step}</span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleSaveEdit(idx)}
                        className="p-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setEditingIndex(null)}
                        className="p-1.5 rounded-lg bg-slate-300 text-slate-700 hover:bg-slate-400 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    value={editStep.title || ''}
                    onChange={(e) => setEditStep({ ...editStep, title: e.target.value })}
                    placeholder="Step Title"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold"
                  />

                  <textarea
                    rows={2}
                    value={editStep.desc || ''}
                    onChange={(e) => setEditStep({ ...editStep, desc: e.target.value })}
                    placeholder="Step Description"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                  />

                  <input
                    type="text"
                    value={editStep.detail || ''}
                    onChange={(e) => setEditStep({ ...editStep, detail: e.target.value })}
                    placeholder="Additional detail / badge"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                  />
                </div>
              );
            }

            return (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white text-xs font-black flex items-center justify-center">
                      {step.step}
                    </span>
                    <button
                      onClick={() => handleStartEdit(idx, step)}
                      className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors cursor-pointer"
                      title="Edit step"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 mt-2">{step.title}</h5>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-3">{step.desc}</p>
                </div>
                <div className="mt-3 pt-2 text-[11px] text-blue-600 font-medium border-t border-slate-100">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Classes CTA Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Tv className="w-5 h-5 text-red-600" />
          <h4 className="text-base font-bold text-slate-900">Live Classes Learning CTA Banner</h4>
        </div>
        <p className="text-xs text-slate-500">
          This is the CTA banner positioned right after the Road to Abroad section.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
            <input
              type="text"
              value={howItWorks.liveClassesCta?.badge || 'Live Masterclasses'}
              onChange={(e) => handleCtaChange('badge', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Badge Subtext</label>
            <input
              type="text"
              value={howItWorks.liveClassesCta?.subtext || '100% Free Learning'}
              onChange={(e) => handleCtaChange('subtext', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Banner Headline</label>
          <input
            type="text"
            value={howItWorks.liveClassesCta?.title || 'Watch Live Classes for Learning & Guidance'}
            onChange={(e) => handleCtaChange('title', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Banner Description</label>
          <textarea
            rows={2}
            value={howItWorks.liveClassesCta?.description || ''}
            onChange={(e) => handleCtaChange('description', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Button Text</label>
          <input
            type="text"
            value={howItWorks.liveClassesCta?.buttonText || 'Watch Videos'}
            onChange={(e) => handleCtaChange('buttonText', e.target.value)}
            className="w-full max-w-xs px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};
