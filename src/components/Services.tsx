import { Layers, Layout, Server, Database } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
      
      {/* Section Header */}
      <div className="mb-14">
        <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-2">
          Offerings
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          What I Can Build
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-3xl">
          Core development services and architectural solutions I provide.
        </p>
      </div>

      {/* Services Grid - 4 Columns on XL screens, 2 on MD, 1 on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Service 1: Full Stack Web Applications */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-slate-500 font-mono text-xs font-bold">01</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Full Stack Applications
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Complete web platforms featuring unified client-server architectures, authentication, role-based authorization, and state synchronization from database to browser.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              React & Next.js
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              Node.js Runtimes
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              Full Lifecycle
            </span>
          </div>
        </div>

        {/* Service 2: Modern React / Next.js Websites */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center shrink-0">
                <Layout className="w-6 h-6" />
              </div>
              <span className="text-slate-500 font-mono text-xs font-bold">02</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Modern Websites
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Fast, accessible, and responsive user interfaces engineered with modern React components, responsive layouts, Tailwind styling, and smooth interactions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              Responsive Design
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              Tailwind CSS
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              Fast Loading
            </span>
          </div>
        </div>

        {/* Service 3: REST APIs & Backend Systems */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0">
                <Server className="w-6 h-6" />
              </div>
              <span className="text-slate-500 font-mono text-xs font-bold">03</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              REST APIs & Backends
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Reliable backend architectures built with Node.js and Express.js, featuring strict request validation, token authentication (JWT), error handling, and clean contracts.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              Express.js
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              JWT Authentication
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              REST Standards
            </span>
          </div>
        </div>

        {/* Service 4: Database-Driven Applications */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-slate-500 font-mono text-xs font-bold">04</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Database Solutions
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Robust data persistence solutions leveraging PostgreSQL and MongoDB with clean schema design, relational integrity, aggregation pipelines, and high query efficiency.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              PostgreSQL
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              MongoDB
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300">
              Schema Design
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
