import { RoadmapPhase, RoadmapDay } from '../types/ieltsRoadmap';

export const IELTS_PHASES: RoadmapPhase[] = [
  {
    "id": 1,
    "name": "Foundation",
    "nameBn": "Phase 01 — Foundation",
    "dayRange": "Days 1–10",
    "startDay": 1,
    "endDay": 10,
    "description": "IELTS format, বেসিক গ্রামার, প্রয়োজনীয় Vocabulary এবং ৪টি skills-এর প্রাথমিক ধারণা তৈরি।",
    "badgeColor": "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    "id": 2,
    "name": "Skill Building",
    "nameBn": "Phase 02 — Skill Building",
    "dayRange": "Days 11–20",
    "startDay": 11,
    "endDay": 20,
    "description": "Listening প্রশ্ন প্যাটার্ন, Reading-এর Skimming, Scanning ও True/False/Not Given দক্ষতা উন্নয়ন।",
    "badgeColor": "bg-indigo-50 text-indigo-700 border-indigo-200"
  },
  {
    "id": 3,
    "name": "IELTS Techniques",
    "nameBn": "Phase 03 — IELTS Techniques",
    "dayRange": "Days 21–30",
    "startDay": 21,
    "endDay": 30,
    "description": "Writing Task 1 এর বিভিন্ন চার্ট বর্ণনা এবং Writing Task 2 এর Essay স্ট্রাকচার ও আর্গুমেন্ট ডেভেলপমেন্ট।",
    "badgeColor": "bg-sky-50 text-sky-700 border-sky-200"
  },
  {
    "id": 4,
    "name": "Intensive Practice",
    "nameBn": "Phase 04 — Intensive Practice",
    "dayRange": "Days 31–40",
    "startDay": 31,
    "endDay": 40,
    "description": "Speaking Part 1, 2 (Cue card), 3 ফ্লুয়েন্সি বৃদ্ধি, সঠিক Pronunciation এবং টাইমিং কন্ট্রোল।",
    "badgeColor": "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    "id": 5,
    "name": "Mock Test & Analysis",
    "nameBn": "Phase 05 — Mock Test & Analysis",
    "dayRange": "Days 41–50",
    "startDay": 41,
    "endDay": 50,
    "description": "পরীক্ষার সময়ের পরিবেশে ফুল মক টেস্ট, ভুল বিশ্লেষণ (Mistake Notebook) এবং দুর্বল জায়গার সমাধান।",
    "badgeColor": "bg-rose-50 text-rose-700 border-rose-200"
  },
  {
    "id": 6,
    "name": "Final Preparation",
    "nameBn": "Phase 06 — Final Preparation",
    "dayRange": "Days 51–60",
    "startDay": 51,
    "endDay": 60,
    "description": "রিভিশন, টাইম ম্যানেজমেন্ট স্ট্র্যাটেজি, ফাইনাল মক টেস্ট এবং আত্মবিশ্বাস নিয়ে পরীক্ষার হলে প্রবেশের প্রস্তুতি।",
    "badgeColor": "bg-emerald-50 text-emerald-700 border-emerald-200"
  }
];

export const IELTS_ROADMAP_DAYS: RoadmapDay[] = [
  {
    "day": 1,
    "phaseId": 1,
    "phaseName": "Foundation",
    "title": "IELTS পরিচিতি ও নিজের বর্তমান Level যাচাই",
    "duration": "2.5 Hours",
    "skills": [
      "General",
      "Listening",
      "Reading",
      "Vocabulary"
    ],
    "introduction": "প্রথম দিনে IELTS পরীক্ষার পূর্ণাঙ্গ format বুঝুন এবং নিজের বর্তমান English level সম্পর্কে একটি পরিষ্কার ধারণা তৈরি করুন।",
    "tasks": [
      {
        "id": 1,
        "category": "General",
        "title": "IELTS Academic পরীক্ষার Reading, Writing, Listening এবং Speaking format ও টাইমিং সম্পর্কে বিস্তারিত জানুন।",
        "duration": "30 Minutes",
        "instruction": "চারটি মডিউলের প্রশ্নসংখ্যা, মোট সময় এবং মার্কিং পদ্ধতি একটি খাতায় নোট করুন।",
        "resourceUrl": "https://takeielts.britishcouncil.org/take-ielts/prepare/test-format",
        "resourceLabel": "British Council Test Format Guide",
        "required": true
      },
      {
        "id": 2,
        "category": "General",
        "title": "একটি ফ্রি অনলাইন IELTS Level Assessment বা Grammar ডায়াগনস্টিক টেস্ট সম্পন্ন করুন।",
        "duration": "35 Minutes",
        "instruction": "স্কোর দেখে হতাশ না হয়ে নিজের বর্তমান অবস্থান চিহ্নিত করুন।",
        "resourceUrl": "https://www.cambridgeenglish.org/test-your-english/for-schools/",
        "resourceLabel": "Cambridge English Level Check",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "IELTS-এর ২০টি মোস্ট কমন Academic Vocabulary অর্থ ও example sentence সহ লিখুন।",
        "duration": "25 Minutes",
        "instruction": "শব্দগুলোর পার্টস অফ স্পিচ ও সিনোনিম সহ নোটবুকে সংরক্ষণ করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "BBC Learning English থেকে একটি \"6 Minute English\" পর্ব দুইবার মনোযোগ দিয়ে শুনুন।",
        "duration": "20 Minutes",
        "instruction": "প্রথমবার শুনে মূল বক্তব্য বুঝুন, দ্বিতীয়বার শুনে নতুন vocabulary ও উচ্চারণ লক্ষ্য করুন।",
        "resourceUrl": "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
        "resourceLabel": "BBC 6 Minute English",
        "required": true
      },
      {
        "id": 5,
        "category": "Reading",
        "title": "একটি ছোট English News Article (BBC বা The Guardian) পড়ুন এবং মূল সারমর্ম ৩ বাক্যে লিখুন।",
        "duration": "20 Minutes",
        "instruction": "অপরিচিত শব্দের নিচে দাগ দিন এবং ডিকশনারি দেখে অর্থ বের করুন।",
        "required": true
      },
      {
        "id": 6,
        "category": "General",
        "title": "নিজের IELTS Target Band Score (e.g. 7.0+) এবং সম্ভাব্য পরীক্ষার তারিখ নির্ধারণ করুন।",
        "duration": "15 Minutes",
        "instruction": "আপনার পড়ার টেবিলের সামনে লক্ষ্যটি বড় করে লিখে টানিয়ে দিন।",
        "required": true
      }
    ]
  },
  {
    "day": 2,
    "phaseId": 1,
    "phaseName": "Foundation",
    "title": "Band Score ক্যালকুলেশন ও Study Plan তৈরি",
    "duration": "2 Hours",
    "skills": [
      "General",
      "Grammar",
      "Listening"
    ],
    "introduction": "IELTS-এর ব্যান্ড স্কোর কীভাবে হিসাব করা হয় তা জানুন এবং দৈনিক ২-৩ ঘণ্টার একটি সুনির্দিষ্ট রুটিন নির্ধারণ করুন।",
    "tasks": [
      {
        "id": 1,
        "category": "General",
        "title": "IELTS 0-9 Band Descriptors এবং প্রতিটি ব্যান্ডের মানদণ্ড বিশ্লেষণ করুন।",
        "duration": "25 Minutes",
        "instruction": "ব্যান্ড ৭ ও ৮ পেতে প্রতিটি মডিউলে কয়টি সঠিক উত্তর দরকার তা নোট করুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "Subject-Verb Agreement-এর ১০টি গুরুত্বপূর্ণ নিয়ম বিস্তারিত পড়ুন ও উদাহরণ লিখুন।",
        "duration": "35 Minutes",
        "instruction": "IELTS Writing ও Speaking-এ এই ভুলের কারণে সবচেয়ে বেশি ব্যান্ড কমে।",
        "required": true
      },
      {
        "id": 3,
        "category": "Listening",
        "title": "Cambridge IELTS অডিও ট্র্যাক থেকে ১টি Section 1 কথোপকথন শুনুন এবং উত্তর দিন।",
        "duration": "25 Minutes",
        "instruction": "নাম ও ফোন নম্বর বানান করার নিয়ম এবং কমন স্পেলিং প্যাটার্ন লক্ষ্য করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Vocabulary",
        "title": "Education ও Study বিষয়ক ১৫টি Academic Collocation শিখুন ও বাক্য তৈরি করুন।",
        "duration": "25 Minutes",
        "instruction": "যেমন: higher education, academic achievement, pursue a degree ইত্যাদি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "পরবর্তী ৬০ দিনের জন্য একটি ডেডিকেটেড \"Mistake Notebook\" প্রস্তুত করুন।",
        "duration": "10 Minutes",
        "instruction": "প্রতিদিনের ভুলগুলো ও নতুন শব্দ এই নোটবুকে তারিখ অনুযায়ী নোট করবেন।",
        "required": true
      }
    ]
  },
  {
    "day": 3,
    "phaseId": 1,
    "phaseName": "Foundation",
    "title": "Sentence Structure ও Academic Word List (AWL)",
    "duration": "2.5 Hours",
    "skills": [
      "Grammar",
      "Vocabulary",
      "Writing",
      "Reading"
    ],
    "introduction": "Simple, Compound এবং Complex বাক্যের সঠিক প্রয়োগ শিখুন এবং Academic Vocabulary সমৃদ্ধ করুন।",
    "tasks": [
      {
        "id": 1,
        "category": "Grammar",
        "title": "Simple, Compound ও Complex বাক্যের গঠন শিখুন এবং প্রতিটি ধরণের ৩টি বাক্য নিজে লিখুন।",
        "duration": "35 Minutes",
        "instruction": "Because, Although, Whereas, While ইত্যাদি সাব-অর্ডিনেটিং কনজাংশন ব্যবহার করুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "Academic Word List (AWL) Sublist 1 থেকে ২৫টি শব্দ অর্থ, ফর্ম ও উদাহরণসহ লিখুন।",
        "duration": "30 Minutes",
        "instruction": "Analyze, Approach, Area, Assess, Assume, Authority ইত্যাদি শব্দ আয়ত্ত করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Reading",
        "title": "The Economist বা National Geographic থেকে একটি প্যারাগ্রাফ পড়ে Complex Sentence চিহ্নিত করুন।",
        "duration": "25 Minutes",
        "instruction": "বাক্যের ক্লজগুলো আলাদা করুন এবং অর্থের গভীরতা বুঝুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "নিজের পরিচয় এবং পড়াশোনার ব্যাকগ্রাউন্ড নিয়ে ২ মিনিট একনাগাড়ে ইংরেজিতে কথা বলুন।",
        "duration": "20 Minutes",
        "instruction": "ফোনের ভয়েস রেকর্ডারে রেকর্ড করুন এবং নিজে শুনে জড়তা চিহ্নিত করুন।",
        "required": true
      },
      {
        "id": 5,
        "category": "Writing",
        "title": "আজকের শেখা নতুন AWL শব্দগুলো ব্যবহার করে নিজের সম্পর্কে ৫টি বাক্য লিখুন।",
        "duration": "15 Minutes",
        "instruction": "বানান ও যতিচিহ্ন (Punctuation) সতর্কভাবে চেক করুন।",
        "required": true
      }
    ]
  },
  {
    "day": 4,
    "phaseId": 1,
    "phaseName": "Foundation",
    "title": "Tenses ও Cohesive Devices আয়ত্তকরণ",
    "duration": "2.5 Hours",
    "skills": [
      "Grammar",
      "Writing",
      "Listening",
      "Speaking"
    ],
    "introduction": "IELTS-এ সবচেয়ে বেশি ব্যবহৃত Tenses (Present Perfect, Past Simple, Passive Voice) এবং লিংকিং ওয়ার্ডস শিখুন।",
    "tasks": [
      {
        "id": 1,
        "category": "Grammar",
        "title": "Present Perfect বনাম Past Simple এবং Passive Voice-এর সঠিক প্রয়োগ বিশ্লেষণ করুন।",
        "duration": "35 Minutes",
        "instruction": "Writing Task 1 এর জন্য Passive Voice অপরিহার্য। ১০টি বাক্যের ভয়েস রূপান্তর করুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Writing",
        "title": "Cohesive Devices (Furthermore, However, Consequently, In contrast) এর ব্যবহারের নিয়ম পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রতিটি লিংকিং ওয়ার্ড দিয়ে প্রাসঙ্গিক বাক্য তৈরি করুন। অতিরিক্ত লিংকার ব্যবহারের ভুল পরিহার করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Listening",
        "title": "TED-Ed এর একটি ৩-৪ মিনিটের অ্যানিমেটেড ভিডিও শুনুন এবং ключевой পয়েন্টগুলো সংক্ষেপ করুন।",
        "duration": "25 Minutes",
        "instruction": "স্পিকারের কথা বলার গতি ও বাক্য পরিবর্তনের কানেক্টরগুলো খেয়াল করুন।",
        "resourceUrl": "https://ed.ted.com/",
        "resourceLabel": "TED-Ed Lessons",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "IELTS Speaking Part 1 এর সাধারণ ৫টি প্রশ্ন (Work, Hometown, Hobby) উত্তর রেকর্ড করুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি উত্তরে ২-৩ বাক্যে কারণ ও উদাহরণ যোগ করে বিস্তারিত উত্তর দিন।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "দিনের সমস্ত নতুন শব্দ Mistake Notebook-এ অন্তর্ভুক্ত করুন।",
        "duration": "10 Minutes",
        "instruction": "ঘুমানোর আগে একবার রিভিশন দিন।",
        "required": true
      }
    ]
  },
  {
    "day": 5,
    "phaseId": 1,
    "phaseName": "Foundation",
    "title": "Foundation Evaluation ও দুর্বলতা চিহ্নিতকরণ",
    "duration": "2.5 Hours",
    "skills": [
      "Vocabulary",
      "Grammar",
      "Listening",
      "General"
    ],
    "introduction": "প্রথম ৪ দিনের শেখা বিষয়গুলোর ওপর একটি রিভিউ কুইজ দিন এবং কোন স্কিলে বাড়তি নজর প্রয়োজন তা চিহ্নিত করুন।",
    "tasks": [
      {
        "id": 1,
        "category": "Vocabulary",
        "title": "গত ৪ দিনে শেখা ৭০টি শব্দের একটি সেলফ-টেস্ট দিন (অর্থ ও ইংরেজি বাক্য)।",
        "duration": "30 Minutes",
        "instruction": "যেসব শব্দের বানান ভুল হয়েছে সেগুলো তিনবার করে লিখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "Tense, Subject-Verb Agreement ও Article সংক্রান্ত ২৫টি গ্রামার এমসিকিউ সমাধান করুন।",
        "duration": "30 Minutes",
        "instruction": "ভুল হওয়া প্রতিটি প্রশ্নের সঠিক নিয়ম খাতায় নোট করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Listening",
        "title": "Cambridge 14 Test 1 Section 1 এর ১০টি প্রশ্ন শুনুন ও উত্তর মেলাুন।",
        "duration": "25 Minutes",
        "instruction": "লক্ষ্য রাখুন ১০-এ অন্তত ৮টি সঠিক হচ্ছে কিনা।",
        "required": true
      },
      {
        "id": 4,
        "category": "General",
        "title": "আপনার বর্তমান দুর্বলতা তালিকা তৈরি করুন (যেমন: রিডিং স্পিড, স্পেলিং ভুল বা স্পিকিং নার্ভাসনেস)।",
        "duration": "20 Minutes",
        "instruction": "পরবর্তী ফেজগুলোর অনুশীলনে এই পয়েন্টগুলোতে বাড়তি সময় বরাদ্দ দিন।",
        "required": true
      },
      {
        "id": 5,
        "category": "Speaking",
        "title": "আয়নার সামনে দাঁড়িয়ে ৩ মিনিট নিজের দৈনন্দিন রুটিন নিয়ে সাবলীলভাবে কথা বলুন।",
        "duration": "15 Minutes",
        "instruction": "চোখে চোখ রেখে স্বাভাবিক ভঙ্গিতে হাসিমুখে কথা বলার অভ্যাস করুন।",
        "required": true
      }
    ]
  },
  {
    "day": 6,
    "phaseId": 1,
    "phaseName": "Foundation",
    "title": "Listening Fundamentals ও Accent পরিচিতি",
    "duration": "2 Hours",
    "skills": [
      "Listening",
      "Vocabulary"
    ],
    "introduction": "IELTS লিসেনিংয়ের ৪টি সেকশনের ধরন এবং ব্রিটিশ, অস্ট্রেলিয়ান ও আমেরিকান এক্সেন্টের তারতম্য বুঝুন।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "IELTS Listening এর সেকশন ১ থেকে ৪-এর কাঠামোগত পার্থক্য ও প্রশ্নের ধরন বিস্তারিত জানুন।",
        "duration": "25 Minutes",
        "instruction": "Monologue বনাম Conversation এবং Social বনাম Academic প্রেক্ষাপট নোট করুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Listening",
        "title": "British ও Australian উচ্চারণের প্রধান বৈশিষ্ট্য ও বর্ণ উচ্চারণের পার্থক্য বুঝুন।",
        "duration": "30 Minutes",
        "instruction": "বিশেষ করে R-sound, T-glottalization এবং স্বরবর্ণের উচ্চারণ পার্থক্যে অভ্যস্ত হোন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Listening",
        "title": "নম্বর, তারিখ, নাম এবং মুদ্রা লেখার আন্তর্জাতিক নিয়ম অনুশীলন করুন।",
        "duration": "25 Minutes",
        "instruction": "যেমন: 0 (zero / oh), double letters, postal codes ইত্যাদি।",
        "required": true
      },
      {
        "id": 4,
        "category": "Vocabulary",
        "title": "কমন স্পেলিং ট্র্যাপস (Accommodation, Recommendation, Occurrence) এর তালিকা তৈরি করুন।",
        "duration": "25 Minutes",
        "instruction": "আইইএলটিএস লিসেনিংয়ে স্পেলিং ভুলের কারণে প্রচুর নম্বর নষ্ট হয়।",
        "required": true
      },
      {
        "id": 5,
        "category": "Listening",
        "title": "১০টি ছোট অডিও ক্লিপ শুনে দ্রুত নাম ও নম্বর নোট করার স্পিড ড্রিল করুন।",
        "duration": "15 Minutes",
        "instruction": "ভুল হলে অডিও রিওয়াইন্ড করে সঠিক উচ্চারণ ধরুন।",
        "required": true
      }
    ]
  },
  {
    "day": 7,
    "phaseId": 1,
    "phaseName": "Foundation",
    "title": "Reading Fundamentals — Skimming vs Scanning",
    "duration": "2.5 Hours",
    "skills": [
      "Reading",
      "Vocabulary"
    ],
    "introduction": "প্যাসেজের প্রতিটি শব্দ না পড়ে কীভাবে মূল বিষয় বোঝা যায় (Skimming) এবং নির্দিষ্ট তথ্য খোঁজা যায় (Scanning) তা শিখুন।",
    "tasks": [
      {
        "id": 1,
        "category": "Reading",
        "title": "Skimming কৌশলের নিয়ম পড়ুন: শিরোনাম, প্রথম বাক্য, শেষ বাক্য এবং সাব-হেডিং পড়া।",
        "duration": "30 Minutes",
        "instruction": "একটি ৭০০ শব্দের প্যাসেজ মাত্র ৩ মিনিটে স্কিম করে মূল বিষয়বস্তু এক লাইনে লিখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Reading",
        "title": "Scanning কৌশলের নিয়ম পড়ুন: সংখ্যা, নাম, স্থান ও বড় হাতের অক্ষর দ্রুত চোখে ধরা।",
        "duration": "30 Minutes",
        "instruction": "নির্দিষ্ট ৫টি তথ্য প্যাসেজ থেকে ঘড়ির সময় মেপে ৬০ সেকেন্ডে খুঁজে বের করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Reading",
        "title": "Keywords এবং Paraphrasing এর গুরুত্ব ও কৌশল বুঝুন।",
        "duration": "30 Minutes",
        "instruction": "প্রশ্নের শব্দ সরাসরি প্যাসেজে পাওয়া যায় না; এর সিনোনিম প্যাসেজে থাকে।",
        "required": true
      },
      {
        "id": 4,
        "category": "Vocabulary",
        "title": "Environment & Climate বিষয়ক ২০টি গুরুত্বপূর্ণ শব্দ ও তাদের সিনোনিম শিখুন।",
        "duration": "20 Minutes",
        "instruction": "প্যাসেজ ১ ও ২ এ এই বিষয়ের আর্টিকেল প্রায়শই আসে।",
        "required": true
      },
      {
        "id": 5,
        "category": "Reading",
        "title": "Cambridge 15 Reading Test 1 Passage 1 স্কিম করুন এবং ১-৩ নম্বর প্রশ্নের উত্তর খুঁজুন।",
        "duration": "25 Minutes",
        "instruction": "টাইম ট্র্যাক করুন এবং অপ্রয়োজনীয় শব্দে আটকে না থাকার চর্চা করুন।",
        "required": true
      }
    ]
  },
  {
    "day": 8,
    "phaseId": 1,
    "phaseName": "Foundation",
    "title": "Writing Fundamentals — ৪টি মার্কিং ক্রাইটেরিয়া",
    "duration": "2 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "Writing-এ ব্যান্ড ৭+ পাওয়ার ৪টি স্তম্ভ: Task Achievement, Coherence & Cohesion, Lexical Resource এবং GRA বুঝুন।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "IELTS Writing Assessment Criteria (Band Descriptors) পুঙ্খানুপুঙ্খভাবে পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "ব্যান্ড ৫ বনাম ব্যান্ড ৭ এর লেখার মূল পার্থক্যগুলো একটি খাতায় তুলনামূলক ছক করুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Writing",
        "title": "Task 1 (১৫০ শব্দ, ২০ মিনিট) এবং Task 2 (২৫০ শব্দ, ৪০ মিনিট) এর মৌলিক পার্থক্য বুঝুন।",
        "duration": "20 Minutes",
        "instruction": "কেন Task 2 তে বেশি নম্বর থাকে এবং সময় বণ্টন কীভাবে করা উচিত তা নির্ধারণ করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Writing",
        "title": "একটি অফিশিয়াল Band 8 এবং একটি Band 5 মডেল এসের তুলনা করে অ্যানালাইসিস করুন।",
        "duration": "35 Minutes",
        "instruction": "প্যারাগ্রাফিং, ভোকাবুলারি বৈচিত্র্য ও গ্রামাটিক্যাল রেঞ্জ মার্ক করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Grammar",
        "title": "Writing-এর জন্য Punctuation রুলস (কমা, সেমিকোলন, ক্যাপিটাল লেটার) রিভিশন দিন।",
        "duration": "20 Minutes",
        "instruction": "ভুল কমা ব্যবহারের ফলে বাক্য রান-অন বা ফ্র্যাগমেন্ট হয়ে ব্যান্ড স্কোর কমে।",
        "required": true
      },
      {
        "id": 5,
        "category": "Writing",
        "title": "যেকোনো একটি সাধারণ টপিকে (e.g. Technology) ১০০ শব্দের একটি অনুচ্ছেদ লিখুন।",
        "duration": "15 Minutes",
        "instruction": "নিজেই গ্রামার ও বানানের ভুল চিহ্নিত করে কারেকশন করুন।",
        "required": true
      }
    ]
  },
  {
    "day": 9,
    "phaseId": 1,
    "phaseName": "Foundation",
    "title": "Speaking Fundamentals — জড়তা দূরীকরণ ও Fluency",
    "duration": "2 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "Speaking টেস্টের ৩টি পার্ট, ফ্লুয়েন্সি ও উচ্চারণের নিয়ম এবং জড়তা দূর করার কার্যকর কৌশল।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Speaking Part 1, 2 ও 3 এর সময়সীমা এবং এক্সামিনারের প্রত্যাশা সম্পর্কে জানুন।",
        "duration": "25 Minutes",
        "instruction": "Part 1 (৪-৫ মিনিট), Part 2 (৩-৪ মিনিট), Part 3 (৪-৫ মিনিট)।",
        "required": true
      },
      {
        "id": 2,
        "category": "Speaking",
        "title": "Speaking-এর ৪টি ক্রাইটেরিয়া (Fluency & Coherence, Lexical, GRA, Pronunciation) বুঝুন।",
        "duration": "25 Minutes",
        "instruction": "অপ্রয়োজনীয় পজ বা উম/আহ কমানোর ট্রিকস শিখুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Speaking",
        "title": "Area Method শিখুন: Answer -> Reason -> Example -> Alternative।",
        "duration": "25 Minutes",
        "instruction": "এই নিয়মে যেকোনো প্রশ্নের উত্তর প্রাকৃতিক ও পূর্ণাঙ্গ হয়।",
        "required": true
      },
      {
        "id": 4,
        "category": "Vocabulary",
        "title": "Speaking-এ ব্যবহারের উপযোগী ২০টি Natural Filler ও Discourse Marker শিখুন।",
        "duration": "20 Minutes",
        "instruction": "Well, to be quite honest, actually, as far as I know ইত্যাদি।",
        "required": true
      },
      {
        "id": 5,
        "category": "Speaking",
        "title": "৮টি সাধারণ Part 1 প্রশ্নের উত্তর রেকর্ড করুন এবং নিজেই ফিডব্যাক দিন।",
        "duration": "25 Minutes",
        "instruction": "কথা বলার সময় মুখে স্বাভাবিক স্মাইল বজায় রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 10,
    "phaseId": 1,
    "phaseName": "Foundation",
    "title": "Phase 1 Review & Foundation Milestone Test",
    "duration": "2.5 Hours",
    "skills": [
      "General",
      "Listening",
      "Reading",
      "Writing",
      "Speaking"
    ],
    "introduction": "ফাউন্ডেশন ফেজের ১০ দিনের সকল নোট রিভিশন এবং প্রথম মাইলস্টোন অ্যাসেসমেন্ট টেস্ট।",
    "tasks": [
      {
        "id": 1,
        "category": "General",
        "title": "গত ১০ দিনে তৈরি করা সকল ভোকাবুলারি ও গ্রামার নোট রিভিশন দিন।",
        "duration": "35 Minutes",
        "instruction": "Mistake Notebook-এর লাল কালির এন্ট্রিগুলো পুনরায় পড়ুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Listening",
        "title": "Cambridge Listening Section 1 এর ১টি সম্পূর্ণ প্র্যাকটিস টেস্ট দিন।",
        "duration": "20 Minutes",
        "instruction": "১০/১০ লক্ষ্য অর্জনের চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Reading",
        "title": "একটি প্যাসেজ পড়ে Skimming ও Scanning টেকনিক প্রয়োগ করে ৫টি প্রশ্নের উত্তর বের করুন।",
        "duration": "25 Minutes",
        "instruction": "কীওয়ার্ড এবং তাদের প্যারাফ্রেজগুলো হাইলাইট করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "৩টি ভিন্ন বিষয়ের ওপর Introduction লেখার কৌশল অনুশীলন করুন।",
        "duration": "25 Minutes",
        "instruction": "প্রশ্ন রিফ্রেজ ও থিসিস স্টেটমেন্ট অন্তর্ভুক্ত করুন।",
        "required": true
      },
      {
        "id": 5,
        "category": "Speaking",
        "title": "যেকোনো একটি প্রিয় স্মৃতি নিয়ে ২ মিনিট অবিরাম ইংরেজিতে কথা বলুন।",
        "duration": "15 Minutes",
        "instruction": "ভয়েস ক্লিপটি শুনে ফ্লুয়েন্সির স্কোর সেলফ-অ্যাসেস করুন।",
        "required": true
      },
      {
        "id": 6,
        "category": "General",
        "title": "Day 10 সমাপ্তি নিশ্চিত করুন এবং Phase 2 (Skill Building) এর জন্য প্রস্তুতি নিন।",
        "duration": "10 Minutes",
        "instruction": "অভিনন্দন! আপনার ফাউন্ডেশন সফলভাবে সম্পন্ন হয়েছে।",
        "required": true
      }
    ]
  },
  {
    "day": 11,
    "phaseId": 2,
    "phaseName": "Skill Building",
    "title": "Listening Section 1 — Form, Note & Table Completion",
    "duration": "2.5 Hours",
    "skills": [
      "Listening",
      "Vocabulary"
    ],
    "introduction": "লিসেনিং সেকশন ১ এর ফর্ম ও টেবিল পূরণের টেকনিক এবং স্পেলিং ট্র্যাপ হ্যান্ডেল করা শিখুন।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Listening Section 1 — Form, Note & Table Completion-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 12,
    "phaseId": 2,
    "phaseName": "Skill Building",
    "title": "Listening Section 2 — Maps, Plans & Diagrams",
    "duration": "2.5 Hours",
    "skills": [
      "Listening",
      "Vocabulary"
    ],
    "introduction": "ম্যাপ এবং ডিরেকশন প্রশ্নে দিকনির্দেশনা (Clockwise, Opposite to, Next to) ধরার কৌশল।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Listening Section 2 — Maps, Plans & Diagrams-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 13,
    "phaseId": 2,
    "phaseName": "Skill Building",
    "title": "Listening Section 3 — Academic Discussion & Multiple Choice",
    "duration": "2.5 Hours",
    "skills": [
      "Listening",
      "Vocabulary"
    ],
    "introduction": "একাধিক স্পিকারের কথোপকথন বোঝা এবং বিভ্রান্তিকর অপশন (Distractors) বর্জন করা।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Listening Section 3 — Academic Discussion & Multiple Choice-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 14,
    "phaseId": 2,
    "phaseName": "Skill Building",
    "title": "Listening Section 4 — Monologue & Lecture Completion",
    "duration": "2.5 Hours",
    "skills": [
      "Listening",
      "Vocabulary"
    ],
    "introduction": "একাডেমিক লেকচারের দ্রুতগতি ও সাইনপোস্টিং শব্দ ধরে শূন্যস্থান পূরণের কৌশল।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Listening Section 4 — Monologue & Lecture Completion-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 15,
    "phaseId": 2,
    "phaseName": "Skill Building",
    "title": "Listening Mini-Test & Error Deep Analysis",
    "duration": "2.5 Hours",
    "skills": [
      "Listening",
      "Vocabulary"
    ],
    "introduction": "একটি সম্পূর্ণ লিসেনিং টেস্ট দিয়ে ব্যান্ড স্কোর হিসাব এবং ভুলগুলোর গভীর বিশ্লেষণ।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Listening Mini-Test & Error Deep Analysis-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 16,
    "phaseId": 2,
    "phaseName": "Skill Building",
    "title": "Reading — Skimming, Scanning & Keyword Paraphrasing",
    "duration": "2.5 Hours",
    "skills": [
      "Reading",
      "Vocabulary"
    ],
    "introduction": "কীওয়ার্ড ট্র্যাকিং এবং টেক্সটে সিনোনিম শনাক্ত করার দ্রুততম পদ্ধতি রপ্ত করুন।",
    "tasks": [
      {
        "id": 1,
        "category": "Reading",
        "title": "Reading — Skimming, Scanning & Keyword Paraphrasing-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Reading",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 17,
    "phaseId": 2,
    "phaseName": "Skill Building",
    "title": "Reading — True / False / Not Given Mastery",
    "duration": "2.5 Hours",
    "skills": [
      "Reading",
      "Vocabulary"
    ],
    "introduction": "False এবং Not Given এর সূক্ষ্ম পার্থক্য ও চরম শব্দ (always, only, all) এর ফাঁদ চেনা।",
    "tasks": [
      {
        "id": 1,
        "category": "Reading",
        "title": "Reading — True / False / Not Given Mastery-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Reading",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 18,
    "phaseId": 2,
    "phaseName": "Skill Building",
    "title": "Reading — Matching Headings & Information",
    "duration": "2.5 Hours",
    "skills": [
      "Reading",
      "Vocabulary"
    ],
    "introduction": "প্যারাগ্রাফের মূল আইডিয়া বনাম অতিরিক্ত উদাহরণের পার্থক্য এবং হেডিং ম্যাচিং টেকনিক।",
    "tasks": [
      {
        "id": 1,
        "category": "Reading",
        "title": "Reading — Matching Headings & Information-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Reading",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 19,
    "phaseId": 2,
    "phaseName": "Skill Building",
    "title": "Reading — Summary, Sentence & Diagram Completion",
    "duration": "2.5 Hours",
    "skills": [
      "Reading",
      "Vocabulary"
    ],
    "introduction": "গ্রামারের ক্লু দেখে শূন্যস্থানে সঠিক পার্টস অফ স্পিচ ও শব্দ সংখ্যা নিয়ন্ত্রণ করা।",
    "tasks": [
      {
        "id": 1,
        "category": "Reading",
        "title": "Reading — Summary, Sentence & Diagram Completion-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Reading",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 20,
    "phaseId": 2,
    "phaseName": "Skill Building",
    "title": "Reading Mini-Test & Time-Saving Drill",
    "duration": "2.5 Hours",
    "skills": [
      "Reading",
      "Vocabulary"
    ],
    "introduction": "নির্দিষ্ট ২০ মিনিটে ১টি পুরো প্যাসেজ সমাধান করে সঠিক স্ট্র্যাটেজি মূল্যায়ন।",
    "tasks": [
      {
        "id": 1,
        "category": "Reading",
        "title": "Reading Mini-Test & Time-Saving Drill-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Reading",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 21,
    "phaseId": 3,
    "phaseName": "IELTS Techniques",
    "title": "Writing Task 1 — Format & Data Types Breakdown",
    "duration": "2.5 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "বার চার্ট, লাইন গ্রাফ, পাই চার্ট ও টেবিলের ডাটা ধরন এবং ২০ মিনিটের সময় বণ্টন।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 1 — Format & Data Types Breakdown-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 22,
    "phaseId": 3,
    "phaseName": "IELTS Techniques",
    "title": "Writing Task 1 — Dynamic Charts & Trend Vocabulary",
    "duration": "2.5 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "সময়ের সাথে পরিবর্তনের শব্দ (rocketed, fluctuated, dropped significantly) আয়ত্ত করা।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 1 — Dynamic Charts & Trend Vocabulary-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 23,
    "phaseId": 3,
    "phaseName": "IELTS Techniques",
    "title": "Writing Task 1 — Static Charts & Comparative Language",
    "duration": "2.5 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "তুলনামূলক তথ্য বিশ্লেষণে whereas, in contrast, accounted for এর সঠিক প্রয়োগ।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 1 — Static Charts & Comparative Language-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 24,
    "phaseId": 3,
    "phaseName": "IELTS Techniques",
    "title": "Writing Task 1 — Process Diagrams & Map Changes",
    "duration": "2.5 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "প্যাসিভ ভয়েস ও সিকোয়েন্স মার্কার্স (subsequently, initially) দিয়ে প্রসেস বর্ণনা।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 1 — Process Diagrams & Map Changes-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 25,
    "phaseId": 3,
    "phaseName": "IELTS Techniques",
    "title": "Writing Task 1 — Full Timed Report & Model Comparison",
    "duration": "2.5 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "২০ মিনিটে সম্পূর্ণ Task 1 রিপোর্ট লেখা এবং ব্যান্ড ৯ মডেলের সাথে স্ব-মূল্যায়ন।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 1 — Full Timed Report & Model Comparison-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 26,
    "phaseId": 3,
    "phaseName": "IELTS Techniques",
    "title": "Writing Task 2 — Essay Types & Prompt Analysis",
    "duration": "2.5 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "Agree/Disagree, Discussion, Advantage/Disadvantage ইত্যাদি ৫ ধরনের এসই চেনা।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 2 — Essay Types & Prompt Analysis-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 27,
    "phaseId": 3,
    "phaseName": "IELTS Techniques",
    "title": "Writing Task 2 — Introduction & Thesis Statement",
    "duration": "2.5 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "প্রথম ২ বাক্যে প্রশ্ন প্যারাফ্রেজ এবং স্পষ্ট থিসিস স্টেটমেন্ট লেখার সূত্র।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 2 — Introduction & Thesis Statement-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 28,
    "phaseId": 3,
    "phaseName": "IELTS Techniques",
    "title": "Writing Task 2 — Body Paragraph Development (PEEL)",
    "duration": "2.5 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "Point, Explanation, Example, Link ফ্রেমওয়ার্কে লজিক্যাল বডি প্যারাগ্রাফ গঠন।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 2 — Body Paragraph Development (PEEL)-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 29,
    "phaseId": 3,
    "phaseName": "IELTS Techniques",
    "title": "Writing Task 2 — Cohesion, Lexical & Conclusion",
    "duration": "2.5 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "অ্যাডভান্সড লিংকিং শব্দ এবং শক্তিশালী এক বাক্যের উপসংহার লেখার আর্ট।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 2 — Cohesion, Lexical & Conclusion-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 30,
    "phaseId": 3,
    "phaseName": "IELTS Techniques",
    "title": "Writing Task 2 — Full Timed Essay & Band Evaluation",
    "duration": "2.5 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "৪০ মিনিটে ২৫০+ শব্দের পূর্ণাঙ্গ এসই লেখা এবং ব্যান্ড ডিসক্রিপ্টরে নম্বর মেলানো।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 2 — Full Timed Essay & Band Evaluation-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 31,
    "phaseId": 4,
    "phaseName": "Intensive Practice",
    "title": "Speaking Part 1 — Common Topics & Natural Answers",
    "duration": "2.5 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "হোমটাউন, স্টাডি, শখ ইত্যাদি বিষয়ে এক শব্দে উত্তর না দিয়ে বিস্তারিত বলা।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Speaking Part 1 — Common Topics & Natural Answers-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 32,
    "phaseId": 4,
    "phaseName": "Intensive Practice",
    "title": "Speaking Part 1 — Fluency, Connectors & Fillers",
    "duration": "2.5 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "ন্যাচারাল ফিলার ও ট্রানজিশন মার্কার দিয়ে সাবলীলতা ও রিদম বজায় রাখা।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Speaking Part 1 — Fluency, Connectors & Fillers-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 33,
    "phaseId": 4,
    "phaseName": "Intensive Practice",
    "title": "Speaking Pronunciation & Connected Speech",
    "duration": "2.5 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "শব্দ ও বাক্যের স্ট্রেস, ইনটোনেশন এবং দুর্বল সাউন্ডের সঠিক উচ্চারণ।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Speaking Pronunciation & Connected Speech-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 34,
    "phaseId": 4,
    "phaseName": "Intensive Practice",
    "title": "Speaking Lexical Resource — High-Band Collocations",
    "duration": "2.5 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "অপ্রয়োজনীয় জটিল শব্দের বদলে স্বাভাবিক ও প্রাসঙ্গিক কলোকেশন ব্যবহার।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Speaking Lexical Resource — High-Band Collocations-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 35,
    "phaseId": 4,
    "phaseName": "Intensive Practice",
    "title": "Speaking Part 1 Full Mock Recording & Review",
    "duration": "2.5 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "১২টি প্রশ্নের পূর্ণাঙ্গ পার্ট ১ মক রেকর্ড করে জড়তা ও গ্রামার ভুল শনাক্তকরণ।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Speaking Part 1 Full Mock Recording & Review-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 36,
    "phaseId": 4,
    "phaseName": "Intensive Practice",
    "title": "Speaking Part 2 — Cue Card 1-Minute Note Taking",
    "duration": "2.5 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "১ মিনিটের প্রিপারেশন সময়ে স্পাইডার নোটস বানিয়ে পুরো ২ মিনিট কথা বলা।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Speaking Part 2 — Cue Card 1-Minute Note Taking-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 37,
    "phaseId": 4,
    "phaseName": "Intensive Practice",
    "title": "Speaking Part 2 — Storytelling & Past Tense Fluency",
    "duration": "2.5 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "ব্যক্তি, স্থান বা ঘটনা বর্ণনায় গল্প বলার ভঙ্গিতে পাস্ট টেন্সের সঠিক ব্যবহার।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Speaking Part 2 — Storytelling & Past Tense Fluency-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 38,
    "phaseId": 4,
    "phaseName": "Intensive Practice",
    "title": "Speaking Part 3 — Abstract Discussion & Critical Ideas",
    "duration": "2.5 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "ব্যক্তিগত অভিজ্ঞতার বাইরে গিয়ে সমাজ ও বিশ্ব বিষয়ে গভীর মতামত ব্যক্ত করা।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Speaking Part 3 — Abstract Discussion & Critical Ideas-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 39,
    "phaseId": 4,
    "phaseName": "Intensive Practice",
    "title": "Full Speaking Mock Test (Part 1, 2 & 3)",
    "duration": "2.5 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "১৪ মিনিটের পূর্ণাঙ্গ স্পিকিং টেস্ট সিমুলেশন এবং সামগ্রিক ব্যান্ড মূল্যায়ন।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Full Speaking Mock Test (Part 1, 2 & 3)-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 40,
    "phaseId": 4,
    "phaseName": "Intensive Practice",
    "title": "Four-Skill Midpoint Review & Intensive Calibration",
    "duration": "2.5 Hours",
    "skills": [
      "General",
      "Vocabulary"
    ],
    "introduction": "৪০ দিনের সামগ্রিক অগ্রগতি পর্যালোচনা এবং শেষ ২০ দিনের স্ট্র্যাটেজিক প্ল্যানিং।",
    "tasks": [
      {
        "id": 1,
        "category": "General",
        "title": "Four-Skill Midpoint Review & Intensive Calibration-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "General",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 41,
    "phaseId": 5,
    "phaseName": "Mock Test & Analysis",
    "title": "Full Listening Mock Test under Exam Conditions",
    "duration": "3 Hours",
    "skills": [
      "Listening",
      "Vocabulary"
    ],
    "introduction": "অফিশিয়াল ক্যামব্রিজ অডিও চালিয়ে একবারেই ৪০টি প্রশ্নের উত্তর সম্পন্নকরণ।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Full Listening Mock Test under Exam Conditions-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 42,
    "phaseId": 5,
    "phaseName": "Mock Test & Analysis",
    "title": "Full Reading Mock Test under Strict 60-Minute Limit",
    "duration": "3 Hours",
    "skills": [
      "Reading",
      "Vocabulary"
    ],
    "introduction": "১ ঘণ্টায় ৩টি প্যাসেজ শেষ করে অ্যানসার শিটে তোলার বাস্তব অভিজ্ঞতা অর্জন।",
    "tasks": [
      {
        "id": 1,
        "category": "Reading",
        "title": "Full Reading Mock Test under Strict 60-Minute Limit-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Reading",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 43,
    "phaseId": 5,
    "phaseName": "Mock Test & Analysis",
    "title": "Full Writing Mock Test (Task 1 + Task 2)",
    "duration": "3 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "১ ঘণ্টার মধ্যে Task 1 (২০ মি.) ও Task 2 (৪০ মি.) লেখার স্ট্যামিনা টেস্ট।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Full Writing Mock Test (Task 1 + Task 2)-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 44,
    "phaseId": 5,
    "phaseName": "Mock Test & Analysis",
    "title": "Full Speaking Simulation with Live Evaluation",
    "duration": "3 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "নতুন কিউ কার্ড ও পার্ট ৩ আর্গুমেন্ট নিয়ে পূর্ণাঙ্গ স্পিকিং পারফরম্যান্স।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Full Speaking Simulation with Live Evaluation-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 45,
    "phaseId": 5,
    "phaseName": "Mock Test & Analysis",
    "title": "Comprehensive Error Analysis & Weakness Audit",
    "duration": "3 Hours",
    "skills": [
      "General",
      "Vocabulary"
    ],
    "introduction": "মক টেস্টে হওয়া ভুলের ক্যাটাগরি তৈরি (Careless, Time rush, Vocabulary gap)।",
    "tasks": [
      {
        "id": 1,
        "category": "General",
        "title": "Comprehensive Error Analysis & Weakness Audit-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "General",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 46,
    "phaseId": 5,
    "phaseName": "Mock Test & Analysis",
    "title": "Weak-Area Focus — Listening Section 3 & 4 Drills",
    "duration": "3 Hours",
    "skills": [
      "Listening",
      "Vocabulary"
    ],
    "introduction": "লিসেনিংয়ের সবচেয়ে কঠিন সেকশনগুলোতে স্কোর বাড়ানোর বিশেষ কৌশল।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Weak-Area Focus — Listening Section 3 & 4 Drills-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 47,
    "phaseId": 5,
    "phaseName": "Mock Test & Analysis",
    "title": "Weak-Area Focus — Reading Matching Headings & TFNG",
    "duration": "3 Hours",
    "skills": [
      "Reading",
      "Vocabulary"
    ],
    "introduction": "রিডিংয়ের জটিল প্রশ্ন প্যাটার্নগুলোতে একুরেসি বৃদ্ধির নিবিড় অনুশীলন।",
    "tasks": [
      {
        "id": 1,
        "category": "Reading",
        "title": "Weak-Area Focus — Reading Matching Headings & TFNG-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Reading",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 48,
    "phaseId": 5,
    "phaseName": "Mock Test & Analysis",
    "title": "Weak-Area Focus — Writing Complex Sentences & GRA",
    "duration": "3 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "লেখা যাতে মনোটোনাস না হয় সেজন্য কমপ্লেক্স ও কম্পাউন্ড বাক্যের ভ্যারিয়েশন।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Weak-Area Focus — Writing Complex Sentences & GRA-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 49,
    "phaseId": 5,
    "phaseName": "Mock Test & Analysis",
    "title": "Advanced Academic Collocations & Idioms Boot Camp",
    "duration": "3 Hours",
    "skills": [
      "General",
      "Vocabulary"
    ],
    "introduction": "স্পিকিং ও রাইটিংয়ে ব্যান্ড ৭.৫+ লেভেলের ন্যাচারাল ফ্রেজ ও কলোকেশন।",
    "tasks": [
      {
        "id": 1,
        "category": "General",
        "title": "Advanced Academic Collocations & Idioms Boot Camp-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "General",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 50,
    "phaseId": 5,
    "phaseName": "Mock Test & Analysis",
    "title": "Full 4-Skill Marathon Mock Test (L + R + W + S)",
    "duration": "3 Hours",
    "skills": [
      "Listening",
      "Reading",
      "Writing",
      "Speaking"
    ],
    "introduction": "একই দিনে প্রায় ৩ ঘণ্টার পূর্ণাঙ্গ পরীক্ষা দিয়ে শারীরিক ও মানসিক প্রস্তুতি।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Full 4-Skill Marathon Mock Test (L + R + W + S)-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Reading",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 51,
    "phaseId": 6,
    "phaseName": "Final Preparation",
    "title": "Listening Final Revision & Speed Triage",
    "duration": "2 Hours",
    "skills": [
      "Listening",
      "Vocabulary"
    ],
    "introduction": "অডিও পজ টাইমে প্রশ্ন আগে পড়ে আন্ডারলাইন করার ফাইনাল রিফ্লেক্স তৈরি।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Listening Final Revision & Speed Triage-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 52,
    "phaseId": 6,
    "phaseName": "Final Preparation",
    "title": "Reading Final Revision & Time Management",
    "duration": "2 Hours",
    "skills": [
      "Reading",
      "Vocabulary"
    ],
    "introduction": "প্রতি প্যাসেজের জন্য ১৮-২০ মিনিটের কড়া নিয়ম এবং কঠিন প্রশ্নে সময় নষ্ট না করা।",
    "tasks": [
      {
        "id": 1,
        "category": "Reading",
        "title": "Reading Final Revision & Time Management-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Reading",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 53,
    "phaseId": 6,
    "phaseName": "Final Preparation",
    "title": "Writing Task 1 Rapid Outlining & Overview Mastery",
    "duration": "2 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "যেকোনো গ্রাফ দেখে ৩ মিনিটে ওভারভিউ ও ২টি বডি প্যারার প্ল্যানিং দক্ষতা।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 1 Rapid Outlining & Overview Mastery-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 54,
    "phaseId": 6,
    "phaseName": "Final Preparation",
    "title": "Writing Task 2 Idea Bank & Brainstorming Speed",
    "duration": "2 Hours",
    "skills": [
      "Writing",
      "Grammar"
    ],
    "introduction": "১০টি কমন টপিকের দ্রুত আইডিয়া জেনারেশন ও স্ট্রং উদাহরণ দাঁড় করানো।",
    "tasks": [
      {
        "id": 1,
        "category": "Writing",
        "title": "Writing Task 2 Idea Bank & Brainstorming Speed-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Grammar",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Writing",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 55,
    "phaseId": 6,
    "phaseName": "Final Preparation",
    "title": "Speaking Final Revision & Unfamiliar Topic Strategy",
    "duration": "2 Hours",
    "skills": [
      "Speaking",
      "Vocabulary"
    ],
    "introduction": "কঠিন বা অজানা প্রশ্ন আসলে সময় নেওয়ার স্মার্ট টেকনিক ও স্বাভাবিক উত্তর।",
    "tasks": [
      {
        "id": 1,
        "category": "Speaking",
        "title": "Speaking Final Revision & Unfamiliar Topic Strategy-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Speaking",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 56,
    "phaseId": 6,
    "phaseName": "Final Preparation",
    "title": "Full Official Mock Test 1 (Cambridge Recent Book)",
    "duration": "2 Hours",
    "skills": [
      "Listening",
      "Reading",
      "Writing",
      "Speaking"
    ],
    "introduction": "লেটেস্ট ক্যামব্রিজ বই থেকে সম্পূর্ণ পরীক্ষা দিয়ে নিজের ব্যান্ড ক্যালকুলেশন।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Full Official Mock Test 1 (Cambridge Recent Book)-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Reading",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 57,
    "phaseId": 6,
    "phaseName": "Final Preparation",
    "title": "Mistake Notebook Deep Review & Zero-Error Check",
    "duration": "2 Hours",
    "skills": [
      "General",
      "Vocabulary"
    ],
    "introduction": "বিগত ৫৭ দিনের সমস্ত ভুলের রিভিশন যাতে পরীক্ষার হলে একই ভুল আর না হয়।",
    "tasks": [
      {
        "id": 1,
        "category": "General",
        "title": "Mistake Notebook Deep Review & Zero-Error Check-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "General",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 58,
    "phaseId": 6,
    "phaseName": "Final Preparation",
    "title": "Full Official Mock Test 2 & Time Audit",
    "duration": "2 Hours",
    "skills": [
      "Listening",
      "Reading",
      "Writing",
      "Speaking"
    ],
    "introduction": "চুড়ান্ত অফিসিয়াল মক টেস্ট এবং টাইম ম্যানেজমেন্টের নিখুঁত অডিট।",
    "tasks": [
      {
        "id": 1,
        "category": "Listening",
        "title": "Full Official Mock Test 2 & Time Audit-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Reading",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "Listening",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 59,
    "phaseId": 6,
    "phaseName": "Final Preparation",
    "title": "Test-Day Strategy, Mental Preparation & Rules",
    "duration": "2 Hours",
    "skills": [
      "General",
      "Vocabulary"
    ],
    "introduction": "পরীক্ষার আগের রাতের ঘুম, প্রয়োজনীয় ডকুমেন্টস (Passport), খাবার ও শান্ত থাকার টিপস।",
    "tasks": [
      {
        "id": 1,
        "category": "General",
        "title": "Test-Day Strategy, Mental Preparation & Rules-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "General",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  },
  {
    "day": 60,
    "phaseId": 6,
    "phaseName": "Final Preparation",
    "title": "Final Confidence Building & Readiness Checklist",
    "duration": "2 Hours",
    "skills": [
      "General",
      "Vocabulary"
    ],
    "introduction": "অভিনন্দন! আপনি ৬০ দিনের সম্পূর্ণ জার্নি সফলভাবে শেষ করেছেন। আত্মবিশ্বাসের সাথে পরীক্ষা দিন!",
    "tasks": [
      {
        "id": 1,
        "category": "General",
        "title": "Final Confidence Building & Readiness Checklist-এর মৌলিক নিয়মাবলী ও স্ট্র্যাটেজি গাইড পড়ুন।",
        "duration": "30 Minutes",
        "instruction": "প্রয়োজনীয় টেকনিক ও উদাহরণগুলো নোটবুকে টুকে রাখুন।",
        "required": true
      },
      {
        "id": 2,
        "category": "Vocabulary",
        "title": "অফিশিয়াল ক্যামব্রিজ প্র্যাকটিস ম্যাটেরিয়াল থেকে ২টি হ্যান্ডস-অন সেট সমাধান করুন।",
        "duration": "40 Minutes",
        "instruction": "নির্দিষ্ট সময় মেপে নির্ভুলভাবে সমাধান করার চেষ্টা করুন।",
        "required": true
      },
      {
        "id": 3,
        "category": "Vocabulary",
        "title": "আজকের বিষয়ের সাথে সম্পর্কিত ১৫টি হাই-ব্যান্ড Academic Vocabulary ও Collocation শিখুন।",
        "duration": "25 Minutes",
        "instruction": "প্রতিটি নতুন শব্দ দিয়ে বাস্তবসম্মত ১টি ইংরেজি বাক্য তৈরি করুন।",
        "required": true
      },
      {
        "id": 4,
        "category": "General",
        "title": "ভুল হওয়া প্রশ্নগুলোর পুঙ্খানুপুঙ্খ কারণ বিশ্লেষণ করে Mistake Notebook-এ লিপিবদ্ধ করুন।",
        "duration": "25 Minutes",
        "instruction": "ভুলের ধরন শনাক্ত করুন: ভোকাবুলারি অজানা, দ্রুততায় ভুল নাকি গ্রামাটিক্যাল ত্রুটি।",
        "required": true
      },
      {
        "id": 5,
        "category": "General",
        "title": "আজকের শেখা বিষয়ে ৫ মিনিটের একটি রিভিশন ও সেলফ-রিফ্লেকশন সম্পন্ন করুন।",
        "duration": "15 Minutes",
        "instruction": "আগামীকালের টপিকের ওপর এক নজর চোখ বুলিয়ে রাখুন।",
        "required": true
      }
    ]
  }
];
