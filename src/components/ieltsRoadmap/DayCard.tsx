import React from 'react';
import { 
  CheckCircle, 
  Clock, 
  ListChecks, 
  Lock, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { RoadmapDay, UserRoadmapProgress, SkillCategory } from '../../types/ieltsRoadmap';

interface DayCardProps {
  dayData: RoadmapDay;
  progress: UserRoadmapProgress;
  isLocked: boolean;
  onOpenDay: (dayData: RoadmapDay) => void;
}

export const DayCard: React.FC<DayCardProps> = ({
  dayData,
  progress,
  isLocked,
  onOpenDay
}) => {
  const isCompleted = progress.completedDays.includes(dayData.day);
  const completedDate = progress.dayCompletionDates[dayData.day];

  // Count how many tasks in this day are ticked
  const tasksInDay = dayData.tasks;
  const completedTasksInThisDay = tasksInDay.filter(
    (t) => progress.completedTasks[`${dayData.day}-${t.id}`]
  ).length;

  const hasStarted = !isCompleted && completedTasksInThisDay > 0;

  // Status computation
  let statusBadge = {
    label: 'Not Started',
    color: 'bg-slate-100 text-slate-600 border-slate-200'
  };

  if (isLocked) {
    statusBadge = {
      label: 'Locked',
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    };
  } else if (isCompleted) {
    statusBadge = {
      label: 'Completed',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    };
  } else if (hasStarted) {
    statusBadge = {
      label: `In Progress (${completedTasksInThisDay}/${tasksInDay.length})`,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    };
  }

  // Skill badge color helper
  const getSkillBadge = (skill: SkillCategory) => {
    switch (skill) {
      case 'Listening':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Reading':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Writing':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Speaking':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Vocabulary':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Grammar':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Mock Test':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div
      onClick={() => {
        if (!isLocked) {
          onOpenDay(dayData);
        }
      }}
      className={`relative rounded-2xl border transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 text-left ${
        isLocked
          ? 'bg-slate-50/80 border-slate-200 opacity-75 cursor-not-allowed'
          : isCompleted
          ? 'bg-emerald-50/40 border-emerald-300/80 shadow-2xs hover:shadow-md hover:border-emerald-400 cursor-pointer'
          : hasStarted
          ? 'bg-white border-blue-300 shadow-2xs hover:shadow-md hover:border-blue-500 cursor-pointer ring-1 ring-blue-500/20'
          : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400 cursor-pointer'
      }`}
    >
      {/* Top Row: Day Number & Status */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5">
            <span
              className={`flex items-center justify-center font-black text-xs px-2.5 py-1 rounded-lg ${
                isCompleted
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : hasStarted
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-900 text-white'
              }`}
            >
              Day {dayData.day < 10 ? `0${dayData.day}` : dayData.day}
            </span>

            <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
              P0{dayData.phaseId}
            </span>
          </div>

          {/* Status Badge */}
          <span
            className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${statusBadge.color}`}
          >
            {isLocked ? (
              <Lock className="w-3 h-3 text-amber-600" />
            ) : isCompleted ? (
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            ) : hasStarted ? (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            ) : null}
            <span>{statusBadge.label}</span>
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-sm sm:text-base font-bold leading-snug line-clamp-2 transition-colors mb-2 ${
            isCompleted
              ? 'text-emerald-950 group-hover:text-emerald-800'
              : 'text-slate-900 group-hover:text-blue-600'
          }`}
        >
          {dayData.title}
        </h3>

        {/* Phase name & Duration Row */}
        <div className="flex items-center gap-3 text-xs text-slate-600 mb-3 flex-wrap">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>{dayData.duration}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <ListChecks className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>{dayData.tasks.length} Tasks</span>
          </div>
        </div>

        {/* Skill Category Chips */}
        <div className="flex items-center gap-1.5 flex-wrap mb-4">
          {dayData.skills.map((skill) => (
            <span
              key={skill}
              className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getSkillBadge(
                skill
              )}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        {isCompleted && completedDate ? (
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
            <Calendar className="w-3 h-3 text-emerald-600" />
            <span>{completedDate} এ সম্পন্ন</span>
          </div>
        ) : (
          <div className="text-[11px] text-slate-600">
            {isLocked
              ? 'পূর্ববর্তী দিন সম্পন্ন করুন'
              : hasStarted
              ? `${completedTasksInThisDay} / ${tasksInDay.length} শেষ হয়েছে`
              : 'শুরু করতে ক্লিক করুন'}
          </div>
        )}

        <button
          type="button"
          disabled={isLocked}
          onClick={(e) => {
            e.stopPropagation();
            if (!isLocked) onOpenDay(dayData);
          }}
          className={`inline-flex items-center gap-1 text-xs font-extrabold px-3 py-1.5 rounded-xl transition-all ${
            isLocked
              ? 'text-slate-400 bg-slate-100 cursor-not-allowed'
              : isCompleted
              ? 'text-emerald-700 bg-emerald-100/80 hover:bg-emerald-200'
              : 'text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white'
          }`}
        >
          <span>{isCompleted ? 'রিভিউ করুন' : 'আজকের Task দেখুন'}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

    </div>
  );
};
