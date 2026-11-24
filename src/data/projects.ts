export type DiagramVariant =
  | 'nitro-hermes'
  | 'healing-x-dawa'
  | 'fingerprint-pos'
  | 'nas-server'
  | 'cctv-88'
  | 'masjid-kiosk'
  | 'hostinger-web';

export interface ProjectItem {
  id: string;
  index: string;
  period: string;
  category: string;
  title: string;
  context: string;
  summary: string;
  highlights: string[];
  stack: string[];
  diagram: DiagramVariant;
  githubUrl?: string;
  githubLabel?: string;
  securityNote?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'green-nitro-hermes',
    index: '01',
    period: '2026 — Sekarang',
    category: 'PENGALAMAN KERJA · SISTEM & AI VPS',
    title: 'PT Green Nitro Global & Unit Usaha Keluarga',
    context: 'Dukungan Teknis Perparkiran, POS Usaha & Hermes Agent VPS',
    summary:
      'Menangani dukungan teknis serta kelancaran sistem perparkiran di PT Green Nitro Global sambil membangun infrastruktur digital unit usaha keluarga—mencakup sistem kasir minuman rempah Dawa (Galaxy), sistem kasir reflexology, dan asisten AI Hermes Agent di VPS.',
    highlights: [
      'Dukungan teknis lapangan dan pemeliharaan sistem operasional perparkiran PT Green Nitro Global.',
      'Pengembangan sistem kasir minuman rempah Dawa (Galaxy) dan sistem kasir layanan reflexology.',
      'Implementasi Hermes Agent di VPS yang terhubung ke multi-provider serta 9 router, dapat dikendalikan secara langsung lewat WhatsApp.',
    ],
    stack: ['Sistem Perparkiran', 'Hermes Agent', 'VPS Linux', 'Multi-Provider', '9 Router', 'WhatsApp Control'],
    diagram: 'nitro-hermes',
    securityNote: 'Endpoint operasional & kredensial produksi disamarkan demi keamanan sistem aktif.',
  },
  {
    id: 'healing-x-dawa',
    index: '02',
    period: '2026',
    category: 'REPOSITORI PUBLIK · POS MULTI-PLATFORM',
    title: 'HEALING X DAWA — Ekosistem Kasir & Dashboard Pemilik',
    context: 'Sistem Kasir Minuman Rempah Dawa (Web Owner, PHP API & Android APK)',
    summary:
      'Ekosistem Point of Sale penuh yang dirancang ringan untuk hosting standar maupun penggunaan harian di gerai: menggabungkan Backend REST API PHP/MySQL, dashboard web pemilik berbasis React + TypeScript, serta aplikasi kasir Android via Capacitor.',
    highlights: [
      'Transaksi cepat kasir Android dengan pencatatan pembayaran tunai/QRIS, pengeluaran harian, dan format rekap closing otomatis ke WhatsApp.',
      'Web Owner untuk pemantauan omzet harian, manajemen menu/harga, riwayat closing, dan audit transaksi void.',
      'Repositori publik telah melalui audit keamanan ketat—file konfigurasi database, domain produksi, dan artefak build dikecualikan.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Capacitor Android', 'PHP REST API', 'MySQL'],
    diagram: 'healing-x-dawa',
    githubUrl: 'https://github.com/rayhantp/healing-x-dawa',
    githubLabel: 'rayhantp/healing-x-dawa',
    securityNote: 'Domain server & konfigurasi database produksi disamarkan pada repositori publik.',
  },
  {
    id: 'healing-pos-biometric',
    index: '03',
    period: '2026',
    category: 'REPOSITORI PUBLIK · DESKTOP & BIOMETRIK USB',
    title: 'Healing POS Desktop & FingerCode (WinBio USB)',
    context: 'Aplikasi Kasir Electron Reflexology & Utilitas Biometrik Sidik Jari',
    summary:
      'Integrasi penuh aplikasi desktop Electron untuk sistem kasir reflexology dengan sensor sidik jari USB ChipSailing (VID_2541&PID_0236) melalui Windows Biometric Framework (WinBio), dilengkapi utilitas mandiri FingerCode untuk konversi sidik jari ke PIN, password, dan TOTP.',
    highlights: [
      'Bridge IPC real-time antara renderer Electron dan subprocess Python unbuffered JSON tanpa kebocoran sesi sensor (anti Device Busy).',
      'Pendaftaran jari langsung di dalam aplikasi maupun mode bebas tanpa mewajibkan pendaftaran akun Windows Hello.',
      'Konfigurasi URL cabang sepenuhnya berbasis variabel lingkungan (POS_URL) agar domain produksi tetap terlindungi.',
    ],
    stack: ['Electron', 'Node.js IPC', 'Python', 'Windows Biometric Framework', 'SHA-256 / TOTP'],
    diagram: 'fingerprint-pos',
    githubUrl: 'https://github.com/rayhantp/electron-healing-pos',
    githubLabel: 'rayhantp/electron-healing-pos',
    securityNote: 'Lihat juga repositori utilitas mandiri: github.com/rayhantp/fingerprint-to-code.',
  },
  {
    id: 'fingerprint-to-code',
    index: '04',
    period: '2026',
    category: 'REPOSITORI PUBLIK · UTILITAS HARDWARE',
    title: 'FingerCode — Konverter Sidik Jari USB ke Kode & TOTP',
    context: 'Aplikasi GUI & CLI Windows untuk Sensor ChipSailing WBDI',
    summary:
      'Perangkat lunak desktop dan baris perintah yang mengubah sentuhan fisik sensor sidik jari USB menjadi kode deterministik—mulai dari PIN 6/8/12 digit, blok alfanumerik, kata sandi kuat, hingga kode dinamis TOTP 30 detik.',
    highlights: [
      'Mendukung mode GUI interaktif dan mode CLI otomatis (salin ke clipboard atau ketik langsung ke kursor aktif).',
      'Pendaftaran jari lokal langsung di dalam aplikasi dengan penyimpanan konfigurasi terisolasi di direktori pengguna.',
      'Dirancang untuk menjembatani sensor biometrik ekonomis ke alur autentikasi operasional harian.',
    ],
    stack: ['Python', 'WinBio / WBDI', 'Tkinter GUI', 'CLI Automation', 'TOTP'],
    diagram: 'fingerprint-pos',
    githubUrl: 'https://github.com/rayhantp/fingerprint-to-code',
    githubLabel: 'rayhantp/fingerprint-to-code',
  },
  {
    id: 'nas-pc-bekas',
    index: '05',
    period: '2025 — 2026',
    category: 'INFRASTRUKTUR · PENYIMPANAN & SERVER',
    title: 'NAS dari PC Bekas & Server Mandiri',
    context: 'Pemanfaatan Ulang Perangkat Sekolah & Pengelolaan Alur Hosting',
    summary:
      'Merakit, mengonfigurasi, dan mengelola Network Attached Storage (NAS) dari unit PC bekas sekolah agar dapat berfungsi sebagai pusat penyimpanan data jaringan yang andal, beriringan dengan pengelolaan alur hosting, domain, DNS, dan server mandiri.',
    highlights: [
      'Audit serta perakitan ulang komponen PC bekas sekolah menjadi node penyimpanan terpusat hemat daya.',
      'Pengaturan akses berkas lintas perangkat dalam jaringan lokal untuk kebutuhan kolaborasi data.',
      'Pemahaman praktis alur kerja hosting, manajemen DNS/domain, reverse proxy, dan administrasi server mandiri.',
    ],
    stack: ['NAS Architecture', 'Linux Server', 'PC Refurbishing', 'Hosting & Domain', 'LAN Routing'],
    diagram: 'nas-server',
  },
  {
    id: 'infrastruktur-cctv-88',
    index: '06',
    period: '2025 — 2026',
    category: 'INFRASTRUKTUR JARINGAN · SKALA BESAR',
    title: 'Infrastruktur 88 Titik CCTV',
    context: 'Topologi Jaringan, Power Injection & Terminasi Kabel LAN T568B',
    summary:
      'Perancangan dan pengerjaan infrastruktur sistem pengawasan mencakup 88 titik kamera—menyelaraskan desain topologi jaringan, pemetaan lokasi perangkat, distribusi daya lewat power injection, serta terminasi fisik kabel LAN berstandar T568B.',
    highlights: [
      'Pemetaan topologi terstruktur untuk menjaga stabilitas jalur data pada 88 titik kamera.',
      'Perencanaan penempatan perangkat distribusi serta skema power injection yang terukur.',
      'Standarisasi crimping dan terminasi kabel LAN T568B untuk kemudahan perawatan jangka panjang.',
    ],
    stack: ['Topologi 88 Kamera', 'Power Injection', 'LAN T568B', 'Switching & NVR', 'Structured Cabling'],
    diagram: 'cctv-88',
  },
  {
    id: 'display-jam-masjid-stb',
    index: '07',
    period: '2025 — 2026',
    category: 'EMBEDDED LINUX · WEB KIOSK',
    title: 'Display Jam Masjid — STB Linux + Chromium Kiosk',
    context: 'Konversi Set-Top Box Bekas Menjadi Layar Informasi Otomatis',
    summary:
      'Mengubah Set-Top Box (STB) bekas menjadi perangkat penampil jam digital masjid berbasis web yang berjalan otomatis dalam mode layar penuh Chromium Kiosk di atas Linux ringan—tanpa campur tangan operator setiap kali perangkat dinyalakan.',
    highlights: [
      'Instalasi dan penyesuaian sistem operasi Linux ringan pada perangkat STB bekas.',
      'Antarmuka jam digital berbasis web dengan keterbacaan jarak jauh yang bersih dan tenang.',
      'Konfigurasi auto-boot langsung ke Chromium Kiosk agar tangguh terhadap pemadaman listrik mendadak.',
    ],
    stack: ['STB Refurbish', 'Linux Embedded', 'Chromium Kiosk', 'HTML / CSS / JS', 'Auto-Boot Systemd'],
    diagram: 'masjid-kiosk',
  },
];
