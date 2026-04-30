"use client";

import { motion } from 'framer-motion';
import Aurora from '@/components/ui/Aurora';
import Noise from '@/components/ui/Noise';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
      {/* Aurora Background */}
      <div className="absolute inset-x-0 top-0 h-[85vh] pointer-events-none opacity-80">
        <Aurora
          colorStops={["#3b82f6", "#8b5cf6", "#1d4ed8"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Noise layer */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <Noise
          patternSize={250}
          patternScaleX={2}
          patternScaleY={2}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">

        <div className="font-mono text-xs text-neutral-500 mb-4 fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-blue-400">$</span> whoami
        </div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[0.95] fade-up" style={{ animationDelay: '0.2s' }}>
          Saurabh<br />
          <span className="text-gradient-blue">Shukla.</span>
        </h1>

        <div className="mt-8 max-w-2xl fade-up" style={{ animationDelay: '0.35s' }}>
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
            AI Developer & Software Engineer <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop inline-block ml-1 text-blue-400"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.2 2.4a.5.5 0 0 1-.45.6H3.25a.5.5 0 0 1-.45-.6L4 16"/></svg>. Fuelled by coffee <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee inline-block ml-1 text-blue-400"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14"/><path d="M17 12h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/><path d="M7 2v2"/></svg><br className="hidden sm:block" />
            Learning and developing high-scale, production-grade systems and intelligent agents.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 fade-up" style={{ animationDelay: '0.5s' }}>
          <a href="#projects" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-10 rounded-md px-8 bg-blue-400 text-neutral-950 hover:bg-blue-300 font-medium">
            view work
          </a>
          <a href="#playground" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm h-10 rounded-md px-8 border-neutral-700 bg-transparent text-neutral-200 hover:bg-neutral-900 hover:text-white">
            try playground →
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6 font-mono text-xs text-neutral-500 fade-up" style={{ animationDelay: '0.65s' }}>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> Bengaluru, India
          </span>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle fill-emerald-400 text-emerald-400"><circle cx="12" cy="12" r="10"/></svg> open to relocate
          </span>
          <span>↳ B.E. CSE · 9.1 GPA</span>
        </div>

        <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-blue-400 transition-colors" aria-label="scroll">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down animate-bounce"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </a>
      </div>
    </section>
  );
}
