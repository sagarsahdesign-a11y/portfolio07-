import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "Good vs great in Design",
        description: "Notes on how I get inspired and what separates adequate from extraordinary.",
        status: "published",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop&q=80",
        link: "#"
    },
    {
        title: "Shiny object syndrome",
        description: "All that glitters isn't gold — why chasing trends can kill products.",
        status: "publishing_soon",
        image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=600&h=400&fit=crop&q=80",
        link: "#"
    },
    {
        title: "Form follows function. Always?",
        description: "Most misunderstood phrase among mature product people.",
        status: "publishing_soon",
        image: "https://images.unsplash.com/photo-1513346940221-6f673d962e97?w=600&h=400&fit=crop&q=80",
        link: "#"
    },
    {
        title: "Emotional design",
        description: "Humans are more emotional than logical — design accordingly.",
        status: "publishing_soon",
        image: "https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?w=600&h=400&fit=crop&q=80",
        link: "#"
    },
    {
        title: "Security-first UX",
        description: "Designing authentication and trust flows that protect without friction.",
        status: "publishing_soon",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&q=80",
        link: "#"
    },
    {
        title: "Inclusion in Design",
        description: "Nuanced term — inclusion of culture, ability, and context in every pixel.",
        status: "publishing_soon",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&q=80",
        link: "#"
    }
];

const Philosophy = () => {
    return (
        <div className="min-h-screen bg-page" style={{ paddingTop: '80px' }}>
            {/* Page Hero */}
            <section className="bk-section-lg bg-white">
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
                        className="text-dark mb-6"
                        style={{
                            fontFamily: 'Playfair Display',
                            fontSize: 'clamp(40px,6vw,72px)',
                            fontWeight: 900,
                            lineHeight: 1.05
                        }}
                    >
                        Design Philosophies<br />
                        <span style={{ fontStyle: 'italic', fontWeight: 400 }}>& more</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '15px',
                            color: '#555555',
                            maxWidth: '500px',
                            margin: '0 auto',
                            lineHeight: '1.7'
                        }}
                    >
                        Exploring design principles, human behavior, and the subtle decisions that shape exceptional digital experiences.
                    </motion.p>
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
                                whileHover={{ y: -4 }}
                            >
                                {/* Cover Image */}
                                <div
                                    className="w-full h-[200px] relative overflow-hidden"
                                    style={{ background: '#eef0f6' }}
                                >
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="group-hover:scale-105"
                                    />
                                    {article.status === "published" && (
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-dark shadow-sm">
                                                Published
                                            </span>
                                        </div>
                                    )}
                                    {article.status === "publishing_soon" && (
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-white/95 px-3 py-1 rounded-full text-xs font-medium text-muted shadow-sm">
                                                Coming Soon
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-7">
                                    <h3
                                        className="text-dark mb-3 transition-colors group-hover:text-orange"
                                        style={{
                                            fontSize: '24px',
                                            fontWeight: 700,
                                            fontFamily: 'Playfair Display',
                                            lineHeight: '1.3'
                                        }}
                                    >
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-muted leading-relaxed mb-4">
                                        {article.description}
                                    </p>

                                    {article.status === "published" && (
                                        <a
                                            href={article.link}
                                            className="inline-flex items-center gap-2 text-sm font-medium"
                                            style={{ color: '#ff5c1a' }}
                                        >
                                            Read article
                                            <ArrowRight size={16} />
                                        </a>
                                    )}
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
                    <a href="#/" className="bk-btn bk-btn-pill bk-btn-pill-dark">
                        Back to Home
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                background: '#0e0e0e',
                padding: '80px 40px 60px',
                marginTop: 'auto'
            }}>
                <h2 style={{
                    fontFamily: 'Playfair Display',
                    fontSize: 'clamp(40px,6vw,72px)',
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: '28px',
                    lineHeight: 1
                }}>
                    Let's have a word?
                </h2>
                <a
                    href="mailto:sagar.sah.design@gmail.com"
                    className="bk-btn-circle inline-flex"
                    style={{
                        marginBottom: '52px',
                        width: '56px',
                        height: '56px'
                    }}
                >
                    <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px' }}>
                        <polyline points="9 18 15 12 9 6" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <div style={{ marginBottom: '32px' }}>
                    <p style={{ color: '#fff', fontWeight: 600, fontSize: '16px', marginBottom: '4px' }}>Sagar Sah</p>
                    <span style={{ color: '#777', fontSize: '14px' }}>sagar.sah.design@gmail.com</span>
                </div>
            </footer>
        </div>
    );
};

export default Philosophy;
