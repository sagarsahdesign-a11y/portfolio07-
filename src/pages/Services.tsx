import { motion } from "framer-motion";

const services = [
    {
        title: "Product and Design strategy",
        description: "Beyond Figma screens — strategy helps decide whether any product is worth making.",
        coverColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        title: "End to end App / Website design",
        description: "I set a very high bar for design finesse. Can help bring the same polish to your product.",
        coverColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        title: "Security-aware UX design",
        description: "Designing authentication, trust flows, and data UX that protects users without friction.",
        coverColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        title: "High conversion Framer websites",
        description: "I've built enough high-performing webpages that convert — let me help you achieve the same.",
        coverColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
];

const Services = () => {
    return (
        <div className="min-h-screen bg-page">
            {/* Page Hero */}
            <section className="bk-section-lg bg-white" style={{ paddingTop: '120px' }}>
                <div className="bk-container text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bk-label mb-6"
                    >
                        SERVICES I OFFER AS A FREELANCER
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-dark mb-8"
                        style={{ fontStyle: 'italic' }}
                    >
                        For founders<br />& employers
                    </motion.h1>

                    <motion.a
                        href="mailto:sagar.sah.design@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bk-btn bk-btn-pill bk-btn-pill-orange"
                    >
                        Book a call
                    </motion.a>
                </div>
            </section>

            {/* 2x2 Service Grid */}
            <section className="bk-section">
                <div className="bk-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                        {services.map((service, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bk-card-white overflow-hidden cursor-pointer group hover:shadow-lg transition-all"
                                style={{ padding: 0 }}
                                whileHover={{ y: -4 }}
                            >
                                {/* Cover Image */}
                                <div
                                    className="w-full h-[200px]"
                                    style={{ background: service.coverColor }}
                                />

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-dark mb-3" style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'Playfair Display' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bk-section bg-white">
                <div className="bk-container text-center">
                    <h3 className="text-dark mb-4" style={{ fontSize: '28px', fontFamily: 'Playfair Display', fontStyle: 'italic' }}>
                        Ready to collaborate?
                    </h3>
                    <p className="text-muted mb-6 max-w-xl mx-auto">
                        Let's discuss your project and see how I can help bring your vision to life.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="mailto:sagar.sah.design@gmail.com"
                            className="bk-btn bk-btn-pill bk-btn-pill-orange"
                        >
                            Send Email
                        </a>
                        <a
                            href="#/"
                            className="bk-btn bk-btn-pill"
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
