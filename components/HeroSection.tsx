import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-24 lg:py-32 xl:py-40 flex justify-center items-center text-white border-b border-[#1d283a]">
      <div className="container px-4 md:px-6 flex flex-col items-start text-left space-y-8 max-w-5xl mx-auto">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#32FFCE] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#32FFCE]"></span>
          </span>
          Available for projects
        </div>

        <div className="space-y-4 max-w-[900px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Engineering <span className="text-[#32FFCE]">Scalable</span><br />
            Digital Architectures
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-[650px] leading-relaxed pt-2">
            Full-stack engineer specializing in high-performance
            cloud ecosystems and meticulous UI engineering. Transforming
            complex requirements into elegant, efficient systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-[400px] pt-4">
          <Link
            href="/projects"
            className="inline-flex h-12 sm:h-14 items-center justify-center rounded bg-[#32FFCE] px-8 text-sm font-bold text-[#070f1a] transition-all hover:bg-[#32FFCE]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32FFCE] w-full"
          >
            View Portfolio
          </Link>
          <a
            href="/resume.pdf"
            className="inline-flex h-12 sm:h-14 items-center justify-center rounded border border-[#1d283a] bg-transparent px-8 text-sm font-bold text-white transition-all hover:bg-white/5 hover:border-gray-500 focus-visible:outline-none focus-visible:ring-2 w-full"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
