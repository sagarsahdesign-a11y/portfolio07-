import { Dribbble, Twitter, Twitch, Facebook, Instagram, Play } from "lucide-react";

const socialLinks = [
  { icon: Dribbble, href: "#", bg: "bg-primary", text: "text-[hsl(340,82%,52%)]", border: "" },
  { icon: Twitter, href: "#", bg: "bg-[hsl(203,89%,53%)]", text: "text-foreground", border: "border-4 border-primary" },
  { icon: Twitch, href: "#", bg: "bg-[hsl(264,100%,64%)]", text: "text-foreground", border: "border-2 border-foreground/20" },
  { icon: Facebook, href: "#", bg: "bg-[hsl(214,89%,52%)]", text: "text-foreground", border: "border-2 border-foreground/20" },
  { icon: Instagram, href: "#", bg: "bg-[hsl(340,75%,54%)]", text: "text-foreground", border: "border-2 border-foreground/20" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-card pt-12 pb-8 rounded-t-[3rem] mt-12 mx-2 md:mx-6 shadow-inner border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <h2 className="text-5xl md:text-6xl font-condensed font-bold max-w-md text-center lg:text-left leading-[0.9] tracking-tight">
            You can find<br />me here:
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  className={`w-16 h-16 ${s.bg} rounded-2xl flex items-center justify-center ${s.text} hover:scale-110 transition-transform shadow-lg ${s.border} relative`}
                >
                  <Icon className="w-8 h-8 fill-current" strokeWidth={1.5} />
                  {i === 1 && (
                    <div className="absolute -bottom-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-md">
                      <Play className="w-3 h-3 text-[hsl(203,89%,53%)] fill-current ml-0.5" strokeWidth={1.5} />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold tracking-widest uppercase text-foreground/60">
          <div className="flex items-center gap-2">
            <span className="text-foreground font-black text-lg mr-2">: : SS</span>
            <div className="flex flex-col leading-none">
              <span>SAGAR</span>
              <span>SAH</span>
            </div>
          </div>

          <div className="flex gap-8">
            <a href="#projects" className="hover:text-foreground transition-colors">Works</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Awards</a>
            <a href="mailto:sagar.sah.design@gmail.com" className="hover:text-foreground transition-colors">Contacts</a>
          </div>

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
