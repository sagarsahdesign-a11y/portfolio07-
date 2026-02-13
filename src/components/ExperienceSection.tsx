import { Briefcase, Monitor, GraduationCap, Award, MapPin, ExternalLink, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const experienceData = [
  { year: "2024", icon: Briefcase, title: "Freelance UI/UX", location: "Remote", locationIcon: MapPin, tag: "Design", highlighted: false },
  { year: "2023", icon: Monitor, title: "Web Designer", location: "Remote", locationIcon: MapPin, tag: "Frontend", highlighted: false },
  { year: "2023-27", icon: GraduationCap, title: "B.Tech Cyber Security", location: "GIET College", locationIcon: MapPin, tag: "Education", highlighted: true },
  { year: "2024", icon: Award, title: "Figma Mastery", location: "Certification", locationIcon: ExternalLink, tag: "Skills", highlighted: false },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 pb-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-condensed uppercase tracking-tight">Experience &amp; Education</h2>
        <div className="inline-flex bg-brand-darker p-1 rounded-full">
          <button className="px-8 py-2 bg-primary text-primary-foreground rounded-full text-xs font-bold uppercase tracking-wide shadow-md">Work</button>
          <button className="px-8 py-2 text-foreground/70 hover:text-foreground rounded-full text-xs font-bold uppercase tracking-wide transition-colors">Education</button>
          <button className="px-8 py-2 text-foreground/70 hover:text-foreground rounded-full text-xs font-bold uppercase tracking-wide transition-colors">Certs</button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {experienceData.map((item, i) => {
          const Icon = item.icon;
          const LocIcon = item.locationIcon;

          if (item.highlighted) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1.02 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center p-4 md:h-24 rounded-xl bg-primary text-primary-foreground shadow-xl z-10 cursor-pointer relative overflow-hidden"
              >
                <div className="w-full md:w-24 text-xs font-bold opacity-60 mb-2 md:mb-0">{item.year}</div>
                <div className="w-full md:w-16 mb-2 md:mb-0">
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-foreground">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1 font-bold text-lg md:text-2xl w-full text-center md:text-left mb-1 md:mb-0 tracking-tight font-display">{item.title}</div>
                <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start opacity-60 text-xs font-bold uppercase tracking-wider mb-2 md:mb-0">
                  <LocIcon className="w-3 h-3" strokeWidth={1.5} /> {item.location}
                </div>
                <div className="w-full md:w-48 flex justify-center md:justify-end gap-2 mb-2 md:mb-0">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded text-[10px] font-bold uppercase">{item.tag}</span>
                </div>
                <div className="w-10 flex justify-end">
                  <Play className="w-4 h-4 fill-current ml-0.5" strokeWidth={1.5} />
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col md:flex-row items-center p-4 md:h-20 rounded-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer border-b border-foreground/10 hover:border-transparent"
            >
              <div className="w-full md:w-24 text-xs font-bold opacity-60 mb-2 md:mb-0">{item.year}</div>
              <div className="w-full md:w-16 mb-2 md:mb-0">
                <Icon className="w-6 h-6 group-hover:text-accent transition-colors" strokeWidth={1.5} />
              </div>
              <div className="flex-1 font-bold text-lg md:text-xl w-full text-center md:text-left mb-1 md:mb-0 tracking-tight">{item.title}</div>
              <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start opacity-60 text-xs font-bold uppercase tracking-wider mb-2 md:mb-0">
                <LocIcon className="w-3 h-3" strokeWidth={1.5} /> {item.location}
              </div>
              <div className="w-full md:w-48 flex justify-center md:justify-end gap-2 mb-2 md:mb-0">
                <span className="border border-current px-2 py-1 rounded text-[10px] font-bold uppercase group-hover:border-primary-foreground/20">{item.tag}</span>
              </div>
              <div className="w-10 flex justify-end">
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
