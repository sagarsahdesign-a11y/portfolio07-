import { motion } from "framer-motion";

const skills = {
  "Product & UX": [
    "User Research",
    "Wireframing",
    "Prototyping",
    "Usability Testing",
    "Journey Mapping",
    "Information Architecture",
    "Accessibility (WCAG)",
  ],
  "Tools": [
    "Figma",
    "Framer",
    "Adobe XD",
    "Miro",
    "Notion",
  ],
  "Frontend": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Developer Handoff",
    "Secure Authentication UX",
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 md:py-36">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="section-label mb-4 block"
          >
            Core Competencies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white"
          >
            Skills & Expertise
          </motion.h2>
        </div>

        {/* 3-column structured layout */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-semibold text-white/75 mb-6 pb-3 border-b border-white/[0.06] flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                {category}
              </h3>
              <ul className="space-y-3.5">
                {items.map((skill, idx) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 + idx * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-sm text-[#B8C5D6] flex items-center gap-3 hover:text-[#D5E3F2] transition-colors duration-400"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/[0.08] flex-shrink-0" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
