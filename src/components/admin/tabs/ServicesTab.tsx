import React, { useState } from 'react';
import { useSiteConfig } from '../../../context/SiteConfigContext';
import { ServiceItemConfig } from '../../../types/siteConfig';
import { Briefcase, Edit2, Check, X, Plus, Trash2, Sparkles } from 'lucide-react';

export const ServicesTab: React.FC = () => {
  const { config, updateSection } = useSiteConfig();
  const servicesConfig = config.services;
  const items = servicesConfig.items || [];

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<ServiceItemConfig>>({});
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newService, setNewService] = useState<Partial<ServiceItemConfig>>({
    title: '',
    tag: 'Service Tag',
    description: '',
    accent: 'blue',
    iconName: 'Sparkles'
  });

  const handleStartEdit = (item: ServiceItemConfig) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  const handleSaveEdit = () => {
    if (!editingId) return;
    const updated = items.map((s) => (s.id === editingId ? ({ ...s, ...editForm } as ServiceItemConfig) : s));
    updateSection('services', { items: updated });
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this service offering?')) {
      const updated = items.filter((s) => s.id !== id);
      updateSection('services', { items: updated });
    }
  };

  const handleCreateNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newService.title || !newService.description) {
      alert('Please fill out service title and description.');
      return;
    }
    const created: ServiceItemConfig = {
      id: `srv-${Date.now()}`,
      title: newService.title,
      tag: newService.tag || 'Specialized',
      description: newService.description,
      accent: newService.accent || 'blue',
      iconName: newService.iconName || 'Sparkles'
    };
    updateSection('services', { items: [...items, created] });
    setIsAddingNew(false);
    setNewService({
      title: '',
      tag: 'Service Tag',
      description: '',
      accent: 'blue',
      iconName: 'Sparkles'
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Services We Provide</h3>
        <p className="text-sm text-slate-500 mt-1">
          Customize the core service cards (counseling, test prep, application filing, visa processing, scholarships, etc.).
        </p>
      </div>

      {/* Section Headings */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h4 className="text-base font-bold text-slate-900">Section Header</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
            <input
              type="text"
              value={servicesConfig.badge}
              onChange={(e) => updateSection('services', { badge: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Section Title</label>
            <input
              type="text"
              value={servicesConfig.title}
              onChange={(e) => updateSection('services', { title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Section Description</label>
          <textarea
            rows={2}
            value={servicesConfig.description}
            onChange={(e) => updateSection('services', { description: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            Service Items ({items.length})
          </h4>
          <button
            onClick={() => setIsAddingNew(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add New Service
          </button>
        </div>

        {/* Add New Service Form */}
        {isAddingNew && (
          <form onSubmit={handleCreateNew} className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-bold text-indigo-900">Add Service</h5>
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Service Title</label>
                <input
                  type="text"
                  placeholder="e.g. University Admission Filing"
                  value={newService.title}
                  onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Badge Tag</label>
                <input
                  type="text"
                  placeholder="e.g. Admission Filings"
                  value={newService.tag}
                  onChange={(e) => setNewService({ ...newService, tag: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Description</label>
              <textarea
                rows={2}
                placeholder="Details of what students receive in this service..."
                value={newService.description}
                onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                required
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
                Save Service
              </button>
            </div>
          </form>
        )}

        {/* Grid of Existing Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((service) => {
            const isEditing = editingId === service.id;

            if (isEditing) {
              return (
                <div key={service.id} className="p-4 rounded-xl border-2 border-blue-400 bg-blue-50/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900">Editing Service</span>
                    <div className="flex gap-1">
                      <button
                        onClick={handleSaveEdit}
                        className="p-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="p-1.5 rounded-lg bg-slate-300 text-slate-700 hover:bg-slate-400 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    value={editForm.title || ''}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    placeholder="Service Title"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold"
                  />
                  <input
                    type="text"
                    value={editForm.tag || ''}
                    onChange={(e) => setEditForm({ ...editForm, tag: e.target.value })}
                    placeholder="Tag / Eyebrow"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                  />
                  <textarea
                    rows={2}
                    value={editForm.description || ''}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    placeholder="Description"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                  />
                </div>
              );
            }

            return (
              <div
                key={service.id}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        {service.tag}
                      </span>
                      <h5 className="text-sm font-bold text-slate-900 mt-1">{service.title}</h5>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleStartEdit(service)}
                        className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors cursor-pointer"
                        title="Edit"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
