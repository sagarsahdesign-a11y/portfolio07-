import { Linkedin, Instagram, Twitter, Menu, X } from "lucide-react";
import { useState } from "react";

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

  return (
    <nav className="md:px-12 flex flex-wrap gap-6 z-50 w-full pt-8 pr-6 pl-6 relative items-center justify-between">
      {/* Logo */}
      <a href="#" className="bg-primary text-primary-foreground px-4 py-3 rounded-lg flex items-center gap-3 shadow-lg hover:scale-105 transition-transform">
        <div className="flex flex-col items-center justify-center leading-none border-r-2 border-primary-foreground/20 pr-3">
          <span className="font-black text-xl">: : SS</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-bold text-sm tracking-widest uppercase">SAGAR</span>
          <span className="font-bold text-sm tracking-widest uppercase">SAH</span>
        </div>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 font-bold text-xs tracking-widest uppercase text-foreground/90">
        {navLinks.map((l) => (
          <a key={l.label} href={l.href} className="hover:text-foreground hover:underline decoration-2 underline-offset-4 decoration-accent transition-all">
            {l.label}
          </a>
        ))}
      </div>

      {/* Desktop Social */}
      <div className="hidden md:flex items-center gap-3">
        {socialLinks.map((s, i) => {
          const Icon = s.icon;
          return (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <Icon className="w-4 h-4 fill-current" strokeWidth={1.5} />
            </a>
          );
        })}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
        aria-label="Toggle menu"
      >
        {open ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden w-full bg-card rounded-2xl p-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-bold text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors py-2 border-b border-foreground/10 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((s, i) => {
              const Icon = s.icon;
              return (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon className="w-4 h-4 fill-current" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
