"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 🛠️ Added to read the active URL path
import { useCurrency } from "@/context/CurrencyContext";

export function NavigationWrapper() {
  const pathname = usePathname(); // Get current active route (e.g., "/about")
  const { currency, setCurrency } = useCurrency();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Section 3.1 Architecture links
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Tutors", href: "/tutors" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex items-center gap-4 lg:gap-8 font-sans">
      
      {/* 1. Desktop Contextual Navigation Links with Active Highlighting */}
      <nav className="hidden xl:flex items-center gap-6">
        {navigationLinks.map((link) => {
          // Check if link is active (handling home vs sub-pages accurately)
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-all duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-200 ${
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

      {/* 2. Currency State Switcher */}
      <div className="inline-flex bg-brand-lightGreen/60 p-1 rounded-xl border border-brand-green/10 shadow-inner">
        <button
          onClick={() => setCurrency("GBP")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 uppercase tracking-wider tap-target flex items-center gap-1 cursor-pointer ${
            currency === "GBP"
              ? "bg-brand-deepGreen text-white shadow-sm"
              : "text-brand-mutedSage hover:text-brand-deepGreen"
          }`}
        >
        <span className="hidden sm:inline">GB</span> GBP
        </button>
        <button
          onClick={() => setCurrency("USD")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 uppercase tracking-wider tap-target flex items-center gap-1 cursor-pointer ${
            currency === "USD"
              ? "bg-brand-deepGreen text-white shadow-sm"
              : "text-brand-mutedSage hover:text-brand-deepGreen"
          }`}
        >
        <span className="hidden sm:inline">US</span> USD
        </button>
      </div>

      {/* 3. High-Intent Conversion Anchor */}
      <Link
        href="/free-trial"
        className="hidden sm:inline-block bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-150 shadow-sm-brand hover:-translate-y-0.5 tap-target"
      >
        Book Free Trial
      </Link>

      {/* 4. Responsive Mobile Burger Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="xl:hidden p-2 text-brand-deepGreen rounded-lg hover:bg-brand-lightGreen/50 transition-colors tap-target cursor-pointer"
        aria-label="Toggle structural page navigation menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* 5. Dropdown Flyout Panel Interface (Mobile Highlight Support) */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-brand-cream border-b border-brand-lightGreen shadow-xl z-50 p-6 xl:hidden animate-fadeIn">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-brand-lightGreen text-brand-deepGreen"
                      : "text-brand-deepGreen hover:text-brand-midGreen hover:bg-brand-faintGreen"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-4 border-t border-brand-lightGreen/80">
            <Link
              href="/free-trial"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold p-4 rounded-xl text-center shadow-md-brand tap-target"
            >
              Book Free Trial Session
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}