import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ZenTrade\nTrading Platform",
    description: "Redesigned B2B dashboards and navigation to simplify complex workflows and improve usability for traders.",
    tag: "Product led growth",
    link: "https://www.behance.net/gallery/217897807/ZenTrade-Trading-App-Ui-Design",
    image: `${import.meta.env.BASE_URL}1.png`,
  },
  {
    title: "MountainBrew\nCafé App",
    description: "Created unified mobile experience with seamless loyalty integration and streamlined ordering flow.",
    tag: "UX Case Study",
    link: "https://www.behance.net/gallery/213575215/Cafe-Mobile-App-Case-Study",
    image: `${import.meta.env.BASE_URL}2.png`,
  },
  {
    title: "Real Estate\nProperty Platform",
    description: "Redesigned property search and discovery experience to improve user engagement and conversions.",
    tag: "Web Design",
    link: "https://www.behance.net/gallery/207380339/Simple-Real-Estate-Website-UI-Design",
    image: `${import.meta.env.BASE_URL}3.png`,
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="bk-section bg-page">
      <div className="bk-container">
        {/* Section Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bk-label text-center mb-12"
        >
          BEST WORK
        </motion.p>

        {/* Project Cards - Vertical Stack */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bk-project-card"
            >
              {/* Left: Phone Mockup */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="bk-project-image"
                />
              </div>

              {/* Right: Content */}
              <div className="bk-project-content">
                {/* Tag */}
                <span className="bk-tag">
                  {project.tag}
                </span>

                {/* Title - 2 Lines */}
                <h3 className="bk-project-title" style={{ whiteSpace: 'pre-line' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="bk-project-desc">
                  {project.description}
                </p>

                {/* CTA Arrow - Bottom Right */}
                <div className="mt-auto pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bk-btn-circle inline-flex"
                  >
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
