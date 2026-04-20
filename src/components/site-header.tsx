import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/stack", label: "Stack" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-[backdrop-filter,background-color,border-color] duration-500",
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border/60"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-2.5">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-wash/20" />
            <span className="absolute inset-1.5 rounded-full bg-wash" />
          </span>
          <span className="font-semibold tracking-tight text-ink text-[15px]">
            Aiden Mori
            <span className="text-wash">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3 py-2 text-[13px] tracking-wide uppercase text-ink-soft hover:text-ink transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-[13px] tracking-wide uppercase text-ink"
          >
            <span className="link-underline">Get in touch</span>
            <span className="inline-block translate-y-px transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-ink transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-4 bg-ink transition-transform duration-300 ${open ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-2xl font-medium tracking-tight text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
