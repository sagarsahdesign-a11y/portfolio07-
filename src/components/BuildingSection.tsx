import { motion } from "framer-motion";

const BuildingSection = () => {
  return (
    <section className="port-section" style={{ paddingBottom: '40px' }}>
      <div className="port-container">
        {/* Stats Grid */}
        <div className="port-stats-grid">
          <motion.div
            className="port-stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="port-stat-num">9K+</p>
            <p className="port-stat-label">Instagram Followers</p>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>
              Sharing UI/UX design insights & case studies
            </p>
          </motion.div>

          <motion.div
            className="port-stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="port-stat-num">2+</p>
            <p className="port-stat-label">Years of Experience</p>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>
              Secure SaaS interfaces & design systems
            </p>
          </motion.div>

          <motion.div
            className="port-stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="port-stat-num">10+</p>
            <p className="port-stat-label">Projects Shipped</p>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>
              Mobile apps, dashboards & design systems
            </p>
          </motion.div>

          <motion.div
            className="port-stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="port-stat-num">∞</p>
            <p className="port-stat-label">Currently Cooking</p>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>
              Design systems for secure SaaS products
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          <a href="#work" className="port-btn port-btn-accent">
            Go see my work ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingSection;
