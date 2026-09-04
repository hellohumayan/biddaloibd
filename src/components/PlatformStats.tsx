import React from 'react';
import { GraduationCap, Globe, BookOpen, MessageCircle, ShieldCheck, Award } from 'lucide-react';

export const PlatformStats: React.FC = () => {
  const stats = [
    {
      value: '100+',
      label: 'University Connections',
      description: 'Accredited global universities and partner faculties',
      icon: GraduationCap,
      color: 'blue'
    },
    {
      value: '10+',
      label: 'Study Destinations',
      description: 'Across North America, Europe, Oceania & Asia',
      icon: Globe,
      color: 'teal'
    },
    {
      value: '1,000+',
      label: 'Academic Programs',
      description: 'Undergraduate, Master’s and Foundation options',
      icon: BookOpen,
      color: 'indigo'
    },
    {
      value: 'Free',
      label: 'Initial Counseling',
      description: '100% transparent guidance with zero upfront charge',
      icon: MessageCircle,
      color: 'emerald'
    },
    {
      value: '98.4%',
      label: 'Visa Approval Rate',
      description: 'Rigorous mock interview and financial document auditing',
      icon: ShieldCheck,
      color: 'sky'
    },
    {
      value: '৳15 Cr+',
      label: 'Scholarships Secured',
      description: 'Tuition fee discounts won for Bangladeshi students',
      icon: Award,
      color: 'amber'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Graphic subtle accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
            Platform Proven Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Biddaloi by the Numbers
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Built by international education specialists dedicated to empowering every student from Bangladesh.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-500/40 hover:bg-white/[0.07] transition-all duration-300 text-center flex flex-col items-center justify-between group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.08] text-teal-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold text-slate-200 mt-1">
                    {stat.label}
                  </p>
                </div>

                <p className="text-[11px] text-slate-400 mt-2 leading-tight">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Credibility statement */}
        <div className="mt-12 text-center text-xs text-slate-400 border-t border-white/[0.08] pt-6 max-w-xl mx-auto">
          Authorized representation agreements with partner international universities. Headquartered in Dhaka with digital support across all 64 districts.
        </div>

      </div>
    </section>
  );
};
