import { motion } from "framer-motion";

const BuildingSection = () => {
  return (
    <section className="s-section" style={{ paddingTop: 0 }}>
      <div className="s-container">
        <div className="s-stats">
          <motion.div className="s-stat" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="s-stat-num">9K+</p>
            <p className="s-stat-label">Followers</p>
          </motion.div>
          <motion.div className="s-stat" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <p className="s-stat-num">2+</p>
            <p className="s-stat-label">Years Exp</p>
          </motion.div>
          <motion.div className="s-stat" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}>
            <p className="s-stat-num">10+</p>
            <p className="s-stat-label">Projects</p>
          </motion.div>
          <motion.div className="s-stat" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 }}>
            <p className="s-stat-num">∞</p>
            <p className="s-stat-label">Curiosity</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuildingSection;
