/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
// src/components/ProjectCard.tsx
import React from "react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const accentMap = {
    a: {
      tag: "bg-blue-100 text-blue-800",
      overlay: "from-blue-600/80 via-blue-500/60 to-transparent",
    },
    b: {
      tag: "bg-sky-100 text-sky-800",
      overlay: "from-sky-700/80 via-sky-500/60 to-transparent",
    },
    c: {
      tag: "bg-violet-100 text-violet-800",
      overlay: "from-violet-700/80 via-violet-500/60 to-transparent",
    },
    d: {
      tag: "bg-emerald-100 text-emerald-800",
      overlay: "from-emerald-700/80 via-emerald-500/60 to-transparent",
    },
  };

  const accent = accentMap[project.accent] ?? accentMap["a"];

  return (
    // 1) Scene — sets up the 3D perspective space
    <div className="tourist-scene">
      {/* 2) Card — starts "lying flat", stands up on hover */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="tourist-card"
        aria-label={`Lihat proyek ${project.title}`}
      >
        {/* ── Image area ── */}
        <div className="relative h-[175px] w-full overflow-hidden bg-muted">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {project.client}
              </span>
            </div>
          )}

          {/* Gradient overlay at bottom of image */}
          <div
            className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${accent.overlay} pointer-events-none`}
          />
        </div>

        {/* ── Body area ── */}
        <div className="flex flex-col justify-between gap-2 bg-card px-4 py-3 h-[125px]">
          <div>
            <p className="text-[13px] font-semibold leading-snug text-card-foreground line-clamp-1">
              {project.title}
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground line-clamp-2">
              {project.tagline}
            </p>
          </div>

          <div className="flex items-end justify-between">
            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-2 py-0.5 text-[9px] font-medium tracking-wide uppercase ${accent.tag}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Role + Year */}
            <div className="text-right">
              <p className="text-[9px] font-medium uppercase tracking-wide text-muted-foreground">
                {project.role}
              </p>
              <p className="text-[9px] text-muted-foreground/60">{project.year}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}