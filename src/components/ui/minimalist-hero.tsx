"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Home, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface NavLink {
    label: string;
    href: string;
}

interface SocialLink {
    icon: React.ElementType;
    href: string;
}

export interface MinimalistHeroProps {
    logoText: string;
    navLinks: NavLink[];
    mainText: string;
    readMoreLink: string;
    imageSrc: string;
    imageAlt: string;
    socialLinks: SocialLink[];
    locationText: string;
    className?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function MinimalistHero({
    logoText,
    navLinks,
    mainText,
    readMoreLink,
    imageSrc,
    imageAlt,
    socialLinks,
    locationText,
    className,
}: MinimalistHeroProps) {
    return (
        <section
            className={cn(
                "relative",
                className
            )}
        >
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[#F5F6F8]/80 backdrop-blur-sm border-b border-[#E5E7EB]">
                <div className="container">
                    <div className="flex items-center justify-between h-20">
                        {/* Left: Icon buttons */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="btn-icon">
                                <Home size={18} />
                            </a>
                            {socialLinks.slice(0, 2).map((link, i) => (
                                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-icon">
                                    <link.icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Right: Pill buttons */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="btn-pill btn-pill-dark hidden sm:inline-flex">
                                View Resumé
                            </a>
                            {navLinks.slice(0, 2).map((link, i) => (
                                <a key={i} href={link.href} className="btn-pill hidden md:inline-flex">
                                    {link.label}
                                </a>
                            ))}
                            <a href="#contact" className="btn-pill btn-pill-primary">
                                Book a call
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="section">
                <div className="container">
                    {/* Centered Profile */}
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="mb-8"
                        >
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-4"
                        >
                            Sagar Sah
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="label mb-12"
                        >
                            PRODUCT DESIGNER
                        </motion.p>

                        {/* Speech Bubble Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="card-soft max-w-2xl mx-auto mb-16"
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">👋</span>
                                <div className="text-left">
                                    <p className="text-base leading-relaxed">
                                        {mainText}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 text-left">
                            {/* Left: Experience */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <h4 className="label mb-6">EXPERIENCE — 2 YEARS</h4>

                                <div className="space-y-8">
                                    {/* Experience Item 1 */}
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center flex-shrink-0">
                                            <span className="font-bold text-sm">SS</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-base mb-1">Product Designer</h4>
                                            <p className="text-sm text-[#9CA3AF] mb-2">May 2023-Present • 1 year</p>
                                            <ul className="text-sm space-y-1 text-[#6B7280]">
                                                <li>• Designed secure SaaS interfaces</li>
                                                <li>• Built design systems from scratch</li>
                                                <li>• Collaborated with dev teams</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Experience Item 2 */}
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center flex-shrink-0">
                                            <span className="font-bold text-sm">UI</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-base mb-1">UI/UX Designer</h4>
                                            <p className="text-sm text-[#9CA3AF] mb-2">Jan 2022-Apr 2023 • 1 year</p>
                                            <ul className="text-sm space-y-1 text-[#6B7280]">
                                                <li>• Created user-centered designs</li>
                                                <li>• Conducted user research</li>
                                                <li>• Prototyp ed high-fidelity mockups</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: Skills */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <h4 className="label mb-6">SKILLS</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Problem Discovery</li>
                                    <li>• User Research</li>
                                    <li>• Design Systems</li>
                                    <li>• Storytelling</li>
                                    <li>• High Fidelity Prototyping</li>
                                    <li>• Visual Design</li>
                                    <li>• UI animation</li>
                                    <li>• Branding and Identity</li>
                                </ul>

                                <h4 className="label mt-8 mb-6">TOOLS</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Figma</li>
                                    <li>• Adobe After effects</li>
                                    <li>• Adobe Illustrator</li>
                                    <li>• Adobe Photoshop</li>
                                    <li>• Webflow</li>
                                    <li>• Gainsightopen PX</li>
                                </ul>

                                <h4 className="label mt-8 mb-6">EDUCATION</h4>
                                <p className="text-sm font-semibold">
                                    BTech in Electronics and Communication Engineering, 2015- 2020
                                </p>
                                <p className="text-sm text-[#9CA3AF]">
                                    (EOI CGPA)
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
