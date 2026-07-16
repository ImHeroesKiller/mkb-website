"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-[4.25rem]">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold tracking-tight transition-colors",
                solid
                  ? "bg-navy text-white"
                  : "bg-white/15 text-white ring-1 ring-white/20"
              )}
            >
              MKB
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span
                className={cn(
                  "text-sm font-bold tracking-tight transition-colors",
                  solid ? "text-navy" : "text-white"
                )}
              >
                {SITE_CONFIG.shortName}
              </span>
              <span
                className={cn(
                  "mt-0.5 text-[10px] font-medium transition-colors",
                  solid ? "text-muted-foreground" : "text-slate-300"
                )}
              >
                Mitra Kreasi Bersama
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    solid
                      ? active
                        ? "bg-sky/10 text-sky-dark"
                        : "text-slate-600 hover:bg-slate-100 hover:text-navy"
                      : active
                        ? "bg-white/15 text-white"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant={solid ? "accent" : "white"}
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
            <button
              type="button"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
                solid
                  ? "text-navy hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              )}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t",
          open
            ? "max-h-[min(100vh,560px)] border-border bg-white opacity-100"
            : "max-h-0 border-transparent opacity-0"
        )}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                    active
                      ? "bg-sky/10 text-sky-dark"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild variant="accent" className="mt-3 w-full">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
