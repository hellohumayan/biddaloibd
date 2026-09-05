import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, GraduationCap, CheckCircle2, PhoneCall } from 'lucide-react';

interface RoadmapCTAProps {
  onOpenCounseling: () => void;
  onViewCourses?: () => void;
}

export const RoadmapCTA: React.FC<RoadmapCTAProps> = ({
  onOpenCounseling,
  onViewCourses
}) => {
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl border border-blue-800/60 text-left">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              Biddaloi IELTS Mentorship
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              IELTS প্রস্তুতিতে Professional Support প্রয়োজন?
            </h2>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl">
              Biddaloi-এর expert guidance নিয়ে আপনার target band অর্জনের প্রস্তুতি আরও কার্যকর করুন। আমাদের মেন্টররা আপনার দুর্বলতা চিহ্নিত করে ব্যক্তিগত ফিডব্যাক প্রদান করবেন।
            </p>

            {/* Benefit Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Writing Task 1 & 2 এর বিস্তারিত ম্যানুয়াল ইভালুয়েশন</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>One-on-One Speaking Mock টেস্ট ও ব্যান্ড ফিডব্যাক</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ক্যামব্রিজ প্রশ্ন ব্যাংকের সমাধান কৌশল ও শর্টকাটস</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>উচ্চশিক্ষার জন্য দেশ ও বিশ্ববিদ্যালয় সিলেকশন সাপোর্ট</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                id="btn-cta-counseling"
                onClick={onOpenCounseling}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Free Counselling নিন</span>
              </button>

              <button
                type="button"
                id="btn-cta-courses"
                onClick={onViewCourses || onOpenCounseling}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-all"
              >
                <GraduationCap className="w-4 h-4 text-blue-300" />
                <span>IELTS Course দেখুন</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
