import { motion } from "framer-motion";

const projects = [
  {
    name: "ZenTrade",
    desc: "B2B trading platform — redesigned for complex workflows",
    icon: "📊",
    bg: "#1a1f2e",
    link: "https://www.behance.net/gallery/217897807/ZenTrade-Trading-App-Ui-Design"
  },
  {
    name: "MountainBrew",
    desc: "Café app with mobile ordering & loyalty flows",
    icon: "☕",
    bg: "#3d2b1f",
    link: "https://www.behance.net/gallery/213575215/Cafe-Mobile-App-Case-Study"
  },
  {
    name: "ATG Hotels",
    desc: "Responsive booking-first UI with smart search & filters",
    icon: "🏨",
    bg: "#2a3a1f",
    link: "https://www.behance.net/gallery/217898425/Grand-Gta-Hotel-mobile-App"
  },
  {
    name: "FitPulse",
    desc: "Fitness app with accessibility-first health dashboard",
    icon: "💪",
    bg: "#2e1a2e",
    link: "https://www.behance.net/gallery/204619533/ActivePulse-Fitness-Tracking-App-design"
  }
];

const ProjectsSection = () => {
  return (
    <section className="jh-section">
      <div className="jh-wrap">
        <motion.p className="jh-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Recently Made ▶
        </motion.p>

        <div className="jh-card-list">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="jh-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="jh-card-icon" style={{ background: p.bg, color: '#fff' }}>
                {p.icon}
              </div>
              <div>
                <p className="jh-card-name">{p.name}</p>
                <p className="jh-card-desc">{p.desc}</p>
              </div>
            </motion.a>
          ))}

          {/* Floating name pill */}
          <motion.div className="jh-pill"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Sagar
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
