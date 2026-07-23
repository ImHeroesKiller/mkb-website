import type { Metadata } from "next";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { CLIENTS, SITE_CONFIG } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Klien",
  description: `Brand-brand terkemuka yang mempercayakan operasi lapangan mereka kepada ${SITE_CONFIG.name}.`,
};

const testimonials = [
  {
    quote:
      "MKB membantu kami men-scale merchandiser di puluhan kota dengan reporting yang jauh lebih rapi. Dashboard JUPITER memudahkan review harian.",
    name: "Brand Manager",
    company: "Personal Care Brand",
  },
  {
    quote:
      "Eksekusi brand activation multi-city terasa terkontrol. Tim siap, dokumentasi lengkap, dan eskalasi masalah di lapangan cepat.",
    name: "Trade Marketing Lead",
    company: "FMCG Food Company",
  },
  {
    quote:
      "Compliance payroll dan kehadiran personel yang transparan membuat audit internal kami lebih mudah. Partnership yang solid.",
    name: "Procurement Manager",
    company: "Healthcare Group",
  },
];

const industries = [
  "Tissue & Hygiene",
  "Personal Care",
  "Beauty & Cosmetics",
  "Healthcare & Pharma",
  "Food & Beverage",
  "Home Care",
  "Electronics & Appliances",
  "Modern & Traditional Trade",
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        badge="Klien & Partner"
        title="Dipercaya Brand-Brand Besar Indonesia"
        description="Selama 17+ tahun, MKB menjadi partner operasional lapangan bagi perusahaan FMCG, healthcare, beauty, dan home care di tingkat nasional."
      />

      {/* Logo grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Portfolio"
            title="Beberapa Brand yang Kami Layani"
            description="Nama-nama di bawah merepresentasikan kepercayaan jangka panjang terhadap kualitas people & process MKB."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {CLIENTS.map((client) => (
              <Card
                key={client.name}
                className="group relative overflow-hidden border-border/80 transition-all hover:border-sky/30 hover:shadow-md"
              >
                {"ongoing" in client && client.ongoing && (
                  <span className="absolute right-2 top-2 z-10 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700 ring-1 ring-inset ring-emerald-200">
                    Ongoing
                  </span>
                )}
                <CardContent className="flex min-h-32 items-center justify-center p-4 sm:p-5">
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    width={240}
                    height={90}
                    className="h-auto max-h-20 w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Industri"
            title="Sektor yang Kami Layani"
            description="Fokus utama kami adalah brand dengan kebutuhan distribusi dan presence di titik penjualan."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Testimoni"
            title="Apa Kata Partner Kami"
            description="Feedback dari stakeholder yang bekerja langsung dengan tim MKB."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="relative border-border/80">
                <CardContent className="p-6 sm:p-8">
                  <Quote className="h-8 w-8 text-sky/30" />
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-navy">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust metrics */}
      <section className="bg-navy py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { value: "50+", label: "Brand partner aktif & historis" },
              { value: "95%+", label: "Retention klien jangka panjang" },
              { value: "17+", label: "Tahun rekam jejak industri" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
