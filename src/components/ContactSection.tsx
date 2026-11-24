'use client';

import React, { useState } from 'react';
import { PROFILE } from '@/data/profile';
import { useSmoothScroll } from './SmoothScrollProvider';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { scrollTo } = useSmoothScroll();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback if clipboard API is unavailable
      setCopied(false);
    }
  };

  return (
    <footer
      id="kontak"
      className="mx-auto max-w-[1320px] px-5 pt-20 pb-14 sm:px-8 lg:px-12 lg:pt-28 lg:pb-16"
    >
      {/* Chapter Divider */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-5 font-mono text-[11px] tracking-[0.14em] uppercase hairline-border">
        <span style={{ color: 'var(--accent)' }}>05 / KONTAK &amp; KOLOFON</span>
        <span style={{ color: 'var(--muted)' }}>{PROFILE.location}</span>
      </div>

      {/* Main Closing Editorial Block */}
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2
            className="font-serif text-[clamp(2.4rem,5.4vw,4.75rem)] leading-[1.02] tracking-[-0.02em]"
            style={{ color: 'var(--ink)' }}
          >
            Terbuka untuk diskusi sistem, kolaborasi teknis, maupun produksi visual.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-[1.75] sm:text-base" style={{ color: 'var(--muted)' }}>
            Berbasis di {PROFILE.location}. Hubungi langsung melalui email atau WhatsApp untuk
            kebutuhan pengembangan sistem, dukungan infrastruktur, maupun kolaborasi kreatif.
          </p>
        </div>

        <div className="lg:col-span-5 lg:text-right">
          <button
            type="button"
            onClick={() => scrollTo(0)}
            className="inline-flex items-center gap-2 border px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 hairline-border"
            style={{ color: 'var(--muted)' }}
          >
            <span>Kembali ke Atas</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>

      {/* Hairline Contact Ledger */}
      <div className="mt-14 grid grid-cols-1 divide-y border-t border-b md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 hairline-border">
        <div className="p-6 hairline-border">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
            LOKASI
          </p>
          <p className="mt-2 font-serif text-2xl" style={{ color: 'var(--ink)' }}>
            {PROFILE.location}
          </p>
          <p className="mt-1 font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
            WIB (UTC+7)
          </p>
        </div>

        <div className="p-6 hairline-border">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
            EMAIL
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="editorial-link mt-2 break-all font-mono text-xs sm:text-[13px]"
            style={{ color: 'var(--ink)' }}
          >
            {PROFILE.email}
          </a>
          <div className="mt-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="border px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] uppercase transition-colors duration-200 hairline-border"
              style={{
                color: copied ? 'var(--bg)' : 'var(--muted)',
                backgroundColor: copied ? 'var(--accent)' : 'transparent',
                borderColor: copied ? 'var(--accent)' : 'var(--hairline)',
              }}
            >
              {copied ? 'Email Tersalin ✓' : 'Salin Alamat Email'}
            </button>
          </div>
        </div>

        <div className="p-6 hairline-border">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
            WHATSAPP
          </p>
          <a
            href={PROFILE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link mt-2 font-serif text-2xl tabular-nums"
            style={{ color: 'var(--ink)' }}
          >
            {PROFILE.whatsappDisplay}
            <span className="font-mono text-xs" aria-hidden="true">↗</span>
          </a>
          <p className="mt-1 font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
            Pesan langsung
          </p>
        </div>

        <div className="p-6 hairline-border">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
            GITHUB
          </p>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link mt-2 font-serif text-2xl"
            style={{ color: 'var(--ink)' }}
          >
            @{PROFILE.githubUsername}
            <span className="font-mono text-xs" aria-hidden="true">↗</span>
          </a>
          <p className="mt-1 font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
            Repositori publik ter-audit
          </p>
        </div>
      </div>

      {/* Colophon */}
      <div
        className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px]"
        style={{ color: 'var(--muted)' }}
      >
        <span>© 2026 {PROFILE.name}</span>
        <span>INSTRUMENT SERIF · PLUS JAKARTA SANS · JETBRAINS MONO</span>
        <span>RAYHANTP.VERCEL.APP</span>
      </div>
    </footer>
  );
}
