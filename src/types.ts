export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Desktop App' | 'Graphics';
  tags: string[];
  icon: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  highlights?: string[];
  architecture?: string;
  problem?: string;
  solution?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  year: string;
  icon: string;
  credentialUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level?: 'Advanced' | 'Proficient' | 'Familiar'; tag?: string }[];
}

export interface TimelineItem {
  id: string;
  roleOrDegree: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
}
