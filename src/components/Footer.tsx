import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Dark Gallery Section — Torn Paper Transition */}
      <div className="port-torn port-torn-dark" />

      <section className="port-footer">
        {/* Giant Footer Title */}
        <motion.h2
          className="port-footer-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>P<span style={{ color: 'var(--accent)' }}>O</span>RT</span>
          <br />
          <span>FOLI<span style={{ color: 'var(--accent)' }}>O</span></span>
        </motion.h2>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: '32px' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '8px' }}>
            Sagar Sah · Product Designer
          </p>
          <a
            href="mailto:sagar.sah.design@gmail.com"
            style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            sagar.sah.design@gmail.com
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="port-footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://www.linkedin.com/in/sagar-shah-389980319/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-footer-link"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/sagaruiux.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="port-footer-link"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://x.com/Sagarshahas"
            target="_blank"
            rel="noopener noreferrer"
            className="port-footer-link"
          >
            <Twitter size={18} />
          </a>
          <a
            href="mailto:sagar.sah.design@gmail.com"
            className="port-footer-link"
          >
            <Mail size={18} />
          </a>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '32px',
            flexWrap: 'wrap'
          }}
        >
          <a href="#/resume" className="port-btn port-btn-white" style={{ fontSize: '12px', padding: '8px 20px' }}>
            View Resumé
          </a>
          <a href="#/philosophy" className="port-btn port-btn-white" style={{ fontSize: '12px', padding: '8px 20px' }}>
            Design Philosophy
          </a>
          <a href="#/life" className="port-btn port-btn-white" style={{ fontSize: '12px', padding: '8px 20px' }}>
            Life & Stories
          </a>
          <a href="#/services" className="port-btn port-btn-white" style={{ fontSize: '12px', padding: '8px 20px' }}>
            Services
          </a>
        </motion.div>

        {/* Copyright */}
        <p style={{
          color: 'rgba(255,255,255,0.2)',
          fontSize: '11px',
          marginTop: '48px',
          fontFamily: 'Space Mono, monospace'
        }}>
          © 2026 Sagar Sah. Designed with ❤️
        </p>
      </section>
    </>
  );
};

export default Footer;
