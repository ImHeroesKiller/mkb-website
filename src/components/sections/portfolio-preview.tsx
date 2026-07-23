import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/project-card";

export function PortfolioPreview() {
  const featured = PROJECTS.filter(
    (project) => "featured" in project && project.featured,
  ).slice(0, 4);

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          badge="Portfolio Project"
          title="Eksekusi Lapangan yang Terbukti"
          description="Dokumentasi faktual pengelolaan SPG, merchandiser, beauty advisor, motorist, dan brand activation untuk berbagai brand nasional."
        />

        <div className="mt-10 overflow-hidden rounded-3xl bg-navy shadow-xl">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative min-h-72 sm:min-h-96">
              <Image
                src="/company/portfolio/homepage-activation.webp"
                alt="Dokumentasi aktivasi Okky Jelly School-to-School"
                fill
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/30" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky/15 text-sky-light">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-sky-light">
                Featured Activation
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Okky Jelly School-to-School
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Aktivasi berbasis sekolah dengan event stage, product
                experience, engagement siswa, dan mobile activation unit.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-sky-light" />
                Brand Activation
              </div>
              <Button asChild variant="accent" className="mt-7 w-fit">
                <Link href="/portfolio/okky-school-to-school">
                  Lihat Studi Proyek <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/portfolio">
              Lihat Seluruh Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
