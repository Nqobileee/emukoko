"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { marketDemandData, demandByRegion } from "@/lib/mock-data";

export default function MarketDemandPage() {
  const [chartType, setChartType] = useState<"trend" | "region">("trend");

  // Compute summary stats
  const latestMonth = marketDemandData[marketDemandData.length - 1];
  const prevMonth = marketDemandData[marketDemandData.length - 2];
  const priceChange = latestMonth.price - prevMonth.price;
  const demandChange = latestMonth.demand - prevMonth.demand;
  const totalDemand = demandByRegion.reduce((s, r) => s + r.demand, 0);
  const avgPrice = (demandByRegion.reduce((s, r) => s + r.avgPrice, 0) / demandByRegion.length).toFixed(2);
  const topRegion = demandByRegion.reduce((prev, cur) => (cur.demand > prev.demand ? cur : prev));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Market Demand</h1>
        <p className="text-sm text-gray-500 mt-1">Price trends, demand patterns &amp; regional insights</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total Demand (units/mo)",
            value: totalDemand.toLocaleString(),
            icon: "trending_up",
            sub: `${topRegion.region} leads`,
          },
          {
            label: "Current Price",
            value: `$${latestMonth.price.toFixed(2)}/kg`,
            icon: "attach_money",
            sub: `${priceChange >= 0 ? "+" : ""}$${priceChange.toFixed(2)} vs last month`,
            color: priceChange >= 0 ? "text-green-600" : "text-red-500",
          },
          {
            label: "Avg Regional Price",
            value: `$${avgPrice}/kg`,
            icon: "equalizer",
            sub: "Across 8 regions",
          },
          {
            label: "Demand Trend",
            value: `${demandChange >= 0 ? "+" : ""}${demandChange}`,
            icon: demandChange >= 0 ? "arrow_upward" : "arrow_downward",
            sub: "vs previous month",
            color: demandChange >= 0 ? "text-green-600" : "text-red-500",
          },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[20px] text-primary">{s.icon}</span>
              <span className="text-[10px] text-gray-400 font-medium">{s.label}</span>
            </div>
            <p className="text-xl font-bold">{s.value}</p>
            <p className={`text-[10px] mt-1 ${s.color || "text-gray-400"}`}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart Type Toggle */}
      <div className="flex items-center gap-2">
        {[
          { key: "trend" as const, label: "Price & Demand Trends", icon: "show_chart" },
          { key: "region" as const, label: "Regional Demand", icon: "map" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setChartType(tab.key)}
            className={`h-9 px-4 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
              chartType === tab.key
                ? "bg-primary text-[#181611]"
                : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40"
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Charts */}
      {chartType === "trend" ? (
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-base mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary">show_chart</span>
            12-Month Demand, Supply &amp; Price
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketDemandData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} angle={-30} textAnchor="end" height={50} />
                <YAxis yAxisId="left" tick={{ fontSize: 10 }} label={{ value: "Units", angle: -90, position: "insideLeft", style: { fontSize: 10, fill: "#999" } }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10 }} label={{ value: "$/kg", angle: 90, position: "insideRight", style: { fontSize: 10, fill: "#999" } }} />
                <Tooltip contentStyle={{ fontSize: 11, borderRadius: 12, border: "1px solid #eee" }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Line yAxisId="left" type="monotone" dataKey="demand" stroke="#eebd2b" strokeWidth={2} name="Demand" dot={{ r: 3 }} />
                <Line yAxisId="left" type="monotone" dataKey="supply" stroke="#94a3b8" strokeWidth={2} name="Supply" dot={{ r: 3 }} strokeDasharray="5 5" />
                <Line yAxisId="right" type="monotone" dataKey="price" stroke="#22c55e" strokeWidth={2} name="Price ($/kg)" dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 p-3 bg-primary/5 border border-primary/10 rounded-xl">
            <p className="text-[10px] text-gray-500">
              <strong>Insight:</strong> Demand peaks during Oct–Dec (holiday season). Supply gaps create higher pricing opportunities.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-base mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary">map</span>
            Demand by Region
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demandByRegion} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis dataKey="region" type="category" tick={{ fontSize: 10 }} width={90} />
                <Tooltip contentStyle={{ fontSize: 11, borderRadius: 12, border: "1px solid #eee" }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="demand" fill="#eebd2b" name="Demand (units)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Region table */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 text-left">
                  <th className="py-2 font-medium">Region</th>
                  <th className="py-2 font-medium text-right">Demand</th>
                  <th className="py-2 font-medium text-right">Avg Price</th>
                  <th className="py-2 font-medium text-right">Revenue Potential</th>
                </tr>
              </thead>
              <tbody>
                {demandByRegion
                  .sort((a, b) => b.demand - a.demand)
                  .map((r) => (
                    <tr key={r.region} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-2 font-medium">{r.region}</td>
                      <td className="py-2 text-right">{r.demand}</td>
                      <td className="py-2 text-right">${r.avgPrice.toFixed(2)}</td>
                      <td className="py-2 text-right font-semibold">${(r.demand * r.avgPrice).toLocaleString()}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Quick Tips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            icon: "lightbulb",
            title: "Best Selling Season",
            desc: "Target October–December when demand peaks 30% above average and prices reach their highest.",
          },
          {
            icon: "location_on",
            title: "Top Market",
            desc: `${topRegion.region} has the highest demand at ${topRegion.demand} units/month with $${topRegion.avgPrice.toFixed(2)}/kg avg price.`,
          },
          {
            icon: "trending_up",
            title: "Price Opportunity",
            desc: "Supply consistently lags demand — quality producers can command premium prices year-round.",
          },
        ].map((tip) => (
          <div key={tip.title} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <span className="material-symbols-outlined text-[24px] text-primary mb-2">{tip.icon}</span>
            <h3 className="font-bold text-sm mb-1">{tip.title}</h3>
            <p className="text-[10px] text-gray-500">{tip.desc}</p>
          </div>
        ))}
      </div>

      {/* Demo Note */}
      <div className="p-3 bg-primary/5 border border-primary/10 rounded-xl text-center">
        <p className="text-[10px] text-gray-500">
          <strong>Demo:</strong> In production, market demand data is sourced from real marketplace transactions and regional surveys.
        </p>
      </div>

      <div className="text-center">
        <Link href="/marketplace" className="text-xs text-primary hover:underline">
          Visit Marketplace →
        </Link>
      </div>
    </div>
  );
}
