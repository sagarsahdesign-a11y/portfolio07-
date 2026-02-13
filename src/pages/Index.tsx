import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BuildingSection from "@/components/BuildingSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <BuildingSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
