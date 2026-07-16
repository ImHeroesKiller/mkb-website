"use client";

import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ClipboardList,
  Clock,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

const highlights = [
  {
    icon: Clock,
    title: "Real-time Attendance",
    description: "GPS, geo-fencing, dan selfie check-in terverifikasi.",
  },
  {
    icon: ClipboardList,
    title: "Field Reporting",
    description: "Laporan kunjungan & penjualan langsung dari lapangan.",
  },
  {
    icon: Camera,
    title: "Evidence Capture",
    description: "Foto display dengan timestamp & koordinat lokasi.",
  },
  {
    icon: LayoutDashboard,
    title: "Live Dashboard",
    description: "KPI nasional dalam satu layar untuk stakeholder.",
  },
];

export function JupiterHighlight() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky/15 blur-3xl" />
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <SectionHeading
              badge="Proprietary Technology"
              title="JUPITER — Real-time Field Reporting System"
              description="Platform digital milik MKB yang memberi visibilitas penuh atas kehadiran, aktivitas, dan performa tenaga lapangan di seluruh Indonesia."
              align="left"
              light
            />
            <div className="mt-8">
              <Button asChild variant="accent" size="lg">
                <Link href="/technology">
                  Pelajari JUPITER
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky/20 text-sky-light">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
