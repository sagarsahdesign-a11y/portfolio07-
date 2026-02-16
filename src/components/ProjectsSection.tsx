import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ZenTrade Trading Platform",
    problem: "Complex B2B workflows causing user confusion and low task completion rates",
    role: "Lead Product Designer",
    tools: ["Figma", "Developer Handoff", "Usability Testing"],
    impact: "Simplified navigation flow, improved dashboard clarity",
    link: "https://www.behance.net/gallery/217897807/ZenTrade-Trading-App-Ui-Design",
    image: `${import.meta.env.BASE_URL}1.png`,
  },
  {
    title: "MountainBrew Café App",
    problem: "Disconnected user experience across ordering, payments, and loyalty program",
    role: "Product Designer & UX Researcher",
    tools: ["Figma", "Framer", "Journey Mapping"],
    impact: "Unified mobile experience with seamless loyalty integration",
    link: "https://www.behance.net/gallery/213575215/Cafe-Mobile-App-Case-Study",
    image: `${import.meta.env.BASE_URL}2.png`,
  },
  {
    title: "Real Estate Property Platform",
    problem: "Poor property discovery and search experience limiting user engagement",
    role: "UI/UX Designer",
    tools: ["Figma", "Adobe XD", "Responsive Design"],
    impact: "Redesigned search flow and property cards for better scannability",
    link: "https://www.behance.net/gallery/207380339/Simple-Real-Estate-Website-UI-Design",
    image: `${import.meta.env.BASE_URL}3.png`,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 md:py-36">
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
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white mb-5"
          >
            Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base text-[#B8C5D6] leading-relaxed"
          >
            Product design work focused on improving user workflows, accessibility, and developer collaboration.
          </motion.p>
        </div>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative glass-card overflow-hidden flex flex-col"
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-black/20 overflow-hidden m-3 rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 pt-2 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors duration-400">
                  {project.title}
                </h3>

                {/* Problem */}
                <div className="mb-3">
                  <p className="text-[10px] font-semibold text-blue-400/50 uppercase tracking-[0.15em] mb-1">
                    Problem
                  </p>
                  <p className="text-sm text-[#B8C5D6] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Role */}
                <div className="mb-3">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.1em] text-white/45 border border-white/[0.08] px-2.5 py-1 rounded-lg">
                    {project.role}
                  </span>
                </div>

                {/* Tools */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2.5 py-1 bg-white/[0.04] text-white/55 rounded-lg border border-white/[0.06] transition-colors duration-400 hover:bg-white/[0.09] hover:text-white/75"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-5 flex-1">
                  <p className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.15em] mb-1">
                    Impact
                  </p>
                  <p className="text-sm text-[#C5D3E2]">
                    {project.impact}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400/80 hover:text-blue-300 font-medium text-sm group/link transition-colors duration-400"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-400" strokeWidth={2} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
