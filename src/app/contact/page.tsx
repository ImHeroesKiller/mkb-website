import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${SITE_CONFIG.name} untuk konsultasi manpower outsourcing, brand activation, atau demo JUPITER.`,
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    title: "Telepon",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat dengan tim kami",
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
  },
  {
    icon: MapPin,
    title: "Lokasi",
    value: SITE_CONFIG.address,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Kontak"
        title="Mari Diskusikan Kebutuhan Anda"
        description="Tim MKB siap membantu merancang solusi manpower, brand activation, atau integrasi JUPITER sesuai target brand Anda."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy">Informasi Kontak</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Isi formulir atau hubungi kami langsung. Kami biasanya merespons
                dalam 1×24 jam kerja.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((item) => {
                  const content = (
                    <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-4 transition-colors hover:border-sky/30">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky/10 text-sky">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-navy">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={item.title}>{content}</div>;
                })}
              </div>

              <Card className="mt-6 border-sky/20 bg-sky/5">
                <CardContent className="flex items-start gap-3 p-5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      Jam Operasional
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Senin – Jumat: 09.00 – 18.00 WIB
                      <br />
                      Sabtu: 09.00 – 13.00 WIB
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="border-border/80 shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-navy">
                    Formulir Kontak
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Lengkapi data di bawah. Semua field wajib diisi.
                  </p>
                  <div className="mt-6">
                    <ContactForm />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
