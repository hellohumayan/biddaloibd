import React, { useState } from 'react';
import { useSiteConfig } from '../../../context/SiteConfigContext';
import { Testimonial } from '../../../types';
import { MessageSquareQuote, Plus, Trash2, Edit2, Check, X, Star, Award } from 'lucide-react';

export const TestimonialsTab: React.FC = () => {
  const { config, updateSection } = useSiteConfig();
  const testConfig = config.testimonials;
  const items = testConfig.items || [];

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Testimonial>>({});
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [newTestimonial, setNewTestimonial] = useState<Partial<Testimonial>>({
    name: '',
    hometown: 'Dhaka, Bangladesh',
    destination: 'Canada',
    flag: '🇨🇦',
    university: '',
    program: '',
    quote: '',
    rating: 5,
    visaIntake: 'Fall 2025 Visa Approved',
    scholarshipReceived: 'Scholarship Recipient',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  });

  const handleStartEdit = (item: Testimonial) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  const handleSaveEdit = () => {
    if (!editingId) return;
    const updated = items.map((t) => (t.id === editingId ? ({ ...t, ...editForm } as Testimonial) : t));
    updateSection('testimonials', { items: updated });
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this student story?')) {
      const updated = items.filter((t) => t.id !== id);
      updateSection('testimonials', { items: updated });
    }
  };

  const handleCreateNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.university || !newTestimonial.quote) {
      alert('Please fill out student name, university, and quote.');
      return;
    }
    const created: Testimonial = {
      id: `test-${Date.now()}`,
      name: newTestimonial.name,
      hometown: newTestimonial.hometown || 'Dhaka, Bangladesh',
      destination: newTestimonial.destination || 'USA',
      flag: newTestimonial.flag || '🇺🇸',
      university: newTestimonial.university,
      program: newTestimonial.program || 'Master Degree Program',
      quote: newTestimonial.quote,
      rating: 5,
      visaIntake: newTestimonial.visaIntake || 'Visa Approved',
      scholarshipReceived: newTestimonial.scholarshipReceived,
      photo: newTestimonial.photo || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80'
    };
    updateSection('testimonials', { items: [...items, created] });
    setIsAddingNew(false);
    setNewTestimonial({
      name: '',
      hometown: 'Dhaka, Bangladesh',
      destination: 'Canada',
      flag: '🇨🇦',
      university: '',
      program: '',
      quote: '',
      rating: 5,
      visaIntake: 'Fall 2025 Visa Approved',
      scholarshipReceived: 'Scholarship Recipient',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Student Success Stories</h3>
        <p className="text-sm text-slate-500 mt-1">
          Manage verified student reviews, photos, destination countries, universities, and scholarship badges.
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
              value={testConfig.badge}
              onChange={(e) => updateSection('testimonials', { badge: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Section Title</label>
            <input
              type="text"
              value={testConfig.title}
              onChange={(e) => updateSection('testimonials', { title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Section Description</label>
          <textarea
            rows={2}
            value={testConfig.description}
            onChange={(e) => updateSection('testimonials', { description: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Testimonials List */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <MessageSquareQuote className="w-4 h-4 text-blue-600" />
            Verified Testimonials ({items.length})
          </h4>
          <button
            onClick={() => setIsAddingNew(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add Student Story
          </button>
        </div>

        {/* Add Form */}
        {isAddingNew && (
          <form onSubmit={handleCreateNew} className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-bold text-blue-900">Add Student Review</h5>
              <button type="button" onClick={() => setIsAddingNew(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Student Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Tanvir Ahmed"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">University</label>
                <input
                  type="text"
                  placeholder="e.g. University of Windsor"
                  value={newTestimonial.university}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, university: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Country Destination</label>
                <input
                  type="text"
                  placeholder="e.g. Canada"
                  value={newTestimonial.destination}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, destination: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Degree / Program</label>
                <input
                  type="text"
                  placeholder="e.g. Master of Applied Computing"
                  value={newTestimonial.program}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, program: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Visa Intake / Status</label>
                <input
                  type="text"
                  placeholder="e.g. Fall 2025 Visa Approved"
                  value={newTestimonial.visaIntake}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, visaIntake: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Scholarship Award (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. CAD $5,000 Entrance Award"
                  value={newTestimonial.scholarshipReceived || ''}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, scholarshipReceived: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Student Quote</label>
              <textarea
                rows={3}
                placeholder="How Biddaloi helped the student..."
                value={newTestimonial.quote}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
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
                Save Story
              </button>
            </div>
          </form>
        )}

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((story) => {
            const isEditing = editingId === story.id;

            if (isEditing) {
              return (
                <div key={story.id} className="p-4 rounded-xl border-2 border-blue-400 bg-blue-50/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900">Editing Story</span>
                    <div className="flex gap-1">
                      <button onClick={handleSaveEdit} className="p-1.5 rounded-lg bg-emerald-600 text-white">
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => setEditingId(null)} className="p-1.5 rounded-lg bg-slate-300 text-slate-700">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    value={editForm.name || ''}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    placeholder="Student Name"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={editForm.university || ''}
                      onChange={(e) => setEditForm({ ...editForm, university: e.target.value })}
                      placeholder="University"
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                    />
                    <input
                      type="text"
                      value={editForm.destination || ''}
                      onChange={(e) => setEditForm({ ...editForm, destination: e.target.value })}
                      placeholder="Destination"
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                    />
                  </div>
                  <textarea
                    rows={3}
                    value={editForm.quote || ''}
                    onChange={(e) => setEditForm({ ...editForm, quote: e.target.value })}
                    placeholder="Quote"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                  />
                </div>
              );
            }

            return (
              <div key={story.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={story.photo}
                        alt={story.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80';
                        }}
                      />
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">{story.name}</h5>
                        <p className="text-[11px] text-slate-500">{story.university}, {story.destination}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleStartEdit(story)}
                        className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-blue-600"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(story.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-2.5 italic line-clamp-3">
                    "{story.quote}"
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                    {story.visaIntake}
                  </span>
                  {story.scholarshipReceived && (
                    <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {story.scholarshipReceived}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
