export default function CustomersPage() {
  const customers = [
    { id: '1', name: 'Alex Johnson', email: 'alex@example.com', plan: 'Pro', status: 'Active' },
    { id: '2', name: 'Sarah Smith', email: 'sarah@example.com', plan: 'Starter', status: 'Active' },
    { id: '3', name: 'Michael Brown', email: 'm.brown@example.com', plan: 'Pro', status: 'Trial' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Customers</h1>
      <p className="text-gray-400 mb-8">Manage your SaaS subscribers and customer base.</p>

      <div className="bg-[#0f1422] border border-gray-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-[#141b2e]">
              <th className="p-4">Customer</th>
              <th className="p-4">Plan</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/60 text-sm">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-[#141b2e]/50 transition">
                <td className="p-4">
                  <p className="font-medium text-white">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.email}</p>
                </td>
                <td className="p-4 text-gray-300">{c.plan}</td>
                <td className="p-4">
                  <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full border border-emerald-500/20 font-medium">
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
