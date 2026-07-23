import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  ClipboardList,
  Clock,
  LayoutDashboard,
  Route,
  Share2,
  ArrowRight,
  Smartphone,
  BarChart3,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { JUPITER_FEATURES, SITE_CONFIG } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "JUPITER Technology",
  description: `JUPITER adalah sistem proprietary real-time field reporting milik ${SITE_CONFIG.name} untuk monitoring tenaga lapangan FMCG di Indonesia.`,
};

const iconMap: Record<string, LucideIcon> = {
  Clock,
  ClipboardList,
  LayoutDashboard,
  Camera,
  Route,
  Share2,
};

const benefits = [
  {
    icon: Smartphone,
    title: "Mobile-first untuk Field Force",
    description:
      "Aplikasi ringan untuk absensi, laporan, dan foto evidence langsung dari smartphone personel lapangan.",
  },
  {
    icon: BarChart3,
    title: "Insight untuk Decision Maker",
    description:
      "Dashboard manajerial dengan filter wilayah, brand, channel, dan periode — siap untuk review harian.",
  },
  {
    icon: Shield,
    title: "Data Integrity & Audit Trail",
    description:
      "Timestamp, geolocation, dan log aktivitas untuk memastikan data lapangan valid dan dapat diaudit.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        badge="JUPITER Technology"
        title="Visibilitas Penuh atas Operasi Lapangan Anda"
        description="JUPITER adalah proprietary real-time field reporting system milik MKB — dirancang khusus untuk kebutuhan manpower dan brand activation FMCG."
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="accent">Proprietary Platform</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Dari Lapangan ke Dashboard dalam Hitungan Detik
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tanpa data real-time, manajemen brand kesulitan menilai
                efektivitas SPG, merchandiser, maupun aktivasi. JUPITER
                menutup celah itu dengan menghubungkan setiap aktivitas
                lapangan ke satu pusat kendali.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Kurangi manipulasi absensi & laporan palsu",
                  "Percepat eskalasi isu di outlet",
                  "Standarisasi pelaporan multi-region",
                  "Tingkatkan akuntabilitas field force",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="accent" size="lg" className="mt-8">
                <Link href="/contact">
                  Request Demo JUPITER
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-navy shadow-xl">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/company/jupiter/platform-showcase.webp"
                  alt="JUPITER login dan live monitoring dashboard"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-6 pt-20">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-sky-light">
                        Actual Platform View
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        Login & Live Monitoring
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
                      Field Visibility
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Platform Evidence"
            title="Dari Monitoring Lokasi hingga Report Evidence"
            description="Tampilan aktual JUPITER memperlihatkan tiga lapisan utama: akses platform, pemantauan area, dan output dokumentasi aktivitas."
          />
          <div className="mt-12 space-y-8">
            {[
              {
                image: "/company/jupiter/login-dashboard.webp",
                label: "Secure Access",
                title: "Portal Monitoring Terpusat",
                description:
                  "Akses dashboard terpusat menjadi pintu masuk bagi tim operasional dan stakeholder yang diberi kewenangan.",
              },
              {
                image: "/company/jupiter/live-map.webp",
                label: "Geographic Monitoring",
                title: "Live Map dan Filter Periode",
                description:
                  "Peta monitoring membantu membaca persebaran aktivitas, memilih rentang waktu, dan menelusuri area operasional.",
              },
              {
                image: "/company/jupiter/manpower-report-anonymized.webp",
                label: "Evidence Reporting",
                title: "Manpower Summary Activity",
                description:
                  "Output laporan menggabungkan personel, area, outlet, waktu kunjungan, kategori display, dan dokumentasi foto. Detail sensitif disamarkan pada versi publik.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="grid items-center gap-7 overflow-hidden rounded-3xl border border-border bg-white p-5 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-7"
              >
                <div
                  className={`relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-dark">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Features grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Fitur Utama"
            title="Semua yang Dibutuhkan untuk Mengelola Field Force"
            description="Enam modul inti JUPITER yang terintegrasi dalam satu ekosistem."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {JUPITER_FEATURES.map((feature) => {
              const Icon = iconMap[feature.icon] ?? Clock;
              return (
                <Card
                  key={feature.title}
                  className="border-border/80 transition-all hover:border-sky/30 hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky/10 text-sky">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Untuk Siapa"
            title="Nilai untuk Setiap Stakeholder"
            description="JUPITER dirancang agar bermanfaat baik di lapangan maupun di ruang meeting."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-sky-light">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-navy py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Cara Kerja"
            title="Alur Sederhana, Hasil Transparan"
            description="Empat langkah dari onboarding personel hingga insight manajerial."
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Onboard",
                desc: "Personel terdaftar, dilatih, dan dihubungkan ke project klien.",
              },
              {
                step: "02",
                title: "Execute",
                desc: "Check-in GPS, kunjungan outlet, dan aktivitas dilaporkan via app.",
              },
              {
                step: "03",
                title: "Capture",
                desc: "Foto, form, dan KPI terkirim real-time ke server JUPITER.",
              },
              {
                step: "04",
                title: "Decide",
                desc: "Brand & MKB memantau dashboard untuk aksi perbaikan cepat.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-3xl font-bold text-sky">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
