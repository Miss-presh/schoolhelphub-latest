"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";

function useIsClient() {
  return useSyncExternalStore(() => () => {}, () => true, () => false);
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const step = Math.ceil(duration / target);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + 1, target);
            setVal(current);
            if (current >= target) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const services = [
  "Live Online Classes",
  "Friendly Tutors",
  "Homework Support",
  "Exam Preparation",
  "Fun Learning Experience",
];

export default function Hero() {
  const mounted = useIsClient();

  return (
    <section className="relative bg-brand-cream overflow-hidden">
      {/* Soft background blobs — mirrors the flyer's pastel gradient */}
      <div className="absolute top-0 right-0 w-[640px] h-[640px] rounded-full bg-brand-lightGreen/80 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full bg-brand-softYellow/60 blur-[110px] pointer-events-none" />

      {/* Decorative sketch elements */}
      <div className="absolute top-24 right-10 text-5xl opacity-15 rotate-12 select-none hidden xl:block animate-floatSlow">✏️</div>
      <div className="absolute bottom-28 left-10 text-4xl opacity-15 -rotate-12 select-none hidden xl:block animate-float">💡</div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>

        {/* ── MAIN HEADLINE ── */}
        <div className="text-center mb-12 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
          <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-yellow leading-none mb-2">
            Your child
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-deepGreen leading-none">
              Can
            </span>
            <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-deepGreen bg-brand-yellow px-5 sm:px-7 py-1 sm:py-2 rounded-2xl sm:rounded-3xl leading-none inline-block">
              Love
            </span>
          </div>
          <p className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-deepGreen leading-none mt-2">
            Learning Again
          </p>
        </div>

        {/* ── TWO COLUMNS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* LEFT: 2/5 — description + services bubble + CTAs + stats */}
          <div className="lg:col-span-2 space-y-5 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>

            {/* Green services bubble */}
            <div className="bg-brand-deepGreen rounded-[32px] p-7 shadow-xl">
              <div className="flex items-start gap-3 mb-5">
                <span className="text-2xl flex-shrink-0 mt-0.5">🖥️</span>
                <p className="text-white/80 text-sm leading-relaxed">
                  Interactive online classes designed to help students aged{" "}
                  <strong className="text-brand-yellow font-bold">5–16</strong> learn
                  faster, better, and with confidence
                </p>
              </div>

              <div className="border border-brand-yellow/50 rounded-full px-4 py-1.5 inline-flex items-center mb-5">
                <span className="text-brand-yellow text-xs font-bold tracking-wide">Our Services</span>
              </div>

              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="w-4 h-4 border-2 border-white/45 rounded-full flex-shrink-0" />
                    <span className="text-white font-semibold text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile-only hero photo — between services card and CTAs */}
            <div className="block lg:hidden relative" style={{ animationDelay: "0.25s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-deepGreen/15" style={{ minHeight: "300px" }}>
                <Image
                  src="https://images.pexels.com/photos/19148684/pexels-photo-19148684.jpeg?auto=compress&cs=tinysrgb&w=900&h=1000&fit=crop"
                  alt="Happy student holding books and smiling confidently"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepGreen/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/93 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="text-brand-deepGreen font-semibold text-sm leading-snug">
                    &ldquo;My daughter used to hate Maths. Now she actually asks to do extra practice!&rdquo;
                  </p>
                  <p className="text-brand-mutedSage text-xs mt-1.5 font-medium"> Parent, Lagos 🇳🇬</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-brand-yellow text-brand-deepGreen font-black text-xs px-4 py-2.5 rounded-xl shadow-lg border-2 border-white z-10">
                Ages 5–16
              </div> 
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/#book"
                className="text-center bg-brand-deepGreen hover:bg-brand-green text-white font-bold px-6 py-4 rounded-xl text-sm transition-all duration-200 shadow-lg hover:-translate-y-0.5 tap-target animate-pulse-ring"
              >
                📚 Book a Free Session
              </Link>
              <a
                href="https://wa.me/2347043523556?text=Hi%20Schoolhelphub%2C%20I%27d%20like%20to%20find%20out%20more%20about%20tutoring."
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border-2 border-brand-deepGreen text-brand-deepGreen hover:bg-brand-deepGreen hover:text-white font-semibold px-6 py-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 tap-target"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.557-5.338 11.902-11.892 11.902-2.004-.001-3.973-.51-5.713-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.892-1.84-1.842-4.29-2.856-6.889-2.858-5.441 0-9.867 4.371-9.871 9.743-.001 1.933.507 3.821 1.474 5.485L1.922 22.18l4.725-1.026z" />
                </svg>
                WhatsApp Us →
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-stretch gap-0 pt-2 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              {[
                { num: 500, suffix: "+", label: "Students" },
                { num: 94, suffix: "%", label: "Attendance" },
                { num: 100, suffix: "%", label: "Reports Sent" },
              ].map((s, i) => (
                <div key={i} className="flex items-stretch gap-0">
                  {i > 0 && <div className="w-px bg-brand-mutedSage/25 mx-4 self-stretch" />}
                  <div className="text-center">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-deepGreen leading-none">
                      <CountUp target={s.num} suffix={s.suffix} />
                    </div>
                    <div className="text-brand-mutedSage text-[11px] mt-1 font-medium tracking-wide">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 3/5 — hero photo (desktop only) */}
          <div className="hidden lg:block lg:col-span-3 relative animate-fadeIn" style={{ animationDelay: "0.25s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-deepGreen/15" style={{ minHeight: "520px" }}>
              <Image
                src="https://images.pexels.com/photos/19148684/pexels-photo-19148684.jpeg?auto=compress&cs=tinysrgb&w=900&h=1000&fit=crop"
                alt="Happy student holding books and smiling confidently"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deepGreen/55 via-transparent to-transparent" />

              {/* Parent quote overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/93 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <p className="text-brand-deepGreen font-semibold text-sm leading-snug">
                  &quot;My daughter used to hate Maths. Now she actually asks to do extra practice!&quot;
                </p>
                <p className="text-brand-mutedSage text-xs mt-1.5 font-medium">— Parent, Lagos 🇳🇬</p>
              </div>
            </div>

            {/* Age badge */}
            <div className="absolute -top-3 -right-3 bg-brand-yellow text-brand-deepGreen font-black text-xs px-4 py-2.5 rounded-xl shadow-lg border-2 border-white">
              Ages 5–16
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
