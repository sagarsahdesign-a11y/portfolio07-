import { Linkedin, Instagram, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="md:px-12 flex flex-col md:flex-row gap-6 z-50 w-full pt-8 pr-6 pl-6 relative items-center justify-between">
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

      {/* Menu */}
      <div className="hidden md:flex items-center gap-10 font-bold text-xs tracking-widest uppercase text-foreground/90">
        <a href="#projects" className="hover:text-foreground hover:underline decoration-2 underline-offset-4 decoration-accent transition-all">Works</a>
        <a href="#about" className="hover:text-foreground hover:underline decoration-2 underline-offset-4 decoration-accent transition-all">About</a>
        <a href="#skills" className="hover:text-foreground hover:underline decoration-2 underline-offset-4 decoration-accent transition-all">Skills</a>
        <a href="#contact" className="hover:text-foreground hover:underline decoration-2 underline-offset-4 decoration-accent transition-all">Contact</a>
      </div>

      {/* Social */}
      <div className="flex items-center gap-3">
        {[
          { icon: Linkedin, href: "https://www.linkedin.com/in/sagar-shah-389980319/" },
          { icon: Instagram, href: "https://www.instagram.com/sagaruiux.1/?__pwa=1" },
          { icon: Twitter, href: "https://x.com/Sagarshahas" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <Icon className="w-4 h-4 fill-current" strokeWidth={1.5} />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
