/* eslint-disable prettier/prettier */
// src/components/ProjectGrid.tsx
import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <section className="relative py-20 px-6">
      {/* Section heading */}
      <div className="mb-16 max-w-xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Karya Terpilih
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-foreground">
          Proyek yang pernah saya kerjakan
        </h2>
      </div>

      {/* Cards grid */}
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}