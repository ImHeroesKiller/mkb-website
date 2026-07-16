"use client";

import { Cpu, FileCheck, MapPin, ShieldCheck, type LucideIcon } from "lucide-react";
import { WHY_US } from "@/lib/constants";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Cpu,
  MapPin,
  FileCheck,
};

export function WhyUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          badge="Mengapa MKB"
          title="Nilai yang Kami Tonjolkan"
          description="Empat pilar yang membuat brand FMCG mempercayakan operasi lapangan mereka kepada PT Mitra Kreasi Bersama."
        />

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, index) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <StaggerItem key={item.title}>
                <div className="relative h-full rounded-2xl border border-border bg-slate-50/80 p-6 transition-all hover:border-sky/30 hover:bg-white hover:shadow-md">
                  <span className="absolute right-5 top-5 text-4xl font-bold text-slate-100">
                    0{index + 1}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-sky-light">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
