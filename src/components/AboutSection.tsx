import { motion } from "framer-motion";

const experience = [
  {
    date: "2024 — PRESENT",
    role: "Freelance Product Designer",
    company: "Independent",
    tags: ["UI/UX Design", "Design Systems", "Prototyping"]
  },
  {
    date: "2023 — 2024",
    role: "UI/UX Designer",
    company: "SaaS Product Company",
    tags: ["Design System", "Wireframes", "UI Design"]
  },
  {
    date: "2022 — 2023",
    role: "Product Designer",
    company: "Security-Focused Product",
    tags: ["User Research", "Accessible Design", "Info Architecture"]
  }
];

const tools = [
  "Figma", "Adobe XD", "Photoshop", "Illustrator",
  "After Effects", "Webflow", "Framer", "Miro",
  "Figma", "Adobe XD", "Photoshop", "Illustrator",
  "After Effects", "Webflow", "Framer", "Miro"
];

const AboutSection = () => {
  return (
    <section id="about" className="s-section">
      <div className="s-container">
        {/* Intro Grid */}
        <div className="s-intro-grid">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="s-intro-hello">
              Hey, I'm Sagar 👋
            </h2>
            <p className="s-intro-text">
              A <span className="s-intro-highlight">product designer</span> based in Bengaluru, India —
              combining UI/UX expertise with a Cyber Security background.
            </p>
            <p className="s-intro-text">
              2+ years of experience designing secure, developer-ready SaaS interfaces.
              UI/UX content creator with <span className="s-intro-accent">9k+ followers</span>.
            </p>

            <div style={{ marginTop: '28px' }}>
              <p className="s-label">Education</p>
              <div>
                <p style={{ fontSize: '11px', color: 'var(--text-3)', fontFamily: 'Space Mono, monospace' }}>2020 — 2024</p>
                <p style={{ fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>B.Tech in Computer Science</p>
                <p style={{ fontSize: '13px', color: 'var(--text-2)' }}>Cyber Security Specialization</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Experience */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <p className="s-label">Experience</p>
            {experience.map((exp, i) => (
              <div key={i} className="s-exp-item">
                <p className="s-exp-date">{exp.date}</p>
                <p className="s-exp-role">{exp.role}</p>
                <p className="s-exp-company">{exp.company}</p>
                <div className="s-exp-tags">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="s-exp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Software Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: '60px' }}
        >
          <div className="s-marquee-wrap">
            <div className="s-marquee">
              {tools.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
