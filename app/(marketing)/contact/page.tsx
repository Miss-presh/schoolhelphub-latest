"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API pipeline latency
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    }, 1200);
  };

  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">
      
      {/* 1. Header Hero Fold */}
      <section className="py-20 bg-brand-faintGreen border-b border-brand-lightGreen/60 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            Administrative HQ
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-deepGreen tracking-tight leading-tight">
            Connect With Our Coordination Board
          </h1>
          <p className="text-base sm:text-lg text-brand-mutedSage max-w-2xl mx-auto leading-relaxed">
            Have programmatic requests, enterprise billing queries, or custom school partnership proposals? Drop our specialists a secure transmission.
          </p>
        </div>
      </section>

      {/* 2. Main Two-Column Operational Split */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Corporate Information Frame (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 bg-brand-cream border border-brand-lightGreen/80 p-8 rounded-2xl">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-brand-deepGreen">Schoolhelphub HQ</h2>
              <p className="text-xs text-brand-mutedSage font-medium">Global Academic Operations Infrastructure</p>
            </div>

            <div className="space-y-6 font-sans text-sm text-brand-textNearBlack font-medium">
              <div className="flex gap-4 items-start">
                <span className="text-2xl bg-white w-10 h-10 rounded-lg flex items-center justify-center border border-brand-lightGreen shadow-sm">📍</span>
                <div>
                  <h4 className="font-bold text-brand-deepGreen">Registered Office</h4>
                  <p className="text-xs text-brand-mutedSage mt-1 leading-relaxed">
                    71-75 Shelton Street, Covent Garden<br />
                    London, WC2H 9JQ, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl bg-white w-10 h-10 rounded-lg flex items-center justify-center border border-brand-lightGreen shadow-sm">✉️</span>
                <div>
                  <h4 className="font-bold text-brand-deepGreen">Electronic Transmissions</h4>
                  <p className="text-xs text-brand-mutedSage mt-1">support@schoolhelphub.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl bg-white w-10 h-10 rounded-lg flex items-center justify-center border border-brand-lightGreen shadow-sm">📱</span>
                <div>
                  <h4 className="font-bold text-brand-deepGreen">Direct Help Desk</h4>
                  <p className="text-xs text-brand-mutedSage mt-1">+44 (0) 20 7000 0000</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-lightGreen/60">
              <span className="text-xs font-bold text-brand-midGreen block mb-2 uppercase tracking-wide">Live Response Velocity:</span>
              <p className="text-xs text-brand-mutedSage leading-relaxed">
                Our active monitoring queues typically review and assign standard contact logs inside <strong className="text-brand-deepGreen">2 operational hours</strong>.
              </p>
            </div>
          </div>

          {/* Right Block: Secure Message Matrix Form (7 Columns) */}
          <div className="lg:col-span-7 bg-brand-cream border border-brand-lightGreen p-8 sm:p-10 rounded-2xl shadow-sm-brand">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="text-4xl bg-brand-lightGreen w-16 h-16 rounded-full flex items-center justify-center mx-auto text-brand-deepGreen">✓</div>
                <h3 className="text-xl font-serif font-bold text-brand-deepGreen">Message Routed Securely</h3>
                <p className="text-sm text-brand-mutedSage max-w-md mx-auto">
                  Thank you. Your inquiry packet has entered our primary screening workflow. An operations coordinator will be in touch shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-brand-midGreen underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-brand-lightGreen px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-brand-lightGreen px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">Inquiry Subject Category</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-brand-lightGreen px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Programmatic Inquiry</option>
                    <option value="Billing Ops">Billing & Invoicing Infrastructure</option>
                    <option value="Tutor Application">Corporate Vetting & Educator Onboarding</option>
                    <option value="Partnerships">Institutional / School Board Partnerships</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">Granular Message Payload</label>
                  <textarea 
                    rows={5}
                    required
                    placeholder="Describe your structural requirements or business requests in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-brand-lightGreen p-4 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-deepGreen hover:bg-brand-green disabled:opacity-50 text-white font-bold p-4 rounded-xl shadow-md-brand transition-all duration-150 text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Dispatch Secured Message Packet"
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}