import React, { useState } from 'react';
import { useSiteConfig } from '../../../context/SiteConfigContext';
import { LiveClassItem } from '../../../types/siteConfig';
import { Tv, Plus, Trash2, Edit2, Check, X, Play, Clock, User } from 'lucide-react';

export const LiveClassesTab: React.FC = () => {
  const { config, updateSection } = useSiteConfig();
  const classes = config.liveClasses?.classes || [];

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<LiveClassItem>>({});
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [newClass, setNewClass] = useState<Partial<LiveClassItem>>({
    title: '',
    category: 'Test Prep',
    mentor: '',
    mentorRole: 'Senior Consultant & Trainer',
    duration: '45 mins',
    isLive: false,
    studentsCount: 1200,
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    description: ''
  });

  const handleStartEdit = (item: LiveClassItem) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  const handleSaveEdit = () => {
    if (!editingId) return;
    const updated = classes.map((c) => (c.id === editingId ? ({ ...c, ...editForm } as LiveClassItem) : c));
    updateSection('liveClasses', { classes: updated });
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this video masterclass?')) {
      const updated = classes.filter((c) => c.id !== id);
      updateSection('liveClasses', { classes: updated });
    }
  };

  const handleCreateNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClass.title || !newClass.mentor) {
      alert('Please provide a class title and mentor name.');
      return;
    }
    const created: LiveClassItem = {
      id: `vid-${Date.now()}`,
      title: newClass.title,
      category: newClass.category || 'Test Prep',
      mentor: newClass.mentor,
      mentorRole: newClass.mentorRole || 'Certified Trainer',
      duration: newClass.duration || '40 mins',
      isLive: Boolean(newClass.isLive),
      studentsCount: Number(newClass.studentsCount) || 850,
      thumbnail: newClass.thumbnail || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
      youtubeId: 'dQw4w9WgXcQ',
      description: newClass.description || 'Comprehensive step-by-step masterclass.'
    };
    updateSection('liveClasses', { classes: [...classes, created] });
    setIsAddingNew(false);
    setNewClass({
      title: '',
      category: 'Test Prep',
      mentor: '',
      mentorRole: 'Senior Consultant & Trainer',
      duration: '45 mins',
      isLive: false,
      studentsCount: 1200,
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
      description: ''
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Live Classes & Video Library</h3>
        <p className="text-sm text-slate-500 mt-1">
          Manage the masterclasses and video tutorials accessible when students click "Watch Videos".
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Tv className="w-4 h-4 text-red-600" />
            Active Masterclasses ({classes.length})
          </h4>
          <button
            onClick={() => setIsAddingNew(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add Masterclass
          </button>
        </div>

        {/* Add Form */}
        {isAddingNew && (
          <form onSubmit={handleCreateNew} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-bold text-slate-900">Add New Masterclass</h5>
              <button type="button" onClick={() => setIsAddingNew(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Class Title</label>
                <input
                  type="text"
                  placeholder="e.g. F-1 Visa Interview Strategies"
                  value={newClass.title}
                  onChange={(e) => setNewClass({ ...newClass, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Category</label>
                <select
                  value={newClass.category}
                  onChange={(e) => setNewClass({ ...newClass, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                >
                  <option value="Test Prep">Test Prep (IELTS, PTE)</option>
                  <option value="Visa Interview">Visa Interview</option>
                  <option value="Application">Application & SOP</option>
                  <option value="Free Education">Free Education / Germany</option>
                  <option value="Scholarship">Scholarship & TA/RA</option>
                  <option value="Visa & Finance">Visa & Finance</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Mentor Name</label>
                <input
                  type="text"
                  placeholder="e.g. Tawhidur Rahman"
                  value={newClass.mentor}
                  onChange={(e) => setNewClass({ ...newClass, mentor: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Duration</label>
                <input
                  type="text"
                  placeholder="e.g. 45 mins"
                  value={newClass.duration}
                  onChange={(e) => setNewClass({ ...newClass, duration: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Thumbnail URL</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={newClass.thumbnail}
                  onChange={(e) => setNewClass({ ...newClass, thumbnail: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Description</label>
              <textarea
                rows={2}
                placeholder="What students learn in this video..."
                value={newClass.description}
                onChange={(e) => setNewClass({ ...newClass, description: e.target.value })}
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
                Save Masterclass
              </button>
            </div>
          </form>
        )}

        {/* Video Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {classes.map((item) => {
            const isEditing = editingId === item.id;

            if (isEditing) {
              return (
                <div key={item.id} className="p-4 rounded-xl border-2 border-blue-400 bg-blue-50/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900">Editing Video</span>
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
                    value={editForm.title || ''}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={editForm.mentor || ''}
                      onChange={(e) => setEditForm({ ...editForm, mentor: e.target.value })}
                      placeholder="Mentor"
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                    />
                    <input
                      type="text"
                      value={editForm.duration || ''}
                      onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                      placeholder="Duration"
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                    />
                  </div>
                  <textarea
                    rows={2}
                    value={editForm.description || ''}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                  />
                </div>
              );
            }

            return (
              <div key={item.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                      {item.category} • {item.duration}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleStartEdit(item)}
                        className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-blue-600"
                        title="Edit"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 mt-2 line-clamp-2">{item.title}</h5>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.description}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="font-semibold flex items-center gap-1">
                    <User className="w-3 h-3 text-blue-600" />
                    {item.mentor}
                  </span>
                  <span className="text-slate-400">{item.studentsCount} attended</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
