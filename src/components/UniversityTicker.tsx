import React from 'react';
import { ArrowRight, Building2, CheckCircle } from 'lucide-react';
import { destinationsData } from '../data/destinations';
import { universitiesData } from '../data/universities';

interface UniversityTickerProps {
  onSelectDestination: (destinationId: string) => void;
}

export const UniversityTicker: React.FC<UniversityTickerProps> = ({ onSelectDestination }) => {
  return (
    <section id="universities" className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Global Institutional Network
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Explore Universities Around the World
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Direct partnerships and established admission routes with accredited global institutions
          </p>
        </div>

        {/* Universities Grid / Scrollable Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-12">
          {universitiesData.map((uni) => (
            <div
              key={uni.id}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden mb-2 bg-white shadow-xs border border-slate-100 flex items-center justify-center p-1">
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
                {uni.shortName}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-xs">{uni.flag}</span>
                <span className="text-[10px] text-slate-400 font-medium truncate max-w-[70px]">{uni.country}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Destination Shortcuts */}
        <div className="pt-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-4">
            Quick Destination Shortcuts
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {destinationsData.map((dest) => (
              <button
                key={dest.id}
                onClick={() => onSelectDestination(dest.id)}
                className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200/80 bg-white hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-xs transition-all text-left group"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-lg flex-shrink-0">{dest.flag}</span>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700 truncate">
                    {dest.name}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
