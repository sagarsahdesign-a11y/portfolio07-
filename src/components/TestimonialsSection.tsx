import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Supriya Raghavendra",
        role: "ex- Design manager, Swiggy",
        quote: "Sagar is an exceptionally dedicated product designer with an impressive level of proactivity",
        avatar: "SR"
    },
    {
        name: "Arvind Ganeshan",
        role: "VP product, Hiver",
        quote: "Sagar is a great value add to any product team and I would highly recommend him to any design or product leader",
        avatar: "AG"
    }
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="section">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="label mb-6">RECOMMENDATIONS</p>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card-soft"
                            >
                                <p className="text-base italic text-[#1A1A1A] mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-[#1A1A1A]">{testimonial.name}</h4>
                                        <p className="text-xs text-[#9CA3AF]">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
