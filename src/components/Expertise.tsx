"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Cpu,
  Layers,
  Terminal,
} from 'lucide-react';
import { SkillCategory } from '../types';

export default function Expertise() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: SkillCategory[] = [
    {
      title: 'Languages & Runtimes',
      icon: 'Code2',
      description: 'Strong foundation in typed, compiled, and interpreted languages for server and client execution.',
      skills: [
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'JavaScript (ESNext)', level: 'Advanced' },
        { name: 'Python', level: 'Proficient' },
        { name: 'Java (17+)', level: 'Proficient' },
        { name: 'C++', level: 'Proficient' },
        { name: 'C# / .NET', level: 'Familiar' },
        { name: 'PHP', level: 'Proficient' },
      ],
    },
    {
      title: 'Frontend Engineering',
      icon: 'Monitor',
      description: 'Building accessible, fast, and responsive user interfaces with modern component architectures.',
      skills: [
        { name: 'Next.js (App Router)', level: 'Advanced' },
        { name: 'React 19', level: 'Advanced' },
        { name: 'Tailwind CSS v4', level: 'Advanced' },
        { name: 'Redux Toolkit', level: 'Proficient' },
        { name: 'HTML5 & Semantic Web', level: 'Advanced' },
        { name: 'Motion / Animations', level: 'Proficient' },
      ],
    },
    {
      title: 'Backend & Microservices',
      icon: 'Server',
      description: 'Designing resilient, secure REST and GraphQL endpoints with strict validation and middleware.',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'NestJS', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'Spring Boot 3', level: 'Proficient' },
        { name: 'RESTful API Design', level: 'Advanced' },
        { name: 'JWT & RBAC Security', level: 'Advanced' },
      ],
    },
    {
      title: 'Databases & Data Modeling',
      icon: 'Database',
      description: 'Relational schema design, document data persistence, query optimization, and transactions.',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'MySQL / MariaDB', level: 'Proficient' },
        { name: 'Prisma ORM', level: 'Proficient' },
        { name: 'TypeORM / Hibernate', level: 'Proficient' },
        { name: 'Redis (Caching)', level: 'Familiar' },
      ],
    },
    {
      title: 'DevOps & Tooling',
      icon: 'Wrench',
      description: 'Automating environments, version control hygiene, and containerized workflow standards.',
      skills: [
        { name: 'Git & GitHub Workflows', level: 'Advanced' },
        { name: 'Docker Containers', level: 'Proficient' },
        { name: 'Linux / Bash Scripting', level: 'Proficient' },
        { name: 'Postman & API Testing', level: 'Advanced' },
        { name: 'Figma to Code', level: 'Advanced' },
        { name: 'Vercel / Cloud Run', level: 'Proficient' },
      ],
    },
    {
      title: 'Scientific & Data Foundations',
      icon: 'Cpu',
      description: 'Fundamental computer science, algorithm analysis, mathematical modeling, and ML libraries.',
      skills: [
        { name: 'Algorithms & Structures', level: 'Advanced' },
        { name: 'PyTorch & TensorFlow', level: 'Familiar' },
        { name: 'Pandas & NumPy', level: 'Proficient' },
        { name: 'Computer Graphics (OpenGL)', level: 'Proficient' },
        { name: 'MATLAB & Arduino', level: 'Familiar' },
      ],
    },
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-blue-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((c) => c.title.toLowerCase().includes(selectedCategory));

  return (
    <section id="expertise" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Technical Matrix &amp; Systems
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Architecture &amp; Core Stacks
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              A breakdown of the programming languages, backend frameworks, databases, and engineering workflows I leverage in production.
            </p>
          </div>

          {/* Quick filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.08] rounded-lg shrink-0 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              All Stacks
            </button>
            <button
              onClick={() => setSelectedCategory('backend')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'backend'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Backend &amp; DB
            </button>
            <button
              onClick={() => setSelectedCategory('frontend')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'frontend'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Frontend
            </button>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-xl surface-card surface-card-hover border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Unboxed List with subtle level indicators */}
                <div className="space-y-2 border-t border-white/[0.06] pt-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between text-xs py-1"
                    >
                      <span className="font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
