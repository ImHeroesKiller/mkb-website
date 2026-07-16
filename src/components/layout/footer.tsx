import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky text-sm font-bold text-white">
                MKB
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-bold text-white">
                  {SITE_CONFIG.shortName}
                </span>
                <span className="mt-0.5 text-[10px] text-slate-400">
                  Mitra Kreasi Bersama
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {SITE_CONFIG.tagline}. Mitra terpercaya brand FMCG di Indonesia
              sejak {SITE_CONFIG.foundedYear}, didukung teknologi JUPITER.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigasi</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Layanan</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-light"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Kontak</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                {SITE_CONFIG.address}
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-sky-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-sky" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-sky-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sky" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Powered by JUPITER · Built for enterprise FMCG partners
          </p>
        </div>
      </Container>
    </footer>
  );
}
