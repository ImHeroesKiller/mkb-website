"use client";

import dynamic from "next/dynamic";

const CoverageMap = dynamic(
  () =>
    import("@/components/coverage/coverage-map").then((m) => m.CoverageMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[420px] w-full items-center justify-center rounded-2xl border border-border bg-slate-100 sm:h-[520px]">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-sky border-t-transparent" />
          <p className="mt-3 text-sm text-muted-foreground">Memuat peta...</p>
        </div>
      </div>
    ),
  }
);

export function CoverageMapLoader() {
  return <CoverageMap />;
}
