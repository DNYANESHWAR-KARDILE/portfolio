import Image from "next/image";
import { ArrowRight, Mail, FileText, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 px-6 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Introduction & Details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Full Stack Developer Opportunities &amp; Internships</span>
          </div>

          {/* Greeting */}
          <span className="text-amber-400 font-semibold text-lg sm:text-xl mb-1 block">
            Hi, I'm
          </span>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-2">
            Dnyaneshwar Kardile
          </h1>

          {/* Role */}
          <p className="text-blue-400 font-bold text-xl sm:text-2xl mb-4 tracking-wide">
            Full Stack Developer
          </p>

          {/* Short Introduction */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Computer Engineering student who builds complete web products — from responsive React and Next.js interfaces to robust Node.js, Express, MongoDB, and PostgreSQL backend architectures.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-slate-950 font-bold text-sm sm:text-base hover:bg-amber-300 transition-all shadow-md active:scale-95"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm sm:text-base hover:bg-white/10 transition-all active:scale-95"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Let's Connect</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium text-sm sm:text-base hover:bg-white/10 hover:text-white transition-all active:scale-95"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              React
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              Next.js
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              TypeScript
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              Node.js
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              Express.js
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              PostgreSQL
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              MongoDB
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              Tailwind CSS
            </span>
          </div>

        </div>

        {/* Right Column: Actual Profile Photo Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">

            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-blue-500/15 to-purple-500/15 blur-xl opacity-75" />

            {/* Photo Card Container */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800/80 p-3.5 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/images/profile/dnyaneshwar.jpeg"
                  alt="Dnyaneshwar Kardile - Full Stack Developer"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Badges beneath image */}
              <div className="pt-3.5 px-1.5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">Sir Visvesraya Institute Of Technology, Nashik</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  <span>Computer Engineering • Full Stack Builder</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
