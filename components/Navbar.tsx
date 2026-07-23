import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1d283a] bg-[#070f1a]/95 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
        <Link href="/" className="font-bold text-xl tracking-tight text-[#32FFCE] hover:text-[#32FFCE]/80 transition-colors">
          DevPortfolio
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/projects" className="text-gray-300 hover:text-[#32FFCE] transition-colors">
            Projects
          </Link>
          <Link href="/github" className="text-gray-300 hover:text-[#32FFCE] transition-colors">
            GitHub
          </Link>
          <Link href="/playground" className="text-gray-300 hover:text-[#32FFCE] transition-colors">
            Playground
          </Link>
          <Link href="/contact" className="px-4 py-2 border border-[#32FFCE] text-[#32FFCE] rounded hover:bg-[#32FFCE]/10 transition-colors">
            Contact Me
          </Link>
        </nav>
        {/* Mobile Nav Toggle - Dummy for now */}
        <button className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}
