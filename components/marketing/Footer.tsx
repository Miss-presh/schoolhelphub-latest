import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

import Image from "next/image";

const footerLinks = {
  Subjects: [
    "Mathematics",
    "English",
    "Science",
    "Coding",
    "Exam Prep",
  ],
  Company: [
    "About Us",
    "Our Tutors",
    "Programmes",
    "Pricing",
    "Testimonials",
  ],
  Support: [
    "Contact",
    "FAQ",
    "Privacy Policy",
    "Terms of Service",
    "Safeguarding",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-deepGreen text-white">

      {/* ================= SUPPORT ================= */}

      <div className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left */}

            <div className="flex flex-col md:flex-row items-center gap-8">

              {/* Parents */}

              <div className="flex -space-x-4">

                <Image
                  src="/boy1.jpg"
                  alt="boy"
                  className="w-16 h-16 rounded-full border-4 border-brand-green object-cover"
                />

                <Image
                  src="/girl2.jpg"
                  alt="girl"
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />

                <Image
                  src="/boy2.jpg"
                  alt="boy"
                  className="w-16 h-16 rounded-full border-4 border-brand-yellow object-cover"
                />

              </div>

              <div>

                <h2 className="font-serif text-4xl leading-tight font-bold">

                  Need help choosing the
                  <br />
                  right programme?

                </h2>

                <p className="text-white/60 mt-3 max-w-xl">

                  Speak directly with one of our Academic Advisors.
                  We&apos;ll recommend the right programme for your child,
                  answer your questions and book a free assessment.

                </p>

                <div className="flex flex-wrap gap-6 mt-6 text-sm">

                  <a
                    href="tel:+2347043523556"
                    className="flex items-center gap-2 hover:text-brand-yellow transition"
                  >
                    <Phone size={18} />
                    +234 704 352 3556
                  </a>

                  <a
                    href="https://wa.me/2347043523556"
                    className="flex items-center gap-2 hover:text-brand-yellow transition"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>

                  <a
                    href="mailto:hello@schoolhelphub.com"
                    className="flex items-center gap-2 hover:text-brand-yellow transition"
                  >
                    <Mail size={18} />
                    hello@schoolhelphub.com
                  </a>

                </div>

              </div>

            </div>

            {/* CTA */}

            <Link
              href="/#book"
              className="bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen px-8 py-5 rounded-2xl font-bold shadow-xl hover:-translate-y-1 transition flex items-center gap-2 whitespace-nowrap"
            >
              Book A Free Academic Assessment
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center font-bold text-brand-deepGreen">
                S
              </div>

              <span className="font-serif text-2xl font-bold">

                School
                <span className="text-brand-yellow font-light">
                  help
                </span>
                hub

              </span>

            </div>

            <p className="text-white/60 leading-8">

              Live online tutoring helping children across
              Nigeria, the UK and beyond build confidence,
              improve grades and prepare for important exams.

            </p>

            <div className="space-y-3 mt-8 text-white/60">

              <p>🇳🇬 Nigeria</p>

              <p>🇬🇧 United Kingdom</p>

            </div>

          </div>

          {/* Links */}

          {Object.entries(footerLinks).map(([title, items]) => (

            <div key={title}>

              <h4 className="uppercase tracking-widest text-xs font-bold text-white mb-5">

                {title}

              </h4>

              <ul className="space-y-4">

                {items.map((item) => (

                  <li key={item}>

                    <Link
                      href="#"
                      className="text-white/55 hover:text-brand-yellow transition"
                    >
                      {item}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">

          <p className="text-white/40 text-sm">

            © {new Date().getFullYear()} Schoolhelphub.
            All rights reserved.

          </p>

          <div className="flex gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-yellow hover:text-brand-deepGreen flex items-center justify-center transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-yellow hover:text-brand-deepGreen flex items-center justify-center transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-yellow hover:text-brand-deepGreen flex items-center justify-center transition"
            >
              <FaLinkedin size={18} />
            </a>

          </div>
        </div>

      </div>

    </footer>
  );
}