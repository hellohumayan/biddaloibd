import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-14 relative z-10">
            
            {/* Left Column: Headline */}
            <div className="lg:col-span-8 text-left">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Start Your Study Abroad Journey?
              </h2>
            </div>

            {/* Right Column: 2 Stacked Buttons (Up one & Down one) */}
            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-end justify-center">
              <div className="w-full sm:w-64 space-y-3.5">
                {/* Up One: Apply Now */}
                <button
                  type="button"
                  onClick={onFindCourse}
                  className="w-full px-6 py-3.5 bg-white hover:bg-blue-50 text-blue-900 font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2 border border-white"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 text-blue-700" />
                </button>

                {/* Down One: Free Counseling */}
                <button
                  type="button"
                  onClick={onTalkCounselor}
                  className="w-full px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm rounded-xl backdrop-blur-sm transition-all hover:border-white/50 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-teal-300" />
                  <span>Free Counseling</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
