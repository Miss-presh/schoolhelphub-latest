"use client";

import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Trophy,
  Laptop,
  ArrowRight,
  Users,
  Clock3,
  FileText,
  MonitorPlay,
} from "lucide-react";

const programmes = [
  {
    icon: GraduationCap,
    title: "Early Years & Primary",
    subtitle: "Ages 4–11",
    description:
      "Build strong foundations in literacy, numeracy, science and critical thinking through engaging live lessons.",
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Reading",
    ],
    accent: "from-brand-yellow/20 to-brand-lightGreen/30",
    iconBg: "bg-brand-yellow/15",
  },
  {
    icon: BookOpen,
    title: "Secondary School",
    subtitle: "WAEC • NECO • GCSE • IGCSE",
    description:
      "Curriculum-aligned lessons designed to improve confidence, classroom performance and examination success.",
    subjects: [
      "Mathematics",
      "English",
      "Biology",
      "Chemistry",
      "Physics",
    ],
    accent: "from-brand-lightGreen/40 to-brand-faintGreen",
    iconBg: "bg-brand-lightGreen",
  },
  {
    icon: Trophy,
    title: "Exam Preparation",
    subtitle: "Focused Revision",
    description:
      "Structured revision programmes that help students perform confidently in major national and international examinations.",
    subjects: [
      "11+",
      "SATs",
      "BECE",
      "WAEC",
      "GCSE",
    ],
    accent: "from-brand-yellow/15 to-brand-faintGreen",
    iconBg: "bg-brand-yellow/15",
  },
  {
    icon: Laptop,
    title: "Future Skills",
    subtitle: "Beyond School",
    description:
      "Develop practical skills that prepare children for tomorrow's opportunities while building creativity and confidence.",
    subjects: [
      "Coding",
      "Public Speaking",
      "Creative Writing",
      "Digital Skills",
    ],
    accent: "from-brand-lightGreen/30 to-brand-yellow/10",
    iconBg: "bg-brand-lightGreen",
  },
];

const highlights = [
  {
    icon: Users,
    title: "Small Groups",
    subtitle: "Maximum of 6 students",
  },
  {
    icon: MonitorPlay,
    title: "Live Online Lessons",
    subtitle: "Interactive & engaging",
  },
  {
    icon: Clock3,
    title: "Flexible Timetable",
    subtitle: "Morning, afternoon & evening",
  },
  {
    icon: FileText,
    title: "Weekly Progress Reports",
    subtitle: "Parents stay informed",
  },
];

export default function Programmes() {
  return (
    <section
      id="programmes"
      className="relative overflow-hidden py-24 lg:py-32 bg-white"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-lightGreen/30 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-brand-yellow/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}

        <div className="max-w-3xl mx-auto text-center mb-16 reveal">

          <span className="inline-flex items-center rounded-full border border-brand-lightGreen bg-brand-faintGreen px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-midGreen">

            Learning Programmes

          </span>

          <h2 className="mt-6 font-serif text-4xl lg:text-6xl font-bold leading-tight text-brand-deepGreen">

            Learning Pathways
            <br />
            For Every Stage
            <br />
            Of Your Child&apos;s Education

          </h2>

          <p className="mt-6 text-lg text-brand-mutedSage leading-relaxed">

            Whether your child needs extra support, exam preparation or
            personalised one-to-one coaching, our programmes are carefully
            designed to build confidence and deliver measurable academic
            success.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {programmes.map((programme, index) => {

            const Icon = programme.icon;

            return (
              <div
                key={index}
                className="group rounded-[32px] border border-brand-lightGreen/70 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              >

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${programme.accent}`}
                />

                <div className="relative z-10">

                  <div
                    className={`w-16 h-16 rounded-2xl ${programme.iconBg} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-brand-deepGreen" />
                  </div>

                  <p className="uppercase tracking-widest text-xs font-bold text-brand-midGreen mb-2">
                    {programme.subtitle}
                  </p>

                  <h3 className="font-serif text-3xl font-bold text-brand-deepGreen mb-4">
                    {programme.title}
                  </h3>

                  <p className="text-brand-mutedSage leading-relaxed mb-8">
                    {programme.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">

                    {programme.subjects.map((subject) => (
                      <div
                        key={subject}
                        className="rounded-xl bg-brand-faintGreen px-4 py-3 text-sm font-medium text-brand-deepGreen"
                      >
                        {subject}
                      </div>
                    ))}

                  </div>

                  <Link
                    href="/programmes"
                    className="inline-flex items-center gap-2 font-semibold text-brand-green hover:text-brand-deepGreen transition-colors group/link"
                  >
                    Explore Programme

                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />

                  </Link>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Features */}

        <div className="mt-20 rounded-[32px] bg-brand-deepGreen p-10 lg:p-14">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {highlights.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >

                  <div className="w-12 h-12 rounded-xl bg-brand-yellow flex items-center justify-center flex-shrink-0">

                    <Icon className="w-6 h-6 text-brand-deepGreen" />

                  </div>

                  <div>

                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="text-white/65 text-sm mt-1">
                      {item.subtitle}
                    </p>

                  </div>

                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">

            <Link
              href="/#book"
              className="inline-flex items-center gap-3 rounded-2xl bg-brand-yellow px-8 py-4 font-bold text-brand-deepGreen hover:bg-brand-deepYellow transition-all hover:-translate-y-1 shadow-xl shadow-brand-yellow/20"
            >
              Book a Free Assessment

              <ArrowRight className="w-5 h-5" />

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}