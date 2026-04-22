/* eslint-disable prettier/prettier */

import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

const accents: Record<Project["accent"], string> = {
  a: "from-wash/30 via-wash/10 to-transparent",
  b: "from-[oklch(0.7_0.04_70)]/30 via-wash/10 to-transparent",
  c: "from-[oklch(0.7_0.05_180)]/25 via-wash/10 to-transparent",
  d: "from-[oklch(0.6_0.05_30)]/25 via-wash/10 to-transparent",
  e: "from-[oklch(0.65_0.14_290)]/30 via-[oklch(0.5_0.08_300)]/10 to-transparent",
};

const accentBg: Record<Project["accent"], string> = {
  a: "from-[oklch(0.42_0.05_245)] to-[oklch(0.32_0.06_255)]",
  b: "from-[oklch(0.45_0.06_70)] to-[oklch(0.35_0.07_60)]",
  c: "from-[oklch(0.40_0.07_180)] to-[oklch(0.30_0.08_190)]",
  d: "from-[oklch(0.38_0.07_30)] to-[oklch(0.28_0.08_20)]",
  e: "from-[oklch(0.32_0.16_290)] to-[oklch(0.20_0.18_305)]",
};


export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const inner = (
    // perspective wrapper — does NOT rotate, just creates 3D space
    <div style={{ perspective: "1200px" }}>
      <div className="flip-card">
        {/* ── FRONT (normal flow — establishes the container height) ── */}
        <article
          className="rounded-2xl border border-border bg-card overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Visual */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${accents[project.accent]}`} />
            <div className="absolute inset-0 grain" />
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <ProjectGlyph accent={project.accent} />
            )}
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
            <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{project.tagline}</p>
          </div>
        </article>

        {/* ── BACK (absolute — sits on top of front, hidden until flipped) ── */}
        <div
          className={`flip-card-back absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br ${accentBg[project.accent]} p-6 md:p-7 flex flex-col`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Subtle noise */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.15,
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between gap-3 mb-4">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">
                {project.role} · {project.year}
              </p>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white leading-tight">
                {project.title}
              </h3>
            </div>
            {project.url && (
              <span className="shrink-0 text-[10px] tracking-[0.2em] uppercase text-white/70 border border-white/30 rounded-full px-3 py-1">
                Live ↗
              </span>
            )}
          </div>

          <div className="relative z-10 h-px bg-white/15 mb-4" />

          {/* Problem */}
          <div className="relative z-10 mb-3">
            <p className="text-[9px] tracking-[0.25em] uppercase text-white/40 mb-1">about the project</p>
            <p className="text-[12px] md:text-[13px] text-white/80 leading-relaxed line-clamp-3">
              {project.about}
            </p>
          </div>

          {/* Solution */}
          <div className="relative z-10 mb-4">
            <p className="text-[9px] tracking-[0.25em] uppercase text-white/40 mb-1">Timeline</p>
            <p className="text-[12px] md:text-[13px] text-white/80 leading-relaxed line-clamp-3">
              {project.timeline}
            </p>
          </div>


          {/* Stack */}
          <div className="relative z-10 mt-auto flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] tracking-[0.15em] uppercase text-white/60 border border-white/20 rounded-full px-2.5 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }

  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="block">
      {inner}
    </Link>
  );
}

function ProjectGlyph({ accent }: { accent: Project["accent"] }) {
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={`g-${accent}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.6 0.035 245)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.6 0.035 245)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {accent === "a" && (
        <g stroke="oklch(0.3921 0.0933 156.52)" strokeWidth="1" fill="none" opacity="0.55">
          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={i} cx="200" cy="150" r={20 + i * 10} />
          ))}
        </g>
      )}
      {accent === "b" && (
        <g fill={`url(#g-${accent})`} stroke="oklch(0.3921 0.0933 156.52)" strokeWidth="0.75">
          <rect x="40" y="60" width="140" height="180" rx="2" />
          <rect x="200" y="100" width="160" height="140" rx="2" opacity="0.7" />
          <line x1="60" y1="90" x2="160" y2="90" stroke="oklch(0.38 0.01 250)" />
          <line x1="60" y1="110" x2="140" y2="110" stroke="oklch(0.55 0.01 250)" />
          <line x1="60" y1="125" x2="155" y2="125" stroke="oklch(0.55 0.01 250)" />
        </g>
      )}
      {accent === "c" && (
        <g stroke="oklch(0.3921 0.0933 156.52)" strokeWidth="1" fill="none">
          <path d="M0 220 Q 100 120, 200 200 T 400 180" opacity="0.7" />
          <path d="M0 240 Q 100 160, 200 230 T 400 210" opacity="0.5" />
          <path d="M0 260 Q 100 200, 200 250 T 400 240" opacity="0.3" />
        </g>
      )}
      {accent === "d" && (
        <g>
          <circle cx="160" cy="150" r="80" fill={`url(#g-${accent})`} />
          <circle cx="240" cy="150" r="80" fill={`url(#g-${accent})`} opacity="0.7" style={{ mixBlendMode: "multiply" }} />
        </g>
      )}
      {accent === "e" && (
        <g fill="none">
          {/* Stars scattered across the field */}
          {[
            [60, 50], [130, 80], [310, 40], [360, 90], [80, 140],
            [250, 70], [200, 200], [340, 180], [40, 230], [170, 260],
            [290, 240], [100, 280], [380, 260], [220, 120], [150, 180],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={i % 3 === 0 ? 2 : 1}
              fill="oklch(0.85 0.06 290)"
              opacity={0.3 + (i % 4) * 0.15}
            />
          ))}
          {/* Central planet ring */}
          <ellipse cx="200" cy="150" rx="55" ry="18" stroke="oklch(0.65 0.14 290)" strokeWidth="1" opacity="0.5" />
          <circle cx="200" cy="150" r="28" fill="oklch(0.28 0.16 300)" stroke="oklch(0.65 0.14 290)" strokeWidth="1" opacity="0.7" />
          {/* Orbit arc */}
          <ellipse cx="200" cy="150" rx="90" ry="30" stroke="oklch(0.6 0.10 290)" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.35" />
        </g>
      )}
    </svg>
  );
}