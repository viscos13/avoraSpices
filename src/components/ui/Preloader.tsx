'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast, refined 0.8s warm alabaster reveal
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 160);
          return 100;
        }
        return prev + 15;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none"
        >
          {/* Subtle warm ambient glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#E5A024]/8 blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex flex-col items-center text-center z-10 px-6"
          >
            <Logo size="lg" className="mb-6" />

            <div className="text-[11px] font-sans tracking-[0.28em] uppercase text-[#554D45] mb-8 font-semibold">
              B2B International Spice Export • Bengaluru, India
            </div>

            {/* Sleek Golden Progress Track */}
            <div className="w-56 h-[2px] bg-[#141210]/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#0B3B2E] via-[#C97E12] to-[#E5A024]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            <div className="mt-3 text-xs font-sans text-[#C97E12] font-bold tracking-widest tabular-nums">
              {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
