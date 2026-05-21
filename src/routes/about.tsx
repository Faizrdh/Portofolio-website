/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/reveal";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Users, Zap, Clock, Sparkles } from "lucide-react";
import profile from "@/assets/Pas foto (2).png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Faiz Ridho" },
      {
        name: "description",
        content:
          "Web developer and IT programmer focused on building structured, reliable, and scalable digital products — clear, efficient, and purposeful.",
      },
      { property: "og:title", content: "About — Faiz Ridho" },
      {
        property: "og:description",
        content:
          "Web developer and IT programmer building systems that feel simple, even when they are not.",
      },
    ],
  }),
  component: AboutPage,
});

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/faiz-ridho-90573917a/",
    color: "#0077b5",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Faizrdh",
    color: "#24292e",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:faizridho.work@gmail.com",
    color: "#6D8196",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/faiz.rdh/",
    color: "#E1306C",
  },
];

const traits = [
  {
    icon: Sparkles,
    title: "Adaptable",
    body: "Quick to adjust to new environments, tools, and workflows—staying productive even in the midst of change.",
  },
  {
    icon: Users,
    title: "Team Work",
    body: "Communicative and collaborative. I believe the best results come from team synergy, not working alone.",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    body: "I have a high curiosity for new technologies and am accustomed to self-directed, structured learning.",
  },
  {
    icon: Clock,
    title: "Time Management",
    body: "Disciplined in managing priorities and deadlines—ensuring every task is completed on time while maintaining quality.",
  },
];

const timeline = [
  {
    year: "Internship - December 2026 - June 2026",
    role: "IT Programmer · KATADATA",
    note: "Developed an interactive front-end interface to visualize traffic congestion in the Simatupang area, Ramadan baik, and JFSS Event focusing on clarity.",
  },
  {
    year: "Internship - (Juni 2024 - Desember 2024)",
    role: "Web Developer · Pustekinfo DPR-RI",
    note: "Built a recommendation-based web system for inter-parliamentary cooperation using Laravel and MySQL. Designed structured workflows to improve administrative efficiency.",
  },
  {
    year: "Apprenticeship - (August 2023 - January 2023)",
    role: "Mobile Android Developer · Infinite Learning",
    note: "Developed multiple Android applications using modern architecture patterns (MVVM), focusing on UI/UX consistency and application performance.",
  },
];

function AboutPage() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* HERO */}
      <section className="pt-20 md:pt-44 pb-20 md:pb-28 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-16 items-center">
            {/* LEFT — eyebrow, name, intro */}
            <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
              <Reveal>
                <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-6 inline-flex items-center gap-3">
                  <span className="inline-block h-px w-8 bg-wash/60" />
                  About
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-balance font-semibold tracking-tight text-ink text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
                  Hi, I&apos;m <span className="text-wash-deep">Faiz Ridho</span>.
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-ink-soft text-lg leading-relaxed">
                  A web developer and IT programmer focused on building
                  structured, reliable, and scalable digital products — clear,
                  efficient, and purposeful.
                </p>
              </Reveal>

              {/* Social Pills */}
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="social-pill group inline-flex items-center gap-2 rounded-full glass-capsule px-4 py-2 text-sm text-ink"
                      style={{ "--social-color": s.color } as React.CSSProperties}
                    >
                      <s.icon className="social-icon-svg h-4 w-4" />
                      <span className="tracking-wide">{s.label}</span>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Portrait (Flip Card on mobile, Orbit on desktop) */}
            <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <PortraitOrbit reduce={!!reduce} />
            </div>
          </div>
        </div>
      </section>

      {/* TRAITS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-3 inline-flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-wash/60" />
            What I bring
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink max-w-2xl leading-[1.05]">
            My Traits and Work Approach
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60 glass-capsule">
          {traits.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06} className="bg-card/50 p-7 backdrop-blur-sm group">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-wash/10 text-wash-deep mb-5 group-hover:bg-wash/20 transition-colors">
                <t.icon className="h-5 w-5" />
              </div>
              <p className="text-lg md:text-xl font-medium tracking-tight text-ink">
                {t.title}
              </p>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {t.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="mt-28 md:mt-36">
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
                <p className="text-[11px] tracking-[0.25em] uppercase text-ink-soft">
                  {t.year}
                </p>
                <p className="mt-2 text-2xl md:text-3xl font-medium tracking-tight text-ink">
                  {t.role}
                </p>
                <p className="mt-3 max-w-2xl text-ink-soft text-[15px] leading-relaxed">
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

/* ─────────────────────────── Portrait Orbit / Flip Card ─────────────────── */
//
// Mobile (< lg):  Flip card 3D — tap untuk flip, sisi depan = foto, sisi belakang = socials
// Desktop (lg+):  Orbit asli tidak berubah sama sekali

function PortraitOrbit({ reduce }: { reduce: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(100);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const compute = () => {
      if (!containerRef.current) return;
      const size = containerRef.current.offsetWidth;
      const iconHalf = size >= 320 ? 22 : 18;
      const safeMargin = 8;
      const maxSafe = size / 2 - iconHalf - safeMargin;
      const r = Math.min(Math.floor((size / 2) * 0.82), maxSafe, 175);
      setRadius(r);
    };

    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* ── MOBILE: Flip Card ── hidden on lg+ ──────────────────────────────── */}
      <div className="block lg:hidden" style={{ perspective: "1200px" }}>
        <motion.div
          style={{
            width: "260px",
            height: "320px",
            position: "relative",
            transformStyle: "preserve-3d",
            cursor: "pointer",
          }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{
            duration: reduce ? 0 : 0.65,
            ease: [0.4, 0, 0.2, 1],
          }}
          onClick={() => setFlipped((f) => !f)}
          role="button"
          aria-label={flipped ? "Flip back to photo" : "Flip to see social links"}
        >
          {/* ── FRONT FACE ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              borderRadius: "24px",
              overflow: "hidden",
            }}
            className="ring-1 ring-wash/30 shadow-[0_24px_64px_-16px_rgba(74,74,74,0.40)]"
          >
            {/* Photo */}
            <img
              src={profile}
              alt="Portrait of Faiz Ridho"
              className="w-full h-full object-cover object-top"
            />

            {/* Bottom gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 45%, color-mix(in oklab, var(--paper) 80%, transparent) 100%)",
              }}
            />

            {/* Name tag at bottom */}
            <div className="absolute bottom-5 left-0 right-0 px-5">
              <p className="text-base font-semibold tracking-tight text-ink">
                Faiz Ridho
              </p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-ink-soft/80 mt-0.5">
                Web Developer
              </p>
            </div>

            {/* Tap hint — pulsing */}
            <div className="absolute top-4 right-4">
              <motion.div
                animate={
                  reduce
                    ? undefined
                    : {
                        scale: [1, 1.15, 1],
                        opacity: [0.6, 1, 0.6],
                      }
                }
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-1.5 rounded-full glass-capsule px-2.5 py-1"
              >
                <span className="text-[9px] tracking-[0.2em] uppercase text-ink-soft/70">
                  tap
                </span>
              </motion.div>
            </div>
          </div>

          {/* ── BACK FACE ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: "24px",
              background: "color-mix(in oklab, var(--paper) 94%, var(--wash) 6%)",
            }}
            className="ring-1 ring-wash/30 shadow-[0_24px_64px_-16px_rgba(74,74,74,0.40)] flex flex-col items-center justify-center gap-4 px-6 py-7"
          >
            {/* Avatar small */}
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-wash/30 shrink-0">
              <img
                src={profile}
                alt="Faiz Ridho"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Label */}
            <div className="text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase text-wash">
                Connect with me
              </p>
            </div>

            {/* Divider */}
            <div className="w-8 h-px bg-wash/40" />

            {/* Social links list */}
            <div className="flex flex-col w-full gap-2.5">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  onClick={(e) => e.stopPropagation()}
                  initial={reduce ? undefined : { opacity: 0, x: -10 }}
                  animate={
                    reduce
                      ? undefined
                      : flipped
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{
                    delay: flipped ? 0.28 + i * 0.07 : 0,
                    duration: 0.28,
                    ease: "easeOut",
                  }}
                  className="social-pill group inline-flex items-center gap-3 rounded-full glass-capsule px-4 py-2.5 text-sm text-ink w-full"
                  style={{ "--social-color": s.color } as React.CSSProperties}
                >
                  <s.icon className="social-icon-svg h-4 w-4 shrink-0" />
                  <span className="tracking-wide font-medium flex-1">{s.label}</span>
                  <span className="text-xs text-ink-soft/50">↗</span>
                </motion.a>
              ))}
            </div>

            {/* Flip back hint */}
            <p className="text-[9px] tracking-[0.2em] uppercase text-ink-soft/40 mt-1">
              tap to flip back
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── DESKTOP: Orbit asli ── hidden on mobile ──────────────────────────── */}
      <div
        ref={containerRef}
        className="hidden lg:block relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
      >
        {/* Soft halo */}
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--wash) 35%, transparent), transparent 65%)",
          }}
        />

        {/* Decorative rings */}
        <div className="absolute inset-6 rounded-full border border-wash/20" />
        <div className="absolute inset-0 rounded-full border border-wash/15" />

        {/* Dashed orbit ring */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: radius * 2 + "px",
            height: radius * 2 + "px",
            border:
              "1px dashed color-mix(in oklab, var(--wash) 45%, transparent)",
          }}
        />

        {/* Portrait */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] h-[58%] rounded-full overflow-hidden ring-1 ring-wash/30 shadow-[0_30px_80px_-20px_rgba(74,74,74,0.45)]">
          <img
            src={profile}
            alt="Portrait of Faiz Ridho"
            width={896}
            height={896}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--paper) 55%, transparent))",
            }}
          />
        </div>

        {/* Orbiting social icons */}
        <motion.div
          className="absolute inset-0"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {socials.map((s, i) => {
            const angle = (i / socials.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ x, y }}
                animate={reduce ? undefined : { rotate: -360 }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
                whileHover={{ scale: 1.18 }}
              >
                <span
                  className="orbit-social-btn flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full glass-capsule text-ink transition-colors"
                  style={{ "--social-color": s.color } as React.CSSProperties}
                >
                  <s.icon className="social-icon-svg h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]" />
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}