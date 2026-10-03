import { GraduationCap, Code, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto py-24 px-6 sm:px-8 lg:px-12 xl:px-16">

      {/* Section Header */}
      <div className="mb-14">
        <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-2">
          Journey & Focus
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Education & Experience
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-3xl">
          Academic background at SPPU and hands-on focus areas in full-stack engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Left Column: Academic Timeline */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span>Academic Background</span>
          </h3>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md relative">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold">
                2024 — Present
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Studies
              </span>
            </div>

            <h4 className="text-xl font-bold text-white mb-1.5">
              Bachelor of Engineering in Computer Engineering
            </h4>
            <p className="text-slate-400 text-sm font-medium mb-4">
              Sir Visvesraya Institude Of Nashik
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Currently pursuing undergraduate studies in Computer Engineering (Second Year). Deepening foundational knowledge in algorithmic problem solving, software engineering principles, system architectures, and database systems while building production-grade web systems.
            </p>

            <div className="space-y-3 pt-5 border-t border-slate-800">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Second Year Computer Engineering Curriculum</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Core Data Structures & Algorithmic Problem Solving</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Relational & Document Database Architectures</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Computer Networks & Operating Systems Foundations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Practical Development Practice & Focus */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
            <Code className="w-5 h-5 text-blue-400" />
            <span>Active Development Focus</span>
          </h3>

          <div className="space-y-4">

            {/* Focus 1: Full Stack Architecture */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Full Stack Web Architecture
                </h4>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                  End-to-End
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Architecting complete web systems with clean separation between client-side interfaces and backend API runtimes.
              </p>
            </div>

            {/* Focus 2: Backend Development */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Backend & REST APIs
                </h4>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                  Node & Express
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Building resilient server runtimes, structured routing, JWT authentication, and idempotent RESTful endpoints.
              </p>
            </div>

            {/* Focus 3: Database Engineering */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Database Design & Modeling
                </h4>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                  SQL & NoSQL
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Modeling clean schemas in PostgreSQL and MongoDB, indexing for query speed, and ensuring data integrity.
              </p>
            </div>

            {/* Focus 4: Real-world Applications */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Modern React & Next.js Platforms
                </h4>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                  Modern Frontend
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Crafting fast, accessible, and responsive user experiences using React, Next.js, and utility-first Tailwind CSS.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
