"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Megaphone,
  Package,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Package,
  Sparkles,
  Bike,
  Megaphone,
};

export function ServicesPreview() {
  return (
    <section className="gradient-section py-20 sm:py-24">
      <Container>
        <SectionHeading
          badge="Layanan Kami"
          title="Solusi Manpower & Aktivasi yang Terintegrasi"
          description="Dari SPG hingga brand activation nasional — kami menyediakan tenaga profesional yang siap di-deploy dengan standar operasional yang ketat."
        />

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Users;
            return (
              <StaggerItem key={service.id}>
                <Card className="group h-full border-border/80 transition-all hover:-translate-y-1 hover:border-sky/30 hover:shadow-lg hover:shadow-sky/5">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10 text-sky transition-colors group-hover:bg-sky group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 text-lg">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.id}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-sky-dark"
                    >
                      Detail layanan
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              Lihat Semua Layanan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
