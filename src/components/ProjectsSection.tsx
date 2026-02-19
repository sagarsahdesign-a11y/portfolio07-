import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ZenTrade Trading Platform",
    description: "Redesigned B2B dashboards and navigation to simplify complex workflows and improve usability for traders.",
    tag: "Product Led Growth",
    image: `${import.meta.env.BASE_URL}1.png`,
    link: "https://www.behance.net/gallery/217897807/ZenTrade-Trading-App-Ui-Design",
    accent: "#3b82f6"
  },
  {
    title: "Grand GTA Hotel App",
    description: "Premium hotel booking mobile app with immersive UI, seamless reservation flow and luxury experience design.",
    tag: "Mobile App",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&q=80",
    link: "https://www.behance.net/gallery/217898425/Grand-Gta-Hotel-mobile-App",
    accent: "#f59e0b"
  },
  {
    title: "MountainBrew Café App",
    description: "Created unified mobile experience with seamless loyalty integration and streamlined ordering flow.",
    tag: "UX Case Study",
    image: `${import.meta.env.BASE_URL}2.png`,
    link: "https://www.behance.net/gallery/213575215/Cafe-Mobile-App-Case-Study",
    accent: "#8b5e3c"
  },
  {
    title: "ShivaPrati Health",
    description: "Healthcare platform website design focused on accessibility, trust-building and patient-first user flows.",
    tag: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80",
    link: "https://www.behance.net/gallery/204617717/ShivaPrati-Health-Healthcare-Platform-website-design",
    accent: "#10b981"
  },
  {
    title: "ActivePulse Fitness App",
    description: "Fitness tracking app design with gamification, progress visualization, and personalized workout plans.",
    tag: "App Design",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop&q=80",
    link: "https://www.behance.net/gallery/204619533/ActivePulse-Fitness-Tracking-App-design",
    accent: "#ef4444"
  },
  {
    title: "Real Estate Platform",
    description: "Redesigned property search and discovery experience to improve user engagement and conversions.",
    tag: "Web Design",
    image: `${import.meta.env.BASE_URL}3.png`,
    link: "https://www.behance.net/gallery/207380339/Simple-Real-Estate-Website-UI-Design",
    accent: "#6366f1"
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="s-section">
      <div className="s-container">
        <motion.p
          className="s-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Work
        </motion.p>

        <div className="s-projects">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`s-project${index === 0 ? ' s-project-full' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
            >
              <div className="s-project-img-wrap">
                <img src={project.image} alt={project.title} className="s-project-img" />
              </div>
              <div className="s-project-body">
                <span className="s-project-tag" style={{ background: project.accent }}>
                  {project.tag}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All on Behance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <a
            href="https://www.behance.net/sagarsah7"
            target="_blank"
            rel="noopener noreferrer"
            className="s-btn s-btn-accent"
          >
            View all on Behance <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
