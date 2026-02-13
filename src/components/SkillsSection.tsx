import { Award, Layers, PenTool, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-4">
        {/* Left */}
        <div className="hidden md:block opacity-50 hover:opacity-100 transition-opacity">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold mb-4 opacity-60">No 1/3</span>
            <h3 className="text-3xl font-condensed font-bold leading-none mb-6 tracking-tight">Personal<br />Awards</h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-4 border-foreground rounded-3xl p-1 bg-card"
        >
          <div className="bg-background rounded-[20px] p-8 text-center h-full flex flex-col items-center justify-center relative overflow-hidden">
            <span className="absolute top-6 text-xs font-bold opacity-60 border border-foreground/20 px-2 py-0.5 rounded-full">2024</span>

            <div className="w-24 h-24 rounded-full border-4 border-foreground flex items-center justify-center mb-6 mt-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Award className="w-8 h-8" strokeWidth={1.5} />
              </div>
            </div>

            <h3 className="text-2xl font-bold leading-tight mb-2 tracking-tight font-display">Design Systems<br />Mastery</h3>
            <p className="text-xs opacity-70 max-w-[200px] mb-8">Advanced certification in building scalable design architectures.</p>

            <button className="bg-primary text-primary-foreground pl-4 pr-1 py-1 rounded-full flex items-center gap-3 text-xs font-bold uppercase shadow-lg hover:scale-105 transition-transform">
              Verify
              <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Right */}
        <div className="flex md:flex-col gap-6 justify-center">
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <Layers className="w-10 h-10 mb-3 opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all" strokeWidth={1.5} />
            <span className="text-xs font-bold leading-tight">The Young Ones<br />ADC Competition</span>
            <span className="text-[10px] border border-foreground/20 px-2 mt-2 rounded">2023</span>
          </div>
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <PenTool className="w-10 h-10 mb-3 opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all" strokeWidth={1.5} />
            <span className="text-xs font-bold leading-tight">Graphic Design<br />USA Award</span>
            <span className="text-[10px] border border-foreground/20 px-2 mt-2 rounded">2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
