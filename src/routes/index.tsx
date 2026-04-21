/* eslint-disable prettier/prettier */

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Faiz Ridho — Web Developer" },
      {
        name: "description",
        content:
          "Calm, considered digital products. Selected work for fintech, editorial, and healthcare clients.",
      },
      { property: "og:title", content: "Faiz Ridho — Web Developer" },
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

// ─── Handwriting Title ────────────────────────────────────────────────────────
//
// Teknik:
//   - <span invisible> sebagai placeholder layout → tinggi baris benar, tidak overlap
//   - <svg absolute> overlay di atasnya → hanya untuk animasi, tidak ganggu layout
//
// Urutan animasi per baris:
//   1. strokeDashoffset DASH→0     : stroke "menulis" dari kiri ke kanan
//   2. fillOpacity      0→1        : fill muncul saat stroke ~60% selesai
//   3. strokeOpacity    1→0        : stroke hilang sepenuhnya → tidak ada blue shadow

function HandwriteTitle() {
  const reduce = useReducedMotion();
  const DASH = 8000;
  const ease = [0.22, 1, 0.36, 1] as const;

  const mkAnim = (delay: number, duration = 1.4) => {
    if (reduce) {
      return {
        initial: { strokeDashoffset: 0, strokeDasharray: DASH, fillOpacity: 1, strokeOpacity: 0 },
        animate: { strokeDashoffset: 0, fillOpacity: 1, strokeOpacity: 0 },
        transition: {},
      };
    }
    return {
      initial: {
        strokeDashoffset: DASH,
        strokeDasharray: DASH,
        fillOpacity: 0,
        strokeOpacity: 1,
      },
      animate: {
        strokeDashoffset: 0,
        fillOpacity: 1,
        strokeOpacity: 0,
      },
      transition: {
        strokeDashoffset: {
          duration,
          delay,
          ease,
        },
        // Fill muncul setelah stroke ~60% jalan → transisi yang smooth
        fillOpacity: {
          duration: 0.5,
          delay: delay + duration * 0.6,
          ease: "easeIn",
        },
        // Stroke hilang segera setelah fill penuh → tidak ada outline/shadow tersisa
        strokeOpacity: {
          duration: 0.15,
          delay: delay + duration * 0.9,
        },
      },
    };
  };

  const textStyle = {
    fontFamily: "inherit",
    fontSize: "clamp(2.5rem, 8vw, 7rem)",
    letterSpacing: "-0.02em",
  };

  return (
    <h1
      aria-label="Clarity, built through systems."
      className="font-semibold tracking-tight text-ink leading-[0.95] text-[clamp(2.5rem,8vw,7rem)]"
    >
      {/* ── Baris 1 ────────────────────────────────────────────────────── */}
      <span className="relative block">
        {/* Placeholder invisible: menentukan tinggi baris, tidak terlihat user */}
        <span aria-hidden className="invisible select-none block">
          Clarity,
        </span>
        {/* SVG overlay: animasi saja, absolute di atas placeholder */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none"
          overflow="visible"
        >
          <motion.text
            y="0.87em"
            fill="var(--color-ink)"
            stroke="var(--color-ink)"
            strokeWidth={0.8}
            strokeLinejoin="round"
            strokeLinecap="round"
            fontWeight={600}
            style={textStyle}
            {...mkAnim(0.1, 1.2)}
          >
            Clarity,
          </motion.text>
        </svg>
      </span>

      {/* ── Baris 2 ────────────────────────────────────────────────────── */}
      <span className="relative block">
        {/* Placeholder: termasuk italic/light agar lebar cocok dengan SVG */}
        <span aria-hidden className="invisible select-none block">
          built through{" "}
          <span className="italic font-light">systems.</span>
        </span>
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none"
          overflow="visible"
        >
         
          <motion.text
            y="0.87em"
            fill="var(--color-ink)"
            stroke="var(--color-ink)"
            strokeWidth={0.8}
            strokeLinejoin="round"
            strokeLinecap="round"
            fontWeight={600}
            style={textStyle}
            {...mkAnim(0.85, 1.9)}
          >
            built through{" "}
            <tspan
              fontStyle="italic"
              fontWeight={300}
              fill="var(--color-wash)"
              stroke="var(--color-wash)"
            >
              systems.
            </tspan>
          </motion.text>
        </svg>
      </span>
    </h1>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden grain pt-28">

      {/* Soft animated wash blobs */}
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

            {/* Label Portfolio · 2025 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="text-[11px] tracking-[0.3em] uppercase text-wash mb-8 inline-flex items-center gap-3"
            >
              <span className="inline-block h-px w-10 bg-wash/60" />
              Portfolio · 2026
            </motion.p>

            {/* ── Handwriting Title ── */}
            <HandwriteTitle />

            {/* Paragraph: muncul setelah animasi judul selesai */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.1, ease }}
              className="mt-10 max-w-xl text-ink-soft text-lg md:text-xl leading-relaxed text-balance"
            >
              A web developer and IT programmer building structured, reliable,
              and scalable digital products — where clarity and purpose matter
              more than noise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.35, ease }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper px-6 py-3.5 text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-wash"
              >
                View projects
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
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
        transition={{ delay: 3.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-ink-soft"
      >
      </motion.div>
    </section>
  );
}

// ─── Selected Work ────────────────────────────────────────────────────────────

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
            <Link
              to="/projects"
              className="hidden md:inline-flex link-underline text-ink text-[15px]"
            >
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

// ─── Marquee ──────────────────────────────────────────────────────────────────

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