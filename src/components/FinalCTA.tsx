import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onFindCourse: () => void;
  onTalkCounselor: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onFindCourse, onTalkCounselor }) => {
  return (
    <section className="py-16 bg-[#F9FBFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-800 via-blue-700 to-teal-700 text-white shadow-2xl">
          
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-400/10 rounded-full blur-xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16 relative z-10">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Empowering Bangladesh's Global Ambitions
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Start Your Study Abroad Journey?
              </h2>

              <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-xl">
                Explore thousands of programs or talk with a Biddaloi counselor to find the right path for you.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={onFindCourse}
                  className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-100 text-blue-900 font-bold text-sm rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 text-blue-700" />
                </button>

                <button
                  onClick={onTalkCounselor}
                  className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-teal-300" />
                  <span>Free Counseling</span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-blue-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-300" />
                  <span>Zero Hidden Processing Costs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
                  <span>Licensed University Tie-ups</span>
                </div>
              </div>
            </div>

            {/* Right Column: Happy Student Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-80 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Happy student ready for international education"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl text-slate-900 shadow-md">
                  <p className="text-xs font-bold">Farhan Kabir • F-1 Approved</p>
                  <p className="text-[10px] text-slate-500">Fall 2024 • UT Arlington (USA)</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
