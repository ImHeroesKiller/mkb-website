import { CLIENTS } from "@/lib/constants";
import { Container } from "@/components/shared/container";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Dipercaya brand-brand terkemuka Indonesia
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex h-16 items-center justify-center rounded-xl border border-border bg-slate-50 px-3 transition-colors hover:border-sky/30 hover:bg-sky/5"
              title={client.category}
            >
              <span className="text-center text-sm font-bold tracking-tight text-navy/70">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
