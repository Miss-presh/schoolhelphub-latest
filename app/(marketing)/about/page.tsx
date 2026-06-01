"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: "🎖️",
      title: "Top 5% Academic Educators",
      desc: "We do not hire student peers. Every single tutor is a fully vetted, background-checked academic specialist with a proven track record of school board excellence.",
    },
    {
      icon: "👁️",
      title: "Radical Parental Visibility",
      desc: "No more wondering what happens behind closed doors. You receive comprehensive micro-analytics logs, focus grading scores, and specific next-step goals within 15 minutes of every lesson.",
    },
    {
      icon: "🎯",
      title: "Curriculum Synchronicity",
      desc: "Our lessons map precisely to the target learner's upcoming school exams, targeting weaknesses before they translate into class frustration or bad grades.",
    },
  ];

  const team = [
    {
      name: "Dr. Elizabeth Vance",
      role: "Head of Academic Matching & Strategy",
      bio: "Former UK Secondary Assistant Headteacher with 15+ years managing baseline diagnostic matching workflows and regional curriculum compliance.",
      image: "🎓",
    },
    {
      name: "Marcus Thornton, MSc",
      role: "Director of STEM Curriculum",
      bio: "Ex-Oxfam Educational Coordinator specializing in accelerated Mathematics and Physics transitions for early admissions candidates.",
      image: "🧬",
    },
  ];

  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">
      
      {/* 1. Elite Hero Accent Section */}
      <section className="relative py-20 bg-brand-faintGreen border-b border-brand-lightGreen/60 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold font-sans tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            Our Mission & Creed
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-deepGreen tracking-tight leading-tight">
            Restoring Trust and Transparency to <br className="hidden sm:inline" /> Premium Online Private Education
          </h1>
          <p className="text-base sm:text-lg text-brand-mutedSage font-sans max-w-2xl mx-auto leading-relaxed">
            Schoolhelphub was founded to close the gap between world-class elite academic support and complete, uncompromised parental visibility.
          </p>
        </div>
      </section>

      {/* 2. Deep Dive Pillars */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-brand-cream border border-brand-lightGreen/80 p-8 rounded-2xl shadow-sm-brand transition-all duration-200 hover:-translate-y-1 hover:shadow-md-brand"
              >
                <span className="text-3xl bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner border border-brand-lightGreen mb-6">
                  {val.icon}
                </span>
                <h3 className="text-xl font-serif font-bold text-brand-deepGreen mb-3">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-mutedSage leading-relaxed font-sans font-medium">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership & Academic Board (Establishes High Authority) */}
      <section className="py-24 bg-brand-faintGreen/40 border-t border-b border-brand-lightGreen/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-serif font-bold text-brand-deepGreen">
              The Academic Coordination Board
            </h2>
            <p className="text-sm text-brand-mutedSage">
              Our network operations are completely designed and vetted by seasoned professional school administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white border border-brand-lightGreen p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="text-4xl bg-brand-cream w-16 h-16 rounded-full flex items-center justify-center border border-brand-lightGreen flex-shrink-0">
                  {member.image}
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-lg font-serif font-bold text-brand-deepGreen">
                    {member.name}
                  </h3>
                  <span className="block text-xs font-bold text-brand-midGreen uppercase tracking-wider">
                    {member.role}
                  </span>
                  <p className="text-xs sm:text-sm text-brand-mutedSage leading-relaxed font-sans pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Secondary Conversion Callout Row */}
      <section className="py-20 bg-brand-deepGreen text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-lightGreen">
            Experience the Absolute Schoolhelphub Difference
          </h2>
          <p className="text-xs sm:text-sm text-brand-mutedSage max-w-xl mx-auto leading-relaxed">
            Secure your risk-free primary assessment lesson today. Get clear diagnostics charts showing your learner&apos;s exact current baseline metrics.
          </p>
          <div className="pt-4">
            <Link 
              href="/free-trial" 
              className="bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-150 shadow-md-brand inline-block tap-target"
            >
              Initialize Free Evaluation Lesson
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}