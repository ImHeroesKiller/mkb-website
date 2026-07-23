import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Users, Building2, Globe2 } from "lucide-react";
import { OFFICE_LOCATIONS, SITE_CONFIG } from "@/lib/constants";
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
            description="Klik marker untuk melihat alamat representative office dan homebase MKB."
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
            badge="Representative & PIC Area"
            title="Kantor Perwakilan dan Homebase MKB"
            description="Jaringan kantor dan homebase yang menopang koordinasi tim lapangan di berbagai wilayah Indonesia."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OFFICE_LOCATIONS.map((office) => (
              <Card
                key={office.name}
                className="group overflow-hidden border-border/80 transition-all hover:border-sky/30 hover:shadow-md"
              >
                {"photo" in office ? (
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <Image
                      src={office.photo}
                      alt={`Lokasi MKB ${office.name}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                    <MapPin className="h-10 w-10 text-sky-light" />
                  </div>
                )}
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky/10 text-sky">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{office.name}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-dark">
                        {office.type}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {office.address}
                  </p>
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
