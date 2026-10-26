"use client";

import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { TimelineItem } from '../types';

export default function Education() {
  const educationItems: TimelineItem[] = [
    {
      id: 'aiub-cse',
      roleOrDegree: 'Bachelor of Science in Computer Science & Engineering',
      organization: 'American International University-Bangladesh (AIUB)',
      location: 'Dhaka, Bangladesh',
      period: '2022 – 2025',
      description: 'Comprehensive computer science curriculum focused on algorithms, software architecture, data structures, database management systems, artificial intelligence, and network security.',
      highlights: [
        'Major Focus: Distributed Systems, Web Technologies, Database Systems, & Software Engineering',
        'Built multiple functional semester projects including 3D graphics simulations and full-stack enterprise portals',
        'Strong academic foundation in object-oriented programming (Java/C++) and computational complexity',
      ],
    },
    {
      id: 'vc-hsc',
      roleOrDegree: 'Higher Secondary Certificate (HSC) in Science',
      organization: 'Varendra College, Rajshahi',
      location: 'Rajshahi, Bangladesh',
      period: '2018 – 2020',
      description: 'Rigorous pre-university science education encompassing advanced mathematics, physics, chemistry, and introductory computer studies.',
      highlights: [
        'Specialization in Science and Mathematics',
        'Developed early passion for programming, logic, and analytical problem-solving',
      ],
    },
  ];

  return (
    <section id="education" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-14 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Formal computer science training and academic qualifications that underpin my software development career.
          </p>
        </div>

        {/* Education List */}
        <div className="max-w-4xl space-y-8">
          {educationItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-xl surface-card surface-card-hover border border-white/[0.08]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4 mb-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                    <GraduationCap className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>{item.roleOrDegree}</span>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-blue-400 font-medium mt-1">
                    <span>{item.organization}</span>
                    {item.location && (
                      <>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono tabular-numbers text-slate-300 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-md shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-4">
                {item.description}
              </p>

              {item.highlights && (
                <ul className="space-y-1.5 pt-2 border-t border-white/[0.04]">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-2"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
