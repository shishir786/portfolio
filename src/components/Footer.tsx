"use client";

import { LuGithub, LuLinkedin, LuMail, LuArrowUp } from 'react-icons/lu';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0A0F12] py-12 relative overflow-hidden">
      {/* Soft light effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue-500/5 w-96 h-40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left: Branding & Tagline */}
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tighter text-[#dfe3e7]">
            Md. Abdullah Shishir<span className="text-[#3B82F6]">.</span>
          </h3>
          <p className="text-xs text-[#c2c6d6]/60 max-w-xs">
            Building scalable full-stack applications with beautiful interfaces and robust backends.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-4">
          <a
            id="footer-social-github"
            href="https://github.com/shishir786"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3B82F6]/10 border border-white/5 hover:border-[#3B82F6]/30 flex items-center justify-center text-[#c2c6d6] hover:text-[#3B82F6] transition-all duration-300"
            title="GitHub"
          >
            <LuGithub className="w-4 h-4" />
          </a>
          <a
            id="footer-social-linkedin"
            href="https://linkedin.com/in/abdullah-shishir"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3B82F6]/10 border border-white/5 hover:border-[#3B82F6]/30 flex items-center justify-center text-[#c2c6d6] hover:text-[#3B82F6] transition-all duration-300"
            title="LinkedIn"
          >
            <LuLinkedin className="w-4 h-4" />
          </a>
          <a
            id="footer-social-email"
            href="mailto:abdullahshishir786@gmail.com"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#3B82F6]/10 border border-white/5 hover:border-[#3B82F6]/30 flex items-center justify-center text-[#c2c6d6] hover:text-[#3B82F6] transition-all duration-300"
            title="Email"
          >
            <LuMail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Top Button */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-[#3B82F6]/10 border border-white/5 hover:border-[#3B82F6]/30 text-[#c2c6d6] hover:text-white transition-all duration-300 group cursor-pointer flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
            title="Back to top"
          >
            Back to top
            <LuArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <p className="text-xs text-[#c2c6d6]/40">
            © {currentYear}{' '}Md. Abdullah Shishir Designed &amp; Engineered with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
