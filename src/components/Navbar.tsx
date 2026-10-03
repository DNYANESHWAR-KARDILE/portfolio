"use client";

import { useState } from "react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-sm shadow-sm group-hover:bg-amber-300 transition-colors">
            DK
          </div>
          <span className="font-bold text-white tracking-tight text-base sm:text-lg group-hover:text-amber-400 transition-colors">
            Dnyaneshwar Kardile
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium">
          <a href="#home" className="text-slate-300 hover:text-amber-400 transition-colors">
            Home
          </a>
          <a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">
            About
          </a>
          <a href="#skills" className="text-slate-300 hover:text-amber-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-slate-300 hover:text-amber-400 transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-slate-300 hover:text-amber-400 transition-colors">
            Experience
          </a>
          <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">
            Services
          </a>
          <a href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors">
            Contact
          </a>

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-semibold hover:bg-amber-300 transition-colors text-xs sm:text-sm shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1424] border-b border-white/10 px-6 pt-4 pb-7 flex flex-col gap-3.5">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-400 text-base font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-400 text-base font-medium"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-400 text-base font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-400 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-400 text-base font-medium"
          >
            Experience
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-400 text-base font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-400 text-base font-medium"
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}
