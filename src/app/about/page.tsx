import type { Metadata } from "next";
import {
  Award,
  Eye,
  Heart,
  Target,
  Users,
} from "lucide-react";
import { MILESTONES, SITE_CONFIG, STATS, WHY_US } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Sejarah, visi, misi, dan nilai ${SITE_CONFIG.name} — mitra manpower & brand activation FMCG sejak ${SITE_CONFIG.foundedYear}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Tentang Kami"
        title="Mitra Terpercaya Manpower FMCG Indonesia"
        description={`${SITE_CONFIG.name} hadir sejak ${SITE_CONFIG.foundedYear} untuk membantu brand mengelola tenaga lapangan dan aktivasi merek secara profesional, terukur, dan compliant.`}
      />

      {/* Company overview */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                badge="Siapa Kami"
                title="Dari Operasi Lapangan hingga Visibilitas Digital"
                description={`${SITE_CONFIG.experienceYears}+ tahun pengalaman menjadikan MKB partner strategis bagi brand yang membutuhkan eksekusi lapangan yang rapi, skala nasional, dan data real-time.`}
                align="left"
              />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Kami memahami bahwa di industri FMCG, kemenangan di rak dan di
                lapangan ditentukan oleh kualitas people, process, dan
                technology. Itulah mengapa MKB membangun ekosistem lengkap —
                dari rekrutmen hingga platform JUPITER.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <Card
                  key={stat.label}
                  className="border-border/80 bg-slate-50 text-center"
                >
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-navy sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Mission */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10 text-sky">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">Visi</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Menjadi mitra manpower dan brand activation paling terpercaya
                  di Indonesia, didukung teknologi yang memberi transparansi
                  penuh bagi setiap brand partner.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-sky-light">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">Misi</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                    Menyediakan tenaga lapangan berkualitas tinggi dan terlatih
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                    Menjamin kepatuhan operasional dan standar enterprise
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                    Menghadirkan data real-time melalui JUPITER
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                    Memperluas jangkauan nasional secara terukur
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Nilai Utama"
            title="Fondasi Kepercayaan Klien"
            description="Empat nilai yang menjadi kompas setiap keputusan operasional MKB."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border p-6 transition-colors hover:border-sky/30"
              >
                <h3 className="text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Perjalanan Kami"
            title="Milestone MKB"
            description="Jejak pertumbuhan dari perusahaan lokal menjadi partner nasional FMCG."
          />
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-8">
              {MILESTONES.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden flex-1 sm:block" />
                  <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-sky shadow sm:left-1/2">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div className="ml-12 flex-1 rounded-2xl border border-border bg-white p-5 shadow-sm sm:ml-0">
                    <p className="text-sm font-bold text-sky">{item.year}</p>
                    <h3 className="mt-1 text-base font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Culture highlights */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Users,
                title: "People First",
                desc: "Investasi pada rekrutmen, training, dan kesejahteraan tenaga lapangan.",
              },
              {
                icon: Award,
                title: "Operational Excellence",
                desc: "SOP berlapis, supervisi berjenjang, dan audit kesiapan klien.",
              },
              {
                icon: Heart,
                title: "Partnership Mindset",
                desc: "Kami tumbuh bersama brand partner — bukan sekadar vendor.",
              },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <CardContent className="p-8">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10 text-sky">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
