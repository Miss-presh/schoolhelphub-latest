"use client";

import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const tiers = [
    {
      title: "Primary Key Stage Frameworks",
      age: "Ages 5 - 11 (Key Stage 1 & 2 / Grades K-5)",
      description: "Cultivating computational agility, core literacy foundations, and sharp analytical confidence early on.",
      subjects: ["Mathematics Core Foundations", "Phonics & Reading Comprehension", "Early Creative Writing & Syntax", "11+ & Independent School Entrance Prep"],
      badge: "Foundational Level",
    },
    {
      title: "Secondary Excellence Modules",
      age: "Ages 11 - 16 (Key Stage 3 & 4 / GCSE / Grades 6-10)",
      description: "Targeted focus on complex academic disciplines, rigorous exam-board prep, and study system strategies.",
      subjects: ["Advanced Mathematics (GCSE/IGCSE)", "English Language & Literature", "Separate & Combined Sciences (Bio, Chem, Phys)", "Computer Science Foundations (Python/Logic)"],
      badge: "Excellence Level",
    },
  ];

  const deliveryFeatures = [
    { title: "Custom Mapping", desc: "We synchronize directly with your child's specific current school syllabus and exam board requirements.", icon: "🗺️" },
    { title: "Adaptive Progression", desc: "No generic worksheets. Lessons dynamically scale in difficulty based on continuous session metrics.", icon: "📈" },
    { title: "Immediate Feedback Loop", desc: "Comprehensive micro-analytics and accountability logs are sent straight to your device within 15 minutes.", icon: "⚡" },
  ];

  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">
      
      {/* 1. Services Header Fold */}
      <section className="py-20 bg-brand-faintGreen border-b border-brand-lightGreen/60 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            Curriculum Spectrum
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-deepGreen tracking-tight leading-tight">
            Elite Academic Tracks Built for Absolute Success
          </h1>
          <p className="text-base sm:text-lg text-brand-mutedSage max-w-2xl mx-auto leading-relaxed">
            From baseline primary confidence to highly competitive secondary exam performance, explore our structured curriculum lines.
          </p>
        </div>
      </section>

      {/* 2. Tier Deep Dive Display */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className="bg-brand-cream border border-brand-lightGreen rounded-3xl p-8 sm:p-12 shadow-sm-brand flex flex-col lg:flex-row gap-8 items-start justify-between"
            >
              <div className="max-w-xl space-y-4">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-midGreen bg-white px-3 py-1 rounded-md border border-brand-lightGreen">
                  {tier.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-deepGreen">
                  {tier.title}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-brand-mutedSage">
                  {tier.age}
                </p>
                <p className="text-sm text-brand-mutedSage leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="w-full lg:max-w-md bg-white border border-brand-lightGreen/60 rounded-2xl p-6 sm:p-8 shadow-inner">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-deepGreen mb-4 pb-2 border-b border-brand-lightGreen/40">
                  Core Instruction Specialisms:
                </h3>
                <ul className="space-y-3.5">
                  {tier.subjects.map((sub, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-brand-textNearBlack">
                      <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Operational Delivery Standards Block */}
      <section className="py-24 bg-brand-faintGreen/40 border-t border-b border-brand-lightGreen/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-serif font-bold text-brand-deepGreen">
              How Academic Delivery Is Structured
            </h2>
            <p className="text-sm text-brand-mutedSage">
              We replace guesswork with strict data-driven instructional pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white border border-brand-lightGreen p-8 rounded-2xl shadow-sm text-center space-y-4">
                <div className="text-3xl bg-brand-cream w-14 h-14 rounded-xl flex items-center justify-center border border-brand-lightGreen mx-auto">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-deepGreen">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-mutedSage leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom High-Intent Conversion Fold */}
      <section className="py-20 bg-brand-deepGreen text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-lightGreen">
            Not Sure Which Track Fits Best?
          </h2>
          <p className="text-xs sm:text-sm text-brand-mutedSage max-w-xl mx-auto leading-relaxed">
            Let an Academic Lead assess your child&apos;s specific milestones during a completely free 1-on-1 diagnostic lesson.
          </p>
          <div className="pt-4">
            <Link 
              href="/free-trial" 
              className="bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-150 shadow-md-brand inline-block tap-target"
            >
              Configure Free Trial Matching
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}