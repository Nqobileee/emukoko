"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [step, setStep] = useState(1); // 1: Account, 2: Profile, 3: Hive setup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: "",
    experience: "beginner",
    hiveCount: "1-3",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    setError("");
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.password) {
        setError("Please fill all required fields");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }
    setStep((s) => s + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await register(formData.name, formData.email, formData.password);
    setLoading(false);
    if (result.success) {
      router.push("/dashboard");
    } else {
      setError(result.error || "Registration failed");
    }
  };

  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden flex items-center justify-center">
      <div className="fixed top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] right-[-10%] w-[40vh] h-[40vh] bg-primary/10 rounded-full blur-[60px] pointer-events-none z-0" />

      <main className="relative z-10 w-full max-w-md mx-auto px-4 py-24">
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-primary/10">
          {/* Header */}
          <div className="text-center mb-6">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="text-primary flex items-center justify-center p-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[24px]">hexagon</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Emukoko</span>
            </Link>
            <h1 className="text-2xl font-bold mb-2">Join the Hive</h1>
            <p className="text-sm text-gray-500">Create your account in 3 simple steps</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-2 mb-8">
            {[
              { num: 1, label: "Account" },
              { num: 2, label: "Profile" },
              { num: 3, label: "Hive Setup" },
            ].map((s) => (
              <div key={s.num} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step >= s.num
                      ? "bg-primary text-[#181611]"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {step > s.num ? (
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  ) : (
                    s.num
                  )}
                </div>
                <span className="text-[10px] font-medium text-gray-400">{s.label}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] mt-0.5">error</span>
                {error}
              </div>
            )}

            {/* Step 1: Account */}
            {step === 1 && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                  <input type="password" id="password" name="password" required value={formData.password} onChange={handleChange}
                    placeholder="At least 6 characters"
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange}
                    placeholder="Repeat your password"
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
                </div>
                <button type="button" onClick={handleNext}
                  className="w-full h-12 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                  Continue <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </>
            )}

            {/* Step 2: Profile */}
            {step === 2 && (
              <>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="+263 7X XXX XXXX"
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input type="text" id="location" name="location" value={formData.location} onChange={handleChange}
                    placeholder="e.g. Masvingo, Zimbabwe"
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Beekeeping Experience</label>
                  <select id="experience" name="experience" value={formData.experience} onChange={handleChange}
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30">
                    <option value="beginner">Beginner (Less than 1 year)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="experienced">Experienced (3+ years)</option>
                    <option value="expert">Expert (10+ years)</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)}
                    className="flex-1 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all">
                    Back
                  </button>
                  <button type="button" onClick={handleNext}
                    className="flex-1 h-12 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                    Continue <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </>
            )}

            {/* Step 3: Hive Setup */}
            {step === 3 && (
              <>
                <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl mb-2">
                  <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-amber-700">hive</span>
                    Smart Hive Registration
                  </h3>
                  <p className="text-xs text-gray-500">
                    Tell us about your hive setup. Don&apos;t worry — you can update this later from your dashboard. If you&apos;re joining through our loan program, we&apos;ll set up your hives during installation.
                  </p>
                </div>
                <div>
                  <label htmlFor="hiveCount" className="block text-sm font-medium text-gray-700 mb-1">How many hives do you manage?</label>
                  <select id="hiveCount" name="hiveCount" value={formData.hiveCount} onChange={handleChange}
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30">
                    <option value="0">None yet — joining hive loan program</option>
                    <option value="1-3">1–3 hives</option>
                    <option value="4-10">4–10 hives</option>
                    <option value="10+">More than 10 hives</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)}
                    className="flex-1 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all">
                    Back
                  </button>
                  <button type="submit" disabled={loading}
                    className="flex-1 h-12 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                        Creating...
                      </>
                    ) : (
                      <>
                        Create Account
                        <span className="material-symbols-outlined text-[18px]">check</span>
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
