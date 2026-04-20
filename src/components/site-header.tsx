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
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={[
          "mx-auto max-w-6xl px-4 transition-all duration-500",
          scrolled ? "mt-3" : "mt-5",
        ].join(" ")}
      >
        <div className="glass-capsule rounded-full pl-5 pr-2 h-14 flex items-center justify-between gap-4">
          <Link to="/" className="group inline-flex items-center gap-2.5 shrink-0">
            <span className="relative inline-flex h-7 w-7 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-wash/25" />
              <span className="absolute inset-1.5 rounded-full bg-wash" />
            </span>
            <span className="font-semibold tracking-tight text-ink text-[15px] whitespace-nowrap">
              Faiz Ridho
              <span className="text-wash">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative px-4 py-2 text-[12px] tracking-[0.18em] uppercase text-ink-soft hover:text-ink transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full glass-active"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative ${active ? "text-ink font-medium" : ""}`}>
                    {l.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 text-[12px] tracking-[0.18em] uppercase hover:bg-wash-deep transition-colors"
            >
              <span>Get in touch</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass-active"
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
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mt-2 glass-capsule rounded-3xl"
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
