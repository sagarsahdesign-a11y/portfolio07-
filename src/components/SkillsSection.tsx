import { motion } from "framer-motion";

const skills = {
  design: ["Problem Discovery", "User Research", "Design Systems", "Storytelling", "Prototyping", "Visual Design", "UI Animation", "Branding"],
  tools: ["Figma", "Adobe After Effects", "Adobe Illustrator", "Adobe Photoshop", "Webflow", "Gainsight PX"],
  development: ["HTML/CSS", "React Basics", "Tailwind CSS", "Responsive Design"]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="label mb-6">CAPABILITIES</p>
            <h2>Skills & Tools</h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-base mb-4 text-[#1A1A1A]">Design</h4>
              <ul className="space-y-2">
                {skills.design.map((skill, i) => (
                  <li key={i} className="text-sm text-[#6B7280]">• {skill}</li>
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
              <h4 className="font-semibold text-base mb-4 text-[#1A1A1A]">Tools</h4>
              <ul className="space-y-2">
                {skills.tools.map((tool, i) => (
                  <li key={i} className="text-sm text-[#6B7280]">• {tool}</li>
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
              <h4 className="font-semibold text-base mb-4 text-[#1A1A1A]">Development</h4>
              <ul className="space-y-2">
                {skills.development.map((skill, i) => (
                  <li key={i} className="text-sm text-[#6B7280]">• {skill}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
