"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type SubjectKey = "math" | "english" | "science";

interface ReportData {
  title: string;
  topic: string;
  leader: string;
  rating: number;
  synopsis: string;
  actionPlan: string;
  badge: string;
}

export default function InteractiveHero() {
  const [activeTab, setActiveTab] = useState<SubjectKey>("math");
  const [animatedRating, setAnimatedRating] = useState(0);

  const targetData: Record<SubjectKey, ReportData> = {
    math: {
      title: "Today's Session Report",
      topic: "Algebraic Factorisation & Quadratic Foundations",
      leader: "Dr. Sarah Jenkins (MSc Mathematics)",
      rating: 92,
      synopsis: "Oliver excelled in binomial expansions today. He self-corrected his sign applications rapidly when working through advanced indices formulas.",
      actionPlan: "Isolate complex fractional brackets next Tuesday.",
      badge: "Focus Rating"
    },
    english: {
      title: "Analytical Essay Architecture",
      topic: "Macbeth Motif Tracking & Critical Evaluation",
      leader: "Jonathan Vance, MA (Oxford University)",
      rating: 95,
      synopsis: "Amelia's thesis statement delivery has matured significantly. She successfully integrated secondary historical context to defend her interpretation of Lady Macbeth's monologue.",
      actionPlan: "Refine embedded textual quotes timing constraints.",
      badge: "Expression Rating"
    },
    science: {
      title: "Advanced STEM Discipline Specialist",
      topic: "Stoichiometry & Chemical Equilibrium Metrics",
      leader: "Elena Rostova, MSc (King's College London)",
      rating: 89,
      synopsis: "Leo completely mastered calculating molar concentrations under stress today. His data-mapping accuracy during the live simulator testing was flawless.",
      actionPlan: "Review exothermic reaction graph structures.",
      badge: "Precision Rating"
    }
  };

  const currentReport = targetData[activeTab];

  // Counter animates from 0 up to target rating on tab switch
  useEffect(() => {
    const duration = 400;
    const steps = currentReport.rating;
    const stepTime = Math.floor(duration / steps);
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setAnimatedRating(current);
      if (current >= steps) clearInterval(timer);
    }, stepTime);

    return () => {
      clearInterval(timer);
      setAnimatedRating(0); // reset on cleanup, before next tab's interval fires
    };
  }, [activeTab, currentReport.rating]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-cream py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-brand-lightGreen/30">

      <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
        <div className="absolute top-[-25%] left-[-15%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-brand-faintGreen via-brand-lightGreen/40 to-transparent blur-[130px] animate-shimmer-mesh" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-brand-yellow/15 via-brand-faintGreen to-transparent blur-[110px] animate-shimmer-mesh" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B2B2004_1px,transparent_1px),linear-gradient(to_bottom,#0B2B2004_1px,transparent_1px)] bg-[size:5rem_5rem] z-0" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">

        {/* Left Column — animate-fadeIn replaces the mounted state trick */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left animate-fadeIn">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-deepGreen tracking-tight leading-[1.1]">
            Premium Tutoring.<br />
            <span className="bg-gradient-to-r from-brand-green via-brand-midGreen to-brand-deepGreen bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              Unrivaled Transparency.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-brand-mutedSage max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Schoolhelphub is an online educational institution providing live tutoring, <br /> exam preparation, group and one-on-one classes, and structured academic progress tracking for students aged 5–16 across the United Kingdom and United States.
          </p>

          <p className="text-base sm:text-lg text-brand-mutedSage max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            We bridge the gap between world-class education and complete parental visibility. Click through the live dashboard simulator on the right to see the deep accountability analytics generated for you after every single lesson.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="/free-trial"
              className="w-full sm:w-auto text-center bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-4 rounded-xl text-sm transition-all duration-150 shadow-md-brand hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm-brand tap-target"
            >
              Book Your Free Trial Session
            </Link>
            
            <a
              href="#pricing"
              className="w-full sm:w-auto text-center bg-white hover:bg-brand-cream text-brand-deepGreen border border-brand-lightGreen font-bold px-8 py-4 rounded-xl text-sm transition-all duration-150 shadow-sm-brand hover:-translate-y-0.5 active:translate-y-0 tap-target"
            >
              View Tier Pricing
            </a>
          </div>
        </div>

        {/* Right Side Panel — animate-fadeIn replaces mounted state */}
        <div className="lg:col-span-5 w-full animate-fadeIn">
          <div className="bg-white border border-brand-lightGreen p-1.5 rounded-3xl shadow-md-brand relative group">

            <div className="bg-[#0B2B20] text-white px-4 py-3 rounded-t-[22px] flex items-center justify-between text-[10px] tracking-wider font-semibold">
              <div className="flex gap-1.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex gap-2 items-center text-brand-lightGreen">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="uppercase text-[9px] font-bold">LIVE METRIC SIMULATOR</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-white rounded-b-[22px] space-y-6">
              <div className="flex gap-2 border-b border-brand-lightGreen/40 pb-3 overflow-x-auto scrollbar-none">
                {(["math", "english", "science"] as SubjectKey[]).map((subj) => (
                  <button
                    key={subj}
                    onClick={() => setActiveTab(subj)}
                    className={`text-xs px-3 py-2 rounded-lg font-bold capitalize transition-all duration-200 flex-shrink-0 outline-none ${activeTab === subj
                      ? "bg-brand-green text-white shadow-sm"
                      : "text-brand-mutedSage hover:text-brand-deepGreen hover:bg-brand-faintGreen"
                    }`}
                  >
                    {subj} Progress
                  </button>
                ))}
              </div>

              <div key={activeTab} className="space-y-4 animate-fadeIn">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1 flex-grow">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-midGreen block">
                      {currentReport.title}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-brand-deepGreen leading-snug">
                      {currentReport.topic}
                    </h3>
                    <p className="text-xs text-brand-mutedSage font-medium">
                      Assigned Academic Leader: <strong className="text-brand-deepGreen font-semibold">{currentReport.leader}</strong>
                    </p>
                  </div>

                  <div className="bg-brand-faintGreen border border-brand-lightGreen px-3 py-2 rounded-xl text-center flex-shrink-0 min-w-[64px] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <span className="block text-lg font-serif font-bold text-brand-green">
                      {animatedRating}%
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-brand-mutedSage font-bold block scale-90 whitespace-nowrap">
                      {currentReport.badge}
                    </span>
                  </div>
                </div>

                <div className="bg-brand-faintGreen/40 border-l-4 border-brand-green p-4 rounded-r-xl space-y-1 relative overflow-hidden transition-all duration-300 hover:bg-brand-faintGreen/60">
                  <h4 className="text-xs font-bold text-brand-deepGreen uppercase tracking-wider">Tutor Performance Synopsis</h4>
                  <p className="text-xs text-brand-textNearBlack/90 leading-relaxed font-medium">
                    {currentReport.synopsis}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-shimmer pointer-events-none" />
                </div>

                <div className="bg-brand-yellow/10 border-l-4 border-brand-yellow p-4 rounded-r-xl space-y-1">
                  <h4 className="text-xs font-bold text-brand-deepGreen uppercase tracking-wider">Targeted Action Plan (Next Lesson)</h4>
                  <p className="text-xs text-brand-mutedSage leading-relaxed font-semibold">
                    {currentReport.actionPlan}
                  </p>
                </div>
              </div>

              <div className="text-center pt-2">
                <span className="text-[10px] tracking-wider text-brand-midGreen font-semibold animate-pulse bg-brand-faintGreen px-2.5 py-1 rounded-full border border-brand-lightGreen/50">
                  💡 Click different subject tabs above to live test parental data reporting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}