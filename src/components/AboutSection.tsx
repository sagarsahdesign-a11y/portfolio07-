import { motion } from "framer-motion";

const AboutSection = () => {
  const softwareList = [
    "Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects",
    "Webflow", "Framer", "Miro", "Notion", "Jira",
    "Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects",
    "Webflow", "Framer", "Miro", "Notion", "Jira"
  ];

  const experience = [
    {
      date: "2024 - PRESENT",
      role: "Freelance Product Designer",
      company: "Independent",
      tags: ["UI/UX Design", "Design Systems", "Prototyping"]
    },
    {
      date: "2023 - 2024",
      role: "UI/UX Designer",
      company: "SaaS Product Company",
      tags: ["Design System", "Wireframes", "UI Design", "Usability Testing"]
    },
    {
      date: "2022 - 2023",
      role: "Product Designer",
      company: "Security-Focused Product",
      tags: ["Info Architecture", "User Research", "Accessible Design"]
    }
  ];

  return (
    <section id="intro" className="port-section">
      <div className="port-container">
        {/* Intro Grid */}
        <div className="port-intro">
          {/* Left: About Text */}
          <motion.div
            className="port-intro-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Hey folks! <span style={{ display: 'inline-block', animation: 'port-bounce 1s ease infinite' }}>👋</span>
            </h2>
            <p>
              I'm <strong style={{ color: 'var(--text-dark)' }}>Sagar Sah</strong>, a product designer
              combining UI/UX expertise with a technical background in Cyber Security — based in Bengaluru, India.
            </p>
            <p>
              With 2+ years of experience designing secure, developer-ready SaaS interfaces, I bridge
              design and frontend implementation while applying security-first principles to user workflows.
            </p>
            <p style={{ fontSize: '14px' }}>
              UI/UX content creator with <strong style={{ color: 'var(--accent)' }}>9k+ followers</strong> sharing
              practical design insights and case studies.
            </p>

            {/* Education */}
            <div style={{ marginTop: '32px' }}>
              <p className="port-label">Education</p>
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                <div>
                  <p style={{ fontSize: '11px', color: 'var(--text-light)', fontFamily: 'Space Mono, monospace' }}>2020 - 2024</p>
                  <p style={{ fontSize: '14px', fontWeight: 600 }}>B.Tech in CSE</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Cybersecurity Focus</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="port-label">Work Experience</p>
            <div>
              {experience.map((exp, i) => (
                <div key={i} className="port-exp-item" style={{ gridTemplateColumns: '1fr' }}>
                  <div>
                    <p className="port-exp-date">{exp.date}</p>
                    <p className="port-exp-role">{exp.role}</p>
                    <p className="port-exp-company">{exp.company}</p>
                    <div className="port-exp-tags" style={{ marginTop: '8px', maxWidth: '100%' }}>
                      {exp.tags.map((tag, j) => (
                        <span key={j} className="port-exp-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Software Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '40px',
            padding: '20px 0',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)'
          }}
        >
          <p className="port-label" style={{ marginBottom: '16px', textAlign: 'center' }}>Softwares</p>
          <div className="port-marquee-wrap">
            <div className="port-marquee">
              {softwareList.map((item, i) => (
                <span key={i} className="port-marquee-item">{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
