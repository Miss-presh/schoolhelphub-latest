"use client";

import Link from "next/link";


const steps = [
  { num: "01", icon: "📚", title: "Choose a Subject", desc: "Maths, English, Science, Coding, Languages, or Exam Prep." },
  { num: "02", icon: "📅", title: " Book a Free Academic Assessment", desc: "Select your location, no payment, no commitment." },
  { num: "03", icon: "💻", title: "Attend Live Class", desc: "Join an interactive online session, recorded for replay." },
  { num: "04", icon: "📋", title: "Get Your Report", desc: "Full written tutor report in your inbox within 24 hours." },
  { num: "05", icon: "📈", title: "Track & Grow", desc: "Subscribe monthly and watch confidence build." },
];

export default function HowitWorks() {
  return (
    <section id="how-it-works" className="py-8 bg-brand-faintGreen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 reveal">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-deepGreen">
            How <em className="italic text-brand-midGreen">Schoolhelphub</em> Works?
          </h2>
          <p className="text-brand-mutedSage text-base font-light">
            From first enquiry to measurable results, everything is handled.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Connector line — desktop only */}
          <div className="absolute hidden lg:block top-[38px] left-[calc(10%+20px)] right-[calc(10%+20px)] h-0.5 bg-gradient-to-r from-brand-green to-brand-yellow" />

          {steps.map((s, i) => (
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} relative flex flex-col items-center text-center group cursor-default`}
            >
              {/* Circle */}
              <div className="relative z-10 w-[76px] h-[76px] rounded-full bg-white border-2 border-brand-lightGreen flex items-center justify-center shadow-md mb-6 transition-all duration-300 group-hover:border-brand-yellow group-hover:shadow-lg group-hover:shadow-brand-yellow/15 group-hover:scale-105">
                <span className="text-2xl">{s.icon}</span>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-green text-white rounded-full text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-serif font-bold text-brand-deepGreen text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-brand-mutedSage leading-relaxed max-w-[160px]">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center reveal delay-600">
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-midGreen text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 tap-target"
          >
            Book a Free Academic Assessment →
          </Link>
        </div>
      </div>
    </section>
  );
}
