"use client";

import { useState } from "react";
import Link from "next/link";
import { notifications as initialNotifications } from "@/lib/mock-data";

export default function NotificationsPage() {
  const [notifs, setNotifs] = useState(initialNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const displayed = filter === "unread" ? notifs.filter((n) => !n.read) : notifs;
  const unreadCount = notifs.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifs((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const notifIcon: Record<string, string> = {
    alert: "warning",
    order: "shopping_cart",
    harvest: "agriculture",
    system: "info",
    learning: "school",
  };

  const notifColor: Record<string, string> = {
    alert: "bg-red-100 text-red-600",
    order: "bg-green-100 text-green-600",
    harvest: "bg-amber-100 text-amber-600",
    system: "bg-blue-100 text-blue-600",
    learning: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-sm text-gray-500 mt-1">{unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}</p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px]">done_all</span>
            Mark all read
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
            filter === "all" ? "bg-primary text-[#181611]" : "bg-white border border-gray-200 text-gray-600"
          }`}
        >
          All ({notifs.length})
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
            filter === "unread" ? "bg-primary text-[#181611]" : "bg-white border border-gray-200 text-gray-600"
          }`}
        >
          Unread ({unreadCount})
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-2">
        {displayed.map((notif) => (
          <div
            key={notif.id}
            className={`bg-white rounded-xl border shadow-sm p-4 flex items-start gap-3 transition-colors ${
              !notif.read ? "border-primary/20 bg-primary/5" : "border-gray-100"
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${notifColor[notif.type]}`}>
              <span className="material-symbols-outlined text-[20px]">{notifIcon[notif.type]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className={`text-sm ${!notif.read ? "font-bold" : "font-medium"}`}>{notif.title}</h3>
                <span className="text-[10px] text-gray-400 whitespace-nowrap">
                  {new Date(notif.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{notif.message}</p>
              <div className="flex items-center gap-3 mt-2">
                {notif.link && (
                  <Link href={notif.link} className="text-[10px] text-primary font-medium hover:underline">
                    View Details →
                  </Link>
                )}
                {!notif.read && (
                  <button
                    onClick={() => markRead(notif.id)}
                    className="text-[10px] text-gray-400 hover:text-gray-600"
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </div>
            {!notif.read && <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />}
          </div>
        ))}

        {displayed.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-[48px] text-gray-300">notifications_off</span>
            <p className="text-sm text-gray-500 mt-2">No unread notifications</p>
          </div>
        )}
      </div>
    </div>
  );
}
