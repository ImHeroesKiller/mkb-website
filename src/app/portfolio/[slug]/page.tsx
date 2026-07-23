import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MapPin, Tags } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.client} — ${project.title}`,
    description: `Portfolio ${project.service} MKB untuk ${project.client} di ${project.area}.`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <>
      <section className="gradient-hero pt-28 pb-14 sm:pt-32 sm:pb-16">
        <Container>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Portfolio
          </Link>
          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <Badge variant="accent">{project.service}</Badge>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-sky-light">
                {project.client}
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {project.title}
              </h1>
              <div className="mt-6 flex items-start gap-2 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-light" />
                {project.area}
              </div>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src={project.cover}
                alt={`Dokumentasi proyek ${project.client}`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="space-y-5">
              <div className="rounded-2xl border border-border bg-slate-50 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <Tags className="h-4 w-4 text-sky" />
                  Brand yang Ditangani
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-border"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {"highlights" in project && project.highlights && (
                <div className="rounded-2xl border border-sky/20 bg-sky/5 p-6">
                  <h2 className="font-semibold text-navy">Project Highlights</h2>
                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button asChild variant="accent" className="w-full">
                <Link href="/contact">Diskusikan Proyek Serupa</Link>
              </Button>
            </aside>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-dark">
                Project Documentation
              </p>
              <h2 className="mt-2 text-2xl font-bold text-navy">
                Overview Pelaksanaan
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Dokumentasi berikut berasal dari materi operasional perusahaan
                dan merangkum bentuk aktivitas, penempatan tim, serta cakupan
                proyek.
              </p>
              <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-slate-50 shadow-sm">
                <Image
                  src={project.overview}
                  alt={`Overview proyek ${project.client} — ${project.title}`}
                  width={1600}
                  height={1000}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
