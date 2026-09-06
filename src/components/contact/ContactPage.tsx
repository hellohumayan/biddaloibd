import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Upload,
  FileText,
  X,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
  GraduationCap,
  Briefcase,
  HelpCircle,
  Building2,
  Navigation,
  Copy,
  Check
} from 'lucide-react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { MobileStickyBar } from '../MobileStickyBar';
import { useSiteConfig } from '../../context/SiteConfigContext';

interface ContactPageProps {
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigateToCountry: (countryId: string) => void;
  onNavigateToAffiliate?: () => void;
  onNavigateToPartners?: () => void;
  onNavigateBlog?: (articleId?: string) => void;
  onOpenCounseling: (notes?: string) => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
}

// Country dial codes
interface CountryCode {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

const COUNTRY_CODES: CountryCode[] = [
  { name: 'Bangladesh', code: 'BD', dialCode: '+880', flag: '🇧🇩' },
  { name: 'India', code: 'IN', dialCode: '+91', flag: '🇮🇳' },
  { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' },
  { name: 'Canada', code: 'CA', dialCode: '+1', flag: '🇨🇦' },
  { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧' },
  { name: 'Australia', code: 'AU', dialCode: '+61', flag: '🇦🇺' },
  { name: 'Germany', code: 'DE', dialCode: '+49', flag: '🇩🇪' },
  { name: 'Malaysia', code: 'MY', dialCode: '+60', flag: '🇲🇾' },
  { name: 'United Arab Emirates', code: 'AE', dialCode: '+971', flag: '🇦🇪' },
  { name: 'New Zealand', code: 'NZ', dialCode: '+64', flag: '🇳🇿' },
  { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: '🇸🇦' },
  { name: 'Qatar', code: 'QA', dialCode: '+974', flag: '🇶🇦' },
  { name: 'Singapore', code: 'SG', dialCode: '+65', flag: '🇸🇬' },
  { name: 'Japan', code: 'JP', dialCode: '+81', flag: '🇯🇵' },
  { name: 'South Korea', code: 'KR', dialCode: '+82', flag: '🇰🇷' },
  { name: 'Sweden', code: 'SE', dialCode: '+46', flag: '🇸🇪' },
  { name: 'France', code: 'FR', dialCode: '+33', flag: '🇫🇷' },
  { name: 'Italy', code: 'IT', dialCode: '+39', flag: '🇮🇹' },
  { name: 'Finland', code: 'FI', dialCode: '+358', flag: '🇫🇮' },
  { name: 'Ireland', code: 'IE', dialCode: '+353', flag: '🇮🇪' },
  { name: 'Netherlands', code: 'NL', dialCode: '+31', flag: '🇳🇱' },
  { name: 'Turkey', code: 'TR', dialCode: '+90', flag: '🇹🇷' }
];

const RESIDENCE_COUNTRIES = [
  'Bangladesh',
  'India',
  'Nepal',
  'Sri Lanka',
  'Pakistan',
  'Malaysia',
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Oman',
  'Kuwait',
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'Other Country'
];

const ENQUIRY_TYPES = [
  'Free Counselling',
  'Course or University Information',
  'Admission Support',
  'Scholarship Information',
  'Student Visa Guidance',
  'Application Status',
  'Technical Support',
  'Partnership or University Collaboration',
  'Media or Business Enquiry',
  'Other'
];

const STUDY_DESTINATIONS = [
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Malaysia',
  'India',
  'UAE',
  'China',
  'Europe',
  'Not Sure',
  'Other'
];

const STUDY_LEVELS = [
  'Foundation',
  'Diploma',
  'Bachelor’s',
  'Postgraduate Diploma',
  'Master’s',
  'MBA',
  'PhD',
  'Not Sure'
];

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  currentCountry?: string;
  enquiryType?: string;
  subject?: string;
  message?: string;
  preferredContactMethod?: string;
  consentAgreed?: string;
  privacyAgreed?: string;
  file?: string;
}

interface SubmittedData {
  referenceNumber: string;
  submissionDate: string;
  enquiryType: string;
  maskedPhone: string;
  contactMethod: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onNavigateSection,
  onNavigateToCountry,
  onNavigateToAffiliate,
  onNavigateToPartners,
  onNavigateBlog,
  onOpenCounseling,
  onOpenSearch,
  onOpenLogin
}) => {
  const { config } = useSiteConfig();

  // Verified contact constants (with fallback to site config)
  const VERIFIED_PHONE = config.contact.phone || '+880 1722-200432';
  const VERIFIED_WHATSAPP = config.contact.whatsapp || '+880 1722-200432';
  const VERIFIED_EMAIL = config.contact.email || 'counseling@biddaloi.com';
  const VERIFIED_ADDRESS = 'House #3(6/B), Road #7, Section #11, Mirpur, Dhaka-1216, Bangladesh';
  const VERIFIED_HOURS = config.contact.officeHours || 'Saturday – Thursday: 10:00 AM – 7:00 PM (BST)';

  // SEO metadata setup
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const originalTitle = document.title;
    document.title = 'Contact Biddaloi | Study Abroad Counselling in Bangladesh';

    const metaDescription = document.querySelector('meta[name="description"]');
    const prevDesc = metaDescription ? metaDescription.getAttribute('content') : '';
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Contact Biddaloi for personalized guidance about study destinations, universities, courses, scholarships, admissions, and student visas.'
      );
    }

    return () => {
      document.title = originalTitle;
      if (metaDescription && prevDesc) {
        metaDescription.setAttribute('content', prevDesc);
      }
    };
  }, []);

  // Form states
  const [fullName, setFullName] = useState('');
  const [selectedDialCode, setSelectedDialCode] = useState<CountryCode>(COUNTRY_CODES[0]); // +880 BD
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [currentCountry, setCurrentCountry] = useState('Bangladesh');
  const [countrySearch, setCountrySearch] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [cityDistrict, setCityDistrict] = useState('');
  const [enquiryType, setEnquiryType] = useState('Free Counselling');
  const [preferredDestination, setPreferredDestination] = useState('Not Sure');
  const [preferredStudyLevel, setPreferredStudyLevel] = useState('Bachelor’s');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState<'WhatsApp' | 'Phone Call' | 'Email'>('WhatsApp');
  const [consentAgreed, setConsentAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  // Honeypot spam trap
  const [honeypot, setHoneypot] = useState('');

  // File upload state
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form submission & UI states
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dropdown click outside ref
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Smooth scroll to form
  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // WhatsApp link generator
  const cleanWhatsAppNumber = VERIFIED_WHATSAPP.replace(/[^0-9]/g, '');
  const getWhatsAppUrl = (prefillMessage?: string) => {
    const text = prefillMessage || 'Hello Biddaloi team! I would like to inquire about study abroad opportunities and counselling.';
    return `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(text)}`;
  };

  // File handling
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        setFileError('Only PDF, JPG, JPEG, and PNG files are allowed.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size exceeds the 5MB limit.');
        return;
      }
      setAttachedFile(file);
    }
  };

  const removeAttachedFile = () => {
    setAttachedFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
    }

    // Phone validation
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!phone.trim()) {
      newErrors.phone = 'WhatsApp number is required.';
    } else if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      newErrors.phone = 'Please enter a valid phone number (7-15 digits).';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!currentCountry) {
      newErrors.currentCountry = 'Please select your current country.';
    }

    if (!enquiryType) {
      newErrors.enquiryType = 'Please select an enquiry type.';
    }

    if (!subject.trim()) {
      newErrors.subject = 'Please enter a subject for your enquiry.';
    } else if (subject.trim().length < 4) {
      newErrors.subject = 'Subject must be at least 4 characters.';
    }

    if (!message.trim()) {
      newErrors.message = 'Please provide a message explaining how we can help you.';
    } else if (message.trim().length < 20) {
      newErrors.message = `Message must be at least 20 characters (currently ${message.trim().length} characters).`;
    }

    if (!preferredContactMethod) {
      newErrors.preferredContactMethod = 'Please select your preferred contact method.';
    }

    if (!consentAgreed) {
      newErrors.consentAgreed = 'You must agree to be contacted by Biddaloi regarding your enquiry.';
    }

    if (!privacyAgreed) {
      newErrors.privacyAgreed = 'You must read and agree to the Privacy Policy.';
    }

    setErrors(newErrors);

    // Auto scroll to first error if invalid
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0];
      const errorElement = document.getElementById(`field-${firstErrorField}`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return false;
    }

    return true;
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (honeypot) {
      console.warn('Bot submission prevented.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Capture Lead Tracking metadata
    const searchParams = new URLSearchParams(window.location.search);
    const leadMeta = {
      source: 'contact_page',
      referrer: document.referrer || 'direct',
      utm_source: searchParams.get('utm_source') || 'organic',
      utm_medium: searchParams.get('utm_medium') || 'web',
      utm_campaign: searchParams.get('utm_campaign') || 'direct',
      timestamp: new Date().toISOString()
    };

    // Mask phone number for security display: e.g. +880 17****0432
    const cleanFullPhone = `${selectedDialCode.dialCode} ${phone.trim()}`;
    let masked = cleanFullPhone;
    if (cleanFullPhone.length > 8) {
      const prefixPart = cleanFullPhone.slice(0, cleanFullPhone.length - 6);
      const suffixPart = cleanFullPhone.slice(cleanFullPhone.length - 4);
      masked = `${prefixPart}****${suffixPart}`;
    }

    // Generate unique inquiry reference number: e.g. BDL-ENQ-2026-89421
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const refNum = `BDL-ENQ-${new Date().getFullYear()}-${randomDigits}`;

    // Format submission date display
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(new Date());

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        referenceNumber: refNum,
        submissionDate: `${formattedDate} BST`,
        enquiryType: enquiryType,
        maskedPhone: masked,
        contactMethod: preferredContactMethod
      });

      // Scroll to success card
      setTimeout(() => {
        const successEl = document.getElementById('contact-success-card');
        if (successEl) {
          successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }, 750);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setCityDistrict('');
    setSubject('');
    setMessage('');
    setAttachedFile(null);
    setConsentAgreed(false);
    setPrivacyAgreed(false);
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  // FAQ Items
  const FAQ_ITEMS = [
    {
      q: 'Is the initial counselling free?',
      a: 'Yes, completely free. Biddaloi provides 100% free initial study abroad profile assessments, university shortlisting, and destination consultation for all Bangladeshi students.'
    },
    {
      q: 'How soon will the Biddaloi team contact me?',
      a: 'Our student advisory team typically responds within 2 to 4 business hours during official support hours (Saturday to Thursday, 10:00 AM – 7:00 PM BST). For urgent queries, WhatsApp is recommended.'
    },
    {
      q: 'Can I contact Biddaloi through WhatsApp?',
      a: `Yes! You can message our official WhatsApp helpline at ${VERIFIED_WHATSAPP} for instant guidance, document sharing, and counseling appointment scheduling.`
    },
    {
      q: 'Do I need an IELTS score before contacting you?',
      a: 'No. You do not need an IELTS score to start exploring your options. We can assess your profile based on your current academic CGPA, discuss English waiver options, or help you prepare with our test prep resources.'
    },
    {
      q: 'Can Biddaloi guarantee admission or a visa?',
      a: 'No. Admission, scholarship, and visa decisions are made by the relevant universities, institutions, and government authorities. Biddaloi provides information, preparation, and application guidance but cannot guarantee approval.'
    },
    {
      q: 'Can I visit the Biddaloi office without an appointment?',
      a: 'While walk-in visitors are welcome during official working hours, we strongly recommend booking a free appointment in advance so an advisor specializing in your preferred destination is available to meet you.'
    },
    {
      q: 'How can a university or institution contact Biddaloi?',
      a: 'Universities, global institutions, and agency partners can email our partnership desk at partners@biddaloi.com or visit our B2B Institutional Partnership portal for official collaboration inquiries.'
    }
  ];

  const filteredResidenceCountries = RESIDENCE_COUNTRIES.filter((c) =>
    c.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-slate-800 font-sans antialiased flex flex-col">
      {/* Existing Header - Completely Unchanged */}
      <Navbar
        onOpenSearch={onOpenSearch}
        onOpenLogin={onOpenLogin}
        onOpenCounseling={scrollToForm}
        onNavigateSection={onNavigateSection}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateAffiliate={onNavigateToAffiliate}
        onNavigatePartners={onNavigateToPartners}
        onNavigateHome={onNavigateHome}
        onNavigateBlog={onNavigateBlog}
        onNavigateAbout={() => onNavigateSection('about')}
        onNavigateContact={scrollToForm}
      />

      {/* Main Content Body */}
      <main className="flex-grow pt-16 sm:pt-20">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION                                                           */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white py-16 sm:py-24 border-b border-slate-800">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg backdrop-blur-xs cursor-pointer"
              >
                <span>← Back to Home</span>
              </button>
            </div>

            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-4 shadow-xs">
                <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                <span>Contact Biddaloi</span>
              </div>

              {/* Main H1 Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5">
                Let’s Talk About Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-sky-300">Study Abroad Journey</span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Have questions about choosing a country, university, course, scholarship, admission, or student visa? Contact the Biddaloi team for clear and personalized guidance.
              </p>

              {/* Trust Line */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 mb-8 pb-4 border-b border-slate-800">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Student-Focused Guidance
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 text-blue-300">
                  <ShieldCheck className="w-4 h-4" /> Transparent Information
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 text-teal-300">
                  <Sparkles className="w-4 h-4" /> Personalized Support
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send a Message</span>
                </button>

                {/* WhatsApp Button (Displayed only when verified WhatsApp is configured) */}
                {VERIFIED_WHATSAPP && (
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CONTACT OPTIONS                                                        */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
                Quick Communication
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Choose the Best Way to Reach Us
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Select your preferred channel to connect with Biddaloi education advisors and support specialists.
              </p>
            </div>

            {/* 4 Premium Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* WhatsApp Card */}
              <div className="bg-slate-50 hover:bg-emerald-50/40 rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">WhatsApp</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Chat with our team for quick study abroad enquiries and counselling support.
                  </p>
                  <div className="py-2 px-3 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 mb-4 flex items-center justify-between">
                    <span>{VERIFIED_WHATSAPP}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-slate-50 hover:bg-blue-50/40 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Speak directly with our team during official support hours.
                  </p>
                  <div className="py-2 px-3 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 mb-4 flex items-center justify-between">
                    <a href={`tel:${VERIFIED_PHONE.replace(/[^0-9+]/g, '')}`} className="hover:text-blue-600">
                      {VERIFIED_PHONE}
                    </a>
                    <button
                      onClick={() => copyToClipboard(VERIFIED_PHONE, 'phone')}
                      className="text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
                      title="Copy phone"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <a
                  href={`tel:${VERIFIED_PHONE.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Biddaloi</span>
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-slate-50 hover:bg-indigo-50/40 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Send us detailed questions, documents, or partnership enquiries.
                  </p>
                  <div className="py-2 px-3 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 mb-4 flex items-center justify-between">
                    <a href={`mailto:${VERIFIED_EMAIL}`} className="hover:text-indigo-600 truncate">
                      {VERIFIED_EMAIL}
                    </a>
                    <button
                      onClick={() => copyToClipboard(VERIFIED_EMAIL, 'email')}
                      className="text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer flex-shrink-0 ml-1"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <a
                  href={`mailto:${VERIFIED_EMAIL}`}
                  className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>
              </div>

              {/* Office Card */}
              <div className="bg-slate-50 hover:bg-rose-50/40 rounded-2xl p-6 border border-slate-200 hover:border-rose-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Office</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Visit our office for an in-person discussion with the Biddaloi team.
                  </p>
                  <div className="py-2 px-3 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 mb-4 truncate" title={VERIFIED_ADDRESS}>
                    Mirpur-11, Dhaka, Bangladesh
                  </div>
                </div>
                <a
                  href="#office-location"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('office-location')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-rose-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3 & 4. CONTACT FORM & SUCCESS STATE                                       */}
        {/* ========================================================================= */}
        <section id="contact-form" className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {submittedData ? (
              /* 4. FORM SUCCESS STATE */
              <div id="contact-success-card" className="bg-white rounded-3xl border-2 border-emerald-500 p-8 sm:p-12 shadow-xl space-y-8 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    Enquiry Logged & Saved
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Thank You for Contacting Biddaloi!
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
                    Your message has been received. Our team will review your enquiry and contact you through your preferred communication method.
                  </p>
                </div>

                {/* Submission Verification Receipt */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-1">
                    <span className="text-slate-500 font-medium">Enquiry Reference Number:</span>
                    <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      {submittedData.referenceNumber}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-1">
                    <span className="text-slate-500 font-medium">Submission Date & Time:</span>
                    <span className="font-medium text-slate-800">{submittedData.submissionDate}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-1">
                    <span className="text-slate-500 font-medium">Selected Enquiry Type:</span>
                    <span className="font-semibold text-slate-900">{submittedData.enquiryType}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-1">
                    <span className="text-slate-500 font-medium">Registered WhatsApp Number:</span>
                    <span className="font-mono font-semibold text-slate-900">{submittedData.maskedPhone}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-medium">Preferred Contact Method:</span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {submittedData.contactMethod}
                    </span>
                  </div>
                </div>

                {/* Next Step Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      onNavigateSection('countries');
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Explore Courses</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onNavigateBlog) {
                        onNavigateBlog();
                      } else {
                        window.history.pushState({}, '', '/blog');
                        window.dispatchEvent(new PopStateEvent('popstate'));
                      }
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-slate-600" />
                    <span>Read Study Abroad Guides</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="w-full sm:w-auto px-4 py-3 text-slate-500 hover:text-slate-800 font-medium text-xs transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              /* 3. CONTACT FORM */
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                {/* Form Header */}
                <div className="p-6 sm:p-10 border-b border-slate-100 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-3 border border-blue-400/30">
                    <Send className="w-3.5 h-3.5" />
                    <span>Official Enquiry Desk</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-300 text-sm mt-1.5 max-w-xl">
                    Complete the form, and our team will contact you as soon as possible.
                  </p>
                </div>

                {/* Form Inputs */}
                <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6" noValidate>
                  {/* Honeypot field (hidden from legitimate users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_honey">Website</label>
                    <input
                      type="text"
                      id="website_honey"
                      name="website_honey"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* 1. Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div id="field-fullName" className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                        }`}
                        required
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div id="field-email" className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 2. WhatsApp Number (Country Code + Phone) */}
                  <div id="field-phone" className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      {/* Dial code select */}
                      <select
                        aria-label="Country Dial Code"
                        value={selectedDialCode.code}
                        onChange={(e) => {
                          const matched = COUNTRY_CODES.find((c) => c.code === e.target.value);
                          if (matched) setSelectedDialCode(matched);
                        }}
                        className="w-32 sm:w-40 px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 cursor-pointer"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.dialCode} ({c.name})
                          </option>
                        ))}
                      </select>

                      {/* Phone input */}
                      <input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="01712-345678"
                        className={`flex-1 px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                        }`}
                        required
                      />
                    </div>
                    <p className="text-[11px] text-slate-500">
                      We may contact you through WhatsApp regarding your enquiry.
                    </p>
                    {errors.phone && (
                      <p className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* 3. Current Country & City/District */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Searchable Current Country */}
                    <div id="field-currentCountry" className="space-y-1.5 relative" ref={countryDropdownRef}>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Current Country <span className="text-rose-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 flex items-center justify-between focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer text-left"
                      >
                        <span>{currentCountry}</span>
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      </button>

                      {isCountryDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-20 overflow-hidden">
                          <div className="p-2 border-b border-slate-100">
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder="Search country..."
                              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                              autoFocus
                            />
                          </div>
                          <div className="max-h-48 overflow-y-auto">
                            {filteredResidenceCountries.map((c) => (
                              <button
                                key={c}
                                type="button"
                                onClick={() => {
                                  setCurrentCountry(c);
                                  setIsCountryDropdownOpen(false);
                                  setCountrySearch('');
                                }}
                                className={`w-full text-left px-4 py-2 text-xs hover:bg-blue-50 transition-colors flex items-center justify-between ${
                                  currentCountry === c ? 'bg-blue-50 font-bold text-blue-600' : 'text-slate-700'
                                }`}
                              >
                                <span>{c}</span>
                                {currentCountry === c && <Check className="w-3.5 h-3.5 text-blue-600" />}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* City or District */}
                    <div className="space-y-1.5">
                      <label htmlFor="cityDistrict" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        City or District
                      </label>
                      <input
                        id="cityDistrict"
                        type="text"
                        value={cityDistrict}
                        onChange={(e) => setCityDistrict(e.target.value)}
                        placeholder="Enter your city or district"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* 4. Enquiry Type */}
                  <div id="field-enquiryType" className="space-y-1.5">
                    <label htmlFor="enquiryType" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Enquiry Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                      required
                    >
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 5. Preferred Study Destination & Study Level */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Destination */}
                    <div className="space-y-1.5">
                      <label htmlFor="preferredDestination" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Preferred Study Destination
                      </label>
                      <select
                        id="preferredDestination"
                        value={preferredDestination}
                        onChange={(e) => setPreferredDestination(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                      >
                        {STUDY_DESTINATIONS.map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Study Level */}
                    <div className="space-y-1.5">
                      <label htmlFor="preferredStudyLevel" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Preferred Study Level
                      </label>
                      <select
                        id="preferredStudyLevel"
                        value={preferredStudyLevel}
                        onChange={(e) => setPreferredStudyLevel(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                      >
                        {STUDY_LEVELS.map((lvl) => (
                          <option key={lvl} value={lvl}>
                            {lvl}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 6. Subject */}
                  <div id="field-subject" className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="What would you like to discuss?"
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                      }`}
                      required
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* 7. Message */}
                  <div id="field-message" className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400 font-medium">
                        Min 20 characters ({message.trim().length}/20)
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell us how we can help you."
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                      }`}
                      required
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* 8. Optional File Upload */}
                  <div className="space-y-1.5 pt-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Attach a document (Optional)
                    </label>

                    {attachedFile ? (
                      <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-xl">
                        <div className="flex items-center gap-2.5 truncate">
                          <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <div className="truncate text-xs">
                            <p className="font-semibold text-slate-800 truncate">{attachedFile.name}</p>
                            <p className="text-slate-500">{(attachedFile.size / 1024).toFixed(1)} KB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeAttachedFile}
                          className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          aria-label="Remove attached document"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-blue-50/20 rounded-xl p-4 text-center cursor-pointer transition-colors"
                      >
                        <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <span className="text-xs font-semibold text-blue-600 hover:underline">
                          Choose a file
                        </span>
                        <span className="text-xs text-slate-500"> or drag and drop</span>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          PDF, JPG, JPEG, PNG (Max 5MB)
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>
                    )}

                    <p className="text-[11px] text-slate-500">
                      You may attach an academic document or screenshot if it helps explain your enquiry. Do not upload unnecessary sensitive documents.
                    </p>
                    {fileError && (
                      <p className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{fileError}</span>
                      </p>
                    )}
                  </div>

                  {/* 9. Preferred Contact Method */}
                  <div id="field-preferredContactMethod" className="space-y-2 pt-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Preferred Contact Method <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                        <label
                          key={method}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                            preferredContactMethod === method
                              ? 'bg-blue-50/80 border-blue-500 shadow-xs'
                              : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredContactMethod"
                            checked={preferredContactMethod === method}
                            onChange={() => setPreferredContactMethod(method)}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
                          />
                          <span className="text-xs font-bold text-slate-800">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 10. Consent & Privacy Checkboxes */}
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    {/* Consent Checkbox */}
                    <div id="field-consentAgreed" className="flex items-start gap-2.5">
                      <input
                        id="consentAgreed"
                        type="checkbox"
                        checked={consentAgreed}
                        onChange={(e) => {
                          setConsentAgreed(e.target.checked);
                          if (errors.consentAgreed) setErrors({ ...errors, consentAgreed: undefined });
                        }}
                        className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                        required
                      />
                      <label htmlFor="consentAgreed" className="text-xs text-slate-600 cursor-pointer select-none">
                        I agree that Biddaloi may contact me through WhatsApp, phone, or email regarding my enquiry.{' '}
                        <span className="text-rose-500">*</span>
                      </label>
                    </div>
                    {errors.consentAgreed && (
                      <p className="text-xs text-rose-500 font-medium flex items-center gap-1 pl-6">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.consentAgreed}</span>
                      </p>
                    )}

                    {/* Privacy Checkbox */}
                    <div id="field-privacyAgreed" className="flex items-start gap-2.5">
                      <input
                        id="privacyAgreed"
                        type="checkbox"
                        checked={privacyAgreed}
                        onChange={(e) => {
                          setPrivacyAgreed(e.target.checked);
                          if (errors.privacyAgreed) setErrors({ ...errors, privacyAgreed: undefined });
                        }}
                        className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                        required
                      />
                      <label htmlFor="privacyAgreed" className="text-xs text-slate-600 cursor-pointer select-none">
                        I have read and agree to the Privacy Policy.{' '}
                        <span className="text-rose-500">*</span>
                      </label>
                    </div>
                    {errors.privacyAgreed && (
                      <p className="text-xs text-rose-500 font-medium flex items-center gap-1 pl-6">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.privacyAgreed}</span>
                      </p>
                    )}
                  </div>

                  {/* 11. Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3.5 px-6 font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                        isSubmitting
                          ? 'bg-blue-400 text-white cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Your Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send My Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Submission Note */}
                  <p className="text-center text-xs text-slate-500">
                    Submitting this form does not guarantee admission, scholarship, or visa approval.
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. OFFICE INFORMATION & GOOGLE MAPS                                       */}
        {/* ========================================================================= */}
        <section id="office-location" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
                In-Person Discussion
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Visit Biddaloi
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Our central Dhaka counselling centre is open for one-on-one student profile reviews, document verification, and parent consultations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Office Details Column */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  {/* Office Header */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                      Main Counselling Center
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900">Biddaloi</h3>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Office Address</h4>
                      <p className="text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                        {VERIFIED_ADDRESS}
                      </p>
                    </div>
                  </div>

                  {/* Support Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Support Hours</h4>
                      <p className="text-sm font-semibold text-slate-900 mt-0.5">
                        {VERIFIED_HOURS}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Closed on Fridays & National Holidays
                      </p>
                    </div>
                  </div>

                  {/* Phone Helpline */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Helpline</h4>
                      <a
                        href={`tel:${VERIFIED_PHONE.replace(/[^0-9+]/g, '')}`}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 mt-0.5 block"
                      >
                        {VERIFIED_PHONE}
                      </a>
                    </div>
                  </div>

                  {/* Official Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Email</h4>
                      <a
                        href={`mailto:${VERIFIED_EMAIL}`}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 mt-0.5 block"
                      >
                        {VERIFIED_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile & Desktop Action Buttons */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://maps.google.com/?q=Mirpur+11+Dhaka+Bangladesh"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-400" />
                    <span>Open in Google Maps</span>
                  </a>

                  <a
                    href="https://maps.google.com/?daddr=Mirpur+11+Dhaka+Bangladesh"
                    target="_blank"
                    rel="noreferrer"
                    className="sm:w-auto py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Responsive Google Maps Embed / Visual Map Column */}
              <div className="lg:col-span-7 bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative shadow-sm min-h-[380px] flex flex-col">
                <iframe
                  title="Biddaloi Dhaka Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.098090715362!2d90.36640057597143!3d23.81511058628867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d2077e68c9%3A0xb35a71a069df8e5b!2sMirpur-11%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full flex-grow rounded-3xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="font-bold text-slate-900 block truncate">Biddaloi Counselling Centre</span>
                      <span className="text-slate-500 block truncate text-[11px]">Mirpur-11, Dhaka-1216</span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Mirpur+11+Dhaka+Bangladesh"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs flex-shrink-0 transition-colors"
                  >
                    View Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. QUICK SUPPORT NOTICE (Highlighted Info Card)                           */}
        {/* ========================================================================= */}
        <section className="py-10 bg-[#F0F5FD] border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Instant Response Desk</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Need Faster Support?
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  For urgent or time-sensitive enquiries, WhatsApp is usually the quickest way to reach our team. Please include your name, preferred destination, study level, and intended intake in your message.
                </p>
              </div>

              <div className="w-full md:w-auto flex-shrink-0">
                <a
                  href={getWhatsAppUrl('Hello Biddaloi! I need urgent guidance. My Name: [Name], Destination: [Country], Study Level: [Level], Intake: [Intake]')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full md:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. DEPARTMENT CONTACTS                                                    */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
                Specialized Teams
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Contact the Right Team
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Route your question directly to the specific department to get the fastest resolution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Student Counselling */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-blue-300 transition-all">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Student Counselling</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For country, university, course, and application enquiries.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <a
                    href="mailto:counseling@biddaloi.com"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>counseling@biddaloi.com</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Admissions Support */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-blue-300 transition-all">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Admissions Support</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For documents, offer letters, and application updates.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <a
                    href="mailto:admissions@biddaloi.com"
                    className="text-xs font-semibold text-teal-600 hover:text-teal-800 flex items-center gap-1"
                  >
                    <span>admissions@biddaloi.com</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Technical Support */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-blue-300 transition-all">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Technical Support</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For account, dashboard, Course Finder, or website-related issues.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <a
                    href="mailto:support@biddaloi.com"
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <span>support@biddaloi.com</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Partnerships */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-blue-300 transition-all">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Partnerships</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For universities, institutions, agents, and business collaborations.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <a
                    href="mailto:partners@biddaloi.com"
                    className="text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1"
                  >
                    <span>partners@biddaloi.com</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. FREQUENTLY ASKED QUESTIONS (Accordion)                                 */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
                Clear Answers
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Transparent information regarding Biddaloi's counselling, services, and policies.
              </p>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-slate-50"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        {faq.q}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. FINAL CTA                                                              */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-bold uppercase tracking-wider">
              Start Your Journey
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Explore Your Study Abroad Options?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Share your academic profile, preferred destination, budget, and study goals to receive more relevant guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenCounseling('Final CTA Contact Page')}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl text-sm shadow-xl shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Get Free Counselling</span>
              </button>

              <button
                onClick={() => onOpenCounseling('Profile Assessment Request')}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl text-sm border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-teal-300" />
                <span>Complete Profile Assessment</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Existing Footer - Completely Unchanged */}
      <Footer
        onNavigateSection={onNavigateSection}
        onFilterDestination={(destId) => {
          onNavigateHome();
        }}
        onNavigateToCountry={onNavigateToCountry}
        onNavigateToAffiliate={onNavigateToAffiliate}
        onNavigateToPartners={onNavigateToPartners}
        onOpenCounseling={() => onOpenCounseling()}
      />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileStickyBar
        onFindCourse={() => scrollToForm()}
        onTalkCounselor={() => onOpenCounseling()}
      />
    </div>
  );
};
