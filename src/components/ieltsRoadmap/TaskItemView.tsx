import React from 'react';
import { Check, Clock, ExternalLink, Sparkles } from 'lucide-react';
import { TaskItem, SkillCategory } from '../../types/ieltsRoadmap';

interface TaskItemViewProps {
  task: TaskItem;
  dayNumber: number;
  isCompleted: boolean;
  onToggle: (taskId: number) => void;
}

export const TaskItemView: React.FC<TaskItemViewProps> = ({
  task,
  dayNumber,
  isCompleted,
  onToggle
}) => {
  const getCategoryBadge = (category: SkillCategory) => {
    switch (category) {
      case 'Listening':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Reading':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Writing':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Speaking':
        return 'bg-amber-50 text-amber-800 border-amber-200';
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
      onClick={() => onToggle(task.id)}
      className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200 text-left cursor-pointer select-none flex items-start gap-3 sm:gap-3.5 ${
        isCompleted
          ? 'bg-emerald-50/50 border-emerald-300 text-slate-700'
          : 'bg-white border-slate-200/90 hover:border-blue-300 hover:shadow-xs text-slate-900'
      }`}
    >
      {/* Checkbox */}
      <div className="pt-0.5 shrink-0">
        <div
          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
            isCompleted
              ? 'bg-emerald-600 border-emerald-600 text-white shadow-2xs'
              : 'border-slate-300 bg-white hover:border-blue-500'
          }`}
        >
          {isCompleted && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />}
        </div>
      </div>

      {/* Task Content */}
      <div className="min-w-0 flex-1 space-y-1.5">
        
        {/* Header line: Task Number & Category & Duration */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="font-extrabold text-slate-500">
            Task {task.id < 10 ? `0${task.id}` : task.id}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getCategoryBadge(
              task.category
            )}`}
          >
            {task.category}
          </span>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 ml-auto">
            <Clock className="w-3 h-3 text-slate-500" />
            <span>{task.duration}</span>
          </div>
        </div>

        {/* Task Title */}
        <h4
          className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
            isCompleted ? 'line-through text-slate-500' : 'text-slate-900'
          }`}
        >
          {task.title}
        </h4>

        {/* Instruction if present */}
        {task.instruction && (
          <p
            className={`text-xs leading-relaxed ${
              isCompleted ? 'text-slate-500' : 'text-slate-600'
            }`}
          >
            {task.instruction}
          </p>
        )}

        {/* Optional Resource Link */}
        {task.resourceUrl && (
          <div className="pt-1" onClick={(e) => e.stopPropagation()}>
            <a
              href={task.resourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg transition-colors border border-blue-200/80"
            >
              <ExternalLink className="w-3 h-3" />
              <span>{task.resourceLabel || 'অফিশিয়াল রিসোর্স লিঙ্ক দেখুন'}</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
