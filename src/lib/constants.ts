export const SITE_CONFIG = {
  name: "PT Mitra Kreasi Bersama",
  shortName: "MKB",
  tagline: "Mitra Strategis Manpower & Brand Activation FMCG",
  description:
    "PT Mitra Kreasi Bersama adalah perusahaan manpower outsourcing dan brand activation terpercaya untuk sektor FMCG di Indonesia sejak 2009. Didukung teknologi JUPITER untuk real-time field reporting.",
  url: "https://mitrakreasibersama.com",
  email: "info@mitrakreasibersama.com",
  phone: "+62 21 1234 5678",
  whatsapp: "6281234567890",
  address: "Jakarta, Indonesia",
  foundedYear: 2009,
  experienceYears: 17,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/services", label: "Layanan" },
  { href: "/technology", label: "JUPITER" },
  { href: "/clients", label: "Klien" },
  { href: "/coverage", label: "Coverage" },
  { href: "/contact", label: "Kontak" },
] as const;

export const SERVICES = [
  {
    id: "spg",
    title: "Sales Promotion Girl (SPG)",
    shortTitle: "SPG",
    description:
      "Tim SPG profesional yang terlatih untuk meningkatkan brand awareness dan mendorong konversi penjualan di outlet ritel modern maupun tradisional.",
    icon: "Users",
    features: [
      "Rekrutmen & training standar brand",
      "Penampilan & product knowledge terukur",
      "Reporting penjualan harian",
      "Supervisi lapangan berjenjang",
    ],
  },
  {
    id: "merchandiser",
    title: "Merchandiser",
    shortTitle: "Merchandiser",
    description:
      "Pengelolaan display, stock, dan visibility produk di toko agar shelf share optimal dan planogram brand terpenuhi secara konsisten.",
    icon: "Package",
    features: [
      "Planogram compliance",
      "Stock check & replenishment",
      "Foto display via JUPITER",
      "Coverage outlet terjadwal",
    ],
  },
  {
    id: "beauty-advisor",
    title: "Beauty Advisor",
    shortTitle: "Beauty Advisor",
    description:
      "Beauty advisor berpengalaman untuk kategori personal care & cosmetics, siap memberikan edukasi produk dan meningkatkan trial & purchase.",
    icon: "Sparkles",
    features: [
      "Product consultation",
      "Demo & sampling terarah",
      "CRM & follow-up pelanggan",
      "KPI penjualan terpantau",
    ],
  },
  {
    id: "sales-motorist",
    title: "Sales Motorist",
    shortTitle: "Sales Motorist",
    description:
      "Armada sales motorist untuk distribusi dan penjualan langsung ke toko-toko tradisional, warung, dan saluran modern trade di wilayah target.",
    icon: "Bike",
    features: [
      "Route planning optimal",
      "Order taking & delivery support",
      "GPS tracking lapangan",
      "Target & achievement dashboard",
    ],
  },
  {
    id: "brand-activation",
    title: "Brand Activation",
    shortTitle: "Brand Activation",
    description:
      "Eksekusi event, sampling, roadshow, dan aktivasi brand multi-channel yang terukur, terkoordinasi, dan dilengkapi dokumentasi real-time.",
    icon: "Megaphone",
    features: [
      "Konsep & eksekusi event",
      "Sampling campaign",
      "Roadshow nasional",
      "Laporan performa aktivasi",
    ],
  },
] as const;

export const CLIENTS = [
  { name: "Paseo", category: "Tissue & Hygiene" },
  { name: "Kalbe", category: "Healthcare & Pharma" },
  { name: "Wardah", category: "Beauty & Cosmetics" },
  { name: "Hatari", category: "Home Appliances" },
  { name: "Sinarmas", category: "Conglomerate" },
  { name: "Indofood", category: "FMCG Food" },
  { name: "Unilever", category: "FMCG" },
  { name: "Mayora", category: "FMCG Food" },
] as const;

export const COVERAGE_CITIES = [
  { name: "Jakarta", lat: -6.2088, lng: 106.8456, region: "Jabodetabek", teamSize: "500+" },
  { name: "Bandung", lat: -6.9175, lng: 107.6191, region: "Jawa Barat", teamSize: "150+" },
  { name: "Surabaya", lat: -7.2575, lng: 112.7521, region: "Jawa Timur", teamSize: "200+" },
  { name: "Medan", lat: 3.5952, lng: 98.6722, region: "Sumatera Utara", teamSize: "100+" },
  { name: "Semarang", lat: -6.9667, lng: 110.4167, region: "Jawa Tengah", teamSize: "120+" },
  { name: "Makassar", lat: -5.1477, lng: 119.4327, region: "Sulawesi Selatan", teamSize: "80+" },
  { name: "Palembang", lat: -2.9761, lng: 104.7754, region: "Sumatera Selatan", teamSize: "70+" },
  { name: "Denpasar", lat: -8.6705, lng: 115.2126, region: "Bali", teamSize: "60+" },
  { name: "Yogyakarta", lat: -7.7956, lng: 110.3695, region: "DI Yogyakarta", teamSize: "50+" },
  { name: "Balikpapan", lat: -1.2379, lng: 116.8529, region: "Kalimantan Timur", teamSize: "40+" },
  { name: "Manado", lat: 1.4748, lng: 124.8421, region: "Sulawesi Utara", teamSize: "30+" },
  { name: "Pekanbaru", lat: 0.5071, lng: 101.4478, region: "Riau", teamSize: "45+" },
] as const;

export const WHY_US = [
  {
    title: "Kepercayaan 17+ Tahun",
    description:
      "Sejak 2009, MKB telah dipercaya brand-brand besar FMCG di Indonesia untuk mengelola tenaga lapangan dan aktivasi merek.",
    icon: "ShieldCheck",
  },
  {
    title: "Teknologi JUPITER",
    description:
      "Sistem proprietary real-time field reporting yang memberi visibilitas penuh atas aktivitas, attendance, dan performa di lapangan.",
    icon: "Cpu",
  },
  {
    title: "Skala Nasional",
    description:
      "Jaringan operasional yang menjangkau kota-kota utama di seluruh Indonesia dengan tim lokal yang siap di-deploy.",
    icon: "MapPin",
  },
  {
    title: "Kepatuhan Operasional",
    description:
      "Proses rekrutmen, payroll, BPJS, dan SOP lapangan yang rapi, terukur, dan siap diaudit klien enterprise.",
    icon: "FileCheck",
  },
] as const;

export const JUPITER_FEATURES = [
  {
    title: "Real-time Attendance",
    description:
      "Absensi GPS, geo-fencing, dan foto selfie untuk memastikan kehadiran tim di lokasi yang benar.",
    icon: "Clock",
  },
  {
    title: "Field Activity Reporting",
    description:
      "Laporan kunjungan, merchandising, penjualan, dan foto display terkirim secara real-time ke dashboard.",
    icon: "ClipboardList",
  },
  {
    title: "Live Dashboard",
    description:
      "Pantau KPI, coverage, dan achievement per wilayah, brand, maupun individu dalam satu layar.",
    icon: "LayoutDashboard",
  },
  {
    title: "Photo & Evidence Capture",
    description:
      "Dokumentasi visual planogram, POSM, dan kondisi rak dengan timestamp dan koordinat lokasi.",
    icon: "Camera",
  },
  {
    title: "Route & Coverage Tracking",
    description:
      "Lacak rute sales motorist dan merchandiser untuk optimalisasi coverage dan efisiensi kunjungan.",
    icon: "Route",
  },
  {
    title: "Export & Client Access",
    description:
      "Data siap diekspor dan dibagikan ke stakeholder klien dengan hak akses yang terkontrol.",
    icon: "Share2",
  },
] as const;

export const STATS = [
  { value: "17+", label: "Tahun Pengalaman" },
  { value: "1000+", label: "Tenaga Lapangan" },
  { value: "30+", label: "Kota Coverage" },
  { value: "50+", label: "Brand Partner" },
] as const;

export const MILESTONES = [
  {
    year: "2009",
    title: "Berdiri",
    description: "PT Mitra Kreasi Bersama didirikan di Jakarta dengan fokus manpower SPG & merchandiser.",
  },
  {
    year: "2014",
    title: "Ekspansi Nasional",
    description: "Memperluas jangkauan operasional ke kota-kota utama di Jawa, Sumatera, dan Sulawesi.",
  },
  {
    year: "2018",
    title: "JUPITER Launch",
    description: "Meluncurkan sistem proprietary JUPITER untuk real-time field reporting & monitoring.",
  },
  {
    year: "2022",
    title: "Enterprise Scale",
    description: "Menangani multi-brand national campaign dengan ribuan personel di lapangan.",
  },
  {
    year: "2026",
    title: "Digital Excellence",
    description: "Penguatan platform digital, compliance, dan partner ecosystem untuk klien FMCG.",
  },
] as const;
