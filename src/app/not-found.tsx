import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-sky">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="accent">
            <Link href="/">
              <Home className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <ArrowLeft className="h-4 w-4" />
              Hubungi Kami
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
