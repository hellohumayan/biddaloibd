import React, { useState } from 'react';
import { useSiteConfig } from '../../../context/SiteConfigContext';
import { Destination } from '../../../types';
import { Globe, Plus, Trash2, Edit2, Check, X, Building2, ShieldCheck } from 'lucide-react';

export const CountriesTab: React.FC = () => {
  const { config, updateSection } = useSiteConfig();
  const countriesConfig = config.countries;
  const items = countriesConfig.items || [];

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Destination>>({});
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [newCountry, setNewCountry] = useState<Partial<Destination>>({
    name: '',
    flag: '🌍',
    code: '',
    shortDesc: '',
    avgTuition: '$15,000 - $30,000 / yr',
    workPermit: 'Post-study work permit',
    popularFor: 'STEM & Business',
    universityCount: 20
  });

  const handleStartEdit = (dest: Destination) => {
    setEditingId(dest.id);
    setEditForm({ ...dest });
  };

  const handleSaveEdit = () => {
    if (!editingId) return;
    const updated = items.map((c) => (c.id === editingId ? ({ ...c, ...editForm } as Destination) : c));
    updateSection('countries', { items: updated });
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this country destination?')) {
      const updated = items.filter((c) => c.id !== id);
      updateSection('countries', { items: updated });
    }
  };

  const handleCreateNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCountry.name || !newCountry.code) {
      alert('Please provide country name and code.');
      return;
    }
    const id = newCountry.code.toLowerCase().replace(/\s+/g, '-');
    const created: Destination = {
      id,
      name: newCountry.name || 'New Country',
      flag: newCountry.flag || '🌍',
      code: newCountry.code || 'NEW',
      heroImage: newCountry.flagImage || `https://flagcdn.com/w640/${newCountry.code.toLowerCase().slice(0, 2)}.png`,
      flagImage: newCountry.flagImage || `https://flagcdn.com/w640/${newCountry.code.toLowerCase().slice(0, 2)}.png`,
      shortDesc: newCountry.shortDesc || 'Comprehensive international study programs with visa support.',
      popularFor: newCountry.popularFor || 'Engineering & Business',
      avgTuition: newCountry.avgTuition || '$15,000 - $30,000 / yr',
      avgLiving: newCountry.avgLiving || '$10,000 - $14,000 / yr',
      workPermit: newCountry.workPermit || 'Post study work visa',
      universityCount: Number(newCountry.universityCount) || 15,
      featuredUnis: ['Top National University', 'City Metropolitan University']
    };
    updateSection('countries', { items: [...items, created] });
    setIsAddingNew(false);
    setNewCountry({
      name: '',
      flag: '🌍',
      code: '',
      shortDesc: '',
      avgTuition: '$15,000 - $30,000 / yr',
      workPermit: 'Post-study work permit',
      popularFor: 'STEM & Business',
      universityCount: 20
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Connected Countries & Study Destinations</h3>
        <p className="text-sm text-slate-500 mt-1">
          Add, edit, or remove study abroad destinations, fees, visa details, and section headers.
        </p>
      </div>

      {/* Section Headings */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h4 className="text-base font-bold text-slate-900">Section Title & Description (Left-Aligned)</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Top Badge Text
            </label>
            <input
              type="text"
              value={countriesConfig.badge}
              onChange={(e) => updateSection('countries', { badge: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Section Title
            </label>
            <input
              type="text"
              value={countriesConfig.title}
              onChange={(e) => updateSection('countries', { title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Section Subtitle / Description
          </label>
          <textarea
            rows={2}
            value={countriesConfig.description}
            onChange={(e) => updateSection('countries', { description: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Countries List */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-600" />
            Active Destination Countries ({items.length})
          </h4>
          <button
            onClick={() => setIsAddingNew(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add New Country
          </button>
        </div>

        {/* Add New Country Modal/Box */}
        {isAddingNew && (
          <form onSubmit={handleCreateNew} className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-bold text-blue-900">Add New Study Destination</h5>
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Country Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ireland"
                  value={newCountry.name}
                  onChange={(e) => setNewCountry({ ...newCountry, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Code (3-letter)</label>
                <input
                  type="text"
                  placeholder="e.g. IRL"
                  value={newCountry.code}
                  onChange={(e) => setNewCountry({ ...newCountry, code: e.target.value.toUpperCase() })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Flag Emoji</label>
                <input
                  type="text"
                  placeholder="e.g. 🇮🇪"
                  value={newCountry.flag}
                  onChange={(e) => setNewCountry({ ...newCountry, flag: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Average Tuition</label>
                <input
                  type="text"
                  placeholder="e.g. €12,000 - €22,000 / yr"
                  value={newCountry.avgTuition}
                  onChange={(e) => setNewCountry({ ...newCountry, avgTuition: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Work Permit</label>
                <input
                  type="text"
                  placeholder="e.g. 2 Years Third Level Graduate Scheme"
                  value={newCountry.workPermit}
                  onChange={(e) => setNewCountry({ ...newCountry, workPermit: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Popular For</label>
                <input
                  type="text"
                  placeholder="e.g. Tech, Pharmaceuticals, Finance"
                  value={newCountry.popularFor}
                  onChange={(e) => setNewCountry({ ...newCountry, popularFor: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Short Description</label>
              <textarea
                rows={2}
                placeholder="European tech hub offering high post-graduation employment..."
                value={newCountry.shortDesc}
                onChange={(e) => setNewCountry({ ...newCountry, shortDesc: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="px-3 py-2 rounded-lg bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
              >
                Save Country
              </button>
            </div>
          </form>
        )}

        {/* Cards Grid of Existing Countries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((country) => {
            const isEditing = editingId === country.id;

            if (isEditing) {
              return (
                <div key={country.id} className="p-4 rounded-xl border-2 border-blue-400 bg-blue-50/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900">Editing {country.name}</span>
                    <div className="flex gap-1">
                      <button
                        onClick={handleSaveEdit}
                        className="p-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer"
                        title="Save changes"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="p-1.5 rounded-lg bg-slate-300 text-slate-700 hover:bg-slate-400 cursor-pointer"
                        title="Cancel"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={editForm.name || ''}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      placeholder="Country Name"
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                    />
                    <input
                      type="text"
                      value={editForm.avgTuition || ''}
                      onChange={(e) => setEditForm({ ...editForm, avgTuition: e.target.value })}
                      placeholder="Avg Tuition"
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                    />
                  </div>

                  <input
                    type="text"
                    value={editForm.workPermit || ''}
                    onChange={(e) => setEditForm({ ...editForm, workPermit: e.target.value })}
                    placeholder="Work Permit Duration"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                  />

                  <textarea
                    rows={2}
                    value={editForm.shortDesc || ''}
                    onChange={(e) => setEditForm({ ...editForm, shortDesc: e.target.value })}
                    placeholder="Description"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                  />
                </div>
              );
            }

            return (
              <div
                key={country.id}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">{country.name}</h5>
                        <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                          {country.code} • {country.universityCount}+ Universities
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleStartEdit(country)}
                        className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors cursor-pointer"
                        title="Edit"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(country.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2">
                    {country.shortDesc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Tuition: <strong className="text-slate-800">{country.avgTuition}</strong></span>
                  <span className="truncate max-w-[150px]">{country.workPermit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
