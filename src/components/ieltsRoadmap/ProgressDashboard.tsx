import React, { useState } from 'react';
import { 
  Trophy, 
  Flame, 
  CheckCircle, 
  RotateCcw, 
  Play, 
  Sparkles, 
  Layers, 
  AlertTriangle, 
  Lock, 
  Unlock,
  CalendarCheck2
} from 'lucide-react';
import { UserRoadmapProgress, RoadmapPhase } from '../../types/ieltsRoadmap';
import { getMotivationalMessage } from '../../utils/ieltsProgress';

interface ProgressDashboardProps {
  progress: UserRoadmapProgress;
  totalDays: number;
  totalTasks: number;
  phases: RoadmapPhase[];
  onContinueLearning: () => void;
  onResetProgress: () => void;
  onToggleSequentialMode: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  progress,
  totalDays,
  totalTasks,
  phases,
  onContinueLearning,
  onResetProgress,
  onToggleSequentialMode,
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const completedDaysCount = progress.completedDays.length;
  const completedTasksCount = Object.keys(progress.completedTasks).filter(
    (k) => progress.completedTasks[k]
  ).length;

  const percentage = Math.min(
    100,
    Math.round((completedDaysCount / Math.max(1, totalDays)) * 100)
  );

  // Determine current phase based on last active or completed days
  const activeDay = progress.lastActiveDay || 1;
  const currentPhase = phases.find(
    (p) => activeDay >= p.startDay && activeDay <= p.endDay
  ) || phases[0];

  const motivationalMessage = getMotivationalMessage(percentage);

  const handleConfirmReset = () => {
    setShowResetConfirm(false);
    onResetProgress();
  };

  return (
    <section id="roadmap-progress" className="py-8 sm:py-10 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dashboard Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar: Title & Action Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-700/60 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-2">
                <Trophy className="w-3.5 h-3.5 text-blue-400" />
                আপনার IELTS Journey
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <span>প্রস্তুতির অগ্রগতি ড্যাশবোর্ড</span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-600/30 text-blue-300 border border-blue-500/40">
                  {percentage}% Completed
                </span>
              </h2>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {/* Sequential Mode Toggle */}
              <button
                type="button"
                onClick={onToggleSequentialMode}
                title={progress.sequentialMode ? 'Sequential Mode সক্রিয় (ধাপে ধাপে আনলক হবে)' : 'Free Mode সক্রিয় (যেকোনো দিন উন্মুক্ত)'}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                  progress.sequentialMode
                    ? 'bg-amber-500/20 text-amber-300 border-amber-400/40 hover:bg-amber-500/30'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {progress.sequentialMode ? (
                  <>
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Sequential Mode: ON</span>
                  </>
                ) : (
                  <>
                    <Unlock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Free Mode: Open All</span>
                  </>
                )}
              </button>

              {/* Reset Progress Button */}
              <button
                type="button"
                id="btn-reset-progress"
                onClick={() => setShowResetConfirm(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-rose-950/40 text-slate-300 hover:text-rose-300 text-xs font-bold border border-slate-700 hover:border-rose-500/40 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Progress</span>
              </button>

              {/* Continue Learning CTA */}
              <button
                type="button"
                id="btn-continue-learning"
                onClick={onContinueLearning}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-extrabold shadow-md hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Continue Learning (Day {activeDay})</span>
              </button>
            </div>
          </div>

          {/* 4 KPI Metric Blocks */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-6 relative z-10">
            {/* 1: Completed Days */}
            <div className="bg-slate-800/60 rounded-xl sm:rounded-2xl p-4 border border-slate-700/60">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider">Completed Days</span>
                <CalendarCheck2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">
                {completedDaysCount}/{totalDays} <span className="text-xs sm:text-sm font-medium text-slate-400">দিন সম্পন্ন</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>{totalDays - completedDaysCount} দিন বাকি</span>
              </div>
            </div>

            {/* 2: Current Phase */}
            <div className="bg-slate-800/60 rounded-xl sm:rounded-2xl p-4 border border-slate-700/60">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider">Current Phase</span>
                <Layers className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-base sm:text-lg font-black text-white truncate">
                {currentPhase.name}
              </div>
              <div className="text-[11px] text-blue-300 font-medium mt-1 truncate">
                {currentPhase.dayRange} ({currentPhase.nameBn.split('—')[1]?.trim() || currentPhase.name})
              </div>
            </div>

            {/* 3: Study Streak */}
            <div className="bg-slate-800/60 rounded-xl sm:rounded-2xl p-4 border border-slate-700/60">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider">Study Streak</span>
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 flex items-center gap-1.5">
                <span>{progress.streak || 0}</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-400">দিন Streak 🔥</span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-1">
                নিয়মিত চর্চা রাখুন
              </div>
            </div>

            {/* 4: Total Completed Tasks */}
            <div className="bg-slate-800/60 rounded-xl sm:rounded-2xl p-4 border border-slate-700/60">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider">Completed Tasks</span>
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">
                {completedTasksCount} <span className="text-xs sm:text-sm font-medium text-slate-400">/{totalTasks} Tasks</span>
              </div>
              <div className="text-[11px] text-indigo-300 font-medium mt-1">
                প্রতিদিনের চেকলিস্ট
              </div>
            </div>
          </div>

          {/* Progress Bar & Dynamic Motivational Message */}
          <div className="pt-2 relative z-10 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
              <span className="text-slate-300 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {motivationalMessage}
              </span>
              <span className="text-blue-300 font-bold">
                {completedDaysCount} of {totalDays} Days ({percentage}%)
              </span>
            </div>

            {/* Horizontal animated progress bar */}
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full transition-all duration-700 ease-out shadow-xs"
                style={{ width: `${Math.max(percentage > 0 ? 3 : 0, percentage)}%` }}
              />
            </div>
          </div>

        </div>

      </div>

      {/* Reset Confirmation Dialog */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
          <div
            className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 text-left space-y-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reset-modal-title"
          >
            <div className="flex items-center gap-3 text-rose-600">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center border border-rose-200 shrink-0">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h3 id="reset-modal-title" className="text-base font-bold text-slate-900">
                  অগ্রগতি রিসেট করবেন?
                </h3>
                <p className="text-xs text-slate-500">
                  Reset Roadmap Progress
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              আপনি কি নিশ্চিত যে আপনার সমস্ত টাস্ক এবং সম্পন্ন দিনের অগ্রগতি মুছে ফেলতে চান? এটি মুছে ফেললে তা আর ফিরিয়ে আনা যাবে না।
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                বাতিল করুন
              </button>
              <button
                type="button"
                onClick={handleConfirmReset}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-xs"
              >
                হ্যাঁ, রিসেট করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
