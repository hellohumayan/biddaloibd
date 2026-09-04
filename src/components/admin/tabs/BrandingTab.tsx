import React, { useState, useRef } from 'react';
import { useSiteConfig } from '../../../context/SiteConfigContext';
import { 
  Upload, 
  Trash2, 
  Image as ImageIcon, 
  CheckCircle2, 
  AlertCircle, 
  Sliders, 
  Sparkles,
  RefreshCw,
  Eye,
  Share2
} from 'lucide-react';

export const BrandingTab: React.FC = () => {
  const { config, updateSection, uploadLogo, removeLogo } = useSiteConfig();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setUploadError(null);
    setIsUploading(true);
    try {
      await uploadLogo(file);
    } catch (err: any) {
      setUploadError(err.message || 'Failed to upload logo.');
    } finally {
      setIsUploading(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div>
        <h3 className="text-xl font-bold text-slate-900">Logo & Brand Identity</h3>
        <p className="text-sm text-slate-500 mt-1">
          Upload your official company logo or customize the brand typography displayed across the header, footer, and modals.
        </p>
      </div>

      {/* Logo Upload Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Website Logo</h4>
              <p className="text-xs text-slate-500">Supports PNG, SVG, JPG, WebP with transparent backgrounds</p>
            </div>
          </div>
          {config.branding.logoUrl && (
            <button
              onClick={removeLogo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors border border-red-200 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Remove Logo
            </button>
          )}
        </div>

        {/* Drag & Drop Zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
            isDragging 
              ? 'border-blue-500 bg-blue-50/50' 
              : 'border-slate-300 hover:border-blue-400 bg-slate-50/60 hover:bg-slate-50'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onFileSelect}
            className="hidden"
          />

          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-blue-600">
              {isUploading ? (
                <RefreshCw className="w-7 h-7 animate-spin text-blue-600" />
              ) : (
                <ImageIcon className="w-7 h-7 text-blue-500" />
              )}
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                {isUploading ? 'Uploading & Processing Image...' : 'Click to upload or drag & drop logo'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                PNG, SVG, or WebP recommended (transparent background looks best)
              </p>
            </div>

            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
            >
              Select Image File
            </button>
          </div>
        </div>

        {uploadError && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{uploadError}</span>
          </div>
        )}

        {/* Live Logo Preview Box */}
        {config.branding.logoUrl && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-600 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-blue-600" />
                Live Logo Preview
              </span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active on site
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Light Mode Preview */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col items-center justify-center min-h-[110px]">
                <span className="text-[10px] uppercase font-bold text-slate-400 mb-3">Navbar Preview (Light BG)</span>
                <img
                  src={config.branding.logoUrl}
                  alt={config.branding.logoAlt || 'Logo'}
                  style={{ height: `${config.branding.logoHeight}px` }}
                  className="w-auto object-contain"
                />
              </div>

              {/* Dark Mode Preview */}
              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center min-h-[110px]">
                <span className="text-[10px] uppercase font-bold text-slate-500 mb-3">Footer Preview (Dark BG)</span>
                <img
                  src={config.branding.logoUrl}
                  alt={config.branding.logoAlt || 'Logo'}
                  style={{ height: `${config.branding.logoHeight}px` }}
                  className="w-auto object-contain brightness-0 invert"
                />
              </div>
            </div>

            {/* Logo Height Size Slider */}
            <div className="pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-blue-600" />
                  Logo Display Height
                </label>
                <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  {config.branding.logoHeight}px
                </span>
              </div>
              <input
                type="range"
                min="18"
                max="48"
                value={config.branding.logoHeight}
                onChange={(e) => updateSection('branding', { logoHeight: Number(e.target.value) })}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>Compact (18px)</span>
                <span>Standard Header (28px)</span>
                <span>Max Header (48px)</span>
              </div>
            </div>
          </div>
        )}

        {/* Or direct URL input */}
        <div className="pt-4 border-t border-slate-100">
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Or Paste External Image URL
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              placeholder="https://www.biddaloi.com/biddaloiLogo.png"
              value={config.branding.logoUrl}
              onChange={(e) => updateSection('branding', { logoUrl: e.target.value })}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            {config.branding.logoUrl && (
              <button
                type="button"
                onClick={removeLogo}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Brand Name & Tagline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
        <h4 className="text-base font-bold text-slate-900">Brand Name & Tagline</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Brand / Platform Name
            </label>
            <input
              type="text"
              value={config.branding.brandName}
              onChange={(e) => updateSection('branding', { brandName: e.target.value })}
              placeholder="e.g. Biddaloi"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-[11px] text-slate-400 mt-1">Used as text logo if no image logo is uploaded</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Logo Alt Text
            </label>
            <input
              type="text"
              value={config.branding.logoAlt}
              onChange={(e) => updateSection('branding', { logoAlt: e.target.value })}
              placeholder="e.g. Biddaloi Study Abroad Consultancy"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-[11px] text-slate-400 mt-1">Accessibility label for screen readers</p>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Brand Tagline
          </label>
          <input
            type="text"
            value={config.branding.tagline}
            onChange={(e) => updateSection('branding', { tagline: e.target.value })}
            placeholder="e.g. Bangladesh’s Premier Study Abroad Platform"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Social Media Infograph / Open Graph Share Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-blue-600" />
            <h4 className="text-base font-bold text-slate-900">Social Media Infograph & Link Preview</h4>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Active for Facebook & WhatsApp
          </span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          When anyone shares links to your website on Facebook, WhatsApp, LinkedIn, or Twitter, this official graphic card appears automatically in their feed preview.
        </p>

        <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 p-4">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Live Share Card Preview (1200 × 630)</p>
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
            <img 
              src="/og-share.jpg" 
              alt="Biddaloi Social Share Infograph" 
              className="w-full h-auto max-h-[260px] object-contain bg-white"
            />
            <div className="p-3 bg-slate-100/70 border-t border-slate-200">
              <p className="text-xs font-bold text-slate-800">Biddaloi - Study Abroad & Global Education Platform</p>
              <p className="text-[11px] text-slate-500 truncate">biddaloibd.com • Discover universities, courses, and scholarships for Bangladeshi students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
