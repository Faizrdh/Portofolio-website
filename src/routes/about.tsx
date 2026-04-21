import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Users, Zap, Clock, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile-faiz.jpg";

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
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/faiz-ridho-90573917a/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Faizrdh" },
  { icon: Mail, label: "Email", href: "mailto:faizridho.work@gmail.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
];

const traits = [
  {
    icon: Sparkles,
    title: "Mudah Beradaptasi",
    body: "Cepat menyesuaikan diri dengan lingkungan, tools, dan workflow baru — tetap produktif di tengah perubahan.",
  },
  {
    icon: Users,
    title: "Kerja Kelompok",
    body: "Komunikatif dan kolaboratif. Saya percaya hasil terbaik lahir dari sinergi tim, bukan kerja sendiri.",
  },
  {
    icon: Zap,
    title: "Cepat Belajar",
    body: "Punya rasa ingin tahu yang tinggi terhadap teknologi baru, dan terbiasa belajar mandiri secara terstruktur.",
  },
  {
    icon: Clock,
    title: "Time Management",
    body: "Disiplin mengatur prioritas dan tenggat — memastikan setiap pekerjaan selesai tepat waktu dengan kualitas terjaga.",
  },
];

const timeline = [
  {
    year: "Internship",
    role: "IT Programmer · KATADATA",
    note: "Developed an interactive front-end interface to visualize traffic congestion in the Simatupang area, focusing on clarity, usability, and real-time data presentation.",
  },
  {
    year: "Internship",
    role: "Web Developer · Pustekinfo DPR-RI",
    note: "Built a recommendation-based web system for inter-parliamentary cooperation using Laravel and MySQL. Designed structured workflows to improve administrative efficiency.",
  },
  {
    year: "Apprenticeship",
    role: "Mobile Android Developer · Infinite Learning",
    note: "Developed multiple Android applications using modern architecture patterns (MVVM), focusing on UI/UX consistency and application performance.",
  },
];

function AboutPage() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* HERO — Split: narrative (left) + portrait orbit (right) */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
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

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="group inline-flex items-center gap-2 rounded-full glass-capsule px-4 py-2 text-sm text-ink hover:text-wash-deep transition-colors"
                    >
                      <s.icon className="h-4 w-4" />
                      <span className="tracking-wide">{s.label}</span>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Portrait with rotating orbit of social icons */}
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
            Sifat dan cara kerja saya.
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

/* ----------------------------- Portrait Orbit ----------------------------- */

function PortraitOrbit({ reduce }: { reduce: boolean }) {
  // Orbit radius in px (responsive via container size)
  const radius = 180;

  return (
    <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
      {/* Soft halo behind the portrait */}
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

      {/* Rotating dashed orbit */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px dashed color-mix(in oklab, var(--wash) 45%, transparent)",
        }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      />

      {/* Portrait — clipped circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] h-[58%] rounded-full overflow-hidden ring-1 ring-wash/30 shadow-[0_30px_80px_-20px_rgba(74,74,74,0.45)]">
        <img
          src={profileImg}
          alt="Portrait of Faiz Ridho"
          width={896}
          height={896}
          className="w-full h-full object-cover"
        />
        {/* Subtle ink wash on portrait */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--paper) 55%, transparent))",
          }}
        />
      </div>

      {/* Orbiting social icons — counter-rotate to keep icons upright */}
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
              whileHover={{ scale: 1.15 }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full glass-capsule text-ink hover:text-wash-deep transition-colors">
                <s.icon className="h-[18px] w-[18px]" />
              </span>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
