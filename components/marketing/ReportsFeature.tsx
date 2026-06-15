"use client";

const features = [
  "Topics covered in every session",
  "Homework and tasks assigned",
  "Your child's progress and engagement level",
  "Tutor's notes and recommended next steps",
  "Attendance automatically tracked and logged",
  "Monthly progress summary in your dashboard",
];

export default function ReportsFeature() {
  return (
    <section className="py-20 lg:py-28 bg-brand-deepGreen relative overflow-hidden px-4 sm:px-6 lg:px-8">

      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full bg-brand-midGreen/25 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left: Copy */}
        <div className="space-y-7 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-yellow bg-brand-yellow/12 border border-brand-yellow/20 px-4 py-1.5 rounded-full">
            <span className="w-4 h-px bg-brand-yellow" />
            For Parents
            <span className="w-4 h-px bg-brand-yellow" />
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Know Exactly How<br />
            Your Child Is Doing —<br />
            <em className="italic text-brand-yellow">Always</em>
          </h2>

          <p className="text-white/60 text-base font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            Every session ends with a written tutor report sent directly to your inbox. No guessing. No waiting for parents&apos; evening.
          </p>

          <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                <span className="w-6 h-6 rounded-full bg-brand-yellow/15 border border-brand-yellow/25 text-brand-yellow text-xs font-bold flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Report card mockup */}
        <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/30">

            {/* Card header */}
            <div className="bg-brand-green px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                📋 Session Report
              </div>
              <span className="bg-brand-yellow/20 border border-brand-yellow/30 text-brand-yellow text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                ✓ Sent to Parent
              </span>
            </div>

            {/* Card body */}
            <div className="p-6 space-y-5">

              {/* Student row */}
              <div className="flex items-center gap-4 pb-5 border-b border-brand-faintGreen">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green to-brand-midGreen flex items-center justify-center font-serif font-bold text-white text-lg flex-shrink-0">
                  AO
                </div>
                <div>
                  <p className="font-bold text-brand-deepGreen text-sm">Adaeze Okonkwo</p>
                  <p className="text-brand-mutedSage text-xs mt-0.5">Mathematics · Year 6 · 11+ Preparation</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { val: "92%", label: "Attendance" },
                  { val: "B+", label: "Grade" },
                  { val: "↑14%", label: "This Month", green: true },
                  { val: "8/10", label: "Homework" },
                ].map((m) => (
                  <div key={m.label} className="bg-brand-faintGreen rounded-xl p-3 text-center">
                    <div className={`font-serif font-bold text-xl ${m.green ? "text-green-600" : "text-brand-green"}`}>{m.val}</div>
                    <div className="text-[10px] text-brand-mutedSage mt-1 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tutor note */}
              <div className="bg-brand-softYellow border-l-4 border-brand-yellow rounded-r-xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green mb-2">✏️ Tutor&apos;s Note</p>
                <p className="text-brand-textNearBlack text-xs leading-relaxed">
                  Adaeze showed <strong className="text-brand-green">strong understanding</strong> of fractions today. Recommend 20 mins of ratio practice before Thursday. She is on track for her target score. 🎯
                </p>
              </div>

              {/* Next steps pills */}
              <div className="flex flex-wrap gap-2">
                {["📝 Ratio Practice", "📅 Thu 4:00 PM", "🎯 On Track"].map((pill) => (
                  <span key={pill} className="text-[11px] font-semibold bg-brand-lightGreen text-brand-green px-3 py-1.5 rounded-full">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
