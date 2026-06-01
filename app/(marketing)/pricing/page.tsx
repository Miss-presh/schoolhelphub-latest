"use client";

import React from "react";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";

export default function DedicatedPricingPage() {
  const { currency, setCurrency } = useCurrency();

  const tiers = [
    {
      name: "Primary Core Tier",
      age: "Ages 5 - 11 • Key Stage 1 & 2 / Grades K-5",
      price: { GBP: "35", USD: "45" },
      description: "Ideal for establishing foundational mathematics confidence, core reading comprehension, and competitive 11+ entry prep.",
      features: [
        "1-on-1 Session with Qualified School Teacher",
        "Custom Match Based on Student Learning Style",
        "Direct School Syllabus Synchronization",
        "Post-Lesson Micro-Analytics Reporting (15 Mins)",
        "Complimentary Monthly Mock Simulations",
        "Direct Coordinator WhatsApp Hotline Access",
      ],
      cta: "Initialize Primary Track",
    },
    {
      name: "Secondary Excellence",
      age: "Ages 11 - 16 • Key Stage 3 & 4 / GCSE / Grades 6-10",
      price: { GBP: "45", USD: "60" },
      description: "Rigorous, exam-board specific instruction targeting top marks in GCSEs, AP modules, and critical school transitions.",
      features: [
        "Specialist Subject Lead Teacher Assignment",
        "Exam-Board Specific Strategy & Mock Evaluation",
        "Advanced Study System & Note-Taking Frameworks",
        "Post-Lesson Micro-Analytics Reporting (15 Mins)",
        "24/7 Digital Student Performance Portal Access",
        "Priority Assignment Routing & Fast-Track Rescheduling",
      ],
      cta: "Initialize Secondary Track",
    },
  ];

  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">
      
      {/* 1. Header Hero Fold */}
      <section className="py-20 bg-brand-faintGreen border-b border-brand-lightGreen/60 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-5">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            Transparent Investment
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-deepGreen tracking-tight leading-tight">
            Predictable Hourly Rates. <br /> Zero Hidden Fees.
          </h1>
          <p className="text-base sm:text-lg text-brand-mutedSage max-w-2xl mx-auto leading-relaxed">
            We believe premium private tutoring should be transparent. Select your localized currency framework below to view our global standard pricing modules.
          </p>

          {/* Page-Level Currency Toggle Synchronizer */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex bg-white p-1 rounded-xl border border-brand-lightGreen shadow-sm">
              <button
                onClick={() => setCurrency("GBP")}
                className={`px-5 py-2 rounded-lg text-xs font-bold transition-all duration-200 uppercase tracking-wider cursor-pointer ${
                  currency === "GBP"
                    ? "bg-brand-deepGreen text-white shadow-sm"
                    : "text-brand-mutedSage hover:text-brand-deepGreen"
                }`}
              >
                GBP (£) Rates
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-5 py-2 rounded-lg text-xs font-bold transition-all duration-200 uppercase tracking-wider cursor-pointer ${
                  currency === "USD"
                    ? "bg-brand-deepGreen text-white shadow-sm"
                    : "text-brand-mutedSage hover:text-brand-deepGreen"
                }`}
              >
                USD ($) Rates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Matrix Row */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div 
              key={idx}
              className="bg-brand-cream border border-brand-lightGreen p-8 sm:p-12 rounded-3xl shadow-sm-brand flex flex-col justify-between transition-all duration-300 hover:shadow-md-brand hover:border-brand-green/30"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-midGreen uppercase tracking-widest block mb-1">
                    {tier.age}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-deepGreen">
                    {tier.name}
                  </h2>
                </div>

                <p className="text-sm text-brand-mutedSage font-sans leading-relaxed">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1 py-4 border-y border-brand-lightGreen/60">
                  <span className="text-5xl font-serif font-bold text-brand-deepGreen transition-all duration-150">
                    {currency === "GBP" ? "£" : "$"}
                    {currency === "GBP" ? tier.price.GBP : tier.price.USD}
                  </span>
                  <span className="text-sm font-semibold text-brand-mutedSage">/ per hour premium rate</span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">
                    Included Operational Standards:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-textNearBlack font-medium">
                        <span className="text-brand-green font-bold flex-shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-10">
                <Link
                  href="/free-trial"
                  className="block w-full text-center bg-brand-green hover:bg-brand-midGreen text-white font-bold py-4 px-6 rounded-xl transition-all duration-150 shadow-sm-brand tap-target text-sm"
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Reassurance Policy Banner */}
      <section className="py-16 bg-brand-faintGreen/40 border-t border-brand-lightGreen/60 text-center px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-1">
            <h5 className="font-serif font-bold text-brand-deepGreen text-base">Pay-As-You-Learn</h5>
            <p className="text-xs text-brand-mutedSage">No upfront monthly bulk package commitments required.</p>
          </div>
          <div className="space-y-1">
            <h5 className="font-serif font-bold text-brand-deepGreen text-base">Tutor Swap Guarantee</h5>
            <p className="text-xs text-brand-mutedSage">Request an academic coordinator shift matches at any time instantly.</p>
          </div>
          <div className="space-y-1">
            <h5 className="font-serif font-bold text-brand-deepGreen text-base">100% Secure Processing</h5>
            <p className="text-xs text-brand-mutedSage">Fully encrypted invoicing frameworks built for parental safety.</p>
          </div>
        </div>
      </section>

    </div>
  );
}