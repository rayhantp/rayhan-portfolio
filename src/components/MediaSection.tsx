'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MEDIA } from '@/data/media';
import { useSmoothScroll } from './SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export function MediaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { reducedMotion } = useSmoothScroll();

  useEffect(() => {
    if (!sectionRef.current) return;

    const setTheme = (theme: 'paper' | 'darkroom') => {
      document.documentElement.dataset.theme = theme;
    };

    const ctx = gsap.context(() => {
      // Smooth editorial darkroom shift when entering Chapter 04, reliably restoring paper on leave & tall viewports
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 55%',
        end: 'bottom 65%',
        onToggle: (self) => setTheme(self.isActive ? 'darkroom' : 'paper'),
        onRefresh: (self) => setTheme(self.isActive ? 'darkroom' : 'paper'),
      });

      const contactEl = document.getElementById('kontak');
      if (contactEl) {
        ScrollTrigger.create({
          trigger: contactEl,
          start: 'top 80%',
          onEnter: () => setTheme('paper'),
          onRefresh: (self) => {
            if (self.isActive) setTheme('paper');
          },
        });
      }

      const prefersReduced =
        reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReduced) {
        gsap.from('[data-media-reveal]', {
          y: 26,
          opacity: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 76%',
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      setTheme('paper');
    };
  }, [reducedMotion]);

  return (
    <section
      id="visual"
      ref={sectionRef}
      className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Chapter Divider */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-5 font-mono text-[11px] tracking-[0.14em] uppercase hairline-border">
        <span style={{ color: 'var(--accent)' }}>{MEDIA.chapter}</span>
        <span style={{ color: 'var(--muted)' }}>DARKROOM ARCHIVE · LIVE PRODUCTION &amp; FILM</span>
      </div>

      {/* Editorial Opening */}
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
        <div data-media-reveal className="lg:col-span-7">
          <h2
            className="font-serif text-[clamp(2.3rem,5vw,4.25rem)] leading-[1.04] tracking-[-0.02em]"
            style={{ color: 'var(--ink)' }}
          >
            {MEDIA.headline}
          </h2>
        </div>
        <div data-media-reveal className="lg:col-span-5">
          <p className="text-sm leading-[1.75] sm:text-base" style={{ color: 'var(--muted)' }}>
            {MEDIA.intro}
          </p>
        </div>
      </div>

      {/* Featured Graduation Short Film — AINAL MAFAR */}
      <div data-media-reveal className="mt-14 border hairline-border surface-panel">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3.5 font-mono text-[11px] tracking-[0.14em] uppercase hairline-border">
          <span style={{ color: 'var(--accent)' }}>{MEDIA.film.tag}</span>
          <span style={{ color: 'var(--muted)' }}>{MEDIA.film.context} · REEL SLOT</span>
        </div>

        {/* 16:9 Cinema Frame (renders real video if MEDIA.film.videoUrl is populated, otherwise director's slate) */}
        <div
          className={`relative w-full overflow-hidden border-b hairline-border ${
            MEDIA.film.videoUrl ? 'aspect-video' : 'min-h-[340px] sm:aspect-video'
          }`}
        >
          {MEDIA.film.videoUrl ? (
            <iframe
              src={MEDIA.film.videoUrl}
              title={`Film Pendek ${MEDIA.film.title}`}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              className="relative flex h-full w-full flex-col justify-between p-6 sm:p-10 lg:p-12"
              style={{
                background:
                  'radial-gradient(circle at 75% 25%, rgba(212, 102, 66, 0.14), transparent 52%), var(--surface)',
              }}
            >
              {/* Framing Corner Marks */}
              <div className="pointer-events-none absolute inset-4 border border-dashed opacity-25 hairline-border sm:inset-6" />

              <div className="relative z-10 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] uppercase" style={{ color: 'var(--muted)' }}>
                <span>ASPECT 16:9 · MASTER REEL</span>
                <span className="tabular-nums">TC 00:00:00:00</span>
              </div>

              <div className="relative z-10 my-auto max-w-2xl py-6">
                <p
                  className="font-mono text-[11px] tracking-[0.16em] uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  FILM PENDEK KELULUSAN
                </p>
                <h3
                  className="mt-3 font-serif text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[0.02em]"
                  style={{ color: 'var(--ink)' }}
                >
                  {MEDIA.film.title}
                </h3>
                <p
                  className="mt-4 max-w-xl text-xs leading-relaxed sm:text-sm"
                  style={{ color: 'var(--muted)' }}
                >
                  {MEDIA.film.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
                <span>ARSIP SINEMA · REEL SIAP TAYANG</span>
                <span style={{ color: 'var(--ink)' }}>SMA IT DAARUL RAHMAN 3 · 2026</span>
              </div>
            </div>
          )}
        </div>

        {/* Disciplines Strip */}
        <div className="grid grid-cols-2 divide-x divide-y sm:grid-cols-4 sm:divide-y-0 hairline-border">
          {MEDIA.disciplines.map((disc, i) => (
            <div key={disc} className="px-5 py-4 hairline-border">
              <span className="font-mono text-[10px]" style={{ color: 'var(--accent)' }}>
                0{i + 1}
              </span>
              <p className="mt-1 text-xs font-medium sm:text-sm" style={{ color: 'var(--ink)' }}>
                {disc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Live Streaming & Broadcast Rig Technical Ledger */}
      <div data-media-reveal className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 font-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
          <span>PERANGKAT &amp; EKOSISTEM LIVE STREAMING</span>
          <span>MULTI-PERANGKAT · AUDIO DIGITAL</span>
        </div>

        <div className="grid grid-cols-1 divide-y border-t border-b md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 hairline-border">
          {MEDIA.broadcastGear.map((gear) => (
            <div key={gear.name} className="p-6 hairline-border">
              <p
                className="font-mono text-[10px] tracking-[0.14em] uppercase"
                style={{ color: 'var(--accent)' }}
              >
                {gear.category}
              </p>
              <h3
                className="mt-2 font-serif text-2xl sm:text-3xl"
                style={{ color: 'var(--ink)' }}
              >
                {gear.name}
              </h3>
              <p
                className="mt-2.5 text-xs leading-relaxed sm:text-sm"
                style={{ color: 'var(--muted)' }}
              >
                {gear.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Curatorial Gallery Plates — Ready for Original Photography & Stills */}
      <div data-media-reveal className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-5 font-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
          <span>GALERI KURATORIAL (SLOT KARYA ASLI)</span>
          <span>4 ARSIP BINGKAI</span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {MEDIA.galleryPlates.map((plate, index) => {
            const colSpan =
              index === 0
                ? 'md:col-span-7'
                : index === 1
                  ? 'md:col-span-5'
                  : index === 2
                    ? 'md:col-span-5'
                    : 'md:col-span-7';
            const aspectClass =
              plate.aspect === 'wide'
                ? 'aspect-[16/10]'
                : plate.aspect === 'portrait'
                  ? 'aspect-[4/3]'
                  : 'aspect-[16/10]';

            return (
              <figure
                key={plate.id}
                className={`${colSpan} surface-panel flex flex-col justify-between border hairline-border`}
              >
                <div className={`${aspectClass} relative overflow-hidden border-b hairline-border`}>
                  {plate.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={plate.imageUrl}
                      alt={plate.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col justify-between p-5 sm:p-6">
                      <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
                        <span>{plate.plateNumber}</span>
                        <span style={{ color: 'var(--accent)' }}>{plate.discipline}</span>
                      </div>

                      <div className="my-auto flex items-center justify-center py-6">
                        <div className="flex h-14 w-14 items-center justify-center border border-dashed font-mono text-xs hairline-border" style={{ color: 'var(--muted)' }}>
                          +
                        </div>
                      </div>

                      <div className="font-mono text-[10px] tracking-[0.1em] uppercase" style={{ color: 'var(--muted)' }}>
                        ARSIP VISUAL · KURASI PRIBADI
                      </div>
                    </div>
                  )}
                </div>

                <figcaption className="flex items-baseline justify-between gap-4 p-4 sm:p-5">
                  <div>
                    <p className="font-serif text-xl" style={{ color: 'var(--ink)' }}>
                      {plate.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {plate.caption}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px]" style={{ color: 'var(--accent)' }}>
                    {plate.plateNumber}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
