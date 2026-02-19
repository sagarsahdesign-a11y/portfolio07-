import { motion } from "framer-motion";

const BuildingSection = () => {
  return (
    <section id="cooking" className="jh-section">
      <div className="jh-wrap">
        <motion.p className="jh-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Currently cooking 🍳
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="jh-cooking-text">
            Designing something new called{' '}
            <span className="jh-cooking-project">🎨 Daily UI/UX Content</span>.
          </p>
          <p className="jh-cooking-text">
            A daily design content series helping aspiring designers learn UI/UX through real case studies, teardowns, and tips. Building in public on LinkedIn & Instagram.
          </p>
          <p className="jh-cooking-text">
            Follow along on LinkedIn & Instagram. 📲
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingSection;
