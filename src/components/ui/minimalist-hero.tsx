"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, ArrowDown, Mail } from "lucide-react";

interface BikironHeroProps {
    profileImage: string;
    name: string;
    title1: string;
    title2: string;
    description: string;
}

export function BikironHero({
    profileImage,
}: BikironHeroProps) {
    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '60px 24px',
            background: 'var(--bg)'
        }}>
            {/* === Scattered Decorative Images === */}

            {/* Top-left: Lamp / warm object */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                    position: 'absolute', top: '4%', left: '3%',
                    width: '140px', height: '160px',
                    borderRadius: '14px', overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    transform: 'rotate(-6deg)', zIndex: 5
                }}
            >
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=240&fit=crop&q=80"
                    alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Top-left small: notebook */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                style={{
                    position: 'absolute', top: '22%', left: '17%',
                    width: '110px', height: '80px',
                    borderRadius: '12px', overflow: 'hidden',
                    boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                    transform: 'rotate(3deg)', zIndex: 5
                }}
            >
                <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=160&h=120&fit=crop&q=80"
                    alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Top-right: vinyl record (circular) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                    position: 'absolute', top: '3%', right: '5%',
                    width: '120px', height: '120px',
                    borderRadius: '50%', overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    transform: 'rotate(8deg)', zIndex: 5
                }}
            >
                <img src="https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=180&h=180&fit=crop&q=80"
                    alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Right side: phone mockup */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                    position: 'absolute', top: '18%', right: '4%',
                    width: '100px', height: '140px',
                    borderRadius: '14px', overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    transform: 'rotate(4deg)', zIndex: 5
                }}
            >
                <img src={`${import.meta.env.BASE_URL}1.png`}
                    alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Right: gradient / color splash */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    position: 'absolute', top: '42%', right: '6%',
                    width: '110px', height: '110px',
                    borderRadius: '14px', overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    transform: 'rotate(-3deg)', zIndex: 5
                }}
            >
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=160&h=160&fit=crop&q=80"
                    alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Bottom-left: plant / nature */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.8 }}
                style={{
                    position: 'absolute', bottom: '12%', left: '5%',
                    width: '120px', height: '90px',
                    borderRadius: '12px', overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                    transform: 'rotate(-3deg)', zIndex: 5
                }}
            >
                <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=180&h=130&fit=crop&q=80"
                    alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Bottom-left: blue folder */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                style={{
                    position: 'absolute', bottom: '25%', left: '15%',
                    width: '90px', height: '70px',
                    borderRadius: '10px', overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                    transform: 'rotate(4deg)', zIndex: 5
                }}
            >
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=140&h=100&fit=crop&q=80"
                    alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Bottom-right: camera */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{
                    position: 'absolute', bottom: '10%', right: '8%',
                    width: '110px', height: '80px',
                    borderRadius: '12px', overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                    transform: 'rotate(5deg)', zIndex: 5
                }}
            >
                <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=160&h=120&fit=crop&q=80"
                    alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* === CENTER CONTENT === */}
            <div style={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 10,
                maxWidth: '460px'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(42px, 7vw, 64px)',
                        fontWeight: 700,
                        color: 'var(--text)',
                        lineHeight: 1.05,
                        marginBottom: '16px',
                        letterSpacing: '-0.02em'
                    }}
                >
                    Sagar Sah
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '13px',
                        color: 'var(--text-2)',
                        marginBottom: '4px',
                        letterSpacing: '0.02em'
                    }}
                >
                    Product Design
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '12px',
                        color: 'var(--text-3)',
                        marginBottom: '0'
                    }}
                >
                    Verb & Noun
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '12px',
                        color: 'var(--text-3)',
                        maxWidth: '380px',
                        margin: '20px auto 0',
                        lineHeight: 1.7,
                        fontStyle: 'italic'
                    }}
                >
                    a thoughtful process of crafting experiences that engage people, shape clarity, and spark delights.
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'center',
                        marginTop: '28px'
                    }}
                >
                    <a href="https://www.linkedin.com/in/sagar-shah-389980319/" target="_blank" rel="noopener noreferrer"
                        style={{
                            width: '36px', height: '36px', borderRadius: '8px',
                            border: '1px solid var(--border)', background: 'rgba(255,255,255,0.6)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--text)', transition: 'all 0.2s'
                        }}
                    >
                        <Linkedin size={15} />
                    </a>
                    <a href="https://www.instagram.com/sagaruiux.1/" target="_blank" rel="noopener noreferrer"
                        style={{
                            width: '36px', height: '36px', borderRadius: '8px',
                            border: '1px solid var(--border)', background: 'rgba(255,255,255,0.6)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--text)', transition: 'all 0.2s'
                        }}
                    >
                        <Instagram size={15} />
                    </a>
                    <a href="mailto:sagar.sah.design@gmail.com"
                        style={{
                            width: '36px', height: '36px', borderRadius: '8px',
                            border: '1px solid var(--border)', background: 'rgba(255,255,255,0.6)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--text)', transition: 'all 0.2s'
                        }}
                    >
                        <Mail size={15} />
                    </a>
                </motion.div>

                {/* Scroll Arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    style={{
                        marginTop: '40px',
                        color: 'var(--text-3)',
                        fontSize: '22px',
                        animation: 'bounce-down 2.5s ease-in-out infinite'
                    }}
                >
                    <a href="#about" style={{ color: 'var(--text-3)' }}>
                        <ArrowDown size={22} />
                    </a>
                </motion.div>
            </div>

            {/* Hide floating images on mobile */}
            <style>{`
        @media (max-width: 768px) {
          section > div[style*="position: absolute"] {
            display: none !important;
          }
        }
      `}</style>
        </section>
    );
}
