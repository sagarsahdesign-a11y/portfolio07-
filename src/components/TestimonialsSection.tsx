import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Supriya Raghavendra",
        role: "ex- Design manager, Swiggy",
        quote: "Sagar is an exceptionally dedicated product designer with an impressive level of proactivity. His work demonstrates strong attention to detail and user-centered thinking.",
        avatar: "SR"
    },
    {
        name: "Arvind Ganeshan",
        role: "VP product, Hiver",
        quote: "Sagar is a great value add to any product team and I would highly recommend him to any design or product leader looking for dedicated design talent.",
        avatar: "AG"
    }
];

const TestimonialsSection = () => {
    return (
        <section id="recommendations" className="bk-section bg-white">
            <div className="bk-container">
                {/* Header */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bk-label text-center mb-12"
                >
                    RECOMMENDATIONS
                </motion.p>

                {/* Testimonial Cards - Horizontal Scroll */}
                <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin' }}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bk-testimonial flex-shrink-0"
                        >
                            {/* Quote */}
                            <p className="bk-testimonial-quote mb-6">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="bk-testimonial-author">
                                <div className="bk-testimonial-avatar">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="bk-testimonial-name">{testimonial.name}</p>
                                    <p className="bk-testimonial-role">{testimonial.role}</p>
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
