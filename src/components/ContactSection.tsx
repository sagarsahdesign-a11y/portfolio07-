import { motion } from "framer-motion";

const ContactSection = () => {
    return (
        <section id="contact" className="bk-section bg-white">
            <div className="bk-container">
                <div className="max-w-md mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bk-label mb-6"
                    >
                        GET IN TOUCH
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted mb-8"
                        style={{ fontSize: '15px', lineHeight: '1.7' }}
                    >
                        Have a project in mind or want to discuss design opportunities?
                        I'd love to hear from you.
                    </motion.p>

                    <motion.a
                        href="mailto:sagar.sah.design@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bk-btn bk-btn-pill bk-btn-pill-orange inline-flex"
                    >
                        Send Email
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
