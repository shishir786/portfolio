"use client";

import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { value: '10+', label: 'Projects Completed' },
    { value: '6+', label: 'Core Technologies' },
    { value: '1+', label: 'Years Experience' },
    { value: '4', label: 'Certifications' },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column: Narrative/Intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-[#dfe3e7] tracking-tight">About Me</h2>
            <div className="w-16 h-1 bg-[#3B82F6] rounded"></div>
          </div>
          <div className="space-y-4 text-base text-[#c2c6d6] leading-relaxed">
            <p>
              I'm a Full Stack Developer currently working as a Trainee at Sparktech Agency.
              Currently pursuing my B.Sc. in CSE at American International University-Bangladesh
              (AIUB) with expected graduation in 2025. I specialize in building scalable web
              applciations using modern technologies like React, Node.js, NestJS, and PostgreSQL.
            </p>
            <p>
              My goal is to craft high-quality, user-friendly solutions that solve real-world problems.
              I enjoy learning new tools, analyzing architecture patterns, and pushing the limits of the web platform.
            </p>
          </div>
        </motion.div>

        {/* Right column: Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              id={`about-stat-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="surface-1 p-6 rounded-2xl text-center card-hover flex flex-col justify-center items-center h-40 bg-[#1E293B]/50 backdrop-blur-sm border border-white/5"
            >
              <h3 className="text-4xl font-extrabold text-[#3B82F6] mb-2 font-sans">
                {stat.value}
              </h3>
              <p className="text-xs uppercase font-extrabold tracking-widest text-[#c2c6d6]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
