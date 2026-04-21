/* eslint-disable prettier/prettier */
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Faiz Ridho" }] };
    return {
      meta: [
        { title: `${p.title} — Case Study · Faiz Ridho` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.title} — Case Study` },
        { property: "og:description", content: p.tagline },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 pt-44 pb-32 text-center">
      <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-6">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-ink">
        That project doesn&apos;t exist.
      </h1>
      <p className="mt-3 text-ink-soft">It may have been renamed or unpublished.</p>
      <Link to="/projects" className="mt-8 inline-block link-underline text-ink">
        ← Back to all work
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 pt-44 pb-32 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Something broke.</h1>
      <p className="mt-3 text-ink-soft">{error.message}</p>
      <Link to="/projects" className="mt-8 inline-block link-underline text-ink">
        ← Back to all work
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      {/* Hero */}
      <header className="pt-36 md:pt-44 pb-16 md:pb-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Link to="/projects" className="text-[11px] tracking-[0.3em] uppercase text-wash inline-flex items-center gap-3 mb-8">
              <span className="inline-block">←</span> All work
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-5xl md:text-7xl font-semibold tracking-tight text-ink leading-[1.02]">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed text-balance">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {[
                { k: "Client", v: project.client },
                { k: "Role", v: project.role },
                { k: "Year", v: project.year },
                { k: "Discipline", v: project.tags.join(" · ") },
              ].map((m) => (
                <div key={m.k} className="bg-card p-5 md:p-6">
                  <dt className="text-[10px] tracking-[0.25em] uppercase text-ink-soft">{m.k}</dt>
                  <dd className="mt-2 text-ink text-[15px]">{m.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid grid-cols-12 gap-10 md:gap-16">
        <Section label="Problem" title="What wasn't working" body={project.problem} />
        <Section label="Solution" title="What we changed" body={project.solution} />

        <div className="col-span-12 md:col-start-4 md:col-span-9">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-4">Stack</p>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-[13px] text-ink"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-start-4 md:col-span-9 mt-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-4">Impact</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {project.impact.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05} className="bg-card p-8">
                <p className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">
                  {m.value}
                </p>
                <p className="mt-2 text-[11px] tracking-[0.25em] uppercase text-ink-soft">
                  {m.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Next */}
      <nav className="border-t border-border">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group block py-16 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-3">Next</p>
              <p className="text-3xl md:text-5xl font-semibold tracking-tight text-ink transition-colors group-hover:text-wash">
                {next.title}
              </p>
            </div>
            <span className="text-2xl md:text-4xl text-ink transition-transform duration-500 group-hover:translate-x-3">
              →
            </span>
          </div>
        </Link>
      </nav>
    </article>
  );
}

function Section({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <>
      <div className="col-span-12 md:col-span-3">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-wash sticky top-28">
            {label}
          </p>
        </Reveal>
      </div>
      <div className="col-span-12 md:col-span-9 mb-16">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-ink text-balance">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft max-w-2xl">
            {body}
          </p>
        </Reveal>
      </div>
    </>
  );
}
