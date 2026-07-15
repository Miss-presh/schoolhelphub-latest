"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Group Primary",
    priceNGN: "₦60,000",
    priceGBP: "£30",
    description: "Small group classes (Max. 6 students)",
    featured: false,
  },
  {
    name: "Group GCSE",
    priceNGN: "₦80,000",
    priceGBP: "£40",
    description: "WAEC, GCSE & IGCSE Exam Preparation",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "1-on-1 Elite",
    priceNGN: "₦120,000",
    priceGBP: "£60",
    description: "Dedicated Personal Tutor",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-deepGreen via-brand-green to-brand-midGreen shadow-[0_35px_90px_rgba(0,0,0,0.15)]">

          {/* Decorative blobs */}

          <div className="absolute -top-28 -right-24 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-32 left-10 w-72 h-72 rounded-full bg-brand-yellow/10 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-16 p-10 lg:p-16">

            {/* LEFT */}

            <div>

              <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-xs uppercase tracking-[0.18em] font-bold">
                Transparent Pricing
              </span>

              <h2 className="mt-7 font-serif text-4xl lg:text-6xl font-bold leading-tight text-white">
                Quality tutoring
                <br />
                that fits your
                <br />
                family&apos;s budget.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/70 max-w-xl">
                Flexible monthly plans for every learning stage.
                No hidden fees. No long-term contracts.
                Start with a free academic assessment.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-10">

                {[
                  "Free Academic Assessment",
                  "Weekly Progress Reports",
                  "Small Classes (Max. 6)",
                  "Flexible Learning Schedule",
                  "Qualified Tutors",
                  "One-to-One Available",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-brand-yellow" />
                    </div>

                    <span className="text-sm">{item}</span>
                  </div>
                ))}

              </div>

              <div className="flex flex-wrap gap-4 mt-12">

                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-white text-brand-deepGreen font-bold px-7 py-4 rounded-xl hover:scale-[1.02] transition"
                >
                  View Full Pricing

                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#book"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-4 rounded-xl hover:bg-white/10 transition"
                >
                  Book Free Academic Assessment
                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid gap-5">

              {plans.map((plan) => (

                <div
                  key={plan.name}
                  className={`rounded-3xl p-6 transition-all ${
                    plan.featured
                      ? "bg-brand-yellow text-brand-deepGreen shadow-xl scale-[1.02]"
                      : "bg-white/10 backdrop-blur-lg border border-white/10 text-white"
                  }`}
                >

                  {plan.badge && (
                    <span className="inline-flex mb-4 px-3 py-1 rounded-full bg-brand-deepGreen text-white text-[11px] uppercase font-bold tracking-wider">
                      {plan.badge}
                    </span>
                  )}

                  <h3 className="font-serif text-2xl font-bold">
                    {plan.name}
                  </h3>

                  <div className="mt-5 flex items-end gap-3">

                    <span className="font-serif text-4xl font-bold">
                      {plan.priceNGN}
                    </span>

                    <span
                      className={`text-sm ${
                        plan.featured
                          ? "text-brand-deepGreen/70"
                          : "text-white/60"
                      }`}
                    >
                      /month
                    </span>

                  </div>

                  <p
                    className={`mt-1 ${
                      plan.featured
                        ? "text-brand-deepGreen/70"
                        : "text-white/60"
                    }`}
                  >
                    {plan.priceGBP} per month
                  </p>

                  <div
                    className={`mt-6 pt-5 border-t ${
                      plan.featured
                        ? "border-brand-deepGreen/10"
                        : "border-white/10"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        plan.featured
                          ? "text-brand-deepGreen/80"
                          : "text-white/75"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}