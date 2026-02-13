import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Figma, PenTool, Code2, Shield, Users, Lightbulb } from "lucide-react";

const skills = [
  { label: "User Research", icon: Users },
  { label: "Wireframing & Prototyping", icon: PenTool },
  { label: "Design Systems", icon: Lightbulb },
  { label: "Figma & Framer", icon: Figma },
  { label: "HTML/CSS/JS", icon: Code2 },
  { label: "Security UX", icon: Shield },
];

const tools = ["Figma", "Framer", "Adobe XD", "Photoshop", "Illustrator", "Miro", "Webflow", "Notion", "Jira"];

const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-12 items-start"
      >
        {/* Left */}
        <div>
          <h3 className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4">About Me</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-condensed uppercase tracking-tight mb-6 leading-[0.9]">
            Design Meets<br />Security
          </h2>

          <p className="text-foreground/80 text-sm leading-relaxed mb-6 max-w-lg">
            Product designer combining UI/UX expertise with a technical background in Cyber Security. Experienced in designing accessible web and mobile interfaces and collaborating with developers to deliver build-ready products.
          </p>
          <p className="text-foreground/80 text-sm leading-relaxed mb-8 max-w-lg">
            Bridges design and frontend implementation (HTML/CSS/JavaScript) while applying security-first principles to user workflows. UI/UX content creator with 9k+ followers sharing practical design insights and case studies.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-bold text-foreground/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" strokeWidth={1.5} />
              Bengaluru, India
            </div>
            <a href="mailto:sagar.sah.design@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4 text-accent" strokeWidth={1.5} />
              sagar.sah.design@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" strokeWidth={1.5} />
              +91 74162 92404
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          {/* Skills */}
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground/60">Core Skills</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {skills.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="bg-card rounded-xl p-4 flex items-center gap-3 hover:bg-primary hover:text-primary-foreground transition-colors group cursor-default"
                >
                  <Icon className="w-5 h-5 text-accent group-hover:text-primary-foreground/80 shrink-0" strokeWidth={1.5} />
                  <span className="text-xs font-bold leading-tight">{s.label}</span>
                </div>
              );
            })}
          </div>

          {/* Tools */}
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground/60">Tools & Tech</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="border border-foreground/20 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
