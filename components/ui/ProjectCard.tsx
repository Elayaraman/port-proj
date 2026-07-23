import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
  demoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  repoLink,
  demoLink,
}: ProjectCardProps) {
  const link = demoLink || repoLink;

  return (
    <div className="group flex flex-col h-full">
      {/* Image Area */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="block relative w-full aspect-video rounded-xl overflow-hidden bg-[#0a121e] border border-[#1d283a]/50 mb-6 transition-all hover:border-[#32FFCE]/50">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
           {/* Abstract blurry shape to simulate an image thumbnail */}
           <div className="w-1/2 h-1/2 bg-[#32FFCE] rounded-full blur-3xl opacity-20"></div>
           <div className="absolute w-1/3 h-1/3 bg-blue-500 rounded-full blur-2xl opacity-20 top-1/4 left-1/4"></div>
        </div>
      </a>
      
      {/* Content Area */}
      <div className="flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#32FFCE] transition-colors">
            {title}
          </h3>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#32FFCE] hover:text-[#32FFCE]/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          </a>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#64748b]"
            >
              #{tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
