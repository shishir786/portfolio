"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Download, Code2, Briefcase, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onDownloadCV: () => void;
}

export default function Hero({ onDownloadCV }: HeroProps) {
  const titles = ['Full Stack Developer', 'Software Engineer', 'Backend Specialist'];
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullTitle = titles[currentTitleIdx];

    if (!isDeleting) {
      if (typedText !== currentFullTitle) {
        timer = setTimeout(() => {
          setTypedText(currentFullTitle.substring(0, typedText.length + 1));
        }, 100);
      } else {
        // Wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      }
    } else {
      if (typedText !== '') {
        timer = setTimeout(() => {
          setTypedText(currentFullTitle.substring(0, typedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTitleIdx]);

  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12 min-h-[calc(100vh-100px)]"
    >
      {/* Bio Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6"
      >
        <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#c2c6d6]">
            Open to Opportunities
          </span>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-[#c2c6d6]">Hello, I'm 👋</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#dfe3e7]">
            Md Abdullah Shishir
          </h1>
          <div className="h-10 md:h-14 flex items-center">
            <p className="text-2xl sm:text-3xl font-mono text-[#adc6ff] font-semibold">
              {typedText}
              <span className="animate-pulse ml-1 text-[#adc6ff] font-sans">|</span>
            </p>
          </div>
          <p className="text-base text-[#c2c6d6] leading-relaxed max-w-2xl">
            A detail-oriented software engineer specializing in scalable backend systems and
            responsive frontend architectures. Focused on delivering performant, maintainable code.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            id="hero-btn-work"
            href="#work"
            className="btn-primary font-medium text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
          >
            View My Work
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
          <button
            id="hero-btn-download"
            onClick={onDownloadCV}
            className="btn-ghost font-medium text-sm px-6 py-3.5 rounded-full flex items-center gap-2 text-[#dfe3e7] transition-all duration-300 cursor-pointer"
          >
            Download CV
            <Download className="w-4 h-4 text-[#adc6ff]" />
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 pt-6 text-[#c2c6d6]">
          <a
            id="hero-social-github"
            href="https://github.com/shishir786"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#adc6ff] transition-all duration-200 p-2 hover:bg-white/5 rounded-full"
            title="GitHub"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            id="hero-social-linkedin"
            href="https://linkedin.com/in/abdullah-shishir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#adc6ff] transition-all duration-200 p-2 hover:bg-white/5 rounded-full"
            title="LinkedIn"
          >
            <Briefcase className="w-5 h-5" />
          </a>
          <a
            id="hero-social-email"
            href="mailto:contact@abdullahshishir786@gmail.com"
            className="hover:text-[#adc6ff] transition-all duration-200 p-2 hover:bg-white/5 rounded-full"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      {/* Profile Picture Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex-1 flex justify-center lg:justify-end"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2.5 border-2 border-[#1E293B] hover:border-[#3B82F6] transition-colors duration-500 group">
          <div className="absolute inset-0 rounded-full border border-[#3B82F6]/50 opacity-0 group-hover:opacity-100 scale-105 transition-all duration-500"></div>
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white/5">
            <img
              id="hero-profile-image"
              alt="Md Abdullah Shishir portrait"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
              src="/profile.jpg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
