import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="label mb-6">ABOUT ME</p>
            <h2 className="mb-8">Designer with a systems mindset</h2>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-soft mb-12"
          >
            <p className="text-lg leading-relaxed mb-6">
              I'm a Product Designer with over 2 years of experience building secure, developer-ready SaaS interfaces.
              I combine UI/UX thinking, frontend fundamentals, and cybersecurity principles to ship real-world digital products.
            </p>
            <p className="text-base leading-relaxed">
              My approach focuses on creating designs that are not just beautiful, but also functional, accessible,
              and aligned with business goals. I believe great design happens at the intersection of user needs,
              technical constraints, and business objectives.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-soft text-center"
            >
              <MapPin className="w-6 h-6 mx-auto mb-3 text-[#FF6B35]" />
              <p className="text-sm font-semibold mb-1">Location</p>
              <p className="text-sm text-[#6B7280]">Bengaluru, India</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="card-soft text-center"
            >
              <Mail className="w-6 h-6 mx-auto mb-3 text-[#0066FF]" />
              <p className="text-sm font-semibold mb-1">Email</p>
              <p className="text-sm text-[#6B7280]">sagar.sah.design@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="card-soft text-center"
            >
              <Briefcase className="w-6 h-6 mx-auto mb-3 text-[#FF6B35]" />
              <p className="text-sm font-semibold mb-1">Status</p>
              <p className="text-sm text-[#6B7280]">Available for projects</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
