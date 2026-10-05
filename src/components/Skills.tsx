import { Layout, Server, Database, Wrench } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
      
      {/* Section Header */}
      <div className="mb-14">
        <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-2">
          Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Technical Skills
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-3xl">
          Core technologies, frameworks, databases, and development tools I work with.
        </p>
      </div>

      {/* 4 Skill Category Cards - 4 Columns on XL screens, 2 on MD, 1 on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Category 1: Frontend Development */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Frontend
                </h3>
                <p className="text-slate-400 text-xs">
                  Client interfaces & UI
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Building responsive, accessible user interfaces with modern React paradigms and utility styling.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
              React
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
              Next.js
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
              JavaScript
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              Tailwind CSS
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
              HTML5 / CSS3
            </span>
          </div>
        </div>

        {/* Category 2: Backend Development */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Backend
                </h3>
                <p className="text-slate-400 text-xs">
                  Server runtimes & APIs
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Developing structured server runtimes, RESTful endpoints, token authentication, and validation layers.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
              Node.js
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
              Express.js
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
              RESTful APIs
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
              JWT Auth
            </span>
          </div>
        </div>

        {/* Category 3: Database Architecture */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Databases
                </h3>
                <p className="text-slate-400 text-xs">
                  SQL & NoSQL architectures
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Structuring normalized schemas, managing collections, indexing for efficiency, and executing reliable queries.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
              PostgreSQL
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-semibold">
              MongoDB
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
              Mongoose
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
              Data Modeling
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
              Indexing
            </span>
          </div>
        </div>

        {/* Category 4: Tools & DevOps */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Tools & DevOps
                </h3>
                <p className="text-slate-400 text-xs">
                  Workflow & tooling
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Modern developer workflows for version control, containerization, API testing, and deployment.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
              Git
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
              GitHub
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
              Docker
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-semibold">
              Postman
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
              Linux
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
              Vercel
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
