import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Supriya Raghavendra",
        role: "ex- Design Manager, Swiggy",
        quote: "Sagar is an exceptionally dedicated product designer with an impressive level of proactivity. His work demonstrates strong attention to detail and user-centered thinking.",
        avatar: "SR"
    },
    {
        name: "Arvind Ganeshan",
        role: "VP Product, Hiver",
        quote: "Sagar is a great value add to any product team and I would highly recommend him to any design or product leader looking for dedicated design talent.",
        avatar: "AG"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="s-section" style={{ paddingTop: 0 }}>
            <div className="s-container">
                <motion.p
                    className="s-label"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Recommendations
                </motion.p>

                <div className="s-testimonials">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="s-testimonial"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <p className="s-testimonial-quote">"{t.quote}"</p>
                            <div className="s-testimonial-author">
                                <div className="s-testimonial-avatar">{t.avatar}</div>
                                <div>
                                    <p className="s-testimonial-name">{t.name}</p>
                                    <p className="s-testimonial-role">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
