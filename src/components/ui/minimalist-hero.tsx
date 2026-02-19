"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowDown } from "lucide-react";

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
        <>
            {/* GIANT TYPOGRAPHY HERO — Dark Section */}
            <section className="port-hero">
                {/* Floating profile image */}
                <motion.img
                    src={profileImage}
                    alt="Sagar Sah"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        position: 'absolute',
                        top: '18%',
                        right: '12%',
                        width: '140px',
                        height: '140px',
                        borderRadius: '20px',
                        objectFit: 'cover',
                        border: '3px solid rgba(255,255,255,0.15)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                        zIndex: 15,
                        transform: 'rotate(4deg)'
                    }}
                />

                {/* Decorative accent blob */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, #FF5E1A 0%, transparent 70%)',
                        top: '10%',
                        left: '-5%',
                        filter: 'blur(60px)',
                        zIndex: 1
                    }}
                />

                {/* Badge */}
                <motion.div
                    className="port-hero-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    style={{ top: '15%', left: '8%' }}
                >
                    ❤️ DESIGNER
                </motion.div>

                {/* Giant Title */}
                <motion.h1
                    className="port-hero-title"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span>P<span className="port-hero-accent">O</span>RT</span>
                    <span>FOLI<span className="port-hero-accent">O</span></span>
                </motion.h1>

                {/* Year & Role */}
                <motion.p
                    className="port-hero-year"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    2026 · Product Designer
                </motion.p>

                {/* Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    style={{
                        display: 'flex',
                        gap: '12px',
                        marginTop: '28px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    <span style={{
                        padding: '6px 18px',
                        borderRadius: '99px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '12px',
                        fontWeight: 500
                    }}>
                        UI/UX
                    </span>
                    <span style={{
                        padding: '6px 18px',
                        borderRadius: '99px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '12px',
                        fontWeight: 500
                    }}>
                        VISUAL DESIGN
                    </span>
                    <span style={{
                        padding: '6px 18px',
                        borderRadius: '99px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '12px',
                        fontWeight: 500
                    }}>
                        DESIGN SYSTEMS
                    </span>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    style={{
                        display: 'flex',
                        gap: '12px',
                        marginTop: '32px'
                    }}
                >
                    <a
                        href="https://www.linkedin.com/in/sagar-shah-389980319/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="port-footer-link"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="https://x.com/Sagarshahas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="port-footer-link"
                    >
                        <Twitter size={18} />
                    </a>
                    <a
                        href="mailto:sagar.sah.design@gmail.com"
                        className="port-footer-link"
                        style={{ fontSize: '16px' }}
                    >
                        ✉
                    </a>
                </motion.div>

                {/* Scroll Arrow */}
                <motion.div
                    className="port-hero-scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <a href="#intro" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        <ArrowDown size={28} />
                    </a>
                </motion.div>
            </section>

            {/* Torn Paper Divider */}
            <div className="port-torn" />
        </>
    );
}
