import { motion } from "framer-motion";

const projects = [
  {
    title: "ZenTrade Trading Platform",
    description: "Redesigned B2B dashboards and navigation to simplify complex workflows and improve usability for traders.",
    tag: "Product Led Growth",
    image: `${import.meta.env.BASE_URL}1.png`,
    link: "https://www.behance.net/gallery/217897807/ZenTrade-Trading-App-Ui-Design",
  },
  {
    title: "MountainBrew Café App",
    description: "Created unified mobile experience with seamless loyalty integration and streamlined ordering flow.",
    tag: "UX Case Study",
    image: `${import.meta.env.BASE_URL}2.png`,
    link: "https://www.behance.net/gallery/213575215/Cafe-Mobile-App-Case-Study",
  },
  {
    title: "Real Estate Platform",
    description: "Redesigned property search and discovery experience to improve user engagement and conversions.",
    tag: "Web Design",
    image: `${import.meta.env.BASE_URL}3.png`,
    link: "https://www.behance.net/gallery/207380339/Simple-Real-Estate-Website-UI-Design",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="port-section" style={{ background: 'var(--bg-cream)' }}>
      <div className="port-container">
        <motion.p
          className="port-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          UI/UX DESIGN
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 900,
            marginBottom: '40px'
          }}
        >
          Selected Work
        </motion.h2>

        <div className="port-work-grid">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="port-work-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="port-work-card-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="port-work-card-tag">{project.tag}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
