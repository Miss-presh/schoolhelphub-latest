"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useCurrency } from "@/context/CurrencyContext";

function useIsClient() {
  return useSyncExternalStore(() => () => {}, () => true, () => false);
}

const tiers = [
  {
    name: "Group Primary",
    age: "Year 2–8 · Ages 6–13",
    price: { NGN: "60,000", GBP: "30" },
    highlight: "16+ hours/month · Mon–Thurs",
    description: "Build unshakeable foundations in Maths, English, Science and more with our small group classes.",
    features: [
      "Small group classes (max 6 students)",
      "Live interactive sessions",
      "Session report after every class",
      "Recorded sessions for replay",
      "Parent dashboard access",
      "Mon–Thurs schedule",
    ],
    cta: " Book a Free Academic Assessment",
  },
  {
    name: "Group GCSE",
    age: "Year 9–11 · Ages 13–16",
    price: { NGN: "80,000", GBP: "40" },
    highlight: "20+ hours/month · Mon–Fri",
    description: "Targeted exam success with year-specific GCSE, WAEC and IGCSE preparation.",
    features: [
      "Year-specific exam prep (GCSE, WAEC)",
      "Year 9: Foundation · Year 10: Practice",
      "Year 11: Past papers & exam skills",
      "Full progress reports & analytics",
      "Mock exam sessions included",
      "Mon–Fri schedule",
    ],
    cta: "Get Started",
  },
  {
    name: "1-on-1 Elite",
    age: "All Ages · 5–16 Years",
    price: { NGN: "120,000", GBP: "60" },
    highlight: "Custom schedule · Any subject",
    description: "A dedicated personal tutor matched to your child's exact needs, schedule, and learning style.",
    features: [
      "1-on-1 dedicated qualified tutor",
      "Fully personalised lesson plan",
      "11+, GCSE, WAEC, SAT/ACT prep",
      "Flexible morning/afternoon/evening",
      "Detailed session reports",
      "Priority tutor matching",
    ],
    cta: " Book a Free Academic Assessment",
  },
];

export default function PricingPage() {
  const { currency, setCurrency, symbol } = useCurrency();
  const isClient = useIsClient();
  const active = isClient ? currency : "NGN";

  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased">

      {/* Header */}
      <section className="py-20 bg-brand-faintGreen border-b border-brand-lightGreen/60 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            Simple Pricing
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-deepGreen leading-tight">
            Choose Your Plan
          </h1>
          <p className="text-brand-mutedSage text-base font-light">
            Monthly subscriptions · No hidden fees · Cancel anytime
          </p>

          {/* Currency toggle */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex bg-white p-1 rounded-xl border border-brand-lightGreen shadow-sm">
              <button
                onClick={() => setCurrency("NGN")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  active === "NGN" ? "bg-brand-deepGreen text-white shadow-sm" : "text-brand-mutedSage hover:text-brand-deepGreen"
                }`}
              >
                🇳🇬 NGN (₦)
              </button>
              <button
                onClick={() => setCurrency("GBP")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  active === "GBP" ? "bg-brand-deepGreen text-white shadow-sm" : "text-brand-mutedSage hover:text-brand-deepGreen"
                }`}
              >
                🇬🇧 GBP (£)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-7">
          {tiers.map((tier, idx) => (
            <div key={idx} className="bg-brand-cream border border-brand-lightGreen p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-green/25 transition-all duration-300 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-mutedSage mb-1">{tier.age}</span>
              <h2 className="font-serif text-2xl font-bold text-brand-deepGreen mb-2">{tier.name}</h2>
              <p className="text-sm text-brand-mutedSage font-light mb-5 leading-relaxed">{tier.description}</p>
              <div className="flex items-baseline gap-1 pb-5 mb-5 border-b border-brand-lightGreen/60">
                <span className="font-serif text-4xl font-bold text-brand-deepGreen">
                  {isClient ? symbol : "₦"}{active === "NGN" ? tier.price.NGN : tier.price.GBP}
                </span>
                <span className="text-sm text-brand-mutedSage">/mo</span>
              </div>
              <div className="text-xs font-semibold text-brand-green bg-brand-faintGreen px-3 py-1.5 rounded-full w-fit mb-5">
                ⏱ {tier.highlight}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-brand-textNearBlack">
                    <span className="text-brand-green font-bold flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#book"
                className="block w-full text-center border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-bold py-3.5 rounded-xl transition-all duration-200 tap-target text-sm"
              >
                {tier.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Reassurances */}
      <section className="py-14 bg-brand-faintGreen border-t border-brand-lightGreen/60 text-center px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { title: "Free First Session", desc: "No payment needed for your trial class." },
            { title: "Flexible Scheduling", desc: "Morning, afternoon and evening — all timezones." },
            { title: "Cancel Anytime", desc: "No lock-in contracts. Cancel with one message." },
          ].map((r) => (
            <div key={r.title} className="space-y-1">
              <h5 className="font-serif font-bold text-brand-deepGreen">{r.title}</h5>
              <p className="text-xs text-brand-mutedSage font-light">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
