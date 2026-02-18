"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden flex items-center justify-center">
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />

      <main className="relative z-10 w-full max-w-md mx-auto px-4 py-24">
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-primary/10">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="text-primary flex items-center justify-center p-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[24px]">hexagon</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Emukoko</span>
            </Link>

            {sent ? (
              <>
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[32px] text-green-600">mark_email_read</span>
                </div>
                <h1 className="text-2xl font-bold mb-2">Check Your Email</h1>
                <p className="text-sm text-gray-500">
                  We&apos;ve sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the instructions.
                </p>
                <div className="mt-6 p-3 bg-primary/10 border border-primary/20 rounded-xl">
                  <p className="text-xs text-gray-600">
                    <strong>Demo note:</strong> This is a simulated action. In production, you would receive a real email with a reset link.
                  </p>
                </div>
                <Link href="/auth/login"
                  className="mt-6 inline-flex h-12 px-6 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-xl transition-all items-center justify-center gap-2">
                  Back to Sign In
                </Link>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold mb-2">Reset Password</h1>
                <p className="text-sm text-gray-500">
                  Enter your email address and we&apos;ll send you a link to reset your password.
                </p>
              </>
            )}
          </div>

          {!sent && (
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                    Sending...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>
              <p className="text-center text-sm text-gray-500">
                Remember your password?{" "}
                <Link href="/auth/login" className="text-primary font-medium hover:underline">Sign in</Link>
              </p>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
