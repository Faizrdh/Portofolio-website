import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aiden Mori — Product Designer & Engineer" },
      {
        name: "description",
        content:
          "Calm, considered digital products. Selected work for fintech, editorial, and healthcare clients.",
      },
      { property: "og:title", content: "Aiden Mori — Product Designer & Engineer" },
      {
        property: "og:description",
        content: "Calm, considered digital products. Selected work and case studies.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Marquee />
    </>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden ink-gradient grain pt-28">
      {/* Soft animated wash */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full bg-wash/15 blur-3xl"
            animate={{ x: [0, 40, -20, 0], y: [0, 20, -10, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-40 h-[55vmax] w-[55vmax] rounded-full bg-wash/10 blur-3xl"
            animate={{ x: [0, -30, 10, 0], y: [0, -20, 15, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full pb-20 md:pb-28">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-9">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="text-[11px] tracking-[0.3em] uppercase text-wash mb-8 inline-flex items-center gap-3"
            >
              <span className="inline-block h-px w-10 bg-wash/60" />
              Portfolio · 2025
            </motion.p>

            <h1 className="font-semibold tracking-tight text-ink leading-[0.95] text-[clamp(2.5rem,8vw,7rem)]">
              <RevealLine delay={0.05}>Clarity,</RevealLine>
              <RevealLine delay={0.18}>
                built through <span className="italic font-light text-wash">systems.</span>
              </RevealLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
              className="mt-10 max-w-xl text-ink-soft text-lg md:text-xl leading-relaxed text-balance"
            >
              A web developer and IT programmer building structured, reliable,
              and scalable digital products — where clarity and purpose matter
              more than noise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper px-6 py-3.5 text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-wash"
              >
                View projects
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/contact" className="link-underline text-ink text-[15px]">
                Or get in touch
              </Link>
            </motion.div>
          </div>

          <div className="hidden md:flex col-span-3 flex-col items-end gap-2 text-right text-[11px] tracking-[0.25em] uppercase text-ink-soft">
            <p>Jakarta · East Jakarta</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-ink-soft"
      >
        Scroll
      </motion.div>
    </section>
  );
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function SelectedWork() {
  const featured = projects.slice(0, 4);
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-14">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-wash inline-flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-wash/60" />
              Selected Work
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink max-w-2xl text-balance">
              A few things I&apos;ve been quietly proud of.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/projects" className="hidden md:inline-flex link-underline text-ink text-[15px]">
              All work →
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Calm interfaces",
    "Typographic systems",
    "Front-end engineering",
    "Design systems",
    "Editorial layouts",
    "Accessibility",
    "Performance",
    "Brand-led product",
  ];
  return (
    <section className="border-y border-border py-10 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap text-2xl md:text-3xl font-light tracking-tight text-ink-soft"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            {t}
            <span className="text-wash">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
