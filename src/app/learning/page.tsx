"use client";

import { useState } from "react";
import Link from "next/link";
import { articles, type Article } from "@/lib/mock-data";

const categories = [
  { key: "all", label: "All", icon: "apps" },
  { key: "beginner", label: "Beginner", icon: "school" },
  { key: "advanced", label: "Advanced", icon: "psychology" },
  { key: "pest-management", label: "Pest Management", icon: "bug_report" },
  { key: "harvesting", label: "Harvesting", icon: "agriculture" },
  { key: "equipment", label: "Equipment", icon: "build" },
  { key: "seasonal", label: "Seasonal", icon: "calendar_month" },
];

const categoryColor: Record<string, string> = {
  beginner: "bg-blue-100 text-blue-700",
  advanced: "bg-purple-100 text-purple-700",
  "pest-management": "bg-red-100 text-red-700",
  harvesting: "bg-amber-100 text-amber-800",
  equipment: "bg-gray-100 text-gray-700",
  seasonal: "bg-green-100 text-green-700",
};

export default function LearningChartboard() {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = articles.filter((a: Article) => {
    const matchCategory = active === "all" || a.category === active;
    const matchSearch =
      !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      <div className="fixed top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />

      <main className="relative z-10 pt-24 pb-16 px-4 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <Link href="/dashboard" className="text-xs text-primary hover:underline mb-2 inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_back</span> Dashboard
            </Link>
            <h1 className="text-3xl font-bold">Learning Chartboard</h1>
            <p className="text-sm text-gray-500 mt-1">Knowledge base &amp; guides to help you thrive</p>
          </div>
          <div className="relative w-full sm:w-72">
            <span className="material-symbols-outlined text-[18px] text-gray-400 absolute left-3 top-1/2 -translate-y-1/2">search</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full h-10 pl-9 pr-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
            />
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`h-9 px-4 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
                active === cat.key
                  ? "bg-primary text-[#181611]"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Articles", value: articles.length, icon: "article" },
            { label: "Categories", value: 6, icon: "category" },
            { label: "Expert Authors", value: 3, icon: "person" },
            { label: "Avg Read", value: "8 min", icon: "schedule" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-3 border border-gray-100 flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px] text-primary">{s.icon}</span>
              <div>
                <p className="text-lg font-bold leading-none">{s.value}</p>
                <p className="text-[10px] text-gray-400">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-[48px] text-gray-200">search_off</span>
            <p className="text-sm text-gray-400 mt-2">No articles found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Card header */}
                <div className="h-28 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-[48px] text-primary/30">{article.icon}</span>
                  <span
                    className={`absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      categoryColor[article.category] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {article.category.replace("-", " ")}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-sm mb-1 line-clamp-2">{article.title}</h3>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{article.excerpt}</p>

                  {expanded === article.id && (
                    <div className="text-xs text-gray-600 mb-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      {article.content}
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-[10px] text-gray-400">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {article.readTime}
                      <span className="mx-1">·</span>
                      <span>{article.author}</span>
                    </div>
                    <button
                      onClick={() => setExpanded(expanded === article.id ? null : article.id)}
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      {expanded === article.id ? "Less" : "Read"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Demo Note */}
        <div className="mt-10 p-4 bg-primary/5 border border-primary/10 rounded-xl text-center">
          <p className="text-xs text-gray-500">
            <strong>Demo:</strong> In production, articles will be fetched from the CMS, and farmers can bookmark &amp; track their learning progress.
          </p>
        </div>
      </main>
    </div>
  );
}
