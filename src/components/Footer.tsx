import React from 'react';

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-900 px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto flex flex-row flex-wrap items-center justify-between gap-y-4 gap-x-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-blue-400 text-sm">~/</span>
          <span className="font-display font-semibold text-white">saurabh<span className="text-blue-400">.</span></span>
          <span className="font-mono text-xs text-neutral-600 ml-3 hidden md:inline">© 2026 — crafted with care.</span>
        </div>
        
        <div className="flex items-center gap-1">
          <a href="https://github.com/Saurabh13042004" target="_blank" rel="noreferrer" className="p-2 text-neutral-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/sv176734/" target="_blank" rel="noreferrer" className="p-2 text-neutral-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="mailto:sv176734@gmail.com" className="p-2 text-neutral-400 hover:text-blue-400 transition-colors" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
          </a>
        </div>

        <div className="font-mono text-[11px] text-neutral-600 flex items-center gap-2">
          <span className="text-emerald-400 animate-pulse">•</span> all systems operational
        </div>
      </div>
    </footer>
  );
}
