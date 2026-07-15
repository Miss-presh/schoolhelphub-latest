"use client";

import { NavigationWrapper } from "./(marketing)/NavigationWrapper";
import Hero from "@/components/marketing/Hero";
import SubjectGrid from "@/components/marketing/SubjectGrid";
import WhyUs from "@/components/marketing/WhyUs";
import StudentPhotos from "@/components/marketing/StudentPhotos";
import Testimonials from "@/components/marketing/Testimonials";
import CaptureForm from "@/components/marketing/CaptureForm";
import Link from "next/link";
import Programmes from "@/components/marketing/Progammes";
import HowitWorks from "@/components/marketing/HowItWorks";
import PricingSection from "@/components/marketing/PricingSection";
import Footer from "@/components/marketing/Footer";
import FAQ from "@/components/marketing/FAQ";

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
        <WhyUs />
        <SubjectGrid />
        <Programmes />
        <HowitWorks />
        <StudentPhotos />
        <Testimonials />
        <PricingSection />
        <FAQ />
        <CaptureForm />
        <Footer />
      </main>

    

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
