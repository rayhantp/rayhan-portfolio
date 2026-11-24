# Portofolio Pribadi — Rayhan Tshani Putra

Website portofolio editorial pribadi milik **Rayhan Tshani Putra** — dibangun dengan Next.js (App Router), TypeScript, Tailwind CSS, Lenis smooth scroll, dan GSAP ScrollTrigger.

- **Live:** https://rayhantp.vercel.app
- **GitHub:** https://github.com/rayhantp

## Karakteristik Utama
- **Desain Editorial Monograf:** Palet warm paper (`#F5F4F0`), charcoal ink (`#141414`), aksen rust-terracotta (`#B84A27`), ruang kosong luas, garis rambut presisi (`1px`), dan transisi suasana *darkroom* (`#111110`) pada bab Karya Media & Visual.
- **Motion Terukur & Aksesibel:** Lenis smooth scroll tersinkronisasi dengan GSAP ScrollTrigger (*pinned storytelling* dengan diagram arsitektur SVG kustom per proyek), serta mematuhi `prefers-reduced-motion`.
- **Konten Modular:** Seluruh data profil, proyek, KTI 2026, serta slot video reel & galeri visual dikelola terpisah di `src/data/` (`profile.ts`, `projects.ts`, `research.ts`, `media.ts`).

## Pengembangan Lokal

```bash
npm install
npm run dev
```

## Menambahkan Media Asli (Film "AINAL MAFAR" & Galeri)
1. Letakkan gambar/foto asli di `public/media/`.
2. Perbarui `videoUrl` dan `imageUrl` pada `src/data/media.ts`.
3. Jalankan `npm run verify:data && npm run build`.
