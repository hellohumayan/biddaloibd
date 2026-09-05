import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { RoadmapPhase, RoadmapDay, UserRoadmapProgress } from '../../types/ieltsRoadmap';

interface PhaseFilterProps {
  phases: RoadmapPhase[];
  allDays: RoadmapDay[];
  selectedPhaseId: number | 'all';
  progress: UserRoadmapProgress;
  onSelectPhase: (phaseId: number | 'all') => void;
}

export const PhaseFilter: React.FC<PhaseFilterProps> = ({
  phases,
  allDays,
  selectedPhaseId,
  progress,
  onSelectPhase
}) => {
  // Compute completion stats for each phase
  const getPhaseStats = (phase: RoadmapPhase) => {
    const phaseDays = allDays.filter((d) => d.day >= phase.startDay && d.day <= phase.endDay);
    const completedInPhase = phaseDays.filter((d) => progress.completedDays.includes(d.day)).length;
    return {
      total: phaseDays.length,
      completed: completedInPhase,
      isFullyCompleted: phaseDays.length > 0 && completedInPhase === phaseDays.length
    };
  };

  const totalCompleted = progress.completedDays.length;

  return (
    <div className="bg-white border-b border-slate-200/80 sticky top-[60px] sm:top-[68px] z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Horizontal Scrollable Tabs container */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 scroll-smooth">
          
          {/* 'All Days' Tab */}
          <button
            type="button"
            onClick={() => onSelectPhase('all')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all border ${
              selectedPhaseId === 'all'
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Days</span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                selectedPhaseId === 'all'
                  ? 'bg-blue-700/80 text-white'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              {totalCompleted}/60
            </span>
          </button>

          {/* Phase 1 to 6 Tabs */}
          {phases.map((phase) => {
            const stats = getPhaseStats(phase);
            const isSelected = selectedPhaseId === phase.id;

            // Short labels for tabs
            const shortLabels: Record<number, string> = {
              1: 'Foundation',
              2: 'Skill Building',
              3: 'Techniques',
              4: 'Practice',
              5: 'Mock Tests',
              6: 'Final Revision'
            };

            const tabLabel = shortLabels[phase.id] || phase.name;

            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => onSelectPhase(phase.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : stats.isFullyCompleted
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100/80'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {stats.isFullyCompleted ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <span className="text-[11px] font-black opacity-70">
                    P0{phase.id}
                  </span>
                )}
                <span>{tabLabel}</span>
                <span className="text-[10px] opacity-75 hidden md:inline">
                  ({phase.dayRange})
                </span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-blue-700/80 text-white'
                      : stats.isFullyCompleted
                      ? 'bg-emerald-200 text-emerald-900'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {stats.completed}/{stats.total}
                </span>
              </button>
            );
          })}

        </div>

      </div>
    </div>
  );
};
