"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Server,
  Layers,
  Database,
  Cpu,
  Monitor,
  CheckCircle,
  X,
  Code2,
  Box,
  Car,
  ShieldAlert,
  ArrowUpRight,
} from 'lucide-react';
import { LuGithub } from 'react-icons/lu';
import { Project } from '../types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full Stack' | 'Backend' | 'Frontend' | 'Desktop App' | 'Graphics'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const projects: Project[] = [
    {
      id: 'copyright',
      title: 'Instagram Copyright Checker Platform',
      category: 'Full Stack',
      featured: true,
      description: 'An automated scanning platform built from the ground up to protect content creators, agencies, and businesses from strict German copyright penalties (Abmahnungen) by identifying unauthorized music in social media videos without requiring account passwords.',
      tags: ['Next.js', 'TypeScript', 'Express.js', 'MongoDB', 'Redis', 'BullMQ', 'PayPal', 'Stripe', 'React (Vite)'],
      icon: 'ShieldAlert',
      imageUrl: '/copyright.png',
      demoUrl: 'https://copyrightchecker.de',
      problem: 'Content creators, agencies, and businesses in Germany face strict copyright laws, leading to severe financial penalties and warning letters (Abmahnungen) for using unauthorized music in social media videos. Manually auditing years of historical content to find these risky videos is an incredibly tedious process. Furthermore, many third-party tools require handing over sensitive account passwords, creating major security risks.',
      solution: 'To address this specific issue, a comprehensive, automated scanning platform was built from the ground up to maintain legal compliance without the hassle.',
      highlights: [
        'No Login Required: Complete account scanning is executed simply by pasting a public Instagram or TikTok profile link, ensuring account security is never compromised.',
        'Actionable Documentation: The platform generates a structured analysis highlighting exactly which videos carry potential music copyright risks.',
        'Clear Deletion Directives: Users receive direct links and clear suggestions for the flagged content, allowing for immediate deletion and drastically reducing manual review time.',
        'Bilingual Support: The platform is fully accessible in two languages (German and English) to seamlessly serve both local creators and international teams.',
        'Seamless Payments: Secure and flexible checkout infrastructure was integrated into the platform using PayPal and Stripe.',
      ],
      architecture: 'Frontend: Next.js (TypeScript) | Admin Dashboard: React (Vite) | Backend: Express.js (TypeScript) | Database & Caching: MongoDB and Redis for high-speed data retrieval and maintaining job queues with BullMQ',
    },
    {
      id: 'islacar',
      title: 'Isla Car Fleet & Rental Management Platform',
      category: 'Full Stack',
      featured: true,
      description: 'Complete commercial fleet and vehicle rental management platform. Built high-throughput backend APIs and an administrative dashboard to manage vehicles, customer reservations, employee dispatches, and financial reporting.',
      tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Tailwind CSS'],
      icon: 'Car',
      imageUrl: '/islacar.png',
      demoUrl: 'https://play.google.com/store/apps/details?id=com.isla.car.employee_app',
      architecture: 'Centralized REST architecture with MongoDB aggregation pipelines for real-time fleet telematics and booking schedules.',
      highlights: [
        'Multi-tenant reservation system supporting fleet booking workflows',
        'Live driver dispatching and employee shift logs',
        'Automated invoice generation and operational analytics',
      ],
    },
    {
      id: 'ems-frontend',
      title: 'Enterprise Employee Portal Frontend',
      category: 'Frontend',
      description: 'Modern administrative dashboard built with Next.js App Router and Tailwind CSS. Features real-time state management, employee directory with multi-column filtering, and role-guarded routes.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'REST API', 'Responsive UI'],
      icon: 'Monitor',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/shishir786/EMS-frontend-Next-Js.git',
      demoUrl: 'https://ems-next-js.vercel.app/',
      architecture: 'Client-side cache synchronization with server-rendered layouts and optimistic UI mutations.',
      highlights: [
        'Fast paginated data tables with instant multi-facet search',
        'Custom JWT session management with auto-refresh tokens',
        'Sub-second page transitions and WCAG AA accessibility compliance',
      ],
    },
    {
      id: 'ems-backend-nest',
      title: 'Enterprise Employee Management Backend',
      category: 'Backend',
      description: 'High-performance enterprise backend built with NestJS and PostgreSQL. Implements JWT authentication, role-based access control (RBAC), database transaction isolation, and complete CRUD operations.',
      tags: ['NestJS', 'PostgreSQL', 'TypeORM', 'JWT Auth', 'TypeScript', 'Docker'],
      icon: 'Server',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/shishir786/employee-management-system-Nest-Js.git',
      architecture: 'Layered architecture (Controllers, Services, Repositories) with TypeORM entities and PostgreSQL indices.',
      highlights: [
        'Enforced granular role permissions (Admin, Manager, Employee)',
        'Class-validator request sanitization and global exception filters',
        'Optimized query execution plans with TypeORM query builders',
      ],
    },
    {
      id: 'ems-backend-spring',
      title: 'Java Spring Boot Enterprise Microservice',
      category: 'Backend',
      description: 'Robust Java enterprise backend utilizing Spring Boot 3 and PostgreSQL. Features Spring Security with JWT filters, JDBC connection pooling, Hibernate ORM mappings, and RESTful web endpoints.',
      tags: ['Spring Boot', 'Java 17', 'PostgreSQL', 'Spring Security', 'Maven'],
      icon: 'Database',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/shishir786/employee-management-system-spring-boot.git',
      architecture: 'Spring MVC architectural pattern with JPA/Hibernate data repositories and Bean validation.',
      highlights: [
        'Spring Security stateless authentication with token revoking',
        'HikariCP high-throughput connection pool tuning',
        'Comprehensive JUnit test suites for critical business workflows',
      ],
    },
    {
      id: 'figma-clone-softvence',
      title: 'Commercial Lending Platform Web Portal',
      category: 'Frontend',
      description: 'High-fidelity implementation of a Florida & Texas private commercial mortgage lending portal. Engineered from detailed Figma design specifications with strict responsive viewport fidelity.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Figma Spec'],
      icon: 'Layers',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/shishir786/design-figma-clone.git',
      demoUrl: 'https://design-figma-clone.vercel.app/',
      architecture: 'Component-driven frontend with reusable design tokens and layout containers.',
      highlights: [
        'Pixel-accurate translation from Figma components to React',
        'Interactive financial loan calculators and eligibility tools',
        'Smooth CSS micro-animations on interactive cards',
      ],
    },
    {
      id: 'tech-shop-web',
      title: 'Full-Stack E-Commerce Web Store',
      category: 'Full Stack',
      description: 'Commercial technology e-commerce application featuring product catalogs, category browsing, cart state synchronization, order management, and secure MySQL database schemas.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      icon: 'Box',
      imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/shishir786/Online-Tech-Shop.git',
      highlights: [
        'Normalized relational database schema handling product catalog & orders',
        'Admin dashboard for inventory management and sales monitoring',
        'Session-based cart persistence and checkout processing',
      ],
    },
    {
      id: 'restaurant-management',
      title: 'Restaurant Operations Desktop Suite',
      category: 'Desktop App',
      description: 'Desktop management system built with C# WinForms and .NET Framework. Handles real-time dining room table reservations, kitchen order ticketing, inventory deductions, and billing reports.',
      tags: ['C#', '.NET', 'WinForms', 'SQL Server'],
      icon: 'Cpu',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/shishir786/Resturent-Manegement-System.git',
      highlights: [
        'Event-driven order routing between floor staff and kitchen terminals',
        'SQL Server stored procedures for transaction-safe daily reconciliations',
        'Automated receipt printing and expense categorization',
      ],
    },
    {
      id: 'tech-shop-java',
      title: 'Tech Shop Java Desktop Application',
      category: 'Desktop App',
      description: 'Object-oriented shopping and inventory management system built with Java Swing, demonstrating core OOP principles, multi-threading, and desktop UI development.',
      tags: ['Java', 'Swing', 'OOP', 'Desktop App'],
      icon: 'Box',
      imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/shishir786/Shop-java-project.git',
      highlights: [
        'Core OOP inheritance, encapsulation, and interface structures',
        'File I/O and relational database connectivity for order records',
        'Interactive catalog browser with custom Swing layouts',
      ],
    },
    {
      id: 'train-journey-3d',
      title: '3D Simulation & Graphics Engine',
      category: 'Graphics',
      description: '3D computer graphics simulation engineered with OpenGL and C++. Demonstrates lighting shaders, 3D vector transformations, camera matrix calculations, and realistic scenery rendering.',
      tags: ['OpenGL', 'C++', 'Computer Graphics', 'GLSL Shaders'],
      icon: 'Box',
      imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/shishir786/Train-journy-view-using-open_gl-.git',
      highlights: [
        'Implementation of Phong illumination model and ambient occlusion',
        'Real-time terrain and geometric vertex buffer streaming',
        'Keyboard and mouse camera control with smooth collision bounds',
      ],
    },
    {
      id: 'tour-data-collector',
      title: 'Tour Data Management System',
      category: 'Full Stack',
      description: 'Travel data collection and management system built with PHP and MySQL for handling agency bookings, traveler records, and custom travel itineraries.',
      tags: ['PHP', 'MySQL', 'jQuery', 'Web Development'],
      icon: 'Box',
      imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/shishir786/Tour-Data-Collect.git',
      highlights: [
        'Relational data management for itineraries, customers, and payment logs',
        'Multi-step dynamic booking form with client-side validation',
        'Exportable travel logs and agency analytics reports',
      ],
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-4 h-4 text-blue-400" />;
      case 'Car':
        return <Car className="w-4 h-4 text-blue-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-blue-400" />;
      case 'Monitor':
        return <Monitor className="w-4 h-4 text-blue-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-blue-400" />;
      default:
        return <Code2 className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="work" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Selected Engineering Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Systems &amp; Applications
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              A curated collection of production platforms, distributed microservices, and client architectures.
            </p>
          </div>

          {/* Filter Bar (Segmented Control) */}
          <div className="flex items-center gap-1 p-1 bg-white/[0.04] border border-white/[0.08] rounded-lg overflow-x-auto hide-scrollbar shrink-0">
            {(['All', 'Full Stack', 'Backend', 'Frontend', 'Desktop App', 'Graphics'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bento / Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className={`surface-card surface-card-hover rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer border border-white/[0.08] group ${
                  project.featured && activeFilter === 'All' ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Media Container */}
                <div className={`relative w-full overflow-hidden bg-slate-950 border-b border-white/[0.06] ${
                  project.featured && activeFilter === 'All' ? 'h-64 sm:h-72' : 'h-48'
                }`}>
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    /* Stylized Blueprint Fallback (resilient zero-broken-image policy) */
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-white/[0.06] relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          {getCardIcon(project.icon)}
                          <span>{project.category}</span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          {project.tags[0]}
                        </span>
                      </div>
                      <div className="relative z-10">
                        <div className="w-12 h-1 rounded bg-blue-500/40 mb-3"></div>
                        <h4 className="text-white text-base font-bold font-mono tracking-tight">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  )}

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Top Category Kicker */}
                  <div className="absolute top-3 left-3 text-xs font-mono font-medium text-slate-300 bg-slate-950/85 px-2.5 py-1 rounded backdrop-blur-md border border-white/[0.08]">
                    {project.category}
                  </div>

                  {/* Quick Expand Button */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-slate-950/80 border border-white/[0.1] flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-blue-400 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Unboxed Title */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    {/* Unboxed Metadata description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-normal mb-5 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Unboxed Tech Metadata with typographic separators */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-400 pt-4 border-t border-white/[0.06]">
                      {project.tags.slice(0, 5).map((tag, i) => (
                        <span key={tag} className="flex items-center gap-2">
                          <span className="hover:text-slate-200 transition-colors">{tag}</span>
                          {i < Math.min(project.tags.length - 1, 4) && (
                            <span aria-hidden="true" className="text-slate-700">·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-4 mt-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Platform</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                        >
                          <LuGithub className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto hide-scrollbar rounded-2xl bg-[#0B101D] border border-white/[0.12] shadow-2xl p-6 sm:p-8 z-10 space-y-6"
            >
              {/* Header with Close */}
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
                    {selectedProject.category} · Case Study Details
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image banner in modal if present */}
              {selectedProject.imageUrl && (
                <div className="rounded-xl overflow-hidden aspect-video bg-slate-950 border border-white/[0.08]">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Problem & Solution (if available) */}
              {selectedProject.problem ? (
                <div className="space-y-5">
                  <div className="p-4 sm:p-5 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      The Problem
                    </h4>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {selectedProject.solution && (
                    <div className="p-4 sm:p-5 rounded-xl bg-blue-500/[0.04] border border-blue-500/20 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        The Solution
                      </h4>
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                        {selectedProject.solution}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Standard Description */
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Overview &amp; Implementation
                  </h4>
                  <p className="text-base text-slate-200 leading-relaxed font-normal">
                    {selectedProject.description}
                  </p>
                </div>
              )}

              {/* Key Features / Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {selectedProject.problem ? 'Key Features of the Build' : 'Key Engineering Achievements'}
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture Blueprint Note */}
              {selectedProject.architecture && (
                <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-blue-200 space-y-1.5">
                  <span className="font-mono uppercase font-bold text-blue-400 block tracking-wider">
                    Tech Stack &amp; Architecture
                  </span>
                  <p className="leading-relaxed">{selectedProject.architecture}</p>
                </div>
              )}

              {/* Technologies List */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-action px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-action px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
                  >
                    <LuGithub className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-auto text-xs font-mono text-slate-400 hover:text-white px-3 py-2 cursor-pointer"
                >
                  Close (ESC)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
