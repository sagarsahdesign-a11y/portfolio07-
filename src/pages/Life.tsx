import { motion } from "framer-motion";

const interests = [
    { emoji: "🎬", title: "Cinema", desc: "Storytelling through visuals" },
    { emoji: "🔐", title: "Cybersecurity", desc: "Ethical hacking & secure design" },
    { emoji: "✍️", title: "Content Creation", desc: "9k+ followers, design insights" },
    { emoji: "🏔️", title: "Trekking", desc: "Mountains & landscapes" }
];

const photos = [
    {
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop&q=80",
        label: "Nepal",
        rotation: -2
    },
    {
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=500&fit=crop&q=80",
        label: "Bengaluru",
        rotation: 1
    },
    {
        image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=500&fit=crop&q=80",
        label: "Design Studio",
        rotation: -1
    },
    {
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop&q=80",
        label: "Nature",
        rotation: 2
    },
    {
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop&q=80",
        label: "City Life",
        rotation: -3
    },
    {
        image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=400&h=500&fit=crop&q=80",
        label: "Late nights",
        rotation: 1
    },
    {
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=500&fit=crop&q=80",
        label: "Gaming",
        rotation: -2
    },
    {
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=500&fit=crop&q=80",
        label: "Reading",
        rotation: 2
    }
];

const Life = () => {
    return (
        <div className="min-h-screen">
            {/* Full-Width Hero Image */}
            <section
                className="relative flex items-end justify-center"
                style={{
                    height: '65vh',
                    minHeight: '500px',
                    marginTop: '72px',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&h=1000&fit=crop&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
                    }}
                />

                <div className="relative z-10 text-center pb-20 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontFamily: 'Playfair Display',
                            fontSize: 'clamp(48px, 8vw, 80px)',
                            fontWeight: 900,
                            color: '#ffffff',
                            lineHeight: 1,
                            marginBottom: '12px'
                        }}
                    >
                        Life &<br />
                        <span style={{ color: '#f0c060', fontStyle: 'italic' }}>Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '15px',
                            letterSpacing: '0.05em'
                        }}
                    >
                        Personal chapter on my interests, values and inspirations
                    </motion.p>
                </div>
            </section>

            {/* Interests Section */}
            <section className="bk-section bg-white">
                <div className="bk-container">
                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <h2
                            className="text-dark mb-6"
                            style={{
                                fontFamily: 'Playfair Display',
                                fontSize: 'clamp(32px,4vw,48px)',
                                fontWeight: 700,
                                fontStyle: 'italic'
                            }}
                        >
                            Cinema, music,<br />& more
                        </h2>
                        <p className="text-muted" style={{ fontSize: '15px', lineHeight: '1.7' }}>
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
                                whileHover={{ y: -4 }}
                                style={{ cursor: 'pointer' }}
                            >
                                <div
                                    className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl transition-all"
                                    style={{ background: '#eef0f6' }}
                                >
                                    {interest.emoji}
                                </div>
                                <h4
                                    className="text-dark font-semibold mb-2"
                                    style={{ fontSize: '16px', fontFamily: 'DM Sans' }}
                                >
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
                                    padding: '12px',
                                    paddingBottom: '36px',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                                    transform: `rotate(${photo.rotation}deg)`,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                whileHover={{
                                    transform: 'rotate(0deg) scale(1.04)',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.16)',
                                    zIndex: 10
                                }}
                            >
                                {/* Photo Area */}
                                <div
                                    className="w-full aspect-[4/5] rounded-md mb-3 overflow-hidden"
                                    style={{ background: '#eef0f6' }}
                                >
                                    <img
                                        src={photo.image}
                                        alt={photo.label}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                {/* Handwritten Label */}
                                <p
                                    className="text-center text-sm"
                                    style={{
                                        fontFamily: 'DM Sans',
                                        fontStyle: 'italic',
                                        color: '#555',
                                        fontWeight: 500
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

export default Life;
