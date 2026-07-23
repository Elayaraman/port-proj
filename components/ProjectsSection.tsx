import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const DUMMY_PROJECTS = [
  {
    title: "Quantum-DB",
    description: "A globally distributed, ultra-low latency key-value store optimized for edge computing.",
    tags: ["RUST", "WASM", "GRPC"],
    repoLink: "https://github.com",
  },
  {
    title: "Aether UI",
    description: "Design system for enterprise-grade developer tools with accessibility at its core.",
    tags: ["REACT", "STYLED", "STORYBOOK"],
    repoLink: "https://github.com",
  }
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-20 lg:py-24 text-white">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-center md:items-start justify-between md:flex-row mb-12 gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#32FFCE] uppercase">Selected Work</p>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Projects</h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#32FFCE] hover:bg-[#32FFCE]/10 transition-colors border border-[#1d283a] rounded-md px-6 py-2.5"
          >
            View All Experiments
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {DUMMY_PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
