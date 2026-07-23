import type { Metadata } from "next";
import { PROJECTS, SITE_CONFIG } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/portfolio/project-card";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Portfolio Project",
  description: `Portfolio proyek manpower, merchandising, sales motorist, beauty advisor, dan brand activation ${SITE_CONFIG.name}.`,
};

const serviceGroups = [
  "SPG",
  "Merchandiser",
  "Beauty Advisor",
  "Sales Motorist",
  "Brand Activation",
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        badge="Portfolio Project"
        title="Rekam Jejak Eksekusi Lapangan MKB"
        description="Dokumentasi proyek nyata lintas modern trade, general trade, minimarket, event, dan aktivasi sekolah untuk brand-brand nasional."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge={`${PROJECTS.length} Dokumentasi Proyek`}
            title="People, Process, dan Eksekusi di Lapangan"
            description="Setiap proyek menampilkan cakupan layanan, area operasional, brand yang ditangani, serta bukti dokumentasi dari materi perusahaan."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {serviceGroups.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border bg-slate-50 px-4 py-2 text-xs font-semibold text-navy"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
