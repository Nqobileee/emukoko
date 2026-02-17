"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In Phase 1 this is a static form — backend integration comes in Phase 2
    setSubmitted(true);
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background blur */}
      <div className="fixed top-[40%] right-[-6%] w-[35vh] h-[35vh] bg-primary/8 rounded-full blur-[70px] pointer-events-none z-0" />

      {/* Header */}
      <section className="relative z-10 pt-24 pb-8 sm:pt-32 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Whether you&apos;re a beekeeper interested in partnering, a buyer
              looking for traceable honey, or an investor exploring
              opportunities — we&apos;re here to talk.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="relative z-10 py-8 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-surface rounded-2xl border border-border-light p-10 sm:p-14 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Message Sent
                  </h2>
                  <p className="text-text-muted max-w-sm mx-auto mb-6">
                    Thank you for reaching out. Our team will review your
                    message and get back to you within 2 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface rounded-2xl border border-border-light p-7 sm:p-10 shadow-sm"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Send us a message
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full h-12 px-4 rounded-xl border border-border bg-surface-muted/50 text-foreground text-sm placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full h-12 px-4 rounded-xl border border-border bg-surface-muted/50 text-foreground text-sm placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full h-12 px-4 rounded-xl border border-border bg-surface-muted/50 text-foreground text-sm placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full h-12 px-4 rounded-xl border border-border bg-surface-muted/50 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="partnership">
                        Beekeeping Partnership
                      </option>
                      <option value="technology">Technology Enquiry</option>
                      <option value="marketplace">
                        Marketplace / Buying Honey
                      </option>
                      <option value="investment">
                        Investment Opportunity
                      </option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-muted/50 text-foreground text-sm placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary hover:bg-primary-dark text-foreground font-semibold text-sm transition-colors gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-surface rounded-2xl border border-border-light p-7 shadow-sm">
                <h3 className="font-bold text-foreground mb-5">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Email
                      </p>
                      <a
                        href="mailto:info@emukoko.org"
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        info@emukoko.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Phone
                      </p>
                      <p className="text-sm text-text-muted">
                        +263 77 000 0000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Location
                      </p>
                      <p className="text-sm text-text-muted">
                        Harare, Zimbabwe
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Response Time
                      </p>
                      <p className="text-sm text-text-muted">
                        We typically reply within 1–2 business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-2xl border border-border-light p-7 shadow-sm">
                <h3 className="font-bold text-foreground mb-3">
                  Frequently Asked
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Do I need my own hives to partner?
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed">
                      Yes — we install Smart Hive technology on your existing
                      hives. You manage the bees, we provide the tech.
                    </p>
                  </div>
                  <div className="border-t border-border-light pt-4">
                    <p className="text-sm font-medium text-foreground mb-1">
                      Is there a cost to join?
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed">
                      No upfront cost. The technology installation is covered by
                      Emukoko, and costs are recovered through our profit-sharing
                      model.
                    </p>
                  </div>
                  <div className="border-t border-border-light pt-4">
                    <p className="text-sm font-medium text-foreground mb-1">
                      Where do you operate?
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed">
                      Currently in Zimbabwe, with plans to expand across Southern
                      Africa. Contact us if you&apos;re in another region — we&apos;re
                      always looking for new partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
