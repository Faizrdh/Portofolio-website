/* eslint-disable prettier/prettier */
export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  client: string;
  tags: string[];
  problem: string;
  solution: string;
  stack: string[];
  impact: { label: string; value: string }[];
  accent: "a" | "b" | "c" | "d";
};

export const projects: Project[] = [
  {
    slug: "northwind-banking",
    title: "Northwind Banking",
    tagline: "A calmer interface for high-stakes financial decisions.",
    year: "2024",
    role: "Lead Product Designer",
    client: "Northwind Capital",
    tags: ["Fintech", "Design System", "Web App"],
    problem:
      "Advisors were juggling six legacy tools to build a single client portfolio. Errors were costly and onboarding took weeks.",
    solution:
      "A unified workspace with progressive disclosure, a typed component library, and a quiet visual language that makes complex data legible at a glance.",
    stack: ["React", "TypeScript", "Tailwind", "tRPC", "PostgreSQL", "Figma"],
    impact: [
      { label: "Time to portfolio", value: "−62%" },
      { label: "Advisor NPS", value: "+34" },
      { label: "Tickets / week", value: "−48%" },
    ],
    accent: "a",
  },
  {
    slug: "atlas-journal",
    title: "Atlas Journal",
    tagline: "An editorial reading experience for long-form journalism.",
    year: "2024",
    role: "Designer & Engineer",
    client: "Atlas Media",
    tags: ["Editorial", "CMS", "Performance"],
    problem:
      "A respected publication was losing readers to faster, cleaner competitors with better mobile typography and slow page loads.",
    solution:
      "A typographic system rooted in print conventions, a custom CMS for editors, and a streaming SSR pipeline that ships under 40kb of JS per article.",
    stack: ["Next.js", "MDX", "Sanity", "Vercel", "Playwright"],
    impact: [
      { label: "LCP (p75)", value: "0.9s" },
      { label: "Time on page", value: "+71%" },
      { label: "Subscriptions", value: "+22%" },
    ],
    accent: "b",
  },
  {
    slug: "halcyon-health",
    title: "Halcyon Health",
    tagline: "Patient onboarding that respects time and dignity.",
    year: "2023",
    role: "Product Designer",
    client: "Halcyon Clinics",
    tags: ["Healthcare", "Forms", "Accessibility"],
    problem:
      "Intake forms drove 38% drop-off. Staff manually re-keyed data and patients felt processed, not cared for.",
    solution:
      "A conversational, save-anywhere intake flow with native autofill, voice input, and WCAG AAA contrast across every state.",
    stack: ["React", "XState", "Supabase", "Resend"],
    impact: [
      { label: "Completion rate", value: "94%" },
      { label: "Manual entry", value: "−83%" },
      { label: "Patient CSAT", value: "4.9/5" },
    ],
    accent: "c",
  },
  {
    slug: "kiln-studio",
    title: "Kiln Studio",
    tagline: "A boutique studio site that doubles as a portfolio engine.",
    year: "2023",
    role: "Designer & Engineer",
    client: "Kiln (Independent)",
    tags: ["Brand", "Marketing", "CMS"],
    problem:
      "A small ceramics studio needed a site that felt as considered as their work — without a full-time webmaster.",
    solution:
      "A quiet, image-led site with a dead-simple admin, optimised image pipeline, and a checkout that respects the craft.",
    stack: ["Astro", "Tailwind", "Stripe", "Cloudinary"],
    impact: [
      { label: "Conversion rate", value: "+58%" },
      { label: "Page weight", value: "−74%" },
      { label: "Press mentions", value: "12" },
    ],
    accent: "d",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
