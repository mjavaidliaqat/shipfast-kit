'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState<string | null>(null);
  const [demoNotice, setDemoNotice] = useState<string | null>(null);

  const handleSubscribe = async (plan: string) => {
    setLoading(plan);
    setDemoNotice(null);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: plan === 'pro' ? 'price_pro' : 'price_starter' }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        // Smooth inline notice instead of browser alert
        setDemoNotice(data.error || 'Demo mode active. Add real Stripe API keys in .env.local to enable live checkout.');
      } else if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setDemoNotice('Demo Mode: Redirecting to dashboard billing...');
      setTimeout(() => {
        window.location.href = '/dashboard/billing';
      }, 1500);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-white flex flex-col justify-between">
      {/* Header */}
      <header className="max-w-6xl mx-auto w-full px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🚀</span>
          <span className="font-bold text-xl tracking-tight">ShipFast Kit</span>
        </div>
        <Link
          href="/dashboard"
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition"
        >
          Dashboard
        </Link>
      </header>

      {/* Hero & Pricing */}
      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Launch your SaaS in <span className="text-indigo-400">hours</span>, not weeks.
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
          Complete Next.js 14, Supabase, and Stripe boilerplate ready for production.
        </p>

        {demoNotice && (
          <div className="mb-6 p-4 bg-indigo-900/30 border border-indigo-500/40 rounded-xl text-indigo-300 text-sm max-w-md mx-auto">
            ℹ️ {demoNotice}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Starter Plan */}
          <div className="bg-[#0e131f] border border-gray-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Starter</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold">$19</span>
                <span className="text-gray-400 ml-2 text-sm">/ month</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                <li>✓ Unlimited Access</li>
                <li>✓ Basic Analytics</li>
                <li>✓ Community Support</li>
              </ul>
            </div>
            <button
              onClick={() => handleSubscribe('starter')}
              disabled={loading === 'starter'}
              className="mt-8 w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 rounded-xl transition text-center disabled:opacity-50"
            >
              {loading === 'starter' ? 'Processing...' : 'Subscribe Starter'}
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#0e131f] border-2 border-indigo-600 rounded-2xl p-8 flex flex-col justify-between relative">
            <span className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold">$49</span>
                <span className="text-gray-400 ml-2 text-sm">/ month</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                <li>✓ Everything in Starter</li>
                <li>✓ Priority Support</li>
                <li>✓ Custom Domain</li>
                <li>✓ Advanced Metrics</li>
              </ul>
            </div>
            <button
              onClick={() => handleSubscribe('pro')}
              disabled={loading === 'pro'}
              className="mt-8 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl transition text-center disabled:opacity-50"
            >
              {loading === 'pro' ? 'Processing...' : 'Subscribe Now'}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-500">
        © Built for indie hackers.
      </footer>
    </div>
  );
}
