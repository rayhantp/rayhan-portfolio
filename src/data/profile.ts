export interface NavItem {
  id: string;
  index: string;
  label: string;
  href: string;
}

export interface TelemetryMetric {
  label: string;
  value: string;
  detail: string;
}

export interface FocusPillar {
  index: string;
  title: string;
  summary: string;
  keywords: string[];
}

export interface ProfileData {
  name: string;
  shortName: string;
  graduation: string;
  currentRole: string;
  location: string;
  email: string;
  whatsappDisplay: string;
  whatsappHref: string;
  githubUsername: string;
  githubUrl: string;
  heroKicker: string;
  heroStatementLead: string;
  heroStatementItalic: string;
  heroStatementTail: string;
  heroSubtitle: string;
  profileIntro: string;
  profileBody: string;
  navItems: NavItem[];
  telemetry: TelemetryMetric[];
  focusPillars: FocusPillar[];
}

export const PROFILE: ProfileData = {
  name: 'Rayhan Tshani Putra',
  shortName: 'RAYHAN T. PUTRA',
  graduation: 'Lulusan SMA IT Daarul Rahman 3 · 2026',
  currentRole: 'Sistem & Dukungan Teknis — PT Green Nitro Global & Unit Usaha Keluarga',
  location: 'Jakarta, Indonesia',
  email: 'rayhantshaniputraaa@gmail.com',
  whatsappDisplay: '085710934907',
  whatsappHref: 'https://wa.me/6285710934907',
  githubUsername: 'rayhantp',
  githubUrl: 'https://github.com/rayhantp',
  heroKicker: 'MONOGRAF TEKNIS & VISUAL · JAKARTA, ID',
  heroStatementLead: 'Membangun sistem nyata,',
  heroStatementItalic: 'infrastruktur praktis,',
  heroStatementTail: 'dan produksi visual.',
  heroSubtitle:
    'Lulusan SMA IT Daarul Rahman 3 (2026) yang saat ini menangani sistem serta dukungan teknis di PT Green Nitro Global dan unit usaha keluarga, sembari mempersiapkan langkah ke jenjang kuliah.',
  profileIntro:
    'Saya terbiasa bekerja di titik temu antara perangkat keras di lapangan, perangkat lunak operasional, dan media visual—merancang hal yang benar-benar dipakai setiap hari, bukan sekadar konsep di atas kertas.',
  profileBody:
    'Saat ini saya aktif mendukung infrastruktur teknis dan sistem perparkiran di PT Green Nitro Global sekaligus membangun serta memelihara sistem operasional untuk unit usaha keluarga, mulai dari kasir (POS), asisten AI berbasis VPS, hingga otomasi jaringan—sambil mempersiapkan diri untuk melanjutkan studi perguruan tinggi.',
  navItems: [
    { id: 'profil', index: '01', label: 'Profil', href: '#profil' },
    { id: 'proyek', index: '02', label: 'Pengalaman & Proyek', href: '#proyek' },
    { id: 'kti', index: '03', label: 'KTI & Riset', href: '#kti' },
    { id: 'visual', index: '04', label: 'Visual / Media', href: '#visual' },
    { id: 'kontak', index: '05', label: 'Kontak', href: '#kontak' },
  ],
  telemetry: [
    {
      label: 'OPERASIONAL & JARINGAN',
      value: '9 Router',
      detail: 'Terkoneksi ke asisten AI Hermes Agent di VPS via WhatsApp',
    },
    {
      label: 'INFRASTRUKTUR LAPANGAN',
      value: '88 Titik',
      detail: 'Topologi CCTV, power injection, dan terminasi LAN T568B',
    },
    {
      label: 'SISTEM KASIR & SERVER',
      value: 'POS + NAS',
      detail: 'Ekosistem web/Android/desktop & perakitan ulang perangkat bekas',
    },
    {
      label: 'SIARAN & SINEMATOGRAFI',
      value: 'vMix / NDI',
      detail: 'Multi-perangkat dengan OBS, Midas MR18 & film AINAL MAFAR',
    },
  ],
  focusPillars: [
    {
      index: '01',
      title: 'Sistem Kasir (POS) & Operasional Bisnis',
      summary:
        'Merancang sistem kasir multi-platform untuk outlet minuman rempah dan layanan reflexology—dari REST API, dashboard pemilik, integrasi sensor biometrik USB, hingga rekap closing harian.',
      keywords: ['POS Web & Android', 'Electron Desktop', 'PHP / MySQL', 'TypeScript'],
    },
    {
      index: '02',
      title: 'Asisten AI di VPS, Multi-Router & WhatsApp',
      summary:
        'Mengoperasikan Hermes Agent di VPS yang terhubung ke multi-provider dan 9 router, sehingga pemantauan serta kendali operasional bisa dijalankan langsung lewat WhatsApp.',
      keywords: ['Hermes Agent', 'VPS Linux', 'Multi-Provider', '9 Router', 'WhatsApp'],
    },
    {
      index: '03',
      title: 'Rekayasa Ulang Perangkat Bekas & Infrastruktur',
      summary:
        'Mengubah keterbatasan perangkat keras menjadi solusi produksi: PC bekas sekolah menjadi NAS mandiri, STB bekas menjadi Linux Chromium kiosk, hingga topologi 88 titik CCTV.',
      keywords: ['NAS PC Bekas', 'STB Linux Kiosk', '88 CCTV', 'T568B'],
    },
    {
      index: '04',
      title: 'Produksi Visual, Fotografi & Live Streaming',
      summary:
        'Menangani videografi, fotografi, penyuntingan, serta operasional live streaming multi-perangkat dan tata suara digital untuk dokumentasi maupun karya film pendek.',
      keywords: ['vMix 28', 'OBS Studio', 'NDI', 'Midas MR18', 'Editing'],
    },
  ],
};
