"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";

export function CTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 sm:px-12 sm:py-16">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-sky/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Siap Menguatkan Operasi Lapangan Brand Anda?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                Diskusikan kebutuhan manpower, brand activation, atau integrasi
                JUPITER dengan tim MKB. Konsultasi awal gratis dan tanpa
                komitmen.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="accent" size="lg">
                  <Link href="/contact">
                    Mulai Konsultasi
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline-white" size="lg">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
