import { GraduationCap, Code2, Database, Layers3 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto py-20 sm:py-24 px-6 sm:px-8 lg:px-12 xl:px-16"
    >
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-2">
          Who I Am
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          About Me
        </h2>

        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-3xl">
          A MERN Stack Developer focused on building modern and scalable web
          applications.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
        {/* Left: About Story */}
        <div className="lg:col-span-7 flex flex-col gap-5 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p>
            I am a{" "}
            <strong className="text-white font-semibold">
              MERN Stack Developer
            </strong>{" "}
            and Computer Engineering student who enjoys building modern,
            responsive, and scalable web applications.
          </p>

          <p>
            I work primarily with{" "}
            <span className="text-amber-400 font-medium">
              MongoDB, Express.js, React, and Node.js
            </span>
            , developing complete applications from interactive frontend
            interfaces to REST APIs and database integration.
          </p>

          <p>
            I enjoy turning ideas into real working products with a focus on{" "}
            <span className="text-white font-medium">
              clean code, responsive UI, smooth user experience, and reliable
              backend architecture
            </span>
            . I continuously improve my development skills by building
            projects and exploring new technologies.
          </p>

          <p>
            My goal is to grow as a{" "}
            <span className="text-amber-400 font-medium">
              Full Stack Developer
            </span>{" "}
            and build software that is practical, scalable, and genuinely
            useful.
          </p>
        </div>

        {/* Right: Quick Overview */}
        <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            Quick Overview
          </h3>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3 gap-4">
              <span className="text-slate-400">Role</span>
              <span className="text-slate-200 font-medium text-right">
                MERN Stack Developer
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-slate-800 pb-3 gap-4">
              <span className="text-slate-400">Education</span>
              <span className="text-slate-200 font-medium text-right">
                Computer Engineering
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-slate-800 pb-3 gap-4">
              <span className="text-slate-400">Institute</span>
              <span className="text-slate-200 font-medium text-right">
                SVIT Nashik (SPPU)
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-slate-800 pb-3 gap-4">
              <span className="text-slate-400">Stack</span>
              <span className="text-slate-200 font-medium text-right">
                MongoDB · Express · React · Node
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-slate-800 pb-3 gap-4">
              <span className="text-slate-400">Location</span>
              <span className="text-slate-200 font-medium text-right">
                Nashik, India
              </span>
            </div>

            <div className="flex justify-between items-center pt-1 gap-4">
              <span className="text-slate-400">Focus</span>

              <span className="text-emerald-400 font-medium flex items-center gap-1.5 text-right">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Web Development
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-5">
            <GraduationCap className="w-6 h-6" />
          </div>

          <h4 className="text-white font-bold text-lg mb-2">
            Computer Engineering
          </h4>

          <p className="text-slate-400 text-sm leading-relaxed">
            Building a strong foundation in programming, databases, data
            structures, computer networks, and software development.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center mb-5">
            <Code2 className="w-6 h-6" />
          </div>

          <h4 className="text-white font-bold text-lg mb-2">
            MERN Development
          </h4>

          <p className="text-slate-400 text-sm leading-relaxed">
            Building full-stack applications using MongoDB, Express.js, React,
            and Node.js with modern development practices.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-400/40 hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-5">
            <Database className="w-6 h-6" />
          </div>

          <h4 className="text-white font-bold text-lg mb-2">
            Backend & APIs
          </h4>

          <p className="text-slate-400 text-sm leading-relaxed">
            Developing REST APIs, authentication systems, database
            integration, and backend logic with Node.js and Express.js.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center mb-5">
            <Layers3 className="w-6 h-6" />
          </div>

          <h4 className="text-white font-bold text-lg mb-2">
            Building Real Projects
          </h4>

          <p className="text-slate-400 text-sm leading-relaxed">
            Learning through practical projects and turning ideas into
            responsive, functional, and user-focused web applications.
          </p>
        </div>
      </div>
    </section>
  );
}