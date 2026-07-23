export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020617] py-20 flex flex-col items-center justify-center gap-10">
      {/* Brand */}
      <div className="font-mono text-[#00ffcc] tracking-[0.4em] text-sm md:text-base font-bold ml-[0.4em]">
        DEV_PORTFOLIO.ROOT
      </div>

      {/* Links */}
      <div className="flex items-center gap-12 text-slate-400 font-semibold tracking-widest text-sm">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GH</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LI</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TW</a>
        <a href="mailto:hello@example.com" className="hover:text-white transition-colors">EM</a>
      </div>

      {/* Copyright */}
      <div className="text-xs text-slate-600 font-medium tracking-widest uppercase mt-4">
        © {currentYear} DEVELOPER.PORTFOLIO. BUILT WITH PRECISION.
      </div>
    </footer>
  );
}
