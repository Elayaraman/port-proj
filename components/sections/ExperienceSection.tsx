const DUMMY_EXPERIENCE = [
  {
    role: "Senior Cloud Architect",
    company: "Nebula Systems",
    period: "2022 — Present",
    achievements: [
      "Led migration of legacy monolith to serverless AWS architecture.",
      "Improved system uptime from 98.5% to 99.99%.",
    ]
  },
  {
    role: "Full Stack Developer",
    company: "DevFlow Inc.",
    period: "2020 — 2022",
    achievements: [
      "Developed a real-time collaborative code editor.",
      "Scaled API to handle 5M+ requests per day.",
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section className="w-full py-20 lg:py-24 text-white border-b border-[#1d283a]">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#32FFCE] uppercase">Journey</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">Experience</h2>
          </div>

          <div className="border-l border-[#1d283a]/70 ml-2 space-y-12 pt-2">
            {DUMMY_EXPERIENCE.map((job, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline Marker */}
                <div className={`absolute -left-[0.55rem] top-1.5 flex items-center justify-center w-4 h-4 rounded-full border-2 bg-[#070f1a] ${index === 0 ? 'border-[#32FFCE]' : 'border-[#1d283a]'}`}>
                  {index === 0 && <div className="w-1.5 h-1.5 rounded-full bg-[#32FFCE]"></div>}
                </div>
                
                {/* Content */}
                <div className="flex flex-col mb-4 gap-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-sm font-bold text-[#32FFCE]">{job.period}</span>
                    <span className="text-gray-600 text-xs hidden sm:inline-block">•</span>
                    <h3 className="font-bold text-white text-lg sm:text-xl w-full sm:w-auto">{job.role}</h3>
                  </div>
                  <div className="text-sm font-semibold text-[#32FFCE]">{job.company}</div>
                </div>
                
                <ul className="space-y-3 mt-4 text-sm text-gray-400 leading-relaxed">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gray-500 mt-1.5 text-[8px]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
