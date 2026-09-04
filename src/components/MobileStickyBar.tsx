import React from 'react';
import { Search, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface MobileStickyBarProps {
  onFindCourse: () => void;
  onTalkCounselor: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onFindCourse,
  onTalkCounselor
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2.5 px-4 md:hidden shadow-lg">
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={onFindCourse}
          className="py-2.5 px-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-all"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onTalkCounselor}
          className="py-2.5 px-3 bg-teal-50 hover:bg-teal-100 active:scale-95 text-teal-800 font-bold text-xs rounded-xl border border-teal-200 flex items-center justify-center gap-1.5 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Free Counseling</span>
        </button>
      </div>
    </div>
  );
};
