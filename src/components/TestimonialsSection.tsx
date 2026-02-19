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
        <section className="port-section" style={{ background: 'var(--bg-cream)', paddingTop: '40px' }}>
            <div className="port-container">
                <motion.p
                    className="port-label"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    WHAT THEY SAY
                </motion.p>

                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                flex: '1 1 320px',
                                background: 'white',
                                borderRadius: '20px',
                                padding: '32px',
                                border: '1px solid var(--border)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {/* Quote */}
                            <p style={{
                                fontSize: '14px',
                                color: 'var(--text-muted)',
                                lineHeight: '1.8',
                                fontStyle: 'italic',
                                marginBottom: '24px'
                            }}>
                                "{t.quote}"
                            </p>

                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-cream)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '13px',
                                    color: 'var(--accent)'
                                }}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <p style={{ fontWeight: 600, fontSize: '14px' }}>{t.name}</p>
                                    <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>{t.role}</p>
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
