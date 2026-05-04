"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HandwrittenSubtitle from '../ui/HandwrittenSubtitle';

export default function Projects() {
  const [showBadge, setShowBadge] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setShowBadge(id);
    setTimeout(() => setShowBadge(null), 3000);
  };

  return (
    <section id="projects" className="relative py-28 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 relative">
          <span className="font-mono text-blue-400 text-sm">03.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">selected projects</h2>
          
          {/* Handwritten Subtitle */}
          <div className="absolute -top-12 left-36 sm:left-72 pointer-events-none rotate-[-8deg] z-10">
            <HandwrittenSubtitle text="things I built because I couldn't stop thinking about them" />
          </div>

          <div className="flex-1 h-px bg-neutral-800"></div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* IMO */}
          <article 
            onClick={() => handleClick('imo')}
            className="group relative rounded-xl border border-neutral-800 bg-neutral-950/60 p-7 hover:border-blue-400/40 hover:bg-neutral-900/50 transition-colors duration-300 cursor-pointer overflow-hidden"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="p-2.5 rounded-lg border border-blue-400/30 bg-blue-400/10 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
              </div>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-neutral-600 group-hover:text-blue-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </div>
            </div>
            
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <h3 className="font-display text-xl text-white font-semibold tracking-tight">IMO — AI Shopping Assistant</h3>
              <span className="font-mono text-[11px] text-neutral-500 shrink-0">Jan 2026</span>
            </div>
            
            <p className="text-neutral-300 leading-relaxed text-sm">
              Distributed AI-powered product research platform aggregating products and reviews from multiple marketplaces in real time — collapsing hours of manual comparison into minutes.
            </p>
            <p className="text-neutral-500 leading-relaxed text-[13px] mt-3 italic">
              Async task orchestration with Celery workers, task polling, and Redis-based progressive caching to keep long-running AI pipelines off the request thread.
            </p>
            
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2">
                <div className="font-display text-lg text-blue-300 font-semibold">5+</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Marketplaces aggregated</div>
              </div>
              <div className="rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2">
                <div className="font-display text-lg text-blue-300 font-semibold">~85%</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Latency reduction</div>
              </div>
            </div>
            
            <div className="mt-5 flex flex-wrap gap-1.5">
              {["Python", "FastAPI", "PostgreSQL", "AWS", "React.js", "Docker", "Redis"].map(tech => (
                <span key={tech} className="font-mono text-[11px] px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>

            <AnimatePresence>
              {showBadge === 'imo' && (
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="absolute inset-x-0 bottom-0 py-2 bg-blue-500 text-neutral-950 text-center font-mono text-[10px] font-bold tracking-tighter z-10"
                >
                  DEPLOYED LINK WILL BE UPDATED SOON
                </motion.div>
              )}
            </AnimatePresence>
          </article>

          {/* DocuQuery */}
          <article 
            onClick={() => handleClick('docuquery')}
            className="group relative rounded-xl border border-neutral-800 bg-neutral-950/60 p-7 hover:border-blue-400/40 hover:bg-neutral-900/50 transition-colors duration-300 cursor-pointer overflow-hidden"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="p-2.5 rounded-lg border border-neutral-700 bg-neutral-900 text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-neutral-600 group-hover:text-blue-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </div>
            
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <h3 className="font-display text-xl text-white font-semibold tracking-tight">DocuQuery</h3>
              <span className="font-mono text-[11px] text-neutral-500 shrink-0">Oct 2025</span>
            </div>
            
            <p className="text-neutral-300 leading-relaxed text-sm">
              Built an AI-powered chat-to-PDF system that enables users to edit PDFs via natural language in seconds while preserving original layout, styling, and formatting, unlike typical LLM tools.
            </p>
            <p className="text-neutral-500 leading-relaxed text-[13px] mt-3 italic">
              Implemented vector-based retrieval and document-aware editing using embeddings for precise section-level updates without corrupting the document structure.
            </p>
            
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2">
                <div className="font-display text-lg text-blue-300 font-semibold">&lt; 8s</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Avg edit time</div>
              </div>
              <div className="rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2">
                <div className="font-display text-lg text-blue-300 font-semibold">100%</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Layout preserved</div>
              </div>
            </div>
            
            <div className="mt-5 flex flex-wrap gap-1.5">
              {["FastAPI", "LangChain", "React", "ChromaDB", "Docker"].map(tech => (
                <span key={tech} className="font-mono text-[11px] px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>

            <AnimatePresence>
              {showBadge === 'docuquery' && (
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="absolute inset-x-0 bottom-0 py-2 bg-blue-500 text-neutral-950 text-center font-mono text-[10px] font-bold tracking-tighter z-10"
                >
                  DEPLOYED LINK WILL BE UPDATED SOON
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        </div>
      </div>
    </section>
  );
}
