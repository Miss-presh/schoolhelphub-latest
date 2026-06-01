"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first question

  const faqs = [
    {
      question: "Are your tutors university students or peer mentors?",
      answer: "Absolutely not. We do not hire casual university student peers. Every single instructor across our network is a fully qualified, background-checked school teacher or career educational specialist with a proven track record of board-specific syllabus delivery.",
    },
    {
      question: "How long does the custom tutor matching workflow take?",
      answer: "Once you fill out our 6-field evaluation request, an academic board coordinator reads your target milestone criteria and maps your profile. We hand-select and match your student with their perfect educator within 4 to 12 hours.",
    },
    {
      question: "What exactly is included in the post-lesson micro-analytics logs?",
      answer: "Transparency is our primary standard. Within 15 minutes of every single lesson concluding, a comprehensive progress breakdown is pushed to your dashboard. This includes focus metrics, curriculum synchronization targets, and clear actionable homework parameters.",
    },
    {
      question: "Is there a long-term contract lock-in or subscription requirement?",
      answer: "No. We operate a completely transparent pay-as-you-learn flat hourly pricing framework. You are never locked into monthly minimums, and you can switch subjects, reschedule sessions, or pause your account at any time without admin penalties.",
    },
    {
      question: "How do you handle background security checks and vetting?",
      answer: "Student safety is completely absolute. Every educator on our platform must pass an enhanced criminal record screening (Enhanced DBS in the UK / secure regional identity verification in the US) alongside a rigorous live multi-tier pedagogical presentation audit.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">
      
      {/* 1. Header Hero Fold */}
      <section className="py-20 bg-brand-faintGreen border-b border-brand-lightGreen/60 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            Logistical Transparency
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-deepGreen tracking-tight leading-tight">
            Frequently Answered Concerns
          </h1>
          <p className="text-base sm:text-lg text-brand-mutedSage max-w-2xl mx-auto leading-relaxed">
            Have questions about operational mechanics, matching pipelines, or invoicing frameworks? Explore our transparent guide below.
          </p>
        </div>
      </section>

      {/* 2. Interactive Accordion Interface Matrix */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className="bg-brand-cream border border-brand-lightGreen rounded-2xl transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif font-bold text-brand-deepGreen text-base sm:text-lg cursor-pointer tap-target"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={`text-xl font-sans transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out border-brand-lightGreen/40 ${
                    isOpen ? "max-h-60 border-t p-6 bg-white" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-brand-mutedSage leading-relaxed font-sans font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Conversion Hook */}
      <section className="py-20 bg-brand-deepGreen text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-lightGreen">
            Still Have a Unique Question?
          </h2>
          <p className="text-xs sm:text-sm text-brand-mutedSage max-w-xl mx-auto leading-relaxed">
            Our expert school support staff is available via our encrypted chat hotline or standard contact logs to resolve unique requests instantly.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-150 shadow-md-brand inline-block tap-target w-full sm:w-auto"
            >
              Contact Coordination Board
            </Link>
            <a 
              href="https://wa.me/07043523556"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-lightGreen hover:bg-brand-lightGreen/10 text-brand-lightGreen font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-150 inline-block tap-target w-full sm:w-auto"
            >
              Message Instantly via WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}