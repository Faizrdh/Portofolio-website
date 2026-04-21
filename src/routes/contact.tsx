import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Faiz Ridho" },
      {
        name: "description",
        content:
          "Let's build something impactful together. Email, LinkedIn, GitHub, and current availability.",
      },
      { property: "og:title", content: "Contact — Faiz Ridho" },
      {
        property: "og:description",
        content: "Let's build something impactful together.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email", value: "faizridho.work@gmail.com", href: "mailto:faizridho.work@gmail.com" },
  { label: "LinkedIn", value: "/in/faiz-ridho-90573917a", href: "https://www.linkedin.com/in/faiz-ridho-90573917a/" },
  { label: "GitHub", value: "@Faizrdh", href: "https://github.com/Faizrdh" },
];

function ContactPage() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-24 ink-gradient grain overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-8 inline-flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-wash/60" />
            Contact
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="text-balance font-semibold tracking-tight text-ink leading-[0.98] text-[clamp(2.5rem,8vw,7rem)] max-w-5xl">
            Let&apos;s build something{" "}
            <span className="italic font-light text-wash">impactful</span> together.
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-10 max-w-xl text-ink-soft text-lg leading-relaxed text-balance">
            I&apos;m taking on a small number of projects for Q2 — product
            partnerships, design system work, and the occasional editorial
            build.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <motion.a
            href="mailto:faizridho.work@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="group mt-12 inline-flex items-center gap-4 rounded-full bg-ink text-paper pl-8 pr-3 py-3 text-[14px] tracking-[0.15em] uppercase"
          >
            Start a conversation
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:rotate-[-25deg]">
              →
            </span>
          </motion.a>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border max-w-4xl">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.05 * i}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="group block bg-card p-7 h-full transition-colors hover:bg-secondary"
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-ink-soft">
                  {c.label}
                </p>
                <p className="mt-3 text-lg text-ink flex items-center gap-2">
                  <span className="link-underline">{c.value}</span>
                  <span className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-wash">
                    ↗
                  </span>
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
