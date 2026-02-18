"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import type { SensorReading } from "@/lib/mock-data";

type TimeRange = "1m" | "3m" | "6m" | "12m";

interface Props {
  sensorData: SensorReading[];
}

export default function SensorCharts({ sensorData }: Props) {
  const [timeRange, setTimeRange] = useState<TimeRange>("3m");

  const now = new Date("2026-02-18T10:00:00Z");
  const rangeMonths = { "1m": 1, "3m": 3, "6m": 6, "12m": 12 };
  const cutoff = new Date(now);
  cutoff.setMonth(cutoff.getMonth() - rangeMonths[timeRange]);

  const filtered = sensorData.filter((d) => new Date(d.timestamp) >= cutoff);

  const chartData = filtered.map((d) => ({
    ...d,
    date: new Date(d.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
  }));

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-base">Historical Sensor Data</h2>
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
          {(["1m", "3m", "6m", "12m"] as TimeRange[]).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                timeRange === range
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Temperature Chart */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-[18px] text-orange-500">device_thermostat</span>
          <h3 className="font-bold text-sm">Temperature (°C)</h3>
          <div className="flex items-center gap-3 ml-auto text-[10px]">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500" /> Internal</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-300" /> External</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" tick={{ fontSize: 10 }} stroke="#ccc" />
            <YAxis tick={{ fontSize: 10 }} stroke="#ccc" domain={["auto", "auto"]} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #eee" }} />
            <Line type="monotone" dataKey="tempInternal" stroke="#f97316" strokeWidth={2} dot={false} name="Internal" />
            <Line type="monotone" dataKey="tempExternal" stroke="#fdba74" strokeWidth={1.5} dot={false} name="External" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Humidity Chart */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-[18px] text-blue-500">water_drop</span>
          <h3 className="font-bold text-sm">Humidity (%)</h3>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" tick={{ fontSize: 10 }} stroke="#ccc" />
            <YAxis tick={{ fontSize: 10 }} stroke="#ccc" domain={[30, 80]} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #eee" }} />
            <Area type="monotone" dataKey="humidity" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} strokeWidth={2} name="Humidity" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Weight Chart */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-[18px] text-amber-600">scale</span>
          <h3 className="font-bold text-sm">Colony Weight (kg)</h3>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" tick={{ fontSize: 10 }} stroke="#ccc" />
            <YAxis tick={{ fontSize: 10 }} stroke="#ccc" domain={["auto", "auto"]} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #eee" }} />
            <Area type="monotone" dataKey="weight" stroke="#d97706" fill="#d97706" fillOpacity={0.1} strokeWidth={2} name="Weight" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Vibration Chart */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-[18px] text-purple-500">vibration</span>
          <h3 className="font-bold text-sm">Vibration Level</h3>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" tick={{ fontSize: 10 }} stroke="#ccc" />
            <YAxis tick={{ fontSize: 10 }} stroke="#ccc" domain={[0, 2]} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #eee" }} />
            <Line type="monotone" dataKey="vibration" stroke="#8b5cf6" strokeWidth={2} dot={false} name="Vibration" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
