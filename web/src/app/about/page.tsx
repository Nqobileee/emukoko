import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Lightbulb, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Emukoko Innovations — our mission to revolutionize beekeeping, our vision for rural communities, and the team driving change.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background blurs */}
      <div className="fixed top-[20%] right-[-5%] w-[40vh] h-[40vh] bg-primary/8 rounded-full blur-[80px] pointer-events-none z-0" />

      {/* Page header */}
      <section className="relative z-10 pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Emukoko
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Where Technology Meets Community Growth
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Emukoko Innovations was founded on a simple belief: that the right
              technology, placed in the right hands, can transform livelihoods.
              We&apos;re building the tools that make modern beekeeping
              accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface p-8 rounded-2xl border border-border-light shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                To empower rural beekeeping communities with affordable,
                intelligent technology that increases productivity, ensures
                product quality, and creates direct market connections — lifting
                incomes while preserving biodiversity.
              </p>
            </div>

            <div className="bg-surface p-8 rounded-2xl border border-border-light shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                A future where every beekeeper in Zimbabwe — and eventually
                across Africa — has access to the same caliber of monitoring,
                diagnostics, and market tools as the most advanced operations in
                the world.
              </p>
            </div>

            <div className="bg-surface p-8 rounded-2xl border border-border-light shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Our Values
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Transparency in every transaction. Sustainability in every
                decision. Community at the center of every innovation. We
                believe technology should serve people, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="relative z-10 py-16 sm:py-24 bg-surface-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Story Behind Emukoko
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  In many parts of Zimbabwe, beekeeping is a centuries-old
                  tradition passed down through generations. It provides
                  supplementary income for thousands of rural families, but the
                  methods have remained largely unchanged — labour-intensive,
                  unpredictable, and disconnected from modern markets.
                </p>
                <p>
                  Emukoko Innovations was born from conversations with these
                  beekeepers. We heard the same challenges over and over: no way
                  to know what&apos;s happening inside the hive without opening
                  it. No warning when pests or diseases take hold. No direct
                  channel to buyers who value pure, traceable honey.
                </p>
                <p>
                  We set out to solve these problems — not with expensive,
                  imported solutions, but with purpose-built technology designed
                  for the realities of rural Africa: low bandwidth, limited
                  power, and the need for simplicity.
                </p>
                <p>
                  The result is the Smart Hive platform: IoT sensors that
                  monitor colony health in real time, AI models that detect
                  threats early, and a digital marketplace that connects farmers
                  directly with consumers through QR-verified traceability.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface p-6 rounded-2xl border border-border-light text-center">
                  <p className="text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-xs text-text-light font-medium">
                    Target Farmers
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-2xl border border-border-light text-center">
                  <p className="text-3xl font-bold text-primary mb-1">5</p>
                  <p className="text-xs text-text-light font-medium">
                    Provinces Reached
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-2xl border border-border-light text-center">
                  <p className="text-3xl font-bold text-primary mb-1">34%</p>
                  <p className="text-xs text-text-light font-medium">
                    Avg. Yield Increase
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-2xl border border-border-light text-center">
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-xs text-text-light font-medium">
                    Traceable Products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Team
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              A small, dedicated team building at the intersection of
              agriculture and technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <TeamCard
              name="Princess"
              role="Frontend Developer & UI/UX Designer"
              description="Leads the user experience, responsive design, and consumer-facing interfaces. Passionate about making technology intuitive for rural users."
            />
            <TeamCard
              name="Edith"
              role="Backend Developer & Systems Architect"
              description="Architects the API layer, database systems, and IoT integration pipelines. Focused on building reliable, low-bandwidth-friendly infrastructure."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl border border-border-light p-10 sm:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Interested in partnering with us?
            </h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto">
              Whether you&apos;re a beekeeper, investor, NGO, or technology
              partner — we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-13 px-7 rounded-full bg-primary hover:bg-primary-dark text-foreground font-semibold text-base transition-colors gap-2"
            >
              Get in Touch
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamCard({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) {
  return (
    <div className="bg-surface p-7 rounded-2xl border border-border-light shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">{name}</h3>
          <p className="text-xs text-primary font-medium">{role}</p>
        </div>
      </div>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
