"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useCurrency } from "@/context/CurrencyContext";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

const plans = [
  {
    name: "Group Primary",
    badge: null,
    ageGroup: "Year 2 – 8  ·  Ages 6–13",
    tagline: "Build unshakeable foundations",
    price: { NGN: "60,000", GBP: "30" },
    highlight: "16+ hours/month · Mon–Thurs",
    features: [
      "Small group classes (max 6 students)",
      "Maths, English, Science & more",
      "Live interactive lessons",
      "Session report after every class",
      "Recorded sessions for replay",
      "Parent dashboard access",
    ],
    cta: " Book a Free Academic Assessment",
    featured: false,
    ctaStyle: "outline",
  },
  {
    name: "Group GCSE",
    badge: "⭐ Most Popular",
    ageGroup: "Year 9 – 11  ·  Ages 13–16",
    tagline: "Targeted exam success",
    price: { NGN: "80,000", GBP: "40" },
    highlight: "20+ hours/month · Mon–Fri",
    features: [
      "Year-specific GCSE & WAEC prep",
      "Year 9: Foundation building",
      "Year 10: GCSE-style practice",
      "Year 11: Past papers & exam skills",
      "Full progress reports & analytics",
      "Mock exam sessions included",
    ],
    cta: "Get Started",
    featured: true,
    ctaStyle: "yellow",
  },
  {
    name: "1-on-1 Elite",
    badge: null,
    ageGroup: "All Ages  ·  5–16 Years",
    tagline: "Dedicated personal tutor",
    price: { NGN: "120,000", GBP: "60" },
    highlight: "Custom schedule · Any subject",
    features: [
      "1-on-1 dedicated qualified tutor",
      "Fully personalised lesson plan",
      "11+, GCSE, WAEC, SAT/ACT prep",
      "Flexible morning/afternoon/evening",
      "Detailed session reports",
      "Priority tutor matching",
    ],
    cta: " Book a Free Academic Assessment",
    featured: false,
    ctaStyle: "outline",
  },
];

export default function PricingTable() {
  const { currency, setCurrency, symbol } = useCurrency();
  const isClient = useIsClient();
  const activeCurrency = isClient ? currency : "NGN";

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 space-y-4 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            <span className="w-4 h-px bg-brand-midGreen" />
            Simple Pricing
            <span className="w-4 h-px bg-brand-midGreen" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-deepGreen">
            Choose Your <em className="italic text-brand-midGreen">Plan</em>
          </h2>
          <p className="text-brand-mutedSage font-light text-base">
            Monthly subscriptions · No hidden fees · Cancel anytime
          </p>
        </div>

        {/* Currency toggle */}
        <div className="flex justify-center mb-12 reveal delay-100">
          <div className="inline-flex bg-brand-faintGreen border border-brand-lightGreen rounded-xl p-1 shadow-inner">
            <button
              onClick={() => setCurrency("NGN")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 tap-target cursor-pointer ${
                activeCurrency === "NGN"
                  ? "bg-brand-deepGreen text-white shadow-sm"
                  : "text-brand-mutedSage hover:text-brand-deepGreen"
              }`}
            >
              🇳🇬 NGN (₦)
            </button>
            <button
              onClick={() => setCurrency("GBP")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 tap-target cursor-pointer ${
                activeCurrency === "GBP"
                  ? "bg-brand-deepGreen text-white shadow-sm"
                  : "text-brand-mutedSage hover:text-brand-deepGreen"
              }`}
            >
              🇬🇧 GBP (£)
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`reveal delay-${(idx + 1) * 100} relative flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                plan.featured
                  ? "bg-brand-deepGreen border-2 border-brand-deepGreen shadow-2xl shadow-brand-deepGreen/25 md:scale-[1.03]"
                  : "bg-white border border-brand-lightGreen shadow-sm hover:shadow-md hover:border-brand-green/30 hover:-translate-y-1"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-deepGreen text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              {/* Age group */}
              <span className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${plan.featured ? "text-white/50" : "text-brand-mutedSage"}`}>
                {plan.ageGroup}
              </span>

              {/* Plan name */}
              <h3 className={`font-serif text-xl font-bold mb-1 ${plan.featured ? "text-white" : "text-brand-deepGreen"}`}>
                {plan.name}
              </h3>
              <p className={`text-xs mb-6 ${plan.featured ? "text-white/60" : "text-brand-mutedSage"}`}>
                {plan.tagline}
              </p>

              {/* Price */}
              <div className={`flex items-baseline gap-1 pb-5 mb-5 border-b ${plan.featured ? "border-white/10" : "border-brand-lightGreen/60"}`}>
                <span className={`font-serif text-5xl font-bold tracking-tight transition-all duration-200 ${plan.featured ? "text-white" : "text-brand-deepGreen"}`}>
                  {isClient ? symbol : "₦"}{activeCurrency === "NGN" ? plan.price.NGN : plan.price.GBP}
                </span>
                <span className={`text-sm font-medium ${plan.featured ? "text-white/50" : "text-brand-mutedSage"}`}>/month</span>
              </div>

              {/* Highlight pill */}
              <div className={`text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-5 w-fit ${
                plan.featured ? "bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/20" : "bg-brand-faintGreen text-brand-green"
              }`}>
                ⏱ {plan.highlight}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f, fi) => (
                  <li key={fi} className={`flex items-start gap-2.5 text-sm ${plan.featured ? "text-white/80" : "text-brand-textNearBlack"}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 ${
                      plan.featured ? "bg-brand-yellow/15 text-brand-yellow" : "bg-brand-lightGreen text-brand-green"
                    }`}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/#book"
                className={`block w-full text-center font-bold py-3.5 px-6 rounded-xl transition-all duration-200 tap-target text-sm ${
                  plan.ctaStyle === "yellow"
                    ? "bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen shadow-md shadow-brand-yellow/25"
                    : plan.featured
                    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    : "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                }`}
              >
                {plan.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-brand-mutedSage text-xs mt-8 reveal delay-400">
          All plans include a <strong className="text-brand-green">free first session</strong> with no payment required.&nbsp;
          Need a custom plan?&nbsp;
          <a href="https://wa.me/2347043523556" className="text-brand-green font-bold hover:underline" target="_blank" rel="noopener noreferrer">
            Chat with us on WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
