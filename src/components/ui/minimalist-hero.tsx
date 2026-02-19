"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Linkedin, Twitter, ArrowDown, Menu, X } from "lucide-react";

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
            {/* Jackie Hu Style Hero - Scattered Images + Centered Name */}
            <section className="jk-hero">
                {/* Floating Decorative Images */}
                {/* Top-left cluster */}
                <motion.img
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=160&h=200&fit=crop&q=80"
                    alt=""
                    className="jk-float-img"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{
                        top: '8%', left: '3%',
                        width: '140px', height: '175px',
                        objectFit: 'cover',
                        transform: 'rotate(-6deg)'
                    }}
                />

                {/* Top-left small - notebook/pen */}
                <motion.img
                    src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=120&h=120&fit=crop&q=80"
                    alt=""
                    className="jk-float-img"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                    style={{
                        top: '18%', left: '16%',
                        width: '110px', height: '110px',
                        objectFit: 'cover',
                        transform: 'rotate(3deg)'
                    }}
                />

                {/* Top-right - vinyl record */}
                <motion.img
                    src="https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=160&h=160&fit=crop&q=80"
                    alt=""
                    className="jk-float-img"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        top: '5%', right: '5%',
                        width: '130px', height: '130px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        transform: 'rotate(8deg)'
                    }}
                />

                {/* Right side - gradient/colorful */}
                <motion.img
                    src="https://images.unsplash.com/photo-1557683316-973673baf926?w=160&h=200&fit=crop&q=80"
                    alt=""
                    className="jk-float-img"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        top: '22%', right: '4%',
                        width: '130px', height: '170px',
                        objectFit: 'cover',
                        transform: 'rotate(4deg)'
                    }}
                />

                {/* Bottom-left - plant/nature */}
                <motion.img
                    src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=140&h=140&fit=crop&q=80"
                    alt=""
                    className="jk-float-img"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{
                        bottom: '12%', left: '6%',
                        width: '120px', height: '120px',
                        objectFit: 'cover',
                        transform: 'rotate(-3deg)'
                    }}
                />

                {/* Bottom-right - folder/tech */}
                <motion.img
                    src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=140&h=140&fit=crop&q=80"
                    alt=""
                    className="jk-float-img"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.8 }}
                    style={{
                        bottom: '15%', right: '8%',
                        width: '110px', height: '110px',
                        objectFit: 'cover',
                        transform: 'rotate(5deg)'
                    }}
                />

                {/* Center Content */}
                <div className="jk-hero-center">
                    <motion.h1
                        className="jk-hero-name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        Sagar Sah
                    </motion.h1>

                    <motion.p
                        className="jk-hero-role"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Product Design
                    </motion.p>

                    <motion.p
                        className="jk-hero-role"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                        style={{ fontSize: '12px', color: 'var(--text-light)' }}
                    >
                        Verb & Noun
                    </motion.p>

                    <motion.p
                        className="jk-hero-tagline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                    >
                        a thoughtful process of crafting experiences that engage people, shape clarity, and spark delights.
                    </motion.p>

                    {/* Social Icons */}
                    <motion.div
                        className="jk-social"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.55, duration: 0.6 }}
                    >
                        <a
                            href="https://www.linkedin.com/in/sagar-shah-389980319/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="jk-social-btn"
                            title="LinkedIn"
                        >
                            <Linkedin size={16} />
                        </a>
                        <a
                            href="https://www.behance.net/sagarsah7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="jk-social-btn"
                            title="Behance"
                            style={{ fontWeight: 700, fontSize: '13px' }}
                        >
                            Bē
                        </a>
                        <a
                            href="mailto:sagar.sah.design@gmail.com"
                            className="jk-social-btn"
                            title="Email"
                            style={{ fontSize: '16px' }}
                        >
                            ✉
                        </a>
                    </motion.div>

                    {/* Scroll Down Arrow */}
                    <motion.div
                        className="jk-scroll-arrow"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        ↓
                    </motion.div>
                </div>
            </section>
        </>
    );
}
