import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      {/* Background glow orbs */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] left-[-10%] w-[40vh] h-[40vh] bg-primary/10 rounded-full blur-[60px] pointer-events-none z-0"></div>

      <main className="relative z-10 pt-24 pb-16 px-4 flex flex-col gap-16 max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium text-amber-800 tracking-wide uppercase">
                Smart Beekeeping Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Nature&apos;s Intelligence,
              <br />
              <span className="text-primary">Amplified by AI.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Revolutionizing beekeeping with smart IoT sensors, AI-powered diagnostics, and a
              community-driven marketplace. Empowering rural beekeepers across Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/how-it-works"
                className="h-14 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-full shadow-glow transition-all active:scale-95 flex items-center justify-center gap-2 text-lg px-8"
              >
                <span>Explore Our Tech</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="h-14 bg-white/60 hover:bg-white/80 backdrop-blur-sm text-[#181611] font-bold rounded-full border border-gray-200 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg px-8"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-glow group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Beekeeper inspecting hives in a sunlit apiary with modern equipment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT1Pk-64oyA2K4MALRETd7uUyMLhXT9SAeHjH6v2FDtxKAAU4DRF6i77_8tdgD2t04UeCjSGFW9u0gXUL30VCMLhQcrWWH1vF9hmEpSCEFqaAysVoFyjJ1Xhr2RpocNjkyeM159iQz-jqnMfUbvZ6KEwa4ApTLX9R8x_wgJbzj4WKY3gS_NjHCVrYz3xodH_0N7DymLD4arPjjnx77k1S5yKq-Lvo4WxBUc5HCgk7t9zTOhaahemqrprz_3GlRisXFGY6JMyouV20"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-medium text-white tracking-wide uppercase">
                    Live Hive Data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Hive Ecosystem Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] mb-3">
              Smart Hive Ecosystem
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our integrated platform combines hardware, software, and community to transform
              beekeeping from guesswork into data-driven precision.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-amber-700">
                <span className="material-symbols-outlined text-[28px]">sensors</span>
              </div>
              <h3 className="font-bold text-lg">Smart Monitoring</h3>
              <p className="text-sm text-gray-500">
                24/7 IoT sensors track hive temperature, humidity, weight, and vibration in
                real-time. Get instant alerts when conditions change.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-amber-700">
                <span className="material-symbols-outlined text-[28px]">psychology</span>
              </div>
              <h3 className="font-bold text-lg">AI Diagnostics</h3>
              <p className="text-sm text-gray-500">
                Advanced image recognition detects pests and diseases early. Predictive analytics
                forecast yields and recommend optimal harvest times.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-amber-700">
                <span className="material-symbols-outlined text-[28px]">diversity_3</span>
              </div>
              <h3 className="font-bold text-lg">Community Impact</h3>
              <p className="text-sm text-gray-500">
                Empowering local beekeepers with knowledge sharing, fair-trade marketplace access,
                and a sustainable partner-and-profit model.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-amber-700">
                <span className="material-symbols-outlined text-[28px]">storefront</span>
              </div>
              <h3 className="font-bold text-lg">Digital Marketplace</h3>
              <p className="text-sm text-gray-500">
                Connect producers directly with consumers. Every jar is traceable via QR code back
                to the farmer and verified IoT data.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-amber-700">
                <span className="material-symbols-outlined text-[28px]">qr_code_2</span>
              </div>
              <h3 className="font-bold text-lg">QR Traceability</h3>
              <p className="text-sm text-gray-500">
                Every honey batch links to the farmer&apos;s story, origin data, and IoT-verified
                purity records. Full transparency from hive to home.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-amber-700">
                <span className="material-symbols-outlined text-[28px]">school</span>
              </div>
              <h3 className="font-bold text-lg">Learning Chartboard</h3>
              <p className="text-sm text-gray-500">
                A knowledge-sharing platform with best practices, video guides, and expert advice
                to help beekeepers succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Live Hive Status Demo Section */}
        <section className="max-w-2xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary/5 border border-primary/10 relative overflow-hidden">
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
              <Link
                href="/technology"
                className="w-full py-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors flex items-center justify-center gap-2"
              >
                Learn About Our Technology
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Sustainable Cycle Section */}
        <section className="flex flex-col gap-6">
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] mb-3">
              Sustainable Cycle
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our circular Partner &amp; Profit model ensures growth for everyone — from tech
              installation to community returns.
            </p>
          </div>
          <div className="relative w-full aspect-square max-w-[320px] mx-auto">
            <div className="absolute inset-0 m-auto w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center z-20 backdrop-blur-sm border border-primary/20 shadow-glow">
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-amber-600 mb-1">
                  recycling
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-800">
                  Impact
                </p>
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
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 rotate-12"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" fill="none" opacity="0.4" r="35" stroke="#eebd2b" strokeDasharray="4 4" strokeWidth="0.5" />
              <circle cx="50" cy="50" fill="none" opacity="0.2" r="48" stroke="#eebd2b" strokeWidth="0.2" />
            </svg>
          </div>
          <div className="text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-amber-800 font-bold rounded-full transition-colors text-sm"
            >
              See How It Works
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* The Hive Life Gallery Section */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] mb-3">The Hive Life</h2>
            <p className="text-gray-500">Glimpses of smart beekeeping in action.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Macro shot of honeycomb texture dripping with golden honey"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKygLOsGVOClV-IS-2Q2eWDES4n9QzFWKdH6RT7VAgqS41plfBFJIx9Sutt7D9IHKCuR7kxhXvSevLnaeijyUlPK2U9nM5m4QJVbCpc67PlaEHnbn5F0kMHKgYLbSnDDWnA9rmguvm0zDFNiA_LZJatmB8XX2iFKkaYmshHZ4ZIfuT_D0-nDDI7hQiS6PiXLaBCcj_Srmz_rSTN9-5uoxv3r4XEbiCGw-NT4u3gdHTuu_SfVIspMyeJJ1uj7RcBSkGPWaITsiHzh4"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden md:mt-0 mt-8 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Farmer holding a smart tablet in a field with hives in background"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7c8OgmHCqYzXwaxKXOnFgUQALZwmZzNL-NdPfzBJ48QJr2GKG3ALPYZ-Nx0vksoNqmGYYD2y031rfVZTnvd_AYzQZSISUHByZwVdS6y1H3Az3AtKTJPjMTav_KUHBgqlzWTE6TAqJ1512ZIBSfdIEAU1fsPGj72LCvtnZCPkVGS4aGF4LJTyxZGdB18jv_1bOYcv43fg0IoUZnHrMdsPWiJKmYbkiQ_INGYxtZLoMjXpLKtkZ3XXeb95ixmdaE9P8z8y-BifIP0Y"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group col-span-2 md:col-span-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Beekeeper inspecting hives in a sunlit apiary"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT1Pk-64oyA2K4MALRETd7uUyMLhXT9SAeHjH6v2FDtxKAAU4DRF6i77_8tdgD2t04UeCjSGFW9u0gXUL30VCMLhQcrWWH1vF9hmEpSCEFqaAysVoFyjJ1Xhr2RpocNjkyeM159iQz-jqnMfUbvZ6KEwa4ApTLX9R8x_wgJbzj4WKY3gS_NjHCVrYz3xodH_0N7DymLD4arPjjnx77k1S5yKq-Lvo4WxBUc5HCgk7t9zTOhaahemqrprz_3GlRisXFGY6JMyouV20"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#181611] text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Hive?</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Whether you&apos;re a beekeeper looking to modernize, or a consumer seeking pure,
              traceable honey — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="h-14 px-8 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-full shadow-glow transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
              >
                Get Started
                <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
              </Link>
              <Link
                href="/about"
                className="h-14 px-8 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
