export default function BillingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Billing & Subscription</h1>
      <p className="text-gray-400 mb-8">Manage your current plan and payment methods.</p>

      <div className="bg-[#0f1422] border border-gray-800 rounded-2xl p-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Current Subscription</span>
            <h2 className="text-2xl font-bold text-white mt-1">Pro Plan ($49/mo)</h2>
            <p className="text-sm text-gray-400 mt-1">Your next billing date is September 1, 2026.</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition">
            Manage via Stripe
          </button>
        </div>
      </div>
    </div>
  );
}
