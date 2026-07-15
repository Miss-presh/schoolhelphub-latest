"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  GraduationCap,
  Target,
  Globe2,
  Clock3,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: ClipboardCheck,
    title: "Written Progress Report After Every Lesson",
    body: "After every class, parents receive a detailed report covering topics taught, strengths, areas needing improvement and clear next steps.",
  },
  {
    icon: GraduationCap,
    title: "Qualified & Experienced Tutors",
    body: "Our tutors are carefully vetted and experienced in both the Nigerian and British curricula, delivering engaging lessons that build confidence.",
  },
  {
    icon: TrendingUp,
    title: "Real Academic Improvement",
    body: "Every child's progress is monitored continuously, helping parents clearly see improvements in understanding, confidence and exam performance.",
  },
  {
    icon: Globe2,
    title: "Designed for Nigerian Families in Diaspora",
    body: "Whether your child studies the WAEC, NECO, BECE, GCSE, IGCSE or 11+ curriculum, our lessons are tailored to match their academic journey.",
  },
  {
    icon: Clock3,
    title: "Flexible Learning Schedule",
    body: "Choose morning, afternoon or evening sessions that fit around school and family commitments wherever you are in the world.",
  },
  {
    icon: Target,
    title: "Small Classes. Personal Attention.",
    body: "With a maximum of six students per class, every learner receives the support, interaction and feedback they deserve.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 lg:py-32 bg-white overflow-hidden relative"
    >
      {/* Background Decorations */}

      <div className="absolute -left-40 top-20 w-80 h-80 bg-brand-lightGreen/40 rounded-full blur-[120px]" />

      <div className="absolute -right-40 bottom-10 w-96 h-96 bg-brand-yellow/20 rounded-full blur-[140px]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center rounded-full bg-brand-lightGreen px-5 py-2 text-sm font-semibold text-brand-deepGreen">
            Why Parents Choose SchoolhelpHub
          </span>

          <h2 className="mt-6 font-serif text-4xl lg:text-6xl font-bold text-brand-deepGreen leading-tight">
            Everything Your Child Needs
            <span className="block text-brand-green">
              To Learn With Confidence
            </span>
          </h2>

          <p className="mt-6 text-lg text-brand-mutedSage leading-8">
            We combine experienced tutors, personalised teaching, weekly
            progress tracking and flexible online learning to help every child
            reach their full academic potential.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Background Accent */}
            <div className="absolute -left-10 top-16 w-72 h-72 rounded-full bg-brand-green/10 blur-3xl" />

            {/* Main Image */}
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/Girl1.jpg"
                alt="Student learning"
                width={560}
                height={720}
                className="
        w-full
        h-[650px]
        rounded-[36px]
        object-cover
        shadow-[0_30px_60px_rgba(0,0,0,0.12)]
      "
              />
            </div>
          </motion.div>

          {/* RIGHT */}

          <div className="space-y-8">

            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .12,
                    duration: .5,
                  }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-lightGreen flex items-center justify-center group-hover:bg-brand-green transition">
                    <Icon
                      size={26}
                      className="text-brand-deepGreen group-hover:text-white transition"
                    />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-brand-deepGreen mb-2">
                      {item.title}
                    </h3>

                    <p className="text-brand-mutedSage leading-7">
                      {item.body}
                    </p>

                  </div>

                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: .6 }}
              className="pt-6"
            >
              <Link
                href="/#book"
                className="inline-flex items-center gap-3 bg-brand-deepGreen hover:bg-brand-green text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:gap-5"
              >
                Book a Free Academic Assessment

                <ArrowRight size={18} />
              </Link>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}