import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label mb-6"
          >
            EXPERIENCE HIGHLIGHTS
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#6B7280] leading-relaxed"
          >
            2+ years designing secure SaaS interfaces, building design systems,
            and collaborating with development teams to ship user-centered products.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
