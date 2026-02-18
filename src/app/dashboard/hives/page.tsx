"use client";

import Link from "next/link";
import { hives } from "@/lib/mock-data";

export default function HivesListPage() {
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

  const loanBadge = {
    active: "bg-blue-100 text-blue-700",
    paid: "bg-green-100 text-green-700",
    pending: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Hives</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor and manage your Smart Hive fleet</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1"><span className={`w-2 h-2 rounded-full ${statusDot.healthy}`} /> Healthy</span>
          <span className="flex items-center gap-1"><span className={`w-2 h-2 rounded-full ${statusDot.warning}`} /> Warning</span>
          <span className="flex items-center gap-1"><span className={`w-2 h-2 rounded-full ${statusDot.critical}`} /> Critical</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {hives.map((hive) => (
          <Link
            key={hive.id}
            href={`/dashboard/hives/${hive.id}`}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-primary/20 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${statusDot[hive.status]} ${hive.status !== "offline" ? "animate-pulse" : ""}`} />
                  <h3 className="font-bold text-base">{hive.name}</h3>
                </div>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  {hive.location}
                </p>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusColor[hive.status]}`}>
                {hive.status}
              </span>
            </div>

            {/* Sensor readings grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-orange-50/50 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-[14px] text-orange-500">device_thermostat</span>
                  <span className="text-[10px] text-gray-400">Temperature</span>
                </div>
                <p className="text-lg font-bold">{hive.latestTemp}°C</p>
              </div>
              <div className="bg-blue-50/50 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-[14px] text-blue-500">water_drop</span>
                  <span className="text-[10px] text-gray-400">Humidity</span>
                </div>
                <p className="text-lg font-bold">{hive.latestHumidity}%</p>
              </div>
              <div className="bg-amber-50/50 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-[14px] text-amber-600">scale</span>
                  <span className="text-[10px] text-gray-400">Weight</span>
                </div>
                <p className="text-lg font-bold">{hive.latestWeight} kg</p>
              </div>
              <div className="bg-purple-50/50 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-[14px] text-purple-500">vibration</span>
                  <span className="text-[10px] text-gray-400">Vibration</span>
                </div>
                <p className="text-lg font-bold">{hive.latestVibration}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${loanBadge[hive.loanStatus]}`}>
                Loan: {hive.loanStatus}
              </span>
              <span>Updated {timeAgo(hive.lastReading)}</span>
              <span className="material-symbols-outlined text-[16px] text-gray-300 group-hover:text-primary transition-colors">
                arrow_forward
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function timeAgo(date: string): string {
  const now = new Date("2026-02-18T10:00:00Z");
  const diff = now.getTime() - new Date(date).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}
