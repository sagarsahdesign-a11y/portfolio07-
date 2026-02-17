import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="bk-section bg-page">
      <div className="bk-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bk-label text-center mb-6"
        >
          EXPERIENCE
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted max-w-xl mx-auto"
          style={{ fontSize: '15px', lineHeight: '1.7' }}
        >
          2+ years designing secure SaaS interfaces, building design systems,
          and collaborating with development teams to ship user-centered products.
        </motion.p>
      </div>
    </section>
  );
};

export default ExperienceSection;
