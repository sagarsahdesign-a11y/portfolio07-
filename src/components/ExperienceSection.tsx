import { motion } from "framer-motion";

const experience = [
  {
    year: "2024 – Present",
    title: "Freelance Product Designer",
    company: "Remote",
    type: "Work",
    responsibilities: [
      "Led UX redesigns for B2B SaaS platforms focusing on security and developer collaboration",
      "Conducted usability testing and implemented accessibility standards (WCAG AA)",
      "Delivered production-ready Figma files with component libraries and design tokens",
    ],
  },
  {
    year: "2023 – 2024",
    title: "Freelance UI Designer",
    company: "Remote",
    type: "Work",
    responsibilities: [
      "Designed mobile-first web interfaces for e-commerce and content platforms",
      "Created responsive designs with focus on cross-platform consistency",
      "Collaborated with frontend developers for seamless implementation",
    ],
  },
  {
    year: "2023 – 2027",
    title: "B.Tech in Cyber Security",
    company: "GIET College",
    type: "Education",
    responsibilities: [
      "Specialized in security-first UX patterns and authentication flows",
      "Applied technical knowledge to design secure, developer-friendly interfaces",
    ],
  },
  {
    year: "2024",
    title: "UI/UX Design Certifications",
    company: "Figma, Adobe XD, Framer",
    type: "Certifications",
    responsibilities: [
      "Advanced Figma: Auto-layout, components, and design systems",
      "Framer: Interactive prototyping and animations",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="section-label mb-4 block"
          >
            Background
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white"
          >
            Experience & Education
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative pl-8 border-l border-white/[0.05] pb-12 last:pb-0"
            >
              {/* Timeline dot with subtle glow */}
              <div
                className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500/70 border-2 border-[#080B14]"
                style={{
                  boxShadow: "0 0 8px rgba(37,99,235,0.3)",
                }}
              />

              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-sm font-medium text-[#8B95A5]">
                  {item.year}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-white/[0.04] text-white/40 rounded border border-white/[0.06] tracking-[0.08em] uppercase">
                  {item.type}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-[#8B95A5] mb-4">
                {item.company}
              </p>

              <ul className="space-y-2.5">
                {item.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-[#A0AAB8]/70 flex items-start gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/10 mt-2 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
