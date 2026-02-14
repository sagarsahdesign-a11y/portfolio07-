import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, TrendingUp, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return ref;
}

const CommunitySection = () => {
  const count9kRef = useAnimatedCounter(9000, 2);
  const count1kRef = useAnimatedCounter(1000, 2);

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(148,163,184,0.025) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="section-label mb-4 block">
              Community Impact
            </span>

            <h2 className="text-white mb-6">
              Community & Thought Leadership
            </h2>

            <p className="text-base text-[#8B95A5] mb-10 leading-[1.8]">
              I share practical design insights, case studies, and UI/UX content with a growing community of designers and developers. My focus is on actionable tips that improve real-world product design.
            </p>

            <motion.a
              href="https://linkedin.com/in/sagar-shah-389980319"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-blue-600/80 text-white px-7 py-3.5 rounded-2xl font-medium text-sm tracking-wide transition-all duration-400 hover:bg-blue-500/80"
              style={{
                boxShadow: "0 4px 20px rgba(37,99,235,0.2)",
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Users className="w-4 h-4" strokeWidth={2} />
              Follow on LinkedIn
            </motion.a>
          </motion.div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white/[0.04] rounded-xl mb-5 border border-white/[0.06]">
                <Users className="w-5 h-5 text-blue-400/60" strokeWidth={2} />
              </div>
              <div className="text-4xl font-extrabold text-white mb-1 tracking-tight">
                <span ref={count9kRef}>9,000</span>+
              </div>
              <div className="text-sm text-[#8B95A5]">Community Followers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white/[0.04] rounded-xl mb-5 border border-white/[0.06]">
                <TrendingUp className="w-5 h-5 text-blue-400/60" strokeWidth={2} />
              </div>
              <div className="text-4xl font-extrabold text-white mb-1 tracking-tight">
                <span ref={count1kRef}>1,000</span>+
              </div>
              <div className="text-sm text-[#8B95A5]">Engaged Creators</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
              className="col-span-2 glass-card p-6"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white/[0.04] rounded-xl mb-5 border border-white/[0.06]">
                <MessageCircle className="w-5 h-5 text-blue-400/60" strokeWidth={2} />
              </div>
              <div className="text-lg font-semibold text-white mb-3">Content Focus</div>
              <ul className="space-y-2 text-sm text-[#8B95A5]">
                {["Case study breakdowns", "UX pattern libraries", "Design system insights", "Developer collaboration tips"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/10" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
