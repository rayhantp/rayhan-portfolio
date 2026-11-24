export interface TopologyNode {
  code: string;
  label: string;
  role: string;
}

export interface ResearchMonograph {
  chapter: string;
  year: string;
  documentType: string;
  institution: string;
  field: string;
  title: string;
  focusStatement: string;
  scopePoints: { label: string; detail: string }[];
  topologyNodes: TopologyNode[];
}

export const RESEARCH: ResearchMonograph = {
  chapter: '03 / KARYA TULIS ILMIAH',
  year: '2026',
  documentType: 'KARYA TULIS ILMIAH · MONOGRAF AKADEMIK',
  institution: 'SMA IT Daarul Rahman 3',
  field: 'Jaringan Komputer & Pengelolaan Data Lokal',
  title:
    'Pemanfaatan Jaringan Wi-Fi Terdistribusi untuk Pengelolaan Data Menggunakan NAS di Pondok Pesantren Daarul Rahman 3',
  focusStatement:
    'Penelitian terapan yang mengkaji integrasi titik akses Wi-Fi terdistribusi di lingkungan pondok pesantren dengan server penyimpanan terpusat berbasis Network Attached Storage (NAS) untuk mempermudah akses, penataan, dan pengelolaan berkas secara lokal dan terstruktur.',
  scopePoints: [
    {
      label: 'LOKUS PENELITIAN',
      detail: 'Lingkungan pendidikan dan asrama Pondok Pesantren Daarul Rahman 3.',
    },
    {
      label: 'LAPISAN JARINGAN',
      detail: 'Distribusi konektivitas melalui titik akses Wi-Fi terdistribusi di beberapa zona area.',
    },
    {
      label: 'PUSAT PENYIMPANAN',
      detail: 'Pengelolaan data terpusat menggunakan server NAS mandiri pada jaringan lokal.',
    },
    {
      label: 'RELEVANSI PRAKTIS',
      detail: 'Mengurangi ketergantungan penyimpanan terpisah per perangkat serta merapikan alur pertukaran berkas.',
    },
  ],
  topologyNodes: [
    { code: 'AP-01', label: 'Zona Kelas', role: 'Wi-Fi Terdistribusi' },
    { code: 'AP-02', label: 'Zona Kantor', role: 'Wi-Fi Terdistribusi' },
    { code: 'AP-03', label: 'Zona Asrama', role: 'Wi-Fi Terdistribusi' },
    { code: 'CORE', label: 'Distribusi LAN', role: 'Routing & Switching' },
    { code: 'NAS-01', label: 'Server NAS', role: 'Pengelolaan Data Terpusat' },
  ],
};
