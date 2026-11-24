'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PROFILE } from '@/data/profile';
import { useSmoothScroll } from './SmoothScrollProvider';

export function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { reducedMotion, scrollTo } = useSmoothScroll();

  useEffect(() => {
    const prefersReduced =
      reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-hero-reveal]', {
        y: 22,
        opacity: 0,
        duration: 0.9,
        stagger: 0.085,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="mx-auto max-w-[1320px] px-5 pt-28 pb-16 sm:px-8 lg:px-12 lg:pt-36 lg:pb-24"
    >
      {/* Top Editorial Masthead Rule */}
      <div
        data-hero-reveal
        className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 font-mono text-[11px] tracking-[0.14em] uppercase hairline-border"
        style={{ color: 'var(--muted)' }}
      >
        <span>{PROFILE.heroKicker}</span>
        <span>{PROFILE.graduation}</span>
      </div>

      {/* Main Asymmetric 12-Column Grid */}
      <div className="grid grid-cols-1 gap-12 pt-10 lg:grid-cols-12 lg:gap-10 lg:pt-14">
        {/* Left 8 Columns: Name & Core Editorial Thesis */}
        <div className="flex flex-col justify-between lg:col-span-8 lg:pr-6">
          <div>
            <p
              data-hero-reveal
              className="mb-5 font-mono text-xs tracking-[0.12em] uppercase"
              style={{ color: 'var(--accent)' }}
            >
              00 / {PROFILE.name}
            </p>

            <h1
              data-hero-reveal
              className="font-serif text-[clamp(2.85rem,6.8vw,6rem)] leading-[0.98] tracking-[-0.02em]"
              style={{ color: 'var(--ink)' }}
            >
              <span className="block">{PROFILE.heroStatementLead}</span>
              <span className="block italic" style={{ color: 'var(--accent)' }}>
                {PROFILE.heroStatementItalic}
              </span>
              <span className="block">{PROFILE.heroStatementTail}</span>
            </h1>

            <p
              data-hero-reveal
              className="mt-8 max-w-2xl text-base leading-[1.7] sm:text-lg"
              style={{ color: 'var(--muted)' }}
            >
              {PROFILE.heroSubtitle}
            </p>
          </div>

          {/* Measured Action Row */}
          <div
            data-hero-reveal
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-6 hairline-border"
          >
            <a
              href="#proyek"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#proyek');
              }}
              className="inline-flex items-center gap-3 border px-5 py-2.5 font-mono text-xs tracking-[0.1em] uppercase transition-colors duration-300"
              style={{
                borderColor: 'var(--ink)',
                backgroundColor: 'var(--ink)',
                color: 'var(--bg)',
              }}
            >
              <span>Jelajahi Pengalaman &amp; Proyek</span>
              <span aria-hidden="true">↓</span>
            </a>

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link font-mono text-xs tracking-[0.1em] uppercase"
              style={{ color: 'var(--ink)' }}
            >
              <span>GitHub / {PROFILE.githubUsername}</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#kontak"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#kontak');
              }}
              className="editorial-link font-mono text-xs tracking-[0.1em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              <span>Kontak Langsung</span>
            </a>
          </div>
        </div>

        {/* Right 4 Columns: Monograph Specification & Real Telemetry Ledger */}
        <aside
          data-hero-reveal
          aria-label="Ringkasan Sistem Nyata"
          className="border-t pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 hairline-border"
        >
          <div className="mb-5 flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
            <span>INDEKS LAPANGAN</span>
            <span>DATA NYATA</span>
          </div>

          <dl className="divide-y hairline-border">
            {PROFILE.telemetry.map((item) => (
              <div key={item.label} className="py-4 first:pt-2 last:pb-0 hairline-border">
                <dt
                  className="font-mono text-[10px] tracking-[0.14em] uppercase"
                  style={{ color: 'var(--muted)' }}
                >
                  {item.label}
                </dt>
                <dd className="mt-1 flex items-baseline justify-between gap-4">
                  <span
                    className="font-serif text-3xl leading-none tracking-[-0.01em] tabular-nums"
                    style={{ color: 'var(--ink)' }}
                  >
                    {item.value}
                  </span>
                </dd>
                <p className="mt-1.5 text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
