"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-10 gap-2",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon;
        return (
          <div
            key={item.title}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-2xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col items-center justify-center gap-3">
              <Icon className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors text-center">
                {item.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
