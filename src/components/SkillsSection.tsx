import { motion } from "framer-motion";

const skills = {
  design: ["Problem Discovery", "User Research", "Design Systems", "Storytelling", "Prototyping", "Visual Design", "UI Animation", "Branding"],
  tools: ["Figma", "Adobe After Effects", "Adobe Illustrator", "Adobe Photoshop", "Webflow", "Gainsight PX"],
  development: ["HTML/CSS", "React Basics", "Tailwind CSS", "Responsive Design"]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bk-section bg-page">
      <div className="bk-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-dark mb-2">Skills & Tools</h2>
        </motion.div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-dark font-semibold mb-4" style={{ fontSize: '16px', fontFamily: 'DM Sans' }}>
              Skills
            </h4>
            <ul className="space-y-2">
              {skills.design.map((skill, i) => (
                <li key={i} className="text-sm text-muted">• {skill}</li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-dark font-semibold mb-4" style={{ fontSize: '16px', fontFamily: 'DM Sans' }}>
              Design tools
            </h4>
            <ul className="space-y-2">
              {skills.tools.map((tool, i) => (
                <li key={i} className="text-sm text-muted">• {tool}</li>
              ))}
            </ul>
          </motion.div>

          {/* Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-dark font-semibold mb-4" style={{ fontSize: '16px', fontFamily: 'DM Sans' }}>
              Software
            </h4>
            <ul className="space-y-2">
              {skills.development.map((skill, i) => (
                <li key={i} className="text-sm text-muted">• {skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
