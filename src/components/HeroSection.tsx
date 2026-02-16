import React from "react";
import { Linkedin, Instagram, Github, Twitter } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

const navLinks = [
  { label: "WORK", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sagar-shah-389980319/" },
  { icon: Instagram, href: "https://www.instagram.com/sagaruiux.1/?__pwa=1" },
  { icon: Github, href: "#" },
  { icon: Twitter, href: "https://x.com/Sagarshahas" },
];

const HeroSection = () => {
  return (
    <MinimalistHero
      logoText="SAGAR."
      navLinks={navLinks}
      mainText="Product Designer building secure, developer-ready SaaS interfaces. I combine UI/UX thinking, frontend fundamentals, and cybersecurity principles to ship real-world digital products."
      readMoreLink="#projects"
      imageSrc={`${import.meta.env.BASE_URL}Sagar.png`}
      imageAlt="Portrait of Sagar Sah"
      overlayText={{
        part1: "design",
        part2: "secure.",
      }}
      socialLinks={socialLinks}
      locationText="Bengaluru, India"
    />
  );
};

export default HeroSection;
