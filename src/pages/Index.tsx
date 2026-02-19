import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BuildingSection from "@/components/BuildingSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-cream)' }}>
      {/* Premium Portfolio Layout */}
      <HeroSection />
      <AboutSection />
      <BuildingSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
