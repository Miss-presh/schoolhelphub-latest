"use client";

const testimonials = [
  {
    quote: "The session reports changed everything for us. I finally know exactly what my daughter is working on every week. Her WAEC grades jumped from E8 to B2 in just two terms.",
    name: "Mrs. Temi Adeleke",
    meta: "Parent · Lagos, Nigeria · Year 10 Student",
    initials: "TA",
    avatarColor: "from-brand-green to-brand-midGreen",
    flag: "🇳🇬",
  },
  {
    quote: "Finding quality UK-style tutoring in Texas felt impossible — until Schoolhelphub. The tutors are exceptional and my son genuinely looks forward to his sessions every week.",
    name: "Marcus K.",
    meta: "Parent · Texas, USA · IGCSE Student",
    initials: "MK",
    avatarColor: "from-amber-500 to-yellow-400",
    flag: "🇺🇸",
  },
  {
    quote: "My son went from dreading maths to actually enjoying it. The detailed reports keep us in the loop at every step, and the 11+ prep was absolutely spot on.",
    name: "Funmi Okafor",
    meta: "Parent · Manchester, UK · Year 5 Student",
    initials: "FO",
    avatarColor: "from-brand-deepGreen to-brand-green",
    flag: "🇬🇧",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-brand-faintGreen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            <span className="w-4 h-px bg-brand-midGreen" />
            What Parents Say
            <span className="w-4 h-px bg-brand-midGreen" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-deepGreen">
            Trusted by Families<br />
            Across <em className="italic text-brand-midGreen">Nigeria, UK & US</em>
          </h2>
          <p className="text-brand-mutedSage font-light text-base">
            Real results, honest feedback — from parents who&apos;ve seen the difference.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} bg-white rounded-2xl p-7 border border-brand-lightGreen/80 shadow-sm hover:-translate-y-1 hover:shadow-md hover:shadow-brand-green/8 transition-all duration-300 flex flex-col`}
            >
              {/* Stars */}
              <div className="text-brand-yellow text-base tracking-widest mb-4">★★★★★</div>

              {/* Big quote mark */}
              <div className="font-serif text-6xl leading-none text-brand-yellow/50 mb-0 -mt-2 select-none">&quot;</div>

              {/* Quote */}
              <p className="text-brand-textNearBlack text-sm leading-relaxed italic flex-grow mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-brand-faintGreen">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.avatarColor} flex items-center justify-center font-serif font-bold text-white text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-brand-deepGreen text-sm flex items-center gap-1.5">
                    {t.name} <span>{t.flag}</span>
                  </p>
                  <p className="text-brand-mutedSage text-xs mt-0.5">{t.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
