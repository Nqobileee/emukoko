import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Thermometer,
  Droplets,
  Weight,
  Activity,
  Camera,
  Wifi,
  Sun,
  Brain,
  Bug,
  Calendar,
  BarChart3,
  Bell,
  QrCode,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore the Smart Hive technology stack — IoT sensors, AI diagnostics, real-time dashboards, and QR traceability that power the Emukoko platform.",
};

export default function TechnologyPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background blurs */}
      <div className="fixed top-[30%] left-[-8%] w-[45vh] h-[45vh] bg-primary/8 rounded-full blur-[80px] pointer-events-none z-0" />

      {/* Header */}
      <section className="relative z-10 pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Our Technology
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Built for the Field, Powered by Intelligence
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              The Emukoko platform combines rugged IoT hardware with
              sophisticated AI software. Every component is designed for the
              realities of rural deployment — low power, limited connectivity,
              and maximum reliability.
            </p>
          </div>
        </div>
      </section>

      {/* IoT Hardware Section */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Smart Hive Sensors
            </h2>
            <p className="text-text-muted max-w-xl">
              Purpose-built hardware that transforms any traditional hive into a
              connected, data-generating asset.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SensorCard
              icon={<Thermometer className="w-5 h-5" />}
              title="Temperature Probes"
              description="Dual internal/external temperature sensors with ±0.1°C accuracy. Monitors brood nest conditions and detects overheating or cold stress."
              spec="Range: -40°C to 85°C"
            />
            <SensorCard
              icon={<Droplets className="w-5 h-5" />}
              title="Humidity Sensor"
              description="Precision humidity monitoring inside the hive body. Critical for detecting moisture buildup that leads to mould and disease."
              spec="Accuracy: ±2% RH"
            />
            <SensorCard
              icon={<Weight className="w-5 h-5" />}
              title="Load Cells"
              description="High-precision weight monitoring beneath the hive stand. Tracks honey accumulation, consumption, and sudden changes that indicate swarming."
              spec="Capacity: 200kg, Resolution: 10g"
            />
            <SensorCard
              icon={<Activity className="w-5 h-5" />}
              title="Vibration Analysis"
              description="Accelerometer data captures colony vibration patterns. Algorithms identify queen piping, worker agitation, and pre-swarm behaviour."
              spec="3-axis, 100Hz sampling"
            />
            <SensorCard
              icon={<Camera className="w-5 h-5" />}
              title="Hive Camera"
              description="Low-power camera module captures periodic images of the hive entrance. AI models count bee traffic and detect pest presence."
              spec="2MP, IR night vision"
            />
            <SensorCard
              icon={<Wifi className="w-5 h-5" />}
              title="Connectivity Module"
              description="LoRaWAN for long-range, low-power communication between hives and the gateway. Cellular fallback ensures data reaches the cloud."
              spec="LoRa: up to 15km range"
            />
          </div>

          {/* Power info */}
          <div className="mt-8 bg-surface p-7 rounded-2xl border border-border-light flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">
                Solar Powered, Always On
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Each Smart Hive unit operates on a small solar panel with
                lithium battery backup. Designed for continuous operation even
                during extended cloud cover. No mains electricity required —
                making it suitable for the most remote apiaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Software Section */}
      <section className="relative z-10 py-16 sm:py-24 bg-surface-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              AI &amp; Software Platform
            </h2>
            <p className="text-text-muted max-w-xl">
              Raw sensor data is only useful if it tells you something. Our
              software layer turns numbers into decisions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <AIFeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="Pest & Disease Detection"
              description="Computer vision models trained on thousands of hive images identify varroa mites, wax moths, small hive beetles, and signs of foulbrood. Alerts are sent within minutes of detection."
            />
            <AIFeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Yield Forecasting"
              description="Time-series analysis of weight data, combined with local weather patterns and historical records, predicts harvest timing and expected yield for each hive."
            />
            <AIFeatureCard
              icon={<Calendar className="w-6 h-6" />}
              title="Predictive Maintenance"
              description="Machine learning models identify sensor trends that precede equipment failures, connectivity issues, or battery degradation — scheduling maintenance before problems occur."
            />
            <AIFeatureCard
              icon={<Bell className="w-6 h-6" />}
              title="Smart Alerts"
              description="Context-aware notifications that distinguish routine changes from unusual events. Farmers receive only the alerts that matter, via SMS, push notification, or in-app message."
            />
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Platform Capabilities
            </h2>
            <p className="text-text-muted max-w-xl">
              Beyond monitoring and AI — the full ecosystem that connects
              production to market.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <PlatformCard
              icon={<Smartphone className="w-5 h-5" />}
              title="Farmer Dashboard"
              description="Mobile-first interface showing hive status, historical trends, AI recommendations, and harvest records. Works offline with data sync when connectivity returns."
            />
            <PlatformCard
              icon={<QrCode className="w-5 h-5" />}
              title="QR Traceability"
              description="Every honey jar carries a unique QR code linking to the farmer's profile, hive sensor data, and quality control records. Full transparency from hive to table."
            />
            <PlatformCard
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Quality Control"
              description="Automated weight reconciliation between sensor readings and delivered harvest. Batches that pass grading criteria are approved for the marketplace."
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 py-16 sm:py-24 bg-surface-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Built With
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              A modern, reliable technology stack chosen for performance,
              scalability, and developer velocity.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Next.js", category: "Frontend" },
              { name: "Tailwind CSS", category: "Styling" },
              { name: "PostgreSQL", category: "Database" },
              { name: "MQTT", category: "IoT Protocol" },
              { name: "TensorFlow", category: "AI/ML" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-surface p-5 rounded-xl border border-border-light text-center hover:border-primary/20 transition-colors"
              >
                <p className="font-semibold text-foreground text-sm">
                  {tech.name}
                </p>
                <p className="text-[11px] text-text-light mt-1">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Want to see it in action?
          </h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto">
            We&apos;d love to walk you through a live demo of the Smart Hive
            platform and answer any technical questions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-13 px-7 rounded-full bg-primary hover:bg-primary-dark text-foreground font-semibold text-base transition-colors gap-2"
          >
            Request a Demo
            <ArrowRight className="w-4.5 h-4.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function SensorCard({
  icon,
  title,
  description,
  spec,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  spec: string;
}) {
  return (
    <div className="bg-surface p-6 rounded-2xl border border-border-light shadow-sm hover:shadow-md hover:border-primary/15 transition-all group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
          {icon}
        </div>
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-text-muted leading-relaxed mb-3">
        {description}
      </p>
      <p className="text-xs font-mono text-text-light bg-surface-muted px-3 py-1.5 rounded-md inline-block">
        {spec}
      </p>
    </div>
  );
}

function AIFeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-surface p-7 rounded-2xl border border-border-light shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}

function PlatformCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-surface p-6 rounded-2xl border border-border-light shadow-sm hover:shadow-md transition-shadow group">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/15 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
