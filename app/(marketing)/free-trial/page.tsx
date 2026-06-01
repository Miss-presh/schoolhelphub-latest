"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Form Component that reads search params natively
function FreeTrialForm() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    childAge: "",
    targetSubject: "",
    regionalCurriculum: "UK",
  });

 const isSuccess = submitted || searchParams.get("status") === "success";

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate database commitment latency
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-16 px-4 space-y-6 max-w-xl mx-auto bg-white rounded-3xl border border-brand-lightGreen p-8 sm:p-12 shadow-md-brand animate-fadeIn">
        <div className="text-5xl bg-brand-lightGreen w-20 h-20 rounded-full flex items-center justify-center mx-auto text-brand-deepGreen shadow-inner">
          🎉
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-deepGreen">
            Matching Sequence Initiated!
          </h2>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-midGreen bg-brand-faintGreen px-3 py-1 rounded-md inline-block">
            Priority Queue Active
          </p>
        </div>
        <p className="text-sm text-brand-mutedSage leading-relaxed font-medium">
          Thank you! Your profile parameters have been assigned to our academic leadership team. An educational coordinator will review your school board targets and reach out via phone or email within <strong className="text-brand-deepGreen">4 operational hours</strong> to verify your assigned tutor match.
        </p>
        <div className="pt-4 border-t border-brand-lightGreen/40">
          <p className="text-xs text-brand-mutedSage italic">
            A secure confirmation summary has been routed to your email inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-brand-lightGreen p-8 sm:p-12 shadow-md-brand">
      
      {/* Visual Funnel Progress Indicator */}
      <div className="mb-10 max-w-md mx-auto">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-brand-deepGreen mb-2 px-1">
          <span className="text-brand-midGreen">1. Configure</span>
          <span className="text-brand-midGreen">2. Vetting Match</span>
          <span className="text-brand-mutedSage/60">3. Confirmed</span>
        </div>
        <div className="h-2 w-full bg-brand-cream rounded-full overflow-hidden border border-brand-lightGreen/40">
          <div className="h-full w-2/3 bg-brand-green rounded-full transition-all duration-500" />
        </div>
      </div>

      <form onSubmit={handleRegistrationSubmit} className="space-y-6 font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Field 1: Parent Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">
              Parent/Guardian Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              className="w-full bg-brand-cream border border-brand-lightGreen px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          {/* Field 2: Parent Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="name@domain.com"
              value={formData.parentEmail}
              onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
              className="w-full bg-brand-cream border border-brand-lightGreen px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          {/* Field 3: Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">
              Contact Phone Number
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +44 7123 456789"
              value={formData.parentPhone}
              onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
              className="w-full bg-brand-cream border border-brand-lightGreen px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          {/* Field 4: Target Region */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">
              Target Curriculum Framework
            </label>
            <select
              value={formData.regionalCurriculum}
              onChange={(e) => setFormData({ ...formData, regionalCurriculum: e.target.value })}
              className="w-full bg-brand-cream border border-brand-lightGreen px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors appearance-none cursor-pointer"
            >
              <option value="UK">United Kingdom (GCSE / 11+ / KS1-4)</option>
              <option value="US">United States (K-12 / AP Foundations)</option>
            </select>
          </div>

          {/* Field 5: Child Age */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">
              Student Age / Grade Level
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 11 Years Old / Year 7"
              value={formData.childAge}
              onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
              className="w-full bg-brand-cream border border-brand-lightGreen px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          {/* Field 6: Target Subject Focus */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-deepGreen">
              Primary Academic Concern
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Mathematics Foundations & Exam Panic"
              value={formData.targetSubject}
              onChange={(e) => setFormData({ ...formData, targetSubject: e.target.value })}
              className="w-full bg-brand-cream border border-brand-lightGreen px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-yellow hover:bg-brand-deepYellow disabled:opacity-50 text-brand-deepGreen font-bold p-4 rounded-xl shadow-md-brand hover:-translate-y-0.5 transition-all duration-150 text-sm mt-4 cursor-pointer flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-brand-deepGreen border-t-transparent rounded-full animate-spin" />
          ) : (
            "Complete Configuration & Request Match"
          )}
        </button>
      </form>
    </div>
  );
}

// Global Main Layout Container
export default function FreeTrialPage() {
  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased min-h-screen pb-24 selection:bg-brand-yellow selection:text-brand-deepGreen">
      
      {/* 1. Structural Header Fold */}
      <section className="py-20 bg-brand-faintGreen border-b border-brand-lightGreen/60 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
            Risk-Free Evaluation
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-deepGreen tracking-tight leading-tight">
            Book Your Free Diagnostic Placement Lesson
          </h1>
          <p className="text-base sm:text-lg text-brand-mutedSage max-w-2xl mx-auto leading-relaxed">
            No credit card entries. No registration fees. Simply outline your curriculum priorities, and our coordination board handles the match.
          </p>
        </div>
      </section>

      {/* 2. Form Component with boundary fallback wrapping */}
      <section className="mt-16 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="text-center py-12 text-sm text-brand-mutedSage font-medium">
            Loading matching engine...
          </div>
        }>
          <FreeTrialForm />
        </Suspense>
      </section>

    </div>
  );
}