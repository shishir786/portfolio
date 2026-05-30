"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onDownloadCV: () => void;
}

export default function Navbar({ onDownloadCV }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    if (targetId === '') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // Delay scroll slightly to allow React state to settle and the mobile drawer to close
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="text-2xl font-bold tracking-tighter text-[#dfe3e7] hover:text-[#adc6ff] transition-colors"
        >
          AS
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              id={`nav-item-${item.label.toLowerCase()}`}
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-[#c2c6d6] hover:text-[#dfe3e7] hover:bg-white/5 px-3 py-1.5 rounded-lg transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            id="nav-btn-download-cv"
            onClick={onDownloadCV}
            className="btn-ghost text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 text-[#dfe3e7] transition-all duration-200 cursor-pointer"
          >
            Download CV
            <Download className="w-4 h-4 text-[#adc6ff]" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#dfe3e7] hover:text-[#adc6ff] focus:outline-none cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-mobile-drawer"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="md:hidden border-b border-white/10 bg-[#0f1417]/95 backdrop-blur-xl px-6 py-6 absolute w-full left-0 top-[100%]"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  id={`nav-mobile-item-${item.label.toLowerCase()}`}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-base font-medium text-[#c2c6d6] hover:text-[#dfe3e7] py-2 border-b border-white/5"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                id="nav-mobile-btn-download-cv"
                onClick={() => {
                  setIsOpen(false);
                  onDownloadCV();
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full mt-2 btn-primary py-3 rounded-full flex items-center justify-center gap-2 font-medium cursor-pointer"
              >
                Download CV
                <Download className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
