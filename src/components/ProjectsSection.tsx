import { motion } from "framer-motion";

const projects = [
  {
    title: "ZenTrade",
    description: "B2B trading platform with simplified workflows",
    icon: "📊",
    iconBg: "#e8f0fe",
    link: "https://www.behance.net/gallery/217897807/ZenTrade-Trading-App-Ui-Design",
  },
  {
    title: "MountainBrew Café",
    description: "Unified mobile experience with loyalty integration",
    icon: "☕",
    iconBg: "#fef3e2",
    link: "https://www.behance.net/gallery/213575215/Cafe-Mobile-App-Case-Study",
  },
  {
    title: "Real Estate Platform",
    description: "Property search and discovery experience",
    icon: "🏠",
    iconBg: "#e8f5e9",
    link: "https://www.behance.net/gallery/207380339/Simple-Real-Estate-Website-UI-Design",
  },
];

const ProjectsSection = () => {
  return (
    <section className="jk-section">
      <div className="jk-container">
        <motion.p
          className="jk-section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Recently Made ▶
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="jk-project-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div
                className="jk-project-icon"
                style={{ background: project.iconBg }}
              >
                {project.icon}
              </div>
              <div className="jk-project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
