"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  GraduationCap,
  Send,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
          Get In Touch
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
          Let's Connect
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
          I'm Dnyaneshwar Kardile, a Computer Engineering student and Full
          Stack Developer from Maharashtra. I build modern and responsive web
          applications using React, Next.js, Node.js, Express.js, MongoDB, and
          PostgreSQL. I'm always interested in learning new technologies,
          building real-world projects, and collaborating on meaningful ideas.
        </p>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-8
          lg:gap-10
        "
      >

        {/* =====================================================
            LEFT COLUMN
        ====================================================== */}

        <div className="lg:col-span-5">

          {/* About Me */}
          <div className="mb-8">
            <h3
              className="
                text-xl
                font-bold
                text-white
                mb-3
              "
            >
              A Little About Me
            </h3>

            <p
              className="
                text-slate-400
                text-sm
                sm:text-base
                leading-relaxed
              "
            >
              I enjoy turning ideas into practical digital products. My main
              focus is full-stack web development, where I work across both
              frontend and backend technologies. I like exploring new tools,
              solving development problems, and continuously improving my
              skills through hands-on projects.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3
              className="
                text-xl
                font-bold
                text-white
                mb-6
              "
            >
              Contact Information
            </h3>

            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:maulikardile150@gmail.com"
                className="
                  flex
                  items-start
                  gap-4
                  p-4
                  rounded-xl
                  bg-slate-900/60
                  border
                  border-slate-800/80
                  hover:border-slate-700
                  hover:bg-slate-900/80
                  transition-all
                  duration-300
                  group
                "
              >
                <div
                  className="
                    w-10
                    h-10
                    rounded-lg
                    bg-amber-400/10
                    text-amber-400
                    flex
                    items-center
                    justify-center
                    shrink-0
                    group-hover:bg-amber-400
                    group-hover:text-slate-950
                    transition-colors
                  "
                >
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <span
                    className="
                      text-xs
                      text-slate-400
                      block
                      font-mono
                      mb-1
                    "
                  >
                    Email
                  </span>

                  <span
                    className="
                      text-slate-200
                      text-sm
                      font-semibold
                      group-hover:text-amber-400
                      transition-colors
                    "
                  >
                    maulikardile150@gmail.com
                  </span>
                </div>
              </a>

              {/* Location */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  p-4
                  rounded-xl
                  bg-slate-900/60
                  border
                  border-slate-800/80
                "
              >
                <div
                  className="
                    w-10
                    h-10
                    rounded-lg
                    bg-blue-400/10
                    text-blue-400
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <span
                    className="
                      text-xs
                      text-slate-400
                      block
                      font-mono
                      mb-1
                    "
                  >
                    Location
                  </span>

                  <span
                    className="
                      text-slate-200
                      text-sm
                      font-semibold
                    "
                  >
                   Nashik, Maharashtra, India
                  </span>
                </div>
              </div>

              {/* Institute */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  p-4
                  rounded-xl
                  bg-slate-900/60
                  border
                  border-slate-800/80
                "
              >
                <div
                  className="
                    w-10
                    h-10
                    rounded-lg
                    bg-emerald-400/10
                    text-emerald-400
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div>
                  <span
                    className="
                      text-xs
                      text-slate-400
                      block
                      font-mono
                      mb-1
                    "
                  >
                    Institute
                  </span>

                  <span
                    className="
                      text-slate-200
                      text-sm
                      font-semibold
                    "
                  >
                    Sir Visvesraya Institute Of Technology, Nashik (SPPU)
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* =====================================================
              SOCIAL PROFILES
          ====================================================== */}

          <div className="mt-8">
            <span
              className="
                text-xs
                font-mono
                text-slate-400
                uppercase
                tracking-wider
                block
                mb-3
              "
            >
              Social Profiles
            </span>

            <div className="flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/DNYANESHWAR-KARDILE"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-xl
                  bg-slate-900/80
                  border
                  border-slate-800
                  text-slate-300
                  hover:text-white
                  hover:border-amber-400/50
                  hover:bg-slate-800
                  text-xs
                  font-medium
                  transition-all
                  duration-300
                "
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dnyaneshwar-u-kardile-9644bb379?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-xl
                  bg-slate-900/80
                  border
                  border-slate-800
                  text-slate-300
                  hover:text-white
                  hover:border-amber-400/50
                  hover:bg-slate-800
                  text-xs
                  font-medium
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT COLUMN — CONTACT FORM
        ====================================================== */}

        <div
          className="
            lg:col-span-7
            p-6
            sm:p-7
            rounded-2xl
            bg-slate-900/60
            border
            border-slate-800/80
            backdrop-blur-md
          "
        >
          <h3
            className="
              text-xl
              font-bold
              text-white
              mb-6
            "
          >
            Send a Direct Message
          </h3>

          {/* Success Message */}
          {isSubmitted ? (
            <div
              className="
                py-12
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-emerald-500/10
                  text-emerald-400
                  flex
                  items-center
                  justify-center
                  mb-4
                "
              >
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4
                className="
                  text-xl
                  font-bold
                  text-white
                  mb-2
                "
              >
                Message Sent!
              </h4>

              <p
                className="
                  text-slate-300
                  text-sm
                  max-w-sm
                  mb-6
                "
              >
                Thank you for reaching out. Dnyaneshwar will get back to you
                as soon as possible.
              </p>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setErrorMessage("");
                }}
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-slate-800
                  text-white
                  text-xs
                  font-semibold
                  hover:bg-slate-700
                  transition-colors
                "
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name + Email */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-4
                "
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="
                      block
                      text-xs
                      font-mono
                      text-slate-300
                      mb-1.5
                    "
                  >
                    Your Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your name"
                    className="
                      w-full
                      px-4
                      py-2.5
                      rounded-xl
                      bg-slate-950
                      border
                      border-slate-800
                      text-white
                      text-sm
                      placeholder:text-slate-500
                      focus:outline-none
                      focus:border-amber-400
                      transition-colors
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="
                      block
                      text-xs
                      font-mono
                      text-slate-300
                      mb-1.5
                    "
                  >
                    Your Email *
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter your email"
                    className="
                      w-full
                      px-4
                      py-2.5
                      rounded-xl
                      bg-slate-950
                      border
                      border-slate-800
                      text-white
                      text-sm
                      placeholder:text-slate-500
                      focus:outline-none
                      focus:border-amber-400
                      transition-colors
                    "
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="
                    block
                    text-xs
                    font-mono
                    text-slate-300
                    mb-1.5
                  "
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  placeholder="Internship / Web Project / Inquiry"
                  className="
                    w-full
                    px-4
                    py-2.5
                    rounded-xl
                    bg-slate-950
                    border
                    border-slate-800
                    text-white
                    text-sm
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:border-amber-400
                    transition-colors
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="
                    block
                    text-xs
                    font-mono
                    text-slate-300
                    mb-1.5
                  "
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Hello Dnyaneshwar, I would like to discuss..."
                  className="
                    w-full
                    px-4
                    py-2.5
                    rounded-xl
                    bg-slate-950
                    border
                    border-slate-800
                    text-white
                    text-sm
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:border-amber-400
                    transition-colors
                    resize-none
                  "
                />
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl
                  bg-amber-400
                  hover:bg-amber-300
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  text-slate-950
                  font-bold
                  text-sm
                  transition-all
                  shadow-md
                  active:scale-95
                  cursor-pointer
                "
              >
                <Send className="w-4 h-4" />

                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}