"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Safe photo with coloured fallback ─────────────────────── */
function SafePhoto({
  src, alt, initials, fallbackBg = "bg-brand-midGreen",
}: {
  src: string; alt: string; initials: string; fallbackBg?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`absolute inset-0 ${fallbackBg} flex items-center justify-center`}>
        <span className="text-white font-serif font-bold text-2xl">{initials}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top"
      sizes="(max-width: 768px) 100vw, 25vw"
      onError={() => setErrored(true)}
    />
  );
}

/* ── Team data ─────────────────────────────────────────────── */
const team = [
  {
    src: "https://images.pexels.com/photos/5905757/pexels-photo-5905757.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    fallbackBg: "bg-brand-deepGreen",
    initials: "AA",
    name: "Mrs. Adeyemi",
    role: "Head of Mathematics & WAEC Prep",
    bio: "Former Lagos State senior secondary teacher with 8+ years preparing students for WAEC, NECO and GCSE. Specialist in making Maths accessible for every learning style.",
    flag: "🇳🇬",
    location: "Lagos, Nigeria",
    tags: ["Mathematics", "WAEC", "GCSE"],
  },
  {
    src: "https://images.pexels.com/photos/8423069/pexels-photo-8423069.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    fallbackBg: "bg-teal-700",
    initials: "CN",
    name: "Mrs. Nwosu",
    role: "Lead Science Tutor, Biology & Chemistry",
    bio: "University of Abuja graduate with a BSc in Biological Sciences and 10 years tutoring secondary students across NECO, WAEC and IGCSE syllabi. Passionate about hands-on learning.",
    flag: "🇳🇬",
    location: "Abuja, Nigeria",
    tags: ["Science", "Biology", "NECO"],
  },
  {
    src: "https://images.pexels.com/photos/8618069/pexels-photo-8618069.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    fallbackBg: "bg-brand-green",
    initials: "JO",
    name: "Mr. Osei",
    role: "English Language & 11+ Specialist",
    bio: "Qualified English teacher based in London with 6 years supporting Nigerian-British families through 11+, KS2/KS3 and GCSE English. Experienced with both UK and Nigerian curricula.",
    flag: "🇬🇧",
    location: "London, UK",
    tags: ["English", "11+", "KS2/KS3"],
  },
  {
    src: "https://images.pexels.com/photos/5905899/pexels-photo-5905899.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    fallbackBg: "bg-emerald-700",
    initials: "SC",
    name: "Ms. Clarke",
    role: "GCSE Maths & SAT Coordinator",
    bio: "Manchester-based educator with 5 years delivering targeted GCSE and SAT preparation for students across the UK and diaspora. Known for rapid grade improvements and clear progress tracking.",
    flag: "🇬🇧",
    location: "Manchester, UK",
    tags: ["Maths", "GCSE", "SAT"],
  },
];

const values = [
  {
    icon: "📋",
    title: "Written Report After Every Session",
    desc: "Every lesson ends with a detailed written report, what was covered, how your child performed, and exactly what to work on next. You are never left guessing.",
  },
  {
    icon: "👩🏾‍🏫",
    title: "Qualified Nigerian & UK Teachers",
    desc: "All tutors hold a university degree and teaching certification. Many are former school teachers with hands-on experience in WAEC, GCSE, 11+ and NECO.",
  },
  {
    icon: "🎯",
    title: "Curriculum-Aligned, Exam-Focused",
    desc: "Every session maps directly to the syllabus your child follows. No generic content, only targeted preparation for the real exams that shape their future.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">

      {/* ── Hero ── */}
      <section className="relative py-20 lg:py-28 bg-brand-deepGreen text-white text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
        <div className="absolute top-[-10%] right-[-8%] w-96 h-96 rounded-full bg-brand-midGreen/15 blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-5 relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/60 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full">
            About Schoolhelphub
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
            Tutoring Built for<br />
            <em className="italic text-brand-yellow">Nigerian & British Families</em>
          </h1>
          <p className="text-white/65 text-base font-light leading-relaxed max-w-xl mx-auto">
            We started Schoolhelphub to give every child in Nigeria, the UK and the diaspora access to qualified, accountable tutors — with a written report after every single session.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/#book" className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-7 py-3.5 rounded-xl text-sm tap-target transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-brand-yellow/25">
              📚 Book Free Trial
            </Link>
            <a href="https://wa.me/2347043523556" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/75 hover:text-white border border-white/25 hover:border-white/50 font-semibold px-7 py-3.5 rounded-xl text-sm tap-target transition-all duration-200">
              WhatsApp Us →
            </a>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
              <span className="w-4 h-px bg-brand-midGreen" />
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-deepGreen">
              Our <em className="italic text-brand-midGreen">Three Promises</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-brand-faintGreen border border-brand-lightGreen/70 p-8 rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-5 shadow-sm border border-brand-lightGreen">
                  {v.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-deepGreen mb-2">{v.title}</h3>
                <p className="text-brand-mutedSage text-sm font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 lg:py-28 bg-brand-faintGreen border-t border-brand-lightGreen/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-white px-4 py-1.5 rounded-full border border-brand-green/10 shadow-sm">
              <span className="w-4 h-px bg-brand-midGreen" />
              Our Tutors
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-deepGreen">
              Meet the Team Behind<br />
              <em className="italic text-brand-midGreen">Your Child&apos;s Progress</em>
            </h2>
            <p className="text-brand-mutedSage text-sm font-light">
              Qualified, vetted teachers from Nigeria and UK with real experience in the exams that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-brand-lightGreen shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                {/* Photo */}
                <div className={`relative h-60 overflow-hidden ${member.fallbackBg}`}>
                  <SafePhoto
                    src={member.src}
                    alt={member.name}
                    initials={member.initials}
                    fallbackBg={member.fallbackBg}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deepGreen/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {member.flag} {member.location}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-brand-deepGreen text-base leading-tight">{member.name}</h3>
                    <p className="text-brand-midGreen text-[11px] font-bold tracking-wide mt-0.5">{member.role}</p>
                  </div>
                  <p className="text-brand-mutedSage text-xs font-light leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-semibold bg-brand-faintGreen text-brand-green px-2.5 py-1 rounded-full tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-brand-mutedSage text-xs mt-10 font-light">
            All tutors are DBS-checked, degree-qualified, and matched to your child&apos;s specific syllabus and exam board.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-brand-green text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Ready to Meet Your<br />
            <em className="italic text-brand-yellow">Child&apos;s Tutor?</em>
          </h2>
          <p className="text-white/65 text-sm font-light max-w-lg mx-auto leading-relaxed">
            Book a free 45-minute trial session today. No payment needed. Full written report included.
          </p>
          <Link
            href="/#book"
            className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-4 rounded-xl text-sm tap-target transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-brand-yellow/25"
          >
            📚 Book Free Trial, No Payment Needed
          </Link>
        </div>
      </section>

    </div>
  );
}
