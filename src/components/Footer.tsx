import { motion } from "framer-motion";
import { Linkedin, Instagram, Github, Twitter, ArrowRight } from "lucide-react";

const social = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sagar-shah-389980319/" },
  { icon: Instagram, href: "https://www.instagram.com/sagaruiux.1/?__pwa=1" },
  { icon: Github, href: "#" },
  { icon: Twitter, href: "https://x.com/Sagarshahas" },
];

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-center mb-8 text-italic"
          >
            Let's have a word?
          </motion.h2>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <p className="text-white font-semibold mb-2">Sagar Sah</p>
            <a href="mailto:sagar.sah.design@gmail.com" className="text-white/80 hover:text-white transition-colors">
              sagar.sah.design@gmail.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            {social.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>

          {/* Large CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <a
              href="#contact"
              className="w-16 h-16 rounded-full bg-[#FF6B35] hover:bg-[#E55A2A] flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg"
            >
              <ArrowRight size={24} strokeWidth={2} />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-white/40 text-sm"
          >
            <p>© 2024 Sagar Sah. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
