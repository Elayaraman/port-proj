import HeroSection from "@/components/sections/HeroSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-[#070f1a]">
      <HeroSection />
      <ExpertiseSection />
      <ExperienceSection />
      <ProjectsSection />
      <CtaSection />
    </div>
  );
}
