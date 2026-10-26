"use client";

import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TimelineItem } from '../types';

export default function Experience() {
  const experiences: TimelineItem[] = [
    {
      id: 'startup-inc',
      roleOrDegree: 'Junior Full Stack Engineer',
      organization: 'Startup Inc.',
      location: 'Dhaka, Bangladesh',
      period: 'June 2026 – Present',
      description: 'Engineering scalable, production-ready web platforms and microservices across frontend and backend domains.',
      highlights: [
        'Architected RESTful and GraphQL endpoints using NestJS and Node.js with strict validation pipes',
        'Implemented responsive, accessible user interfaces using Next.js 14/15 App Router and Tailwind CSS',
        'Optimized PostgreSQL queries and database indices, reducing server response times by ~30%',
        'Integrated third-party APIs including cloud storage, notification brokers, and payment providers',
      ],
    },
    {
      id: 'sparktech-agency',
      roleOrDegree: 'Junior Full Stack Developer',
      organization: 'Sparktech Agency',
      location: 'Dhaka, Bangladesh',
      period: 'July 2025 – May 2026',
      description: 'Delivered client-facing web applications, e-commerce systems, and internal admin panels for regional and international clients.',
      highlights: [
        'Developed dynamic frontend applications in React, TypeScript, and Tailwind CSS from Figma design specs',
        'Engineered secure Express.js and PHP backend services handling product catalogs and order transactions',
        'Collaborated with product designers and senior engineers to conduct code reviews and release deployments',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-14 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Career Timeline
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Hands-on software engineering roles focusing on full-stack architecture, clean code, and business deliverables.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-xl surface-card surface-card-hover border border-white/[0.08] relative"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4 mb-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {exp.roleOrDegree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-blue-400 font-medium mt-1">
                    <span>{exp.organization}</span>
                    {exp.location && (
                      <>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Period in monospace tabular-nums */}
                <div className="flex items-center gap-1.5 text-xs font-mono tabular-numbers text-slate-300 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-md shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-4">
                {exp.description}
              </p>

              {/* Engineering Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                    Key Deliverables &amp; Engineering Wins
                  </span>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
