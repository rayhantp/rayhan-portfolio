'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RESEARCH } from '@/data/research';
import { useSmoothScroll } from './SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export function ResearchSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { reducedMotion } = useSmoothScroll();

  useEffect(() => {
    const prefersReduced =
      reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-research-reveal]', {
        y: 26,
        opacity: 0,
        duration: 0.85,
        stagger: 0.09,
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
      id="kti"
      ref={sectionRef}
      className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Chapter Rule */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-5 font-mono text-[11px] tracking-[0.14em] uppercase hairline-border">
        <span style={{ color: 'var(--accent)' }}>{RESEARCH.chapter}</span>
        <span style={{ color: 'var(--muted)' }}>
          {RESEARCH.institution} · {RESEARCH.year}
        </span>
      </div>

      {/* Printed Academic Monograph Sheet */}
      <div
        data-research-reveal
        className="surface-panel mt-12 border hairline-border"
      >
        {/* Top Metadata Grid */}
        <div className="grid grid-cols-1 divide-y border-b sm:grid-cols-3 sm:divide-x sm:divide-y-0 hairline-border">
          <div className="p-5 sm:p-6 hairline-border">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
              JENIS DOKUMEN
            </p>
            <p className="mt-1.5 font-mono text-xs" style={{ color: 'var(--ink)' }}>
              {RESEARCH.documentType}
            </p>
          </div>
          <div className="p-5 sm:p-6 hairline-border">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
              INSTITUSI &amp; TAHUN
            </p>
            <p className="mt-1.5 font-mono text-xs" style={{ color: 'var(--ink)' }}>
              {RESEARCH.institution} · {RESEARCH.year}
            </p>
          </div>
          <div className="p-5 sm:p-6 hairline-border">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
              BIDANG KAJIAN
            </p>
            <p className="mt-1.5 font-mono text-xs" style={{ color: 'var(--ink)' }}>
              {RESEARCH.field}
            </p>
          </div>
        </div>

        {/* Monograph Main Body */}
        <div className="grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
          <div className="lg:col-span-7">
            <p
              className="font-mono text-[11px] tracking-[0.14em] uppercase"
              style={{ color: 'var(--accent)' }}
            >
              JUDUL PENELITIAN
            </p>
            <h2
              className="mt-4 font-serif text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14] tracking-[-0.015em]"
              style={{ color: 'var(--ink)' }}
            >
              &ldquo;{RESEARCH.title}&rdquo;
            </h2>
            <p
              className="mt-6 text-sm leading-[1.8] sm:text-base"
              style={{ color: 'var(--muted)' }}
            >
              {RESEARCH.focusStatement}
            </p>

            {/* Factual Scope Matrix */}
            <dl className="mt-8 grid grid-cols-1 gap-6 border-t pt-7 sm:grid-cols-2 hairline-border">
              {RESEARCH.scopePoints.map((point) => (
                <div key={point.label}>
                  <dt
                    className="font-mono text-[10px] tracking-[0.14em] uppercase"
                    style={{ color: 'var(--accent)' }}
                  >
                    {point.label}
                  </dt>
                  <dd
                    className="mt-1.5 text-sm leading-[1.65]"
                    style={{ color: 'var(--muted)' }}
                  >
                    {point.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Column: Distributed Wi-Fi -> NAS Architecture Diagram */}
          <div className="flex flex-col justify-between border-t pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 hairline-border">
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
                <span>SKEMA KONSEPTUAL KTI</span>
                <span style={{ color: 'var(--accent)' }}>WI-FI → NAS</span>
              </div>

              <svg
                viewBox="0 0 380 310"
                className="mt-5 h-auto w-full"
                fill="none"
                role="img"
                aria-label="Diagram konseptual jaringan Wi-Fi terdistribusi ke server NAS"
              >
                {/* Three Distributed Wi-Fi Access Points */}
                {[
                  { y: 20, code: 'AP-01', name: 'Titik Wi-Fi Zona A' },
                  { y: 112, code: 'AP-02', name: 'Titik Wi-Fi Zona B' },
                  { y: 204, code: 'AP-03', name: 'Titik Wi-Fi Zona C' },
                ].map((ap) => (
                  <g key={ap.code}>
                    <rect
                      x="12"
                      y={ap.y}
                      width="134"
                      height="64"
                      stroke="var(--ink)"
                      strokeWidth="1.2"
                      fill="var(--bg)"
                    />
                    <text x="24" y={ap.y + 22} fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">
                      {ap.code}
                    </text>
                    <text x="24" y={ap.y + 44} fill="var(--ink)" fontSize="11.5" fontFamily="var(--font-sans)" fontWeight="500">
                      {ap.name}
                    </text>
                    <path
                      d={`M 146 ${ap.y + 32} H 184 V 144 H 206`}
                      stroke="var(--ink)"
                      strokeWidth="1.1"
                      strokeDasharray={ap.code === 'AP-02' ? undefined : '4 3'}
                    />
                  </g>
                ))}

                {/* Central LAN Core */}
                <circle cx="206" cy="144" r="4" fill="var(--accent)" />
                <line x1="206" y1="144" x2="236" y2="144" stroke="var(--accent)" strokeWidth="1.6" />

                {/* NAS Central Node */}
                <rect x="236" y="76" width="132" height="136" stroke="var(--accent)" strokeWidth="1.5" fill="var(--bg)" />
                <text x="250" y="100" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1.2">
                  NAS NODE
                </text>
                <text x="250" y="124" fill="var(--ink)" fontSize="15" fontFamily="var(--font-serif)">
                  Server NAS
                </text>
                <line x1="250" y1="136" x2="354" y2="136" stroke="var(--hairline)" strokeWidth="1" />
                <text x="250" y="158" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">
                  • Akses Lokal LAN
                </text>
                <text x="250" y="176" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">
                  • Data Terpusat
                </text>
                <text x="250" y="194" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">
                  • Daarul Rahman 3
                </text>
              </svg>
            </div>

            <div className="mt-6 border-t pt-4 font-mono text-[10.5px] leading-relaxed hairline-border" style={{ color: 'var(--muted)' }}>
              PENULIS: RAYHAN TSHANI PUTRA · SMA IT DAARUL RAHMAN 3 (2026)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
