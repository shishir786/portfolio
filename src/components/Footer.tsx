"use client";

import { ArrowUp, Mail } from 'lucide-react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-[#05080E] text-slate-400 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Summary */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-base tracking-tight">
              <span className="w-2 h-2 rounded-sm bg-blue-600 inline-block"></span>
              <span>Md. Abdullah Shishir</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Full Stack Engineer specializing in scalable backend systems and high-performance web applications.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Projects</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shishir786"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <LuGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/abdullah-shishir"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LuLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:abdullahshishir786@gmail.com"
              className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={handleScrollToTop}
              className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/40 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-colors ml-2 cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} Md. Abdullah Shishir. All rights reserved.
          </div>
          <div>
            Dhaka, Bangladesh · Built with Next.js &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
