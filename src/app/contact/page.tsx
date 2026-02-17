"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    role: "farmer",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission (will be replaced with real API in Phase 2)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSending(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      <div className="fixed bottom-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <main className="relative z-10 pt-24 pb-16 px-4 flex flex-col gap-16 max-w-6xl mx-auto w-full">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="material-symbols-outlined text-[16px] text-amber-700">mail</span>
            <span className="text-xs font-medium text-amber-800 tracking-wide uppercase">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Let&apos;s Build
            <br />
            <span className="text-primary">Something Together</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you&apos;re a beekeeper interested in our Smart Hive program, a consumer
            wanting traceable honey, or a partner looking to collaborate — we&apos;d love to hear
            from you.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-4">
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-amber-700 mb-4">
                <span className="material-symbols-outlined text-[24px]">mail</span>
              </div>
              <h3 className="font-bold mb-1">Email</h3>
              <p className="text-sm text-gray-500">info@emukoko.org</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-amber-700 mb-4">
                <span className="material-symbols-outlined text-[24px]">location_on</span>
              </div>
              <h3 className="font-bold mb-1">Location</h3>
              <p className="text-sm text-gray-500">Zimbabwe</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-amber-700 mb-4">
                <span className="material-symbols-outlined text-[24px]">schedule</span>
              </div>
              <h3 className="font-bold mb-1">Response Time</h3>
              <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 border border-primary/10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-[32px] text-green-600">
                    check_circle
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3">Message Sent!</h2>
                <p className="text-gray-500 mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      subject: "",
                      role: "farmer",
                      message: "",
                    });
                  }}
                  className="h-12 px-6 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-full transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary/5 border border-primary/10 space-y-5"
              >
                <h2 className="text-xl font-bold mb-2">Send us a message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      I am a...
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    >
                      <option value="farmer">Beekeeper / Farmer</option>
                      <option value="consumer">Consumer</option>
                      <option value="partner">Potential Partner</option>
                      <option value="investor">Investor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest, questions, or how we can help..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full h-14 bg-primary hover:bg-[#dca615] disabled:opacity-60 text-[#181611] font-bold rounded-full shadow-glow transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
                >
                  {sending ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[20px]">
                        progress_activity
                      </span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
