"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import { downloadCV } from '../utils/cv';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#0F1417] text-[#dfe3e7] min-h-screen selection:bg-[#3B82F6]/25 selection:text-[#dfe3e7]">
      {/* Scrollable Context with Top Margin Spacer */}
      <Navbar onDownloadCV={downloadCV} />
      
      <main className="pt-[80px]">
        {/* Sections Entry */}
        <Hero onDownloadCV={downloadCV} />
        <About />
        <Expertise />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-[#c2c6d6]/60 text-sm bg-[#0A0F12]">
        <p>© {currentYear} Md Abdullah Shishir. Designed &amp; Engineered with ❤️</p>
      </footer>
    </div>
  );
}
