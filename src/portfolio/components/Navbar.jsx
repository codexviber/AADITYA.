// @ts-nocheck
import ThemeToggle from './ThemeToggle';
import { bindSmoothAnchors } from '../smooth-scroll';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => bindSmoothAnchors(), []);

  const navLinks = ['Home', 'About', 'Expertise', 'Skills', 'Projects', 'Contact'];
  const topText = isOpen || !isScrolled ? 'text-white' : 'text-gray-900 dark:text-white';
  const themeVariant = isOpen || !isScrolled ? 'glass' : 'bar';

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isOpen
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled
            ? 'bg-white/70 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0f0f14]/80 dark:shadow-[0_4px_30px_rgba(0,0,0,0.24)]'
            : 'bg-transparent py-5'
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-black/10 dark:bg-white/10" aria-hidden="true">
        <div className="h-full bg-[#ff2a2a]" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 md:px-12">
        <div className="flex min-w-0 items-center">
          <a href="#home" onClick={() => setIsOpen(false)} className={`truncate text-xl tracking-tight transition-colors duration-500 sm:text-2xl ${topText}`}>
            AADITYA <span className="text-[#ff2a2a]">.</span>
          </a>
        </div>

        <div className="hidden space-x-7 xl:flex xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`group relative text-sm tracking-wide transition-colors duration-500 ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
          <ThemeToggle variant={themeVariant} />
          <div className="hidden items-center space-x-4 xl:flex">
            <a
              href="/projects"
              className={`rounded-full border px-5 py-2 text-sm transition-all duration-500 ${
                isScrolled
                  ? 'border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 dark:border-white/20 dark:text-gray-200 dark:hover:border-white dark:hover:text-white'
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              All Projects
            </a>
            <a
              href="#contact"
              className={`rounded-full px-6 py-2.5 text-sm transition-all duration-500 ${
                isScrolled
                  ? 'bg-gray-900 text-white shadow-none hover:bg-[#ff2a2a] hover:shadow-[0_10px_25px_rgba(255,42,42,0.25)] dark:bg-white dark:text-gray-900 dark:hover:bg-[#ff2a2a] dark:hover:text-white'
                  : 'border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black'
              }`}
            >
              Let’s Connect
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors duration-500 focus:outline-none xl:hidden ${topText}`}
            aria-label="Toggle navigation drawer menu"
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 top-full w-full transition-all duration-500 ease-in-out xl:hidden ${
          isOpen ? 'max-h-[calc(100svh-4.5rem)] overflow-y-auto bg-[#ff2a2a] py-6 opacity-100 shadow-2xl' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 pb-2.5 text-base text-white transition-colors hover:text-black"
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-2">
            <a href="/projects" className="w-full rounded-full border border-white/50 px-6 py-3 text-center text-white transition-all duration-300 hover:bg-white hover:text-[#ff2a2a]">
              All Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-full bg-white px-6 py-3 text-center text-[#ff2a2a] shadow-xl transition-all duration-300 hover:bg-gray-950 hover:text-white"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
