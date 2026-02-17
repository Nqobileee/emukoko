import Link from "next/link";
import { Hexagon, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Technology", href: "/technology" },
  ],
  resources: [
    { label: "Contact Us", href: "/contact" },
    { label: "Learning Hub", href: "#" },
    { label: "Marketplace", href: "#" },
    { label: "Partner With Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#181611] text-white/80 mt-0">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-xl font-bold text-white mb-2">
                Stay in the loop
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Get updates on our beekeeping technology, community stories, and
                marketplace launches. No spam — just the good stuff.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-72 h-12 px-5 rounded-full bg-white/[0.08] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-full bg-primary text-[#181611] text-sm font-semibold hover:bg-primary-light transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/20 text-primary">
                <Hexagon className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Emukoko
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Where technology meets community growth. Empowering beekeepers
              with smart IoT monitoring and AI-powered diagnostics.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 shrink-0 text-primary/60" />
                <span>Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="w-4 h-4 shrink-0 text-primary/60" />
                <a
                  href="mailto:info@emukoko.org"
                  className="hover:text-white transition-colors"
                >
                  info@emukoko.org
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="w-4 h-4 shrink-0 text-primary/60" />
                <span>+263 77 000 0000</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Quick Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.12] transition-colors text-xs font-semibold"
                    aria-label={social}
                  >
                    {social[0]}
                  </a>
                )
              )}
            </div>
            <p className="text-xs text-white/30 leading-relaxed">
              We believe in building a sustainable future for agriculture
              through innovation, community empowerment, and transparent
              technology.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Emukoko Innovations. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
