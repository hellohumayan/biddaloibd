import React, { useState } from 'react';
import { 
  DollarSign, 
  Home, 
  MapPin, 
  Clock, 
  Wallet, 
  Plane, 
  Shield, 
  Info, 
  CheckCircle,
  Building,
  Coins
} from 'lucide-react';
import { CountryPageData } from '../../types/country';

interface CountryDetailsSectionProps {
  country: CountryPageData;
  onOpenCounseling: (notes?: string) => void;
}

export const CountryDetailsSection: React.FC<CountryDetailsSectionProps> = ({
  country,
  onOpenCounseling
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'tuition' | 'living' | 'other' | 'solvency'>('all');
  const { capitalDetails, expenses } = country;

  return (
    <section id="expenses" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <Coins className="w-4 h-4 text-blue-600" />
            <span>Country Profile & Financial Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cost to Study in {country.name} & Capital Requirements
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            Detailed breakdown of estimated tuition fees, monthly living costs, additional travel and visa expenses, and bank solvency funds required for Bangladeshi applicants.
          </p>
        </div>

        {/* 1. Country & Capital Profile Bar */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 mb-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <Building className="w-4 h-4 text-blue-600" />
            <span>Geography & Macro Highlights</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
              <span className="text-xs text-slate-400 block font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                Capital City
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-800 mt-1 block">
                {capitalDetails.capitalCity}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
              <span className="text-xs text-slate-400 block font-semibold flex items-center gap-1">
                <Coins className="w-3.5 h-3.5 text-emerald-600" />
                Local Currency
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-800 mt-1 block">
                {capitalDetails.currency}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
              <span className="text-xs text-slate-400 block font-semibold flex items-center gap-1">
                <Wallet className="w-3.5 h-3.5 text-blue-600" />
                BDT Conversion
              </span>
              <span className="text-sm sm:text-base font-bold text-blue-600 mt-1 block">
                {capitalDetails.exchangeRateToBdt}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
              <span className="text-xs text-slate-400 block font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                Time Zone
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1 block leading-tight">
                {capitalDetails.timeZoneFromBd}
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs col-span-2 sm:col-span-1">
              <span className="text-xs text-slate-400 block font-semibold">
                Major Student Cities
              </span>
              <span className="text-xs font-semibold text-slate-700 mt-1 block truncate">
                {capitalDetails.majorStudentCities.slice(0, 3).join(', ')}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Expenses Grid: 4 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Box 1: Tuition Fees */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Estimated Tuition Fees</h3>
                  <p className="text-xs text-slate-500">Per academic year across study levels</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg">
                Annual
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Undergraduate / Bachelor’s</span>
                  <span className="text-xs text-slate-500">{expenses.tuition.bachelorBdtPerYear}</span>
                </div>
                <span className="text-sm sm:text-base font-extrabold text-blue-600">
                  {expenses.tuition.bachelorPerYear}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Postgraduate / Master’s</span>
                  <span className="text-xs text-slate-500">{expenses.tuition.masterBdtPerYear}</span>
                </div>
                <span className="text-sm sm:text-base font-extrabold text-blue-600">
                  {expenses.tuition.masterPerYear}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Doctorate / PhD Programs</span>
                  <span className="text-xs text-slate-500">Funded Assistantships / Fellowships</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-emerald-700 text-right max-w-[200px]">
                  {expenses.tuition.phdCoverage}
                </span>
              </div>

              <div className="text-xs text-slate-500 bg-amber-50/70 border border-amber-200/70 p-3 rounded-xl flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{expenses.tuition.notes}</span>
              </div>
            </div>
          </div>

          {/* Box 2: Living Expenses */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Estimated Living Expenses</h3>
                  <p className="text-xs text-slate-500">Accommodation, food, transit & personal</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-900 block">{expenses.living.monthlyTotal}</span>
                <span className="text-[10px] text-slate-500">per month ({expenses.living.monthlyBdt})</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Shared Rent / Accommodation</span>
                <span className="font-bold text-slate-800">{expenses.living.breakdown.rent}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Food & Groceries</span>
                <span className="font-bold text-slate-800">{expenses.living.breakdown.food}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Local Public Transport</span>
                <span className="font-bold text-slate-800">{expenses.living.breakdown.transport}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Utilities, Heating & Wi-Fi</span>
                <span className="font-bold text-slate-800">{expenses.living.breakdown.utilitiesAndWifi}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-600 font-medium">Personal & Leisure</span>
                <span className="font-bold text-slate-800">{expenses.living.breakdown.personal}</span>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between font-bold text-xs">
                <span className="text-slate-700">Estimated Yearly Living Cost:</span>
                <span className="text-blue-600 font-extrabold text-sm">{expenses.living.yearlyTotal} ({expenses.living.yearlyBdt})</span>
              </div>
            </div>
          </div>

          {/* Box 3: Other Pre-Departure & One-Time Expenses */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Other Travel & Visa Expenses</h3>
                  <p className="text-xs text-slate-500">Government, flight, health & testing fees</p>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Student Visa / Embassy Fee</span>
                  <span className="text-[11px] text-slate-500">Official government application charge</span>
                </div>
                <span className="font-extrabold text-slate-900">{expenses.otherExpenses.visaFee}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Airfare from Dhaka (DAC)</span>
                  <span className="text-[11px] text-slate-500">One-way student baggage fare</span>
                </div>
                <span className="font-extrabold text-slate-900">{expenses.otherExpenses.airfareFromDhaka}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Student Health Insurance</span>
                  <span className="text-[11px] text-slate-500">Mandatory coverage (NHS, OSHC, or private)</span>
                </div>
                <span className="font-extrabold text-slate-900">{expenses.otherExpenses.healthInsurance}</span>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                <span className="font-bold text-blue-900">Total Initial Setup Budget:</span>
                <span className="font-extrabold text-blue-700 text-sm">{expenses.otherExpenses.totalInitialBudget}</span>
              </div>
            </div>
          </div>

          {/* Box 4: Capital & Bank Solvency Required for Visa */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Bank Solvency & Capital Proof</h3>
                  <p className="text-xs text-slate-500">Funds required to secure visa approval</p>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <span className="text-emerald-800 block font-semibold text-[11px] uppercase tracking-wide">
                  Minimum Bank Balance to Show
                </span>
                <span className="text-lg sm:text-xl font-black text-emerald-700 mt-1 block">
                  {expenses.capitalAndBankSolvency.amountRequiredInBank}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Holding Period:</strong> {expenses.capitalAndBankSolvency.holdingPeriod}
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Acceptable Sponsors:</strong> {expenses.capitalAndBankSolvency.acceptableSponsors.join(', ')}
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-700">
                  <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-slate-600 text-[11px] leading-relaxed">
                    {expenses.capitalAndBankSolvency.financialProofTips}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenCounseling(`Financial Solvency Verification for ${country.name}`)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Get Free Bank Solvency Check</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
