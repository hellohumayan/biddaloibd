import React from 'react';
import { 
  Calendar, 
  Clock, 
  Layers, 
  ArrowRight, 
  HelpCircle, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Target,
  GraduationCap
} from 'lucide-react';

interface IeltsHeroProps {
  onStartRoadmap: () => void;
  onHowItWorks: () => void;
}

export const IeltsHero: React.FC<IeltsHeroProps> = ({
  onStartRoadmap,
  onHowItWorks
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F5FF] via-[#F8FAFD] to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/70">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text & Controls (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-extrabold text-blue-800 tracking-wide">
                Biddaloi IELTS Preparation
              </span>
              <span className="text-[11px] font-bold text-blue-600 bg-white px-2 py-0.5 rounded-full border border-blue-100">
                100% Free
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              ৬০ দিনে <span className="text-blue-600">IELTS</span> প্রস্তুতির সম্পূর্ণ Roadmap
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              প্রতিদিনের নির্ধারিত Reading, Writing, Listening, Speaking এবং Vocabulary practice সম্পন্ন করে ধাপে ধাপে IELTS পরীক্ষার জন্য নিজেকে প্রস্তুত করুন।
            </p>

            {/* Three Info Cards */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-1 max-w-xl">
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-1.5 sm:gap-2 text-blue-600 mb-1">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900">
                  60 Days
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
                  ৬টি লার্নিং ফেজ
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-1.5 sm:gap-2 text-indigo-600 mb-1">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Daily Study</span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900">
                  2–3 Hours
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
                  সুনির্দিষ্ট রুটিন
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-600 mb-1">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Skills</span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900">
                  4 Modules
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
                  + Vocab & Grammar
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                id="btn-start-roadmap-hero"
                onClick={onStartRoadmap}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Roadmap শুরু করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="btn-how-it-works-hero"
                onClick={onHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm sm:text-base border border-slate-300 shadow-2xs hover:border-slate-400 transition-all"
              >
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>কীভাবে কাজ করে?</span>
              </button>
            </div>
          </div>

          {/* Right Column: Modern IELTS Dashboard Visual Graphic (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Graphic */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl p-5 sm:p-6 space-y-4 relative overflow-hidden">
                
                {/* Top Badge header inside card */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
                      B
                    </div>
                    <div>
                      <h2 className="text-sm font-extrabold text-slate-900 leading-tight">
                        IELTS Prep Tracker
                      </h2>
                      <p className="text-[11px] text-slate-500">
                        Academic & General Training
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    <Award className="w-3.5 h-3.5" />
                    Target Band 7.5+
                  </span>
                </div>

                {/* 4 Modules Visual Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                      L
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-800">Listening</div>
                      <div className="text-[10px] text-slate-500">40 Questions • 30m</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                      R
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-800">Reading</div>
                      <div className="text-[10px] text-slate-500">3 Passages • 60m</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xs">
                      W
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-800">Writing</div>
                      <div className="text-[10px] text-slate-500">Task 1 & 2 • 60m</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100 flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                      S
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-800">Speaking</div>
                      <div className="text-[10px] text-slate-500">Part 1, 2, 3 • 14m</div>
                    </div>
                  </div>
                </div>

                {/* Micro Milestone Progress Preview */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      Daily Consistency Engine
                    </span>
                    <span className="text-[11px] font-extrabold text-blue-600">60 Structured Days</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-2/3" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Task Checklist</span>
                    <span>Mistake Notebook</span>
                    <span>Cambridge Mocks</span>
                  </div>
                </div>

                {/* Bottom Trust Badge */}
                <div className="flex items-center gap-3 pt-1 text-xs text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Designed for Bangladeshi Students</span>
                    <p className="text-[11px] text-slate-500">ইংরেজি দুর্বলতা কাটিয়ে Band 7+ অর্জনের সহজ গাইডলাইন।</p>
                  </div>
                </div>

              </div>

              {/* Floating Accent Card 1: Streak */}
              <div className="hidden sm:flex absolute -bottom-4 -left-5 bg-white p-3 rounded-2xl shadow-lg border border-slate-200 items-center gap-3 animate-bounce-slow">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  🔥
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Daily Streak</div>
                  <div className="text-[10px] text-slate-500">Keep Momentum Alive</div>
                </div>
              </div>

              {/* Floating Accent Card 2: Band 7+ Guarantee */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white p-2.5 px-3.5 rounded-2xl shadow-lg border border-slate-200 items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-800">Target Band 7.0–8.0</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
