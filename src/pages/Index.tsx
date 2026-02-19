import HeroSection from "@/components/HeroSection";
import BuildingSection from "@/components/BuildingSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      {/* Jackie Hu Style Single-Page Layout */}
      <HeroSection />
      <BuildingSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </div>
  );
};

export default Index;
