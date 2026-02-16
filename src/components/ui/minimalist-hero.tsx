"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import vortexBg from "@/assets/vortex-bg.png";

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

interface OverlayText {
    part1: string;
    part2: string;
}

export interface MinimalistHeroProps {
    logoText: string;
    navLinks: NavLink[];
    mainText: string;
    readMoreLink: string;
    imageSrc: string;
    imageAlt: string;
    overlayText: OverlayText;
    socialLinks: SocialLink[];
    locationText: string;
    className?: string;
}

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
    }),
};

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
    overlayText,
    socialLinks,
    locationText,
    className,
}: MinimalistHeroProps) {
    // Subtle mouse parallax for portrait
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            setMouse({ x: x * 8, y: y * 5 });
        };
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={cn(
                "relative min-h-[80vh] md:min-h-[85vh] overflow-hidden flex flex-col",
                className
            )}
        >
            {/* ─── Grain texture ─── */}
            <div className="absolute inset-0 pointer-events-none grain" />

            {/* ─── Layer 4: Radial hero spotlight — toned-down blue glow ─── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(148,163,184,0.025) 0%, transparent 70%)",
                }}
            />

            {/* ─── Layer 5: Subtle top-down ambient light ─── */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, rgba(148,163,184,0.03) 0%, transparent 70%)",
                }}
            />

            {/* ─── Top nav bar ─── */}
            <motion.nav
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
                className="flex items-center justify-between px-4 md:px-14 pt-6 md:pt-8 pb-4 relative z-30"
            >
                <a
                    href="#"
                    className="text-xl md:text-2xl font-extrabold tracking-tight text-white select-none"
                >
                    {logoText}
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/50 hover:text-white/95 transition-colors duration-400"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a
                    href={readMoreLink}
                    className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/55 hover:text-white/90 transition-colors duration-400"
                >
                    Portfolio
                    <ArrowRight className="w-3.5 h-3.5" />
                </a>
            </motion.nav>

            {/* ─── Main 3-column grid ─── */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 items-end px-4 md:px-14 pb-10 md:pb-20 relative z-10">

                {/* ── Left column — intro text ── */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col justify-end pb-8 lg:pb-24 max-w-md order-2 lg:order-1"
                >
                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        className="text-[15px] md:text-base leading-[1.8] text-[#B8C5D6] mb-8"
                    >
                        {mainText}
                    </motion.p>

                    <motion.a
                        variants={fadeUp}
                        custom={3}
                        href={readMoreLink}
                        className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-white/70 hover:text-white/95 transition-colors duration-400 group w-fit"
                    >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-400" />
                    </motion.a>

                    {/* Social links */}
                    <motion.div variants={fadeUp} custom={4} className="flex gap-3 mt-12">
                        {socialLinks.map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/[0.07] flex items-center justify-center text-white/35 hover:text-white/75 hover:border-white/20 transition-all duration-400"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* ── Center column — portrait with radial glow ── */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={1}
                    className="relative flex items-end justify-center order-1 lg:order-2 mb-8 lg:mb-0"
                >
                    {/* Soft gradient glow circle behind portrait */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[330px] md:h-[330px] lg:w-[380px] lg:h-[380px] rounded-full opacity-40"
                        style={{
                            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(148,163,184,0.03) 50%, transparent 70%)",
                        }}
                    />
                    {/* Secondary ambient glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-white/[0.015] blur-[80px]" />

                    {/* Portrait — floating animation */}
                    <motion.img
                        src={imageSrc}
                        alt={imageAlt}
                        className="relative z-10 w-[180px] sm:w-[220px] md:w-[300px] lg:w-[360px] object-cover object-top rounded-t-[180px] animate-float-profile"
                        style={{
                            maxHeight: "68vh",
                            filter: "drop-shadow(0 16px 48px rgba(0,0,0,0.4))",
                            transform: `translate(${mouse.x}px, ${mouse.y}px)`,
                            transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
                        }}
                    />
                </motion.div>

                {/* ── Right column — large typography + location ── */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start lg:items-end justify-end pb-8 lg:pb-16 order-3"
                >
                    <motion.div
                        variants={fadeUp}
                        custom={2}
                        className="mb-12 text-right"
                    >
                        <p className="text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-none tracking-tighter text-white/[0.06] uppercase select-none">
                            {overlayText.part1}
                        </p>
                        <p className="text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-none tracking-tighter text-white/[0.06] uppercase select-none">
                            {overlayText.part2}
                        </p>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        custom={4}
                        className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/35"
                    >
                        {locationText}
                    </motion.p>
                </motion.div>
            </div>

            {/* Bottom separator */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04] origin-left"
            />
        </section>
    );
}

export default MinimalistHero;
