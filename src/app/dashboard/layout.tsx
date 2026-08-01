'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Overview', href: '/dashboard' },
  { name: 'Customers', href: '/dashboard/customers' },
  { name: 'Billing', href: '/dashboard/billing' },
  { name: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] flex text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 p-6 flex flex-col justify-between">
        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-lg tracking-tight">ShipFast Kit</span>
          </div>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = mounted && pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-400 font-semibold border border-indigo-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-gray-400 hover:text-white transition"
          >
            <span>← Back to Home</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
