import { Linkedin, Instagram, Twitter, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Works", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sagar-shah-389980319/" },
  { icon: Instagram, href: "https://www.instagram.com/sagaruiux.1/?__pwa=1" },
  { icon: Twitter, href: "https://x.com/Sagarshahas" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "py-3 px-4 md:px-8"
        : "py-5 px-6 md:px-12"
        }`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between rounded-2xl transition-all duration-500 ${scrolled
          ? "bg-[#0B1120]/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] border border-white/[0.06] px-6 py-3"
          : "px-2 py-2"
          }`}
      >
        {/* Logo — clean, premium */}
        <motion.a
          href="#"
          className="relative bg-white/[0.06] backdrop-blur-sm text-white px-4 py-2.5 rounded-xl flex items-center gap-2.5 border border-white/[0.08] transition-all duration-400 hover:bg-white/[0.1]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center leading-none">
            <span className="font-black text-xl tracking-tighter">SS</span>
          </div>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-white/70">Sagar</span>
            <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-white/70">Sah</span>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              className="relative px-4 py-2 text-xs font-bold tracking-widest uppercase text-white/35 rounded-full transition-all duration-400 hover:bg-white/[0.05] hover:text-white/70"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop Social */}
        <div className="hidden md:flex items-center gap-2">
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:bg-white/[0.08] hover:text-white/60 transition-all duration-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-3.5 h-3.5" strokeWidth={2} />
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/50 hover:bg-white/[0.08] transition-all duration-400"
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden max-w-6xl mx-auto mt-2 bg-[#0B1120]/90 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/[0.06]"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-bold text-sm tracking-widest uppercase text-white/50 hover:text-white/80 transition-colors duration-400 py-3 px-3 rounded-xl hover:bg-white/[0.04]"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-4 mt-3 border-t border-white/[0.06]">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:bg-white/[0.08] hover:text-white/60 transition-all duration-400"
                  >
                    <Icon className="w-4 h-4" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
