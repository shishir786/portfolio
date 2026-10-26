"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Code2, Layers, Cpu } from 'lucide-react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import { motion } from 'motion/react';

interface HeroProps {
  onDownloadCV: () => void;
}

export default function Hero({ onDownloadCV }: HeroProps) {
  const roles = [
    'Full Stack Engineer',
    'Backend Architect',
    'Next.js & Node.js Specialist',
    'Distributed Systems Enthusiast',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      if (displayedText !== currentRole) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText !== '') {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const metrics = [
    { value: '10+', label: 'Delivered Projects', caption: 'Full-stack & enterprise apps' },
    { value: '1+ Yr', label: 'Engineering Experience', caption: 'Startup & agency roles' },
    { value: '6+', label: 'Core Tech Stacks', caption: 'React, Next.js, Node, Nest, SQL' },
    { value: '4', label: 'Verified Certifications', caption: 'Data analysis & cloud systems' },
  ];

  return (
    <section id="hero" className="relative pt-12 pb-20 border-b border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-40 right-10 w-[350px] h-[250px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <span className="text-blue-400 font-semibold">Available for Roles</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Full Stack Software Engineer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Dhaka, Bangladesh</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Engineering Resilient Systems &amp; Modern Web Experiences.
            </h1>

            {/* Dynamic Title */}
            <div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-slate-300">
              <span className="text-slate-400">Specializing in</span>
              <span className="font-mono text-blue-400 font-semibold tracking-tight">
                {displayedText}
                <span className="animate-pulse text-blue-300 font-normal">|</span>
              </span>
            </div>

            {/* Narrative Prose */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              I am <strong className="text-white font-medium">Md. Abdullah Shishir</strong>, a software developer
              focused on building high-performance backend microservices, clean REST/GraphQL APIs, and responsive,
              accessible web applications with Next.js, TypeScript, NestJS, and PostgreSQL.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="btn-primary-action px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onDownloadCV}
                className="btn-secondary-action px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>

            {/* Social Proof & Quick Connect */}
            <div className="pt-4 flex items-center gap-6 text-sm text-slate-400 border-t border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href="https://github.com/shishir786"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <LuGithub className="w-4 h-4" />
                <span className="text-xs font-medium">GitHub</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href="https://linkedin.com/in/abdullah-shishir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <LuLinkedin className="w-4 h-4" />
                <span className="text-xs font-medium">LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href="mailto:abdullahshishir786@gmail.com"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs font-medium">abdullahshishir786@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Architectural Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer architectural frame */}
              <div className="relative p-3 rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-white/[0.12] shadow-2xl backdrop-blur-xl">
                {/* Header bar of frame */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    developer.id // shishir786
                  </span>
                </div>

                {/* Profile Image with subtle overlay */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950 border border-white/[0.08]">
                  <img
                    src="/profile.jpg"
                    alt="Md. Abdullah Shishir portrait"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* On-image bottom label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-base font-bold tracking-tight">
                      Md. Abdullah Shishir
                    </p>
                    <p className="text-blue-300 text-xs font-medium">
                      B.Sc. in Computer Science &amp; Engineering (AIUB)
                    </p>
                  </div>
                </div>

                {/* Card footer metrics snippet */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Current Role</div>
                    <div className="font-semibold text-slate-200 mt-0.5">Jr. Full Stack Engineer</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Core Stack</div>
                    <div className="font-semibold text-slate-200 mt-0.5">Next.js · NestJS · SQL</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Metric Strip (Full-width row below split) */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
              className="p-5 rounded-xl surface-card border border-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-400 font-mono tabular-numbers tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-white mt-1.5">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 font-normal">
                {metric.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
