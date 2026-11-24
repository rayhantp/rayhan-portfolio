'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROFILE } from '@/data/profile';
import { useSmoothScroll } from './SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export function ProfileSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { reducedMotion } = useSmoothScroll();

  useEffect(() => {
    const prefersReduced =
      reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-profile-reveal]', {
        y: 26,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="profil"
      ref={sectionRef}
      className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Chapter Divider */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-5 font-mono text-[11px] tracking-[0.14em] uppercase hairline-border">
        <span style={{ color: 'var(--accent)' }}>01 / PROFIL &amp; ARAH SAAT INI</span>
        <span style={{ color: 'var(--muted)' }}>OPERASIONAL · INFRASTRUKTUR · STUDI LANJUT</span>
      </div>

      {/* Editorial Narrative Lead */}
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div data-profile-reveal className="lg:col-span-6">
          <h2
            className="font-serif text-[clamp(2rem,4vw,3.35rem)] leading-[1.12] tracking-[-0.015em]"
            style={{ color: 'var(--ink)' }}
          >
            {PROFILE.profileIntro}
          </h2>
        </div>

        <div data-profile-reveal className="flex flex-col justify-between gap-6 lg:col-span-5 lg:col-start-8">
          <p className="text-base leading-[1.75]" style={{ color: 'var(--muted)' }}>
            {PROFILE.profileBody}
          </p>

          <div className="grid grid-cols-2 gap-6 border-t pt-5 hairline-border">
            <div>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
                PENDIDIKAN
              </p>
              <p className="mt-1 text-sm font-medium" style={{ color: 'var(--ink)' }}>
                SMA IT Daarul Rahman 3
              </p>
              <p className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                Lulus 2026 · Persiapan Kuliah
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
                PERAN SAAT INI
              </p>
              <p className="mt-1 text-sm font-medium" style={{ color: 'var(--ink)' }}>
                PT Green Nitro Global
              </p>
              <p className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                &amp; Unit Usaha Keluarga
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Four Focus Pillars — Hairline Ledger (No Generic Icon Boxes) */}
      <div className="mt-16 border-t hairline-border lg:mt-20">
        <div className="py-4 font-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
          EMPAT BIDANG FOKUS UTAMA
        </div>
        <div className="divide-y border-t border-b hairline-border">
          {PROFILE.focusPillars.map((pillar) => (
            <article
              key={pillar.index}
              data-profile-reveal
              className="group grid grid-cols-1 gap-4 py-7 transition-colors duration-300 lg:grid-cols-12 lg:items-baseline lg:gap-8 hairline-border"
            >
              <div className="flex items-baseline gap-4 lg:col-span-4">
                <span
                  className="font-mono text-xs tabular-nums transition-colors duration-300"
                  style={{ color: 'var(--accent)' }}
                >
                  {pillar.index}
                </span>
                <h3
                  className="font-serif text-2xl leading-snug tracking-[-0.01em] sm:text-[1.7rem]"
                  style={{ color: 'var(--ink)' }}
                >
                  {pillar.title}
                </h3>
              </div>

              <p
                className="text-sm leading-[1.7] lg:col-span-5"
                style={{ color: 'var(--muted)' }}
              >
                {pillar.summary}
              </p>

              <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 lg:col-span-3 lg:justify-end">
                {pillar.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="border px-2.5 py-0.5 font-mono text-[10px] tracking-[0.06em] uppercase hairline-border"
                    style={{ color: 'var(--muted)' }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
