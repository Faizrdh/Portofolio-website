import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aiden Mori" },
      {
        name: "description",
        content:
          "A short story about a designer-engineer who believes restraint is a feature. Background, focus, and strengths.",
      },
      { property: "og:title", content: "About — Aiden Mori" },
      {
        property: "og:description",
        content: "Designer-engineer. Restraint as a feature. A short story.",
      },
    ],
  }),
  component: AboutPage,
});

const highlights = [
  { k: "Years shipping", v: "9+" },
  { k: "Products in production", v: "27" },
  { k: "Teams led", v: "4" },
  { k: "Coffees / day", v: "2.5" },
];

const timeline = [
  {
    year: "2022 — Now",
    role: "Independent · Design & Engineering",
    note: "Partnering with founders and editors on calm, durable products.",
  },
  {
    year: "2019 — 2022",
    role: "Senior Product Designer · Northwind",
    note: "Built the design system that survived three rebrands and a merger.",
  },
  {
    year: "2016 — 2019",
    role: "Designer & Front-end · Atlas Media",
    note: "Reshaped a 90-year-old publication for the small screen.",
  },
  {
    year: "2014 — 2016",
    role: "Junior Designer · Studio Halcyon",
    note: "Learned that the best detail is the one nobody notices.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Restraint, used as a tool."
        lead="I'm Aiden — a designer and front-end engineer based in Lisbon. I work with founders, editors, and product teams who care as much about how a thing feels as what it does."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-10 md:gap-16">
          {/* Story */}
          <div className="col-span-12 md:col-span-7 space-y-8 text-[17px] leading-relaxed text-ink">
            <Reveal as="p">
              I grew up between two languages and a lot of paper. That probably
              explains the typography obsession, and the suspicion of any
              interface that talks more than it listens.
            </Reveal>
            <Reveal as="p" delay={0.05}>
              Today I lead small, senior teams through the messy middle of
              product work — research, systems, prototypes, and the engineering
              required to ship them. I&apos;m happiest when a product feels
              inevitable, like it could not have been any other way.
            </Reveal>
            <Reveal as="p" delay={0.1} className="text-ink-soft">
              I write occasionally about design systems, editorial layouts on
              the web, and the slow erosion of craft in software.
            </Reveal>
          </div>

          {/* Highlights */}
          <aside className="col-span-12 md:col-span-5">
            <Reveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-6">
                In numbers
              </p>
            </Reveal>
            <ul className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {highlights.map((h, i) => (
                <Reveal key={h.k} as="li" delay={0.05 * i} className="bg-card p-6">
                  <p className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
                    {h.v}
                  </p>
                  <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-ink-soft">
                    {h.k}
                  </p>
                </Reveal>
              ))}
            </ul>
          </aside>
        </div>

        {/* Timeline */}
        <div className="mt-28 md:mt-40">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-8 inline-flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-wash/60" />
              Trajectory
            </p>
          </Reveal>

          <ol className="relative border-l border-border pl-8 md:pl-12 space-y-12">
            {timeline.map((t, i) => (
              <Reveal key={t.year} as="li" delay={i * 0.05} className="relative">
                <span className="absolute -left-[37px] md:-left-[49px] top-2 inline-flex h-2.5 w-2.5 rounded-full bg-wash ring-4 ring-background" />
                <p className="text-[11px] tracking-[0.25em] uppercase text-ink-soft">
                  {t.year}
                </p>
                <p className="mt-2 text-2xl md:text-3xl font-medium tracking-tight text-ink">
                  {t.role}
                </p>
                <p className="mt-2 max-w-xl text-ink-soft text-[15px] leading-relaxed">
                  {t.note}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
