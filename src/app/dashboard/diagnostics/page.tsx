"use client";

import { useState } from "react";
import Link from "next/link";
import { alerts } from "@/lib/mock-data";

export default function DiagnosticsPage() {
  const [filter, setFilter] = useState<"all" | "pest" | "disease" | "environment" | "maintenance" | "swarm">("all");

  const filtered = filter === "all" ? alerts : alerts.filter((a) => a.type === filter);

  const severityIcon = {
    critical: { icon: "error", color: "text-red-600 bg-red-100" },
    high: { icon: "warning", color: "text-orange-600 bg-orange-100" },
    medium: { icon: "info", color: "text-yellow-600 bg-yellow-100" },
    low: { icon: "check_circle", color: "text-blue-600 bg-blue-100" },
  };

  const typeIcon = {
    pest: "bug_report",
    disease: "coronavirus",
    environment: "thermostat",
    maintenance: "build",
    swarm: "swipe_right_alt",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">AI Diagnostics</h1>
        <p className="text-sm text-gray-500 mt-1">
          AI-powered pest detection, disease alerts, and maintenance recommendations across your hive fleet.
        </p>
      </div>

      {/* AI Status Banner */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-5 border border-purple-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px] text-purple-600">psychology</span>
          </div>
          <div>
            <h3 className="font-bold text-sm">AI Diagnostics Engine</h3>
            <p className="text-[10px] text-gray-500">Analyzing sensor data and camera images across all hives</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 px-2 py-1 bg-green-100 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-green-700">Active</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white/80 rounded-xl p-3 text-center">
            <p className="text-lg font-bold">{alerts.length}</p>
            <p className="text-[10px] text-gray-500">Total Alerts</p>
          </div>
          <div className="bg-white/80 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-red-600">{alerts.filter((a) => a.severity === "critical").length}</p>
            <p className="text-[10px] text-gray-500">Critical</p>
          </div>
          <div className="bg-white/80 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-green-600">{alerts.filter((a) => a.resolvedAt).length}</p>
            <p className="text-[10px] text-gray-500">Resolved</p>
          </div>
          <div className="bg-white/80 rounded-xl p-3 text-center">
            <p className="text-lg font-bold">92%</p>
            <p className="text-[10px] text-gray-500">Detection Accuracy</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {[
          { key: "all", label: "All Alerts" },
          { key: "pest", label: "Pest" },
          { key: "disease", label: "Disease" },
          { key: "environment", label: "Environment" },
          { key: "maintenance", label: "Maintenance" },
          { key: "swarm", label: "Swarm" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key as typeof filter)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              filter === tab.key
                ? "bg-primary text-[#181611]"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {tab.label}
            {tab.key !== "all" && (
              <span className="ml-1.5 text-[10px] opacity-70">
                ({alerts.filter((a) => a.type === tab.key).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Alert Cards */}
      <div className="space-y-4">
        {filtered.map((alert) => (
          <div
            key={alert.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="p-5">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${severityIcon[alert.severity].color}`}>
                  <span className="material-symbols-outlined text-[20px]">{severityIcon[alert.severity].icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold">{alert.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">{typeIcon[alert.type]}</span>
                          {alert.type}
                        </span>
                        <span>·</span>
                        <Link href={`/dashboard/hives/${alert.hiveId}`} className="text-primary hover:underline">
                          {alert.hiveName}
                        </Link>
                        <span>·</span>
                        <span>{new Date(alert.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {alert.resolvedAt && (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-bold">
                          <span className="material-symbols-outlined text-[12px]">check_circle</span>
                          Resolved
                        </span>
                      )}
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        alert.severity === "critical" ? "bg-red-100 text-red-700" :
                        alert.severity === "high" ? "bg-orange-100 text-orange-700" :
                        alert.severity === "medium" ? "bg-yellow-100 text-yellow-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        {alert.severity.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-3">{alert.description}</p>

                  {alert.imageUrl && (
                    <div className="mt-3 w-full max-w-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={alert.imageUrl}
                        alt={`AI analysis: ${alert.title}`}
                        className="w-full h-40 object-cover rounded-xl border border-gray-100"
                      />
                      <p className="text-[10px] text-gray-400 mt-1">AI-generated analysis image</p>
                    </div>
                  )}

                  <div className="mt-3 p-3 bg-blue-50 border border-blue-100 rounded-xl">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-[14px] text-blue-600">lightbulb</span>
                      <span className="text-xs font-bold text-blue-800">AI Recommendation</span>
                    </div>
                    <p className="text-xs text-blue-700">{alert.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-[48px] text-gray-300">check_circle</span>
            <p className="text-sm text-gray-500 mt-2">No alerts for this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
