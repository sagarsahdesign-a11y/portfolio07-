import { motion } from "framer-motion";

const interests = [
    { emoji: "🎬", title: "Cinema", desc: "Storytelling through visuals" },
    { emoji: "🔐", title: "Cybersecurity", desc: "Ethical hacking & secure design" },
    { emoji: "✍️", title: "Content Creation", desc: "9k+ followers, design insights" },
    { emoji: "🏔️", title: "Trekking", desc: "Mountains & landscapes" }
];

const photos = [
    { emoji: "🏔️", label: "Nepal", rotation: -2 },
    { emoji: "☕", label: "Bengaluru", rotation: 1 },
    { emoji: "🎨", label: "Design Studio", rotation: -1 },
    { emoji: "🌿", label: "Nature", rotation: 2 },
    { emoji: "🏙️", label: "City Life", rotation: -3 },
    { emoji: "💻", label: "Late nights", rotation: 1 },
    { emoji: "🎮", label: "Gaming", rotation: -2 },
    { emoji: "📚", label: "Reading", rotation: 2 }
];

const Life = () => {
    return (
        <div className="min-h-screen">
            {/* Full-Width Hero Image */}
            <section
                className="relative h-[60vh] flex items-end justify-center"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)'
                    }}
                />

                <div className="relative z-10 text-center pb-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white mb-4"
                        style={{ fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: 1 }}
                    >
                        Life &<br />
                        <span style={{ color: '#f0c060' }}>Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/90 text-sm"
                    >
                        Personal chapter on my interests, values and inspirations
                    </motion.p>
                </div>
            </section>

            {/* Interests Section */}
            <section className="bk-section bg-white">
                <div className="bk-container">
                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <h2 className="text-dark mb-6" style={{ fontStyle: 'italic' }}>
                            Cinema, music,<br />& more
                        </h2>
                        <p className="text-muted">
                            From cinema to cybersecurity research — things that keep me inspired, curious, and growing outside of Figma.
                        </p>
                    </div>

                    {/* Interest Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div
                                    className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl"
                                    style={{ background: '#eef0f6' }}
                                >
                                    {interest.emoji}
                                </div>
                                <h4 className="text-dark font-semibold mb-2" style={{ fontSize: '16px', fontFamily: 'DM Sans' }}>
                                    {interest.title}
                                </h4>
                                <p className="text-xs text-muted">{interest.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Polaroid Photo Grid */}
            <section className="bk-section bg-page">
                <div className="bk-container">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bk-label text-center mb-12"
                    >
                        LIFE OUTSIDE WORK
                    </motion.p>

                    {/* Scattered Polaroid Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {photos.map((photo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="polaroid"
                                style={{
                                    background: 'white',
                                    padding: '16px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                                    transform: `rotate(${photo.rotation}deg)`,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                whileHover={{
                                    transform: 'rotate(0deg) scale(1.04)',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.16)'
                                }}
                            >
                                {/* Photo Area */}
                                <div
                                    className="w-full aspect-square rounded-lg mb-3 flex items-center justify-center text-6xl"
                                    style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}
                                >
                                    {photo.emoji}
                                </div>
                                {/* Handwritten Label */}
                                <p
                                    className="text-center text-sm"
                                    style={{
                                        fontFamily: 'DM Sans',
                                        fontStyle: 'italic',
                                        color: '#555'
                                    }}
                                >
                                    {photo.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back CTA */}
            <section className="bk-section bg-white">
                <div className="bk-container text-center">
                    <a href="#/" className="bk-btn bk-btn-pill bk-btn-pill-dark">
                        Back to Home
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Life;
