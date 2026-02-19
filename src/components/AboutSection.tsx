import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="jk-about">
      <div className="jk-container">
        <motion.p
          className="jk-section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About ⌘
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p>
            I'm a product designer who loves crafting meaningful interactions and bringing fun ideas to life.
            Currently based in Bengaluru, India.
          </p>
          <p>
            While I value the aesthetic and emotional aspects of design, my recent work has centered on leveraging
            design psychology to achieve measurable user and business outcomes.
          </p>
          <p>
            With a background in Cyber Security, I bring a security-first mindset to designing
            web and mobile interfaces — bridging design and frontend implementation (HTML/CSS/JavaScript).
            UI/UX content creator with 9k+ followers sharing practical design insights and case studies.
          </p>
          <p>
            I design to make people smile 😊
          </p>
        </motion.div>

        <motion.div
          className="jk-about-links"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: '24px' }}
        >
          <a href="https://www.linkedin.com/in/sagar-shah-389980319/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {' | '}
          <a href="https://x.com/Sagarshahas" target="_blank" rel="noopener noreferrer">
            Twitter (x)
          </a>
          {' | '}
          E-mail:{' '}
          <a href="mailto:sagar.sah.design@gmail.com">
            sagar.sah.design@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
