import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore the technology behind Emukoko's Smart Hive platform — IoT sensors, AI diagnostics, QR traceability, and a digital marketplace for honey.",
};

const sensors = [
  {
    icon: "device_thermostat",
    name: "Temperature Sensors",
    description:
      "Dual internal/external thermometers monitor brood nest temperature (target: 34–36°C) and ambient conditions. Alerts trigger when temperatures drift outside safe ranges.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: "water_drop",
    name: "Humidity Sensors",
    description:
      "Precision hygrometers track internal moisture levels crucial for honey curing and brood development. Optimal range: 50–65% relative humidity.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: "scale",
    name: "Weight Sensors",
    description:
      "Load cells under each hive measure colony weight changes in real-time — detecting nectar flows, consumption patterns, and optimal harvest windows.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: "vibration",
    name: "Vibration Sensors",
    description:
      "Accelerometers detect unusual colony behavior patterns including swarming preparation, queen loss, and potential pest intrusions through acoustic signatures.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: "photo_camera",
    name: "Hive Camera",
    description:
      "AI-enabled camera captures entrance activity images. Computer vision models analyze images for pest detection (Varroa mites, wax moths) and colony health assessment.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: "wifi",
    name: "Connectivity Module",
    description:
      "Low-power wireless transmission via MQTT protocol with HTTP fallback. Designed for rural low-bandwidth environments with data compression and local buffering.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

const aiFeatures = [
  {
    icon: "bug_report",
    title: "Pest & Disease Detection",
    description:
      "Computer vision models trained on thousands of images identify Varroa mites, wax moths, small hive beetles, and diseases like foulbrood with over 90% accuracy.",
  },
  {
    icon: "trending_up",
    title: "Yield Forecasting",
    description:
      "Machine learning algorithms analyze weight trends, weather data, and historical patterns to predict honey yields up to 4 weeks in advance.",
  },
  {
    icon: "calendar_month",
    title: "Predictive Maintenance",
    description:
      "Sensor trend analysis generates proactive maintenance schedules — recommending inspections, treatments, and feeding before problems escalate.",
  },
  {
    icon: "notification_important",
    title: "Smart Alerts",
    description:
      "Intelligent alert system prioritizes notifications by severity, reducing alert fatigue while ensuring critical events (swarming, theft, extreme temps) get immediate attention.",
  },
];

export default function TechnologyPage() {
  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[20%] left-[-10%] w-[40vh] h-[40vh] bg-primary/10 rounded-full blur-[60px] pointer-events-none z-0"></div>

      <main className="relative z-10 pt-24 pb-16 px-4 flex flex-col gap-16 max-w-6xl mx-auto w-full">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="material-symbols-outlined text-[16px] text-amber-700">
              precision_manufacturing
            </span>
            <span className="text-xs font-medium text-amber-800 tracking-wide uppercase">
              Smart Hive Technology
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Precision Beekeeping
            <br />
            <span className="text-primary">Powered by IoT & AI</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our Smart Hive combines an array of IoT sensors with cloud-based AI to give beekeepers
            unprecedented visibility into their colonies — all accessible from a mobile phone.
          </p>
        </section>

        {/* Smart Hive Diagram */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-primary/5 border border-primary/10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Inside the Smart Hive
            </h2>
            <p className="text-gray-500 text-sm">
              Each hive is equipped with a sensor array that continuously monitors colony health.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sensors.map((sensor) => (
              <div
                key={sensor.name}
                className="p-5 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all bg-white"
              >
                <div
                  className={`w-12 h-12 rounded-full ${sensor.color} flex items-center justify-center mb-3`}
                >
                  <span className="material-symbols-outlined text-[24px]">{sensor.icon}</span>
                </div>
                <h3 className="font-bold text-sm mb-1">{sensor.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{sensor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Flow */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How Data Flows</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From the sensor to your screen in under 5 seconds — designed for low-bandwidth rural
              networks.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center">
            {[
              { icon: "sensors", label: "Hive Sensors", sublabel: "Collect data" },
              { icon: "cell_tower", label: "MQTT/HTTP", sublabel: "Transmit" },
              { icon: "cloud", label: "Cloud Platform", sublabel: "Process & store" },
              { icon: "psychology", label: "AI Engine", sublabel: "Analyze & predict" },
              { icon: "smartphone", label: "Farmer App", sublabel: "View & act" },
            ].map((step, index) => (
              <div key={step.label} className="flex items-center gap-4 md:gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-amber-700">
                    <span className="material-symbols-outlined text-[28px]">{step.icon}</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold">{step.label}</p>
                    <p className="text-[10px] text-gray-400">{step.sublabel}</p>
                  </div>
                </div>
                {index < 4 && (
                  <span className="material-symbols-outlined text-primary text-[20px] hidden md:block">
                    arrow_forward
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* AI Features */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">AI-Powered Intelligence</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our machine learning models process sensor data and images to deliver actionable
              insights that protect colonies and maximize yields.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiFeatures.map((feature) => (
              <div
                key={feature.title}
                className="glass-card p-6 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-amber-700">
                  <span className="material-symbols-outlined text-[24px]">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QR Traceability */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 border border-primary/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">QR Code Traceability</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Every jar of honey gets a unique QR code linking to its complete digital journey.
                Consumers can scan to see the exact hive it came from, the farmer who produced it,
                sensor-verified quality data, and the full harvest timeline.
              </p>
              <ul className="space-y-3">
                {[
                  "Farmer profile and story",
                  "Hive location and IoT data",
                  "Quality grade and testing records",
                  "Harvest date and batch number",
                  "Sensor-verified weight reconciliation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      verified
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-48 h-48 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[64px] text-gray-300">
                qr_code_2
              </span>
              <p className="text-xs text-gray-400 mt-2">Sample QR Code</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Built With Modern Tech</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our platform is built on a robust, scalable technology stack designed for reliability
              and performance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Next.js", desc: "Frontend Framework", icon: "web" },
              { name: "Node.js", desc: "Backend API", icon: "dns" },
              { name: "PostgreSQL", desc: "Database", icon: "storage" },
              { name: "MQTT", desc: "IoT Protocol", icon: "cell_tower" },
              { name: "TensorFlow", desc: "AI/ML Engine", icon: "model_training" },
              { name: "Vercel", desc: "Hosting", icon: "cloud_upload" },
              { name: "Tailwind CSS", desc: "Styling", icon: "palette" },
              { name: "Recharts", desc: "Data Visualization", icon: "monitoring" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="glass-card p-4 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary text-[24px] mb-2 block">
                  {tech.icon}
                </span>
                <p className="font-bold text-sm">{tech.name}</p>
                <p className="text-[10px] text-gray-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#181611] text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Impressed by the Tech?</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              See how our technology translates into real-world impact for farmers and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/how-it-works"
                className="h-14 px-8 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-full shadow-glow transition-all flex items-center justify-center gap-2 text-lg"
              >
                How It Works
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="h-14 px-8 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 transition-all flex items-center justify-center gap-2 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
