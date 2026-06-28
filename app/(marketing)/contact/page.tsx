"use client";

import React, { useState, useEffect } from "react";

const SUBJECT_OPTIONS = [
  "General Enquiry",
  "Book a Free Trial Session",
  "Tutor Application",
  "Pricing & Payment",
  "School / Organisation Partnership",
  "Technical Support",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    if (state !== "success") return;
    const t = setTimeout(() => setState("idle"), 3000);
    return () => clearTimeout(t);
  }, [state]);

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try WhatsApp.");
    }
  };

  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">

      {/* Hero */}
      <section className="py-20 bg-brand-deepGreen text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/60 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
            We&apos;d Love to<br />
            <em className="italic text-brand-yellow">Hear From You</em>
          </h1>
          <p className="text-white/65 text-base font-light leading-relaxed max-w-lg mx-auto">
            Whether you have a question about sessions, pricing, or want to apply as a tutor, our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: contact details */}
          <div className="lg:col-span-5 space-y-6">

            <div className="bg-brand-faintGreen border border-brand-lightGreen/70 rounded-2xl p-7 space-y-6">
              <h2 className="font-serif text-xl font-bold text-brand-deepGreen">Contact Details</h2>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-brand-lightGreen flex-shrink-0">📍</div>
                <div>
                  <p className="font-bold text-brand-deepGreen text-sm">🇳🇬 Nigeria Office</p>
                  <p className="text-xs text-brand-mutedSage mt-1 leading-relaxed">
                    Lagos, Nigeria<br />
                    Serving all states nationwide
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-brand-lightGreen flex-shrink-0">📍</div>
                <div>
                  <p className="font-bold text-brand-deepGreen text-sm">🇬🇧 UK Presence</p>
                  <p className="text-xs text-brand-mutedSage mt-1 leading-relaxed">
                    United Kingdom<br />
                    Serving families across England & Wales
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-brand-lightGreen flex-shrink-0">✉️</div>
                <div>
                  <p className="font-bold text-brand-deepGreen text-sm">Email</p>
                  <a href="mailto:support@schoolhelphub.com" className="text-xs text-brand-midGreen hover:underline mt-1 block">
                    support@schoolhelphub.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-brand-lightGreen flex-shrink-0">📞</div>
                <div>
                  <p className="font-bold text-brand-deepGreen text-sm">Phone / WhatsApp</p>
                  <a href="tel:+2347043523556" className="text-xs text-brand-midGreen hover:underline mt-1 block">
                    +234 704 352 3556
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-lightGreen/60">
                <p className="text-xs text-brand-mutedSage leading-relaxed">
                  We typically reply within <strong className="text-brand-deepGreen">24 hours</strong>, Monday to Saturday.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2347043523556?text=Hi%20Schoolhelphub%2C%20I%27d%20like%20to%20get%20in%20touch."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-6 py-4 rounded-xl text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 tap-target"
            >
              <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.557-5.338 11.902-11.892 11.902-2.004-.001-3.973-.51-5.713-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.892-1.84-1.842-4.29-2.856-6.889-2.858-5.441 0-9.867 4.371-9.871 9.743-.001 1.933.507 3.821 1.474 5.485L1.922 22.18l4.725-1.026z"/></svg>
              Chat With Us on WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 bg-brand-cream border border-brand-lightGreen rounded-2xl p-8 sm:p-10 shadow-sm">

            {state === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto">✅</div>
                <h3 className="font-serif text-2xl font-bold text-brand-deepGreen">Message Received!</h3>
                <p className="text-brand-mutedSage text-sm max-w-xs mx-auto leading-relaxed">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="text-brand-green text-sm font-bold hover:underline"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-brand-deepGreen mb-7">Send Us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green">Full Name</label>
                      <input required type="text" placeholder="e.g. Temi Adeleke" value={form.name} onChange={set("name")} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green">Email Address</label>
                      <input required type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} className={inputClass} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green">Subject</label>
                    <select required value={form.subject} onChange={set("subject")} className={inputClass}>
                      <option value="">Select a subject...</option>
                      {SUBJECT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green">Your Message</label>
                    <textarea required rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={set("message")} className={inputClass} />
                  </div>

                  {state === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full bg-brand-deepGreen hover:bg-brand-green disabled:opacity-60 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-0.5 shadow-md text-sm tap-target"
                  >
                    {state === "loading" ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : "Send Message →"}
                  </button>

                  <p className="text-center text-xs text-brand-mutedSage">
                    We reply within 24 hours · Monday to Saturday
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

const inputClass =
  "w-full bg-white border border-brand-lightGreen px-4 py-3 rounded-xl text-sm text-brand-textNearBlack placeholder:text-brand-mutedSage/60 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all duration-150 appearance-none";
