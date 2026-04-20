import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-3 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-3">
            Currently
          </p>
          <p className="text-ink text-[15px] leading-relaxed">
            Open to product design & front-end engineering roles.
            <br />
            Based in Lisbon — working worldwide.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-3">
            Elsewhere
          </p>
          <ul className="space-y-2 text-[15px] text-ink">
            <li>
              <a href="mailto:faizridho.work@gmail.com" className="link-underline">
                faizridho.work@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/Faizrdh" className="link-underline" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/faiz-ridho-90573917a/" className="link-underline" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>
        <div className="md:text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-3">
            Index
          </p>
          <ul className="space-y-2 text-[15px] text-ink">
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/projects" className="link-underline">Selected Work</Link></li>
            <li><Link to="/stack" className="link-underline">Stack</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-ink-soft">
          <p>© {year} Faiz Ridho. Crafted with intention.</p>
          <p className="tracking-[0.2em] uppercase">Ink Wash · v1.0</p>
        </div>
      </div>
    </footer>
  );
}
