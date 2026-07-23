import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CtaSection from "@/components/CtaSection";

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
