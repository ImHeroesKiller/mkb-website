import type { Metadata } from "next";
import { MapPin, Users, Building2, Globe2 } from "lucide-react";
import { COVERAGE_CITIES, SITE_CONFIG } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { CoverageMapLoader } from "@/components/coverage/coverage-map-loader";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Coverage",
  description: `Jangkauan operasional nasional ${SITE_CONFIG.name} — tenaga lapangan di kota-kota utama Indonesia.`,
};

const regions = [
  {
    name: "Jawa & Bali",
    cities: "Jakarta, Bandung, Surabaya, Semarang, Yogyakarta, Denpasar",
    icon: Building2,
  },
  {
    name: "Sumatera",
    cities: "Medan, Palembang, Pekanbaru, dan kota satelit pendukung",
    icon: MapPin,
  },
  {
    name: "Kalimantan & Sulawesi",
    cities: "Balikpapan, Makassar, Manado, dan area ekspansi",
    icon: Globe2,
  },
];

export default function CoveragePage() {
  return (
    <>
      <PageHero
        badge="Coverage Nasional"
        title="Kehadiran di Kota-Kota Strategis Indonesia"
        description="Jaringan operasional MKB menjangkau pusat ekonomi utama di lima pulau besar — siap mendukung campaign nasional maupun regional rollout."
      />

      {/* Map */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Peta Interaktif"
            title="Lokasi Coverage MKB"
            description="Klik marker pada peta untuk melihat detail kota dan estimasi kapasitas tim."
          />
          <div className="mt-10">
            <CoverageMapLoader />
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-slate-50 py-12">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { icon: MapPin, value: "30+", label: "Kota coverage" },
              { icon: Users, value: "1000+", label: "Field force" },
              { icon: Building2, value: "5", label: "Pulau besar" },
              { icon: Globe2, value: "24/7", label: "Ops support" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="mx-auto h-6 w-6 text-sky" />
                <p className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* City list */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Daftar Kota"
            title="Hub Operasional Utama"
            description="Estimasi kapasitas tim per kota. Deploy tambahan dapat disesuaikan dengan kebutuhan campaign."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COVERAGE_CITIES.map((city) => (
              <Card
                key={city.name}
                className="border-border/80 transition-colors hover:border-sky/30"
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky/10 text-sky">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-navy">{city.name}</p>
                      <span className="shrink-0 rounded-full bg-sky/10 px-2 py-0.5 text-xs font-semibold text-sky-dark">
                        {city.teamSize}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {city.region}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Regions */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Regional"
            title="Struktur Coverage Regional"
            description="Setiap region memiliki coordinator dan pool talent lokal untuk respons deploy yang cepat."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {regions.map((region) => (
              <Card key={region.name} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-sky-light">
                    <region.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">
                    {region.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {region.cities}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
