import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

const accents: Record<Project["accent"], string> = {
  a: "from-wash/30 via-wash/10 to-transparent",
  b: "from-[oklch(0.7_0.04_70)]/30 via-wash/10 to-transparent",
  c: "from-[oklch(0.7_0.05_180)]/25 via-wash/10 to-transparent",
  d: "from-[oklch(0.6_0.05_30)]/25 via-wash/10 to-transparent",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group relative block"
    >
      <article className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_-30px_rgba(74,74,74,0.25)]">
        {/* Visual */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${accents[project.accent]}`} />
          <div className="absolute inset-0 grain" />
          <ProjectGlyph accent={project.accent} />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-end p-6 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/90 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.2em] text-paper">
              View case study
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </span>
          </div>

          <div className="absolute top-5 left-5 text-[11px] tracking-[0.25em] uppercase text-ink/70">
            {String(index + 1).padStart(2, "0")} / {project.year}
          </div>
        </div>

        {/* Meta */}
        <div className="p-6 md:p-7">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-ink">
              {project.title}
            </h3>
            <span className="text-[11px] tracking-[0.2em] uppercase text-ink-soft whitespace-nowrap">
              {project.tags[0]}
            </span>
          </div>
          <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </article>
    </Link>
  );
}

function ProjectGlyph({ accent }: { accent: Project["accent"] }) {
  return (
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id={`g-${accent}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.6 0.035 245)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.6 0.035 245)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {accent === "a" && (
        <g stroke="oklch(0.45 0.04 245)" strokeWidth="1" fill="none" opacity="0.55">
          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={i} cx="200" cy="150" r={20 + i * 10} />
          ))}
        </g>
      )}
      {accent === "b" && (
        <g fill={`url(#g-${accent})`} stroke="oklch(0.45 0.04 245)" strokeWidth="0.75">
          <rect x="40" y="60" width="140" height="180" rx="2" />
          <rect x="200" y="100" width="160" height="140" rx="2" opacity="0.7" />
          <line x1="60" y1="90" x2="160" y2="90" stroke="oklch(0.38 0.01 250)" />
          <line x1="60" y1="110" x2="140" y2="110" stroke="oklch(0.55 0.01 250)" />
          <line x1="60" y1="125" x2="155" y2="125" stroke="oklch(0.55 0.01 250)" />
        </g>
      )}
      {accent === "c" && (
        <g stroke="oklch(0.45 0.04 245)" strokeWidth="1" fill="none">
          <path d="M0 220 Q 100 120, 200 200 T 400 180" opacity="0.7" />
          <path d="M0 240 Q 100 160, 200 230 T 400 210" opacity="0.5" />
          <path d="M0 260 Q 100 200, 200 250 T 400 240" opacity="0.3" />
        </g>
      )}
      {accent === "d" && (
        <g>
          <circle cx="160" cy="150" r="80" fill={`url(#g-${accent})`} />
          <circle cx="240" cy="150" r="80" fill={`url(#g-${accent})`} opacity="0.7" mixBlendMode="multiply" />
        </g>
      )}
    </svg>
  );
}
