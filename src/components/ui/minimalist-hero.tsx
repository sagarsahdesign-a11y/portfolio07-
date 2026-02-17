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
            {/* Navigation - Bikiron.in Style - LIGHT THEME */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 200,
                background: 'rgba(245,246,249,0.92)',
                backdropFilter: 'blur(16px)',
                borderBottom: '1px solid rgba(0,0,0,0.07)',
                height: '64px'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 40px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    {/* Left: Social Icon Buttons */}
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        {/* Home - Black filled */}
                        <a
                            href="#/"
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: '#111111',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#FF5E1A'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#111111'}
                        >
                            <Home size={16} strokeWidth={2.5} />
                        </a>

                        {/* LinkedIn - White with border */}
                        <a
                            href="https://www.linkedin.com/in/sagar-shah-389980319/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: '#ffffff',
                                border: '1.5px solid #cccccc',
                                color: '#111111',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                fontSize: '13px',
                                fontWeight: 700,
                                transition: 'all 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#111111';
                                e.currentTarget.style.color = '#ffffff';
                                e.currentTarget.style.borderColor = '#111111';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#ffffff';
                                e.currentTarget.style.color = '#111111';
                                e.currentTarget.style.borderColor = '#cccccc';
                            }}
                        >
                            in
                        </a>

                        {/* Twitter/X - White with border */}
                        <a
                            href="https://x.com/Sagarshahas"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: '#ffffff',
                                border: '1.5px solid #cccccc',
                                color: '#111111',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                fontSize: '13px',
                                fontWeight: 700,
                                transition: 'all 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#111111';
                                e.currentTarget.style.color = '#ffffff';
                                e.currentTarget.style.borderColor = '#111111';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#ffffff';
                                e.currentTarget.style.color = '#111111';
                                e.currentTarget.style.borderColor = '#cccccc';
                            }}
                        >
                            𝕏
                        </a>
                    </div>

                    {/* Right: Nav Links - Desktop Only */}
                    <div className="hidden md:flex" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        {/* View Resumé - Dark pill */}
                        <a
                            href="#/resume"
                            style={{
                                background: '#111111',
                                color: '#ffffff',
                                borderRadius: '99px',
                                padding: '9px 22px',
                                fontSize: '13.5px',
                                fontWeight: 500,
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#333333'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#111111'}
                        >
                            View Resumé
                        </a>

                        {/* Design Philosophy - Plain link */}
                        <a
                            href="#/philosophy"
                            style={{
                                color: '#666666',
                                fontSize: '13.5px',
                                fontWeight: 500,
                                textDecoration: 'none',
                                padding: '8px 18px',
                                borderRadius: '99px',
                                transition: 'all 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#111111';
                                e.currentTarget.style.background = 'rgba(0,0,0,0.06)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#666666';
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            Design Philosophy
                        </a>

                        {/* Life & Stories - Plain link */}
                        <a
                            href="#/life"
                            style={{
                                color: '#666666',
                                fontSize: '13.5px',
                                fontWeight: 500,
                                textDecoration: 'none',
                                padding: '8px 18px',
                                borderRadius: '99px',
                                transition: 'all 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#111111';
                                e.currentTarget.style.background = 'rgba(0,0,0,0.06)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#666666';
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            Life & Stories
                        </a>

                        {/* Services I offer - Orange pill */}
                        <a
                            href="#/services"
                            style={{
                                background: '#FF5E1A',
                                color: '#ffffff',
                                borderRadius: '99px',
                                padding: '9px 22px',
                                fontSize: '13.5px',
                                fontWeight: 500,
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#e04a0a'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#FF5E1A'}
                        >
                            Services I offer
                        </a>
                    </div>

                    {/* Mobile: Hamburger Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            border: '1.5px solid #dddddd',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
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
                            className="md:hidden"
                            style={{
                                overflow: 'hidden',
                                background: '#ffffff',
                                borderTop: '1px solid rgba(0,0,0,0.06)'
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {/* View Resumé */}
                                <a
                                    href="#/resume"
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        padding: '14px 24px',
                                        borderBottom: '1px solid rgba(0,0,0,0.06)',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        color: '#111111',
                                        textDecoration: 'none',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    View Resumé
                                </a>

                                {/* Design Philosophy */}
                                <a
                                    href="#/philosophy"
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        padding: '14px 24px',
                                        borderBottom: '1px solid rgba(0,0,0,0.06)',
                                        fontSize: '15px',
                                        fontWeight: 400,
                                        color: '#555555',
                                        textDecoration: 'none',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    Design Philosophy
                                </a>

                                {/* Life & Stories */}
                                <a
                                    href="#/life"
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        padding: '14px 24px',
                                        borderBottom: '1px solid rgba(0,0,0,0.06)',
                                        fontSize: '15px',
                                        fontWeight: 400,
                                        color: '#555555',
                                        textDecoration: 'none',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    Life & Stories
                                </a>

                                {/* Services I offer */}
                                <a
                                    href="#/services"
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        padding: '14px 24px',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        color: '#FF5E1A',
                                        textDecoration: 'none',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
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

                            {/* Orange Circle Arrow CTA - CENTERED ON BOTH MOBILE & DESKTOP */}
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
