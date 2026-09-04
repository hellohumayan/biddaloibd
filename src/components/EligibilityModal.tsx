import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCounseling: (destination: string) => void;
  initialDestination?: string;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  onOpenCounseling,
  initialDestination = 'usa'
}) => {
  const [degree, setDegree] = useState('bachelor');
  const [gpa, setGpa] = useState('3.5');
  const [country, setCountry] = useState(initialDestination);
  const [englishScore, setEnglishScore] = useState('6.5');
  const [budgetYear, setBudgetYear] = useState('15k-25k');
  const [calculated, setCalculated] = useState(false);

  if (!isOpen) return null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
  };

  const getScoreAssessment = () => {
    const numGpa = parseFloat(gpa) || 3.0;
    const numEnglish = parseFloat(englishScore) || 6.0;

    if (numGpa >= 3.3 && numEnglish >= 6.5) {
      return {
        tier: 'High Eligibility (90%+ Fit)',
        color: 'text-emerald-600',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        message: 'Excellent profile! You qualify for direct entry into Tier-1 partner universities with competitive merit scholarships of up to 40%-50% tuition reduction.',
        scholarshipEstimate: '$6,000 - $15,000 / Year'
      };
    } else if (numGpa >= 2.8 && numEnglish >= 6.0) {
      return {
        tier: 'Moderate to High Eligibility (75% Fit)',
        color: 'text-blue-600',
        badge: 'bg-blue-100 text-blue-800 border-blue-200',
        message: 'Solid profile! You qualify for direct admission at multiple reputable universities in Canada, the UK, and the USA with standard entrance awards.',
        scholarshipEstimate: '$3,000 - $8,000 / Year'
      };
    } else {
      return {
        tier: 'Foundation / Pathway Pathway Recommended',
        color: 'text-amber-600',
        badge: 'bg-amber-100 text-amber-800 border-amber-200',
        message: 'You have accessible options via pathway programs, premaster semesters, or MOI waivers in the UK, Malaysia, and Europe.',
        scholarshipEstimate: '$2,000 - $5,000 / Year'
      };
    }
  };

  const result = getScoreAssessment();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-blue-700 to-teal-600 p-5 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">Free Instant Tool</span>
            <h3 className="text-lg font-bold">Study Abroad Eligibility Calculator</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!calculated ? (
            <form onSubmit={handleCalculate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Degree Level
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDegree('bachelor')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      degree === 'bachelor'
                        ? 'bg-blue-50 border-blue-600 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Bachelor's (Undergrad)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDegree('master')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      degree === 'master'
                        ? 'bg-blue-50 border-blue-600 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Master's / Postgrad
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Current CGPA / GPA
                  </label>
                  <select
                    value={gpa}
                    onChange={(e) => setGpa(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white"
                  >
                    <option value="3.8">3.8 - 4.0 / 5.0 (HSC GPA 5.0)</option>
                    <option value="3.5">3.5 - 3.79 (Very Good)</option>
                    <option value="3.0">3.0 - 3.49 (Good)</option>
                    <option value="2.6">2.5 - 2.99 (Average)</option>
                    <option value="2.3">Below 2.5</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    English Score (IELTS / DET)
                  </label>
                  <select
                    value={englishScore}
                    onChange={(e) => setEnglishScore(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white"
                  >
                    <option value="7.5">IELTS 7.5+ / DET 130+</option>
                    <option value="6.5">IELTS 6.5 / DET 115</option>
                    <option value="6.0">IELTS 6.0 / DET 105</option>
                    <option value="5.5">IELTS 5.5 / DET 95</option>
                    <option value="0">No Test Yet (Want MOI)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Destination
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white"
                >
                  <option value="usa">🇺🇸 United States</option>
                  <option value="canada">🇨🇦 Canada</option>
                  <option value="uk">🇬🇧 United Kingdom</option>
                  <option value="australia">🇦🇺 Australia</option>
                  <option value="germany">🇩🇪 Germany & Europe</option>
                  <option value="malaysia">🇲🇾 Malaysia</option>
                  <option value="uae">🇦🇪 UAE (Dubai)</option>
                  <option value="india">🇮🇳 India</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Yearly Tuition Budget
                </label>
                <select
                  value={budgetYear}
                  onChange={(e) => setBudgetYear(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white"
                >
                  <option value="under10k">Under $10,000 / yr (৳ 12 Lakhs)</option>
                  <option value="10k-20k">$10,000 - $20,000 / yr (৳ 12 - 24 Lakhs)</option>
                  <option value="20k-35k">$20,000 - $35,000 / yr (৳ 24 - 42 Lakhs)</option>
                  <option value="above35k">$35,000+ / yr</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md transition-all mt-2"
              >
                Calculate My Admission & Scholarship Fit
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border bg-slate-50 text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-2 ${result.badge}`}>
                  {result.tier}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {result.message}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <span className="text-[10px] uppercase font-bold text-emerald-700">Estimated Scholarship</span>
                  <p className="text-sm font-bold text-emerald-800 mt-0.5">{result.scholarshipEstimate}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <span className="text-[10px] uppercase font-bold text-blue-700">Visa Success Forecast</span>
                  <p className="text-sm font-bold text-blue-800 mt-0.5">High (95%+)</p>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCalculated(false)}
                  className="w-1/3 py-2.5 px-3 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50"
                >
                  Edit Profile
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCounseling(country);
                  }}
                  className="w-2/3 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-1.5"
                >
                  Discuss with Counselor
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
