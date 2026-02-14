import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core UX/UI",
    skills: [
      "User Research",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Usability Testing",
      "Design Systems",
      "Accessibility (WCAG)",
      "Responsive Design",
    ],
  },
  {
    title: "Design Strategy",
    skills: [
      "User-Centered Design",
      "Journey Mapping",
      "Persona Development",
      "Security UX Patterns",
      "Product Thinking",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Figma",
      "Framer",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "Miro",
      "Notion",
    ],
  },
  {
    title: "Development & Technical",
    skills: [
      "HTML5 & CSS3",
      "JavaScript",
      "Developer Handoff",
      "Design Tokens",
      "Secure Authentication UX",
      "Git Collaboration",
    ],
  },
];

const highlights = [
  "Combining design expertise with cyber security knowledge for secure, user-friendly interfaces",
  "Experienced in building accessible, developer-ready design systems",
  "Active community contributor with 9k+ followers sharing practical UX insights",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Soft ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(148,163,184,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="section-label mb-4 block">About Me</span>

            <h2 className="text-white mb-6">
              Design Meets<br />
              <span className="text-blue-400/80">Security</span>
            </h2>

            {/* About paragraph */}
            <p className="text-base text-[#8B95A5] leading-[1.8] mb-10">
              Product designer combining UI/UX expertise with a technical background in Cyber Security. I design accessible web and mobile interfaces while collaborating with developers to deliver production-ready products.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                  <p className="text-sm text-[#A0AAB8] leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-white/[0.05] space-y-3 text-sm text-[#8B95A5]">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-white/60">Location:</span>
                Bengaluru, India
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-white/60">Email:</span>
                <a href="mailto:sagar.sah.design@gmail.com" className="text-blue-400/70 hover:text-blue-300 transition-colors duration-400">
                  sagar.sah.design@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-white/60">Phone:</span>
                +91 74162 92404
              </p>
            </div>
          </motion.div>

          {/* Right Column — Skills Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                Skills & Expertise
              </h3>
              <p className="text-sm text-[#8B95A5]">
                A comprehensive toolkit for building exceptional digital products
              </p>
            </motion.div>

            <div className="grid gap-5">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group glass-card p-5"
                >
                  <h4 className="text-sm font-semibold text-white/70 mb-3 flex items-center gap-3">
                    <div className="w-0.5 h-5 bg-blue-500/40 rounded-full group-hover:h-7 transition-all duration-400" />
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 pl-5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-[13px] text-[#8B95A5] flex items-center gap-2.5 py-0.5 hover:text-[#A0AAB8] transition-colors duration-400"
                      >
                        <div className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
