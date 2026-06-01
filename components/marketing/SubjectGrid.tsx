"use client";

import React from "react";

export default function SubjectGrid() {
  const subjects = [
    { title: "Mathematics Core", levels: "KS1-4 • GCSE • 11+ Prep • AP Calc", icon: "📐", color: "from-blue-50 to-indigo-50" },
    { title: "English & Writing", levels: "Phonics • Comprehension • Creative • Language", icon: "✍️", color: "from-amber-50 to-orange-50" },
    { title: "Sciences Tier", levels: "Biology • Chemistry • Physics • Integrated", icon: "🔬", color: "from-emerald-50 to-teal-50" },
    { title: "11+ & Entrance Exams", levels: "Verbal Reasoning • Non-Verbal • Mock Strategy", icon: "🎯", color: "from-purple-50 to-fuchsia-50" },
    { title: "Computer Science", levels: "Scratch Blocks • Python Basics • Web Stack Dev", icon: "💻", color: "from-cyan-50 to-sky-50" },
    { title: "Modern Languages", levels: "French Foundation • Spanish Speaking • Academic GCSE", icon: "🗣️", color: "from-rose-50 to-pink-50" },
  ];

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            Curriculum Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-deepGreen">
            Specialized Instruction for Ages 5 to 16
          </h2>
          <p className="text-sm sm:text-base text-brand-mutedSage">
            All learning tracks are custom-tailored directly to regional educational boards across the UK and United States.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((sub, idx) => (
            <div 
              key={idx} 
              className="group bg-brand-cream border border-brand-lightGreen p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:bg-white hover:shadow-md-brand hover:border-brand-green/30"
            >
              <span className="text-3xl p-3 bg-white rounded-xl shadow-sm border border-brand-lightGreen/60 group-hover:scale-110 transition-transform duration-200">
                {sub.icon}
              </span>
              <div>
                <h3 className="text-base font-serif font-bold text-brand-deepGreen group-hover:text-brand-midGreen transition-colors duration-200">
                  {sub.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-mutedSage mt-1 font-sans leading-relaxed">
                  {sub.levels}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}