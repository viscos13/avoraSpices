'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import Lenis from 'lenis';

interface ScrollContextType {
  lenis: Lenis | null;
  scrollProgress: number; // 0 to 1 across whole page
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null,
  scrollProgress: 0,
});

export const useSmoothScroll = () => useContext(ScrollContext);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Silky cinematic inertial scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    setLenisInstance(lenis);

    function onScroll(e: { progress: number; scroll: number; limit: number }) {
      setScrollProgress(e.progress);
    }

    lenis.on('scroll', onScroll);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ lenis: lenisInstance, scrollProgress }}>
      {children}
    </ScrollContext.Provider>
  );
}
