"use client";

import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";
import { COVERAGE_CITIES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

export function CoveragePreview() {
  const previewCities = COVERAGE_CITIES.slice(0, 8);

  return (
    <section className="gradient-section py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeading
              badge="Jangkauan Nasional"
              title="Operasional di Kota-Kota Utama Indonesia"
              description="Tim lokal MKB siap di-deploy di wilayah strategis di seluruh nusantara, dengan support system yang terpusat dan terstandarisasi."
              align="left"
            />
            <div className="mt-8">
              <Button asChild variant="accent" size="lg">
                <Link href="/coverage">
                  Lihat Peta Coverage
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} direction="left">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {previewCities.map((city) => (
                <div
                  key={city.name}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-sm transition-colors hover:border-sky/30"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky/10 text-sky">
                    <MapPinned className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{city.name}</p>
                    <p className="text-xs text-muted-foreground">{city.region}</p>
                    <p className="mt-1 text-xs font-medium text-sky">
                      {city.teamSize} personel
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
