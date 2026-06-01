"use client";

import React from "react";
import Link from "next/link";

export default function TestimonialsPage() {
  const metrics = [
    { value: "4.9/5", label: "Trustpilot Parent Rating" },
    { value: "94%", label: "Target Board Progression Rate" },
    { value: "12,000+", label: "Vetted Instruction Hours Delivered" },
  ];

  const stories = [
    {
      quote: "Before discovering Schoolhelphub, our daughter suffered from massive mathematics anxiety leading up to her GCSEs. The baseline diagnostic evaluation matched her with Dr. Sarah, who restructured her entire study system. She didn't just pass; she achieved an absolute top tier grade.",
      author: "Marcus & Elianne K.",
      location: "London, UK",
      studentAge: "Year 11 Student (GCSE Tracks)",
      outcome: "Outcome: Grade 5 baseline accelerated to a Grade 9 final score",
      icon: "🏡",
    },
    {
      quote: "The radical accountability logs are what set this service completely apart. Receiving a granular progress chart and specific feedback notes within 15 minutes of every single lesson keeps us entirely aligned with his private school curriculum milestones.",
      author: "David L.",
      location: "New York, USA",
      studentAge: "Grade 7 Student (Advanced STEM Spectrum)",
      outcome: "Outcome: Mastered pre-algebra frameworks 4 months ahead of syllabus schedules",
      icon: "🏙️",
    },
    {
      quote: "Finding a secure, background-checked tutor who actually understands the strict 11+ Independent School board entry demands felt impossible. Schoolhelphub handled the entire administrative vetting layer seamlessly. Unbelievably professional.",
      author: "Helena G.",
      location: "Surrey, UK",
      studentAge: "Ages 10 Prep (11+ Entrance Exam)",
      outcome: "Outcome: Secured placement offers at both target independent academies",
      icon: "🌳",
    },
  ];

  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">
      
      {/* 1. Header Validation Fold */}
      <section className="py-20 bg-brand-faintGreen border-b border-brand-lightGreen/60 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            Parental Validation
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-deepGreen tracking-tight leading-tight">
            Real Transformations. Uncompromised Progress.
          </h1>
          <p className="text-base sm:text-lg text-brand-mutedSage max-w-2xl mx-auto leading-relaxed">
            Read how our 1-on-1 expert school teacher matching framework turns classroom frustration into absolute academic confidence.
          </p>
        </div>
      </section>

      {/* 2. High-Authority Metric Banner */}
      <section className="bg-brand-deepGreen py-12 px-4 border-b-2 border-brand-green">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {metrics.map((met, idx) => (
            <div key={idx} className="space-y-1">
              <span className="block text-3xl sm:text-4xl font-serif font-bold text-brand-yellow">
                {met.value}
              </span>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-lightGreen/80">
                {met.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Long-Form Testimonial Board */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className="bg-brand-cream border border-brand-lightGreen/80 p-8 sm:p-10 rounded-2xl shadow-sm-brand flex flex-col md:flex-row gap-6 items-start transition-all duration-200 hover:border-brand-green/20 hover:bg-white"
            >
              {/* Context Block Icon */}
              <div className="text-3xl bg-white w-14 h-14 rounded-xl flex items-center justify-center border border-brand-lightGreen shadow-inner flex-shrink-0">
                {story.icon}
              </div>

              {/* Text Area */}
              <div className="space-y-4 flex-grow">
                <p className="text-sm sm:text-base text-brand-textNearBlack font-serif italic leading-relaxed">
                  &quot;{story.quote}&quot;
                </p>
                
                <div className="pt-2 border-t border-brand-lightGreen/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-brand-deepGreen">
                      {story.author} <span className="font-normal text-brand-mutedSage font-sans">({story.location})</span>
                    </h4>
                    <span className="text-xs text-brand-mutedSage font-medium block">
                      {story.studentAge}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-brand-midGreen bg-brand-lightGreen px-3 py-1 rounded-md border border-brand-green/5 self-start sm:self-center">
                    {story.outcome}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom High-Conversion Hook */}
      <section className="py-20 bg-brand-deepGreen text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-lightGreen">
            Ready to Build Your Child&apos;s Success Blueprint?
          </h2>
          <p className="text-xs sm:text-sm text-brand-mutedSage max-w-xl mx-auto leading-relaxed">
            Join thousands of parents who have substituted home study panic with clear, data-driven milestone tracking.
          </p>
          <div className="pt-4">
            <Link 
              href="/free-trial" 
              className="bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-150 shadow-md-brand inline-block tap-target"
            >
              Secure Your Evaluation Session
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}