import { UserRoadmapProgress } from '../types/ieltsRoadmap';

const STORAGE_KEY = 'biddaloi_ielts_roadmap_progress_v1';

export const INITIAL_PROGRESS: UserRoadmapProgress = {
  completedDays: [],
  completedTasks: {},
  dayCompletionDates: {},
  lastActiveDay: 1,
  streak: 0,
  lastStudyDate: '',
  sequentialMode: false,
};

/**
 * Loads user progress from localStorage.
 * NOTE: For cloud persistence (Firebase / Supabase / Biddaloi backend),
 * this function can be hooked with user session or Firestore sync.
 */
export function loadUserProgress(): UserRoadmapProgress {
  if (typeof window === 'undefined') return INITIAL_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      completedDays: Array.isArray(parsed.completedDays) ? parsed.completedDays : [],
      completedTasks: parsed.completedTasks && typeof parsed.completedTasks === 'object' ? parsed.completedTasks : {},
      dayCompletionDates: parsed.dayCompletionDates && typeof parsed.dayCompletionDates === 'object' ? parsed.dayCompletionDates : {},
      lastActiveDay: typeof parsed.lastActiveDay === 'number' ? parsed.lastActiveDay : 1,
      streak: typeof parsed.streak === 'number' ? parsed.streak : 0,
      lastStudyDate: typeof parsed.lastStudyDate === 'string' ? parsed.lastStudyDate : '',
      sequentialMode: Boolean(parsed.sequentialMode),
    };
  } catch (err) {
    console.warn('Failed to load IELTS roadmap progress from localStorage:', err);
    return INITIAL_PROGRESS;
  }
}

/**
 * Saves user progress to localStorage.
 * NOTE: Backend sync integration point. When user is authenticated,
 * push `progress` payload to server / Firestore doc: `users/{uid}/ielts_roadmap`.
 */
export function saveUserProgress(progress: UserRoadmapProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save IELTS roadmap progress to localStorage:', err);
  }
}

/**
 * Clears saved roadmap data and resets to initial state.
 */
export function resetUserProgress(): UserRoadmapProgress {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  }
  return INITIAL_PROGRESS;
}

/**
 * Formats current date nicely for display in Bangla/English (e.g. "05 Sep 2026")
 */
export function getFormattedToday(): string {
  const d = new Date();
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

/**
 * Calculates current streak on task/day interaction
 */
export function calculateStreak(currentStreak: number, lastDateStr: string): { newStreak: number; todayStr: string } {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0]; // YYYY-MM-DD

  if (!lastDateStr) {
    return { newStreak: 1, todayStr };
  }

  if (lastDateStr === todayStr) {
    return { newStreak: Math.max(1, currentStreak), todayStr };
  }

  const lastDate = new Date(lastDateStr);
  const diffTime = today.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return { newStreak: currentStreak + 1, todayStr };
  } else if (diffDays > 1) {
    return { newStreak: 1, todayStr };
  }

  return { newStreak: currentStreak, todayStr };
}

/**
 * Motivational message based on completion percentage
 */
export function getMotivationalMessage(percentage: number): string {
  if (percentage <= 0) {
    return 'আজই আপনার IELTS প্রস্তুতি শুরু করুন।';
  } else if (percentage < 25) {
    return 'দারুণ সূচনা! প্রতিদিনের নির্ধারিত টাস্ক সম্পন্ন করে ধারাবাহিকতা বজায় রাখুন।';
  } else if (percentage < 50) {
    return 'দারুণ শুরু! নিয়মিত practice চালিয়ে যান।';
  } else if (percentage < 75) {
    return 'আপনি অর্ধেক পথ অতিক্রম করেছেন! নিজের ওপর বিশ্বাস রাখুন।';
  } else if (percentage < 100) {
    return 'লক্ষ্য এখন খুব কাছেই। শেষ ধাপের রিভিশন ও মক টেস্টে সর্বোচ্চ জোর দিন।';
  } else {
    return 'অভিনন্দন! আপনি 60 Days Roadmap সম্পন্ন করেছেন। শুভকামনা আপনার মূল পরীক্ষার জন্য!';
  }
}
