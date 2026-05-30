"use client";

import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 border-b border-white/5 bg-[#0A0F12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl font-bold text-[#dfe3e7] tracking-tight">Education</h2>
          <div className="w-16 h-1 bg-[#3B82F6] rounded mx-auto"></div>
        </div>

        {/* Timeline wrapper */}
        <div className="max-w-3xl mx-auto relative border-l border-white/10 pl-6 sm:pl-10 ml-4 sm:mx-auto">
          {/* Timeline Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="relative pb-8"
          >
            {/* Timeline Indicator Blob */}
            <div className="absolute w-4 h-4 rounded-full bg-slate-700 border-2 border-[#3B82F6] -left-[34px] sm:-left-[50px] top-1.5 ring-4 ring-[#0F172A] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </div>

            {/* Content body */}
            <div className="space-y-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
                2022 - 2025
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-[#dfe3e7] flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#3B82F6]" />
                  Bachelor of Science in Computer Science & Engineering
                </h3>
                <span className="text-sm font-medium text-[#c2c6d6] sm:text-right bg-white/5 px-3 py-1 rounded-full border border-white/5 w-fit">
                  AIUB
                </span>
              </div>
              <p className="text-sm text-[#dfe3e7]/80 font-medium pt-1">
                American International University-Bangladesh
              </p>
              <p className="text-sm text-[#c2c6d6] leading-relaxed max-w-2xl pt-2">
                Focused on fundamental software engineering principles, algorithms, advanced mathematics, data structures, and concrete application engineering practices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
