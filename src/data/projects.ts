export type ProjectDetails = {
  overview: string;
  challenges: string[];
  features: { title: string; body: string }[];
  outcome: string;
  duration: string;
  team: string;
};

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
  details: ProjectDetails;
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
    details: {
      overview:
        "Northwind Capital serves over 12,000 high-net-worth clients across Europe. Their advisors were drowning in fragmented legacy tools — switching between six different systems just to assemble a single portfolio. We rebuilt the entire advisor workspace from the ground up, treating it as a single, calm canvas instead of a stack of dashboards.",
      challenges: [
        "Legacy systems with no shared data model — every action required cross-checking three sources.",
        "Strict compliance requirements that made every UI change a six-week review cycle.",
        "Advisors with 15+ years of muscle memory who feared any change to their daily flow.",
        "Real-time market data that had to feel responsive without ever feeling noisy.",
      ],
      features: [
        {
          title: "Unified portfolio canvas",
          body: "A single workspace that pulls data from every legacy source, presented through a typed component library with progressive disclosure for deep dives.",
        },
        {
          title: "Compliance-aware editing",
          body: "Every field knows its regulatory context. Advisors see warnings inline before they become blockers, cutting the review queue by half.",
        },
        {
          title: "Typed design system",
          body: "Forty-two primitives, all generated from the same TypeScript schema. Designers and engineers shipped from the same source of truth.",
        },
        {
          title: "Quiet data visualization",
          body: "Charts that whisper instead of shout. Subtle animation, restrained color, and a focus on the one number that matters per view.",
        },
      ],
      outcome:
        "Within six months of launch, advisors were assembling portfolios 62% faster and the support queue dropped by nearly half. The design system became the foundation for three additional internal products.",
      duration: "8 months",
      team: "1 designer, 4 engineers, 1 PM",
    },
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
    details: {
      overview:
        "Atlas had been publishing exceptional long-form journalism for two decades, but their digital experience hadn't aged with the work. Readers were bouncing within seconds — not because the writing was failing, but because the page was. We rebuilt Atlas as a reading-first publication that respects both the writer's craft and the reader's time.",
      challenges: [
        "A monolithic legacy CMS that editors openly hated and refused to use for rich layouts.",
        "Mobile reading sessions averaged 12 seconds — a typography and performance problem, not a content problem.",
        "Ten years of archived articles that had to migrate without breaking permalinks or SEO equity.",
        "Editorial team of 18 with strong, occasionally conflicting opinions on every typographic choice.",
      ],
      features: [
        {
          title: "Print-grade typography",
          body: "A custom type scale derived from the publication's print edition, with optical sizing, drop caps, and proper widow control on every breakpoint.",
        },
        {
          title: "Editor-first CMS",
          body: "A Sanity-powered authoring experience where layouts compose themselves from the structure of the writing. Editors stopped fighting the tool.",
        },
        {
          title: "Streaming SSR",
          body: "Articles begin rendering before the database has finished responding. Hero text appears in under 200ms, even on a 3G connection.",
        },
        {
          title: "Reading-aware analytics",
          body: "We measure scroll depth, read time, and return visits — not pageviews. The newsroom now writes for engagement, not for the algorithm.",
        },
      ],
      outcome:
        "Reader time-on-page jumped 71%, paid subscriptions grew 22% in the first quarter post-launch, and the editorial team stopped asking for redesigns. The CMS became their favorite tool.",
      duration: "5 months",
      team: "1 designer-engineer, 1 backend engineer, 2 editors as design partners",
    },
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
    details: {
      overview:
        "Halcyon Clinics runs a network of 24 specialty practices across the UK. Their intake process — a 47-field PDF emailed to patients before every visit — was driving more than a third of patients to drop off entirely. We replaced it with an intake experience that feels like a conversation, not paperwork.",
      challenges: [
        "Strict NHS and GDPR data handling rules with zero room for error.",
        "Patient base spanning ages 6 to 92, with vastly different accessibility needs.",
        "Reception staff who had built workarounds over a decade and were skeptical of any new system.",
        "Forms that needed to adapt to dozens of specialty workflows without becoming a configuration nightmare.",
      ],
      features: [
        {
          title: "Conversational intake",
          body: "Questions appear one at a time, in plain language, with progress that always feels achievable. No more 47-field walls of text.",
        },
        {
          title: "Save-anywhere resumption",
          body: "Patients can pause on mobile and resume on a tablet at the clinic. Powered by XState and signed magic links — no accounts required.",
        },
        {
          title: "WCAG AAA throughout",
          body: "Every state — focus, error, success, loading — meets AAA contrast. Voice input for fields where typing is hard. Tested with screen readers and motor accessibility tools.",
        },
        {
          title: "Specialty-aware branching",
          body: "A schema-driven engine where clinicians configure their own intake logic without touching code. New specialty live in under a day.",
        },
      ],
      outcome:
        "Completion jumped from 62% to 94%. Reception staff reported saving 11 hours per week per location on data entry. Most meaningfully, patient satisfaction with the pre-visit experience reached 4.9/5.",
      duration: "6 months",
      team: "1 designer, 3 engineers, 2 clinical advisors",
    },
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
    details: {
      overview:
        "Kiln is a two-person ceramics studio in Lisbon making slow, considered tableware for restaurants and collectors. Their previous site was a Squarespace template that felt like every other studio site — and crucially, made it impossible to update product photography without an evening of fighting the editor. We built them a site that looks like the work they make.",
      challenges: [
        "A two-person studio with zero appetite for ongoing maintenance overhead.",
        "Product photography is the entire pitch — image quality and load speed had to be uncompromised.",
        "Inventory varies week to week as kilns fire. The site had to reflect reality without manual sync.",
        "International shipping with handmade ceramics meant complex, fragile checkout logic.",
      ],
      features: [
        {
          title: "Image-led storytelling",
          body: "Every page is composed around photography, with type that gets out of the way. A custom Cloudinary pipeline serves the right image to every viewport in under 60ms.",
        },
        {
          title: "Two-click admin",
          body: "Adding a new piece takes one drag, one title, and one price. The site rebuilds in under 30 seconds via Astro's incremental build.",
        },
        {
          title: "Considered checkout",
          body: "Stripe-backed but visually invisible — no jarring redirects, no scary forms. International shipping calculated live at the perfect moment.",
        },
        {
          title: "Press-ready",
          body: "Every product page ships proper Open Graph cards, structured data, and high-resolution download links for journalists. Twelve press mentions followed.",
        },
      ],
      outcome:
        "Conversion rose 58% in the first quarter, page weight dropped 74%, and Kiln were featured in twelve design publications including Wallpaper* and Sight Unseen — almost entirely because their site finally matched their work.",
      duration: "10 weeks",
      team: "Solo (designer-engineer)",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
