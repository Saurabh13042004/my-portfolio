"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface HandwrittenSubtitleProps {
  text: string;
  className?: string;
}

export default function HandwrittenSubtitle({ text, className = "" }: HandwrittenSubtitleProps) {
  // Split text into characters including spaces
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ 
        display: "flex", 
        overflow: "visible",
        fontFamily: '"Caveat", "Bradley Hand", cursive'
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`font-hand text-xl sm:text-2xl text-blue-400 font-normal tracking-wider select-none ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
