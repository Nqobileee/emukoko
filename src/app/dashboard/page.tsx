"use client";

import Link from "next/link";
import { hives, alerts, harvests, notifications } from "@/lib/mock-data";

export default function DashboardPage() {
  const healthyHives = hives.filter((h) => h.status === "healthy").length;
  const warningHives = hives.filter((h) => h.status === "warning").length;
  const criticalHives = hives.filter((h) => h.status === "critical").length;

  const totalYield = harvests
    .filter((h) => h.status === "completed")
    .reduce((sum, h) => sum + h.weightDelivered, 0);

  const totalEarnings = harvests
    .filter((h) => h.status === "completed")
    .reduce((sum, h) => sum + h.payment, 0);

  const activeAlerts = alerts.filter((a) => !a.resolvedAt);
  const unreadNotifs = notifications.filter((n) => !n.read);

  const statusColor = {
    healthy: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    critical: "bg-red-100 text-red-700",
    offline: "bg-gray-100 text-gray-500",
  };

  const statusDot = {
    healthy: "bg-green-500",
    warning: "bg-yellow-500",
    critical: "bg-red-500",
    offline: "bg-gray-400",
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome back! Here&apos;s a summary of your Smart Hive farm.</p>
      </div>

      {/* Alert Banner */}
      {activeAlerts.some((a) => a.severity === "critical") && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
          <span className="material-symbols-outlined text-red-600 mt-0.5">warning</span>
          <div className="flex-1">
            <h3 className="font-bold text-sm text-red-800">Critical Alert Active</h3>
            <p className="text-xs text-red-600 mt-0.5">
              {activeAlerts.find((a) => a.severity === "critical")?.title} — Immediate attention required.
            </p>
          </div>
          <Link href="/dashboard/diagnostics" className="text-xs font-bold text-red-700 hover:underline whitespace-nowrap">
            View Details →
          </Link>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-amber-700">hive</span>
            </div>
            <span className="text-xs font-medium text-gray-500">Active Hives</span>
          </div>
          <p className="text-3xl font-bold">{hives.length}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-green-600 font-medium">{healthyHives} healthy</span>
            {warningHives > 0 && <span className="text-xs text-yellow-600">· {warningHives} warning</span>}
            {criticalHives > 0 && <span className="text-xs text-red-600">· {criticalHives} critical</span>}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-green-600">monitor_heart</span>
            </div>
            <span className="text-xs font-medium text-gray-500">Health Status</span>
          </div>
          <p className="text-3xl font-bold">{Math.round((healthyHives / hives.length) * 100)}%</p>
          <p className="text-xs text-gray-400 mt-2">Overall fleet health</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-amber-600">scale</span>
            </div>
            <span className="text-xs font-medium text-gray-500">Total Yield</span>
          </div>
          <p className="text-3xl font-bold">{totalYield.toFixed(1)} kg</p>
          <p className="text-xs text-gray-400 mt-2">From {harvests.filter((h) => h.status === "completed").length} harvests</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-emerald-600">payments</span>
            </div>
            <span className="text-xs font-medium text-gray-500">Earnings</span>
          </div>
          <p className="text-3xl font-bold">${totalEarnings.toFixed(0)}</p>
          <p className="text-xs text-gray-400 mt-2">Total revenue</p>
        </div>
      </div>

      {/* Hive Quick View + Recent Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hive Quick View */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between p-5 pb-0">
            <h2 className="font-bold text-base">My Hives</h2>
            <Link href="/dashboard/hives" className="text-xs text-primary font-medium hover:underline">View All →</Link>
          </div>
          <div className="p-5 space-y-3">
            {hives.map((hive) => (
              <Link
                key={hive.id}
                href={`/dashboard/hives/${hive.id}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className={`w-2.5 h-2.5 rounded-full ${statusDot[hive.status]}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{hive.name}</p>
                  <p className="text-[10px] text-gray-400">{hive.location}</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span title="Temperature">{hive.latestTemp}°C</span>
                  <span title="Humidity">{hive.latestHumidity}%</span>
                  <span title="Weight">{hive.latestWeight}kg</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusColor[hive.status]}`}>
                  {hive.status}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between p-5 pb-0">
            <h2 className="font-bold text-base">Recent Alerts</h2>
            <Link href="/dashboard/diagnostics" className="text-xs text-primary font-medium hover:underline">View All →</Link>
          </div>
          <div className="p-5 space-y-3">
            {alerts.slice(0, 4).map((alert) => {
              const severityStyle = {
                critical: "border-l-red-500 bg-red-50/50",
                high: "border-l-orange-500 bg-orange-50/50",
                medium: "border-l-yellow-500 bg-yellow-50/50",
                low: "border-l-blue-500 bg-blue-50/50",
              };
              return (
                <div key={alert.id} className={`p-3 rounded-xl border-l-4 ${severityStyle[alert.severity]}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium">{alert.title}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{alert.hiveName} · {new Date(alert.createdAt).toLocaleDateString()}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${
                      alert.severity === "critical" ? "bg-red-100 text-red-700" :
                      alert.severity === "high" ? "bg-orange-100 text-orange-700" :
                      alert.severity === "medium" ? "bg-yellow-100 text-yellow-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {alert.severity}
                    </span>
                  </div>
                  {alert.resolvedAt && (
                    <span className="inline-flex items-center gap-1 mt-2 text-[10px] text-green-600 font-medium">
                      <span className="material-symbols-outlined text-[12px]">check_circle</span>
                      Resolved
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between p-5 pb-0">
          <h2 className="font-bold text-base">Recent Notifications</h2>
          <Link href="/dashboard/notifications" className="text-xs text-primary font-medium hover:underline">View All →</Link>
        </div>
        <div className="p-5">
          <div className="divide-y divide-gray-50">
            {unreadNotifs.slice(0, 3).map((notif) => {
              const notifIcon = {
                alert: "warning",
                order: "shopping_cart",
                harvest: "agriculture",
                system: "info",
                learning: "school",
              };
              return (
                <Link
                  key={notif.id}
                  href={notif.link || "/dashboard/notifications"}
                  className="flex items-start gap-3 py-3 hover:bg-gray-50 rounded-lg px-2 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-amber-700">{notifIcon[notif.type]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{notif.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{notif.message}</p>
                  </div>
                  {!notif.read && <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
