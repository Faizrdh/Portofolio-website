/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Work — Faiz Ridho" },
      {
        name: "description",
        content:
          "Case studies across fintech, website design, frontend, and brand. Problem, solution, stack, and measurable impact.",
      },
      { property: "og:title", content: "Selected Work — Faiz Ridho" },
      {
        property: "og:description",
        content: "Case studies with problem, solution, stack, and measurable impact.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="Case studies, told briefly."
        lead="Each project below is a small story: what wasn't working, what we changed, and what happened next. Click any card for the full case study."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
