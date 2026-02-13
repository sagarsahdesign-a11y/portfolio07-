import { Award, Play, Figma, ShieldCheck, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <header className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-32 relative">
      <div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 items-center">
        {/* Left Content */}
        <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-bold tracking-[0.4em] text-xs uppercase mb-6 pl-1"
          >
            UI/UX Designer
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.85] font-black uppercase tracking-tighter mb-8 font-condensed"
          >
            SAGAR<br />SAH
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-6 mb-10"
          >
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed font-medium">
              Product designer combining UI/UX expertise with a technical background in Cyber Security. 9k+ followers sharing practical design insights.
            </p>
            <div className="hidden lg:flex w-12 h-12 border-2 border-foreground rounded-full items-center justify-center">
              <Award className="w-6 h-6" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            href="#projects"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground pl-6 pr-2 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-xl group"
          >
            LEARN MORE
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground group-hover:rotate-90 transition-transform">
              <Play className="w-4 h-4 fill-current ml-0.5" strokeWidth={1.5} />
            </div>
          </motion.a>
        </div>

        {/* Right Visual */}
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center pointer-events-none order-1 lg:order-2">
          {/* Spinning circles */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-foreground/10 rounded-full animate-spin-slow border-dashed" />
            <div className="absolute w-[220px] h-[220px] md:w-[380px] md:h-[380px] border-2 border-foreground/5 rounded-full animate-spin-reverse" />
          </div>

          {/* Profile Image */}
          <div className="relative z-10 animate-float w-[280px] h-[350px] md:w-[400px] md:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5b6e5c2-4adb-4cdb-b3b3-6ab912dc44c5_800w.jpg"
                alt="Sagar Sah"
                className="w-full h-full object-cover object-top rounded-[3rem] grayscale contrast-125 brightness-110 shadow-[0_0_0_8px_rgba(255,255,255,0.2)] md:shadow-[0_0_0_12px_rgba(255,255,255,0.2)] transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />

              {/* Figma Badge */}
              <div className="absolute -top-6 -right-6 animate-float-delayed z-30">
                <div className="bg-primary text-primary-foreground px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 transform rotate-6 hover:scale-110 transition-transform cursor-default pointer-events-auto">
                  <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <Figma className="w-4 h-4 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-[10px] text-primary-foreground/50 uppercase tracking-wider">Tool</span>
                    <span className="font-bold text-sm uppercase">Figma</span>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="absolute bottom-12 -left-8 animate-float z-30">
                <div className="bg-accent text-accent-foreground px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 transform -rotate-3 hover:scale-110 transition-transform cursor-default pointer-events-auto">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-accent-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-[10px] text-accent-foreground/60 uppercase tracking-wider">Skill</span>
                    <span className="font-bold text-sm uppercase">Secure</span>
                  </div>
                </div>
              </div>

              {/* Code Badge */}
              <div className="absolute bottom-20 -right-4 animate-float-delayed z-20">
                <div className="bg-[hsl(0,0%,10%)] text-foreground p-3 rounded-xl shadow-xl transform rotate-12 pointer-events-auto">
                  <Code2 className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
