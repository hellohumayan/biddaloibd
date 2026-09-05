export type SkillCategory = 
  | 'Listening'
  | 'Reading'
  | 'Writing'
  | 'Speaking'
  | 'Vocabulary'
  | 'Grammar'
  | 'General'
  | 'Mock Test';

export interface TaskItem {
  id: number;
  category: SkillCategory;
  title: string;
  duration: string;
  instruction?: string;
  resourceUrl?: string;
  resourceLabel?: string;
  required: boolean;
}

export interface RoadmapPhase {
  id: number;
  name: string;
  nameBn: string;
  dayRange: string;
  startDay: number;
  endDay: number;
  description: string;
  badgeColor: string;
}

export interface RoadmapDay {
  day: number;
  phaseId: number;
  phaseName: string;
  title: string;
  duration: string;
  skills: SkillCategory[];
  introduction: string;
  tasks: TaskItem[];
}

export interface UserRoadmapProgress {
  completedDays: number[];
  completedTasks: Record<string, boolean>; // e.g. "day-taskId": true
  dayCompletionDates: Record<number, string>; // e.g. 1: "05 Sep 2026"
  lastActiveDay: number;
  streak: number;
  lastStudyDate: string; // YYYY-MM-DD
  sequentialMode: boolean; // if true, locks day N if day N-1 is not completed
}
