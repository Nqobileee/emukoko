import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Activity,
  Brain,
  Users,
  Thermometer,
  Droplets,
  Weight,
  ChevronRight,
  Cpu,
  TrendingUp,
  Heart,
  ArrowUpRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background blurs */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] left-[-10%] w-[40vh] h-[40vh] bg-primary/10 rounded-full blur-[60px] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary-dark tracking-wide uppercase">
                  Smart Beekeeping Platform
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight mb-6">
                Nature&apos;s Intelligence,{" "}
                <span className="text-primary">Amplified</span> by Technology.
              </h1>
              <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-md">
                Revolutionizing beekeeping in Zimbabwe with IoT-enabled hive
                monitoring, AI-powered diagnostics, and a community marketplace
                that connects farmers to consumers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center h-13 px-7 rounded-full bg-primary hover:bg-primary-dark text-foreground font-semibold text-base shadow-[0_0_20px_-5px_rgba(238,189,43,0.4)] hover:shadow-[0_0_30px_-5px_rgba(238,189,43,0.5)] transition-all gap-2"
                >
                  Explore Our Model
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>
                <Link
                  href="/technology"
                  className="inline-flex items-center justify-center h-13 px-7 rounded-full border border-border text-foreground font-semibold text-base hover:bg-surface transition-colors"
                >
                  View Technology
                </Link>
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT1Pk-64oyA2K4MALRETd7uUyMLhXT9SAeHjH6v2FDtxKAAU4DRF6i77_8tdgD2t04UeCjSGFW9u0gXUL30VCMLhQcrWWH1vF9hmEpSCEFqaAysVoFyjJ1Xhr2RpocNjkyeM159iQz-jqnMfUbvZ6KEwa4ApTLX9R8x_wgJbzj4WKY3gS_NjHCVrYz3xodH_0N7DymLD4arPjjnx77k1S5yKq-Lvo4WxBUc5HCgk7t9zTOhaahemqrprz_3GlRisXFGY6JMyouV20"
                  alt="Beekeeper inspecting hives in a sunlit apiary with modern monitoring equipment"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-white tracking-wide">
                    Live Hive Data Active
                  </span>
                </div>
              </div>
              {/* Decorative floating card */}
              <div className="hidden lg:block absolute -bottom-6 -left-8 glass-card p-4 rounded-2xl shadow-lg max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">
                    Yield Increase
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground">+34%</p>
                <p className="text-[11px] text-text-light mt-0.5">
                  Average improvement with Smart Hive
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Smart Hive Ecosystem
              </h2>
              <p className="text-text-muted max-w-lg">
                An integrated platform that connects every aspect of modern
                beekeeping — from sensor to shelf.
              </p>
            </div>
            <Link
              href="/technology"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              See all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="glass-card p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Smart Monitoring
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                IoT sensors track temperature, humidity, weight, and vibration
                around the clock. Get real-time alerts when your hives need
                attention.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                AI Diagnostics
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Machine learning models analyze sensor patterns and hive images
                to detect pests, diseases, and predict honey yields before
                harvest.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Community Impact
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Empowering rural beekeepers with technology, training, and
                market access. Our profit-sharing model ensures sustainable
                economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hive Status Demo */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Real-Time Hive Intelligence
              </h2>
              <p className="text-text-muted leading-relaxed mb-8 max-w-lg">
                Every Smart Hive reports vital statistics continuously. Farmers
                can monitor their colonies from anywhere, receiving instant
                alerts when conditions change.
              </p>
              <div className="space-y-4">
                {[
                  "Temperature and humidity tracking to ±0.1° accuracy",
                  "Colony weight monitoring detects honey flow and swarm events",
                  "Vibration analysis identifies queen health and colony mood",
                  "Data syncs even on low-bandwidth rural networks",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm text-text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Status card */}
            <div className="bg-surface rounded-3xl p-7 sm:p-8 shadow-xl shadow-primary/[0.06] border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
              <div className="flex items-center justify-between mb-7 relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Hive B-04 Status
                  </h3>
                  <p className="text-xs text-text-light font-mono mt-1">
                    Last update: 2 min ago
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Optimal
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <HiveMetric
                  icon={<Thermometer className="w-5 h-5" />}
                  label="Internal Temp"
                  value="35.2°C"
                  percent={75}
                  color="from-amber-400 to-orange-500"
                  iconBg="bg-orange-50"
                  iconColor="text-orange-500"
                />
                <HiveMetric
                  icon={<Droplets className="w-5 h-5" />}
                  label="Humidity"
                  value="58%"
                  percent={58}
                  color="from-blue-300 to-blue-500"
                  iconBg="bg-blue-50"
                  iconColor="text-blue-500"
                />
                <HiveMetric
                  icon={<Weight className="w-5 h-5" />}
                  label="Colony Weight"
                  value="22.4 kg"
                  percent={85}
                  color="from-primary to-amber-600"
                  iconBg="bg-amber-50"
                  iconColor="text-primary"
                />
              </div>

              <div className="mt-7 pt-5 border-t border-dashed border-border-light relative z-10">
                <Link
                  href="/technology"
                  className="w-full py-2.5 text-sm font-semibold text-text-muted hover:text-primary transition-colors flex items-center justify-center gap-2"
                >
                  View Full Analytics
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Cycle */}
      <section className="relative z-10 py-20 sm:py-28 bg-surface-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              A Sustainable Cycle
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              Our circular model creates value at every stage — from hive
              installation to community profit sharing.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <CycleCard
              icon={<Cpu className="w-7 h-7" />}
              title="Tech Install"
              description="Smart Hive sensors and cameras are installed in partner apiaries at no upfront cost to the farmer."
              step="01"
            />
            <CycleCard
              icon={<TrendingUp className="w-7 h-7" />}
              title="Yield Increase"
              description="AI-driven insights, predictive alerts, and optimized management practices increase honey yields significantly."
              step="02"
            />
            <CycleCard
              icon={<Heart className="w-7 h-7" />}
              title="Community Profit"
              description="Revenue from marketplace sales is shared with farmers, funding further expansion and community development."
              step="03"
            />
          </div>
        </div>
      </section>

      {/* Gallery / Visual Section */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            The Hive Life
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKygLOsGVOClV-IS-2Q2eWDES4n9QzFWKdH6RT7VAgqS41plfBFJIx9Sutt7D9IHKCuR7kxhXvSevLnaeijyUlPK2U9nM5m4QJVbCpc67PlaEHnbn5F0kMHKgYLbSnDDWnA9rmguvm0zDFNiA_LZJatmB8XX2iFKkaYmshHZ4ZIfuT_D0-nDDI7hQiS6PiXLaBCcj_Srmz_rSTN9-5uoxv3r4XEbiCGw-NT4u3gdHTuu_SfVIspMyeJJ1uj7RcBSkGPWaITsiHzh4"
                alt="Macro shot of honeycomb texture dripping with golden honey"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden sm:mt-12 group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7c8OgmHCqYzXwaxKXOnFgUQALZwmZzNL-NdPfzBJ48QJr2GKG3ALPYZ-Nx0vksoNqmGYYD2y031rfVZTnvd_AYzQZSISUHByZwVdS6y1H3Az3AtKTJPjMTav_KUHBgqlzWTE6TAqJ1512ZIBSfdIEAU1fsPGj72LCvtnZCPkVGS4aGF4LJTyxZGdB18jv_1bOYcv43fg0IoUZnHrMdsPWiJKmYbkiQ_INGYxtZLoMjXpLKtkZ3XXeb95ixmdaE9P8z8y-BifIP0Y"
                alt="Farmer using smart tablet to monitor hives in the field"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-foreground overflow-hidden p-10 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-90" />
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to join the hive?
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Whether you&apos;re a beekeeper looking to modernize your
                operations, or a consumer seeking pure, traceable honey — there&apos;s
                a place for you in the Emukoko ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-13 px-7 rounded-full bg-primary text-[#181611] font-semibold text-base hover:bg-primary-light transition-colors gap-2"
                >
                  Partner With Us
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center h-13 px-7 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HiveMetric({
  icon,
  label,
  value,
  percent,
  color,
  iconBg,
  iconColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  percent: number;
  color: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center ${iconColor} shadow-sm shrink-0`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-end mb-1.5">
          <span className="text-sm font-medium text-text-muted">{label}</span>
          <span className="text-xl font-bold text-foreground">{value}</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${color} rounded-full`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function CycleCard({
  icon,
  title,
  description,
  step,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: string;
}) {
  return (
    <div className="bg-surface p-7 rounded-2xl shadow-sm border border-border-light hover:shadow-md hover:border-primary/15 transition-all group relative">
      <span className="absolute top-5 right-5 text-[11px] font-bold text-text-light/40 uppercase tracking-widest">
        Step {step}
      </span>
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
