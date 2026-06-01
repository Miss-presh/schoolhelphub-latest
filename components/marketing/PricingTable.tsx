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

export default function PricingTable() {
  const { currency } = useCurrency();
  const isClient = useIsClient();

  // Use GBP as the server-safe default until client hydrates
  const activeCurrency = isClient ? currency : "GBP";

;
  const plans = [
    {
      name: "Primary Core Tier",
      ageGroup: "Ages 5 - 11",
      description: "Building unshakeable confidence in foundational mathematics, reading, and exam prep.",
      price: { GBP: "35", USD: "45" },
      features: [
        "1-on-1 Dedicated Qualified Teacher",
        "Full Curriculum Synchronization",
        "Post-Session Performance Analytics",
        "Free Monthly Progress Simulator",
      ],
      cta: "Book Primary Trial",
      popular: false,
    },
    {
      name: "Secondary Excellence",
      ageGroup: "Ages 11 - 16",
      description: "Targeted support for GCSEs, AP classes, 11+ entrance exams, and academic milestones.",
      price: { GBP: "45", USD: "60" },
      features: [
        "Specialist Subject Lead Teacher",
        "Exam-Board Specific Mock Strategies",
        "24/7 Digital Dashboard Portal Access",
        "Priority Coordinator Support Calls",
      ],
      cta: "Book Secondary Trial",
      popular: true,
    },
  ];

  return (
    <section className="py-24 bg-brand-cream border-b border-brand-lightGreen/60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            Investment Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-deepGreen">
            Simple, All-Inclusive Flat Hourly Pricing
          </h2>
          <p className="text-sm sm:text-base text-brand-mutedSage">
            No hidden administration fees. No long-term lock-in contracts. Cancel or swap subjects at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 bg-white transition-all duration-300 flex flex-col justify-between ${
                plan.popular
                  ? "border-2 border-brand-green shadow-md-brand scale-102"
                  : "border border-brand-lightGreen/80 shadow-sm-brand"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 right-6 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-midGreen block mb-1">
                  {plan.ageGroup}
                </span>
                <h3 className="text-2xl font-serif font-bold text-brand-deepGreen mb-3">
                  {plan.name}
                </h3>
                <p className="text-sm text-brand-mutedSage font-sans mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8 border-b border-brand-lightGreen/40 pb-6">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-brand-deepGreen transition-all duration-200">
                    {activeCurrency === "GBP" ? "£" : "$"}
                    {activeCurrency === "GBP" ? plan.price.GBP : plan.price.USD}
                  </span>
                  <span className="text-sm font-semibold text-brand-mutedSage">/ hour</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-brand-textNearBlack font-medium">
                      <span className="text-brand-green text-base flex-shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/free-trial"
                className={`block w-full text-center font-bold py-3.5 px-6 rounded-xl transition-all duration-150 tap-target text-sm ${
                  plan.popular
                    ? "bg-brand-green hover:bg-brand-midGreen text-white shadow-sm"
                    : "bg-brand-faintGreen hover:bg-brand-lightGreen text-brand-deepGreen border border-brand-green/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}