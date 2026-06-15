"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCurrency } from "@/context/CurrencyContext";

const navLinks = [
  { name: "Subjects", href: "/#subjects" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Tutors", href: "/tutors" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function NavigationWrapper() {
  const pathname = usePathname();
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-3 sm:gap-5 font-sans relative">

      {/* Desktop nav links */}
      <nav className="hidden xl:flex items-center gap-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-200 ${
                isActive
                  ? "text-brand-deepGreen after:w-full after:bg-brand-deepGreen"
                  : "text-brand-mutedSage hover:text-brand-deepGreen after:w-0 hover:after:w-full after:bg-brand-midGreen"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Book a Session CTA */}
      <Link
        href="/#book"
        className="hidden sm:inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-150 shadow-md shadow-brand-yellow/20 hover:-translate-y-0.5 tap-target whitespace-nowrap"
      >
        Book a Session →
      </Link>

      {/* Mobile burger */}
      <button
        onClick={() => setOpen(!open)}
        className="xl:hidden p-2 text-brand-deepGreen rounded-lg hover:bg-brand-lightGreen/60 transition-colors tap-target cursor-pointer"
        aria-label="Toggle navigation menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile flyout */}
      {open && (
        <div className="absolute top-[calc(100%+16px)] right-0 w-72 bg-white border border-brand-lightGreen rounded-2xl shadow-2xl z-50 p-5 xl:hidden animate-fadeIn">
          <div className="flex flex-col gap-1 mb-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-brand-deepGreen hover:text-brand-midGreen hover:bg-brand-faintGreen px-3 py-2.5 rounded-xl transition-colors tap-target"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-brand-faintGreen pt-4 space-y-3">
            <Link
              href="/#book"
              onClick={() => setOpen(false)}
              className="block w-full bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold py-3.5 rounded-xl text-center text-sm tap-target"
            >
              📚 Book a Session
            </Link>
            <a
              href="https://wa.me/2347043523556?text=Hi%20Schoolhelphub%2C%20I%27d%20like%20to%20book%20a%20free%20trial."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm tap-target"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.557-5.338 11.902-11.892 11.902-2.004-.001-3.973-.51-5.713-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.892-1.84-1.842-4.29-2.856-6.889-2.858-5.441 0-9.867 4.371-9.871 9.743-.001 1.933.507 3.821 1.474 5.485L1.922 22.18l4.725-1.026z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
