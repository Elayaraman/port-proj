const DUMMY_SKILLS = [
  {
    title: "System Architecture",
    description: "Designing resilient microservices and distributed systems with AWS & Kubernetes.",
    iconColor: "text-[#32FFCE]",
    iconBg: "bg-[#32FFCE]/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
    ),
    tags: ["DOCKER", "TERRAFORM", "GOLANG"]
  },
  {
    title: "Frontend Engineering",
    description: "Crafting pixel-perfect, accessible interfaces using React and Framer Motion.",
    iconColor: "text-[#8b9cf6]",
    iconBg: "bg-[#8b9cf6]/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
    ),
    tags: ["NEXT.JS", "TYPESCRIPT", "THREE.JS"]
  }
];

export default function ExpertiseSection() {
  return (
    <section className="w-full py-20 lg:py-24 text-white border-b border-[#1d283a]">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#32FFCE] uppercase">Competencies</p>
            <h2 className="text-3xl font-bold tracking-tight text-white font-serif">Technical Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DUMMY_SKILLS.map((skillGroup, index) => (
              <div key={index} className="bg-[#111a27] p-6 sm:p-8 rounded border border-[#1d283a] shadow-sm flex flex-col gap-4 hover:border-[#32FFCE]/30 transition-all">
                <div className={`w-12 h-12 rounded flex items-center justify-center ${skillGroup.iconBg} ${skillGroup.iconColor} mb-2`}>
                  {skillGroup.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{skillGroup.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {skillGroup.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skillGroup.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#070f1a] border border-[#1d283a] text-gray-300 text-[10px] font-bold uppercase tracking-wider rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
