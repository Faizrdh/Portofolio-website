/* eslint-disable prettier/prettier */
import jfssPhoto from "@/assets/jfss photo.png";
import primasiyankes from "@/assets/primasiyankes photo.png";
import PreviewTbsimatupang from "@/assets/preview shorthand .png";
import Ramadanbaik from "@/assets/ramadan baik landing.png";

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
  image?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "jfss",
    title: "JFSS — Katadata",
    tagline: "Jurnal Fiskal dan Statistik Sektoral untuk kebijakan berbasis data.",
    year: "2026",
    role: "Front end Developer",
    client: "Katadata",
    tags: ["Publikasi", "Data", "Web"],
    problem:
      "Pembaca membutuhkan akses yang mudah dan cepat terhadap data fiskal dan statistik sektoral yang selama ini tersebar di berbagai sumber.",
    solution:
      "Platform jurnal digital yang menyajikan data terstruktur, visualisasi interaktif, dan antarmuka yang bersih agar pembaca dapat menjelajahi informasi dengan mudah.",
    stack: ["React", "TypeScript", "Tailwind", "Figma"],
    impact: [
      { label: "Keterbacaan", value: "+70%" },
      { label: "Waktu di halaman", value: "+55%" },
      { label: "Pengunjung unik", value: "+40%" },
    ],
    accent: "a",
    image: jfssPhoto,
    url: "https://jfs.katadata.id/",
  },
  {
    slug: "primasiyankes",
    title: "Primasiyankes",
    tagline: "Layanan kesehatan primer yang lebih dekat dan mudah dijangkau.",
    year: "2026",
    role: "UI/UX Designer",
    client: "Primasiyankes",
    tags: ["Kesehatan", "Layanan Publik", "Web"],
    problem:
      "Masyarakat kesulitan mengakses informasi layanan kesehatan primer secara digital, sehingga banyak yang tidak mengetahui fasilitas yang tersedia.",
    solution:
      "Website informatif dengan navigasi yang intuitif, menampilkan layanan, jadwal, dan kontak fasilitas kesehatan agar mudah diakses oleh semua kalangan.",
    stack: ["React", "TypeScript", "Tailwind", "Figma"],
    impact: [
      { label: "Aksesibilitas info", value: "+80%" },
      { label: "Kepuasan pengguna", value: "4.8/5" },
      { label: "Permintaan layanan", value: "+35%" },
    ],
    accent: "b",
    image: primasiyankes,
    url: "https://primasiyankes.id",
  },

{
    slug: "Preview Kemacetan TB Simatupan",
    title: "Kemacetan TB Simatupan — Katadata",
    tagline: "Kemacetan jl Alteleri Jakarta Selatan TB Simatupang.",
    year: "2026",
    role: "UI/UX Designer",
    client: "Katadata",
    tags: ["Publikasi", "Data", "Web"],
    problem:
      "Pembaca membutuhkan akses yang mudah dan cepat terhadap data fiskal dan statistik sektoral yang selama ini tersebar di berbagai sumber.",
    solution:
      "Platform jurnal digital yang menyajikan data terstruktur, visualisasi interaktif, dan antarmuka yang bersih agar pembaca dapat menjelajahi informasi dengan mudah.",
    stack: ["React", "TypeScript", "Tailwind", "Figma"],
    impact: [
      { label: "Keterbacaan", value: "+70%" },
      { label: "Waktu di halaman", value: "+55%" },
      { label: "Pengunjung unik", value: "+40%" },
    ],
    accent: "a",
    image: PreviewTbsimatupang,
    url: "https://katadata.co.id/analisisdata/69492d060fb7e/akar-kemacetan-jalan-arteri-di-selatan-jakarta",
  },


  {
    slug: "Ramadan Katadata",
    title: "Ramadan Katadata — Katadata",
    tagline: "Ramadan Baik Katadata 2026 1447 H .",
    year: "2026",
    role: "Front end Developer",
    client: "Katadata",
    tags: ["Publikasi", "Data", "Web"],
    problem:
      "Pembaca membutuhkan akses yang mudah dan cepat terhadap data fiskal dan statistik sektoral yang selama ini tersebar di berbagai sumber.",
    solution:
      "Platform jurnal digital yang menyajikan data terstruktur, visualisasi interaktif, dan antarmuka yang bersih agar pembaca dapat menjelajahi informasi dengan mudah.",
    stack: ["React", "TypeScript", "Tailwind", "Figma"],
    impact: [
      { label: "Keterbacaan", value: "+70%" },
      { label: "Waktu di halaman", value: "+55%" },
      { label: "Pengunjung unik", value: "+40%" },
    ],
    accent: "a",
    image: Ramadanbaik,
    url: "https://ramadan.katadata.co.id/",
  },

];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}