/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

// eslint-disable-next-line prettier/prettier
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Clarity, built through systems" },
      {
        name: "description",
        content:
          "Web developer and IT programmer focused on building structured, reliable, and scalable digital products — clear, efficient, and purposeful.",
      },
      { property: "og:title", content: "About — Clarity, built through systems" },
      {
        property: "og:description",
        content:
          "Web developer and IT programmer building systems that feel simple, even when they are not.",
      },
    ],
  }),
  component: AboutPage,
});

const focus = [
  { k: "Focus", v: "Web & Systems" },
  { k: "Stack", v: "Laravel · React" },
  { k: "Mobile", v: "Android · MVVM" },
  { k: "Care for", v: "Clarity" },
];

const timeline = [
  {
    year: "Internship",
    role: "IT Programmer · KATADATA",
    note: "Developed an interactive front-end interface to visualize traffic congestion in the Simatupang area, focusing on clarity, usability, and real-time data presentation. Collaborated on data-driven features that help users interpret complex information through intuitive UI and structured visualization.",
  },
  {
    year: "Internship",
    role: "Web Developer · Pustekinfo DPR-RI",
    note: "Built a recommendation-based web system for inter-parliamentary cooperation using Laravel and MySQL. Designed and implemented structured workflows to improve administrative efficiency and data management, ensuring reliability and scalability of internal processes.",
  },
  {
    year: "Apprenticeship",
    role: "Mobile Android Developer · Infinite Learning",
    note: "Developed multiple Android applications using modern architecture patterns (MVVM), focusing on UI/UX consistency and application performance. Gained experience across full development cycles — from interface design to implementation and testing.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Clarity, built through systems."
        lead="I'm a web developer and IT programmer focused on building structured, reliable, and scalable digital products. I care not only about how systems work, but how they are experienced — clear, efficient, and purposeful."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="col-span-12 md:col-span-7 space-y-5 text-[17px] leading-relaxed text-ink">
            <Reveal as="p">
              My work sits between engineering and usability: designing backend logic, shaping
              frontend interactions, and ensuring data flows the way it should.
            </Reveal>
            <Reveal as="p" delay={0.05}>
              I&apos;ve contributed to internal systems, dashboards, and data-driven platforms —
              where clarity, performance, and maintainability matter more than noise.
            </Reveal>
            <Reveal as="p" delay={0.1} className="text-ink-soft">
              I&apos;m most engaged when solving real problems through clean architecture and
              thoughtful implementation — building systems that feel simple, even when they are not.
            </Reveal>
          </div>

          {/* Highlights */}
          <aside className="col-span-12 md:col-span-5">
            <Reveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-6">At a glance</p>
            </Reveal>
            <ul className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {focus.map((h, i) => (
                <Reveal key={h.k} as="li" delay={0.05 * i} className="bg-card p-6">
                  <p className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                    {h.v}
                  </p>
                  <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-ink-soft">{h.k}</p>
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
              Experience
            </p>
          </Reveal>

          <ol className="relative border-l border-border pl-8 md:pl-12 space-y-12">
            {timeline.map((t, i) => (
              <Reveal key={t.role} as="li" delay={i * 0.05} className="relative">
                <span className="absolute -left-[37px] md:-left-[49px] top-2 inline-flex h-2.5 w-2.5 rounded-full bg-wash ring-4 ring-background" />
                <p className="text-[11px] tracking-[0.25em] uppercase text-ink-soft">{t.year}</p>
                <p className="mt-2 text-2xl md:text-3xl font-medium tracking-tight text-ink">
                  {t.role}
                </p>
                <p className="mt-3 max-w-2xl text-ink-soft text-[15px] leading-relaxed">{t.note}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
