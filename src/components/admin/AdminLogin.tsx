import React, { useState, useRef, useEffect } from 'react';
import { useSiteConfig } from '../../context/SiteConfigContext';
import { Logo } from '../Logo';
import { 
  KeyRound, 
  Lock, 
  Unlock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

interface AdminLoginProps {
  onSuccess: () => void;
  onExit: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess, onExit }) => {
  const { config } = useSiteConfig();
  const [secretKey, setSecretKey] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus on input when screen opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validKey = config.security?.adminSecretKey || 'Biddaloi4670@';

    if (!secretKey.trim()) {
      setError('Please enter the secret key to continue.');
      inputRef.current?.focus();
      return;
    }

    setIsVerifying(true);

    setTimeout(() => {
      if (secretKey === validKey) {
        setIsSuccess(true);
        try {
          sessionStorage.setItem('biddaloi_admin_auth', 'true');
        } catch (err) {
          console.error('Session storage error:', err);
        }
        setTimeout(() => {
          onSuccess();
        }, 600);
      } else {
        setIsVerifying(false);
        setError('Incorrect secret key. Access denied.');
        inputRef.current?.select();
      }
    }, 450);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-between items-center p-4 sm:p-6 text-slate-100 relative overflow-hidden selection:bg-blue-600 selection:text-white">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <header className="w-full max-w-5xl flex items-center justify-between py-2 z-10">
        <button
          onClick={onExit}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors py-2 px-3 rounded-xl hover:bg-slate-800/60 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Website</span>
        </button>

        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Protected Area</span>
        </div>
      </header>

      {/* Center Auth Card */}
      <main className="w-full max-w-md my-auto z-10 py-6">
        <div className="bg-white text-slate-900 rounded-3xl p-7 sm:p-9 shadow-2xl border border-slate-100 relative overflow-hidden">
          
          {/* Top Decorative bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500" />

          {/* Logo and Shield Header */}
          <div className="text-center mb-8">
            <div className="inline-flex justify-center mb-5">
              <Logo size="md" />
            </div>

            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3 text-blue-600 shadow-xs">
              {isSuccess ? (
                <Unlock className="w-6 h-6 text-emerald-600 animate-bounce" />
              ) : (
                <Lock className="w-6 h-6 text-blue-600" />
              )}
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Admin Studio Login
            </h1>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed max-w-xs mx-auto">
              Enter the administrative secret key to configure website content, live services, and branding.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="admin-secret-key" 
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                Secret Access Key
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <KeyRound className="w-4 h-4" />
                </div>

                <input
                  id="admin-secret-key"
                  ref={inputRef}
                  type={showPassword ? 'text' : 'password'}
                  value={secretKey}
                  onChange={(e) => {
                    setSecretKey(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter secret key..."
                  disabled={isVerifying || isSuccess}
                  className={`w-full pl-10 pr-11 py-3 rounded-xl border text-sm font-mono tracking-wide transition-all bg-slate-50 focus:bg-white focus:outline-none ${
                    error
                      ? 'border-red-400 ring-2 ring-red-100 bg-red-50/40 text-red-900'
                      : isSuccess
                      ? 'border-emerald-500 ring-2 ring-emerald-100 bg-emerald-50/40 text-emerald-900'
                      : 'border-slate-200 focus:border-blue-500 focus:ring-3 focus:ring-blue-100 text-slate-900'
                  }`}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  title={showPassword ? 'Hide secret key' : 'Show secret key'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Error feedback */}
              {error && (
                <div className="mt-2.5 flex items-center gap-1.5 text-xs text-red-600 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Success feedback */}
              {isSuccess && (
                <div className="mt-2.5 flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Key verified! Unlocking Admin Studio...</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isVerifying || isSuccess}
              className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                isSuccess
                  ? 'bg-emerald-600 shadow-emerald-500/20'
                  : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-blue-600/20'
              }`}
            >
              {isVerifying ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Verifying Secret Key...</span>
                </div>
              ) : isSuccess ? (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Access Granted</span>
                </div>
              ) : (
                <>
                  <span>Unlock Admin Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer inside card */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Biddaloi CMS Security</span>
            <button
              onClick={onExit}
              className="text-blue-600 hover:text-blue-700 font-semibold hover:underline cursor-pointer"
            >
              View Public Website
            </button>
          </div>
        </div>

        {/* Security badge footer */}
        <div className="text-center mt-6 text-xs text-slate-400 space-y-1">
          <p className="flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>Encrypted Session • Authorized Admin Access Only</span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl py-3 text-center text-xs text-slate-400 z-10">
        <p>© {new Date().getFullYear()} Biddaloi Study Abroad. All rights reserved.</p>
      </footer>
    </div>
  );
};
