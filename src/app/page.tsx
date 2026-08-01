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
        body: JSON.stringify({ plan }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setDemoNotice(data.error || 'Unable to connect to Stripe checkout.');
      } else if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setDemoNotice('Connection error. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080d] text-white flex flex-col justify-between font-sans">
      
      {/* Top Header Navigation */}
      <header className="max-w-6xl mx-auto w-full px-6 py-6 flex items-center justify-between border-b border-gray-800/50">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🚀</span>
          <span className="font-bold text-xl tracking-tight text-white">ShipFast Kit</span>
        </div>
        <Link
          href="/dashboard"
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-lg shadow-indigo-600/20"
        >
          Explore Dashboard Demo →
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center text-center">
        
        {/* Hero Banner */}
        <div className="space-y-4 mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Launch your SaaS in <span className="text-[#6366f1]">hours</span>, not weeks.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Complete Next.js 14, Supabase, and Stripe boilerplate ready for production.
          </p>

          {/* Alert / Notice Message */}
          {demoNotice && (
            <div className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-[#11142b]/80 border border-[#2d325a] rounded-xl text-indigo-300 text-sm max-w-lg mx-auto shadow-lg backdrop-blur-sm">
              <span className="bg-indigo-500/20 text-indigo-300 text-xs px-1.5 py-0.5 rounded font-bold">i</span>
              <span>{demoNotice}</span>
            </div>
          )}
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full mt-4 text-left">
          
          {/* Starter Plan */}
          <div className="bg-[#0b0d17] border border-gray-800/80 rounded-2xl p-8 flex flex-col justify-between shadow-2xl relative">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-5xl font-extrabold text-white">$19</span>
                <span className="text-gray-400 text-sm">/ month</span>
              </div>

              <ul className="space-y-4 text-sm text-gray-300 my-8">
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Unlimited Access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Basic Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Community Support
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSubscribe('starter')}
              disabled={loading === 'starter'}
              className="w-full bg-[#192233] hover:bg-[#202b40] text-gray-200 font-medium py-3.5 rounded-xl transition text-sm disabled:opacity-50"
            >
              {loading === 'starter' ? 'Redirecting to Stripe...' : 'Subscribe Starter'}
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#0c0e1a] border-2 border-[#5440ed] rounded-2xl p-8 flex flex-col justify-between shadow-2xl relative">
            
            <div className="absolute -top-3.5 right-6 bg-[#5440ed] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              MOST POPULAR
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-5xl font-extrabold text-white">$49</span>
                <span className="text-gray-400 text-sm">/ month</span>
              </div>

              <ul className="space-y-4 text-sm text-gray-300 my-8">
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Everything in Starter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Priority Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Custom Domain
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Advanced Metrics
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSubscribe('pro')}
              disabled={loading === 'pro'}
              className="w-full bg-[#4f39f6] hover:bg-[#432ee0] text-white font-medium py-3.5 rounded-xl transition text-sm shadow-lg shadow-indigo-600/20 disabled:opacity-50"
            >
              {loading === 'pro' ? 'Redirecting to Stripe...' : 'Subscribe Now'}
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-gray-500 border-t border-gray-800/30">
        © Built for indie hackers.
      </footer>
    </div>
  );
}
