import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { TechLogo } from "@/components/tech-logo";
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

const accentBg: Record<Project["accent"], string> = {
  a: "from-wash/35 via-wash/10 to-transparent",
  b: "from-[oklch(0.7_0.04_70)]/35 via-wash/10 to-transparent",
  c: "from-[oklch(0.7_0.05_180)]/30 via-wash/10 to-transparent",
  d: "from-[oklch(0.6_0.05_30)]/30 via-wash/10 to-transparent",
};

const processSteps = [
  {
    n: "01",
    label: "Discover",
    title: "Understand the real problem",
    body: "Stakeholder interviews, audits of the existing flow, and quiet observation of how people actually use the system day-to-day.",
  },
  {
    n: "02",
    label: "Define",
    title: "Frame the constraints",
    body: "Translate fuzzy goals into a small set of measurable outcomes. Decide what we will not build — that's where most of the value lives.",
  },
  {
    n: "03",
    label: "Design",
    title: "Prototype, in code",
    body: "Move fast in low-fi, then jump straight into real components. Real type, real data, real states — no pixel theatre.",
  },
  {
    n: "04",
    label: "Deliver",
    title: "Ship, measure, refine",
    body: "Launch behind a flag, instrument what matters, and iterate weekly with the team until the numbers move.",
  },
];

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const reduce = useReducedMotion();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];

  return (
    <article className="relative">
      {/* HERO */}
      <header className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28 border-b border-border">
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br ${accentBg[project.accent]} opacity-90`}
        />
        <div aria-hidden className="absolute inset-0 grain opacity-70" />
        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-[40vmax] w-[40vmax] rounded-full bg-wash/15 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Link
              to="/projects"
              className="text-[11px] tracking-[0.3em] uppercase text-wash inline-flex items-center gap-3 mb-10 hover:text-ink transition-colors"
            >
              <span className="inline-block h-px w-8 bg-wash/60" /> All work
            </Link>
          </Reveal>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-9">
              <Reveal delay={0.05}>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-balance text-5xl md:text-7xl font-semibold tracking-tight text-ink leading-[1.02]">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed text-balance">
                  {project.tagline}
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-3 text-right hidden md:block">
              <p className="text-[10px] tracking-[0.3em] uppercase text-wash">Case study</p>
              <p className="mt-2 text-7xl font-light text-ink/30 leading-none">
                {String(idx + 1).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* Meta strip */}
          <Reveal delay={0.2}>
            <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {[
                { k: "Client", v: project.client },
                { k: "Role", v: project.role },
                { k: "Year", v: project.year },
                { k: "Discipline", v: project.tags.join(" · ") },
              ].map((m) => (
                <div key={m.k} className="bg-card/80 backdrop-blur p-5 md:p-6">
                  <dt className="text-[10px] tracking-[0.25em] uppercase text-ink-soft">
                    {m.k}
                  </dt>
                  <dd className="mt-2 text-ink text-[15px]">{m.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid grid-cols-12 gap-10 md:gap-16">
        <Section label="Problem" title="What wasn't working" body={project.problem} />
        <Section label="Solution" title="What we changed" body={project.solution} />
      </section>

      {/* PROJECT BRIEF — narrative + meta */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid grid-cols-12 gap-10 md:gap-16">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-wash sticky top-28 inline-flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-wash/60" /> Overview
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink max-w-3xl text-balance">
                The story behind the build.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-ink-soft max-w-3xl">
                {project.details.overview}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border max-w-3xl">
                {[
                  { k: "Duration", v: project.details.duration },
                  { k: "Team", v: project.details.team },
                  { k: "Year", v: project.year },
                ].map((m) => (
                  <div key={m.k} className="bg-card p-5 md:p-6">
                    <dt className="text-[10px] tracking-[0.25em] uppercase text-ink-soft">
                      {m.k}
                    </dt>
                    <dd className="mt-2 text-ink text-[15px]">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid grid-cols-12 gap-10 md:gap-16">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-wash sticky top-28 inline-flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-wash/60" /> Challenges
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink max-w-2xl text-balance mb-12">
                The constraints that shaped every decision.
              </h2>
            </Reveal>
            <ul className="space-y-6">
              {project.details.challenges.map((c, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <li className="flex gap-5 items-start border-b border-border pb-6 last:border-0">
                    <span className="shrink-0 mt-1 text-[10px] tracking-[0.25em] text-wash font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[17px] leading-relaxed text-ink max-w-3xl">{c}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="flex items-end justify-between gap-6 mb-14">
            <Reveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-wash inline-flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-wash/60" /> Key features
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-ink max-w-2xl text-balance">
                What we built, and why it mattered.
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {project.details.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <article className="group relative h-full rounded-3xl border border-border bg-card p-7 md:p-9 overflow-hidden transition-colors hover:bg-secondary/40">
                  <div
                    aria-hidden
                    className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${accentBg[project.accent]} opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-wash mb-4">
                      0{i + 1}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-4 text-ink-soft text-[15px] leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* VISUAL FEATURE */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-4 inline-flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-wash/60" /> In situ
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink max-w-2xl text-balance">
              The interface, distilled.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-12 gap-4 md:gap-6">
            {/* Big frame */}
            <Reveal delay={0.05} className="col-span-12 md:col-span-8">
              <div
                className={`relative aspect-[16/10] rounded-3xl overflow-hidden border border-border bg-gradient-to-br ${accentBg[project.accent]}`}
              >
                <div className="absolute inset-0 grain opacity-80" />
                <div className="absolute inset-6 rounded-2xl border border-ink/10 bg-paper/50 backdrop-blur-sm flex flex-col">
                  <div className="flex items-center gap-1.5 p-4 border-b border-ink/5">
                    <span className="h-2 w-2 rounded-full bg-ink/15" />
                    <span className="h-2 w-2 rounded-full bg-ink/15" />
                    <span className="h-2 w-2 rounded-full bg-ink/15" />
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-3 p-6">
                    <div className="col-span-1 space-y-2">
                      <div className="h-2 w-3/4 rounded-full bg-ink/15" />
                      <div className="h-2 w-1/2 rounded-full bg-ink/10" />
                      <div className="h-2 w-2/3 rounded-full bg-ink/10" />
                      <div className="mt-6 h-24 rounded-xl bg-ink/5" />
                    </div>
                    <div className="col-span-2 space-y-3">
                      <div className="h-3 w-1/3 rounded-full bg-ink/20" />
                      <div className="h-2 w-full rounded-full bg-ink/10" />
                      <div className="h-2 w-5/6 rounded-full bg-ink/10" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-lg bg-wash/20" />
                        <div className="h-16 rounded-lg bg-wash/15" />
                        <div className="h-16 rounded-lg bg-wash/25" />
                      </div>
                      <div className="mt-3 h-10 rounded-lg bg-ink/5" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Side stack */}
            <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
              <Reveal delay={0.1}>
                <div
                  className={`relative aspect-[4/3] md:aspect-auto md:h-[calc(50%-12px)] rounded-3xl overflow-hidden border border-border bg-gradient-to-tr ${accentBg[project.accent]}`}
                >
                  <div className="absolute inset-0 grain opacity-70" />
                  <div className="absolute inset-5 rounded-2xl border border-ink/10 bg-paper/40 backdrop-blur-sm p-5 flex flex-col justify-end">
                    <div className="h-1.5 w-12 rounded-full bg-wash/60" />
                    <div className="mt-3 h-2 w-full rounded-full bg-ink/15" />
                    <div className="mt-1.5 h-2 w-2/3 rounded-full bg-ink/10" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div
                  className={`relative aspect-[4/3] md:aspect-auto md:h-[calc(50%-12px)] rounded-3xl overflow-hidden border border-border bg-gradient-to-bl ${accentBg[project.accent]}`}
                >
                  <div className="absolute inset-0 grain opacity-70" />
                  <div className="absolute inset-5 rounded-2xl border border-ink/10 bg-paper/40 backdrop-blur-sm p-5 grid place-items-center">
                    <p className="text-3xl font-light text-ink/60 tracking-tight italic">
                      “quiet”
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10 md:gap-16">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-wash sticky top-28 inline-flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-wash/60" /> Process
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink max-w-2xl text-balance mb-12">
                A small, deliberate loop — repeated until the system feels obvious.
              </h2>
            </Reveal>
            <ol className="relative border-l border-border pl-8 md:pl-10 space-y-10">
              {processSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <li className="relative">
                    <span className="absolute -left-[42px] md:-left-[50px] top-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-paper border border-border text-[10px] tracking-[0.2em] text-ink-soft">
                      {s.n}
                    </span>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-wash mb-2">
                      {s.label}
                    </p>
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-ink-soft text-[16px] leading-relaxed max-w-2xl">
                      {s.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32 text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-8">
              On the work
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <blockquote className="text-balance text-3xl md:text-5xl font-light tracking-tight text-ink leading-tight">
              <span className="italic font-light text-wash">“</span>
              {project.solution}
              <span className="italic font-light text-wash">”</span>
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-[11px] tracking-[0.3em] uppercase text-ink-soft">
              {project.client} · {project.year}
            </p>
          </Reveal>
        </div>
      </section>

      {/* STACK + IMPACT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid grid-cols-12 gap-10 md:gap-16">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-4 inline-flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-wash/60" /> Toolkit
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink max-w-md text-balance">
              Built with tools that get out of the way.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-10 grid grid-cols-2 gap-3">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-paper border border-border text-ink">
                    <TechLogo name={s} className="h-4 w-4" />
                  </span>
                  <span className="text-[14px] text-ink">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-7">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-4 inline-flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-wash/60" /> Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink max-w-md text-balance">
              Numbers that moved, after launch.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {project.impact.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05} className="bg-card p-8">
                <p className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">
                  {m.value}
                </p>
                <p className="mt-3 text-[11px] tracking-[0.25em] uppercase text-ink-soft">
                  {m.label}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="mt-10 text-[17px] leading-relaxed text-ink-soft max-w-2xl">
              {project.details.outcome}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PREV / NEXT */}
      <nav className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-none md:rounded-3xl overflow-hidden border-y md:border border-border">
          <Link
            to="/projects/$slug"
            params={{ slug: prev.slug }}
            className="group bg-card p-8 md:p-10 hover:bg-secondary/60 transition-colors"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-wash mb-3 inline-flex items-center gap-2">
              <span className="inline-block transition-transform duration-500 group-hover:-translate-x-1">
                ←
              </span>
              Previous
            </p>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight text-ink group-hover:text-wash transition-colors">
              {prev.title}
            </p>
            <p className="mt-2 text-ink-soft text-[14px]">{prev.tagline}</p>
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group bg-card p-8 md:p-10 text-right hover:bg-secondary/60 transition-colors"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-wash mb-3 inline-flex items-center gap-2 justify-end w-full">
              Next
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </p>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight text-ink group-hover:text-wash transition-colors">
              {next.title}
            </p>
            <p className="mt-2 text-ink-soft text-[14px]">{next.tagline}</p>
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-20 text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-wash-deep transition-colors"
          >
            Have a project like this?
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </nav>
    </article>
  );
}

function Section({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <>
      <div className="col-span-12 md:col-span-3">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-wash sticky top-28 inline-flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-wash/60" /> {label}
          </p>
        </Reveal>
      </div>
      <div className="col-span-12 md:col-span-9 mb-4">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-ink text-balance">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-5 text-[17px] md:text-[18px] leading-relaxed text-ink-soft max-w-2xl">
            {body}
          </p>
        </Reveal>
      </div>
    </>
  );
}
