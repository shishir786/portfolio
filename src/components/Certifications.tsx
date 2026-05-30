"use client";

import { Award, GraduationCap, ShieldCheck, Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Certification } from '../types';

export default function Certifications() {
const certifications: Certification[] = [
  {
    id: 'c1',
    title: 'Data Analyst Certification',
    issuer: 'oneroadmap.io',
    description: 'Completed comprehensive training in data analysis, data visualization, statistical techniques, and business intelligence concepts.',
    year: '2025',
    icon: 'BarChart3',
  },
  {
    id: 'c2',
    title: 'Accenture North America - Project Management Job Simulation',
    issuer: 'Forage',
    description: 'Gained hands-on experience in project planning, stakeholder management, risk assessment, and project delivery through a real-world simulation.',
    year: '2025',
    icon: 'Briefcase',
  },
  {
    id: 'c3',
    title: 'JPMorgan Chase & Co. - Quantitative Research Job Simulation',
    issuer: 'Forage',
    description: 'Applied quantitative research methodologies, financial data analysis, and problem-solving techniques in a simulated investment banking environment.',
    year: '2024',
    icon: 'TrendingUp',
  },
  {
    id: 'c4',
    title: 'Data Science With Python',
    issuer: 'Great Learning Academy',
    description: 'Learned Python-based data science fundamentals including data analysis, visualization, machine learning, and statistical modeling.',
    year: '2024',
    icon: 'Award',
  },
];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />;
      case 'Check':
        return <Check className="w-6 h-6 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Award className="w-6 h-6 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="certifications" className="py-24 border-t border-white/5 bg-gradient-to-b from-[#0F172A]/40 to-[#0F172A]/70 relative overflow-hidden">
      {/* Soft background ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -as-translate bg-blue-500/5 w-80 h-80 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 bg-indigo-500/5 w-96 h-96 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/10">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#dfe3e7] tracking-tight">
            Professional Certifications
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] rounded mx-auto"></div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              id={`cert-item-${cert.id}`}
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between bg-gradient-to-b from-[#1E293B]/50 to-[#0F172A]/50 border border-white/5 hover:border-[#3B82F6]/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)] hover:-translate-y-1"
            >
              {/* Top Section */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  {/* Icon Container with glowing background */}
                  <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center shrink-0 group-hover:bg-[#3B82F6]/20 group-hover:scale-105 transition-all duration-300">
                    {getIcon(cert.icon)}
                  </div>

                  <div className="space-y-1 flex-grow pr-4">
                    <h4 className="font-bold text-base md:text-lg text-[#dfe3e7] group-hover:text-white tracking-tight leading-snug transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Arrow accent icon just to elevate UI polish */}
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-[#3B82F6] transition-colors shrink-0 mt-1" />
                </div>

                <p className="text-sm text-[#c2c6d6] leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Footer Section */}
              <div className="pt-5 border-t border-white/5 mt-6 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    Issued: {cert.year}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/10 px-2.5 py-1 rounded-md">
                  <span className="w-1 h-1 rounded-full bg-[#3B82F6] animate-pulse"></span>
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
