"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Country } from "country-state-city";

type FormState = "idle" | "loading" | "success" | "error";

const AGE_OPTIONS = ["5–7 years (Year 1–2)", "8–10 years (Year 3–5)", "11–13 years (Year 6–8)", "14–16 years (Year 9–11)"];
const SUBJECT_OPTIONS = [
  "Mathematics", "English Language", "Science", "Coding & Technology",
  "Languages (French/Spanish)", "11+ Exam Prep", "GCSE Exam Prep",
  "WAEC / BECE / NECO Prep", "SAT / ACT Prep",
];

const priorityCountries = [
  "Nigeria",
  "United Kingdom",
  "United States",
  "Canada",
  "United Arab Emirates",
];

const reassurances = [
  { icon: "📅", title: "Flexible Slots", desc: "Morning, afternoon & evening — all timezones" },
  { icon: "👩‍🏫", title: "Qualified Tutors Only", desc: "Vetted, experienced, subject-specialist teachers" },
  { icon: "📋", title: "Report Included", desc: "Full session report even from the booking session" },
  { icon: "💬", title: "Reply Within 24 hrs", desc: "We confirm your booking and send a calendar invite" },
];

export default function CaptureForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    parentName: "",
    email: "",
    phone: "",
    childAge: "",
    subject: "",
    country: "",
    message: "",
  });

  const countries = useMemo(() => Country.getAllCountries(), []);
  const [ ,setCountrySearch] = useState("");
  const [showCountries, setShowCountries] = useState(false);

  const filteredCountries = [
    ...countries.filter(c => priorityCountries.includes(c.name)),
    ...countries.filter(
      c =>
        !priorityCountries.includes(c.name) &&
        c.name.toLowerCase().includes(form.country.toLowerCase())
    ),
  ];

  const countryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state !== "success") return;
    const t = setTimeout(() => setState("idle"), 3000);
    return () => clearTimeout(t);
  }, [state]);

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Phone validation — strip non-digits, must be 7–15 digits
    const digitsOnly = form.phone.replace(/\D/g, "");
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      setState("error");
      setErrorMsg("Please enter a valid phone number (e.g. +234 704 352 3556 or 0704 352 3556).");
      return;
    }

    setState("loading");

    try {
      const res = await fetch("/api/book-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setState("success");
      setForm({ parentName: "", email: "", phone: "", childAge: "", subject: "", country: "", message: "" });
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try WhatsApp.");
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setShowCountries(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="book" className="py-20 lg:py-28 bg-brand-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        {/* Left: Copy + reassurances */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
              <span className="w-4 h-px bg-brand-midGreen" />
              Session Booking
              <span className="w-4 h-px bg-brand-midGreen" />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-deepGreen leading-tight">
              Book Your Child&apos;s<br />
              Session <em className="italic text-brand-midGreen">Today</em>
            </h2>
            <p className="text-brand-mutedSage text-base font-light leading-relaxed">
              No commitment. No payment. 45 minutes with a qualified tutor and a full report afterwards.
            </p>
          </div>

          <div className="space-y-5">
            {reassurances.map((r, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-lightGreen rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {r.icon}
                </div>
                <div>
                  <p className="font-bold text-brand-deepGreen text-sm">{r.title}</p>
                  <p className="text-brand-mutedSage text-xs mt-0.5 font-light">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp shortcut */}
          <a
            href="https://wa.me/2347043523556?text=Hi%20Schoolhelphub%2C%20I%27d%20like%20to%20book%20a%20free%20trial%20for%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 tap-target"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.557-5.338 11.902-11.892 11.902-2.004-.001-3.973-.51-5.713-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.892-1.84-1.842-4.29-2.856-6.889-2.858-5.441 0-9.867 4.371-9.871 9.743-.001 1.933.507 3.821 1.474 5.485L1.922 22.18l4.725-1.026z" /></svg>
            Or Book via WhatsApp
          </a>
        </div>

        {/* Right: Form card */}
        <div className="bg-white rounded-2xl border border-brand-lightGreen shadow-xl shadow-brand-green/8 p-8 sm:p-10">

          {state === "success" ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto">✅</div>
              <h3 className="font-serif text-2xl font-bold text-brand-deepGreen">Booking Received!</h3>
              <p className="text-brand-mutedSage text-sm max-w-xs mx-auto leading-relaxed">
                We&apos;ll confirm your booking slot and send a calendar invite within 24 hours.
              </p>
              <button
                onClick={() => setState("idle")}
                className="text-brand-green text-sm font-bold hover:underline"
              >
                Submit another enquiry →
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl font-bold text-brand-deepGreen mb-7"> Book a Free Academic Assessment</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Parent's Name">
                    <input required type="text" placeholder="e.g. Temi Adeleke" value={form.parentName} onChange={set("parentName")} className={inputClass} />
                  </Field>
                  <Field label="Email Address">
                    <input required type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} className={inputClass} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Phone / WhatsApp">
                    <input required type="tel" placeholder="+234 704 352 3556" value={form.phone} onChange={set("phone")} maxLength={16} className={inputClass} />
                  </Field>
                  <Field label="Child's Age Group">
                    <select required value={form.childAge} onChange={set("childAge")} className={inputClass}>
                      <option value="">Select age...</option>
                      {AGE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Subject">
                    <select required value={form.subject} onChange={set("subject")} className={inputClass}>
                      <option value="">Select subject...</option>
                      {SUBJECT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <div
                    ref={countryRef}
                    className="space-y-2 relative">
                    <label className="text-sm font-semibold text-brand-deepGreen">
                      Country of Residence
                    </label>

                    <input
                      type="text"
                      value={form.country}
                      onChange={(e) => {
                        const value = e.target.value;

                        setCountrySearch(value);

                        setForm((prev) => ({
                          ...prev,
                          country: e.target.value,
                        }));

                        setShowCountries(true);
                      }}
                      onFocus={() => setShowCountries(true)}
                      placeholder="Search your country..."
                      className="w-full rounded-xl border border-brand-lightGreen bg-white px-4 py-3 outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-lightGreen"
                    />

                    {showCountries && (
                      <div className="absolute z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border border-brand-lightGreen bg-white shadow-2xl">

                        {filteredCountries.map((country) => (
                          <button
                            key={country.isoCode}
                            type="button"
                            onClick={() => {
                              setForm((prev) => ({
                                ...prev,
                                country: country.name,
                              }));

                              setShowCountries(false);
                            }}
                            className="flex w-full items-center px-4 py-3 hover:bg-brand-faintGreen transition"
                          >
                            {country.name}
                          </button>
                        ))}

                        {filteredCountries.length === 0 && (
                          <div className="px-4 py-3 text-brand-mutedSage">
                            No country found.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <Field label="Anything We Should Know? (optional)">
                  <textarea placeholder="e.g. exam in March, specific topics, any learning needs…" value={form.message} onChange={set("message")} rows={3} className={inputClass} />
                </Field>

                {state === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    ⚠️ {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full bg-brand-green hover:bg-brand-deepGreen disabled:opacity-60 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg tap-target text-sm"
                >
                  {state === "loading" ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Book a Free Academic Assessment
                      <span className="w-7 h-7 rounded-full bg-brand-yellow text-brand-deepGreen flex items-center justify-center text-xs font-bold">→</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-brand-mutedSage">
                  No payment needed · <strong className="text-brand-green">Response within 24 hours</strong> · Cancel anytime
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full bg-brand-faintGreen border border-brand-lightGreen px-4 py-3 rounded-xl text-sm text-brand-textNearBlack placeholder:text-brand-mutedSage/60 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all duration-150 appearance-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-green">{label}</label>
      {children}
    </div>
  );
}
