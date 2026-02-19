import HeroSection from "@/components/HeroSection";
import BuildingSection from "@/components/BuildingSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Currently Cooking */}
      <BuildingSection />

      {/* Section 3 — Recently Made */}
      <ProjectsSection />

      {/* Section 4 — Other Work */}
      <SkillsSection />

      {/* Section 5 — About */}
      <AboutSection />
    </div>
  );
};

export default Index;
