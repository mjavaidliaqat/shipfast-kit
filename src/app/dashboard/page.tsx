export default function DashboardOverview() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-gray-400 mt-1">Welcome back to your project analytics.</p>
        </div>
        <span className="bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-full">
          Pro Plan Active
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#0f1422] border border-gray-800 p-6 rounded-2xl">
          <p className="text-sm font-medium text-gray-400">Total Revenue</p>
          <p className="text-3xl font-extrabold text-white mt-2">$12,450</p>
          <p className="text-xs text-emerald-400 mt-2">↑ +14.2% from last month</p>
        </div>
        <div className="bg-[#0f1422] border border-gray-800 p-6 rounded-2xl">
          <p className="text-sm font-medium text-gray-400">Active Subscriptions</p>
          <p className="text-3xl font-extrabold text-white mt-2">342</p>
          <p className="text-xs text-indigo-400 mt-2">+28 new subscribers today</p>
        </div>
        <div className="bg-[#0f1422] border border-gray-800 p-6 rounded-2xl">
          <p className="text-sm font-medium text-gray-400">API Usage</p>
          <p className="text-3xl font-extrabold text-white mt-2">88.4%</p>
          <p className="text-xs text-gray-500 mt-2">Normal operational bandwidth</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-[#0f1422] border border-gray-800 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-gray-800/60">
            <div>
              <p className="text-sm font-medium text-white">User #9821 subscribed to Pro Plan</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
            <span className="text-emerald-400 font-semibold text-sm">+$49.00</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-white">User #9819 subscribed to Starter Plan</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
            <span className="text-emerald-400 font-semibold text-sm">+$19.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
