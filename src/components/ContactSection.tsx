import { motion } from "framer-motion";
import { Mail, Calendar, Linkedin, Instagram, ExternalLink } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const mailtoLink = `mailto:sagar.sah.design@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative py-20 md:py-36 overflow-hidden">
            {/* Ambient lights */}
            <div className="absolute top-1/3 right-[10%] w-[350px] h-[350px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(148,163,184,0.02) 0%, transparent 70%)",
                }}
            />

            <div className="max-w-6xl mx-auto px-4 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
                    {/* Left — Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <span className="section-label mb-4 block">Get in Touch</span>

                        <h2 className="text-white mb-5">
                            Let's Connect
                        </h2>

                        <p className="text-base text-[#8B95A5] mb-10 leading-[1.8]">
                            Have a project in mind or want to discuss design opportunities? I'd love to hear from you.
                        </p>

                        {/* Success */}
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                className="mb-6 p-4 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04]"
                            >
                                <p className="text-sm font-medium text-blue-400/80">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </p>
                            </motion.div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/40">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-3.5 glass-input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/40">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-3.5 glass-input"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/40">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-5 py-3.5 glass-input resize-none"
                                    placeholder="Tell me about your project or opportunity..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600/80 text-white px-8 py-4 rounded-2xl font-medium text-[15px] tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-400 hover:bg-blue-500/80"
                                style={{
                                    boxShadow: "0 4px 20px rgba(37,99,235,0.2)",
                                }}
                                whileHover={{ y: isSubmitting ? 0 : -2 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Right — Contact Info & Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                        className="space-y-10"
                    >
                        {/* Direct Contact */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6">
                                Direct Contact
                            </h3>

                            <div className="space-y-3">
                                <a
                                    href="mailto:sagar.sah.design@gmail.com"
                                    className="flex items-center gap-4 p-4 glass-card group"
                                >
                                    <div className="w-11 h-11 bg-white/[0.04] rounded-xl flex items-center justify-center border border-white/[0.06] group-hover:bg-blue-600/50 transition-colors duration-400">
                                        <Mail className="w-5 h-5 text-white/30 group-hover:text-white/80 transition-colors duration-400" strokeWidth={1.8} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.12em]">Email</p>
                                        <p className="text-sm font-medium text-white/60">sagar.sah.design@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://calendly.com/sagarsah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 glass-card group"
                                >
                                    <div className="w-11 h-11 bg-white/[0.04] rounded-xl flex items-center justify-center border border-white/[0.06] group-hover:bg-blue-600/50 transition-colors duration-400">
                                        <Calendar className="w-5 h-5 text-white/30 group-hover:text-white/80 transition-colors duration-400" strokeWidth={1.8} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.12em]">Schedule</p>
                                        <p className="text-sm font-medium text-white/60">Book a Call</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-white/10 group-hover:text-white/30 transition-colors duration-400" />
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6">
                                Connect on Social
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a
                                    href="https://linkedin.com/in/sagar-shah-389980319"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 glass-card"
                                >
                                    <Linkedin className="w-4 h-4 text-white/30" strokeWidth={1.8} />
                                    <span className="text-sm font-medium text-white/50">LinkedIn</span>
                                </a>

                                <a
                                    href="https://instagram.com/sagar.design"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 glass-card"
                                >
                                    <Instagram className="w-4 h-4 text-white/30" strokeWidth={1.8} />
                                    <span className="text-sm font-medium text-white/50">Instagram</span>
                                </a>

                                <a
                                    href="https://twitter.com/sagar_design"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 glass-card"
                                >
                                    <svg className="w-4 h-4 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                    <span className="text-sm font-medium text-white/50">X</span>
                                </a>

                                <a
                                    href="https://behance.net/sagarsah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 glass-card"
                                >
                                    <svg className="w-4 h-4 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.25-1.91.25H0V4.5h6.938v.003zM3.495 8.96h2.78c.68 0 1.196-.13 1.54-.39.345-.258.518-.715.518-1.36 0-.49-.14-.84-.42-1.07-.28-.23-.695-.345-1.237-.345H3.495V8.96zm0 5.48h3.016c.613 0 1.103-.13 1.46-.39.36-.26.54-.76.54-1.49 0-.75-.18-1.24-.533-1.49-.353-.25-.87-.38-1.552-.38H3.495v3.75zM23.707 9.24c.15.34.26.72.34 1.15.08.43.12.91.12 1.43v.42H15.93c0 .85.25 1.5.75 1.95.5.45 1.05.67 1.67.67.58 0 1.09-.16 1.54-.48.46-.32.77-.64.94-.96h3.85c-.29 1.08-.9 2.02-1.81 2.8-.91.78-2.12 1.17-3.63 1.17-1.02 0-1.92-.15-2.69-.44-.77-.29-1.41-.7-1.92-1.23-.51-.52-.89-1.15-1.14-1.87-.25-.73-.38-1.54-.38-2.44 0-.91.13-1.74.39-2.47.26-.73.63-1.35 1.14-1.87.5-.52 1.13-.92 1.88-1.21.75-.29 1.62-.43 2.6-.43.96 0 1.81.17 2.56.52.74.35 1.36.83 1.84 1.44.48.61.84 1.32 1.07 2.13zm-3.7 2.26c-.04-.67-.27-1.18-.7-1.53-.42-.35-.93-.52-1.52-.52-.3 0-.58.04-.82.13-.24.09-.45.22-.63.39-.18.17-.33.37-.43.6-.1.23-.17.48-.19.75h4.29z" />
                                    </svg>
                                    <span className="text-sm font-medium text-white/50">Behance</span>
                                </a>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="glass-card p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400/60 animate-pulse" />
                                <p className="text-sm font-medium text-blue-400/70">
                                    Open to Opportunities
                                </p>
                            </div>
                            <p className="text-sm text-[#8B95A5]">
                                Currently available for freelance projects and full-time product design roles. Remote or Bengaluru-based.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
