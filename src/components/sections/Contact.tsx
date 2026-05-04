"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import HandwrittenSubtitle from '../ui/HandwrittenSubtitle';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "sv176734@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 relative">
          <span className="font-mono text-blue-400 text-sm">06.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">get in touch</h2>

          {/* Handwritten Subtitle */}
          <div className="absolute -top-12 left-36 sm:left-64 pointer-events-none rotate-[-12deg] z-10">
            <HandwrittenSubtitle text="say hi!" />
          </div>

          <div className="flex-1 h-px bg-neutral-800"></div>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <p className="font-display text-3xl text-white tracking-tight leading-snug">
              Got an idea, role, or<br />
              <span className="text-blue-400">just want to talk</span> shop?
            </p>
            <p className="text-neutral-400">
              I read every message. Quickest way is email or LinkedIn — I usually respond within 24 hours.
            </p>

            <div className="space-y-2 pt-4">
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-950 hover:border-blue-400/40 transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-blue-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/></svg>
                <span className="font-mono text-sm text-neutral-200 flex-1">{email}</span>
                {copied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-emerald-500"><path d="M20 6 9 17l-5-5"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy text-neutral-500 group-hover:text-blue-400"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                )}
              </button>
              
              <a href="tel:+91 8149190804" className="flex items-center gap-3 px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-950 hover:border-blue-400/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-blue-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="font-mono text-sm text-neutral-200">+91 8149190804</span>
              </a>
              
              <a href="https://www.linkedin.com/in/sv176734/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-950 hover:border-blue-400/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-blue-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="font-mono text-sm text-neutral-200">/in/sv176734</span>
              </a>
              
              <a href="https://github.com/Saurabh13042004" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-950 hover:border-blue-400/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github text-blue-400"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span className="font-mono text-sm text-neutral-200">@Saurabh13042004</span>
              </a>
            </div>
          </div>

          <form className="lg:col-span-7 rounded-xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-neutral-500 mb-2 block">/name</label>
                <input 
                  className="flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus-visible:ring-blue-400 md:text-sm"
                  placeholder="Ada Lovelace"
                  name="name"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-neutral-500 mb-2 block">/email</label>
                <input 
                  className="flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus-visible:ring-blue-400 md:text-sm"
                  placeholder="ada@analytical.engine"
                  type="email"
                  name="email"
                />
              </div>
            </div>
            
            <div>
              <label className="font-mono text-xs text-neutral-500 mb-2 block">/message</label>
              <textarea 
                className="flex min-h-[60px] w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus-visible:ring-blue-400 resize-none md:text-sm"
                name="message"
                rows={6}
                placeholder="Tell me about your project, role, or idea…"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-[11px] text-neutral-500">→ ready</span>
              <button 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 bg-blue-400 text-neutral-950 hover:bg-blue-300 font-medium"
                type="submit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send mr-2"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
