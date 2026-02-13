import { PlayCircle, Instagram, Linkedin, Github, Grid } from "lucide-react";
import { motion } from "framer-motion";

const BuildingSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-2xl"
      >
        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-xl">: :</div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm tracking-widest uppercase text-foreground/80">SAGAR</span>
              <span className="font-bold text-sm tracking-widest uppercase text-foreground">BUILDER</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-condensed tracking-tight">BUILDING IN<br />PUBLIC</h2>
          <p className="text-muted-foreground max-w-md mb-8">
            I share daily UI/UX content, case studies, and design tips with 9k+ followers on LinkedIn &amp; Instagram.
          </p>

          <a
            href="https://linkedin.com/in/sagar-shah-389980319"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold uppercase text-sm inline-flex items-center gap-3 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <PlayCircle className="w-5 h-5 fill-current" strokeWidth={1.5} />
            Follow Journey
          </a>
        </div>

        <div className="flex-1 w-full relative h-[300px] md:h-[400px]">
          <div className="absolute top-0 right-0 w-[120%] h-full bg-primary rounded-l-3xl transform -rotate-3 shadow-2xl overflow-hidden flex items-center justify-center p-10">
            <div className="grid grid-cols-2 gap-8 transform rotate-3">
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-background to-accent flex items-center justify-center text-foreground shadow-lg">
                  <Instagram className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <span className="text-primary-foreground font-bold text-xs uppercase">Instagram</span>
              </div>
              <div className="flex flex-col items-center gap-2 mt-12">
                <div className="w-24 h-24 rounded-full bg-[hsl(201,100%,35%)] flex items-center justify-center text-foreground shadow-lg">
                  <Linkedin className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <span className="text-primary-foreground font-bold text-xs uppercase">LinkedIn</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full bg-[hsl(0,0%,20%)] flex items-center justify-center text-foreground shadow-lg">
                  <Github className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <span className="text-primary-foreground font-bold text-xs uppercase">Github</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Grid className="w-64 h-64 text-primary-foreground" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BuildingSection;
