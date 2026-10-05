import Image from "next/image";
import {
  ArrowRight,
  Mail,
  FileText,
  GraduationCap,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        w-full
        min-h-[calc(100svh-72px)]
        flex
        items-center
      "
    >
      <div
        className="
          w-full
          max-w-[1440px]
          2xl:max-w-[1600px]
          mx-auto
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
          py-8
          sm:py-10
          lg:py-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.1fr_0.9fr]
            gap-10
            lg:gap-12
            xl:gap-16
            items-center
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="flex flex-col items-start text-left">

            {/* Greeting */}
            <span
              className="
                text-amber-400
                font-semibold
                text-lg
                sm:text-xl
                mb-7
                mt-20
              "
            >
              Hi, I'm
            </span>

            {/* Name */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
                font-extrabold
                text-white
                tracking-tight
                leading-[1.05]
                mb-9
              "
            >
              Dnyaneshwar Kardile
            </h1>

            {/* Role */}
            <p
              className="
                text-blue-400
                font-bold
                text-xl
                sm:text-2xl
                mb-5
              "
            >
              Full Stack Developer
            </p>

            {/* Description */}
            <p
              className="
                text-slate-300
                text-lg
                sm:text-xl
                leading-relaxed
                max-w-3xl
                mb-7
              "
            >
              Computer Engineering student at Savitribai Phule Pune University (SPPU) and Full Stack Developer based in Maharashtra, India. I build modern, scalable web applications using React, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL. I enjoy turning ideas into responsive, user-focused, and production-ready digital experiences while continuously learning and exploring new technologies.
            </p>

            {/* =====================================================
                BUTTONS
            ====================================================== */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-3
                sm:gap-4
                mb-7
              "
            >

              {/* Projects */}
              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3
                  rounded-full
                  bg-amber-400
                  text-slate-950
                  font-bold
                  text-sm
                  sm:text-base
                  hover:bg-amber-300
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-amber-400/10
                  active:scale-95
                "
              >
                View My Projects

                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  font-medium
                  text-sm
                  sm:text-base
                  hover:bg-white/10
                  hover:border-white/20
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                  active:scale-95
                "
              >
                <Mail className="w-4 h-4" />

                Let's Connect
              </a>

              {/* CV */}
              <a
                href="/resume/Dnyaneshwar_Kardile_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-slate-300
                  font-medium
                  text-sm
                  sm:text-base
                  hover:bg-white/10
                  hover:text-white
                  hover:border-white/20
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                  active:scale-95
                "
              >
                <FileText className="w-4 h-4 text-amber-400" />

                Download CV
              </a>

            </div>

            {/* =====================================================
                TECHNOLOGIES
            ====================================================== */}

            <div
              className="
                flex
                flex-wrap
                gap-2.5
                mb-6
              "
            >
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "MongoDB",
                "Tailwind CSS",
                "Git & Github",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3.5
                    py-1.5
                    rounded-full
                    bg-slate-900/80
                    border
                    border-slate-800
                    text-xs
                    sm:text-sm
                    text-slate-300
                    hover:text-white
                    hover:border-slate-600
                    transition-all
                    duration-200
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* =====================================================
                SOCIAL ICONS
            ====================================================== */}

            <div className="flex items-center gap-3 mt-7">

              {/* GitHub */}
              <a
                href="https://github.com/DNYANESHWAR-KARDILE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-slate-900/80
                  border
                  border-slate-800
                  text-slate-400
                  hover:text-white
                  hover:border-amber-400
                  hover:bg-slate-800
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaGithub className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dnyaneshwar-u-kardile-9644bb379"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-slate-900/80
                  border
                  border-slate-800
                  text-slate-400
                  hover:text-white
                  hover:border-amber-400
                  hover:bg-slate-800
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin className="w-4 h-4" />
              </a>

              {/* X */}
              <a
                href="#"
                aria-label="X / Twitter"
                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-slate-900/80
                  border
                  border-slate-800
                  text-slate-400
                  hover:text-white
                  hover:border-amber-400
                  hover:bg-slate-800
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaXTwitter className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href="mailto:maulikardile150@gmail.com"
                aria-label="Email"
                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-slate-900/80
                  border
                  border-slate-800
                  text-slate-400
                  hover:text-white
                  hover:border-amber-400
                  hover:bg-slate-800
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <Mail className="w-4 h-4" />
              </a>

            </div>
          </div>

          {/* =====================================================
              RIGHT PROFILE CARD
          ====================================================== */}

          <div
            className="
              flex
              justify-center
              lg:justify-end
              w-full
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[330px]
                sm:max-w-[360px]
                lg:max-w-[390px]
                xl:max-w-[410px]
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  -inset-3
                  rounded-3xl
                  bg-gradient-to-tr
                  from-amber-500/20
                  via-blue-500/15
                  to-purple-500/15
                  blur-2xl
                  opacity-70
                "
              />

              {/* Profile Card */}
              <div
                className="
                  relative
                  rounded-3xl
                  overflow-hidden
                  bg-slate-900/90
                  border
                  border-slate-800/80
                  p-3
                  shadow-2xl
                  backdrop-blur-sm
                "
              >

                {/* Profile Image */}
                <div
                  className="
                    relative
                    aspect-[3/4]
                    w-full
                    rounded-2xl
                    overflow-hidden
                    bg-slate-950
                  "
                >
                  <Image
                    src="/images/profile/dnyaneshwar.jpeg"
                    alt="Dnyaneshwar Kardile - Full Stack Developer"
                    fill
                    priority
                    sizes="
                      (max-width: 640px) 330px,
                      (max-width: 1024px) 360px,
                      410px
                    "
                    className="
                      object-cover
                      object-top
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                {/* Card Info */}
                <div className="pt-3 px-1 flex flex-col gap-2">

                  {/* Institute */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      sm:text-sm
                      text-slate-300
                    "
                  >
                    <GraduationCap
                      className="
                        w-4
                        h-4
                        text-amber-400
                        shrink-0
                      "
                    />

                    <span className="truncate">
                      Sir Visvesraya Institute Of Technology, Nashik
                    </span>
                  </div>

                  {/* Role */}
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      text-xs
                      sm:text-sm
                      text-slate-400
                    "
                  >
                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-blue-400
                        shrink-0
                      "
                    />

                    <span>
                      Computer Engineering • Full Stack Developer
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}