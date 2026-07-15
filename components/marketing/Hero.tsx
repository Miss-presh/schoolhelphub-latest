"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";


function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2200;
          const increment = Math.max(1, Math.ceil(target / 80));
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setVal(current);
            if (current >= target) clearInterval(timer);
          }, duration / 80);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier
    },
  },
};

export default function Hero() {

  return (
    <section className="relative overflow-hidden">

      {/* Hero Image */}

      <div className="relative h-[92vh] min-h-[760px]">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/boy.png"
            alt="Student learning online"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

        {/* soft green tint */}

        <div className="absolute inset-0 bg-brand-deepGreen/20" />

        {/* Content */}

        <div className="relative z-20 max-w-7xl mx-auto h-full px-6 lg:px-10 flex items-center">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-white"
          >

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2"
            >
              ⭐
              <span className="text-sm">
                Trusted by families in the UK, USA, Nigeria, Canada & UAE
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-8 font-serif text-5xl lg:text-7xl font-bold leading-tight"
            >
              Where Confidence
              <br />
              Meets
              <span className="block text-yellow-300">
                Academic Success
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-xl text-white/90 leading-8 max-w-xl"
            >
              Live online tuition for children aged 4–16 delivered by experienced tutors
              in Maths, English, Science, SATs, GCSE, IGCSE and 11+ preparation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >

              <Link
                href="/#book"
                className="bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition-all duration-300 text-black rounded-xl px-8 py-4 font-semibold shadow-xl"
              >
                Book A Free Academic Assessment
              </Link>

              <Link
                href="#"
                className="border border-white/40 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 rounded-xl px-8 py-4 font-semibold"
              >
                View Programmes
              </Link>

            </motion.div>

          </motion.div>

        </div>

        {/* Pricing */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0]
          }}
          transition={{
            opacity: {
              delay: 1.2,
              duration: .6
            },
            x: {
              delay: 1.2,
              duration: .6
            },
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }
          }}
          className="absolute top-32 right-10 bg-white rounded-3xl shadow-2xl p-6 hidden xl:block"
        >
          <p className="uppercase text-xs tracking-widest text-gray-500">

            Sessions From

          </p>

          <h2 className="text-4xl font-bold text-brand-deepGreen">

            ₦60,000

            <span className="text-lg text-gray-500">

              /month

            </span>

          </h2>

          <p className="text-gray-500 text-sm">

            Flexible Monthly Plans

          </p>

        </motion.div >

      </div >

      {/* Bottom Trust Bar */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
        className="bg-white shadow-xl relative z-30 -mt-10 rounded-3xl max-w-6xl mx-auto px-10 py-8"
      >
        <div className="grid lg:grid-cols-4 gap-8">

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            transition={{
              duration: .25,
            }}
          >
            <h3 className="text-4xl font-bold text-brand-deepGreen">

              <CountUp target={10} suffix="+" />

            </h3>

            <p className="font-semibold mt-2">

              Years Teaching Experience

            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            transition={{
              duration: .25,
            }}
          >
            <h3 className="text-4xl font-bold text-brand-deepGreen">

              <CountUp target={1600} suffix="+" />

            </h3>

            <p className="font-semibold mt-2">

              Live Lessons Monthly

            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            transition={{
              duration: .25,
            }}
          >
            <h3 className="text-4xl font-bold text-brand-deepGreen">

              <CountUp target={200} suffix="+" />

            </h3>

            <p className="font-semibold mt-2">

              Students Supported

            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            transition={{
              duration: .25,
            }}
          >

            <h3 className="text-4xl font-bold text-brand-deepGreen">

              <CountUp target={50} suffix="+" />

            </h3>

            <p className="font-semibold mt-2">

              Qualified Tutors

            </p>

          </motion.div>

        </div>

      </motion.div >

    </section >
  );
}
