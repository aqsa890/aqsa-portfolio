import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + increment);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-5 sm:p-14 bg-[#0a0a0a] text-[#f4f4f4] select-none pointer-events-none"
        >
          {/* Top Label */}
          <div className="flex justify-between items-center text-[11px] sm:text-xs font-mono tracking-widest text-[#efe41f]">
            <span className="truncate pr-2">AQSA • DEVOPS & CLOUD</span>
            <span className="shrink-0">(2026)</span>
          </div>

          {/* Center Graphic & Animated Brand */}
          <div className="my-auto text-center flex flex-col items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#efe41f] via-white to-[#efe41f]"
            >
              AQSA
            </motion.h1>
            <div className="mt-3 sm:mt-4 font-body text-xs sm:text-sm tracking-widest text-[#c7c7c7] uppercase">
              Cloud Infrastructure & DevSecOps
            </div>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full">
            <div className="flex justify-between items-baseline mb-2 text-xs font-mono">
              <span className="text-[#c7c7c7]">INITIALIZING ENVIRONMENT...</span>
              <span className="text-xl font-bold font-heading text-[#efe41f]">
                {progress}%
              </span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#efe41f]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
