"use client";

import { useAuth } from "@/lib/auth-context";
import { harvests, hives } from "@/lib/mock-data";

export default function ProfilePage() {
  const { user } = useAuth();

  const totalEarnings = harvests
    .filter((h) => h.status === "completed")
    .reduce((sum, h) => sum + h.payment, 0);

  const totalYield = harvests
    .filter((h) => h.status === "completed")
    .reduce((sum, h) => sum + h.weightDelivered, 0);

  const gradeColors = {
    A: "bg-green-100 text-green-700",
    B: "bg-yellow-100 text-yellow-700",
    C: "bg-orange-100 text-orange-700",
  };

  const statusBadge = {
    completed: "bg-green-100 text-green-700",
    "in-review": "bg-blue-100 text-blue-700",
    pending: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Profile</h1>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[40px] text-amber-700">person</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-sm text-primary font-medium">{user?.role === "farmer" ? "Beekeeper / Farmer" : user?.role}</p>
            <p className="text-sm text-gray-500 mt-2">{user?.bio}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">mail</span>
                {user?.email}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">phone</span>
                {user?.phone}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                {user?.location}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : ""}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Earnings Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
          <p className="text-2xl font-bold text-emerald-600">${totalEarnings.toFixed(0)}</p>
          <p className="text-xs text-gray-500 mt-1">Total Earnings</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
          <p className="text-2xl font-bold">{totalYield.toFixed(1)} kg</p>
          <p className="text-xs text-gray-500 mt-1">Total Yield</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
          <p className="text-2xl font-bold">{harvests.filter((h) => h.status === "completed").length}</p>
          <p className="text-xs text-gray-500 mt-1">Completed Harvests</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
          <p className="text-2xl font-bold">{hives.length}</p>
          <p className="text-xs text-gray-500 mt-1">Active Hives</p>
        </div>
      </div>

      {/* Harvest History */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="p-4 sm:p-5 pb-0">
          <h2 className="font-bold text-base">Harvest History</h2>
          <p className="text-xs text-gray-500 mt-0.5">All your harvests with quality grades and payment records</p>
        </div>

        {/* Desktop table — hidden on mobile */}
        <div className="hidden md:block p-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-gray-100">
                <th className="pb-3 font-medium">Hive</th>
                <th className="pb-3 font-medium">Season</th>
                <th className="pb-3 font-medium">Sensor (kg)</th>
                <th className="pb-3 font-medium">Delivered (kg)</th>
                <th className="pb-3 font-medium">Grade</th>
                <th className="pb-3 font-medium">Payment</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {harvests.map((harvest) => (
                <tr key={harvest.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="py-3 font-medium">{harvest.hiveName}</td>
                  <td className="py-3 text-gray-500">{harvest.season}</td>
                  <td className="py-3">{harvest.weightSensor}</td>
                  <td className="py-3">{harvest.weightDelivered}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${gradeColors[harvest.qualityGrade]}`}>
                      {harvest.qualityGrade}
                    </span>
                  </td>
                  <td className="py-3 font-medium">{harvest.payment > 0 ? `$${harvest.payment.toFixed(2)}` : "Pending"}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusBadge[harvest.status]}`}>
                      {harvest.status}
                    </span>
                  </td>
                  <td className="py-3 text-gray-400 text-xs">{new Date(harvest.harvestedAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards — hidden on desktop */}
        <div className="md:hidden p-4 space-y-3">
          {harvests.map((harvest) => (
            <div key={harvest.id} className="rounded-xl border border-gray-100 p-3 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-sm truncate">{harvest.hiveName}</h3>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${gradeColors[harvest.qualityGrade]}`}>
                    {harvest.qualityGrade}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusBadge[harvest.status]}`}>
                    {harvest.status}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Season</span>
                  <span className="text-gray-700">{harvest.season}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date</span>
                  <span className="text-gray-700">{new Date(harvest.harvestedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sensor</span>
                  <span className="text-gray-700">{harvest.weightSensor} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Delivered</span>
                  <span className="text-gray-700">{harvest.weightDelivered} kg</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <span className="text-[10px] text-gray-400">Payment</span>
                <span className="font-bold text-sm">{harvest.payment > 0 ? `$${harvest.payment.toFixed(2)}` : "Pending"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
