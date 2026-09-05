import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Save, 
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award
} from 'lucide-react';
import { RoadmapDay, UserRoadmapProgress } from '../../types/ieltsRoadmap';
import { TaskItemView } from './TaskItemView';

interface DailyTaskModalProps {
  dayData: RoadmapDay | null;
  progress: UserRoadmapProgress;
  onClose: () => void;
  onToggleTask: (day: number, taskId: number) => void;
  onCompleteDay: (day: number) => void;
  onNavigateAdjacentDay?: (direction: 'prev' | 'next') => void;
}

export const DailyTaskModal: React.FC<DailyTaskModalProps> = ({
  dayData,
  progress,
  onClose,
  onToggleTask,
  onCompleteDay,
  onNavigateAdjacentDay
}) => {
  const [saveToast, setSaveToast] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!dayData) return null;

  const isDayCompleted = progress.completedDays.includes(dayData.day);
  const tasks = dayData.tasks;
  
  // Count how many tasks are completed
  const completedTaskCount = tasks.filter(
    (t) => progress.completedTasks[`${dayData.day}-${t.id}`]
  ).length;

  const allTasksChecked = tasks.length > 0 && completedTaskCount === tasks.length;

  const handleSaveProgress = () => {
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
    }, 2200);
  };

  const handleCompleteDayClick = () => {
    onCompleteDay(dayData.day);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
    }, 2200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-2xl lg:max-w-3xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-day-title"
      >
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 pb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white relative">
          
          {/* Top navigation row */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-xs">
                Day {dayData.day < 10 ? `0${dayData.day}` : dayData.day}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 text-blue-200 font-bold text-xs border border-white/10">
                {dayData.phaseName}
              </span>
            </div>

            <div className="flex items-center gap-1">
              {onNavigateAdjacentDay && (
                <>
                  <button
                    type="button"
                    disabled={dayData.day <= 1}
                    onClick={() => onNavigateAdjacentDay('prev')}
                    title="পূর্ববর্তী দিন"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    disabled={dayData.day >= 60}
                    onClick={() => onNavigateAdjacentDay('next')}
                    title="পরবর্তী দিন"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
              
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors ml-1"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Day Topic Title */}
          <h2 id="modal-day-title" className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
            {dayData.title}
          </h2>

          {/* Time & Task Counter */}
          <div className="flex items-center gap-4 text-xs text-blue-200 mt-2 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-300" />
              <span>আনুমানিক সময়: {dayData.duration}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>{tasks.length}টি অ্যাকশনেবল টাস্ক</span>
            </div>
            {isDayCompleted && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-400/40 px-2.5 py-0.5 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                সম্পন্ন হয়েছে
              </span>
            )}
          </div>

        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 bg-slate-50/50">
          
          {/* Day Introduction Banner */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-blue-900 block mb-0.5">
                আজকের লার্নিং অবজেক্টিভ:
              </span>
              <p className="text-blue-900/90 font-medium">
                {dayData.introduction}
              </p>
            </div>
          </div>

          {/* Task Progress Indicator */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 pb-1">
            <span>আজকের টাস্ক চেকলিস্ট:</span>
            <span className="text-blue-600">
              {completedTaskCount} / {tasks.length} সম্পন্ন
            </span>
          </div>

          {/* Task List */}
          <div className="space-y-3">
            {tasks.map((task) => {
              const isChecked = Boolean(progress.completedTasks[`${dayData.day}-${task.id}`]);
              return (
                <TaskItemView
                  key={task.id}
                  task={task}
                  dayNumber={dayData.day}
                  isCompleted={isChecked}
                  onToggle={(taskId) => onToggleTask(dayData.day, taskId)}
                />
              );
            })}
          </div>

          {/* Helper Advice Card */}
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>পড়াশোনার কার্যকারিতা বাড়ানোর টিপস:</span>
            </div>
            <p>
              টাস্ক করার সময় মোবাইল ফোন সাইলেন্ট রাখুন। কোনো শব্দ বা গ্রামার ভুল হলে তা সাথে সাথে আপনার Mistake Notebook-এ এন্ট্রি করুন।
            </p>
          </div>

        </div>

        {/* Toast Notification for Save */}
        {saveToast && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 z-20 animate-fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>আপনার প্রগ্রেস সফলভাবে সংরক্ষণ করা হয়েছে!</span>
          </div>
        )}

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            পরে করবো
          </button>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            
            <button
              type="button"
              onClick={handleSaveProgress}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Progress Save করুন</span>
            </button>

            <button
              type="button"
              id="btn-complete-day"
              onClick={handleCompleteDayClick}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white transition-all shadow-md ${
                allTasksChecked || isDayCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'
              }`}
            >
              <CalendarCheck className="w-4 h-4" />
              <span>
                {isDayCompleted
                  ? 'দিনটি সম্পন্ন হিসেবে চিহ্নিত ✓'
                  : allTasksChecked
                  ? 'Day Complete করুন ✓'
                  : 'সব টাস্ক টিক দিয়ে Complete করুন'}
              </span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
