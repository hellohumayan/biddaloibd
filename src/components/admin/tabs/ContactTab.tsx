import React from 'react';
import { useSiteConfig } from '../../../context/SiteConfigContext';
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe } from 'lucide-react';

export const ContactTab: React.FC = () => {
  const { config, updateSection } = useSiteConfig();
  const contact = config.contact;

  const handleChange = (field: string, val: string) => {
    updateSection('contact', { [field]: val });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Contact Details & Office Info</h3>
        <p className="text-sm text-slate-500 mt-1">
          Update your phone hotline, WhatsApp counseling link, office address in Dhaka, and customer support hours.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <h4 className="text-base font-bold text-slate-900">Primary Contact Channels</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              Hotline Phone Number
            </label>
            <input
              type="text"
              value={contact.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+8801710002801"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              WhatsApp Counseling Number
            </label>
            <input
              type="text"
              value={contact.whatsapp}
              onChange={(e) => handleChange('whatsapp', e.target.value)}
              placeholder="+8801710002801"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-indigo-600" />
              Support & Application Email
            </label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="hello@biddaloi.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            />
          </div>

          {/* Office Hours */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              Office Counseling Hours
            </label>
            <input
              type="text"
              value={contact.officeHours}
              onChange={(e) => handleChange('officeHours', e.target.value)}
              placeholder="Saturday – Thursday: 10:00 AM – 7:00 PM"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            />
          </div>
        </div>

        {/* Office Address */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            Physical Office Address
          </label>
          <textarea
            rows={3}
            value={contact.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="House No - 124, Raninagor, Monnafer Mor, Rajshahi"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
        <h4 className="text-base font-bold text-slate-900">Social Media Handles</h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Facebook URL
            </label>
            <input
              type="url"
              value={contact.facebookUrl || ''}
              onChange={(e) => handleChange('facebookUrl', e.target.value)}
              placeholder="https://facebook.com/biddaloi"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              LinkedIn URL
            </label>
            <input
              type="url"
              value={contact.linkedinUrl || ''}
              onChange={(e) => handleChange('linkedinUrl', e.target.value)}
              placeholder="https://linkedin.com/company/biddaloi"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              YouTube Channel URL
            </label>
            <input
              type="url"
              value={contact.youtubeUrl || ''}
              onChange={(e) => handleChange('youtubeUrl', e.target.value)}
              placeholder="https://youtube.com/@biddaloi"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
