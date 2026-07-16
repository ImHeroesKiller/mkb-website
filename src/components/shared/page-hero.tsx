import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
}

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden gradient-hero pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-sky/10 blur-3xl" />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {badge && (
            <Badge className="mb-4 border-sky/30 bg-sky/15 text-sky-light">
              {badge}
            </Badge>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
