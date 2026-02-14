import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import BuildingSection from "@/components/BuildingSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth relative min-h-screen">
      {/* Fixed spatial environment background */}
      <div className="spatial-environment" />

      {/* Floating glass container — the entire portfolio */}
      <div
        className="relative z-10 max-w-[1320px] mx-auto my-6 md:my-10 spatial-glass grain overflow-hidden"
        style={{
          perspective: "1200px",
        }}
      >
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <BuildingSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
