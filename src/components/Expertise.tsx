"use client";

import { motion } from 'motion/react';
import { Monitor, Server, Database, Code2, Wrench, GraduationCap } from 'lucide-react';
import { SkillCategory } from '../types';

export default function Expertise() {
  const categories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: 'Code2',
      skills: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'Java', 'C++', 'C#'],
    },
    {
      title: 'Frontend',
      icon: 'Monitor',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'Redux'],
    },
    {
      title: 'Backend',
      icon: 'Server',
      skills: ['Node.js', 'Express.js', 'NestJS', 'Spring Boot'],
    },
    {
      title: 'Databases',
      icon: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'MariaDB', 'Prisma'],
    },
    {
      title: 'Tools & Systems',
      icon: 'Wrench',
      skills: ['Git', 'Linux', 'Docker', 'Postman', 'Figma'],
    },
    {
      title: 'Learning & Analytics',
      icon: 'GraduationCap',
      skills: ['AWS', 'GraphQL', 'Microservices', 'PyTorch', 'TensorFlow', 'Pandas', 'Arduino', 'MATLAB'],
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#3B82F6]" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-[#3B82F6]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#3B82F6]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#3B82F6]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#3B82F6]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#3B82F6]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  const getSkillStyle = (skill: string) => {
    switch (skill) {
      case 'TypeScript':
        return { bg: 'hover:bg-[#3178C6]/10 hover:border-[#3178C6]/30', color: 'hover:text-[#3178C6]', dot: 'bg-[#3178C6]' };
      case 'JavaScript':
        return { bg: 'hover:bg-[#F7DF1E]/10 hover:border-[#F7DF1E]/30', color: 'hover:text-[#F7DF1E]', dot: 'bg-[#F7DF1E]' };
      case 'Python':
        return { bg: 'hover:bg-[#3776AB]/10 hover:border-[#3776AB]/30', color: 'hover:text-[#3776AB]', dot: 'bg-[#3776AB]' };
      case 'PHP':
        return { bg: 'hover:bg-[#777BB4]/10 hover:border-[#777BB4]/30', color: 'hover:text-[#777BB4]', dot: 'bg-[#777BB4]' };
      case 'Java':
        return { bg: 'hover:bg-[#ED8B00]/10 hover:border-[#ED8B00]/30', color: 'hover:text-[#ED8B00]', dot: 'bg-[#ED8B00]' };
      case 'C++':
        return { bg: 'hover:bg-[#00599C]/10 hover:border-[#00599C]/30', color: 'hover:text-[#00599C]', dot: 'bg-[#00599C]' };
      case 'C#':
        return { bg: 'hover:bg-[#239120]/10 hover:border-[#239120]/30', color: 'hover:text-[#239120]', dot: 'bg-[#239120]' };

      case 'React.js':
        return { bg: 'hover:bg-[#61DAFB]/10 hover:border-[#61DAFB]/30', color: 'hover:text-[#61DAFB]', dot: 'bg-[#61DAFB]' };
      case 'Next.js':
        return { bg: 'hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF]/30', color: 'hover:text-white', dot: 'bg-white' };
      case 'Tailwind CSS':
        return { bg: 'hover:bg-[#06B6D4]/10 hover:border-[#06B6D4]/30', color: 'hover:text-[#06B6D4]', dot: 'bg-[#06B6D4]' };
      case 'HTML5':
        return { bg: 'hover:bg-[#E34F26]/10 hover:border-[#E34F26]/30', color: 'hover:text-[#E34F26]', dot: 'bg-[#E34F26]' };
      case 'Redux':
        return { bg: 'hover:bg-[#764ABC]/10 hover:border-[#764ABC]/30', color: 'hover:text-[#764ABC]', dot: 'bg-[#764ABC]' };

      case 'Node.js':
        return { bg: 'hover:bg-[#339933]/10 hover:border-[#339933]/30', color: 'hover:text-[#339933]', dot: 'bg-[#339933]' };
      case 'Express.js':
        return { bg: 'hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF]/30', color: 'hover:text-white', dot: 'bg-white' };
      case 'NestJS':
        return { bg: 'hover:bg-[#E0234E]/10 hover:border-[#E0234E]/30', color: 'hover:text-[#E0234E]', dot: 'bg-[#E0234E]' };
      case 'Spring Boot':
        return { bg: 'hover:bg-[#6DB33F]/10 hover:border-[#6DB33F]/30', color: 'hover:text-[#6DB33F]', dot: 'bg-[#6DB33F]' };

      case 'PostgreSQL':
        return { bg: 'hover:bg-[#4169E1]/10 hover:border-[#4169E1]/30', color: 'hover:text-[#4169E1]', dot: 'bg-[#4169E1]' };
      case 'MySQL':
        return { bg: 'hover:bg-[#4479A1]/10 hover:border-[#4479A1]/30', color: 'hover:text-[#4479A1]', dot: 'bg-[#4479A1]' };
      case 'MongoDB':
        return { bg: 'hover:bg-[#47A248]/10 hover:border-[#47A248]/30', color: 'hover:text-[#47A248]', dot: 'bg-[#47A248]' };
      case 'Oracle':
        return { bg: 'hover:bg-[#F80000]/10 hover:border-[#F80000]/30', color: 'hover:text-[#F80000]', dot: 'bg-[#F80000]' };
      case 'MariaDB':
        return { bg: 'hover:bg-[#003545]/20 hover:border-[#003545]/40', color: 'hover:text-[#00F3FF]', dot: 'bg-[#00F3FF]' };
      case 'Prisma':
        return { bg: 'hover:bg-[#2D3748]/10 hover:border-[#2D3748]/30', color: 'hover:text-[#2D3748]', dot: 'bg-teal-400' };

      case 'Git':
        return { bg: 'hover:bg-[#F05032]/10 hover:border-[#F05032]/30', color: 'hover:text-[#F05032]', dot: 'bg-[#F05032]' };
      case 'Linux':
        return { bg: 'hover:bg-[#FCC624]/10 hover:border-[#FCC624]/30', color: 'hover:text-[#FCC624]', dot: 'bg-[#FCC624]' };
      case 'Docker':
        return { bg: 'hover:bg-[#2496ED]/10 hover:border-[#2496ED]/30', color: 'hover:text-[#2496ED]', dot: 'bg-[#2496ED]' };
      case 'Postman':
        return { bg: 'hover:bg-[#FF6C37]/10 hover:border-[#FF6C37]/30', color: 'hover:text-[#FF6C37]', dot: 'bg-[#FF6C37]' };
      case 'Figma':
        return { bg: 'hover:bg-[#F24E1E]/10 hover:border-[#F24E1E]/30', color: 'hover:text-[#F24E1E]', dot: 'bg-[#A259FF]' };

      case 'AWS':
        return { bg: 'hover:bg-[#FF9900]/10 hover:border-[#FF9900]/30', color: 'hover:text-[#FF9900]', dot: 'bg-[#FF9900]' };
      case 'GraphQL':
        return { bg: 'hover:bg-[#E10098]/10 hover:border-[#E10098]/30', color: 'hover:text-[#E10098]', dot: 'bg-[#E10098]' };
      case 'Microservices':
        return { bg: 'hover:bg-[#6366F1]/10 hover:border-[#6366F1]/30', color: 'hover:text-[#6366F1]', dot: 'bg-[#6366F1]' };
      case 'PyTorch':
        return { bg: 'hover:bg-[#EE4C2C]/10 hover:border-[#EE4C2C]/30', color: 'hover:text-[#EE4C2C]', dot: 'bg-[#EE4C2C]' };
      case 'TensorFlow':
        return { bg: 'hover:bg-[#FF6F00]/10 hover:border-[#FF6F00]/30', color: 'hover:text-[#FF6F00]', dot: 'bg-[#FF6F00]' };
      case 'Pandas':
        return { bg: 'hover:bg-[#150458]/20 hover:border-[#150458]/40', color: 'hover:text-[#3B82F6]', dot: 'bg-[#150448]' };
      case 'Arduino':
        return { bg: 'hover:bg-[#00979D]/10 hover:border-[#00979D]/30', color: 'hover:text-[#00979D]', dot: 'bg-[#00979D]' };
      case 'MATLAB':
        return { bg: 'hover:bg-[#D9361F]/10 hover:border-[#D9361F]/30', color: 'hover:text-[#D9361F]', dot: 'bg-[#D9361F]' };

      default:
        return { bg: 'hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]/30', color: 'hover:text-[#3B82F6]', dot: 'bg-slate-400' };
    }
  };

  return (
    <section id="expertise" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0F172A]/20">
      <div className="text-center mb-16 space-y-3">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/10">
          Abilities
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#dfe3e7] tracking-tight">Technical Expertise</h2>
        <div className="w-16 h-1 bg-[#3B82F6] rounded mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category, idx) => (
          <motion.div
            id={`expertise-${category.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            key={category.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="surface-1 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#1E293B]/50 to-[#0F172A]/50 border border-white/5 hover:border-white/10 transition-all duration-350 relative group"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                {getIcon(category.icon)}
              </div>
              <h3 className="text-lg font-bold text-[#dfe3e7] font-sans group-hover:text-white transition-colors">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => {
                const style = getSkillStyle(skill);
                return (
                  <span
                    key={skill}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-semibold text-[#c2c6d6] transition-all duration-200 cursor-default ${style.bg} ${style.color}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${style.dot} opacity-75 group-hover:opacity-100`}></span>
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
