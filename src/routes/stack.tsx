/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { TechLogo } from "@/components/tech-logo";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — Faiz Ridho" },
      {
        name: "description",
        content:
          "Tools and technologies I reach for, grouped by intent. Frontend, backend, design, and the quiet glue.",
      },
      { property: "og:title", content: "Stack — Faiz Ridho" },
      {
        property: "og:description",
        content: "Tools grouped by intent: frontend, backend, design, and glue.",
      },
    ],
  }),
  component: StackPage,
});

const groups = [
  {
    label: "Frontend",
    note: "What ships to the browser.",
    items: [
      { name: "TypeScript", role: "Types as documentation" },
      { name: "React", role: "Composition over inheritance" },
      { name: "Next.js", role: "When SSR earns its keep" },
      { name: "Livewire", role: "Reactive Laravel UIs" },
      { name: "Tailwind CSS", role: "Tokens, not opinions" },
      { name: "Framer Motion", role: "Restrained motion" },
    ],
  },
  {
    label: "Backend",
    note: "Where the data lives.",
    items: [
      { name: "Node.js", role: "Default runtime" },
      { name: "Express", role: "Minimal, unopinionated" },
      { name: "PostgreSQL", role: "Boring, durable" },
      { name: "MySQL", role: "Relational workhorse" },
      { name: "Supabase", role: "Auth + DB, fast" },
      { name: "Prisma", role: "Schema as source" },
    ],
  },
  {
    label: "Design & Tools",
    note: "Where decisions are made.",
    items: [
      { name: "Figma", role: "Systems & flows" },
      { name: "Vercel", role: "Ship without ceremony" },
      { name: "Canva", role: "Quick visual drafts" },
    ],
  },
];

// ─── Tilt + Glow Card ────────────────────────────────────────────────────────
function StackCard({ name, role }: { name: string; role: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spotlight gradient follows the cursor inside the card
  const spotlightX = useTransform(mouseX, (v) => `${v}px`);
  const spotlightY = useTransform(mouseY, (v) => `${v}px`);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    // reset to center so spotlight fades gracefully
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={false}
      whileHover="hovered"
      className="group relative bg-card p-7 h-full overflow-hidden cursor-default"
      style={{
        // Smooth lift + shadow on hover via CSS
        transition:
          "box-shadow 0.35s cubic-bezier(.22,.68,0,1.2), transform 0.25s cubic-bezier(.22,.68,0,1.2)",
      }}
      variants={{
        hovered: {
          y: -3,
          boxShadow:
            "0 0 0 1.5px oklch(65% 0.08 60 / 0.55), 0 8px 32px -4px oklch(65% 0.1 60 / 0.22), 0 2px 8px -2px oklch(65% 0.08 60 / 0.14)",
        },
      }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
    >
      {/* ── Cursor-chasing spotlight ────────────────────────────────────── */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(260px circle at ${spotlightX} ${spotlightY}, oklch(75% 0.09 70 / 0.13), transparent 70%)`,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Top-edge shimmer line ───────────────────────────────────────── */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(70%_0.10_60)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60"
      />

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">

          {/* Icon wrapper: warm fill on hover */}
          <motion.span
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-paper text-ink"
            variants={{
              hovered: {
                backgroundColor: "oklch(96% 0.04 70)",
                borderColor: "oklch(70% 0.10 60 / 0.5)",
                color: "oklch(45% 0.10 55)",
              },
            }}
            transition={{ duration: 0.25 }}
          >
            <TechLogo name={name} className="h-6 w-6" />
          </motion.span>

          <div>
            {/* Name: subtle warm shift */}
            <motion.p
              className="text-xl font-medium tracking-tight text-ink"
              variants={{
                hovered: { color: "oklch(28% 0.05 50)" },
              }}
              transition={{ duration: 0.2 }}
            >
              {name}
            </motion.p>

            {/* Role: fade in slightly more visible */}
            <motion.p
              className="mt-1 text-[13px] text-ink-soft"
              variants={{
                hovered: { opacity: 1, color: "oklch(42% 0.04 50)" },
              }}
              transition={{ duration: 0.2 }}
            >
              {role}
            </motion.p>
          </div>
        </div>

        {/* Decorative ✦ — spins a tiny bit and warms up */}
        <motion.span
          className="text-[10px] tracking-[0.25em] uppercase text-ink-soft"
          variants={{
            hovered: {
              rotate: 45,
              color: "oklch(62% 0.12 60)",
              scale: 1.2,
            },
          }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
        >
          ✦
        </motion.span>
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
function StackPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stack"
        title="A small toolkit, used carefully."
        lead="I tend to choose boring tools and use them well. Below: what I reach for, grouped by intent rather than vendor."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32 space-y-24">
        {groups.map((g, gi) => (
          <div key={g.label}>
            <div className="grid grid-cols-12 gap-6 mb-10">
              <Reveal className="col-span-12 md:col-span-4">
                <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-3 inline-flex items-center gap-3">
                  <span className="inline-block h-px w-8 bg-wash/60" />
                  0{gi + 1}
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
                  {g.label}
                </h2>
                <p className="mt-3 text-ink-soft text-[15px]">{g.note}</p>
              </Reveal>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {g.items.map((it, i) => (
                <Reveal key={it.name} as="li" delay={i * 0.03}>
                  <StackCard name={it.name} role={it.role} />
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}