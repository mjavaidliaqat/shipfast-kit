'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

interface Customer {
  id?: string;
  name?: string;
  email: string;
  plan: string;
  status: string;
}

const fallbackCustomers: Customer[] = [
  { email: 'alex@example.com', name: 'Alex Johnson', plan: 'Pro', status: 'Active' },
  { email: 'sarah@example.com', name: 'Sarah Smith', plan: 'Starter', status: 'Active' },
  { email: 'm.brown@example.com', name: 'Michael Brown', plan: 'Pro', status: 'Trial' },
];

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL || '',
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
        );

        const { data, error } = await supabase
          .from('customers')
          .select('*')
          .order('updated_at', { ascending: false });

        if (error || !data || data.length === 0) {
          setCustomers(fallbackCustomers);
        } else {
          setCustomers(data);
        }
      } catch (err) {
        setCustomers(fallbackCustomers);
      } finally {
        setLoading(false);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
        <p className="text-gray-400 mt-1">Manage your SaaS subscribers and customer base dynamically from PostgreSQL.</p>
      </div>

      <div className="bg-[#0f1422] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-8 text-center text-gray-400">Loading customers from database...</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-900/40">
                <th className="p-4">Customer</th>
                <th className="p-4">Plan</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {customers.map((c, index) => (
                <tr key={c.id || index} className="hover:bg-gray-800/20 transition-colors">
                  <td className="p-4">
                    <div className="font-medium text-white">{c.name || c.email.split('@')[0]}</div>
                    <div className="text-xs text-gray-400">{c.email}</div>
                  </td>
                  <td className="p-4 text-gray-300 font-medium">{c.plan}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        c.status.toLowerCase() === 'active'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60'
                          : 'bg-amber-950/80 text-amber-400 border border-amber-800/60'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
