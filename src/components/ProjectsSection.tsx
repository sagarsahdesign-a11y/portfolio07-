import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ZenTrade Trading Platform",
    description: "Complex B2B workflows causing user confusion and low task completion rates",
    tag: "Product led growth",
    link: "https://www.behance.net/gallery/217897807/ZenTrade-Trading-App-Ui-Design",
    image: `${import.meta.env.BASE_URL}1.png`,
  },
  {
    title: "MountainBrew Café App",
    description: "Disconnected user experience across ordering, payments, and loyalty program",
    tag: "Mobile Experience",
    link: "https://www.behance.net/gallery/213575215/Cafe-Mobile-App-Case-Study",
    image: `${import.meta.env.BASE_URL}2.png`,
  },
  {
    title: "Real Estate Property Platform",
    description: "Poor property discovery and search experience limiting user engagement",
    tag: "Web Design",
    link: "https://www.behance.net/gallery/207380339/Simple-Real-Estate-Website-UI-Design",
    image: `${import.meta.env.BASE_URL}3.png`,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label mb-6"
          >
            BEST WORK
          </motion.p>
        </div>

        {/* Project Cards - Vertical Stack */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Right: Content */}
                <div className="space-y-4">
                  {/* Tag */}
                  <span className="tag">
                    {project.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                  >
                    <div className="btn-circle w-12 h-12 group/cta">
                      <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2} />
                    </div>
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
