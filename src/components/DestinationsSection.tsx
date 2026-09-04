import React, { useState, useMemo } from 'react';
import { ArrowRight, DollarSign, Briefcase, Building, Globe2, CheckCircle2, Award } from 'lucide-react';
import { destinationsData } from '../data/destinations';

interface DestinationsSectionProps {
  onSelectDestination: (destId: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onSelectDestination }) => {
  const [activeRegion, setActiveRegion] = useState<string>('all');

  const regionTabs = [
    { id: 'all', label: 'All Countries (8)' },
    { id: 'na', label: 'North America (USA, Canada)' },
    { id: 'eu', label: 'Europe & UK (UK, Germany)' },
    { id: 'apac', label: 'Asia & Pacific (Australia, Malaysia, UAE, India)' },
  ];

  const filteredDestinations = useMemo(() => {
    if (activeRegion === 'na') {
      return destinationsData.filter(d => ['usa', 'canada'].includes(d.id));
    }
    if (activeRegion === 'eu') {
      return destinationsData.filter(d => ['uk', 'germany'].includes(d.id));
    }
    if (activeRegion === 'apac') {
      return destinationsData.filter(d => ['australia', 'malaysia', 'uae', 'india'].includes(d.id));
    }
    return destinationsData;
  }, [activeRegion]);

  return (
    <section id="destinations" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-2">
              <Globe2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Global Opportunities for BD Students</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Popular Study Destinations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl leading-relaxed">
              Compare immigration benefits, tuition affordability in BDT & USD, and post-study work rights across top destinations.
            </p>
          </div>
          
          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {regionTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveRegion(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeRegion === tab.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Image & Flag Badge */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={dest.heroImage}
                  alt={`Study in ${dest.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="192"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                
                {/* Country Flag & Code */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-xl shadow-xs">
                  <span className="text-base">{dest.flag}</span>
                  <span className="text-xs font-bold text-slate-900">{dest.code}</span>
                </div>

                {/* Country Name on Image */}
                <div className="absolute bottom-3 left-3.5 right-3.5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    Study in {dest.name}
                  </h3>
                  <p className="text-[11px] text-blue-200 font-medium truncate">
                    {dest.popularFor}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {dest.shortDesc}
                </p>

                {/* Key Metrics */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Briefcase className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                      Work Visa:
                    </span>
                    <span className="font-bold text-slate-800 text-right">{dest.workPermit}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <DollarSign className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      Avg Tuition:
                    </span>
                    <span className="font-semibold text-slate-800 text-right">{dest.avgTuition}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Building className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                      Partners:
                    </span>
                    <span className="font-bold text-slate-800">{dest.universityCount}+ Universities</span>
                  </div>
                </div>

                {/* Explore Universities CTA */}
                <button
                  type="button"
                  onClick={() => onSelectDestination(dest.id)}
                  className="w-full mt-2 py-2.5 px-4 bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white text-xs font-bold rounded-xl border border-slate-200 hover:border-blue-600 shadow-2xs hover:shadow-md transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Find {dest.name} Courses</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

