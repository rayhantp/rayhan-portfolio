'use client';

import React, { useId } from 'react';
import type { DiagramVariant } from '@/data/projects';

interface ProjectDiagramProps {
  variant: DiagramVariant;
  indexLabel: string;
  title: string;
}

export function ProjectDiagram({ variant, indexLabel, title }: ProjectDiagramProps) {
  const rawId = useId();
  const patternId = `grid-${variant}-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <div
      className="surface-panel relative overflow-hidden border hairline-border"
      role="img"
      aria-label={`Diagram arsitektur ${title}`}
    >
      {/* Top Plate Metadata Bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b px-4 py-2.5 font-mono text-[10px] tracking-[0.14em] uppercase hairline-border"
        style={{ color: 'var(--muted)' }}
      >
        <span>SKEMA ARSITEKTUR · FIG. {indexLabel}</span>
        <span style={{ color: 'var(--accent)' }}>{variant.toUpperCase()}</span>
      </div>

      {/* Architectural SVG Plate */}
      <div className="p-3 sm:p-5">
        <svg
          key={variant}
          viewBox="0 0 520 330"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle architectural blueprint grid */}
          <defs>
            <pattern
              id={patternId}
              width="26"
              height="26"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 26 0 L 0 0 0 26"
                stroke="var(--hairline)"
                strokeWidth="0.6"
                opacity="0.55"
              />
            </pattern>
          </defs>
          <rect width="520" height="330" fill={`url(#${patternId})`} />

          {variant === 'nitro-hermes' && (
            <g>
              {/* WhatsApp Operator */}
              <rect x="26" y="122" width="114" height="82" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="38" y="146" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1.2">CONTROL</text>
              <text x="38" y="168" fill="var(--ink)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="600">WhatsApp</text>
              <text x="38" y="186" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">Command &amp; Alert</text>

              {/* Conduit WA -> VPS */}
              <line x1="140" y1="163" x2="188" y2="163" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 3" />
              <circle cx="188" cy="163" r="3" fill="var(--accent)" />

              {/* VPS Hermes Agent Core */}
              <rect x="192" y="96" width="144" height="134" stroke="var(--accent)" strokeWidth="1.5" fill="var(--bg)" />
              <text x="206" y="120" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1.2">VPS CORE</text>
              <text x="206" y="144" fill="var(--ink)" fontSize="15" fontFamily="var(--font-serif)">Hermes Agent</text>
              <line x1="206" y1="156" x2="322" y2="156" stroke="var(--hairline)" strokeWidth="1" />
              <text x="206" y="176" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">• Multi-Provider AI</text>
              <text x="206" y="194" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">• Router Telemetry</text>
              <text x="206" y="212" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">• Ops Automation</text>

              {/* Fan-out lines to 9 Routers + Ops */}
              <path d="M 336 130 H 374 V 74 H 390" stroke="var(--ink)" strokeWidth="1.15" />
              <path d="M 336 163 H 390" stroke="var(--accent)" strokeWidth="1.35" />
              <path d="M 336 196 H 374 V 252 H 390" stroke="var(--ink)" strokeWidth="1.15" />

              {/* 9 Router Mesh Box */}
              <rect x="390" y="34" width="106" height="82" stroke="var(--ink)" strokeWidth="1.2" fill="var(--bg)" />
              <text x="402" y="54" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">9 ROUTER</text>
              {[0, 1, 2].map((row) =>
                [0, 1, 2].map((col) => (
                  <rect
                    key={`${row}-${col}`}
                    x={402 + col * 28}
                    y={64 + row * 14}
                    width="20"
                    height="9"
                    stroke="var(--ink)"
                    strokeWidth="0.9"
                    fill={row === 0 && col === 0 ? 'var(--accent)' : 'none'}
                  />
                )),
              )}

              {/* Parking Systems */}
              <rect x="390" y="132" width="106" height="62" stroke="var(--ink)" strokeWidth="1.2" fill="var(--bg)" />
              <text x="402" y="153" fill="var(--muted)" fontSize="8.5" fontFamily="var(--font-mono)">GREEN NITRO</text>
              <text x="402" y="173" fill="var(--ink)" fontSize="11.5" fontFamily="var(--font-sans)" fontWeight="500">Perparkiran</text>

              {/* Family POS */}
              <rect x="390" y="212" width="106" height="76" stroke="var(--ink)" strokeWidth="1.2" fill="var(--bg)" />
              <text x="402" y="232" fill="var(--muted)" fontSize="8.5" fontFamily="var(--font-mono)">UNIT USAHA</text>
              <text x="402" y="252" fill="var(--ink)" fontSize="11" fontFamily="var(--font-sans)" fontWeight="500">POS Dawa &amp;</text>
              <text x="402" y="268" fill="var(--ink)" fontSize="11" fontFamily="var(--font-sans)" fontWeight="500">Reflexology</text>
            </g>
          )}

          {variant === 'healing-x-dawa' && (
            <g>
              {/* Android Kasir */}
              <rect x="28" y="48" width="134" height="92" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="42" y="70" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">CLIENT 01</text>
              <text x="42" y="92" fill="var(--ink)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="600">Kasir Android</text>
              <text x="42" y="110" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">Capacitor + React</text>
              <text x="42" y="126" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Tunai / QRIS / Closing</text>

              {/* Web Owner */}
              <rect x="28" y="182" width="134" height="92" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="42" y="204" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">CLIENT 02</text>
              <text x="42" y="226" fill="var(--ink)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="600">Web Owner</text>
              <text x="42" y="244" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">Vite + TypeScript</text>
              <text x="42" y="260" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Omzet · Menu · Audit</text>

              {/* Routing into API */}
              <path d="M 162 94 H 196 V 148 H 214" stroke="var(--accent)" strokeWidth="1.35" />
              <path d="M 162 228 H 196 V 178 H 214" stroke="var(--ink)" strokeWidth="1.2" />

              {/* PHP REST API */}
              <rect x="214" y="106" width="132" height="114" stroke="var(--accent)" strokeWidth="1.5" fill="var(--bg)" />
              <text x="228" y="128" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">BACKEND API</text>
              <text x="228" y="152" fill="var(--ink)" fontSize="15" fontFamily="var(--font-serif)">PHP REST Core</text>
              <text x="228" y="174" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">JWT Auth · CORS</text>
              <text x="228" y="192" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">WA Closing Format</text>
              <text x="228" y="208" fill="var(--muted)" fontSize="8.5" fontFamily="var(--font-mono)">[Domain Masked]</text>

              {/* API -> MySQL & WA */}
              <line x1="346" y1="144" x2="390" y2="108" stroke="var(--ink)" strokeWidth="1.2" />
              <line x1="346" y1="184" x2="390" y2="218" stroke="var(--accent)" strokeWidth="1.3" strokeDasharray="4 3" />

              {/* MySQL */}
              <rect x="390" y="64" width="104" height="84" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="402" y="86" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">DATABASE</text>
              <text x="402" y="108" fill="var(--ink)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="600">MySQL</text>
              <text x="402" y="128" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Orders &amp; Closings</text>

              {/* WhatsApp Report */}
              <rect x="390" y="182" width="104" height="80" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="402" y="204" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">REPORTING</text>
              <text x="402" y="226" fill="var(--ink)" fontSize="12" fontFamily="var(--font-sans)" fontWeight="600">Rekap WA</text>
              <text x="402" y="244" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Closing Harian</text>
            </g>
          )}

          {variant === 'fingerprint-pos' && (
            <g>
              {/* USB Hardware Sensor */}
              <rect x="26" y="114" width="114" height="102" stroke="var(--accent)" strokeWidth="1.5" fill="var(--bg)" />
              <text x="38" y="136" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">HARDWARE</text>
              <text x="38" y="158" fill="var(--ink)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="600">ChipSailing</text>
              <text x="38" y="176" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">USB Sensor</text>
              <text x="38" y="194" fill="var(--muted)" fontSize="8.5" fontFamily="var(--font-mono)">VID_2541 PID_0236</text>

              <line x1="140" y1="165" x2="174" y2="165" stroke="var(--accent)" strokeWidth="1.5" />

              {/* WinBio + Python Engine */}
              <rect x="174" y="84" width="166" height="162" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="188" y="106" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">BIOMETRIC BRIDGE</text>
              <text x="188" y="130" fill="var(--ink)" fontSize="14.5" fontFamily="var(--font-serif)">WinBio + Python</text>
              <line x1="188" y1="142" x2="326" y2="142" stroke="var(--hairline)" strokeWidth="1" />
              <text x="188" y="164" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">• WBDI Session Guard</text>
              <text x="188" y="184" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">• Unbuffered JSON CLI</text>
              <text x="188" y="204" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">• SHA-256 / PIN / TOTP</text>
              <text x="188" y="224" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">• Mode Bebas &amp; Enroll</text>

              <path d="M 340 132 H 380" stroke="var(--accent)" strokeWidth="1.35" strokeDasharray="4 3" />
              <path d="M 340 198 H 380" stroke="var(--ink)" strokeWidth="1.2" />

              {/* Electron POS Desktop */}
              <rect x="380" y="76" width="114" height="84" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="392" y="98" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">IPC CONTEXT</text>
              <text x="392" y="120" fill="var(--ink)" fontSize="12.5" fontFamily="var(--font-sans)" fontWeight="600">Electron POS</text>
              <text x="392" y="140" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">env: POS_URL</text>

              {/* FingerCode Utility */}
              <rect x="380" y="178" width="118" height="76" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="392" y="200" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">STANDALONE</text>
              <text x="392" y="222" fill="var(--ink)" fontSize="12.5" fontFamily="var(--font-sans)" fontWeight="600">FingerCode</text>
              <text x="392" y="240" fill="var(--muted)" fontSize="8.5" fontFamily="var(--font-mono)">GUI · CLI · TOTP</text>
            </g>
          )}

          {variant === 'nas-server' && (
            <g>
              {/* Repurposed School PC */}
              <rect x="32" y="96" width="150" height="138" stroke="var(--accent)" strokeWidth="1.5" fill="var(--bg)" />
              <text x="46" y="118" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">REFURBISHED NODE</text>
              <text x="46" y="142" fill="var(--ink)" fontSize="15" fontFamily="var(--font-serif)">PC Bekas → NAS</text>
              <line x1="46" y1="154" x2="168" y2="154" stroke="var(--hairline)" strokeWidth="1" />
              <text x="46" y="176" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">• Linux File Server</text>
              <text x="46" y="196" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">• Storage Pool</text>
              <text x="46" y="216" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">• Low-Cost Hardware</text>

              {/* LAN & Domain Layer */}
              <line x1="182" y1="165" x2="232" y2="165" stroke="var(--accent)" strokeWidth="1.5" />
              <rect x="232" y="118" width="112" height="94" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="246" y="140" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">ROUTING</text>
              <text x="246" y="162" fill="var(--ink)" fontSize="12.5" fontFamily="var(--font-sans)" fontWeight="600">DNS &amp; Host</text>
              <text x="246" y="182" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Domain · Server</text>
              <text x="246" y="198" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Local &amp; Web Flow</text>

              {/* Clients */}
              <path d="M 344 140 H 386 V 92 H 404" stroke="var(--ink)" strokeWidth="1.2" />
              <path d="M 344 190 H 386 V 236 H 404" stroke="var(--ink)" strokeWidth="1.2" />

              <rect x="404" y="60" width="90" height="66" stroke="var(--ink)" strokeWidth="1.2" fill="var(--bg)" />
              <text x="416" y="86" fill="var(--ink)" fontSize="11.5" fontFamily="var(--font-sans)" fontWeight="600">LAN Users</text>
              <text x="416" y="106" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Shared Data</text>

              <rect x="404" y="204" width="90" height="66" stroke="var(--ink)" strokeWidth="1.2" fill="var(--bg)" />
              <text x="416" y="230" fill="var(--ink)" fontSize="11.5" fontFamily="var(--font-sans)" fontWeight="600">Web Apps</text>
              <text x="416" y="250" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Self-Hosted</text>
            </g>
          )}

          {variant === 'cctv-88' && (
            <g>
              {/* 88 Camera Array Matrix */}
              <rect x="24" y="42" width="166" height="246" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="38" y="66" fill="var(--accent)" fontSize="9.5" fontFamily="var(--font-mono)">ARRAY · 88 TITIK KAMERA</text>
              {Array.from({ length: 8 }).map((_, row) =>
                Array.from({ length: 11 }).map((__, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={42 + col * 13}
                    cy={88 + row * 22}
                    r="2.6"
                    fill={(row + col) % 7 === 0 ? 'var(--accent)' : 'var(--ink)'}
                    opacity={(row + col) % 7 === 0 ? 1 : 0.72}
                  />
                )),
              )}
              <text x="38" y="274" fill="var(--muted)" fontSize="8.5" fontFamily="var(--font-mono)">8 × 11 = 88 NODE TERPETA</text>

              {/* T568B + Power Injection */}
              <line x1="190" y1="125" x2="234" y2="125" stroke="var(--accent)" strokeWidth="1.5" />
              <line x1="190" y1="205" x2="234" y2="205" stroke="var(--ink)" strokeWidth="1.25" strokeDasharray="4 3" />

              <rect x="234" y="76" width="128" height="178" stroke="var(--accent)" strokeWidth="1.4" fill="var(--bg)" />
              <text x="248" y="98" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">DISTRIBUSI</text>
              <text x="248" y="122" fill="var(--ink)" fontSize="14" fontFamily="var(--font-serif)">T568B + Power</text>
              <line x1="248" y1="134" x2="348" y2="134" stroke="var(--hairline)" strokeWidth="1" />
              <text x="248" y="156" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">• Terminasi LAN</text>
              <text x="248" y="176" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">• Power Injection</text>
              <text x="248" y="196" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">• Switch Zoning</text>
              <text x="248" y="216" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">• Jalur Terukur</text>

              {/* To NVR Core */}
              <line x1="362" y1="165" x2="394" y2="165" stroke="var(--ink)" strokeWidth="1.4" />
              <rect x="394" y="112" width="102" height="106" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="406" y="136" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">PUSAT</text>
              <text x="406" y="160" fill="var(--ink)" fontSize="13.5" fontFamily="var(--font-sans)" fontWeight="600">NVR &amp;</text>
              <text x="406" y="178" fill="var(--ink)" fontSize="13.5" fontFamily="var(--font-sans)" fontWeight="600">Monitor</text>
              <text x="406" y="200" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">24/7 Live View</text>
            </g>
          )}

          {variant === 'masjid-kiosk' && (
            <g>
              {/* STB Hardware */}
              <rect x="26" y="116" width="116" height="98" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="40" y="138" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">HARDWARE</text>
              <text x="40" y="162" fill="var(--ink)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="600">STB Bekas</text>
              <text x="40" y="182" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">ARM Linux OS</text>
              <text x="40" y="198" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Auto-Boot Service</text>

              <line x1="142" y1="165" x2="178" y2="165" stroke="var(--accent)" strokeWidth="1.5" />

              {/* Chromium Kiosk Layer */}
              <rect x="178" y="116" width="124" height="98" stroke="var(--accent)" strokeWidth="1.4" fill="var(--bg)" />
              <text x="190" y="138" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">RUNTIME</text>
              <text x="190" y="162" fill="var(--ink)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="600">Chromium</text>
              <text x="190" y="182" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">--kiosk Fullscreen</text>
              <text x="190" y="198" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">Zero Manual Input</text>

              <line x1="302" y1="165" x2="338" y2="165" stroke="var(--ink)" strokeWidth="1.35" />

              {/* TV Display Preview */}
              <rect x="338" y="78" width="156" height="174" stroke="var(--ink)" strokeWidth="1.5" fill="var(--bg)" />
              <rect x="348" y="88" width="136" height="128" stroke="var(--hairline)" strokeWidth="1" fill="var(--surface-elevated)" />
              <text x="416" y="114" textAnchor="middle" fill="var(--muted)" fontSize="8.5" fontFamily="var(--font-mono)" letterSpacing="1.2">JADWAL SHOLAT</text>
              <text x="416" y="156" textAnchor="middle" fill="var(--ink)" fontSize="28" fontFamily="var(--font-serif)">18:04</text>
              <line x1="364" y1="170" x2="468" y2="170" stroke="var(--accent)" strokeWidth="1.2" />
              <text x="416" y="190" textAnchor="middle" fill="var(--accent)" fontSize="8.5" fontFamily="var(--font-mono)">MAGHRIB · KIOSK LIVE</text>
              <text x="416" y="238" textAnchor="middle" fill="var(--muted)" fontSize="8.5" fontFamily="var(--font-mono)">HDMI DISPLAY OUTPUT</text>
            </g>
          )}

          {variant === 'hostinger-web' && (
            <g>
              <rect x="44" y="116" width="126" height="96" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
              <text x="58" y="140" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">CLIENT</text>
              <text x="58" y="166" fill="var(--ink)" fontSize="13" fontFamily="var(--font-sans)" fontWeight="600">Web Browser</text>
              <line x1="170" y1="164" x2="226" y2="164" stroke="var(--accent)" strokeWidth="1.5" />
              <rect x="226" y="100" width="248" height="128" stroke="var(--accent)" strokeWidth="1.4" fill="var(--bg)" />
              <text x="242" y="126" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">HOSTING STACK</text>
              <text x="242" y="156" fill="var(--ink)" fontSize="15" fontFamily="var(--font-serif)">Production Web App</text>
              <text x="242" y="182" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">HTTPS · Audited Public Source</text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
