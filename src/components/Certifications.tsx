"use client";

import { motion } from 'motion/react';
import { Award, CheckCircle, TrendingUp, Briefcase, BarChart3, ExternalLink } from 'lucide-react';
import { Certification } from '../types';

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: 'c1',
      title: 'Data Analyst Certification',
      issuer: 'oneroadmap.io',
      description: 'Comprehensive industry certification covering exploratory data analysis, visualization workflows, statistical reasoning, and business intelligence reporting.',
      year: '2025',
      icon: 'BarChart3',
    },
    {
      id: 'c2',
      title: 'Project Management Job Simulation',
      issuer: 'Accenture North America · Forage',
      description: 'Completed practical simulation simulating enterprise project planning, cross-functional stakeholder management, agile sprint delivery, and risk assessment.',
      year: '2025',
      icon: 'Briefcase',
    },
    {
      id: 'c3',
      title: 'Quantitative Research Job Simulation',
      issuer: 'JPMorgan Chase & Co. · Forage',
      description: 'Applied quantitative problem solving, statistical modeling, algorithmic analysis, and financial data wrangling in a simulated investment banking scenario.',
      year: '2024',
      icon: 'TrendingUp',
    },
    {
      id: 'c4',
      title: 'Data Science With Python',
      issuer: 'Great Learning Academy',
      description: 'Mastered Python programming for numerical analysis, machine learning algorithms, Pandas/NumPy pipelines, and regression models.',
      year: '2024',
      icon: 'Award',
    },
  ];

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-blue-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-blue-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-14 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Continuous Learning &amp; Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Specialized accreditations in data analysis, enterprise project workflows, and quantitative research.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-7 rounded-xl surface-card surface-card-hover border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    {getCertIcon(cert.icon)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mt-1">
                      <span className="text-blue-400">{cert.issuer}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="font-mono tabular-numbers">{cert.year}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Status footer with unboxed text */}
              <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Verified Credential</span>
                </span>
                <span className="font-mono text-slate-400">
                  Issued {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
