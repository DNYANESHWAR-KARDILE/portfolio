import {
  GraduationCap,
  Code2,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        w-full
        max-w-[1440px]
        2xl:max-w-[1600px]
        mx-auto
        py-20
        sm:py-24
        px-6
        sm:px-8
        lg:px-12
        xl:px-16
      "
    >
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <div className="mb-12 sm:mb-14">
        <span
          className="
            text-amber-400
            font-mono
            text-xs
            uppercase
            tracking-widest
            block
            mb-2
          "
        >
          My Journey
        </span>

        <h2
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-extrabold
            text-white
            tracking-tight
          "
        >
          Education & Experience
        </h2>

        <p
          className="
            text-slate-400
            text-base
            sm:text-lg
            mt-3
            max-w-3xl
            leading-relaxed
          "
        >
          My journey as a Computer Engineering student and Full Stack
          Developer, focused on learning modern technologies and building
          practical web applications.
        </p>
      </div>

      {/* =====================================================
          MAIN GRID
      ====================================================== */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-8
          lg:gap-10
          items-start
        "
      >

        {/* =====================================================
            LEFT — EDUCATION
        ====================================================== */}

        <div className="lg:col-span-6 flex flex-col gap-5">

          {/* Heading */}
          <h3
            className="
              text-xl
              font-bold
              text-white
              flex
              items-center
              gap-2.5
            "
          >
            <GraduationCap
              className="
                w-5
                h-5
                text-amber-400
              "
            />

            <span>Education</span>
          </h3>

          {/* Education Card */}
          <div
            className="
              p-7
              sm:p-8
              rounded-2xl
              bg-slate-900/60
              border
              border-slate-800/80
              backdrop-blur-md
              hover:border-slate-700
              transition-colors
              duration-300
            "
          >

            {/* Top Row */}
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
                mb-5
              "
            >
              <span
                className="
                  px-3.5
                  py-1
                  rounded-full
                  bg-amber-400/10
                  border
                  border-amber-400/30
                  text-amber-400
                  text-xs
                  font-semibold
                "
              >
                2024 — Present
              </span>

              <span
                className="
                  text-xs
                  font-mono
                  text-emerald-400
                  flex
                  items-center
                  gap-1.5
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-emerald-400
                    animate-pulse
                  "
                />

                Currently Studying
              </span>
            </div>

            {/* Degree */}
            <h4
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-white
                mb-2
              "
            >
              Bachelor of Engineering
            </h4>

            <p
              className="
                text-blue-400
                text-sm
                sm:text-base
                font-medium
                mb-1
              "
            >
              Computer Engineering
            </p>

            <p
              className="
                text-slate-400
                text-sm
                font-medium
                mb-5
              "
            >
              Sir Visvesvaraya Institute of Technology, Nashik
            </p>

            {/* Description */}
            <p
              className="
                text-slate-300
                text-sm
                sm:text-base
                leading-relaxed
                mb-6
              "
            >
              Currently pursuing Computer Engineering with a strong interest
              in software development, web technologies, databases, and
              problem solving. Alongside academics, I focus on building
              practical applications and improving my full-stack development
              skills.
            </p>

            {/* Skills / Learning */}
            <div
              className="
                space-y-3
                pt-5
                border-t
                border-slate-800
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2.5
                  text-xs
                  sm:text-sm
                  text-slate-300
                "
              >
                <CheckCircle2
                  className="
                    w-4
                    h-4
                    text-amber-400
                    shrink-0
                  "
                />

                <span>
                  Computer Engineering & Core CS Fundamentals
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2.5
                  text-xs
                  sm:text-sm
                  text-slate-300
                "
              >
                <CheckCircle2
                  className="
                    w-4
                    h-4
                    text-amber-400
                    shrink-0
                  "
                />

                <span>
                  Data Structures & Algorithmic Problem Solving
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2.5
                  text-xs
                  sm:text-sm
                  text-slate-300
                "
              >
                <CheckCircle2
                  className="
                    w-4
                    h-4
                    text-amber-400
                    shrink-0
                  "
                />

                <span>
                  Database Management & Backend Fundamentals
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2.5
                  text-xs
                  sm:text-sm
                  text-slate-300
                "
              >
                <CheckCircle2
                  className="
                    w-4
                    h-4
                    text-amber-400
                    shrink-0
                  "
                />

                <span>
                  Web Development & Software Engineering
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT — DEVELOPMENT EXPERIENCE
        ====================================================== */}

        <div className="lg:col-span-6 flex flex-col gap-5">

          {/* Heading */}
          <h3
            className="
              text-xl
              font-bold
              text-white
              flex
              items-center
              gap-2.5
            "
          >
            <BriefcaseBusiness
              className="
                w-5
                h-5
                text-blue-400
              "
            />

            <span>Development Experience</span>
          </h3>

          <div className="space-y-4">

            {/* Experience 1 */}
            <div
              className="
                p-6
                rounded-2xl
                bg-slate-900/60
                border
                border-slate-800/80
                backdrop-blur-md
                hover:border-slate-700
                hover:bg-slate-900/80
                transition-all
                duration-300
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  mb-2
                "
              >
                <h4
                  className="
                    text-base
                    sm:text-lg
                    font-bold
                    text-white
                  "
                >
                  Full Stack Web Development
                </h4>

                <span
                  className="
                    text-[11px]
                    font-mono
                    text-slate-400
                    px-2
                    py-0.5
                    rounded
                    bg-slate-800
                    border
                    border-slate-700
                  "
                >
                  MERN
                </span>
              </div>

              <p
                className="
                  text-slate-300
                  text-sm
                  sm:text-base
                  leading-relaxed
                "
              >
                Building complete web applications using React, Next.js,
                Node.js, Express.js, MongoDB, and PostgreSQL with a focus on
                responsive interfaces and reliable backend APIs.
              </p>
            </div>

            {/* Experience 2 */}
            <div
              className="
                p-6
                rounded-2xl
                bg-slate-900/60
                border
                border-slate-800/80
                backdrop-blur-md
                hover:border-slate-700
                hover:bg-slate-900/80
                transition-all
                duration-300
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  mb-2
                "
              >
                <h4
                  className="
                    text-base
                    sm:text-lg
                    font-bold
                    text-white
                  "
                >
                  Backend & API Development
                </h4>

                <span
                  className="
                    text-[11px]
                    font-mono
                    text-slate-400
                    px-2
                    py-0.5
                    rounded
                    bg-slate-800
                    border
                    border-slate-700
                  "
                >
                  Node.js
                </span>
              </div>

              <p
                className="
                  text-slate-300
                  text-sm
                  sm:text-base
                  leading-relaxed
                "
              >
                Developing REST APIs with Node.js and Express.js, implementing
                authentication, routing, middleware, validation, CRUD
                operations, and backend integrations.
              </p>
            </div>

            {/* Experience 3 */}
            <div
              className="
                p-6
                rounded-2xl
                bg-slate-900/60
                border
                border-slate-800/80
                backdrop-blur-md
                hover:border-slate-700
                hover:bg-slate-900/80
                transition-all
                duration-300
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  mb-2
                "
              >
                <h4
                  className="
                    text-base
                    sm:text-lg
                    font-bold
                    text-white
                  "
                >
                  Database Development
                </h4>

                <span
                  className="
                    text-[11px]
                    font-mono
                    text-slate-400
                    px-2
                    py-0.5
                    rounded
                    bg-slate-800
                    border
                    border-slate-700
                  "
                >
                  SQL + NoSQL
                </span>
              </div>

              <p
                className="
                  text-slate-300
                  text-sm
                  sm:text-base
                  leading-relaxed
                "
              >
                Working with MongoDB and PostgreSQL for application data,
                schema design, relationships, queries, CRUD operations,
                and maintaining structured data.
              </p>
            </div>

            {/* Experience 4 */}
            <div
              className="
                p-6
                rounded-2xl
                bg-slate-900/60
                border
                border-slate-800/80
                backdrop-blur-md
                hover:border-slate-700
                hover:bg-slate-900/80
                transition-all
                duration-300
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  mb-2
                "
              >
                <h4
                  className="
                    text-base
                    sm:text-lg
                    font-bold
                    text-white
                  "
                >
                  React & Next.js Development
                </h4>

                <span
                  className="
                    text-[11px]
                    font-mono
                    text-slate-400
                    px-2
                    py-0.5
                    rounded
                    bg-slate-800
                    border
                    border-slate-700
                  "
                >
                  Frontend
                </span>
              </div>

              <p
                className="
                  text-slate-300
                  text-sm
                  sm:text-base
                  leading-relaxed
                "
              >
                Creating responsive and modern interfaces with React,
                Next.js, Tailwind CSS, React Router, reusable components,
                and responsive design principles.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}