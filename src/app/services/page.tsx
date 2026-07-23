import type { Metadata } from "next";
import Link from "next/link";
import {
  Bike,
  Check,
  Megaphone,
  Package,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PROJECTS, SERVICES, SITE_CONFIG } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/portfolio/project-card";

export const metadata: Metadata = {
  title: "Layanan",
  description: `Layanan manpower outsourcing & brand activation ${SITE_CONFIG.name}: SPG, Merchandiser, Beauty Advisor, Sales Motorist, dan Brand Activation.`,
};

const iconMap: Record<string, LucideIcon> = {
  Users,
  Package,
  Sparkles,
  Bike,
  Megaphone,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Layanan"
        title="Solusi Manpower & Brand Activation End-to-End"
        description="Pilih layanan yang sesuai kebutuhan brand Anda — atau kombinasikan beberapa solusi dengan monitoring terpusat lewat JUPITER."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Users;
              const reverse = index % 2 === 1;

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div className={reverse ? "lg:order-2" : undefined}>
                    <Badge variant="accent">{service.shortTitle}</Badge>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sky">
                            <Check className="h-3 w-3" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="accent" className="mt-8">
                      <Link href="/contact">Diskusikan Kebutuhan</Link>
                    </Button>
                  </div>

                  <div
                    className={`relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-slate-50 to-sky/5 p-8 sm:p-12 ${
                      reverse ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-sky/10 blur-2xl" />
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-sky-light shadow-lg">
                        <Icon className="h-8 w-8" />
                      </div>
                      <p className="mt-8 text-sm font-medium uppercase tracking-wider text-sky">
                        Service Module
                      </p>
                      <p className="mt-2 text-2xl font-bold text-navy">
                        {service.shortTitle}
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        Dikelola dengan SOP berlapis, training brand-specific,
                        dan pelaporan real-time via JUPITER.
                      </p>
                      <div className="mt-8 grid grid-cols-2 gap-3">
                        {["Training", "Deploy", "Monitor", "Report"].map(
                          (step) => (
                            <div
                              key={step}
                              className="rounded-xl border border-border bg-white px-3 py-2.5 text-center text-xs font-semibold text-navy"
                            >
                              {step}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Bukti Pelaksanaan"
            title="Layanan dalam Proyek Nyata"
            description="Beberapa dokumentasi yang menunjukkan bagaimana modul layanan MKB dijalankan di modern trade, general trade, event, dan sekolah."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.filter(
              (project) => "featured" in project && project.featured,
            )
              .slice(0, 6)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/portfolio">Jelajahi Seluruh Portfolio</Link>
            </Button>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
