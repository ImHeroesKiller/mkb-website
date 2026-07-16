import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Mitra Kreasi Bersama | MKB - Manpower & Brand Activation",
  description: "Partner terpercaya dalam manpower outsourcing dan brand activation untuk sektor FMCG di Indonesia. Didukung teknologi real-time JUPITER.",
  icons: {
    icon: "/favicon.png",
    apple: "/logo-mkb.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
