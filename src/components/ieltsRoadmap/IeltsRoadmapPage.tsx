import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Search, 
  Layers, 
  Sparkles, 
  Filter, 
  Play, 
  ArrowUp, 
  CheckCircle2, 
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { MobileStickyBar } from '../MobileStickyBar';

import { IELTS_PHASES, IELTS_ROADMAP_DAYS } from '../../data/ieltsRoadmapData';
import { RoadmapDay, UserRoadmapProgress } from '../../types/ieltsRoadmap';
import { 
  loadUserProgress, 
  saveUserProgress, 
  resetUserProgress, 
  calculateStreak,
  getFormattedToday 
} from '../../utils/ieltsProgress';

import { IeltsHero } from './IeltsHero';
import { ProgressDashboard } from './ProgressDashboard';
import { PhaseFilter } from './PhaseFilter';
import { DayCard } from './DayCard';
import { DailyTaskModal } from './DailyTaskModal';
import { HowItWorksSteps } from './HowItWorksSteps';
import { SuccessTips } from './SuccessTips';
import { RoadmapCTA } from './RoadmapCTA';

interface IeltsRoadmapPageProps {
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigateToCountry: (countryId: string) => void;
  onNavigateToAffiliate?: () => void;
  onNavigateToPartners?: () => void;
  onOpenCounseling: (notes?: string) => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
  onViewCourses?: () => void;
}

export const IeltsRoadmapPage: React.FC<IeltsRoadmapPageProps> = ({
  onNavigateHome,
  onNavigateSection,
  onNavigateToCountry,
  onNavigateToAffiliate,
  onNavigateToPartners,
  onOpenCounseling,
  onOpenSearch,
  onOpenLogin,
  onViewCourses
}) => {
  // Sync document title and meta description
  useEffect(() => {
    const originalTitle = document.title;
    document.title = '60 Days IELTS Roadmap for Bangladeshi Students | Biddaloi';

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    const originalDesc = metaDesc ? metaDesc.content : '';

    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Follow Biddaloi’s free 60-day IELTS preparation roadmap with daily Reading, Writing, Listening, Speaking, vocabulary and mock-test activities.';

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = originalTitle;
      if (metaDesc) metaDesc.content = originalDesc;
    };
  }, []);

  // User progress state loaded from localStorage
  const [progress, setProgress] = useState<UserRoadmapProgress>(() => loadUserProgress());

  // Save whenever progress updates
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // UI Filtering & Search State
  const [selectedPhaseId, setSelectedPhaseId] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDay, setActiveModalDay] = useState<RoadmapDay | null>(null);

  // Total tasks count across all 60 days
  const totalTasksCount = useMemo(() => {
    return IELTS_ROADMAP_DAYS.reduce((sum, d) => sum + d.tasks.length, 0);
  }, []);

  // Filtered days based on Phase tab and search query
  const filteredDays = useMemo(() => {
    return IELTS_ROADMAP_DAYS.filter((dayItem) => {
      // Phase match
      if (selectedPhaseId !== 'all' && dayItem.phaseId !== selectedPhaseId) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = dayItem.title.toLowerCase().includes(query);
        const matchDay = `day ${dayItem.day}`.includes(query) || `${dayItem.day}` === query;
        const matchSkill = dayItem.skills.some((s) => s.toLowerCase().includes(query));
        const matchIntro = dayItem.introduction.toLowerCase().includes(query);
        const matchTasks = dayItem.tasks.some((t) => t.title.toLowerCase().includes(query));
        return matchTitle || matchDay || matchSkill || matchIntro || matchTasks;
      }

      return true;
    });
  }, [selectedPhaseId, searchQuery]);

  // Handle task check/uncheck
  const handleToggleTask = useCallback((day: number, taskId: number) => {
    setProgress((prev) => {
      const key = `${day}-${taskId}`;
      const isChecked = !prev.completedTasks[key];
      const newTasks = { ...prev.completedTasks, [key]: isChecked };

      // Update streak
      const { newStreak, todayStr } = calculateStreak(prev.streak, prev.lastStudyDate);

      // Check if all tasks in this day are now checked
      const dayData = IELTS_ROADMAP_DAYS.find((d) => d.day === day);
      let newCompletedDays = [...prev.completedDays];
      let newCompletionDates = { ...prev.dayCompletionDates };

      if (dayData) {
        const allChecked = dayData.tasks.every((t) => (t.id === taskId ? isChecked : newTasks[`${day}-${t.id}`]));
        if (allChecked && !newCompletedDays.includes(day)) {
          newCompletedDays.push(day);
          newCompletionDates[day] = getFormattedToday();
        } else if (!allChecked && newCompletedDays.includes(day)) {
          newCompletedDays = newCompletedDays.filter((d) => d !== day);
          delete newCompletionDates[day];
        }
      }

      return {
        ...prev,
        completedTasks: newTasks,
        completedDays: newCompletedDays,
        dayCompletionDates: newCompletionDates,
        lastActiveDay: day,
        streak: newStreak,
        lastStudyDate: todayStr
      };
    });
  }, []);

  // Mark an entire day completed
  const handleCompleteDay = useCallback((day: number) => {
    setProgress((prev) => {
      const dayData = IELTS_ROADMAP_DAYS.find((d) => d.day === day);
      if (!dayData) return prev;

      const newTasks = { ...prev.completedTasks };
      dayData.tasks.forEach((t) => {
        newTasks[`${day}-${t.id}`] = true;
      });

      const newCompletedDays = prev.completedDays.includes(day)
        ? prev.completedDays
        : [...prev.completedDays, day].sort((a, b) => a - b);

      const newCompletionDates = {
        ...prev.dayCompletionDates,
        [day]: prev.dayCompletionDates[day] || getFormattedToday()
      };

      const { newStreak, todayStr } = calculateStreak(prev.streak, prev.lastStudyDate);
      const nextDay = Math.min(60, day + 1);

      return {
        ...prev,
        completedTasks: newTasks,
        completedDays: newCompletedDays,
        dayCompletionDates: newCompletionDates,
        lastActiveDay: nextDay,
        streak: newStreak,
        lastStudyDate: todayStr
      };
    });
  }, []);

  // Reset progress handler
  const handleResetProgress = useCallback(() => {
    const initial = resetUserProgress();
    setProgress(initial);
  }, []);

  // Toggle sequential locking mode
  const handleToggleSequentialMode = useCallback(() => {
    setProgress((prev) => ({
      ...prev,
      sequentialMode: !prev.sequentialMode
    }));
  }, []);

  // Continue Learning: scroll to and open current day
  const handleContinueLearning = useCallback(() => {
    const targetDayNumber = progress.lastActiveDay || 1;
    const targetDay = IELTS_ROADMAP_DAYS.find((d) => d.day === targetDayNumber) || IELTS_ROADMAP_DAYS[0];
    
    // Set filter to include target day
    if (selectedPhaseId !== 'all' && targetDay.phaseId !== selectedPhaseId) {
      setSelectedPhaseId('all');
    }

    setActiveModalDay(targetDay);
  }, [progress.lastActiveDay, selectedPhaseId]);

  // Navigate adjacent day inside modal
  const handleNavigateAdjacentDay = useCallback((direction: 'prev' | 'next') => {
    if (!activeModalDay) return;
    const newDayNum = direction === 'prev' ? activeModalDay.day - 1 : activeModalDay.day + 1;
    if (newDayNum >= 1 && newDayNum <= 60) {
      const nextDayData = IELTS_ROADMAP_DAYS.find((d) => d.day === newDayNum);
      if (nextDayData) {
        setActiveModalDay(nextDayData);
      }
    }
  }, [activeModalDay]);

  // Scroll to roadmap grid
  const handleScrollToGrid = () => {
    const el = document.getElementById('roadmap-grid-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to How It Works
  const handleScrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works-roadmap');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      
      {/* 1. Header & Navigation (Unchanged from existing website) */}
      <Navbar
        onOpenSearch={onOpenSearch}
        onOpenLogin={onOpenLogin}
        onOpenCounseling={() => onOpenCounseling('IELTS Roadmap Consultation')}
        onNavigateSection={onNavigateSection}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateAffiliate={onNavigateToAffiliate}
        onNavigatePartners={onNavigateToPartners}
      />

      {/* Main Body Section */}
      <main className="pt-16 sm:pt-20">
        
        {/* 1. Hero Section */}
        <IeltsHero
          onStartRoadmap={handleScrollToGrid}
          onHowItWorks={handleScrollToHowItWorks}
        />

        {/* 2. User Progress Dashboard */}
        <ProgressDashboard
          progress={progress}
          totalDays={60}
          totalTasks={totalTasksCount}
          phases={IELTS_PHASES}
          onContinueLearning={handleContinueLearning}
          onResetProgress={handleResetProgress}
          onToggleSequentialMode={handleToggleSequentialMode}
        />

        {/* 3. Phase Navigation Bar */}
        <PhaseFilter
          phases={IELTS_PHASES}
          allDays={IELTS_ROADMAP_DAYS}
          selectedPhaseId={selectedPhaseId}
          progress={progress}
          onSelectPhase={(phaseId) => setSelectedPhaseId(phaseId)}
        />

        {/* 4. 60-Day Roadmap Grid Section */}
        <section id="roadmap-grid-section" className="py-10 sm:py-14 bg-[#F8FAFD] scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Toolbar: Search, Results Count, Filter Summary */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>
                    {selectedPhaseId === 'all'
                      ? 'সম্পূর্ণ ৬০ দিনের পাঠ্যক্রম'
                      : IELTS_PHASES.find((p) => p.id === selectedPhaseId)?.nameBn || 'IELTS Phase'}
                  </span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                    {filteredDays.length} {filteredDays.length === 1 ? 'Day' : 'Days'}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  যে কোনো কার্ডে ক্লিক করে প্রতিদিনের টাস্ক দেখুন এবং সম্পূর্ণ করুন।
                </p>
              </div>

              {/* Search Field */}
              <div className="w-full sm:w-72 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="টপিক বা দিন খুঁজুন (e.g. Day 1, Listening)..."
                  className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Empty State if filter yields no result */}
            {filteredDays.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center max-w-md mx-auto space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-800">
                  কোনো দিন পাওয়া যায়নি
                </h3>
                <p className="text-xs text-slate-500">
                  "{searchQuery}" দিয়ে কোনো পাঠ্যক্রম মেলেনি। ভিন্ন শব্দ বা অল ডেজ ফিল্টারে ট্রাই করুন।
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedPhaseId('all');
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  সব দিন দেখুন
                </button>
              </div>
            ) : (
              /* 60 Cards Grid: 4-5 on desktop, 2-3 on tablet, 1-2 on mobile */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5">
                {filteredDays.map((dayData) => {
                  // Check if locked in sequential mode
                  const isLocked =
                    progress.sequentialMode &&
                    dayData.day > 1 &&
                    !progress.completedDays.includes(dayData.day - 1);

                  return (
                    <DayCard
                      key={dayData.day}
                      dayData={dayData}
                      progress={progress}
                      isLocked={isLocked}
                      onOpenDay={(d) => setActiveModalDay(d)}
                    />
                  );
                })}
              </div>
            )}

          </div>
        </section>

        {/* 5. How This Roadmap Works */}
        <HowItWorksSteps />

        {/* 6. IELTS Success Tips */}
        <SuccessTips />

        {/* 7. Need Expert Support? CTA */}
        <RoadmapCTA
          onOpenCounseling={() => onOpenCounseling('IELTS Mentorship Consultation')}
          onViewCourses={onViewCourses}
        />

      </main>

      {/* Footer (Unchanged from existing website) */}
      <Footer
        onNavigateSection={onNavigateSection}
        onFilterDestination={onNavigateToCountry}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateToAffiliate={onNavigateToAffiliate}
        onNavigateToPartners={onNavigateToPartners}
        onOpenCounseling={() => onOpenCounseling('IELTS Roadmap Student Inquiry')}
      />

      {/* Mobile Sticky Bar (Unchanged from existing website) */}
      <MobileStickyBar
        onFindCourse={() => onOpenCounseling('Find IELTS Preparation Courses')}
        onTalkCounselor={() => onOpenCounseling('Talk with IELTS Counselor')}
      />

      {/* Daily Task Modal */}
      <DailyTaskModal
        dayData={activeModalDay}
        progress={progress}
        onClose={() => setActiveModalDay(null)}
        onToggleTask={handleToggleTask}
        onCompleteDay={handleCompleteDay}
        onNavigateAdjacentDay={handleNavigateAdjacentDay}
      />

    </div>
  );
};
