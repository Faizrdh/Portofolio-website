// Elegant monochrome SVG glyphs for each toolkit item.
// Stroked or filled in `currentColor` so they inherit ink/wash tones.

type Props = { className?: string };

const base = "h-7 w-7 text-ink";

export function TechLogo({ name, className }: { name: string; className?: string }) {
  const cls = className ?? base;
  switch (name) {
    case "TypeScript":
      return <TypeScriptLogo className={cls} />;
    case "React":
      return <ReactLogo className={cls} />;
    case "Next.js":
      return <NextLogo className={cls} />;
    case "Livewire":
      return <LivewireLogo className={cls} />;
    case "Tailwind CSS":
      return <TailwindLogo className={cls} />;
    case "Framer Motion":
      return <FramerLogo className={cls} />;
    case "Node.js":
      return <NodeLogo className={cls} />;
    case "PostgreSQL":
      return <PostgresLogo className={cls} />;
    case "Express":
      return <ExpressLogo className={cls} />;
    case "Supabase":
      return <SupabaseLogo className={cls} />;
    case "Prisma":
      return <PrismaLogo className={cls} />;
    case "MySQL":
      return <MySQLLogo className={cls} />;
    case "Figma":
      return <FigmaLogo className={cls} />;
    case "Vercel":
      return <VercelLogo className={cls} />;
    case "Canva":
      return <CanvaLogo className={cls} />;
    default:
      return null;
  }
}

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function TypeScriptLogo({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="2.5" width="19" height="19" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 12.5h5M9.5 12.5V18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M18 13.2c-.4-.6-1.1-1-2-1-1.1 0-1.9.6-1.9 1.5 0 .9.7 1.3 1.7 1.6 1.1.3 1.9.7 1.9 1.7 0 1-.9 1.6-2.1 1.6-1 0-1.8-.4-2.3-1.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ReactLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </svg>
  );
}

function NextLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8 7.5v9M8 7.5l8.5 9M16 7.5v6" />
    </svg>
  );
}

function LivewireLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M3 9c2 0 2 6 4 6s2-6 4-6 2 6 4 6 2-6 4-6" />
      <circle cx="3" cy="9" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="21" cy="9" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TailwindLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M4 12c1.5-3 3.5-4.5 6-4.5 3.5 0 4 2.5 6 2.5 1.5 0 2.5-.7 3.5-2-1.5 3-3.5 4.5-6 4.5-3.5 0-4-2.5-6-2.5-1.5 0-2.5.7-3.5 2z" />
      <path d="M4 17c1.5-3 3.5-4.5 6-4.5 3.5 0 4 2.5 6 2.5 1.5 0 2.5-.7 3.5-2-1.5 3-3.5 4.5-6 4.5-3.5 0-4-2.5-6-2.5-1.5 0-2.5.7-3.5 2z" opacity="0.5" />
    </svg>
  );
}

function FramerLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M6 3h12v6H12l6 6h-6v6l-6-6V9h6L6 3z" />
    </svg>
  );
}

function NodeLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M12 2.5L21 7.5v9L12 21.5 3 16.5v-9L12 2.5z" />
      <path d="M9 9.5v5c0 1 .8 1.5 1.7 1.5s1.7-.5 1.7-1.5v-5" />
      <path d="M14.5 14c.2.7.9 1.2 2 1.2s1.8-.4 1.8-1.2c0-1.5-3.7-.7-3.7-2.3 0-.7.7-1.2 1.7-1.2s1.6.4 1.8 1" />
    </svg>
  );
}

function PostgresLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <ellipse cx="12" cy="6" rx="8" ry="2.5" />
      <path d="M4 6v12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V6" />
      <path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
      <circle cx="9" cy="10" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ExpressLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M3 16l5-7-5-7M8 16l5-7-5-7" />
      <path d="M14 13c.5 1.5 2 2.5 4 2.5s3.5-1 3.5-2.5c0-3-7-1.5-7-4.5 0-1.5 1.5-2.5 3.5-2.5s3.5 1 4 2.5" />
    </svg>
  );
}

function SupabaseLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M13 2L4 13h7v9l9-11h-7V2z" />
    </svg>
  );
}

function PrismaLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M14 2L5 17l10 5 5-15-6-5z" />
      <path d="M14 2L9 22" />
    </svg>
  );
}

function MySQLLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M3 17c2-3 3-7 2-11 3 1 5 4 6 7 1-2 3-3.5 5-4-1 4-3 7-6 9" />
      <path d="M14 18c2 0 4 1 5 3" />
      <circle cx="7" cy="8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FigmaLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <rect x="8" y="2" width="8" height="6" rx="3" />
      <rect x="8" y="8" width="8" height="6" rx="3" />
      <rect x="2" y="8" width="6" height="6" rx="3" />
      <rect x="2" y="2" width="6" height="6" rx="3" />
      <rect x="2" y="14" width="6" height="6" rx="3" />
      <circle cx="13" cy="13" r="3" />
    </svg>
  );
}

function VercelLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M12 3l10 17H2L12 3z" />
    </svg>
  );
}

function CanvaLogo({ className }: Props) {
  return (
    <svg className={className} {...svgProps}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M15.5 14.5c-.7 1.2-2 2-3.5 2-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5c1.4 0 2.6.7 3.4 1.7" />
    </svg>
  );
}
