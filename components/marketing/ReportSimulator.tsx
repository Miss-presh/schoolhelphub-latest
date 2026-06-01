"use client";

import React, { useState } from "react";

type SubjectTab = "math" | "english" | "science";

export default function ReportSimulator() {
  const [activeTab, setActiveTab] = useState<SubjectTab>("math");

  const reports = {
    math: {
      topic: "Algebraic Factorisation & Quadratic Foundations",
      date: "Today's Session Report",
      score: "92%",
      tutor: "Dr. Sarah Jenkins (MSc Mathematics)",
      summary: "Oliver excelled in binomial expansions today. He self-corrected his sign applications rapidly when working through advanced indices formulas.",
      nextSteps: "Isolate complex fractional brackets next Tuesday.",
    },
    english: {
      topic: "Analytical Narrative Structure & Textual Inference",
      date: "Yesterday's Session Report",
      score: "88%",
      tutor: "James Harrison (BA Oxon English Literature)",
      summary: "Exceptional analytical depth demonstrated during our critique of historical motifs. Focus was placed heavily on embedding quote integration rules.",
      nextSteps: "Refine comparative introductory thesis statements.",
    },
    science: {
      topic: "Mitotic Cellular Division & Genetic Mutation",
      date: "2 Days Ago",
      score: "95%",
      tutor: "Prof. Alan Vance (PhD Biochemistry)",
      summary: "Flawless identification of chronological stage steps during cellular replication. Oliver handled complex terminology with absolute clarity.",
      nextSteps: "Introduce competitive metabolic synthesis models.",
    }
  };

  return (
    <div className="w-full max-w-xl bg-white border border-brand-lightGreen rounded-2xl shadow-lg-brand overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Simulator Frame Controls */}
      <div className="bg-brand-deepGreen px-6 py-4 flex items-center justify-between border-b border-brand-green">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs font-mono tracking-wider text-brand-lightGreen/70">LIVE PARENT DASHBOARD REPORT SIMULATOR</span>
      </div>

      {/* Simulator Navigation Tabs */}
      <div className="bg-brand-faintGreen border-b border-brand-lightGreen p-2 flex gap-1.5 overflow-x-auto">
        {(["math", "english", "science"] as SubjectTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap capitalize transition-all duration-200 tap-target ${
              activeTab === tab
                ? "bg-brand-green text-white shadow-sm"
                : "text-brand-mutedSage hover:bg-brand-lightGreen hover:text-brand-deepGreen"
            }`}
          >
            {tab} Progress
          </button>
        ))}
      </div>

      {/* Live Content Presentation Box */}
      <div className="p-6 space-y-5 animate-fadeIn">
        <div className="flex items-start justify-between gap-4 border-b border-brand-lightGreen/60 pb-4">
          <div>
            <span className="text-xs font-bold text-brand-midGreen uppercase tracking-wider">{reports[activeTab].date}</span>
            <h3 className="text-lg font-serif font-bold text-brand-deepGreen mt-0.5">{reports[activeTab].topic}</h3>
            <p className="text-xs text-brand-mutedSage mt-1">Assigned Academic Leader: <strong className="text-brand-deepGreen font-medium">{reports[activeTab].tutor}</strong></p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold font-serif text-brand-green bg-brand-lightGreen px-3 py-1 rounded-xl border border-brand-green/10">
              {reports[activeTab].score}
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-brand-mutedSage block mt-1">Focus Rating</span>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <div className="bg-brand-faintGreen border-l-4 border-brand-green p-4 rounded-r-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen mb-1">Tutor Performance Synopsis</h4>
            <p className="text-brand-textNearBlack font-normal leading-relaxed">{reports[activeTab].summary}</p>
          </div>

          <div className="bg-brand-softYellow/40 border-l-4 border-brand-yellow p-4 rounded-r-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen mb-1">Targeted Action Plan (Next Lesson)</h4>
            <p className="text-brand-textNearBlack font-normal leading-relaxed">{reports[activeTab].nextSteps}</p>
          </div>
        </div>
      </div>
    </div>
  );
}