export interface BroadcastGear {
  name: string;
  role: string;
  category: string;
}

export interface GalleryPlate {
  id: string;
  plateNumber: string;
  title: string;
  discipline: string;
  aspect: 'landscape' | 'portrait' | 'wide';
  caption: string;
  /** Isi dengan path file di public/media/... (contoh: '/media/ainal-mafar-01.jpg') saat aset siap dipasang */
  imageUrl?: string;
}

export interface MediaShowcase {
  chapter: string;
  headline: string;
  intro: string;
  film: {
    tag: string;
    title: string;
    year: string;
    context: string;
    description: string;
    /** Isi dengan URL embed YouTube/Vimeo atau path video lokal di public/media/... saat reel siap tayang */
    videoUrl?: string;
  };
  disciplines: string[];
  broadcastGear: BroadcastGear[];
  galleryPlates: GalleryPlate[];
}

export const MEDIA: MediaShowcase = {
  chapter: '04 / KARYA MEDIA & PRODUKSI VISUAL',
  headline: 'Dari ruang kendali siaran langsung hingga bingkai sinema.',
  intro:
    'Selain membangun sistem dan jaringan, saya aktif di produksi visual—menangani videografi, fotografi, penyuntingan, serta operasional live streaming multi-perangkat dan tata suara digital.',
  film: {
    tag: 'FILM PENDEK KELULUSAN · 2026',
    title: 'AINAL MAFAR',
    year: '2026',
    context: 'SMA IT Daarul Rahman 3',
    description:
      'Karya film pendek kelulusan yang merangkum proses produksi visual dari penyusunan adegan, pengambilan gambar, hingga penyuntingan akhir. Slot di bawah telah disiapkan untuk pemutaran reel atau video utama.',
    videoUrl: undefined,
  },
  disciplines: [
    'Videografi',
    'Fotografi',
    'Operator Live Streaming Multi-Perangkat',
    'Penyuntingan Video (Editing)',
  ],
  broadcastGear: [
    { name: 'vMix 28', role: 'Switching Multi-Kamera, Overlay & Live Production', category: 'SWITCHER' },
    { name: 'OBS Studio', role: 'Encoding, Recording & Routing Siaran', category: 'BROADCAST' },
    { name: 'NDI', role: 'Transmisi Video & Audio Latensi Rendah Berbasis IP', category: 'SIGNAL' },
    { name: 'Midas MR18', role: 'Digital Mixing Console & Manajemen Audio Live', category: 'AUDIO' },
  ],
  galleryPlates: [
    {
      id: 'plate-01',
      plateNumber: 'PLATE 01',
      title: 'Still Frame — AINAL MAFAR',
      discipline: 'SINEMATOGRAFI · 2026',
      aspect: 'wide',
      caption: 'Slot arsip bingkai pilihan film pendek kelulusan "AINAL MAFAR".',
      imageUrl: undefined,
    },
    {
      id: 'plate-02',
      plateNumber: 'PLATE 02',
      title: 'Meja Operator Live Streaming',
      discipline: 'VMIX 28 · NDI · MIDAS MR18',
      aspect: 'landscape',
      caption: 'Slot dokumentasi rig produksi multi-perangkat dan tata suara digital.',
      imageUrl: undefined,
    },
    {
      id: 'plate-03',
      plateNumber: 'PLATE 03',
      title: 'Arsip Fotografi Dokumentasi',
      discipline: 'FOTOGRAFI',
      aspect: 'portrait',
      caption: 'Slot galeri foto pilihan dengan komposisi editorial.',
      imageUrl: undefined,
    },
    {
      id: 'plate-04',
      plateNumber: 'PLATE 04',
      title: 'Cuplikan Editing & Color Pass',
      discipline: 'VIDEOGRAFI & EDITING',
      aspect: 'landscape',
      caption: 'Slot potongan adegan dan proses pascaproduksi visual.',
      imageUrl: undefined,
    },
  ],
};
