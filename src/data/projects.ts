/* eslint-disable prettier/prettier */
import jfssPhoto from "@/assets/jfss photo.png";
import primasiyankes from "@/assets/primasiyankes photo.png";
import PreviewTbsimatupang from "@/assets/preview shorthand .png";
import Ramadanbaik from "@/assets/ramadan baik landing.png";
import Cosmic from "@/assets/cosmic-commander.png";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  client: string;
  tags: string[];
  about: string;
  timeline: string;
  stack: string[];
  accent: "a" | "b" | "c" | "d" | "e";
  image?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "jfss",
    title: "JFSS — Katadata",
    tagline: "Sectoral Fiscal and Statistical Journal for data-driven policy making.",
    year: "2026",
    role: "Front-end Developer",
    client: "Katadata",
    tags: ["Publication", "Data", "Web"],
    about:
      "The Jakarta Food Security Summit (JFSS) 2026 serves as a platform to strengthen the commitment of business leaders and the government in supporting national food sovereignty. This collaboration aims to drive the success of Food and Energy Security programs to support economic growth and realize 'Indonesia Incorporated'.",
    timeline: "2026",
    stack: ["React", "TypeScript", "Tailwind", "Figma"],
    accent: "a",
    image: jfssPhoto,
    url: "https://jfs.katadata.id/",
  },

  {
    slug: "primasiyankes",
    title: "Primasiyankes",
    tagline: "Primary healthcare services made more accessible and efficient.",
    year: "2026",
    role: "Fullstack Developer",
    client: "Primasiyankes",
    tags: ["Healthcare", "Public Service", "Web"],
    about:
      "An Administration & Inventory Management Information System designed to streamline inventory tracking and administrative data. This platform provides a structured, centralized solution for the operational needs of primary healthcare centers.",
    timeline: "2025",
    stack: ["Laravel", "Vite", "Bootstrap", "Figma"],
    accent: "b",
    image: primasiyankes,
    url: "https://primasiyankes.id",
  },

  {
    slug: "kemacetan-tb-simatupang",
    title: "TB Simatupang Traffic — Katadata",
    tagline: "An interactive visual investigation of South Jakarta's arterial congestion.",
    year: "2026",
    role: "Front-end Developer",
    client: "Katadata",
    tags: ["Publication", "Data", "Web"],
    about:
      "Understanding traffic reports on South Jakarta's arterial roads can be challenging through text alone. This project provides readers with visual context and spatial data that is easy to digest, making complex congestion patterns more understandable.",
    timeline: "2026",
    stack: ["Shorthand", "Figma", "Data Viz", "SVG"],
    accent: "c",
    image: PreviewTbsimatupang,
    url: "https://katadata.co.id/analisisdata/69492d060fb7e/akar-kemacetan-jalan-arteri-di-selatan-jakarta",
  },

  {
    slug: "ramadan-katadata",
    title: "Ramadan Baik — Katadata",
    tagline: "A digital campaign connecting the community through kindness during Ramadan 2026.",
    year: "2026",
    role: "Front-end Developer",
    client: "Katadata",
    tags: ["Publication", "Campaign", "Web"],
    about:
      "A dedicated web platform for the 2026 (1447 H) Ramadan season. It features an interactive homecoming (mudik) map, the latest news articles, prayer schedules, and adhan reminders to enhance the spiritual experience of the community.",
    timeline: "2026",
    stack: ["React", "TypeScript", "Tailwind", "Figma"],
    accent: "d",
    image: Ramadanbaik,
    url: "https://ramadan.katadata.co.id/",
  },

  {
    slug: "cosmic-commander",
    title: "Cosmic Commander",
    tagline: "A space strategy game where you command fleets across the galaxy.",
    year: "2026",
    role: "Front-end Developer",
    client: "Personal Project",
    tags: ["Game", "Interactive", "Web"],
    about:
      "Cosmic Commander is a browser-based space strategy game built with modern web technologies. Players take command of interstellar fleets, manage resources across star systems, and engage in tactical battles against AI or other commanders across the galaxy.",
    timeline: "2026",
    stack: ["React", "TypeScript", "Canvas API", "Tailwind"],
    accent: "e",
    image: Cosmic,
    url: "https://cosmic-commander.faizcodes.my.id",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}