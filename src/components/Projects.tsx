"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Lock,
  ShoppingCart,
  Layout,
  CheckCircle2,
  Globe,
  BarChart2,
  Github,
} from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<'All' | 'Full Stack' | 'Frontend' | 'Backend' | 'Desktop App' | 'Graphics'>('All');

  const projects: Project[] = [
  {
  id: 'copyright',
  title: 'Instagram Copyright Checker',
  category: 'Full Stack',
  description: 'A comprehensive online copyright checker built with Next.js, Express.js, and MongoDB. Features Instagram Reel copyright checking, ARC Cloud integration, and PayPal payments.',
  tags: ['ExpressJs', 'RapidAPI', 'Next.js', 'Tailwind CSS', 'Paypal', 'ARC Cloud'],
  icon: 'Lock',
  imageUrl: '/copyright.png',
  githubUrl: '',
  demoUrl: 'https://copyrightchecker.de',
},
  {
  id: 'islacar',
  title: 'Isla Car Fleet & Rental Management Platform',
  category: 'Full Stack',
  description: 'Built a complete fleet and rental management solution for internal business operations. Developed scalable backend APIs and a Next.js Admin dashboard to manage vehicles, rental bookings, employee activities, customer records, payments, and operational reporting from a centralized system.',
  tags: [
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST API',
    'Tailwind CSS'
  ],
  icon: 'Car',
  imageUrl: '/islacar.png',
  githubUrl: '',
  demoUrl: 'https://play.google.com/store/apps/details?id=com.isla.car.employee_app',
},
{
  id: 'ems-frontend',
  title: 'Employee Management System Frontend',
  category: 'Full Stack',
  description: 'A comprehensive employee management system frontend built with Next.js and REST API integration, featuring responsive design and real-time data management.',
  tags: ['Next.js', 'Tailwind CSS', 'REST API', 'TypeScript'],
  icon: 'Users',
  imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  githubUrl: 'https://github.com/shishir786/EMS-frontend-Next-Js.git',
  demoUrl: 'https://ems-next-js.vercel.app/',
},
{
  id: 'ems-backend-nest',
  title: 'Employee Management System Backend (NestJS)',
  category: 'Backend',
  description: 'Robust backend API built with NestJS and PostgreSQL, implementing authentication, authorization, and comprehensive employee management.',
  tags: ['NestJS', 'PostgreSQL', 'TypeORM', 'JWT Auth'],
  icon: 'Database',
  imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  githubUrl: 'https://github.com/shishir786/employee-management-system-Nest-Js.git',
},
{
  id: 'ems-backend-spring',
  title: 'Employee Management System Backend (Spring Boot)',
  category: 'Backend',
  description: 'Enterprise-grade backend solution using Java Spring Boot and PostgreSQL with RESTful APIs, security implementation, and scalable architecture.',
  tags: ['Spring Boot', 'Java', 'PostgreSQL', 'JDBC', 'JWT Auth'],
  icon: 'Server',
  imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
  githubUrl: 'https://github.com/shishir786/employee-management-system-spring-boot.git',
},
{
  id: 'figma-clone-softvence',
  title: 'Florida and Texas Hard Money Lenders Landing Page',
  category: 'Frontend',
  description: 'Pixel-perfect implementation from Figma design with full responsiveness across all device sizes.',
  tags: ['NextJs', 'ShadCN'],
  icon: 'Layout',
  imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  githubUrl: 'https://github.com/shishir786/design-figma-clone.git',
  demoUrl: 'https://design-figma-clone.vercel.app/',
},
{
  id: 'tech-shop-web',
  title: 'Tech Shop E-commerce',
  category: 'Full Stack',
  description: 'Full-stack e-commerce platform for technology products featuring product catalog, shopping cart, admin panel, and MySQL database integration.',
  tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
  icon: 'ShoppingCart',
  imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
  githubUrl: 'https://github.com/shishir786/Online-Tech-Shop.git',
},
{
  id: 'restaurant-management',
  title: 'Restaurant Management System',
  category: 'Desktop App',
  description: 'Desktop application for restaurant operations management built with C# WinForms and .NET Framework, handling orders, inventory, and customers.',
  tags: ['C#', '.NET Framework', 'WinForms', 'SQL Server'],
  icon: 'Utensils',
  imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  githubUrl: 'https://github.com/shishir786/Resturent-Manegement-System.git',
},
{
  id: 'tech-shop-java',
  title: 'Tech Shop Java Application',
  category: 'Desktop App',
  description: 'Object-oriented shopping and inventory management system built with Java Swing, demonstrating core OOP principles and desktop UI development.',
  tags: ['Java', 'Swing', 'OOP', 'Desktop App'],
  icon: 'Package',
  imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
  githubUrl: 'https://github.com/shishir786/Shop-java-project.git',
},
{
  id: 'train-journey-3d',
  title: '3D Train Journey Simulation',
  category: 'Graphics',
  description: 'Immersive 3D train journey simulation using OpenGL with realistic environments, dynamic lighting, and smooth animations.',
  tags: ['OpenGL', '3D Graphics', 'C++', 'Computer Graphics'],
  icon: 'Train',
  imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
  githubUrl: 'https://github.com/shishir786/Train-journy-view-using-open_gl-.git',
},
{
  id: 'tour-data-collector',
  title: 'Tour Data Management System',
  category: 'Full Stack',
  description: 'Travel data collection and management system built with PHP and MySQL for handling bookings, customer information, and travel itineraries.',
  tags: ['PHP', 'MySQL', 'jQuery', 'Web Development'],
  icon: 'Map',
  imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
  githubUrl: 'https://github.com/shishir786/Tour-Data-Collect.git',
},
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#3B82F6]" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-5 h-5 text-[#3B82F6]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#3B82F6]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#3B82F6]" />;
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5 text-[#3B82F6]" />;
      default:
        return <Layout className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="text-center mb-12 space-y-3">
        <h2 className="text-3xl font-bold text-[#dfe3e7] tracking-tight">Featured Projects</h2>
        <div className="w-16 h-1 bg-[#3B82F6] rounded mx-auto"></div>
      </div>

      {/* Categories filter */}
      <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
        {(['All', 'Full Stack', 'Frontend', 'Backend','Desktop App', 'Graphics'] as const).map((filter) => (
          <button
            id={`projects-filter-${filter.toLowerCase().replace(' ', '-')}`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              activeFilter === filter
                ? 'bg-[#3B82F6] text-[#0f1417] shadow-lg shadow-[#3B82F6]/10 font-bold'
                : 'bg-[#1E293B] hover:bg-slate-800 border border-white/10 text-[#c2c6d6] hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              id={`project-${project.id}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="surface-1 rounded-xl overflow-hidden card-hover flex flex-col h-full bg-[#1E293B]/40 border border-white/5 group relative p-0"
            >
              {/* Cover Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-950/20 border-b border-white/5">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900">
                    {getProjectIcon(project.icon)}
                  </div>
                )}
                {/* Subtle gradient overlay to blend into the dark slate card */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

                {/* Floating category label */}
                <span className="absolute top-4 left-4 inline-block text-[10px] font-bold uppercase tracking-widest bg-slate-900/85 border border-white/10 text-[#c2c6d6] px-2.5 py-1 rounded-full backdrop-blur-md shadow-lg">
                  {project.category}
                </span>

                {/* Floating corner tech icon */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-lg bg-slate-950/80 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm">
                  {getProjectIcon(project.icon)}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="text-lg font-bold text-[#dfe3e7] leading-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {project.githubUrl && (
                      <a
                        id={`project-github-link-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3B82F6] hover:text-[#3B82F6]/80 hover:scale-105 transition-all duration-200 p-1.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        id={`project-demo-link-${project.id}`}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3B82F6] hover:text-[#3B82F6]/80 hover:scale-105 transition-all duration-200 p-1.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[#c2c6d6] leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-white/5 border border-white/5 rounded text-slate-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center mt-12">
        <a
          id="projects-btn-github"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost font-medium text-sm px-6 py-3.5 rounded-full inline-flex items-center gap-2 text-[#dfe3e7] transition-all duration-200 cursor-pointer"
        >
          View GitHub
          <Github className="w-4 h-4 text-[#adc6ff]" />
        </a>
      </div>
    </section>
  );
}
