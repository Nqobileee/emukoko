import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Emukoko Innovations — our mission to revolutionize beekeeping, our vision for sustainable agriculture, and the team behind the platform.",
};

export default function AboutPage() {
  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <main className="relative z-10 pt-24 pb-16 px-4 flex flex-col gap-16 max-w-6xl mx-auto w-full">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="material-symbols-outlined text-[16px] text-amber-700">info</span>
            <span className="text-xs font-medium text-amber-800 tracking-wide uppercase">
              About Emukoko
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Where Technology Meets
            <br />
            <span className="text-primary">Community Growth</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Emukoko Innovations is a Zimbabwean AgriTech company building the future of
            beekeeping. We combine Internet of Things sensors, artificial intelligence, and a
            digital marketplace to empower rural communities with sustainable livelihoods.
          </p>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-2xl text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-amber-700 mx-auto mb-4">
              <span className="material-symbols-outlined text-[28px]">flag</span>
            </div>
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              To revolutionize beekeeping in Zimbabwe and across Africa by providing accessible,
              affordable smart technology that increases honey production, ensures product quality,
              and creates sustainable income for rural farming communities.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-amber-700 mx-auto mb-4">
              <span className="material-symbols-outlined text-[28px]">visibility</span>
            </div>
            <h2 className="text-xl font-bold mb-3">Our Vision</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              A world where every beekeeper, regardless of location or resources, has access to
              data-driven insights that protect their colonies, optimize their yields, and connect
              them directly with consumers who value transparency and purity.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-amber-700 mx-auto mb-4">
              <span className="material-symbols-outlined text-[28px]">favorite</span>
            </div>
            <h2 className="text-xl font-bold mb-3">Our Values</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Community first. Sustainability always. Innovation with purpose. We believe
              technology should uplift people, protect ecosystems, and create shared prosperity —
              not just profit.
            </p>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 border border-primary/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The Problem We Solve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-400 mt-1">warning</span>
                  <div>
                    <h3 className="font-bold text-sm">Colony Loss</h3>
                    <p className="text-sm text-gray-500">
                      Beekeepers lose up to 40% of colonies annually due to undetected pests,
                      diseases, and environmental changes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-400 mt-1">warning</span>
                  <div>
                    <h3 className="font-bold text-sm">Market Access</h3>
                    <p className="text-sm text-gray-500">
                      Rural farmers struggle to reach urban consumers, relying on middlemen who
                      take large margins from their earnings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-400 mt-1">warning</span>
                  <div>
                    <h3 className="font-bold text-sm">Knowledge Gaps</h3>
                    <p className="text-sm text-gray-500">
                      New beekeepers lack access to training, best practices, and mentorship from
                      experienced apiarists.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-400 mt-1">warning</span>
                  <div>
                    <h3 className="font-bold text-sm">Quality Assurance</h3>
                    <p className="text-sm text-gray-500">
                      Consumers cannot verify honey purity or origin, leading to distrust and
                      unfair competition from adulterated products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Meet the Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A small but passionate team building big solutions for rural communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-[36px] text-amber-700">person</span>
              </div>
              <h3 className="font-bold text-lg">Princess</h3>
              <p className="text-sm text-primary font-medium mb-2">Frontend Developer & UI/UX Designer</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Responsible for the user experience, responsive layouts, consumer-facing pages, QR
                code integration, and marketplace UI. Ensures the platform is beautiful, accessible,
                and mobile-first.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-[36px] text-amber-700">person</span>
              </div>
              <h3 className="font-bold text-lg">Edith</h3>
              <p className="text-sm text-primary font-medium mb-2">Backend Developer & Systems Architect</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Leads API architecture, database design, IoT integration, and AI diagnostics.
                Handles deployment infrastructure, security, and admin panel development.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="bg-[#181611] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-center mb-10">Our Impact Goals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-400 mt-1">Farmers Empowered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">2,000+</p>
                <p className="text-sm text-gray-400 mt-1">Smart Hives Deployed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">40%</p>
                <p className="text-sm text-gray-400 mt-1">Yield Increase Target</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-400 mt-1">Traceable Products</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            See how our Partner &amp; Profit model works, or get in touch to join the movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/how-it-works"
              className="h-12 px-6 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-full transition-all flex items-center justify-center gap-2"
            >
              How It Works
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link
              href="/contact"
              className="h-12 px-6 bg-white/60 hover:bg-white/80 text-[#181611] font-bold rounded-full border border-gray-200 transition-all flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
