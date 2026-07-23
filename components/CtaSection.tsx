import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full py-16 lg:py-24 text-[#070f1a]">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="bg-[#32FFCE] rounded-3xl p-12 md:p-20 flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ready to build the<br className="hidden sm:block" /> future?
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-[600px]">
            Let's collaborate on your next technical challenge.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#070f1a] text-[#32FFCE] px-8 py-4 rounded text-xs font-bold tracking-[0.15em] uppercase hover:bg-black transition-colors mt-4"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
