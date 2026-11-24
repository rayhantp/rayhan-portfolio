'use client';

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollContextValue {
  reducedMotion: boolean;
  scrollTo: (target: string | number) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  reducedMotion: false,
  scrollTo: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();

    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const prefersReduced =
      reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    const onScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onScroll);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const refreshTimeout = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      window.clearTimeout(refreshTimeout);
      gsap.ticker.remove(raf);
      lenis.off('scroll', onScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  const scrollTo = useCallback(
    (target: string | number) => {
      // Ensure theme resets cleanly if jumping outside the darkroom visual chapter (including scrollTo(0))
      if (target !== '#visual') {
        document.documentElement.dataset.theme = 'paper';
      }

      if (typeof target === 'string') {
        const el = document.querySelector<HTMLElement>(target);
        if (!el) return;

        if (lenisRef.current && !reducedMotion) {
          lenisRef.current.scrollTo(el, {
            offset: -64,
            duration: 1.05,
            easing: (t) => 1 - Math.pow(1 - t, 4),
          });
        } else {
          const top = el.getBoundingClientRect().top + window.scrollY - 64;
          window.scrollTo({ top, behavior: 'auto' });
        }
        return;
      }

      if (lenisRef.current && !reducedMotion) {
        lenisRef.current.scrollTo(target, { duration: 1.0 });
      } else {
        window.scrollTo({ top: target, behavior: 'auto' });
      }
    },
    [reducedMotion],
  );

  return (
    <SmoothScrollContext.Provider value={{ reducedMotion, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
