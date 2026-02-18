import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discover Emukoko's 5-phase Partner & Profit model — from Smart Hive installation to community reinvestment. Learn how we empower beekeepers with technology.",
};

const phases = [
  {
    number: 1,
    title: "Smart Hive Installation",
    icon: "memory",
    color: "bg-blue-50 text-blue-600",
    description:
      "We install IoT-enabled Smart Hives equipped with sensors that monitor temperature, humidity, weight, and vibration in real-time. Farmers receive their hives through our beehive loan program — no upfront cost required.",
    details: [
      "IoT sensors installed in each hive",
      "Real-time data from day one",
      "No upfront cost for farmers",
      "Training on hive management provided",
    ],
  },
  {
    number: 2,
    title: "AI-Powered Monitoring",
    icon: "psychology",
    color: "bg-purple-50 text-purple-600",
    description:
      "Our AI continuously analyzes sensor data patterns — temperature, humidity, weight, and vibration trends — to predict pest infestations and disease risks before visible symptoms appear. Farmers receive early warnings and actionable recommendations via their dashboard or mobile notifications.",
    details: [
      "24/7 automated health monitoring",
      "Pest & disease early prediction",
      "Predictive yield forecasting",
      "Personalized maintenance schedules",
    ],
  },
  {
    number: 3,
    title: "Optimized Harvesting",
    icon: "agriculture",
    color: "bg-green-50 text-green-600",
    description:
      "Data-driven insights tell farmers exactly when to harvest for maximum yield and quality. Weight sensors verify harvest amounts, and our quality control process grades every batch before it enters the marketplace.",
    details: [
      "Optimal harvest timing alerts",
      "Sensor-verified harvest weights",
      "Quality grading (A, B, C tiers)",
      "Batch tracking with unique IDs",
    ],
  },
  {
    number: 4,
    title: "Marketplace & Traceability",
    icon: "storefront",
    color: "bg-amber-50 text-amber-600",
    description:
      "Verified honey is listed on our digital marketplace with QR codes linking every jar to its farmer, hive data, and quality records. Consumers get full transparency; farmers get fair prices without middlemen.",
    details: [
      "Direct farmer-to-consumer sales",
      "QR code traceability on every jar",
      "Fair pricing with no middlemen",
      "Mobile money & card payments",
    ],
  },
  {
    number: 5,
    title: "Community Reinvestment",
    icon: "volunteer_activism",
    color: "bg-rose-50 text-rose-600",
    description:
      "Profits flow back into the community. Farmers repay their hive loans from earnings, and surplus revenue funds new installations, training programs, and the Learning Chartboard — creating a self-sustaining cycle of growth.",
    details: [
      "Farmer earnings from honey sales",
      "Gradual hive loan repayment",
      "Reinvestment in new installations",
      "Knowledge sharing via Learning Chartboard",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      <div className="fixed top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] right-[-10%] w-[40vh] h-[40vh] bg-primary/10 rounded-full blur-[60px] pointer-events-none z-0"></div>

      <main className="relative z-10 pt-24 pb-16 px-4 flex flex-col gap-16 max-w-6xl mx-auto w-full">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="material-symbols-outlined text-[16px] text-amber-700">
              route
            </span>
            <span className="text-xs font-medium text-amber-800 tracking-wide uppercase">
              Partner & Profit Model
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            5 Phases to
            <br />
            <span className="text-primary">Sustainable Growth</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our Partner &amp; Profit model creates a self-sustaining cycle: we install the
            technology, farmers grow their yields, consumers get traceable honey, and profits
            reinvest into the community. Here&apos;s how it works.
          </p>
        </section>

        {/* Phases Timeline */}
        <section className="relative">
          {/* Vertical line connector (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 glass-card p-6 md:p-8 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${phase.color} flex items-center justify-center`}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {phase.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Phase {phase.number}
                      </p>
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          check_circle
                        </span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Number badge (center on desktop) */}
                <div className="hidden md:flex w-16 h-16 rounded-full bg-primary text-[#181611] font-bold text-xl items-center justify-center shadow-glow shrink-0 z-10">
                  {phase.number}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </section>

        {/* The Cycle Visual */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 border border-primary/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">The Sustainable Cycle</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every phase feeds into the next, creating a circular economy that grows stronger with
              each season.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {phases.map((phase, index) => (
              <div key={phase.number} className="flex items-center gap-2 md:gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-12 h-12 rounded-full ${phase.color} flex items-center justify-center`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{phase.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 text-center max-w-[80px]">
                    {phase.title}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <span className="material-symbols-outlined text-primary text-[20px] mt-[-16px]">
                    arrow_forward
                  </span>
                )}
                {index === phases.length - 1 && (
                  <span className="material-symbols-outlined text-primary text-[20px] mt-[-16px]">
                    replay
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ / Key Questions */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                q: "How much does it cost to get started?",
                a: "Nothing upfront. Smart Hives are provided through our beehive loan program. Farmers repay gradually from their honey sales revenue.",
              },
              {
                q: "Do I need technical skills?",
                a: "Not at all. We handle all tech installation and provide full training. The dashboard is designed for mobile-first, low-bandwidth access.",
              },
              {
                q: "How do consumers verify honey purity?",
                a: "Every jar has a QR code linking to the specific hive, sensor data, quality grade, and farmer story — full traceability from hive to home.",
              },
              {
                q: "What regions do you currently serve?",
                a: "We're starting in Zimbabwe with plans to expand across Southern Africa. Contact us to express interest for your region.",
              },
            ].map((faq) => (
              <div key={faq.q} className="glass-card p-6 rounded-2xl">
                <h3 className="font-bold text-sm mb-2 flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">
                    help
                  </span>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#181611] text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Join our growing network of smart beekeepers and start your journey toward
              sustainable, data-driven honey production.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="h-14 px-8 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-full shadow-glow transition-all flex items-center justify-center gap-2 text-lg"
              >
                Get Started
                <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
              </Link>
              <Link
                href="/technology"
                className="h-14 px-8 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 transition-all flex items-center justify-center gap-2 text-lg"
              >
                See Our Technology
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
