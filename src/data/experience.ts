import type { TimelineItem } from '../types';

export const experiences: TimelineItem[] = [
  {
    id: 'startup-inc',
    roleOrDegree: 'Junior Full Stack Engineer',
    organization: 'Startup Inc.',
    location: 'Dhaka, Bangladesh',
    period: 'June 2026 – Present',
    description: 'Engineering scalable, production-ready web platforms and microservices across frontend and backend domains.',
    highlights: [
      'Architected RESTful endpoints using NestJS and Node.js with strict validation pipes',
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
