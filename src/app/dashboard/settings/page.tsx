export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
      <p className="text-gray-400 mb-8">Configure your project options and account preferences.</p>

      <div className="bg-[#0f1422] border border-gray-800 rounded-2xl p-6 space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
          <input
            type="text"
            defaultValue="ShipFast Kit App"
            className="w-full px-3 py-2 bg-[#182035] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Notification Email</label>
          <input
            type="email"
            defaultValue="admin@shipfastkit.com"
            className="w-full px-3 py-2 bg-[#182035] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition">
          Save Settings
        </button>
      </div>
    </div>
  );
}
