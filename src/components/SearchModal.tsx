import React, { useState } from 'react';
import { Search, X, BookOpen, GraduationCap, MapPin, ArrowRight } from 'lucide-react';
import { coursesData } from '../data/courses';
import { destinationsData } from '../data/destinations';
import { Course, Destination } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
  onSelectDestination: (destId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse,
  onSelectDestination
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredCourses = query.trim()
    ? coursesData.filter(
        c =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.universityName.toLowerCase().includes(query.toLowerCase()) ||
          c.country.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      )
    : coursesData.slice(0, 3);

  const filteredDestinations = query.trim()
    ? destinationsData.filter(d =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.popularFor.toLowerCase().includes(query.toLowerCase())
      )
    : destinationsData.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100">
          <Search className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search programs, universities, countries (e.g. Computer Science, Canada, MBA)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-100 rounded-lg hover:bg-slate-200"
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-4">
          {/* Destinations Group */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Destinations
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {filteredDestinations.map(d => (
                <button
                  key={d.id}
                  onClick={() => {
                    onClose();
                    onSelectDestination(d.id);
                  }}
                  className="flex items-center gap-2 p-2 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 text-left transition-all group"
                >
                  <span className="text-xl">{d.flag}</span>
                  <div className="truncate">
                    <p className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 truncate">{d.name}</p>
                    <p className="text-[10px] text-slate-400">{d.universityCount}+ unis</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Courses Group */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              Featured Academic Programs
            </div>
            <div className="space-y-1.5">
              {filteredCourses.map(course => (
                <div
                  key={course.id}
                  onClick={() => {
                    onClose();
                    onSelectCourse(course);
                  }}
                  className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{course.flag}</span>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {course.universityName} • {course.level} • ${course.tuitionUsd.toLocaleString()}/yr
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
                    View
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 text-center">
          Pro-tip: Looking for tuition waivers? Type <span className="font-semibold text-blue-600">"Scholarship"</span> in the Course Finder.
        </div>
      </div>
    </div>
  );
};
