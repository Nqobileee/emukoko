"use client";

import { use } from "react";
import Link from "next/link";
import { hives, sensorDataByHive, alerts } from "@/lib/mock-data";
import SensorCharts from "./SensorCharts";

export default function HiveDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const hive = hives.find((h) => h.id === id);
  const sensorData = sensorDataByHive[id] || [];
  const hiveAlerts = alerts.filter((a) => a.hiveId === id);

  if (!hive) {
    return (
      <div className="text-center py-20">
        <span className="material-symbols-outlined text-[48px] text-gray-300">error</span>
        <h2 className="text-xl font-bold mt-4">Hive Not Found</h2>
        <Link href="/dashboard/hives" className="text-primary text-sm mt-2 hover:underline">← Back to hives</Link>
      </div>
    );
  }

  const statusColor = {
    healthy: "bg-green-100 text-green-700 border-green-200",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
    critical: "bg-red-100 text-red-700 border-red-200",
    offline: "bg-gray-100 text-gray-500 border-gray-200",
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/dashboard/hives" className="hover:text-primary">Hives</Link>
        <span>›</span>
        <span className="font-medium text-gray-900">{hive.name}</span>
      </div>

      {/* Hive Header */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold">{hive.name}</h1>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColor[hive.status]}`}>
                {hive.status.toUpperCase()}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                {hive.location}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                Installed {new Date(hive.installedAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                ID: {hive.id}
              </span>
            </div>
          </div>
        </div>

        {/* Current Readings */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 border border-orange-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[18px] text-orange-500">device_thermostat</span>
              <span className="text-xs font-medium text-gray-500">Internal Temp</span>
            </div>
            <p className="text-2xl font-bold">{hive.latestTemp}°C</p>
            <div className="h-1.5 w-full bg-gray-100 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                style={{ width: `${Math.min(100, ((hive.latestTemp - 25) / 15) * 100)}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Optimal: 34–36°C</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[18px] text-blue-500">water_drop</span>
              <span className="text-xs font-medium text-gray-500">Humidity</span>
            </div>
            <p className="text-2xl font-bold">{hive.latestHumidity}%</p>
            <div className="h-1.5 w-full bg-gray-100 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"
                style={{ width: `${hive.latestHumidity}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Optimal: 50–65%</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-4 border border-amber-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[18px] text-amber-600">scale</span>
              <span className="text-xs font-medium text-gray-500">Colony Weight</span>
            </div>
            <p className="text-2xl font-bold">{hive.latestWeight} kg</p>
            <div className="h-1.5 w-full bg-gray-100 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                style={{ width: `${Math.min(100, (hive.latestWeight / 30) * 100)}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Target: 20–30 kg</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[18px] text-purple-500">vibration</span>
              <span className="text-xs font-medium text-gray-500">Vibration</span>
            </div>
            <p className="text-2xl font-bold">{hive.latestVibration}</p>
            <div className="h-1.5 w-full bg-gray-100 rounded-full mt-2 overflow-hidden">
              <div
                className={`h-full rounded-full ${hive.latestVibration > 1 ? "bg-gradient-to-r from-red-400 to-red-600" : "bg-gradient-to-r from-purple-300 to-purple-500"}`}
                style={{ width: `${Math.min(100, (hive.latestVibration / 2) * 100)}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Normal: &lt; 0.5</p>
          </div>
        </div>
      </div>

      {/* Historical Charts */}
      <SensorCharts sensorData={sensorData} />

      {/* Hive Alerts */}
      {hiveAlerts.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-bold text-base mb-4">Alerts for this Hive</h2>
          <div className="space-y-3">
            {hiveAlerts.map((alert) => {
              const severityStyle = {
                critical: "border-l-red-500 bg-red-50/50",
                high: "border-l-orange-500 bg-orange-50/50",
                medium: "border-l-yellow-500 bg-yellow-50/50",
                low: "border-l-blue-500 bg-blue-50/50",
              };
              return (
                <div key={alert.id} className={`p-4 rounded-xl border-l-4 ${severityStyle[alert.severity]}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-sm">{alert.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.description}</p>
                      <div className="mt-2 p-2 bg-white/80 rounded-lg border border-gray-100">
                        <p className="text-xs text-gray-600"><strong>Recommendation:</strong> {alert.recommendation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-[10px] text-gray-400">
                    <span>{new Date(alert.createdAt).toLocaleString()}</span>
                    {alert.resolvedAt && (
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <span className="material-symbols-outlined text-[12px]">check_circle</span>
                        Resolved {new Date(alert.resolvedAt).toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
