"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How do online lessons work?",
    answer:
      "Lessons take place live via Zoom or Google Meet with experienced tutors. Students interact in real time, ask questions, complete activities and receive support exactly like a physical classroom.",
  },
  {
    question: "How many students are in each class?",
    answer:
      "Our small-group classes have a maximum of six students, ensuring every child receives individual attention while benefiting from collaborative learning.",
  },
  {
    question: "Do you offer one-to-one tutoring?",
    answer:
      "Yes. Parents can choose between small-group classes or fully personalised one-to-one tuition tailored to their child's pace, learning style and academic goals.",
  },
  {
    question: "Which curriculum do you teach?",
    answer:
      "We support both Nigerian and British curricula including WAEC, NECO, BECE, GCSE, IGCSE, KS2, KS3 and 11+ preparation.",
  },
  {
    question: "Will I receive updates about my child's progress?",
    answer:
      "Absolutely. After every lesson, parents receive a written progress report outlining what was taught, strengths, areas for improvement and recommended next steps.",
  },
  {
    question: "Can we book a free assessment first?",
    answer:
      "Yes. Every family begins with a free academic assessment so we can understand your child's strengths, identify learning gaps and recommend the most suitable programme.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-lightGreen/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-lightGreen text-brand-green text-xs font-bold uppercase tracking-widest">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 font-serif text-4xl lg:text-5xl font-bold text-brand-deepGreen leading-tight">
            Everything Parents
            <br />
            <span className="italic text-brand-midGreen">
              Usually Ask
            </span>
          </h2>

          <p className="mt-5 text-brand-mutedSage leading-relaxed">
            Still have questions? Here are the answers parents ask us most
            before enrolling their children.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  active
                    ? "border-brand-green bg-brand-faintGreen shadow-lg"
                    : "border-brand-lightGreen hover:border-brand-green/40 bg-white"
                }`}
              >
                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left p-6 cursor-pointer"
                >
                  <h3 className="font-semibold text-lg text-brand-deepGreen pr-6">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      active
                        ? "rotate-180 text-brand-green"
                        : "text-brand-mutedSage"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    active
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-brand-mutedSage leading-8">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center reveal">
          <p className="text-brand-mutedSage mb-5">
            Still can&apos;t find the answer you&apos;re looking for?
          </p>

          <Link
            href="/#book"
            className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            📚 Book a Free Academic Assessment →
          </Link>
        </div>
      </div>
    </section>
  );
}