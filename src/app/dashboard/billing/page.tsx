'use client';

import { useState } from 'react';

export default function BillingPage() {
  const [loading, setLoading] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const handleManageStripe = async () => {
    setLoading(true);
    setErrorNotice(null);

    try {
      // Trigger the exact same Checkout Session endpoint as the landing page
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: 'pro' }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorNotice(data.error || 'Unable to redirect to Stripe checkout.');
      } else if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setErrorNotice('Connection error. Please try again.');
    } fontally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Billing & Subscription</h1>
        <p className="text-gray-400 text-sm mt-1">Manage your current plan and payment methods.</p>
      </div>

      <div className="bg-[#0e131f] border border-gray-800/80 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
        <div>
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">CURRENT SUBSCRIPTION</span>
          <h2 className="text-xl font-bold text-white mt-1">Pro Plan ($49/mo)</h2>
          <p className="text-sm text-gray-400 mt-1">Your next billing date is September 1, 2026.</p>
        </div>

        <button
          onClick={handleManageStripe}
          disabled={loading}
          className="bg-[#5440ed] hover:bg-[#432ee0] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-md shadow-indigo-600/20 disabled:opacity-50 whitespace-nowrap"
        >
          {loading ? 'Redirecting...' : 'Manage via Stripe'}
        </button>
      </div>

      {errorNotice && (
        <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-200 text-sm">
          {errorNotice}
        </div>
      )}
    </div>
  );
}
