import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
      
      {/* Section Header */}
      <div className="mb-14">
        <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-2">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-3xl">
          Real-world web applications and systems built with modern technologies.
        </p>
      </div>

      {/* Projects Grid: 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        
        {/* Project 1: AegisTrace */}
        <div className="rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col">
          {/* Project Image */}
          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
            <Image
              src="/images/projects/aegis-trace.jpg"
              alt="AegisTrace Blockchain Forensics Platform developed by Dnyaneshwar Kardile"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-amber-400 backdrop-blur-sm">
              Cybercrime Forensics • SIH 2026
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                ShadowTrace — Blockchain Forensics Platform
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Blockchain transaction tracing and entity profiling platform developed for digital asset forensics. Analyzes multi-hop fund flows across blockchain networks, clusters wallet addresses, and visualizes forensic transaction graphs to track illicit digital asset movements.
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  Next.js
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  TypeScript
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  FastAPI
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  PostgreSQL
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  Docker
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <a
                href="https://github.com/DNYANESHWAR-KARDILE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2: Hostel Gate Pass */}
        <div className="rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col">
          {/* Project Image */}
          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
            <Image
              src="/images/projects/hostel-gate-pass.jpg"
              alt="Hostel Gate Pass Management System developed by Dnyaneshwar Kardile"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-blue-400 backdrop-blur-sm">
              Full Stack Application
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Hostel Gate Pass Management System
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                End-to-end digital campus outing platform with role-based access for students, wardens, and security personnel. Features outing requests, warden approval workflows, dynamic QR verification at campus gates, and automated real-time entry/exit telemetry.
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  React
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  Node.js
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  Express.js
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  MongoDB
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  JWT Auth
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <a
                href="https://github.com/DNYANESHWAR-KARDILE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3: Online Shopping Management */}
        <div className="rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col">
          {/* Project Image */}
          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
            <Image
              src="/images/projects/online-shopping.jpg"
              alt="Online Shopping Management System developed by Dnyaneshwar Kardile"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-emerald-400 backdrop-blur-sm">
              Full Stack E-Commerce
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Online Shopping Management System
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Complete e-commerce platform with product catalogs, dynamic category filtering, shopping cart synchronization, order checkout, and an administrative dashboard for inventory and order management.
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  React
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  Node.js
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  Express.js
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  MongoDB
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <a
                href="https://github.com/DNYANESHWAR-KARDILE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project 4: Sky Glass Weather App */}
        <div className="rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col">
          {/* Project Image */}
          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
            <Image
              src="/images/projects/sky-glass.png"
              alt="Sky Glass Modern Weather Web Application developed by Dnyaneshwar Kardile"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-cyan-400 backdrop-blur-sm">
              Glassmorphism Web App
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Sky Glass — Modern Weather Web Application
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Sleek, responsive weather checking application with Glassmorphism UI design. Integrates OpenWeather API to provide real-time meteorological metrics, temperature trends, wind velocity, humidity gauges, and 5-day weather forecasts.
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  HTML5
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  CSS3
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  JavaScript
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  OpenWeather API
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  Glassmorphism UI
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <a
                href="https://github.com/DNYANESHWAR-KARDILE/whether_forcast"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <a
                href="https://sky-glasss.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
