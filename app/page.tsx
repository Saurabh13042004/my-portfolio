"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Aurora from '../src/components/Aurora';
import ShinyText from '../src/components/ShinyText';
import GradientText from '../src/components/GradientText';
import Noise from '../src/components/Noise';
import RotatingText from '../src/components/RotatingText';

export default function Home() {
  const [copied, setCopied] = useState(false);
  
  // Reset copied state after 2 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@saurabhshukla.tech");
    setCopied(true);
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Background Aurora effect */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      {/* Content Container with Fade-In Animation */}
      <motion.div 
        className="relative z-10 text-center text-white p-8 max-w-3xl flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Code-style introduction */}
        <ShinyText
          text="const portfolio = await init();"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-sm font-mono opacity-60 mb-4"
        />
        
        {/* Main title with hover glow effect */}
        <div className="hover-glow-container mb-2">
          <GradientText
            colors={["#fff", "#e0e0ff", "#fff"]}
            animationSpeed={4}
            className="text-6xl font-bold transition-all duration-300 hover:scale-105"
          >
            Saurabh Shukla
          </GradientText>
        </div>
        
        {/* Developer title */}
        <ShinyText 
          text="Full-stack & AI Developer" 
          speed={2} 
          className="text-2xl opacity-90 mb-6" 
        />
        
        {/* Rotating Description */}
        <RotatingText
          texts={[
              'Portfolio v2.0 under development',
              'Building with modern tech stack..',
              'Crafting blazing-fast, scalable apps with AI ✨',
              'Merging new projects..'
          ]}
          mainClassName="text-base opacity-70 mb-10 overflow-hidden py-1 justify-center"
          staggerFrom={"first"}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "120%" }}
          staggerDuration={0.02}
          splitLevelClassName="overflow-hidden"
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          rotationInterval={4000}
        />
        
        {/* Email CTA */}
        <button 
          onClick={copyEmail}
          className="text-sm flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity mb-8 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          {copied ? "Email copied!" : "sv176734@gmail.com"}
        </button>
        
        {/* Social links */}
        <div className="flex space-x-4">
          <a href="https://github.com/saurabh13042004" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/sv176734" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://instagram.com/saurabh._shukla._" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
