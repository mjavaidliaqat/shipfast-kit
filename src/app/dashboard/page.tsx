import Link from "next/link";
import { LayoutDashboard, Users, CreditCard, Settings, LogOut, TrendingUp, DollarSign, Activity } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="font-bold text-xl text-indigo-400 mb-8">ShipFast Kit</div>
          <nav className="space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 bg-indigo-600/20 text-indigo-400 px-4 py-2.5 rounded-lg text-sm font-medium">
              <LayoutDashboard className="w-4 h-4" /> Overview
            </Link>
            <Link href="#" className="flex items-center gap-3 text-slate-400 hover:bg-slate-900 px-4 py-2.5 rounded-lg text-sm transition">
              <Users className="w-4 h-4" /> Customers
            </Link>
            <Link href="#" className="flex items-center gap-3 text-slate-400 hover:bg-slate-900 px-4 py-2.5 rounded-lg text-sm transition">
              <CreditCard className="w-4 h-4" /> Billing
            </Link>
            <Link href="#" className="flex items-center gap-3 text-slate-400 hover:bg-slate-900 px-4 py-2.5 rounded-lg text-sm transition">
              <Settings className="w-4 h-4" /> Settings
            </Link>
          </nav>
        </div>
        <Link href="/" className="flex items-center gap-3 text-slate-400 hover:text-red-400 px-4 py-2 text-sm transition">
          <LogOut className="w-4 h-4" /> Back to Home
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <p className="text-slate-400 text-sm">Welcome back to your project analytics.</p>
          </div>
          <div className="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full">
            Pro Plan Active
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-sm font-medium">Total Revenue</span>
              <DollarSign className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold">$12,450</div>
            <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +14.2% from last month
            </p>
          </div>

          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-sm font-medium">Active Subscriptions</span>
              <Users className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-bold">342</div>
            <p className="text-xs text-indigo-400 mt-2">+28 new subscribers today</p>
          </div>

          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-sm font-medium">API Usage</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-bold">88.4%</div>
            <p className="text-xs text-slate-400 mt-2">Normal operational bandwidth</p>
          </div>
        </div>

        {/* Mock Activity List */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <div>
                <p className="font-medium">User #9821 subscribed to Pro Plan</p>
                <p className="text-xs text-slate-500">2 minutes ago</p>
              </div>
              <span className="text-emerald-400 font-semibold">+$49.00</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <div>
                <p className="font-medium">User #9819 subscribed to Starter Plan</p>
                <p className="text-xs text-slate-500">1 hour ago</p>
              </div>
              <span className="text-emerald-400 font-semibold">+$19.00</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
