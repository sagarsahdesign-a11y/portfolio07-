import { motion } from "framer-motion";

const BuildingSection = () => {
  return (
    <section className="jk-section">
      <div className="jk-container">
        <motion.p
          className="jk-section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Currently cooking ☺︎
        </motion.p>

        <motion.div
          className="jk-cooking-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            lineHeight: '1.8',
            marginBottom: '12px'
          }}>
            Designing something new called{' '}
            <span style={{ fontWeight: 700, color: 'var(--text-dark)' }}>
              🌿 Design Systems for Secure SaaS
            </span>
          </p>
          <p style={{
            fontSize: '12px',
            color: 'var(--text-light)',
            lineHeight: '1.7'
          }}>
            Exploring the intersection of design, security, and developer experience
            to create scalable component libraries that ship faster.
          </p>
          <p style={{
            fontSize: '12px',
            color: 'var(--text-light)',
            marginTop: '12px'
          }}>
            Stay tuned for updates. ✈️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingSection;
