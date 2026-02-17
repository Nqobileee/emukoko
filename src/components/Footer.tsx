"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative z-10 bg-[#181611] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">Stay in the Hive</h3>
            <p className="text-sm text-gray-400">
              Get the latest updates on smart beekeeping, community stories, and product launches.
            </p>
          </div>
          <form onSubmit={handleNewsletter} className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 md:w-64 h-12 px-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="h-12 px-6 bg-primary hover:bg-amber-500 text-[#181611] font-bold rounded-full transition-colors text-sm whitespace-nowrap"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-primary flex items-center justify-center p-1 bg-white/10 rounded-full">
                <span className="material-symbols-outlined text-[24px]">hexagon</span>
              </div>
              <span className="font-bold text-lg">Emukoko</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Revolutionizing beekeeping with smart IoT sensors, AI diagnostics, and community-driven growth.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Platform
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/technology", label: "Technology" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {["Learning Chartboard", "Marketplace", "Farmer Dashboard", "API Docs"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm text-gray-500 cursor-default">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                  mail
                </span>
                info@emukoko.org
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                  location_on
                </span>
                Zimbabwe
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {[
                { icon: "public", label: "Website" },
                { icon: "group", label: "Community" },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-gray-400">
                    {social.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Emukoko Innovations. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
