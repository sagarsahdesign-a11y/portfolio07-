import React from "react";
import { BikironHero } from "@/components/ui/minimalist-hero";

const HeroSection = () => {
  return (
    <BikironHero
      profileImage={`${import.meta.env.BASE_URL}Sagar.png`}
      name="Sagar here"
      title1="Lead Product"
      title2="Designer"
      description="Product designer combining UI/UX expertise with technical background. Building secure, developer-ready SaaS interfaces with 2+ years of experience."
    />
  );
};

export default HeroSection;
