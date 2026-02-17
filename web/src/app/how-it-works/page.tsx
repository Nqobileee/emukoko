import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  Cpu,
  BarChart3,
  Store,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discover the Emukoko Partner & Profit model — a 5-phase approach that takes beekeepers from partnership to sustained profitability with smart technology.",
};

const phases = [
  {
    number: "01",
    title: "Partner",
    subtitle: "Onboarding & Agreement",
    icon: Handshake,
    description:
      "Beekeepers join the Emukoko network through a simple partnership agreement. There's no upfront cost — we invest in the technology so farmers can focus on what they know best.",
    details: [
      "Farmer registers and completes a brief profile with their apiary location and hive count",
      "Partnership agreement outlines profit-sharing terms — transparent and fair for both sides",
      "Initial site assessment determines optimal sensor placement and connectivity options",
      "Farmer receives orientation materials and access to the Emukoko Learning Hub",
    ],
  },
  {
    number: "02",
    title: "Install",
    subtitle: "Smart Hive Deployment",
    icon: Cpu,
    description:
      "Our team installs IoT-enabled Smart Hive sensors on the farmer's existing hives. The hardware is designed for harsh outdoor conditions and low-power operation, built to last.",
    details: [
      "Temperature, humidity, weight, and vibration sensors are fitted to each hive",
      "Camera module enables remote visual inspection and AI-powered pest detection",
      "Low-power LoRa or cellular connectivity ensures data transmission even in remote areas",
      "Hardware operates on solar power with battery backup — no mains electricity required",
    ],
  },
  {
    number: "03",
    title: "Monitor",
    subtitle: "Data-Driven Beekeeping",
    icon: BarChart3,
    description:
      "Sensor data flows into the Emukoko platform in real time. Farmers receive alerts on their mobile devices, while AI models analyse patterns to provide actionable insights and early warnings.",
    details: [
      "24/7 monitoring of hive vitals with push-notification alerts for anomalies",
      "AI diagnostics detect pest threats, swarm signals, and queen health issues early",
      "Predictive yield forecasting helps farmers plan harvest timing for maximum output",
      "Data dashboard accessible via smartphone — optimised for low-bandwidth connections",
    ],
  },
  {
    number: "04",
    title: "Harvest & Sell",
    subtitle: "Marketplace & Traceability",
    icon: Store,
    description:
      "When the honey is ready, farmers record their harvest through the platform. Every batch is verified against sensor data, awarded a quality grade, and listed on the Emukoko Marketplace with full QR traceability.",
    details: [
      "Harvest weight is cross-referenced with sensor readings for integrity verification",
      "Quality control grading ensures only premium products reach the marketplace",
      "Each jar receives a unique QR code linking to the farmer's story and hive data",
      "Consumers buy directly through the platform — no middlemen, better prices for farmers",
    ],
  },
  {
    number: "05",
    title: "Profit & Grow",
    subtitle: "Reinvestment & Expansion",
    icon: TrendingUp,
    description:
      "Revenue from sales is distributed through a transparent profit-sharing model. Farmers receive the majority of the proceeds, with a portion reinvested into technology upgrades, training, and expanding the network.",
    details: [
      "Automated payout calculations ensure farmers are paid promptly and fairly",
      "A portion funds technology maintenance, upgrades, and new sensor deployments",
      "Successful farmers can expand their operations with additional Smart Hive installations",
      "Community reinvestment supports training programmes and new farmer onboarding",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background blur */}
      <div className="fixed bottom-[20%] left-[-8%] w-[35vh] h-[35vh] bg-primary/8 rounded-full blur-[70px] pointer-events-none z-0" />

      {/* Header */}
      <section className="relative z-10 pt-24 pb-8 sm:pt-32 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Our Model
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              The Partner &amp; Profit Model
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Five clear phases take beekeepers from partnership to profit. No
              hidden costs, no complicated contracts — just technology working
              for the farmer.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="relative z-10 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={phase.number} className="relative">
                  {/* Connector line */}
                  {index < phases.length - 1 && (
                    <div className="hidden md:flex absolute left-[39px] top-full w-px h-6 bg-border-light z-0">
                      <ChevronDown className="w-3 h-3 text-border absolute -bottom-1 -left-[5px]" />
                    </div>
                  )}
                  <div className="bg-surface rounded-2xl border border-border-light p-7 sm:p-9 shadow-sm hover:shadow-md hover:border-primary/15 transition-all">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                      {/* Phase number + icon */}
                      <div className="flex items-start gap-4 md:min-w-[200px] shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-text-light uppercase tracking-widest">
                            Phase {phase.number}
                          </span>
                          <h3 className="text-xl font-bold text-foreground mt-0.5">
                            {phase.title}
                          </h3>
                          <p className="text-xs text-primary font-medium mt-1">
                            {phase.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-text-muted leading-relaxed mb-5">
                          {phase.description}
                        </p>
                        <div className="space-y-3">
                          {phase.details.map((detail, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3"
                            >
                              <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              </div>
                              <p className="text-sm text-text-muted leading-relaxed">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary / Benefits */}
      <section className="relative z-10 py-10 sm:py-14 bg-surface-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why This Model Works
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              We structured the Partner &amp; Profit model to remove barriers
              and align incentives at every level.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                stat: "$0",
                label: "Upfront Cost",
                note: "Zero investment needed from farmers to get started",
              },
              {
                stat: "24/7",
                label: "Hive Monitoring",
                note: "Continuous sensor data even in off-grid locations",
              },
              {
                stat: "Direct",
                label: "Market Access",
                note: "No middlemen — farmer to consumer through our platform",
              },
              {
                stat: "Fair",
                label: "Profit Share",
                note: "Transparent revenue split that rewards the farmer first",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-surface p-6 rounded-2xl border border-border-light text-center"
              >
                <p className="text-2xl font-bold text-primary mb-1">
                  {item.stat}
                </p>
                <p className="text-sm font-semibold text-foreground mb-2">
                  {item.label}
                </p>
                <p className="text-xs text-text-light leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to become a partner?
          </h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto">
            Join the growing network of smart beekeepers across Zimbabwe. It
            starts with a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-13 px-7 rounded-full bg-primary hover:bg-primary-dark text-foreground font-semibold text-base transition-colors gap-2"
          >
            Start a Partnership
            <ArrowRight className="w-4.5 h-4.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
