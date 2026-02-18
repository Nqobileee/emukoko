"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { notifications } from "@/lib/mock-data";

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: "dashboard" },
  { href: "/dashboard/hives", label: "My Hives", icon: "hive" },
  { href: "/dashboard/diagnostics", label: "AI Diagnostics", icon: "psychology" },
  { href: "/dashboard/notifications", label: "Notifications", icon: "notifications" },
  { href: "/dashboard/market-demand", label: "Market Demand", icon: "trending_up" },
  { href: "/dashboard/profile", label: "My Profile", icon: "person" },
];

const quickLinks = [
  { href: "/marketplace", label: "Marketplace", icon: "storefront" },
  { href: "/learning", label: "Learning Chartboard", icon: "school" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Redirect to login if not authenticated
  if (!isLoading && !isAuthenticated) {
    router.push("/auth/login");
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light">
        <div className="text-center">
          <span className="material-symbols-outlined text-[48px] text-primary animate-spin">progress_activity</span>
          <p className="text-sm text-gray-500 mt-4">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
          >
            <span className="material-symbols-outlined">{sidebarOpen ? "close" : "menu"}</span>
          </button>
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="text-primary flex items-center justify-center p-1 bg-primary/10 rounded-full">
              <span className="material-symbols-outlined text-[20px]">hexagon</span>
            </div>
            <span className="font-bold text-base tracking-tight hidden sm:block">Emukoko</span>
            <span className="text-xs text-gray-400 hidden sm:block">/ Dashboard</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/dashboard/notifications" className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors">
            <span className="material-symbols-outlined text-gray-600">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </Link>
          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors" title="Back to site">
            <span className="material-symbols-outlined text-gray-600">home</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 ml-2 pl-2 border-l border-gray-200">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px] text-amber-700">person</span>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold leading-tight">{user?.name}</p>
              <p className="text-[10px] text-gray-400">{user?.role}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full p-4">
          <nav className="flex-1 space-y-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3 mb-2">Dashboard</p>
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/15 text-amber-800 font-bold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                {link.label}
                {link.icon === "notifications" && unreadCount > 0 && (
                  <span className="ml-auto w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3 mb-2">Quick Links</p>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                  {link.label}
                  <span className="material-symbols-outlined text-[14px] ml-auto text-gray-300">open_in_new</span>
                </Link>
              ))}
            </div>
          </nav>

          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() => { logout(); router.push("/"); }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors w-full"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <main className="pt-16 lg:pl-64 min-h-screen">
        <div className="p-4 lg:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
