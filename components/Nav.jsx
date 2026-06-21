'use client';

import React, { useState, useEffect } from "react";
import { Droplets, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-['Inter'] ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[#005B96]">
          <Droplets className="w-8 h-8" />
          <span className="font-['Montserrat'] font-bold text-2xl tracking-tight">
            AQUA Z
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-[#475569] hover:text-[#005B96]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="bg-[#F97316] text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-[#ea580c] transition-colors shadow-[0_4px_14px_rgba(249,115,22,0.3)]"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[#005B96]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#CBD5E1] py-4 px-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-[#475569] font-medium text-lg hover:text-[#005B96]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="bg-[#F97316] text-white px-6 py-3 rounded-md font-semibold text-center hover:bg-[#ea580c] transition-colors mt-2"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
