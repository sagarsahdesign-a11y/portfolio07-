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
    const base = import.meta.env.BASE_URL;

    return (
        <section className="jh-hero">

            {/* ═══════════════════════════════════
         ANTIGRAVITY FLOATING OBJECTS
         Each image drifts independently in zero-gravity
         with unique keyframes, timing, rotation & scale
         ═══════════════════════════════════ */}

            {/* 1 — Top-left: desk lamp aesthetic (opacity 0.9, slow drift) */}
            <div
                className="jh-float jh-float-1"
                style={{
                    top: '8%', left: '4%',
                    width: '140px', height: '160px',
                    opacity: undefined  /* controlled by animation */
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&h=240&fit=crop&q=80"
                    alt=""
                    style={{ opacity: 0.92 }}
                />
            </div>

            {/* 2 — Left: sketchbook / notebook (farther = more transparent, slower) */}
            <div
                className="jh-float jh-float-2"
                style={{
                    top: '42%', left: '2%',
                    width: '115px', height: '85px',
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=170&h=120&fit=crop&q=80"
                    alt=""
                    style={{ opacity: 0.88 }}
                />
            </div>

            {/* 3 — Bottom-left: plant / film roll */}
            <div
                className="jh-float jh-float-3"
                style={{
                    bottom: '14%', left: '7%',
                    width: '100px', height: '100px',
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=150&h=150&fit=crop&q=80"
                    alt=""
                    style={{ opacity: 0.9 }}
                />
            </div>

            {/* 4 — Top-right: vinyl record (circular) */}
            <div
                className="jh-float jh-float-4"
                style={{
                    top: '6%', right: '5%',
                    width: '120px', height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden'
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=180&h=180&fit=crop&q=80"
                    alt=""
                    style={{ opacity: 0.95, objectFit: 'cover' }}
                />
            </div>

            {/* 5 — Right: phone/UI mockup — using portfolio work */}
            <div
                className="jh-float jh-float-5"
                style={{
                    top: '28%', right: '3%',
                    width: '105px', height: '145px',
                }}
            >
                <img
                    src={`${base}1.png`}
                    alt=""
                    style={{ opacity: 0.95 }}
                />
            </div>

            {/* 6 — Right side: gradient / color splash */}
            <div
                className="jh-float jh-float-6"
                style={{
                    top: '55%', right: '6%',
                    width: '110px', height: '85px',
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1557683316-973673baf926?w=160&h=120&fit=crop&q=80"
                    alt=""
                    style={{ opacity: 0.88 }}
                />
            </div>

            {/* 7 — Bottom-right: camera / product shot */}
            <div
                className="jh-float jh-float-7"
                style={{
                    bottom: '10%', right: '8%',
                    width: '105px', height: '80px',
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150&h=110&fit=crop&q=80"
                    alt=""
                    style={{ opacity: 0.9 }}
                />
            </div>

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
                <div className="jh-scroll">
                    <a href="#cooking" style={{ color: 'var(--text-light)' }}>
                        <ArrowDown size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
