export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Backend'| 'Desktop App' | 'Graphics';
  tags: string[];
  icon: string; // lucide class name / identifier
    imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  year: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface TimelineItem {
  id: string;
  roleOrDegree: string;
  organization: string;
  period: string;
  description: string;
}
