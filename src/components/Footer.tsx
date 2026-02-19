import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="s-footer">
      <motion.h2
        className="s-footer-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Let's work<br />together<span style={{ color: 'var(--accent)' }}>.</span>
      </motion.h2>

      <motion.p
        className="s-footer-sub"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Have a project in mind? Let's make something great.
      </motion.p>

      <motion.div
        className="s-footer-links"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        <a href="https://www.linkedin.com/in/sagar-shah-389980319/" target="_blank" rel="noopener noreferrer" className="s-footer-link">
          <Linkedin size={18} />
        </a>
        <a href="https://www.instagram.com/sagaruiux.1/" target="_blank" rel="noopener noreferrer" className="s-footer-link">
          <Instagram size={18} />
        </a>
        <a href="https://x.com/Sagarshahas" target="_blank" rel="noopener noreferrer" className="s-footer-link">
          <Twitter size={18} />
        </a>
        <a href="mailto:sagar.sah.design@gmail.com" className="s-footer-link">
          <Mail size={18} />
        </a>
      </motion.div>

      <motion.div
        className="s-footer-nav"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <a href="#/resume">Resumé</a>
        <a href="#/philosophy">Philosophy</a>
        <a href="#/life">Life & Stories</a>
        <a href="#/services">Services</a>
      </motion.div>

      <motion.p
        className="s-footer-copy"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        © 2026 Sagar Sah. Designed with ❤️
      </motion.p>
    </footer>
  );
};

export default Footer;
