export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      {/* Background glow orbs */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] left-[-10%] w-[40vh] h-[40vh] bg-primary/10 rounded-full blur-[60px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 px-5 py-3 flex items-center justify-between transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full blur-xl -z-10 pointer-events-none"></div>
        <div className="flex items-center gap-2">
          <div className="text-primary flex items-center justify-center p-1 bg-white/40 backdrop-blur-sm border border-white/20 rounded-full shadow-glow-sm">
            <span className="material-symbols-outlined text-[24px]">hexagon</span>
          </div>
          <span className="font-bold text-lg tracking-tight drop-shadow-sm text-[#181611]">Emukoko</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[#181611]">menu</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-24 px-4 flex flex-col gap-10 max-w-lg mx-auto w-full">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-6 relative">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-glow group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Beekeeper inspecting hives in a sunlit apiary with modern equipment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT1Pk-64oyA2K4MALRETd7uUyMLhXT9SAeHjH6v2FDtxKAAU4DRF6i77_8tdgD2t04UeCjSGFW9u0gXUL30VCMLhQcrWWH1vF9hmEpSCEFqaAysVoFyjJ1Xhr2RpocNjkyeM159iQz-jqnMfUbvZ6KEwa4ApTLX9R8x_wgJbzj4WKY3gS_NjHCVrYz3xodH_0N7DymLD4arPjjnx77k1S5yKq-Lvo4WxBUc5HCgk7t9zTOhaahemqrprz_3GlRisXFGY6JMyouV20"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-white tracking-wide uppercase">Live Hive Data</span>
              </div>
              <h1 className="text-3xl font-bold text-white leading-tight mb-2">
                Nature&apos;s Intelligence,<br />Amplified by AI.
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
              Revolutionizing beekeeping with smart IoT sensors and community-driven insights.
            </p>
            <div className="flex flex-col w-full gap-3">
              <button className="w-full h-14 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-full shadow-glow transition-all active:scale-95 flex items-center justify-center gap-2 text-lg">
                <span>Explore Our Tech</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* Smart Hive Ecosystem Section */}
        <section className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-[#181611]">Smart Hive Ecosystem</h2>
            <button className="text-sm font-bold text-primary hover:text-amber-600 flex items-center gap-1">
              See all <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-card p-5 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-amber-700">
                <span className="material-symbols-outlined">sensors</span>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Smart Monitoring</h3>
                <p className="text-xs text-gray-500 mt-1">24/7 IoT sensors track hive vitals.</p>
              </div>
            </div>
            <div className="glass-card p-5 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-amber-700">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">AI Predictions</h3>
                <p className="text-xs text-gray-500 mt-1">Data-driven yield forecasting.</p>
              </div>
            </div>
            <div className="col-span-2 glass-card p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 text-primary">
                <span className="material-symbols-outlined text-[120px]">diversity_3</span>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-amber-700">
                <span className="material-symbols-outlined text-[28px]">diversity_3</span>
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-base leading-tight">Community Impact</h3>
                <p className="text-sm text-gray-500 mt-1">Empowering local beekeepers sustainably.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hive Status Section */}
        <section className="bg-white rounded-3xl p-6 shadow-xl shadow-primary/5 border border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-transparent pointer-events-none"></div>
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div>
              <h2 className="text-xl font-bold">Hive B-04 Status</h2>
              <p className="text-xs text-gray-400 font-mono">Last update: 2 min ago</p>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Optimal
            </div>
          </div>
          <div className="space-y-6 relative z-10">
            {/* Internal Temperature */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shadow-sm">
                <span className="material-symbols-outlined">device_thermostat</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-sm font-medium text-gray-500">Internal Temp</span>
                  <span className="text-xl font-bold text-[#181611]">35.2°C</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 w-[75%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)]"></div>
                </div>
              </div>
            </div>
            {/* Humidity */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shadow-sm">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-sm font-medium text-gray-500">Humidity</span>
                  <span className="text-xl font-bold text-[#181611]">58%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-300 to-blue-500 w-[58%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div>
                </div>
              </div>
            </div>
            {/* Colony Weight */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">scale</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-sm font-medium text-gray-500">Colony Weight</span>
                  <span className="text-xl font-bold text-[#181611]">22.4 kg</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-amber-600 w-[85%] rounded-full shadow-glow-sm"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
            <button className="w-full py-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors flex items-center justify-center gap-2">
              View Full Analytics
              <span className="material-symbols-outlined text-[18px]">bar_chart</span>
            </button>
          </div>
        </section>

        {/* Sustainable Cycle Section */}
        <section className="flex flex-col gap-6">
          <div className="text-center px-4">
            <h2 className="text-2xl font-bold text-[#181611]">Sustainable Cycle</h2>
            <p className="text-sm text-gray-500 mt-2">Our circular business model ensures growth for everyone.</p>
          </div>
          <div className="relative w-full aspect-square max-w-[320px] mx-auto">
            <div className="absolute inset-0 m-auto w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center z-20 backdrop-blur-sm border border-primary/20 shadow-glow">
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-amber-600 mb-1">recycling</span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-800">Impact</p>
              </div>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 flex flex-col items-center gap-2 z-10">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">memory</span>
              </div>
              <span className="text-xs font-bold text-center">Tech Install</span>
            </div>
            <div className="absolute bottom-[15%] right-0 w-24 flex flex-col items-center gap-2 z-10">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <span className="text-xs font-bold text-center">Yield Increase</span>
            </div>
            <div className="absolute bottom-[15%] left-0 w-24 flex flex-col items-center gap-2 z-10">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">volunteer_activism</span>
              </div>
              <span className="text-xs font-bold text-center">Community Profit</span>
            </div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 rotate-12" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="none" opacity="0.4" r="35" stroke="#eebd2b" strokeDasharray="4 4" strokeWidth="0.5"></circle>
              <circle cx="50" cy="50" fill="none" opacity="0.2" r="48" stroke="#eebd2b" strokeWidth="0.2"></circle>
            </svg>
          </div>
        </section>

        {/* The Hive Life Gallery Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#181611] px-2">The Hive Life</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-48 rounded-2xl overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Macro shot of honeycomb texture dripping with golden honey"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKygLOsGVOClV-IS-2Q2eWDES4n9QzFWKdH6RT7VAgqS41plfBFJIx9Sutt7D9IHKCuR7kxhXvSevLnaeijyUlPK2U9nM5m4QJVbCpc67PlaEHnbn5F0kMHKgYLbSnDDWnA9rmguvm0zDFNiA_LZJatmB8XX2iFKkaYmshHZ4ZIfuT_D0-nDDI7hQiS6PiXLaBCcj_Srmz_rSTN9-5uoxv3r4XEbiCGw-NT4u3gdHTuu_SfVIspMyeJJ1uj7RcBSkGPWaITsiHzh4"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden mt-8 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Farmer holding a smart tablet in a field with hives in background"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7c8OgmHCqYzXwaxKXOnFgUQALZwmZzNL-NdPfzBJ48QJr2GKG3ALPYZ-Nx0vksoNqmGYYD2y031rfVZTnvd_AYzQZSISUHByZwVdS6y1H3Az3AtKTJPjMTav_KUHBgqlzWTE6TAqJ1512ZIBSfdIEAU1fsPGj72LCvtnZCPkVGS4aGF4LJTyxZGdB18jv_1bOYcv43fg0IoUZnHrMdsPWiJKmYbkiQ_INGYxtZLoMjXpLKtkZ3XXeb95ixmdaE9P8z8y-BifIP0Y"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </section>

        {/* Bottom spacer for fixed CTA */}
        <div className="h-20"></div>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-6 left-4 right-4 z-40 max-w-lg mx-auto">
        <button className="w-full bg-[#181611] text-white h-16 rounded-full shadow-2xl flex items-center justify-between px-2 pl-6 group overflow-hidden relative">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-black group-hover:from-gray-700 group-hover:to-gray-900 transition-colors"></div>
          <div className="flex flex-col items-start relative z-10">
            <span className="text-sm font-medium text-gray-400">Ready to start?</span>
            <span className="text-lg font-bold text-primary">Join the Hive</span>
          </div>
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-[#181611] transform group-hover:rotate-45 transition-transform duration-300 relative z-10">
            <span className="material-symbols-outlined">arrow_outward</span>
          </div>
        </button>
      </div>
    </div>
  );
}
