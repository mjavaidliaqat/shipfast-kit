'use client';

import { useState } from 'react';

export default function BillingPage() {
  const [loading, setLoading] = useState(false);

  const handleManageStripe = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/portal', { method: 'POST' });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        // Fallback to customer billing portal
        window.location.href = 'https://billing.stripe.com/p/login/test';
      }
    } catch {
      window.location.href = 'https://billing.stripe.com/p/login/test';
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Billing & Subscription</h1>
        <p className="text-gray-400 text-sm mt-1">Manage your current plan and payment methods.</p>
      </div>

      <div className="bg-[#0e131f] border border-gray-800/80 rounded-xl p-6 flex items-center justify-between shadow-lg">
        <div>
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">CURRENT SUBSCRIPTION</span>
          <h2 className="text-xl font-bold text-white mt-1">Pro Plan ($49/mo)</h2>
          <p className="text-sm text-gray-400 mt-1">Your next billing date is September 1, 2026.</p>
        </div>

        <button
          onClick={handleManageStripe}
          disabled={loading}
          className="bg-[#4f39f6] hover:bg-[#432ee0] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-md shadow-indigo-600/20 disabled:opacity-50"
        >
          {loading ? 'Opening Portal...' : 'Manage via Stripe'}
        </button>
      </div>
    </div>
  );
}
