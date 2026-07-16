# PT Mitra Kreasi Bersama (MKB) — Corporate Website

Website korporat modern untuk **PT Mitra Kreasi Bersama**, perusahaan manpower outsourcing dan brand activation untuk sektor FMCG di Indonesia.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · Leaflet · React Hook Form + Zod

---

## Fitur

- **Homepage** — Hero, Trust Bar, JUPITER highlight, Services, Why Us, Coverage, CTA
- **About Us** — Visi, misi, nilai, timeline milestone
- **Services** — SPG, Merchandiser, Beauty Advisor, Sales Motorist, Brand Activation
- **Technology (JUPITER)** — Halaman khusus platform real-time field reporting
- **Clients** — Portfolio brand & testimoni
- **Coverage** — Peta interaktif Leaflet + daftar kota nasional
- **Contact** — Form tervalidasi (React Hook Form + Zod)

Desain: **Deep Navy (`#0F172A`) + Teal/Blue accent (`#0EA5E9`)**, corporate + tech-forward, fully responsive.

---

## Prerequisites

- **Node.js** 18.18+ (disarankan 20 LTS atau 22+)
- **npm** 9+ (atau pnpm / yarn)

---

## Install & Run (Local)

```bash
# 1. Clone repository
git clone https://github.com/<username>/mkb-website.git
cd mkb-website

# 2. Install dependencies
npm install

# 3. (Opsional) Environment variables
cp .env.example .env.local

# 4. Development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Deskripsi                          |
|-----------------|------------------------------------|
| `npm run dev`   | Development server (hot reload)    |
| `npm run build` | Production build                   |
| `npm run start` | Jalankan hasil production build    |
| `npm run lint`  | ESLint                             |

---

## Tech Stack

| Layer        | Technology                                      |
|--------------|-------------------------------------------------|
| Framework    | Next.js 15 (App Router) + React 19              |
| Language     | TypeScript                                      |
| Styling      | Tailwind CSS v4                                 |
| UI           | shadcn/ui patterns + Radix UI primitives        |
| Animation    | Framer Motion                                   |
| Icons        | Lucide React                                    |
| Forms        | React Hook Form + Zod                           |
| Maps         | Leaflet + React Leaflet (OpenStreetMap tiles)   |
| Deployment   | Vercel-ready                                    |

Tidak ada API key Mapbox yang wajib — peta memakai **OpenStreetMap** gratis via Leaflet.

---

## Struktur Folder

```
mkb-website/
├── public/                 # Static assets
├── src/
│   ├── app/                # App Router pages
│   │   ├── about/
│   │   ├── clients/
│   │   ├── contact/
│   │   ├── coverage/
│   │   ├── services/
│   │   ├── technology/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx        # Homepage
│   ├── components/
│   │   ├── contact/        # Contact form
│   │   ├── coverage/       # Map components
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Homepage sections
│   │   ├── shared/         # Container, headings, animation
│   │   └── ui/             # Button, Card, Input, etc.
│   └── lib/
│       ├── constants.ts    # Site data & content
│       ├── utils.ts        # cn() helper
│       └── validations.ts  # Zod schemas
├── .env.example
├── next.config.ts
├── package.json
├── vercel.json
└── README.md
```

---

## Deploy ke Vercel

Project ini **zero-config** untuk Vercel (framework detection Next.js).

### Opsi A — Via Dashboard (Recommended)

1. Push project ke GitHub (lihat bagian di bawah)
2. Buka [vercel.com/new](https://vercel.com/new)
3. **Import** repository `mkb-website`
4. Biarkan default:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: _(otomatis)_
   - Install Command: `npm install`
5. Klik **Deploy**
6. Setelah sukses, Anda mendapat URL `*.vercel.app`

### Opsi B — Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production
```

### Environment Variables di Vercel

Saat ini **tidak ada env wajib**. Jika nanti menambahkan analytics/API:

1. Vercel Project → **Settings** → **Environment Variables**
2. Isi sesuai `.env.example`
3. Redeploy

---

## Push ke GitHub

```bash
# Di folder project
cd mkb-website

# Inisialisasi git (jika belum)
git init
git add .
git commit -m "feat: initial MKB corporate website"

# Buat repo di GitHub lalu:
git branch -M main
git remote add origin https://github.com/<username>/mkb-website.git
git push -u origin main
```

Atau dengan GitHub CLI:

```bash
gh repo create mkb-website --public --source=. --remote=origin --push
```

---

## Customization

Konten utama (layanan, klien, kota coverage, kontak) ada di:

```
src/lib/constants.ts
```

Warna tema di `src/app/globals.css` (`--color-navy`, `--color-sky`, dll.).

Form kontak saat ini mensimulasikan submit. Hubungkan ke API/email di:

```
src/components/contact/contact-form.tsx
```

---

## Performance Notes

- Fonts: `next/font` (Geist) dengan `display: swap`
- Leaflet dimuat **client-only** + dynamic import (tidak memberatkan SSR)
- Framer Motion: animasi `whileInView` dengan `once: true`
- Image formats: AVIF/WebP di `next.config.ts`
- Security headers di `vercel.json`

---

## License

Private / proprietary — © PT Mitra Kreasi Bersama. All rights reserved.

---

Dibangun dengan Next.js 15 untuk deployment cepat di Vercel.
