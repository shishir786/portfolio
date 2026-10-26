"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Expertise from '../components/Expertise';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { downloadCV } from '../utils/cv';

export default function Home() {
  return (
    <div className="bg-[#070A11] text-slate-200 min-h-screen selection:bg-blue-600/30 selection:text-white">
      {/* Fixed top navigation bar */}
      <Navbar onDownloadCV={downloadCV} />

      <main className="pt-20">
        <Hero onDownloadCV={downloadCV} />
        <About />
        <Projects />
        <Expertise />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
