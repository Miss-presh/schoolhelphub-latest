"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CaptureForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    childAge: "",
    targetSubject: "",
    regionalCurriculum: "UK",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate database write delay
    setTimeout(() => {
      setLoading(false);
      // Perfect redirection flow to maintain onboarding velocity
      router.push("/free-trial?status=success");
    }, 1200);
  };

  return (
    <section className="py-24 bg-brand-faintGreen px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-brand-lightGreen p-8 sm:p-12 shadow-md-brand">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-deepGreen">
            Claim Your Free Academic Evaluation Lesson
          </h2>
          <p className="text-sm text-brand-mutedSage font-sans">
            No credit card details required. Fill out your requirements below, and an expert educational advisor will match your student within 4 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 font-sans">
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
              "Initialize Free Matching Process"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}