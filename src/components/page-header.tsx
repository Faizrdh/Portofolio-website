import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <header className="pt-36 md:pt-44 pb-12 md:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {eyebrow && (
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-wash mb-6 inline-flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-wash/60" />
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="text-balance font-semibold tracking-tight text-ink text-5xl md:text-7xl leading-[1.02]">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed text-balance">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
