import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
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
    description: 'Designing resilient, secure REST endpoints with strict validation and middleware.',
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
      { name: 'Linux & AWS EC2', level: 'Familiar' },
      { name: 'Nginx', level: 'Familiar' },
      { name: 'Server Monitoring', level: 'Familiar' },
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
