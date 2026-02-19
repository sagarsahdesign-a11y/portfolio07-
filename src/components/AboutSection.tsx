import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="jh-section">
      <div className="jh-wrap">
        <motion.p className="jh-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About ⌘
        </motion.p>

        <motion.div className="jh-about"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a UI/UX designer (he/him) who loves crafting usable, accessible interfaces and shipping polished prototypes for web & mobile. Currently based in Bengaluru, India.
          </p>
          <p>
            While I value aesthetic and emotional aspects of design, my recent work has centered on bridging design and front-end development to deliver experiences that are both beautiful and buildable.
          </p>
          <p>
            I'm currently pursuing my B.Tech in Cyber Security at GIET College, and completed my high school in Science from DAV College, Kathmandu.
          </p>
          <p>
            I design to make people's lives simpler and more joyful 🤩.
          </p>

          <div className="jh-about-links">
            <a href="https://www.linkedin.com/in/sagar-shah-389980319/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {' | '}
            <a href="https://www.instagram.com/sagaruiux.1/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            {' | '}
            E-mail:{' '}
            <a href="mailto:sagar.sah.design@gmail.com">sagar.sah.design@gmail.com</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
