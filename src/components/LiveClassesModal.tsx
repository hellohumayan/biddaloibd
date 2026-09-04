import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Tv, 
  Users, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface LiveClass {
  id: string;
  title: string;
  category: string;
  mentor: string;
  mentorRole: string;
  duration: string;
  isLive?: boolean;
  liveTime?: string;
  studentsCount: number;
  thumbnail: string;
  youtubeId: string;
  description: string;
}

const LIVE_CLASSES: LiveClass[] = [
  {
    id: 'vid-1',
    title: 'IELTS 7.5+ Band Masterclass: Speaking & Writing Secrets',
    category: 'Test Prep',
    mentor: 'Nafis Imtiaz',
    mentorRole: 'British Council Certified Trainer (Band 8.5)',
    duration: '45 mins',
    isLive: true,
    liveTime: 'Daily at 8:00 PM BST',
    studentsCount: 1420,
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Learn proven answer templates for IELTS Speaking Part 2 & 3, plus Task 2 essay structure that examiners look for.'
  },
  {
    id: 'vid-2',
    title: 'US Embassy Dhaka F-1 Visa Interview Simulation',
    category: 'Visa Interview',
    mentor: 'Tawhidur Rahman',
    mentorRole: 'University of Texas Alumni & Senior Visa Coach',
    duration: '38 mins',
    studentsCount: 2890,
    thumbnail: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Realistic mock drills simulating Madani Avenue consular officer questions: Why this university? Who is funding? Post-study plans.'
  },
  {
    id: 'vid-3',
    title: 'Winning Statement of Purpose (SOP) Masterclass',
    category: 'Application',
    mentor: 'Samira Anjum',
    mentorRole: 'McGill University Alum & SOP Specialist',
    duration: '42 mins',
    studentsCount: 1850,
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Step-by-step breakdown of high-acceptance SOPs: hook introduction, academic alignment, research experience, and career trajectory.'
  },
  {
    id: 'vid-4',
    title: 'Germany 100% Tuition-Free Education & APS Blueprint',
    category: 'Free Education',
    mentor: 'Arif Hossain',
    mentorRole: 'TU Munich Graduate & European Education Advisor',
    duration: '36 mins',
    studentsCount: 2130,
    thumbnail: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Complete roadmap to zero-tuition public universities in Germany: APS certificate procedure, blocked account setup, and Daad scholarships.'
  },
  {
    id: 'vid-5',
    title: 'Canadian Study Permit (SDS) & Bank Solvency Masterclass',
    category: 'Visa & Finance',
    mentor: 'Farhan Kabir',
    mentorRole: 'University of Alberta Graduate',
    duration: '40 mins',
    studentsCount: 1670,
    thumbnail: 'https://images.unsplash.com/photo-1517935703635-27190760468e?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'GIC account opening, tax return verification, authentic source of fund documentation, and avoiding Canadian visa refusal reasons.'
  },
  {
    id: 'vid-6',
    title: 'Full Scholarship & Graduate Assistantship (TA/RA) Guide',
    category: 'Scholarship',
    mentor: 'Dr. Mahbubul Alam',
    mentorRole: 'PhD Researcher, Monash University Australia',
    duration: '50 mins',
    studentsCount: 3100,
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'How to email international professors, find funded research projects, and secure monthly living stipends with tuition waivers.'
  }
];

import { useSiteConfig } from '../context/SiteConfigContext';

interface LiveClassesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCounseling?: () => void;
}

export const LiveClassesModal: React.FC<LiveClassesModalProps> = ({
  isOpen,
  onClose,
  onBookCounseling
}) => {
  const { config } = useSiteConfig();
  const classesList = config.liveClasses?.classes?.length ? config.liveClasses.classes : LIVE_CLASSES;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<LiveClass | null>(null);

  if (!isOpen) return null;

  const categories = ['All', 'Test Prep', 'Visa Interview', 'Application', 'Free Education', 'Scholarship'];

  const filteredClasses = selectedCategory === 'All'
    ? classesList
    : classesList.filter(c => c.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/40 flex items-center justify-center text-red-400">
              <Tv className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black tracking-tight">Live Classes & Video Learning</h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  Live
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Watch free masterclasses on test prep, visa mock interviews, and university applications.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Preview if active video selected */}
        {activeVideo && (
          <div className="p-4 sm:p-6 bg-slate-900 text-white border-b border-slate-800">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black max-h-[320px] mx-auto border border-slate-700 shadow-2xl">
              {/* Responsive Video Preview Box */}
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 to-indigo-950">
                <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-3 shadow-lg shadow-red-600/40">
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                  Now Streaming • {activeVideo.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white max-w-lg mb-2">
                  {activeVideo.title}
                </h4>
                <p className="text-xs text-slate-300 max-w-md line-clamp-2">
                  {activeVideo.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <button 
                    onClick={() => {
                      if (onBookCounseling) {
                        onClose();
                        onBookCounseling();
                      }
                    }}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    Join Interactive Live Q&A
                  </button>
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all cursor-pointer"
                  >
                    Back to All Videos
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Categories Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredClasses.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item)}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Thumbnail with duration */}
                  <div className="relative h-40 rounded-xl overflow-hidden bg-slate-900 mb-3.5">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Badge top-left */}
                    <div className="absolute top-2.5 left-2.5">
                      {item.isLive ? (
                        <span className="px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wide flex items-center gap-1 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          Live Daily
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold">
                          {item.category}
                        </span>
                      )}
                    </div>

                    {/* Duration bottom-right */}
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 text-white text-[10px] font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span className="truncate font-medium">{item.mentor}</span>
                  </div>
                  <span className="text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Watch Video
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info banner */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>All live classes include downloadable lecture slides & question-answer sessions.</span>
          </div>
          <button
            onClick={() => {
              if (onBookCounseling) {
                onClose();
                onBookCounseling();
              }
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all cursor-pointer whitespace-nowrap"
          >
            Book 1-on-1 Counseling
          </button>
        </div>

      </div>
    </div>
  );
};
