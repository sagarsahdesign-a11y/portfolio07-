import { motion } from "framer-motion";

const articles = [
    {
        title: "Good vs great in Design",
        description: "Notes on how I get inspired and what separates adequate from extraordinary.",
        status: "published",
        coverColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        title: "Shiny object syndrome",
        description: "All that glitters isn't gold — why chasing trends can kill products.",
        status: "publishing_soon",
        coverColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        title: "Form follows function. Always?",
        description: "Most misunderstood phrase among mature product people.",
        status: "publishing_soon",
        coverColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        title: "Emotional design",
        description: "Humans are more emotional than logical — design accordingly.",
        status: "publishing_soon",
        coverColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
        title: "Security-first UX",
        description: "Designing authentication and trust flows that protect without friction.",
        status: "publishing_soon",
        coverColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
        title: "Inclusion in Design",
        description: "Nuanced term — inclusion of culture, ability, and context in every pixel.",
        status: "publishing_soon",
        coverColor: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    }
];

const Philosophy = () => {
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
                        WRITEUPS AND THOUGHTS
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-dark mb-4"
                    >
                        Design Philosophies<br />
                        <span style={{ fontStyle: 'italic' }}>& more</span>
                    </motion.h1>
                </div>
            </section>

            {/* Article Grid */}
            <section className="bk-section">
                <div className="bk-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                        {articles.map((article, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bk-card-white overflow-hidden cursor-pointer group"
                                style={{ padding: 0 }}
                            >
                                {/* Cover Image */}
                                <div
                                    className="w-full h-[180px] relative"
                                    style={{ background: article.coverColor }}
                                >
                                    {article.status === "published" && (
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-dark">
                                                Published
                                            </span>
                                        </div>
                                    )}
                                    {article.status === "publishing_soon" && (
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-muted">
                                                Coming Soon
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-dark mb-3" style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'Playfair Display' }}>
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        {article.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bk-section bg-white">
                <div className="bk-container text-center">
                    <p className="text-muted mb-6">More articles coming soon...</p>
                    <a href="/" className="bk-btn bk-btn-pill bk-btn-pill-dark">
                        Back to Home
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Philosophy;
