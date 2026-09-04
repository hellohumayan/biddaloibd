import React from 'react';
import { Course } from '../types';
import { X, Calendar, Clock, DollarSign, Award, FileText, CheckCircle, ArrowRight } from 'lucide-react';

interface CourseDetailsModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (course: Course) => void;
}

export const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({
  course,
  isOpen,
  onClose,
  onApply
}) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{course.flag}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
              {course.level}
            </span>
            <span className="text-xs text-slate-300">
              {course.country}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white pr-8">
            {course.title}
          </h3>
          <p className="text-sm text-slate-300 mt-1 flex items-center gap-2">
            <span>{course.universityName}</span>
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                Duration
              </div>
              <p className="text-sm font-bold text-slate-800">{course.duration}</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Calendar className="w-3.5 h-3.5 text-teal-600" />
                Intakes
              </div>
              <p className="text-xs font-bold text-slate-800">{course.intake}</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                Tuition Fee
              </div>
              <p className="text-sm font-bold text-slate-900">${course.tuitionUsd.toLocaleString()}</p>
              <p className="text-[10px] text-slate-500">{course.tuitionBdt}</p>
            </div>

            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium mb-1">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                Scholarship
              </div>
              <p className="text-xs font-bold text-emerald-800 leading-snug">{course.scholarshipAvailable}</p>
            </div>
          </div>

          {/* Program Overview */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Program Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {course.overview}
            </p>
          </div>

          {/* Admission & Language Requirements */}
          <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              Admission Requirements for Bangladeshi Students
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Minimum Academic Score:</span>
                <p className="text-slate-600 mt-0.5">{course.requirements.minGpa}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">English Language:</span>
                <p className="text-slate-600 mt-0.5">{course.englishRequirement}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Application Deadline:</span>
                <p className="text-slate-600 mt-0.5">{course.requirements.deadline}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Visa Processing:</span>
                <p className="text-slate-600 mt-0.5">Assisted by Biddaloi Dhaka Team</p>
              </div>
            </div>
          </div>

          {/* Career Prospects */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2.5">
              Target Career Pathways
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.careerProspects.map((career, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-medium text-slate-700"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                  {career}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(course);
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all transform active:scale-95"
          >
            Apply for this Program
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
