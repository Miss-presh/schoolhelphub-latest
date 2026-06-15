"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Fallback-aware photo component ───────────────────────── */
function SafePhoto({
  src,
  alt,
  fallbackBg = "bg-brand-midGreen",
  fallbackInitials = "",
  className = "",
  fill = false,
}: {
  src: string;
  alt: string;
  fallbackBg?: string;
  fallbackInitials?: string;
  className?: string;
  fill?: boolean;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`absolute inset-0 ${fallbackBg} flex items-center justify-center`}>
        <span className="text-white font-serif font-bold text-3xl opacity-70">{fallbackInitials}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : 400}
      height={fill ? undefined : 300}
      className={`object-cover ${className}`}
      onError={() => setErrored(true)}
      sizes="(max-width: 768px) 50vw, 25vw"
    />
  );
}

/* ── Tutor data ────────────────────────────────────────────── */
const tutors = [
  {
    src: "https://images.pexels.com/photos/5905757/pexels-photo-5905757.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    fallbackBg: "bg-brand-deepGreen",
    initials: "AA",
    name: "Mrs. Adeyemi",
    subject: "Mathematics · WAEC · GCSE",
    location: "Lagos",
    flag: "🇳🇬",
    years: "8 yrs exp.",
  },
  {
    src: "https://images.pexels.com/photos/8618069/pexels-photo-8618069.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    fallbackBg: "bg-brand-green",
    initials: "JO",
    name: "Mr. Osei",
    subject: "English · 11+ · KS2/KS3",
    location: "London",
    flag: "🇬🇧",
    years: "6 yrs exp.",
  },
  {
    src: "https://images.pexels.com/photos/8423069/pexels-photo-8423069.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    fallbackBg: "bg-teal-700",
    initials: "CN",
    name: "Mrs. Nwosu",
    subject: "Science · Biology · NECO",
    location: "Abuja",
    flag: "🇳🇬",
    years: "10 yrs exp.",
  },
  {
    src: "https://images.pexels.com/photos/5905899/pexels-photo-5905899.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    fallbackBg: "bg-emerald-700",
    initials: "SC",
    name: "Ms. Clarke",
    subject: "Maths · GCSE · SAT",
    location: "Manchester",
    flag: "🇬🇧",
    years: "5 yrs exp.",
  },
];

/* ── Session mosaic photos ─────────────────────────────────── */
const mosaicPhotos = [
  {
    src: "https://images.pexels.com/photos/34211747/pexels-photo-34211747.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    caption: "Live group session",
    tag: "Group Class",
    span: "col-span-1 row-span-2",
    height: "h-full min-h-[320px]",
  },
  {
    src: "https://images.pexels.com/photos/35610368/pexels-photo-35610368.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    caption: "One-on-one Maths session",
    tag: "1-on-1",
    span: "col-span-1",
    height: "h-44",
  },
  {
    src: "https://images.pexels.com/photos/11025029/pexels-photo-11025029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    caption: "Science prep, Year 10",
    tag: "GCSE Prep",
    span: "col-span-1",
    height: "h-44",
  },
  {
    src: "https://images.pexels.com/photos/5905956/pexels-photo-5905956.jpeg?auto=compress&cs=tinysrgb&w=700&h=400&fit=crop",
    caption: "Qualified tutor — Mrs. Adeyemi",
    tag: "Our Tutors",
    span: "col-span-2",
    height: "h-52",
  },
];

/* ── Tutor card ────────────────────────────────────────────── */
function TutorCard({ tutor }: { tutor: typeof tutors[0] }) {
  return (
    <div className="group reveal-scale bg-white rounded-2xl overflow-hidden border border-brand-lightGreen shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className={`relative h-52 overflow-hidden ${tutor.fallbackBg}`}>
        <SafePhoto
          src={tutor.src}
          alt={tutor.name}
          fallbackBg={tutor.fallbackBg}
          fallbackInitials={tutor.initials}
          className="object-top transition-transform duration-500 group-hover:scale-105"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deepGreen/60 to-transparent" />
        <div className="absolute bottom-3 left-3 bg-white/15 backdrop-blur-sm rounded-full px-2.5 py-1 text-[10px] text-white font-bold">
          {tutor.flag} {tutor.location}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <p className="font-serif font-bold text-brand-deepGreen text-sm">{tutor.name}</p>
          <span className="text-[9px] text-brand-green font-bold bg-brand-faintGreen px-2 py-0.5 rounded-full">{tutor.years}</span>
        </div>
        <p className="text-brand-mutedSage text-[11px] font-light leading-relaxed">{tutor.subject}</p>
      </div>
    </div>
  );
}

/* ── Mosaic photo with fallback ────────────────────────────── */
function MosaicPhoto({ photo }: { photo: typeof mosaicPhotos[0] }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative rounded-2xl overflow-hidden bg-brand-lightGreen ${photo.span}`}>
      <div className={`relative w-full ${photo.height}`}>
        {!errored ? (
          <Image
            src={photo.src}
            alt={photo.caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-brand-midGreen/30 flex items-center justify-center">
            <span className="text-brand-deepGreen text-4xl">📸</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="bg-brand-yellow text-brand-deepGreen text-[9px] font-extrabold px-2.5 py-1 rounded-full tracking-wider">
            {photo.tag}
          </span>
          <span className="text-white/80 text-[10px] font-medium">{photo.caption}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main export ───────────────────────────────────────────── */
export default function StudentPhotos() {
  return (
    <section className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
          <div className="space-y-4 reveal-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
              <span className="w-4 h-px bg-brand-midGreen" />
              Our Community
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-deepGreen">
              Real Students.<br />
              <em className="italic text-brand-midGreen">Real Results.</em>
            </h2>
            <p className="text-brand-mutedSage font-light text-base leading-relaxed max-w-md">
              Every week, students across Nigeria and the UK log in, learn, and grow. These are their stories.
            </p>
          </div>
          <div className="reveal-right text-right hidden lg:block">
            <Link
              href="/#book"
              className="inline-flex items-center gap-2 bg-brand-deepGreen hover:bg-brand-green text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 tap-target hover:-translate-y-0.5 shadow-md"
            >
              Join Them — Book Free Trial →
            </Link>
          </div>
        </div>

        {/* ── Photo mosaic ── */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-16 reveal">
          {mosaicPhotos.map((p, i) => (
            <MosaicPhoto key={i} photo={p} />
          ))}
        </div>

        {/* ── Meet the tutors ── */}
        <div className="space-y-8">
          <div className="text-center space-y-3 reveal">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
              <span className="w-4 h-px bg-brand-midGreen" />
              Meet the Tutors
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-deepGreen">
              Qualified. Experienced. <em className="italic text-brand-midGreen">Dedicated.</em>
            </h3>
            <p className="text-brand-mutedSage font-light text-sm max-w-xl mx-auto">
              Every tutor holds a degree and teaching certification. Many are current or former school teachers in Nigeria and the UK.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {tutors.map((t, i) => (
              <div key={i} className={`delay-${(i + 1) * 100}`}>
                <TutorCard tutor={t} />
              </div>
            ))}
          </div>

          <div className="text-center pt-2 reveal delay-500">
            <p className="text-brand-mutedSage text-sm font-light mb-4">
              All tutors are vetted, background-checked, and matched to your child&apos;s needs.
            </p>
            <Link
              href="/#book"
              className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 tap-target hover:-translate-y-0.5 shadow-md shadow-brand-yellow/20 animate-pulse-ring"
            >
              📚 Book a Free Trial Session →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
