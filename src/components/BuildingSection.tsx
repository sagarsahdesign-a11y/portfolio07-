import { motion } from "framer-motion";

const BuildingSection = () => {
  return (
    <section id="building" className="bk-section bg-white">
      <div className="bk-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bk-label text-center mb-6"
        >
          CURRENTLY BUILDING
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bk-card max-w-md mx-auto text-center"
        >
          <h4 className="text-dark mb-3" style={{ fontFamily: 'DM Sans', fontWeight: 600 }}>
            New Design Systems
          </h4>
          <p className="text-sm text-muted">
            Exploring the intersection of design, security, and developer experience
            to create scalable component libraries.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingSection;
