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

      {/* Floating premium SaaS container */}
      <div className="relative z-10 max-w-[1400px] mx-auto my-8 rounded-3xl spatial-glass overflow-hidden shadow-2xl">
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
