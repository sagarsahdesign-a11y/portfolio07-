import { PenTool, Coffee, Building2, PlayCircle, Play } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Card 01 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-card p-6 rounded-3xl relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <span className="text-foreground/60 font-bold text-xs mb-1">01</span>
              <span className="text-foreground/60 font-bold text-[10px] tracking-widest uppercase">UI/UX Design</span>
            </div>
            <PenTool className="w-5 h-5 text-foreground/40" strokeWidth={1.5} />
          </div>

          <div className="bg-primary p-3 rounded-2xl mb-6 transform group-hover:scale-[1.02] transition-transform duration-500">
            <div className="bg-primary/90 rounded-xl aspect-[4/5] relative overflow-hidden flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Dashboard" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-lg text-foreground">
                  <span className="font-bold text-xl tracking-tight">ZT</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-2 tracking-tight font-display">ZenTrade Platform</h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md">Redesigned dashboards and navigation to simplify complex B2B trading workflows and improve usability.</p>

          <button className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
            <PlayCircle className="w-4 h-4 fill-current" strokeWidth={1.5} />
            View Case
          </button>
        </motion.div>

        {/* Right Column */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 02 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-primary p-5 rounded-3xl group relative overflow-hidden hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-primary-foreground font-bold text-xs block mb-1">02</span>
                <span className="text-primary-foreground/60 font-bold text-[10px] tracking-widest uppercase">PRODUCT</span>
              </div>
              <Coffee className="w-5 h-5 text-primary-foreground/40" strokeWidth={1.5} />
            </div>

            <div className="bg-primary/80 p-3 rounded-2xl mb-5 transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="bg-primary rounded-xl aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-background rounded-full opacity-80 mix-blend-multiply top-0 left-0" />
                  <div className="absolute inset-0 bg-accent rounded-full opacity-80 mix-blend-multiply top-4 left-4" />
                </div>
              </div>
            </div>

            <h3 className="text-primary-foreground text-2xl font-bold mb-1 tracking-tight font-display">MountainBrew</h3>
            <p className="text-primary-foreground/50 text-xs font-bold mb-4 uppercase">Café Mobile App</p>

            <div className="flex gap-2">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded text-[10px] font-bold">MOBILE</span>
              <span className="bg-background/20 text-foreground px-3 py-1 rounded text-[10px] font-bold">LOYALTY</span>
            </div>

            <button className="absolute bottom-5 right-5 w-10 h-10 bg-primary border-2 border-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-background hover:text-background transition-colors">
              <Play className="w-4 h-4 fill-current" strokeWidth={1.5} />
            </button>
          </motion.div>

          {/* Card 03 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card p-5 rounded-3xl group relative overflow-hidden hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-foreground/80 font-bold text-xs block mb-1">03</span>
                <span className="text-foreground/60 font-bold text-[10px] tracking-widest uppercase">IDENTITY</span>
              </div>
              <Building2 className="w-5 h-5 text-foreground/40" strokeWidth={1.5} />
            </div>

            <div className="bg-primary p-3 rounded-2xl mb-5 transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="bg-[hsl(0,0%,10%)] rounded-xl aspect-square flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-2 gap-2 w-32 rotate-12">
                  <div className="h-12 bg-accent rounded-lg" />
                  <div className="h-12 bg-background rounded-lg" />
                  <div className="h-12 bg-primary rounded-lg col-span-2" />
                </div>
              </div>
            </div>

            <h3 className="text-foreground text-2xl font-bold mb-1 tracking-tight font-display">ATG Hotels</h3>
            <p className="text-foreground/60 text-xs font-bold mb-4 uppercase">Hospitality Booking</p>

            <div className="flex gap-2">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded text-[10px] font-bold">WEB</span>
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded text-[10px] font-bold">SYSTEM</span>
            </div>

            <button className="absolute bottom-5 right-5 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              <Play className="w-4 h-4 fill-current" strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
