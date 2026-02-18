"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.success) {
      router.push("/dashboard");
    } else {
      setError(result.error || "Login failed");
    }
  };

  const fillDemo = () => {
    setEmail("demo@emukoko.org");
    setPassword("DemoFarmer2026!");
  };

  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden flex items-center justify-center">
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] left-[-10%] w-[40vh] h-[40vh] bg-primary/10 rounded-full blur-[60px] pointer-events-none z-0" />

      <main className="relative z-10 w-full max-w-md mx-auto px-4 py-24">
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-primary/10">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="text-primary flex items-center justify-center p-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[24px]">hexagon</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Emukoko</span>
            </Link>
            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
            <p className="text-sm text-gray-500">Sign in to access your dashboard</p>
          </div>

          {/* Demo Account Banner */}
          <button
            onClick={fillDemo}
            className="w-full mb-6 p-3 bg-primary/10 border border-primary/20 rounded-xl text-left hover:bg-primary/15 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-[16px] text-amber-700">key</span>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">Demo Account</span>
            </div>
            <p className="text-xs text-gray-600">
              Click to auto-fill: <span className="font-mono">demo@emukoko.org</span> / <span className="font-mono">DemoFarmer2026!</span>
            </p>
          </button>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] mt-0.5">error</span>
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">Forgot password?</Link>
              </div>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-primary font-medium hover:underline">Sign up</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
