"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HandwrittenSubtitle from '../ui/HandwrittenSubtitle';

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 relative">
          <span className="font-mono text-blue-400 text-sm">01.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">about</h2>
          
          {/* Handwritten Subtitle */}
          <div className="absolute -top-10 left-20 sm:left-32 pointer-events-none rotate-[-8deg] z-10">
            <HandwrittenSubtitle text="its me, person behind the terminal" />
          </div>

          <div className="flex-1 h-px bg-neutral-800"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="font-display text-2xl sm:text-3xl text-white leading-snug tracking-tight">
              I design <span className="text-blue-400">production-grade systems</span> that are observable, reliable, and ship fast.
            </p>
            <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
              Currently, I build and scale distributed systems that move billions of customer events daily. My work focuses on high-volume event ingestion, deep observability, and developing intelligent AI tooling—like MCP-based agents that translate natural language into complex SQL and data workflows.
            </p>
            <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
              My technical foundation is built on architecting distributed streaming pipelines and event-driven architectures (<span className="text-white">Kafka, Pub/Sub, RabbitMQ</span>).
            </p>
            <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
              I’m a competitive programmer at heart—having solved <span className="text-white">650+ DSA problems</span> with a <span className="text-white">Global Rank of 200</span> on CodeChef. Whether it's winning <span className="text-white">Web-a-thon 2023</span> or maintaining <span className="text-white">750+ GitHub contributions</span> since 2025, I am obsessed with shipping reliable code, fast.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50">
                <div className="text-blue-400 font-mono text-sm mb-1">Web-a-thon 2023</div>
                <div className="text-white font-medium">Winner</div>
              </div>
              <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50">
                <div className="text-blue-400 font-mono text-sm mb-1">HackDay-21</div>
                <div className="text-white font-medium">2nd Runner-Up</div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-900">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap text-blue-400 mt-1"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                <div>
                  <div className="text-white font-medium">B.E. Computer Science</div>
                  <div className="text-neutral-400 text-sm">Chitkara University, Himachal Pradesh</div>
                  <div className="font-mono text-xs text-neutral-500 mt-1">Jul 2021 — Aug 2025 · GPA 9.1 / 10</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-neutral-800 bg-neutral-950/60 p-6 backdrop-blur">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-blue-400"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">/now</span>
                </div>
                <span className="font-mono text-[10px] text-neutral-500">updated jul 2025</span>
              </div>
              
              <ul className="space-y-4">
                <li className="group">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-1">Current Focus</div>
                  <div className="text-neutral-100 group-hover:text-blue-300 transition-colors">Distributed systems & AI-driven observability</div>
                </li>
                <li className="group">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-1">Building</div>
                  <div className="text-neutral-100 group-hover:text-blue-300 transition-colors">AI applications (IMO, DocuQuery) & high-scale data systems</div>
                </li>
                <li className="group">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-1">OSS Contribution</div>
                  <div className="text-neutral-100 group-hover:text-blue-300 transition-colors">750+ contributions since 2025 (GitHub)</div>
                </li>
                <li className="group">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-1">Learning</div>
                  <div className="text-neutral-100 group-hover:text-blue-300 transition-colors">HLD, LLD, & Backend Architectures</div>
                </li>
                <li className="group">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-1">Reading</div>
                  <div className="text-neutral-100 group-hover:text-blue-300 transition-colors">System Design Interview — Alex Xu</div>
                </li>
              </ul>
              
              <div className="absolute -bottom-px left-6 right-6 h-px gradient-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
