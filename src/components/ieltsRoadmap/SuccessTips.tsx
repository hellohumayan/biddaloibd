import React from 'react';
import { Clock, BookMarked, Award, Mic, CheckCircle2, Lightbulb } from 'lucide-react';

export const SuccessTips: React.FC = () => {
  const tips = [
    {
      title: 'প্রতিদিন নির্দিষ্ট সময়ে পড়ুন',
      banglaDesc: 'একটি নির্দিষ্ট সময় (যেমন প্রতিদিন সকাল ৭টা বা রাত ৯টা) বরাদ্দ রাখুন। এতে পড়ার অভ্যাস দৃঢ় হয় এবং অলসতা দূর হয়।',
      icon: Clock,
      tag: 'Consistency',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'ভুলগুলো Mistake Notebook-এ লিখুন',
      banglaDesc: 'যেসব ভোকাবুলারি, স্পেলিং বা গ্রামারে ভুল হয় তা সাথে সাথে নোট করুন এবং প্রতি সপ্তাহে অন্তত একবার রিভিশন দিন।',
      icon: BookMarked,
      tag: 'Error Tracking',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      title: 'নিয়মিত Mock Test দিন',
      banglaDesc: 'টাইম ম্যানেজমেন্টের দক্ষতা বাড়াতে ঘড়ির টাইমার চালু রেখে অফিশিয়াল ক্যামব্রিজ বই থেকে পূর্ণাঙ্গ মক টেস্ট দিন।',
      icon: Award,
      tag: 'Time Management',
      color: 'bg-sky-50 text-sky-600 border-sky-200'
    },
    {
      title: 'Speaking practice record করুন',
      banglaDesc: 'ফোনে নিজের কথা রেকর্ড করে শুনুন। এতে নিজের জড়তা, উচ্চারণ বিভ্রাট এবং অপ্রয়োজনীয় পজ শনাক্ত করা সহজ হয়।',
      icon: Mic,
      tag: 'Fluency Polish',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            সেরা প্রস্তুতির জন্য
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            IELTS Success Tips
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            ব্যান্ড ৭.০ বা তার বেশি পাওয়ার জন্য এই ৪টি অভ্যাস প্রতিদিন বজায় রাখুন।
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${tip.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                      {tip.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {tip.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tip.banglaDesc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>দৈনিক অভ্যাসে যুক্ত করুন</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
