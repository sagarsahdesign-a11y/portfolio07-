"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
                "relative min-h-[85vh] overflow-hidden flex flex-col",
                className
            )}
        >
            {/* ─── Layer 0: Deep navy base gradient — fades to transparent at bottom ─── */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(180deg, #0B1120 0%, #0F172A 40%, rgba(30, 41, 59, 0) 100%)",
                }}
            />



            {/* ─── Layer 1: Purple vortex artwork — cinematic depth field ─── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    transform: `translateY(${scrollY * 0.04}px) scale(1.2)`,
                    transition: "transform 0.1s linear",
                }}
            >
                <img
                    src="/vortex-bg.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        opacity: 0.15,
                        filter: "blur(32px) contrast(1.1)",
                        maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, transparent 15%, black 60%)",
                        WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, transparent 15%, black 60%)",
                    }}
                />
            </div>

            {/* ─── Layer 2: Dark overlay to tame the vortex ─── */}
            <div className="absolute inset-0 pointer-events-none bg-[#0B1120]/50" />

            {/* ─── Layer 3: Grain texture above vortex ─── */}
            <div className="absolute inset-0 pointer-events-none grain" />

            {/* ─── Layer 4: Radial hero spotlight — toned-down blue glow ─── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(37,99,235,0.045) 0%, transparent 70%)",
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
                className="flex items-center justify-between px-6 md:px-14 pt-8 pb-4 relative z-30"
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
                            className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/35 hover:text-white/80 transition-colors duration-400"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a
                    href={readMoreLink}
                    className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/40 hover:text-white/80 transition-colors duration-400"
                >
                    Portfolio
                    <ArrowRight className="w-3.5 h-3.5" />
                </a>
            </motion.nav>

            {/* ─── Main 3-column grid ─── */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 items-end px-6 md:px-14 pb-12 md:pb-20 relative z-10">

                {/* ── Left column — intro text ── */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col justify-end pb-8 lg:pb-24 max-w-md order-2 lg:order-1"
                >
                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        className="text-[15px] md:text-base leading-[1.8] text-[#8B95A5] mb-8"
                    >
                        {mainText}
                    </motion.p>

                    <motion.a
                        variants={fadeUp}
                        custom={3}
                        href={readMoreLink}
                        className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-white/50 hover:text-white/80 transition-colors duration-400 group w-fit"
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
                                    className="w-10 h-10 rounded-full border border-white/[0.07] flex items-center justify-center text-white/25 hover:text-white/60 hover:border-white/15 transition-all duration-400"
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
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[260px] h-[260px] md:w-[330px] md:h-[330px] lg:w-[380px] lg:h-[380px] rounded-full opacity-40"
                        style={{
                            background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.08) 50%, transparent 70%)",
                        }}
                    />
                    {/* Secondary ambient glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-blue-600/[0.04] blur-[80px]" />

                    {/* Portrait — floating animation */}
                    <motion.img
                        src={imageSrc}
                        alt={imageAlt}
                        className="relative z-10 w-[220px] md:w-[300px] lg:w-[360px] object-cover object-top rounded-t-[180px] animate-float-profile"
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
                        <p className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-none tracking-tighter text-white/[0.06] uppercase select-none">
                            {overlayText.part1}
                        </p>
                        <p className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-none tracking-tighter text-white/[0.06] uppercase select-none">
                            {overlayText.part2}
                        </p>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        custom={4}
                        className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/20"
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
