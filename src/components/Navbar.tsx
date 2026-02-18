"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/technology", label: "Technology" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/learning", label: "Learning" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 px-5 py-3 flex items-center justify-between bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl shadow-glass transition-all duration-300">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-primary flex items-center justify-center p-1 bg-white/40 backdrop-blur-sm border border-white/20 rounded-full shadow-glow-sm">
            <span className="material-symbols-outlined text-[24px]">hexagon</span>
          </div>
          <span className="font-bold text-lg tracking-tight drop-shadow-sm text-[#181611]">
            Emukoko
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-primary/20 text-amber-800 font-bold"
                  : "text-[#181611]/70 hover:text-[#181611] hover:bg-white/40"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <Link
              href="/dashboard"
              className="ml-2 px-4 py-1.5 rounded-full text-sm font-bold bg-primary text-[#181611] hover:bg-[#dca615] transition-colors shadow-glow-sm"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/auth/login"
              className="ml-2 px-4 py-1.5 rounded-full text-sm font-bold bg-primary text-[#181611] hover:bg-[#dca615] transition-colors shadow-glow-sm"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-colors shadow-sm"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[#181611]">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-20 left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl p-4 flex flex-col gap-1 animate-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center gap-3 ${
                  pathname === link.href
                    ? "bg-primary/15 text-amber-800 font-bold"
                    : "text-[#181611]/70 hover:bg-primary/5 hover:text-[#181611]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 my-1" />
            {user ? (
              <Link
                href="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-bold bg-primary/15 text-amber-800 flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/login"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-bold bg-primary/15 text-amber-800 flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-[20px]">login</span>
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
