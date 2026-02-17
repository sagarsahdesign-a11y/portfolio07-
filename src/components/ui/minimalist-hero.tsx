"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Linkedin, Twitter, ArrowDown } from "lucide-react";

interface BikironHeroProps {
    profileImage: string;
    name: string;
    title1: string;
    title2: string;
    description: string;
}

export function BikironHero({
    profileImage,
    name,
    title1,
    title2,
    description,
}: BikironHeroProps) {
    return (
        <>
            {/* Navigation - Exact Bikiron Match */}
            <nav className="bk-nav">
                <div className="bk-nav-inner">
                    {/* Left: Social Icons */}
                    <div className="bk-nav-links">
                        <a href="#/" className="bk-btn-icon">
                            <Home size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sagar-shah-389980319/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bk-btn-icon"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://x.com/Sagarshahas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bk-btn-icon"
                        >
                            <Twitter size={18} />
                        </a>
                    </div>

                    {/* Right: Pills and Links - ALL HASH-BASED */}
                    <div className="bk-nav-links">
                        <a href="#/resume" className="bk-btn bk-btn-pill bk-btn-pill-dark hidden sm:inline-flex">
                            View Resumé
                        </a>
                        <a href="#/philosophy" className="bk-nav-link hidden md:inline-block">
                            Design Philosophy
                        </a>
                        <a href="#/life" className="bk-nav-link hidden md:inline-block">
                            Life & Stories
                        </a>
                        <a href="#/services" className="bk-btn bk-btn-pill bk-btn-pill-orange">
                            Services I offer
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Exact Bikiron Match */}
            <section className="bg-white" style={{ paddingTop: '120px' }}>
                <div className="bk-section-lg">
                    <div className="bk-container">
                        {/* Centered Content */}
                        <div className="text-center">
                            {/* Small Label */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bk-label mb-6"
                            >
                                {name.toUpperCase()},
                            </motion.p>

                            {/* Profile Image - Updated to 88px */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="mb-8 flex justify-center"
                            >
                                <img
                                    src={profileImage}
                                    alt={name}
                                    className="bk-profile"
                                    style={{
                                        width: '88px',
                                        height: '88px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '3px solid white',
                                        boxShadow: '0 6px 28px rgba(0,0,0,0.14)'
                                    }}
                                />
                            </motion.div>

                            {/* Large Heading - 2 Lines - Updated size */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mb-6"
                                style={{
                                    fontSize: 'clamp(48px, 7vw, 80px)',
                                    lineHeight: '1.0',
                                    maxWidth: '600px',
                                    margin: '0 auto 24px'
                                }}
                            >
                                {title1}<br />{title2}
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-muted mb-10"
                                style={{
                                    maxWidth: '420px',
                                    margin: '0 auto 40px',
                                    fontSize: '15px',
                                    lineHeight: '1.7'
                                }}
                            >
                                {description}
                            </motion.p>

                            {/* Orange Circle Arrow CTA - Updated to 56px */}
                            <motion.a
                                href="#work"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bk-btn-circle inline-flex"
                                style={{
                                    width: '56px',
                                    height: '56px'
                                }}
                            >
                                <ArrowDown size={24} strokeWidth={2} />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
