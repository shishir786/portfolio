"use client";

import { motion } from 'motion/react';
import { Terminal, Shield, Zap, Database, Server, Laptop } from 'lucide-react';

export default function About() {
  const engineeringValues = [
    {
      icon: Database,
      title: 'Scalable Data & Backend Systems',
      description: 'Designing resilient relational & document databases (PostgreSQL, MySQL, MongoDB) with optimized indexing, transactions, and performant connection pooling.',
    },
    {
      icon: Server,
      title: 'Clean API Architecture',
      description: 'Engineering robust REST and GraphQL APIs with NestJS, Express, and Spring Boot, enforcing strict role-based access control (RBAC) and JWT security.',
    },
    {
      icon: Laptop,
      title: 'High-Performance Frontend',
      description: 'Crafting responsive, accessible user interfaces with Next.js App Router, React 19, TypeScript, and Tailwind CSS with sub-second page loads and zero layout shifts.',
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Background &amp; Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Crafting Reliable Systems From Server to Browser.
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Prose */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base"
          >
            <p>
              I am a software engineer with deep interest in distributed architectures, backend engineering,
              and interactive frontend systems. Graduating with a Bachelor of Science in Computer Science &amp;
              Engineering from <strong className="text-white">American International University-Bangladesh (AIUB)</strong>,
              I combine rigorous computer science fundamentals with hands-on production engineering.
            </p>

            <p>
              Currently serving as a <strong className="text-white">Junior Full Stack Engineer at Startup Inc.</strong>,
              I build enterprise-grade software and SaaS products. My day-to-day work spans designing database schemas,
              writing type-safe NestJS/Node.js endpoints, integrating cloud storage and payment gateways, and architecting
              modern Next.js frontends.
            </p>

            <p>
              Prior to my current position, I developed responsive web products at <strong className="text-white">Sparktech Agency</strong>,
              shipping e-commerce systems, internal admin portals, and custom client solutions. Whether implementing complex
              business rules or fine-tuning database query latency, I prioritize clarity, testability, and long-term maintainability.
            </p>

            {/* Quick unboxed facts */}
            <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block font-mono uppercase">Location</span>
                <span className="text-white font-medium text-sm">Dhaka, Bangladesh</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono uppercase">Education</span>
                <span className="text-white font-medium text-sm">B.Sc. CSE, AIUB (2025)</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono uppercase">Focus Areas</span>
                <span className="text-white font-medium text-sm">Backend &amp; Full Stack</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono uppercase">Availability</span>
                <span className="text-blue-400 font-medium text-sm">Open to Opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Core Engineering Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {engineeringValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-xl surface-card surface-card-hover border border-white/[0.08]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {value.title}
                      </h3>
                      <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
