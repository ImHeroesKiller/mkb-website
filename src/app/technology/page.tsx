import type { Metadata } from "next";
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

            {/* Mock dashboard */}
            <div className="rounded-3xl border border-border bg-navy p-6 shadow-xl sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-sky-light">
                    JUPITER
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Command Center
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  Live
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Check-in hari ini", value: "1.186 / 1.220", pct: 97 },
                  { label: "Outlet covered", value: "3.902", pct: 82 },
                  { label: "Photo evidence uploaded", value: "8.651", pct: 91 },
                  { label: "SLA report on-time", value: "98.2%", pct: 98 },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{row.label}</span>
                      <span className="font-semibold text-white">
                        {row.value}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-sky"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features grid */}
      <section className="bg-slate-50 py-16 sm:py-20">
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
