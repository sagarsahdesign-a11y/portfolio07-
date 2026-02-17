import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bk-section bg-white">
      <div className="bk-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-dark mb-6" style={{ fontStyle: 'italic', fontSize: 'clamp(32px, 5vw, 44px)' }}>
              Designer with a systems mindset
            </h2>
            <p className="text-muted" style={{ fontSize: '15px', lineHeight: '1.7' }}>
              Product designer combining UI/UX expertise with a technical background in Cyber Security.
              Experienced in designing accessible web and mobile interfaces and collaborating with developers
              to deliver build-ready products.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#eef0f6] flex items-center justify-center">
                <Briefcase size={20} className="text-dark" />
              </div>
              <p className="text-xs text-muted font-medium">2+ Years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#eef0f6] flex items-center justify-center">
                <MapPin size={20} className="text-dark" />
              </div>
              <p className="text-xs text-muted font-medium">Bengaluru, IN</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#eef0f6] flex items-center justify-center">
                <Mail size={20} className="text-dark" />
              </div>
              <p className="text-xs text-muted font-medium">Available</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
