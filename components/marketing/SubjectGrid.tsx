"use client";

const subjects = [
  {
    icon: "📐",
    name: "Mathematics",
    desc: "Number, algebra, geometry and statistics from primary through GCSE.",
    tags: ["Ages 5–16", "11+", "GCSE", "WAEC"],
    gradient: "from-blue-50 to-indigo-50",
    accent: "bg-blue-100",
  },
  {
    icon: "📖",
    name: "English Language & Literature",
    desc: "Comprehension, creative writing, grammar and essay craft.",
    tags: ["Ages 5–16", "KS2–KS3", "GCSE", "BECE"],
    gradient: "from-amber-50 to-orange-50",
    accent: "bg-amber-100",
  },
  {
    icon: "🔬",
    name: "Science",
    desc: "Biology, Chemistry and Physics — UK & Nigerian curriculum aligned.",
    tags: ["Secondary", "GCSE", "WAEC", "NECO"],
    gradient: "from-emerald-50 to-teal-50",
    accent: "bg-emerald-100",
  },
  {
    icon: "💻",
    name: "Coding & Technology",
    desc: "Python, data skills and computational thinking from first principles.",
    tags: ["All Ages", "Python", "Web Dev"],
    gradient: "from-cyan-50 to-sky-50",
    accent: "bg-cyan-100",
  },
  {
    icon: "🗣️",
    name: "Languages",
    desc: "French and Spanish — conversational fluency and curriculum grammar.",
    tags: ["All Ages", "French", "Spanish"],
    gradient: "from-rose-50 to-pink-50",
    accent: "bg-rose-100",
  },
  {
    icon: "🎯",
    name: "Exam Preparation",
    desc: "Specialist coaching for 11+, GCSE, WAEC, BECE, SAT and ACT.",
    tags: ["11+", "GCSE", "WAEC", "SAT/ACT"],
    gradient: "from-purple-50 to-fuchsia-50",
    accent: "bg-purple-100",
  },
];

export default function SubjectGrid() {
  return (
    <section id="subjects" className="py-5 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4 reveal">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-deepGreen">
          What Do You <em className="italic text-brand-midGreen">Want to Learn?</em>
          </h2>
          <p className="text-brand-mutedSage font-light text-base">
            Primary through Secondary exam prep, core subjects, and skills for life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map((s, i) => (
            <div
              key={i}
              className={`reveal-scale delay-${Math.min((i % 3 + 1) * 100, 300)} group relative bg-white border border-brand-lightGreen rounded-2xl p-6 hover:shadow-lg hover:shadow-brand-green/8 hover:border-brand-green/25 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl`} />

              {/* Arrow top-right */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-brand-faintGreen flex items-center justify-center text-brand-midGreen text-xs opacity-0 group-hover:opacity-100 group-hover:bg-brand-yellow group-hover:text-brand-deepGreen transition-all duration-300">
                →
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 ${s.accent} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {s.icon}
                </div>

                <h3 className="font-serif font-bold text-brand-deepGreen text-base mb-2 group-hover:text-brand-midGreen transition-colors duration-200">
                  {s.name}
                </h3>
                <p className="text-brand-mutedSage text-sm leading-relaxed mb-4 font-light">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold bg-brand-faintGreen text-brand-green px-2.5 py-1 rounded-full tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
