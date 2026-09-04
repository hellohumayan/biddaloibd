import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Sparkles, Send } from 'lucide-react';

interface CounselingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferredDestination?: string;
  courseTitle?: string;
}

export const CounselingModal: React.FC<CounselingModalProps> = ({
  isOpen,
  onClose,
  preferredDestination = 'usa',
  courseTitle
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState(preferredDestination);
  const [level, setLevel] = useState("Bachelor's");
  const [englishStatus, setEnglishStatus] = useState('Planning to take IELTS');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (preferredDestination) {
      setDestination(preferredDestination);
    }
  }, [preferredDestination, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-teal-600 px-6 py-5 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium text-white mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              100% Free Consultation
            </div>
            <h3 className="text-xl font-bold tracking-tight">Talk to a Biddaloi Counselor</h3>
            <p className="text-blue-100 text-xs mt-0.5">
              Personalized guidance for admissions, scholarships & visas
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Counseling Session Requested!</h4>
                <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-slate-800">{name || 'Student'}</span>. One of our certified Study Abroad Counselors in Dhaka will reach out via WhatsApp at <span className="font-semibold text-blue-600">{phone}</span> shortly.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-500 max-w-xs mx-auto">
                <p>Office: House #3(6/B), Road #7, Section #11, Mirpur, Dhaka</p>
                <p className="mt-1 font-medium text-slate-700">Helpline: +880 1722-200432</p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {courseTitle && (
                <div className="p-2.5 bg-blue-50/80 border border-blue-100 rounded-xl text-xs text-blue-800">
                  <span className="font-semibold">Selected Program:</span> {courseTitle}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tanvir Ahmed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Phone <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="+880 17XX-XXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-3.5 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Country
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="usa">🇺🇸 United States</option>
                    <option value="canada">🇨🇦 Canada</option>
                    <option value="uk">🇬🇧 United Kingdom</option>
                    <option value="australia">🇦🇺 Australia</option>
                    <option value="germany">🇩🇪 Germany & Europe</option>
                    <option value="malaysia">🇲🇾 Malaysia</option>
                    <option value="uae">🇦🇪 United Arab Emirates</option>
                    <option value="india">🇮🇳 India</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Degree Level
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Bachelor's">Bachelor's Degree (Undergrad)</option>
                    <option value="Master's">Master's Degree (Postgrad)</option>
                    <option value="PhD">PhD / Research</option>
                    <option value="Foundation">Foundation / Diploma</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  English Proficiency Status
                </label>
                <select
                  value={englishStatus}
                  onChange={(e) => setEnglishStatus(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Already have IELTS/TOEFL">Already have IELTS / TOEFL / PTE score</option>
                  <option value="Planning to take IELTS">Planning to take IELTS soon</option>
                  <option value="Prefer Duolingo / MOI">Prefer Duolingo Test or MOI waiver</option>
                  <option value="Need Guidance">Need guidance on English testing</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Book My Free Counseling Session
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Your information is 100% confidential. No spam or third-party sharing.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
