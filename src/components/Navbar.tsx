"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800 py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-mono text-blue-400 text-sm">~/</span>
          <span className="font-display font-semibold text-white tracking-tight">saurabh<span className="text-blue-400">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          <a href="#about" className="font-mono text-xs text-neutral-400 hover:text-blue-400 px-3 py-2 rounded-md transition-colors">about</a>
          <a href="#work" className="font-mono text-xs text-neutral-400 hover:text-blue-400 px-3 py-2 rounded-md transition-colors">work</a>
          <a href="#projects" className="font-mono text-xs text-neutral-400 hover:text-blue-400 px-3 py-2 rounded-md transition-colors">projects</a>
          <a href="#skills" className="font-mono text-xs text-neutral-400 hover:text-blue-400 px-3 py-2 rounded-md transition-colors">skills</a>
          <a href="#playground" className="font-mono text-xs text-neutral-400 hover:text-blue-400 px-3 py-2 rounded-md transition-colors">playground</a>
          <a href="#contact" className="font-mono text-xs text-neutral-400 hover:text-blue-400 px-3 py-2 rounded-md transition-colors">contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com/Saurabh13042004" target="_blank" rel="noreferrer" className="hidden sm:inline-flex p-2 text-neutral-400 hover:text-white transition-colors" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/sv176734/" target="_blank" rel="noreferrer" className="hidden sm:inline-flex p-2 text-neutral-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="mailto:sv176734@gmail.com" className="hidden sm:inline-flex p-2 text-neutral-400 hover:text-white transition-colors" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
          </a>
          <a href="https://drive.google.com/file/d/1mIrGahiQalTk5AD4a1GuYL0S9q6IXeQ2/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow rounded-md px-3 bg-blue-400 text-neutral-950 hover:bg-blue-300 font-mono text-xs h-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-1.5" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg> resume
          </a>
        </div>
      </div>
    </header>
  );
}
