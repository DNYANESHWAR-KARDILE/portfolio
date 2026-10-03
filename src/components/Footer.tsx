import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080c14]/90 backdrop-blur-md pt-16 pb-12 mt-20">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-sm shadow-sm">
                DK
              </div>
              <span className="font-bold text-white text-xl tracking-tight">
                Dnyaneshwar Kardile
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Computer Engineering Student at SVIT Nashik (SPPU) • Full Stack Developer focused on building clean, real-world web systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-slate-400 font-medium">
            <a href="#home" className="hover:text-amber-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">
              Experience
            </a>
            <a href="#services" className="hover:text-amber-400 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/DNYANESHWAR-KARDILE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-400/50 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/dnyaneshwar-kardile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:maulikardile150@gmail.com"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="#home"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 text-center sm:text-left gap-3">
          <p>© 2026 Dnyaneshwar Kardile. All rights reserved.</p>
          <p className="font-mono text-xs text-slate-400">
            Designed with dark technical grid aesthetic
          </p>
        </div>

      </div>
    </footer>
  );
}
