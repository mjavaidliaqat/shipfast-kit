'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [projectName, setProjectName] = useState('ShipFast Kit App');
  const [email, setEmail] = useState('admin@shipfastkit.com');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [stripeWebhooks, setStripeWebhooks] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 text-sm mt-1">Configure your project options, integrations, and account preferences.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-[#0e131f] border border-gray-800 rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold text-white border-b border-gray-800 pb-3">General Configuration</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full bg-[#07090e] border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Notification Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#07090e] border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 text-sm"
            />
          </div>
        </div>

        <div className="bg-[#0e131f] border border-gray-800 rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold text-white border-b border-gray-800 pb-3">Preferences & Alerts</h2>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">Email Notifications</p>
              <p className="text-xs text-gray-400">Receive alerts when new subscriptions or payment events occur.</p>
            </div>
            <button
              type="button"
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`w-11 h-6 rounded-full transition-colors p-1 ${emailNotifications ? 'bg-indigo-600' : 'bg-gray-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${emailNotifications ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">Stripe Webhook Sync</p>
              <p className="text-xs text-gray-400">Automatically sync customer records in Supabase upon payment.</p>
            </div>
            <button
              type="button"
              onClick={() => setStripeWebhooks(!stripeWebhooks)}
              className={`w-11 h-6 rounded-full transition-colors p-1 ${stripeWebhooks ? 'bg-indigo-600' : 'bg-gray-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${stripeWebhooks ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition"
          >
            Save Settings
          </button>
          {saved && <span className="text-sm text-green-400 font-medium">✓ Changes saved successfully!</span>}
        </div>
      </form>
    </div>
  );
}
