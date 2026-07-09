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
import Footer from '../components/Footer';
import { downloadCV } from '../utils/cv';

export default function Home() {
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

      <Footer />
    </div>
  );
}
