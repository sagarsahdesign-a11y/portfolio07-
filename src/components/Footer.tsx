import { Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sagar-shah-389980319/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sagaruiux.1/?__pwa=1", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/Sagarshahas", label: "X" },
];

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-white/[0.04] pt-16 md:pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        {/* Top — CTA + Social */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-md text-center lg:text-left leading-[1.05]"
          >
            You can find<br />
            <span className="text-blue-400/60">me here</span>:
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-white/30 hover:text-white/60 transition-all duration-400"
                  whileHover={{ y: -3 }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.04] mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-semibold tracking-[0.15em] uppercase text-white/20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 font-extrabold text-lg tracking-tight">
              SS
            </span>
            <div className="h-5 w-px bg-white/[0.06]" />
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-white/30">Sagar</span>
              <span className="text-white/30">Sah</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex gap-8">
            <a href="#projects" className="hover:text-white/40 transition-colors duration-400">Works</a>
            <a href="#about" className="hover:text-white/40 transition-colors duration-400">About</a>
            <a href="#skills" className="hover:text-white/40 transition-colors duration-400">Skills</a>
            <a href="mailto:sagar.sah.design@gmail.com" className="hover:text-white/40 transition-colors duration-400">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p>2024 | COPYRIGHT</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
