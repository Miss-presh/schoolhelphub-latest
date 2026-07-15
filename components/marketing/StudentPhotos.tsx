"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";



/* ── Session mosaic photos ─────────────────────────────────── */
const mosaicPhotos = [
  {
    src: "https://images.pexels.com/photos/7015911/pexels-photo-7015911.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    caption: "Learning is fun!",
    tag: "Our Students",
    span: "col-span-1 row-span-2",
    height: "h-full min-h-[320px]",
  },
  {
    src: "https://images.pexels.com/photos/5905866/pexels-photo-5905866.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    caption: "Reading with confidence",
    tag: "Ages 5–16",
    span: "col-span-1",
    height: "h-44",
  },
  {
    src: "https://images.pexels.com/photos/7577341/pexels-photo-7577341.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    caption: "Live online session",
    tag: "1-on-1 Elite",
    span: "col-span-1",
    height: "h-44",
  },
  {
    src: "https://images.pexels.com/photos/5896747/pexels-photo-5896747.jpeg?auto=compress&cs=tinysrgb&w=700&h=400&fit=crop",
    caption: "Happy students, real results",
    tag: "Our Students",
    span: "col-span-2",
    height: "h-52",
  },
];

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
            unoptimized
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
      </div>
    </section>
  );
}
