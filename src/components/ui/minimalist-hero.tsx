"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, ArrowDown } from "lucide-react";

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
        <section className="jh-hero">

            {/* ═══ FLOATING SCATTERED OBJECTS ═══ */}

            {/* Top-left — desk lamp aesthetic */}
            <motion.div className="jh-float"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                style={{ top: '6%', left: '3%', width: '130px', height: '155px', transform: 'rotate(-5deg)' }}
            >
                <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&h=240&fit=crop&q=80" alt="" />
            </motion.div>

            {/* Left — sketchbook / notebook */}
            <motion.div className="jh-float"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{ top: '40%', left: '2%', width: '110px', height: '80px', transform: 'rotate(3deg)' }}
            >
                <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=170&h=120&fit=crop&q=80" alt="" />
            </motion.div>

            {/* Left-bottom — design pen / film roll */}
            <motion.div className="jh-float"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                style={{ bottom: '14%', left: '6%', width: '95px', height: '95px', transform: 'rotate(-2deg)' }}
            >
                <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=140&h=140&fit=crop&q=80" alt="" />
            </motion.div>

            {/* Top-right — vinyl record (circular) */}
            <motion.div className="jh-float"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{ top: '5%', right: '4%', width: '115px', height: '115px', borderRadius: '50%', transform: 'rotate(8deg)' }}
            >
                <img src="https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=180&h=180&fit=crop&q=80" alt="" />
            </motion.div>

            {/* Right — phone / UI mockup */}
            <motion.div className="jh-float"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                style={{ top: '25%', right: '3%', width: '100px', height: '140px', transform: 'rotate(3deg)' }}
            >
                <img src={`${import.meta.env.BASE_URL}1.png`} alt="" />
            </motion.div>

            {/* Right side — gradient folder */}
            <motion.div className="jh-float"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ top: '52%', right: '5%', width: '105px', height: '80px', transform: 'rotate(-4deg)' }}
            >
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=160&h=120&fit=crop&q=80" alt="" />
            </motion.div>

            {/* Bottom-right — camera */}
            <motion.div className="jh-float"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{ bottom: '10%', right: '7%', width: '100px', height: '75px', transform: 'rotate(5deg)' }}
            >
                <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150&h=110&fit=crop&q=80" alt="" />
            </motion.div>

            {/* ═══ CENTER CONTENT ═══ */}
            <div className="jh-hero-center">
                <motion.h1 className="jh-hero-name"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Sagar Sah
                </motion.h1>

                <motion.p className="jh-hero-role"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                >
                    UI/UX Designer
                </motion.p>

                <motion.p className="jh-hero-studio"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Freelance · Bengaluru, India
                </motion.p>

                <motion.p className="jh-hero-tagline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    a thoughtful process of designing usable, accessible, and delightful experiences for web & mobile.
                </motion.p>

                {/* Social Icons */}
                <motion.div className="jh-hero-socials"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                >
                    <a href="https://www.linkedin.com/in/sagar-shah-389980319/" target="_blank" rel="noopener noreferrer" className="jh-icon-btn">
                        <Linkedin size={15} />
                    </a>
                    <a href="https://www.instagram.com/sagaruiux.1/" target="_blank" rel="noopener noreferrer" className="jh-icon-btn">
                        <Instagram size={15} />
                    </a>
                    <a href="mailto:sagar.sah.design@gmail.com" className="jh-icon-btn">
                        <Mail size={15} />
                    </a>
                </motion.div>

                {/* Scroll Arrow */}
                <motion.div className="jh-scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <a href="#cooking" style={{ color: 'var(--text-light)' }}>
                        <ArrowDown size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
