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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

                    {/* Desktop: Pills and Links */}
                    <div className="bk-nav-links hidden md:flex">
                        <a href="#/resume" className="bk-btn bk-btn-pill bk-btn-pill-dark">
                            View Resumé
                        </a>
                        <a href="#/philosophy" className="bk-nav-link">
                            Design Philosophy
                        </a>
                        <a href="#/life" className="bk-nav-link">
                            Life & Stories
                        </a>
                        <a href="#/services" className="bk-btn bk-btn-pill bk-btn-pill-orange">
                            Services I offer
                        </a>
                    </div>

                    {/* Mobile: Hamburger Menu */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="bk-btn-icon md:hidden"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden bg-white border-t border-[rgba(0,0,0,0.07)]"
                        >
                            <div className="flex flex-col" style={{ padding: '16px 24px' }}>
                                <a
                                    href="#/resume"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="bk-btn-pill bk-btn-pill-dark mb-3"
                                    style={{ width: '100%', justifyContent: 'center', fontSize: '15px', height: '48px' }}
                                >
                                    View Resumé
                                </a>
                                <a
                                    href="#/philosophy"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-3 border-b border-[rgba(0,0,0,0.07)] text-[#555555] hover:text-[#111111] transition-colors"
                                    style={{ fontSize: '15px' }}
                                >
                                    Design Philosophy
                                </a>
                                <a
                                    href="#/life"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-3 border-b border-[rgba(0,0,0,0.07)] text-[#555555] hover:text-[#111111] transition-colors"
                                    style={{ fontSize: '15px' }}
                                >
                                    Life & Stories
                                </a>
                                <a
                                    href="#/services"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="bk-btn-pill bk-btn-pill-orange mt-3"
                                    style={{ width: '100%', justifyContent: 'center', fontSize: '15px', height: '48px' }}
                                >
                                    Services I offer
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section - Exact Bikiron Match */}
            <section className="bg-white" style={{ paddingTop: '120px' }}>
                <div className="bk-section-lg">
                    <div className="bk-container">
                        {/* Centered Content */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            width: '100%'
                        }}>
                            {/* Small Label */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bk-label mb-6"
                                style={{ textAlign: 'center', width: '100%' }}
                            >
                                {name.toUpperCase()},
                            </motion.p>

                            {/* Profile Image - Updated to 88px */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="mb-8"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '100%'
                                }}
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
                                    margin: '0 auto 24px',
                                    textAlign: 'center',
                                    width: '100%'
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
                                    lineHeight: '1.7',
                                    textAlign: 'center',
                                    width: '100%',
                                    paddingLeft: '20px',
                                    paddingRight: '20px'
                                }}
                            >
                                {description}
                            </motion.p>

                            {/* Orange Circle Arrow CTA - Updated to 56px - CENTERED */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%'
                                }}
                            >
                                <a
                                    href="#work"
                                    className="bk-btn-circle inline-flex"
                                    style={{
                                        width: '56px',
                                        height: '56px'
                                    }}
                                >
                                    <ArrowDown size={24} strokeWidth={2} />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
