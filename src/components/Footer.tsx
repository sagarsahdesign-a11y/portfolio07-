import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bk-footer">
      <div className="bk-container">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bk-footer-heading"
        >
          Let's have a word?
        </motion.h2>

        {/* Center CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <a href="#contact" className="bk-btn-circle">
            <ArrowRight size={24} strokeWidth={2} />
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className="font-medium mb-2" style={{ color: 'white' }}>Sagar Sah</p>
          <a
            href="mailto:sagar.sah.design@gmail.com"
            className="text-sm"
            style={{ color: '#888' }}
          >
            sagar.sah.design@gmail.com
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bk-footer-social"
        >
          <a
            href="https://www.linkedin.com/in/sagar-shah-389980319/"
            target="_blank"
            rel="noopener noreferrer"
            className="bk-footer-icon"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/sagaruiux.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="bk-footer-icon"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://x.com/Sagarshahas"
            target="_blank"
            rel="noopener noreferrer"
            className="bk-footer-icon"
          >
            <Twitter size={18} />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-xs" style={{ color: '#555' }}>
            © 2024 Sagar Sah. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
