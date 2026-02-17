import { motion } from "framer-motion";

const BuildingSection = () => {
  return (
    <section id="building" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-soft text-center"
          >
            <h3 className="mb-4">Currently Building</h3>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Working on new design systems and exploring the intersection of design,
              security, and developer experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuildingSection;
