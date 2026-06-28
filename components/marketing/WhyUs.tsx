import Link from "next/link";

const reasons = [
  {
    icon: "📋",
    title: "Written Report After Every Session",
    body: "Every lesson ends with a detailed written report sent directly to you, what was covered, how your child did, and exactly what to focus on next. No guessing.",
    tag: "Unique to us",
    tagStyle: "bg-brand-yellow/15 text-brand-deepGreen border border-brand-yellow/30",
  },
  {
    icon: "👩🏾‍🏫",
    title: "Qualified Nigerian & UK Teachers",
    body: "All tutors hold a university degree and teaching certification. Many are former school teachers with experience in WAEC, GCSE, 11+ and NECO curricula.",
    tag: "Verified tutors",
    tagStyle: "bg-brand-lightGreen text-brand-green border border-brand-green/15",
  },
  {
    icon: "📈",
    title: "Real, Measurable Results",
    body: "Our students average a 2-grade improvement within 3 months. From E8 to B2 in WAEC Maths. From Grade 4 to Grade 8 in GCSE Science. We track every student's progress.",
    tag: "Proven outcomes",
    tagStyle: "bg-brand-lightGreen text-brand-green border border-brand-green/15",
  },
  {
    icon: "🌍",
    title: "Built for Nigeria & the UK",
    body: "The only tutoring service that covers both WAEC, BECE, NECO *and* UK GCSE, 11+, KS2/KS3 in a single programme with teachers who know both systems from the inside.",
    tag: "Nigeria + UK",
    tagStyle: "bg-brand-yellow/15 text-brand-deepGreen border border-brand-yellow/30",
  },
  {
    icon: "🕐",
    title: "Flexible — Morning, Afternoon or Evening",
    body: "Classes run across all time zones to suit families in Lagos or London. Choose times that fit school runs and family life not the other way around.",
    tag: "All timezones",
    tagStyle: "bg-brand-lightGreen text-brand-green border border-brand-green/15",
  },
  {
    icon: "🎯",
    title: "Curriculum-Aligned, Exam-Focused",
    body: "Lessons are mapped to the exact syllabus your child follows. No generic content, every session prepares them for the real exams that determine their future.",
    tag: "Exam-ready",
    tagStyle: "bg-brand-yellow/15 text-brand-deepGreen border border-brand-yellow/30",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-brand-faintGreen px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Subtle background shape */}
      <div className="absolute bottom-0 right-[-5%] w-80 h-80 bg-brand-lightGreen/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-white px-4 py-1.5 rounded-full border border-brand-green/10 shadow-sm">
            <span className="w-4 h-px bg-brand-midGreen" />
            Why Parents Choose Us
            <span className="w-4 h-px bg-brand-midGreen" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-deepGreen">
            Real Support That<br />
            <em className="italic text-brand-midGreen">Actually Works</em>
          </h2>
          <p className="text-brand-mutedSage font-light text-base leading-relaxed">
            These are the reasons families stay with Schoolhelphub year after year, no signup needed to see the difference.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`reveal delay-${Math.min((i % 3 + 1) * 100, 300)} group bg-white rounded-2xl p-7 border border-brand-lightGreen/70 shadow-sm hover:shadow-lg hover:border-brand-green/25 hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-faintGreen flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>

              {/* Tag */}
              <span className={`inline-block text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full mb-3 ${r.tagStyle}`}>
                {r.tag}
              </span>

              {/* Content */}
              <h3 className="font-serif text-lg font-bold text-brand-deepGreen mb-2 leading-snug">
                {r.title}
              </h3>
              <p className="text-brand-mutedSage text-sm font-light leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 reveal delay-300">
          <div className="bg-brand-deepGreen rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <p className="text-white font-serif text-xl sm:text-2xl font-bold leading-tight">
                See the difference yourself for free.
              </p>
              <p className="text-white/55 text-sm font-light">
                Book a trial session today. No payment, no commitment.
              </p>
            </div>
            <Link
              href="/#book"
              className="flex-shrink-0 bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-4 rounded-xl text-sm shadow-lg shadow-brand-yellow/25 hover:-translate-y-0.5 transition-all duration-200 tap-target whitespace-nowrap animate-pulse-ring"
            >
              📚 Book a Session →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
