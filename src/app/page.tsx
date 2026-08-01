import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white flex flex-col justify-between">
      {/* Header */}
      <header className="max-w-6xl mx-auto w-full p-6 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-white">🚀 ShipFast Kit</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="text-sm font-medium text-gray-300 hover:text-white transition">
            Sign In
          </Link>
          <Link href="/signin" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto text-center px-6 py-20">
        <div className="inline-block bg-indigo-950/60 border border-indigo-800/50 rounded-full px-4 py-1.5 text-xs text-indigo-300 mb-8 font-medium">
          ⚡ Production Ready SaaS Boilerplate
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Ship your Micro-SaaS <span className="text-indigo-400">in hours</span>, not weeks.
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Everything you need to launch fast: Supabase Authentication, Stripe Payments, Tailwind CSS, and a modern UI dashboard pre-configured.
        </p>

        <div className="flex justify-center items-center space-x-4">
          <Link href="/dashboard" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg flex items-center space-x-2 transition">
            <span>Explore Dashboard Demo</span>
            <span>→</span>
          </Link>
        </div>

        {/* Pricing Section */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold text-white mb-2">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 mb-12">Choose the plan that fits your launch goals.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            {/* Starter Plan */}
            <div className="bg-[#0f1422] border border-gray-800 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Starter</h3>
                <div className="my-4">
                  <span className="text-4xl font-extrabold text-white">$19</span>
                  <span className="text-gray-400"> / month</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center">✓ Unlimited Access</li>
                  <li className="flex items-center">✓ Basic Analytics</li>
                  <li className="flex items-center">✓ Community Support</li>
                </ul>
              </div>
              <Link href="/signin" className="w-full text-center bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/30 text-indigo-300 hover:text-white font-medium py-2.5 rounded-lg transition">
                Subscribe Now
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#0f1422] border-2 border-indigo-600 p-8 rounded-2xl flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Pro</h3>
                <div className="my-4">
                  <span className="text-4xl font-extrabold text-white">$49</span>
                  <span className="text-gray-400"> / month</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center">✓ Everything in Starter</li>
                  <li className="flex items-center">✓ Priority Support</li>
                  <li className="flex items-center">✓ Custom Domain</li>
                  <li className="flex items-center">✓ Advanced Metrics</li>
                </ul>
              </div>
              <Link href="/signin" className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition">
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © Built for indie hackers.
      </footer>
    </div>
  );
}
