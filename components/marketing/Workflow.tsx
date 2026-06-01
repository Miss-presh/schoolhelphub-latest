"use client";

import React from "react";
import Link from "next/link";

export default function Workflow() {
  const steps = [
    { num: "01", title: "Book a Free Trial", desc: "Select your child's age group and target curriculum area in under 60 seconds." },
    { num: "02", title: "Academic Matching", desc: "Our coordinators assign a background-checked subject matter specialist expert." },
    { num: "03", title: "The Assessment Class", desc: "A 1-on-1 live interactive baseline dynamic lesson mapping out core strengths." },
    { num: "04", title: "Review Your Dashboard", desc: "Access full grading analytics data charts and personalized tutor notes instantly." },
    { num: "05", title: "Structured Learning", desc: "Begin targeted matching milestone schedules tailored entirely to custom school targets." },
  ];

  return (
    <section id="process" className="py-20 bg-brand-faintGreen border-b border-brand-lightGreen/60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-sans tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            The Journey Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-deepGreen">
            Five Steps to Complete Academic Confidence
          </h2>
          <p className="text-sm sm:text-base text-brand-mutedSage leading-relaxed">
            We make premium academic advancement predictable, transparent, and completely stress-free for modern families.
          </p>
        </div>

        {/* Desktop Timeline Flow vs Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group bg-white border border-brand-lightGreen p-6 rounded-2xl shadow-sm-brand transition-all duration-200 hover:-translate-y-1 hover:shadow-md-brand">
              <div className="flex justify-between items-start mb-4">
                <span className="font-serif text-3xl font-bold text-brand-yellow group-hover:text-brand-green transition-colors duration-200">
                  {step.num}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-midGreen/40 group-hover:bg-brand-green" />
              </div>
              <h3 className="text-base font-serif font-bold text-brand-deepGreen mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-mutedSage font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/free-trial" 
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-midGreen text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-200 tap-target"
          >
            Secure Your Free Baseline Lesson Today
          </Link>
        </div>
      </div>
    </section>
  );
}