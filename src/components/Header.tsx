'use client';

import React, { useEffect, useState } from 'react';
import { PROFILE } from '@/data/profile';
import { useSmoothScroll } from './SmoothScrollProvider';

export function Header() {
  const { scrollTo } = useSmoothScroll();
  const [activeId, setActiveId] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = PROFILE.navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(1, Math.max(0, window.scrollY / docHeight)));
      }

      if (sections.length === 0) return;
      const probeY = window.innerHeight * 0.38;

      // Stay neutral while reading Hero (00) above #profil
      if (sections[0].getBoundingClientRect().top > probeY) {
        setActiveId('');
        return;
      }

      // If near bottom of page, activate the last chapter (#kontak)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      let current = '';
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          current = section.id;
          break;
        }
        if (rect.top <= probeY) {
          current = section.id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b hairline-border backdrop-blur-md transition-[background-color,border-color] duration-700"
      style={{ backgroundColor: 'var(--header-bg)' }}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            scrollTo(0);
          }}
          className="group flex items-center gap-3 font-mono text-xs tracking-[0.14em] uppercase"
          style={{ color: 'var(--ink)' }}
        >
          <span
            className="inline-block h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-125"
            style={{ backgroundColor: 'var(--accent)' }}
            aria-hidden="true"
          />
          <span className="font-medium">{PROFILE.shortName}</span>
          <span
            className="hidden border-l pl-3 text-[11px] sm:inline-block hairline-border"
            style={{ color: 'var(--muted)' }}
          >
            JKT · 2026
          </span>
        </a>

        {/* Desktop Minimal Chapter Navigation */}
        <nav aria-label="Navigasi Bab" className="hidden items-center gap-7 lg:flex">
          {PROFILE.navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group inline-flex items-baseline gap-1.5 py-1 text-xs transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
                style={{ color: isActive ? 'var(--ink)' : 'var(--muted)' }}
              >
                <span
                  className="font-mono text-[10px] tabular-nums transition-colors duration-300"
                  style={{ color: isActive ? 'var(--accent)' : 'var(--muted)' }}
                >
                  {item.index}
                </span>
                <span className={isActive ? 'font-medium' : 'group-hover:opacity-80'}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Drawer Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-chapter-nav"
          className="inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase lg:hidden hairline-border"
          style={{ color: 'var(--ink)' }}
        >
          <span>{mobileOpen ? 'Tutup' : 'Indeks'}</span>
          <span aria-hidden="true">{mobileOpen ? '×' : '≡'}</span>
        </button>
      </div>

      {/* Hairline Reading Progress Indicator */}
      <div className="pointer-events-none h-[1.5px] w-full overflow-hidden">
        <div
          className="h-full origin-left will-change-transform"
          style={{
            backgroundColor: 'var(--accent)',
            transform: `scaleX(${progress})`,
          }}
        />
      </div>

      {/* Mobile Editorial Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-chapter-nav"
          aria-label="Navigasi Bab Mobile"
          className="border-t px-5 py-6 lg:hidden hairline-border"
          style={{ backgroundColor: 'var(--bg)' }}
        >
          <ul className="divide-y hairline-border">
            {PROFILE.navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="hairline-border">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-baseline justify-between py-3.5"
                    style={{ color: isActive ? 'var(--ink)' : 'var(--muted)' }}
                  >
                    <span className="font-serif text-2xl">{item.label}</span>
                    <span
                      className="font-mono text-xs tabular-nums"
                      style={{ color: isActive ? 'var(--accent)' : 'var(--muted)' }}
                    >
                      {item.index}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 flex items-center justify-between border-t pt-4 font-mono text-[11px] hairline-border" style={{ color: 'var(--muted)' }}>
            <span>{PROFILE.location}</span>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
              style={{ color: 'var(--ink)' }}
            >
              github.com/{PROFILE.githubUsername} ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
