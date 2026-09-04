import React, { useState } from 'react';
import { useSiteConfig } from '../../../context/SiteConfigContext';
import { Download, Upload, RotateCcw, CheckCircle2, AlertTriangle, Copy, Check } from 'lucide-react';

export const BackupResetTab: React.FC = () => {
  const { config, exportConfigJson, importConfigJson, resetToDefaults } = useSiteConfig();
  const [importText, setImportText] = useState('');
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleDownloadJson = () => {
    const jsonStr = exportConfigJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `biddaloi-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setStatusMessage({ type: 'success', text: 'Configuration downloaded successfully.' });
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(exportConfigJson());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyImport = () => {
    if (!importText.trim()) {
      setStatusMessage({ type: 'error', text: 'Please paste a valid JSON configuration.' });
      return;
    }
    const success = importConfigJson(importText.trim());
    if (success) {
      setStatusMessage({ type: 'success', text: 'Configuration restored and applied to the live website!' });
      setImportText('');
    } else {
      setStatusMessage({ type: 'error', text: 'Failed to parse JSON. Please check format and syntax.' });
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all content, logo, and settings back to factory defaults? This cannot be undone.')) {
      resetToDefaults();
      setStatusMessage({ type: 'success', text: 'All content and settings restored to default.' });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Backup, Import & Factory Reset</h3>
        <p className="text-sm text-slate-500 mt-1">
          Export your entire site setup as JSON, restore previous backups, or reset content to factory defaults.
        </p>
      </div>

      {statusMessage && (
        <div
          className={`p-4 rounded-xl text-xs flex items-center gap-2.5 ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
          ) : (
            <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Export Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Download className="w-5 h-5 text-blue-600" />
          <h4 className="text-base font-bold text-slate-900">Export Site Configuration</h4>
        </div>
        <p className="text-xs text-slate-500">
          Save your current customized copy, logos, destinations, and settings to a JSON file.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={handleDownloadJson}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Backup File (.json)
          </button>
          <button
            onClick={handleCopyJson}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied to Clipboard' : 'Copy JSON to Clipboard'}
          </button>
        </div>
      </div>

      {/* Import Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Upload className="w-5 h-5 text-indigo-600" />
          <h4 className="text-base font-bold text-slate-900">Import Configuration</h4>
        </div>
        <p className="text-xs text-slate-500">
          Paste a previously exported JSON backup below to restore all customized content.
        </p>

        <textarea
          rows={5}
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
          placeholder="Paste JSON configuration here..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex justify-end">
          <button
            onClick={handleApplyImport}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            Restore From JSON
          </button>
        </div>
      </div>

      {/* Factory Reset */}
      <div className="bg-red-50/50 rounded-2xl border border-red-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <RotateCcw className="w-5 h-5 text-red-600" />
          <h4 className="text-base font-bold text-red-900">Reset to Factory Defaults</h4>
        </div>
        <p className="text-xs text-red-700">
          Revert all text modifications, logo uploads, and added content back to the default Biddaloi layout.
        </p>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          Reset All Content to Defaults
        </button>
      </div>
    </div>
  );
};
