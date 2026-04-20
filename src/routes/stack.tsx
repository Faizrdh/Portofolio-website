import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — Aiden Mori" },
      {
        name: "description",
        content:
          "Tools and technologies I reach for, grouped by intent. Frontend, backend, design, and the quiet glue.",
      },
      { property: "og:title", content: "Stack — Aiden Mori" },
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
      { name: "Astro", role: "Content-first sites" },
      { name: "Tailwind CSS", role: "Tokens, not opinions" },
      { name: "Framer Motion", role: "Restrained motion" },
    ],
  },
  {
    label: "Backend",
    note: "Where the data lives.",
    items: [
      { name: "Node.js", role: "Default runtime" },
      { name: "tRPC", role: "Typed end-to-end" },
      { name: "PostgreSQL", role: "Boring, durable" },
      { name: "Supabase", role: "Auth + DB, fast" },
      { name: "Prisma", role: "Schema as source" },
      { name: "Stripe", role: "Money, handled" },
    ],
  },
  {
    label: "Design & Tools",
    note: "Where decisions are made.",
    items: [
      { name: "Figma", role: "Systems & flows" },
      { name: "Linear", role: "How work moves" },
      { name: "Notion", role: "Thinking out loud" },
      { name: "Raycast", role: "Hands on keyboard" },
      { name: "Playwright", role: "Trust, automated" },
      { name: "Vercel", role: "Ship without ceremony" },
    ],
  },
];

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
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className="group relative bg-card p-7 h-full overflow-hidden"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-wash/0 via-wash/0 to-wash/0 transition-colors duration-500 group-hover:from-wash/10 group-hover:to-transparent" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xl font-medium tracking-tight text-ink">
                          {it.name}
                        </p>
                        <p className="mt-1 text-[13px] text-ink-soft">{it.role}</p>
                      </div>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-ink-soft transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:text-wash">
                        ✦
                      </span>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
