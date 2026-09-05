import React from 'react';
import { Calendar, CheckSquare, Trophy, ArrowRight, Sparkles } from 'lucide-react';

export const HowItWorksSteps: React.FC = () => {
  const steps = [
    {
      step: '০১',
      title: 'প্রতিদিনের Day Card খুলুন',
      desc: 'আপনার সুবিধাজনক সময়ে প্রতিদিনের কার্ডে ক্লিক করে নির্ধারিত Reading, Writing, Listening ও Speaking টাস্কগুলো দেখুন।',
      icon: Calendar,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      step: '০২',
      title: 'নির্ধারিত Tasks সম্পন্ন করুন',
      desc: 'প্রতিটি টাস্ক মনোযোগ দিয়ে সম্পন্ন করে চেকবক্সে টিক দিন। অডিও শোনা, রিডিং ও লেখা নিয়মিত অভ্যাস করুন।',
      icon: CheckSquare,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      step: '০৩',
      title: 'Progress track করে 60 Days শেষ করুন',
      desc: 'ড্যাশবোর্ডে আপনার দৈনিক ধারাবাহিকতা ও কমপ্লিশন রেট দেখে ৬০ দিনে নিজের কাঙ্ক্ষিত ব্যান্ড ৭+ স্কোর নিশ্চিত করুন।',
      icon: Trophy,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    }
  ];

  return (
    <section id="how-it-works-roadmap" className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            সহজ ৩টি ধাপ
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How This Roadmap Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            ৬০ দিনের রুটিন অনুসরণ করে ধারাবাহিকভাবে প্রস্তুতি গ্রহণ করুন।
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all text-left relative overflow-hidden group"
              >
                {/* Step Number Watermark */}
                <div className="text-4xl font-black text-slate-100 absolute top-4 right-4 group-hover:text-blue-50 transition-colors pointer-events-none">
                  {item.step}
                </div>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
