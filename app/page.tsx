"use client";

import { NavigationWrapper } from "./(marketing)/NavigationWrapper";
import Hero from "@/components/marketing/Hero";
import TrustBar from "@/components/marketing/TrustBar";
import Workflow from "@/components/marketing/Workflow";
import SubjectGrid from "@/components/marketing/SubjectGrid";
import WhyUs from "@/components/marketing/WhyUs";
import StudentPhotos from "@/components/marketing/StudentPhotos";
import ReportsFeature from "@/components/marketing/ReportsFeature";
import Testimonials from "@/components/marketing/Testimonials";
import CaptureForm from "@/components/marketing/CaptureForm";
import Link from "next/link";

const footerLinks = {
  Subjects: ["Mathematics", "English", "Science", "Coding", "Languages", "Exam Prep"],
  Company: ["About Us", "Our Tutors", "How It Works", "Pricing", "Results"],
  Support: ["Contact Us", "FAQs", "Privacy Policy", "Terms of Service", "Safeguarding"],
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">

      {/* ── Sticky Navigation ── */}
      <header className="sticky top-0 z-50 w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-lightGreen/60 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-brand-yellow rounded-xl flex items-center justify-center font-serif font-bold text-brand-deepGreen text-lg">
              S
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold text-brand-deepGreen tracking-tight">
                School<span className="text-brand-midGreen font-light font-sans">help</span>hub
              </span>
            </div>
          </Link>
          <NavigationWrapper />
        </div>
      </header>

      {/* ── Page Sections ── */}
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Workflow />
        <SubjectGrid />
        <WhyUs />
        <StudentPhotos />
        <ReportsFeature />
        <Testimonials />

        {/* ── Pricing Teaser ── */}
        <section className="py-16 bg-brand-lightGreen/40 px-4 sm:px-6 lg:px-8 border-y border-brand-lightGreen/60">
          <div className="max-w-4xl mx-auto text-center space-y-5 reveal">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-midGreen">
              Transparent Pricing
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-deepGreen">
              Starts from <span className="text-brand-midGreen">₦60,000</span> /month
            </h2>
            <p className="text-brand-mutedSage font-light text-base max-w-xl mx-auto">
              All plans include a free first session, written reports after every class, and no long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-brand-deepGreen hover:bg-brand-green text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 tap-target hover:-translate-y-0.5 shadow-md"
              >
                See All Plans & Pricing →
              </Link>
              <Link
                href="/#book"
                className="inline-flex items-center gap-2 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 tap-target"
              >
                📚 Book a Session
              </Link>
            </div>
          </div>
        </section>

        <CaptureForm />

        {/* ── Final CTA Banner ── */}
        <section className="bg-brand-green py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute bottom-[-40px] left-10 w-40 h-40 border border-brand-yellow/10 rounded-[50%_0_50%_0] rotate-45 pointer-events-none" />
          <div className="absolute top-8 right-20 w-24 h-24 border border-white/8 rounded-[50%_0_50%_0] rotate-12 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 reveal">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Give Your Child<br />
              the Support They{" "}
              <em className="italic text-brand-yellow">Deserve?</em>
            </h2>
            <p className="text-white/65 text-base font-light">
              Join hundreds of families across Nigeria, UK and the US who trust Schoolhelphub.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/#book"
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-4 rounded-xl text-sm shadow-xl shadow-brand-yellow/25 hover:-translate-y-0.5 transition-all duration-200 tap-target"
              >
                📚 Book a Session Today — No Payment Needed
              </Link>
              <Link
                href="/#subjects"
                className="w-full sm:w-auto text-white/75 hover:text-white border border-white/25 hover:border-white/55 font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-200 tap-target"
              >
                See Our Subjects →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-brand-deepGreen text-white px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green" />
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 pb-12 border-b border-white/8">

            {/* Brand col */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-brand-yellow rounded-xl flex items-center justify-center font-serif font-bold text-brand-deepGreen">S</div>
                <span className="font-serif text-lg font-bold text-white">School<span className="text-brand-yellow font-light font-sans">help</span>hub</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed max-w-[210px] mb-4 font-light">
                Expert online tutoring for primary and secondary students across Nigeria, UK and USA. Live classes. Written reports after every session.
              </p>
              <div className="text-xl mb-5">🇳🇬 🇬🇧</div>
              <div className="flex gap-2">
                {(["f", "in", "li"] as const).map((s) => (
                  <a key={s} href="#" className="w-8 h-8 bg-white/8 hover:bg-brand-yellow hover:text-brand-deepGreen text-white/50 rounded-lg flex items-center justify-center text-[10px] font-bold uppercase transition-all duration-200">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Link cols */}
            {Object.entries(footerLinks).map(([col, links]) => (
              <div key={col}>
                <p className="text-white text-[10px] font-bold tracking-widest uppercase mb-4">{col}</p>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="text-white/38 hover:text-brand-yellow text-xs font-light transition-colors duration-150">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/22">
            <p>© {new Date().getFullYear()} Schoolhelphub. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/2347043523556" className="hover:text-brand-yellow transition-colors" target="_blank" rel="noopener noreferrer">
                WhatsApp: +234 704 352 3556
              </a>
              <span>·</span>
              <span>@Schoolhelphub</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WhatsApp FAB ── */}
      <a
        href="https://wa.me/2347043523556?text=Hi%20Schoolhelphub%2C%20I%27d%20like%20to%20find%20out%20more%20about%20tutoring%20for%20my%20child."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-14 h-14 rounded-full shadow-xl shadow-[#25D366]/35 hover:scale-110 flex items-center justify-center transition-all duration-300 tap-target animate-fadeIn"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.557-5.338 11.902-11.892 11.902-2.004-.001-3.973-.51-5.713-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.892-1.84-1.842-4.29-2.856-6.889-2.858-5.441 0-9.867 4.371-9.871 9.743-.001 1.933.507 3.821 1.474 5.485L1.922 22.18l4.725-1.026z"/>
        </svg>
      </a>

    </div>
  );
}
