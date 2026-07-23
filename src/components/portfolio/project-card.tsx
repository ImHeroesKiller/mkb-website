import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

interface ProjectCardProps {
  project: {
    slug: string;
    client: string;
    title: string;
    service: string;
    area: string;
    cover: string;
    brands: readonly string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:border-sky/30 hover:shadow-lg"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
        <Image
          src={project.cover}
          alt={`Dokumentasi proyek ${project.client}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
          {project.service}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-dark">
              {project.client}
            </p>
            <h3 className="mt-1.5 text-lg font-bold leading-snug text-navy">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-colors group-hover:text-sky" />
        </div>
        <p className="mt-3 line-clamp-1 text-sm text-muted-foreground">
          {project.brands.join(" · ")}
        </p>
        <div className="mt-4 flex items-start gap-2 border-t border-border pt-4 text-xs text-slate-500">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky" />
          <span>{project.area}</span>
        </div>
      </div>
    </Link>
  );
}
