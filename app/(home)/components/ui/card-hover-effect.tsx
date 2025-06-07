import { cn } from "../../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
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
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 py-10 gap-4",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon;
        return (
        <motion.div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
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
          <div className="rounded-md w-full p-3 sm:p-4 overflow-hidden bg-black group-hover:ring-2 ring-green-500 relative z-20 transition-all duration-500 cursor-pointer h-24 sm:h-28 flex flex-col justify-center">
            <div className="z-50 relative space-y-2 sm:space-y-3 text-center">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-green-400 group-hover:text-green-300 transition-colors"/>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300 group-hover:text-white transition-colors">{item.title}</p>
            </div>
          </div>
        </motion.div>
        )})}
    </div>
  );
};