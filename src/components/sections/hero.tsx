"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import { SITE_CONFIG, STATS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden gradient-hero pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute -right-32 top-24 h-[28rem] w-[28rem] rounded-full bg-sky/20 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-sky-light backdrop-blur-sm"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Dipercaya brand FMCG sejak {SITE_CONFIG.foundedYear}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
            >
              Mitra Strategis{" "}
              <span className="bg-gradient-to-r from-sky-light to-sky bg-clip-text text-transparent">
                Manpower & Brand Activation
              </span>{" "}
              FMCG
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              {SITE_CONFIG.name} menghadirkan tenaga lapangan profesional,
              eksekusi aktivasi merek yang terukur, dan sistem{" "}
              <strong className="font-semibold text-white">JUPITER</strong>{" "}
              untuk real-time field reporting di seluruh Indonesia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">
                  Konsultasi Gratis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline-white" size="lg">
                <Link href="/technology">
                  <PlayCircle className="h-4 w-4" />
                  Lihat JUPITER
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-left">
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-sky-light">
                    Live Dashboard
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    JUPITER Overview
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Active Field Force", value: "1.248", trend: "+12%" },
                  { label: "Outlet Visited Today", value: "3.902", trend: "+8%" },
                  { label: "Attendance Rate", value: "97.4%", trend: "+1.2%" },
                  { label: "Photo Evidence", value: "8.651", trend: "+18%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-[11px] text-slate-400">{item.label}</p>
                    <div className="mt-2 flex items-end justify-between gap-2">
                      <p className="text-xl font-bold text-white">{item.value}</p>
                      <span className="text-[10px] font-medium text-emerald-400">
                        {item.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs text-slate-400">Coverage Performance</p>
                  <p className="text-xs font-medium text-sky-light">This week</p>
                </div>
                <div className="flex h-20 items-end gap-1.5">
                  {[40, 55, 48, 70, 62, 85, 78, 92, 88, 95, 90, 98].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-sky/40 to-sky"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-white/10 bg-navy-light/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <p className="text-xs text-slate-400">National Reach</p>
              <p className="text-sm font-semibold text-white">
                30+ Kota · 5 Pulau Besar
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
