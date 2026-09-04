import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Award } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import { useSiteConfig } from '../context/SiteConfigContext';

export const TestimonialsSection: React.FC = () => {
  const { config } = useSiteConfig();
  const testConfig = config.testimonials;
  const list = testConfig.items?.length ? testConfig.items : testimonialsData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const current = list[currentIndex] || list[0];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {testConfig.badge || 'Student Success Stories'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
              {testConfig.title || 'From Bangladesh to Global Campuses'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl leading-relaxed">
              {testConfig.description}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300 transition-colors shadow-2xs cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300 transition-colors shadow-2xs cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Desktop (3 visible) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {list.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAFCFF] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-blue-100 absolute top-5 right-5 group-hover:text-blue-200 transition-colors pointer-events-none" />

              <div>
                {/* Rating & Visa Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {item.visaIntake}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>

                {/* Scholarship Received Chip */}
                {item.scholarshipReceived && (
                  <div className="mb-4 inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-900 rounded-lg text-[11px] font-bold border border-amber-200/80">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>{item.scholarshipReceived}</span>
                  </div>
                )}
              </div>

              {/* Student Details */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20 flex-shrink-0"
                  loading="lazy"
                  decoding="async"
                  width="48"
                  height="48"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';
                  }}
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {item.name}
                    <span>{item.flag}</span>
                  </h4>
                  <p className="text-xs font-semibold text-blue-600">
                    {item.university}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {item.program} • {item.hometown}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipeable / Carousel View */}
        <div className="lg:hidden">
          <div className="p-6 rounded-2xl bg-[#FAFCFF] border border-slate-200/90 shadow-sm relative">
            <Quote className="w-8 h-8 text-blue-100 absolute top-5 right-5 pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current?.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                {current?.visaIntake}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5">
              "{current?.quote}"
            </p>

            {current?.scholarshipReceived && (
              <div className="mb-4 inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-900 rounded-lg text-[11px] font-bold border border-amber-200/80">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>{current.scholarshipReceived}</span>
              </div>
            )}

            <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
              <img
                src={current?.photo}
                alt={current?.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20 flex-shrink-0"
                loading="lazy"
                decoding="async"
                width="48"
                height="48"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';
                }}
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  {current?.name}
                  <span>{current?.flag}</span>
                </h4>
                <p className="text-xs font-semibold text-blue-600">
                  {current?.university}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {current?.program} • {current?.hometown}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator for Mobile */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {list.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
