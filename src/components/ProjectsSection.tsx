'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '@/data/projects';
import { ProjectDiagram } from './ProjectDiagram';
import { useSmoothScroll } from './SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { reducedMotion, scrollTo } = useSmoothScroll();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Track active project cleanly on desktop viewports
      mm.add('(min-width: 1024px)', () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-project-card]');
        items.forEach((item, idx) => {
          ScrollTrigger.create({
            trigger: item,
            start: 'top 52%',
            end: 'bottom 48%',
            onEnter: () => setActiveIndex(idx),
            onEnterBack: () => setActiveIndex(idx),
          });
        });
      });

      // Gentle entrance motion when reduced motion is not requested
      const prefersReduced =
        reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReduced) {
        const cards = gsap.utils.toArray<HTMLElement>('[data-project-card]');
        cards.forEach((card) => {
          gsap.from(card, {
            y: 28,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: card,
              start: 'top 84%',
              once: true,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const activeProject = PROJECTS[activeIndex] ?? PROJECTS[0];

  return (
    <section
      id="proyek"
      ref={sectionRef}
      className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Chapter Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-5 font-mono text-[11px] tracking-[0.14em] uppercase hairline-border">
        <span style={{ color: 'var(--accent)' }}>02 / PENGALAMAN KERJA &amp; PROYEK TEKNIS</span>
        <span style={{ color: 'var(--muted)' }}>
          {String(PROJECTS.length).padStart(2, '0')} ARSIP NYATA · KODE PUBLIK TER-AUDIT
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2
            className="font-serif text-[clamp(2.25rem,4.8vw,4rem)] leading-[1.05] tracking-[-0.02em]"
            style={{ color: 'var(--ink)' }}
          >
            Sistem yang dibangun untuk bekerja di lapangan.
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-sm leading-[1.7] sm:text-base" style={{ color: 'var(--muted)' }}>
            Setiap karya di bawah berasal dari kebutuhan operasional nyata—mulai dari perparkiran,
            sistem kasir, integrasi biometrik USB, hingga perakitan ulang perangkat keras. Seluruh
            repositori publik telah diaudit dan domain produksi disamarkan.
          </p>
        </div>
      </div>

      {/* Pinned Split Storytelling Layout (Desktop Sticky Plate + Scrolling Essays) */}
      <div className="mt-14 grid grid-cols-1 gap-12 border-t pt-10 lg:mt-16 lg:grid-cols-12 lg:gap-12 hairline-border">
        {/* Left Column — Sticky Architectural Plate (Desktop Only) */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-24 space-y-5">
            <div className="flex items-baseline justify-between">
              <span
                className="font-mono text-xs tracking-[0.14em] uppercase tabular-nums"
                style={{ color: 'var(--accent)' }}
              >
                ARSIP {activeProject.index} / {String(PROJECTS.length).padStart(2, '0')}
              </span>
              <span
                className="font-mono text-[11px] tracking-[0.1em] uppercase"
                style={{ color: 'var(--muted)' }}
              >
                {activeProject.period}
              </span>
            </div>

            <ProjectDiagram
              variant={activeProject.diagram}
              indexLabel={activeProject.index}
              title={activeProject.title}
            />

            <div className="border-t pt-4 hairline-border">
              <p className="font-serif text-xl leading-snug" style={{ color: 'var(--ink)' }}>
                {activeProject.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                {activeProject.context}
              </p>
            </div>

            {/* Quick Index Jump Strip */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1" aria-label="Indeks Cepat Proyek">
              {PROJECTS.map((proj, idx) => {
                const isCurrent = idx === activeIndex;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => {
                      setActiveIndex(idx);
                      scrollTo(`#project-${proj.id}`);
                    }}
                    className="border px-2.5 py-1 font-mono text-[11px] tabular-nums transition-colors duration-300 hairline-border"
                    style={{
                      backgroundColor: isCurrent ? 'var(--ink)' : 'transparent',
                      color: isCurrent ? 'var(--bg)' : 'var(--muted)',
                      borderColor: isCurrent ? 'var(--ink)' : 'var(--hairline)',
                    }}
                  >
                    {proj.index}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column — Project Chapters */}
        <div className="divide-y lg:col-span-7 hairline-border">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              data-project-card
              onMouseEnter={() => setActiveIndex(idx)}
              className="py-12 first:pt-0 last:pb-0 lg:py-16 hairline-border"
            >
              {/* Meta Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tracking-[0.12em] uppercase">
                <span style={{ color: 'var(--accent)' }}>
                  {project.index} · {project.category}
                </span>
                <span style={{ color: 'var(--muted)' }}>{project.period}</span>
              </div>

              {/* Title & Context */}
              <h3
                className="mt-4 font-serif text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.1] tracking-[-0.015em]"
                style={{ color: 'var(--ink)' }}
              >
                {project.title}
              </h3>
              <p
                className="mt-2 font-mono text-xs tracking-[0.04em]"
                style={{ color: 'var(--muted)' }}
              >
                {project.context}
              </p>

              {/* Inline Diagram on Mobile / Tablet (< lg) */}
              <div className="mt-6 lg:hidden">
                <ProjectDiagram
                  variant={project.diagram}
                  indexLabel={project.index}
                  title={project.title}
                />
              </div>

              {/* Narrative Summary */}
              <p
                className="mt-6 text-sm leading-[1.78] sm:text-[15.5px]"
                style={{ color: 'var(--ink)' }}
              >
                {project.summary}
              </p>

              {/* Structured Engineering Highlights */}
              <ul className="mt-6 space-y-3 border-l pl-5 hairline-border">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-[1.68]"
                    style={{ color: 'var(--muted)' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stack Tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border px-2.5 py-1 font-mono text-[10.5px] tracking-[0.05em] hairline-border"
                    style={{ color: 'var(--muted)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Action & Security Disclosure Note */}
              {(project.githubUrl || project.securityNote) && (
                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t pt-5 hairline-border">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 border px-4 py-2 font-mono text-xs tracking-[0.06em] transition-colors duration-300"
                      style={{
                        borderColor: 'var(--ink)',
                        color: 'var(--ink)',
                      }}
                    >
                      <span>GitHub · {project.githubLabel}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span
                      className="font-mono text-[11px] tracking-[0.08em] uppercase"
                      style={{ color: 'var(--muted)' }}
                    >
                      INFRASTRUKTUR &amp; OPERASIONAL LAPANGAN
                    </span>
                  )}

                  {project.securityNote && (
                    <p
                      className="max-w-md font-mono text-[10.5px] leading-relaxed"
                      style={{ color: 'var(--muted)' }}
                    >
                      {project.securityNote}
                    </p>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
