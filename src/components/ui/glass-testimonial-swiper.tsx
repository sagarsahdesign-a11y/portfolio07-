"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Users, ShieldCheck, Zap, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Tag {
    text: string;
    type: "featured" | "default";
}

interface Stat {
    icon: React.ElementType;
    text: string;
}

export interface Testimonial {
    id: number;
    initials: string;
    name: string;
    role: string;
    quote: string;
    tags: Tag[];
    stats: Stat[];
    avatarGradient: string;
}

export interface GlassTestimonialSwiperProps {
    testimonials?: Testimonial[];
    className?: string;
}

/* ------------------------------------------------------------------ */
/*  Default Data                                                       */
/* ------------------------------------------------------------------ */

const defaultTestimonials: Testimonial[] = [
    {
        id: 1,
        initials: "PM",
        name: "Product Manager",
        role: "SaaS Platform • B2B Trading Software",
        quote:
            "Sagar delivered a polished, production-ready design system that significantly improved our development workflow and product consistency.",
        tags: [
            { text: "FEATURED", type: "featured" },
            { text: "Design System", type: "default" },
        ],
        stats: [
            { icon: Users, text: "Improved team velocity" },
            { icon: ShieldCheck, text: "Secure UX patterns" },
        ],
        avatarGradient: "linear-gradient(135deg, rgba(37,99,235,0.6), rgba(30,64,175,0.6))",
    },
    {
        id: 2,
        initials: "EL",
        name: "Engineering Lead",
        role: "FinTech Startup • Payment Dashboard",
        quote:
            "His attention to accessibility and security UX patterns helped us build trust with enterprise clients. The developer handoff was seamless.",
        tags: [{ text: "Enterprise", type: "default" }],
        stats: [
            { icon: ShieldCheck, text: "Enterprise-ready" },
            { icon: Zap, text: "Clean dev handoff" },
        ],
        avatarGradient: "linear-gradient(135deg, rgba(59,130,246,0.6), rgba(99,102,241,0.6))",
    },
    {
        id: 3,
        initials: "FD",
        name: "Founder",
        role: "PropTech Company • Real Estate Platform",
        quote:
            "Sagar's ability to translate complex workflows into intuitive interfaces made our platform accessible to non-technical users.",
        tags: [{ text: "B2B", type: "default" }],
        stats: [{ icon: Rocket, text: "Improved onboarding" }],
        avatarGradient: "linear-gradient(135deg, rgba(29,78,216,0.6), rgba(37,99,235,0.6))",
    },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function GlassTestimonialSwiper({
    testimonials = defaultTestimonials,
    className,
}: GlassTestimonialSwiperProps) {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(0);
    const touchStart = useRef<number | null>(null);
    const total = testimonials.length;

    const go = useCallback(
        (dir: number) => {
            setDirection(dir);
            setActive((prev) => (prev + dir + total) % total);
        },
        [total]
    );

    useEffect(() => {
        const timer = setInterval(() => go(1), 6000);
        return () => clearInterval(timer);
    }, [go]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") go(-1);
            if (e.key === "ArrowRight") go(1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [go]);

    const item = testimonials[active];

    return (
        <div
            className={cn("w-full max-w-[1100px] mx-auto px-4 md:px-6", className)}
            onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
                if (touchStart.current === null) return;
                const diff = touchStart.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1);
                touchStart.current = null;
            }}
        >
            {/* Glass card */}
            <div
                key={item.id}
                className={cn(
                    "relative rounded-[24px] p-8 md:p-10 transition-all duration-500",
                    "bg-white/[0.03] backdrop-blur-xl",
                    "border border-white/[0.06]",
                    "shadow-[0_4px_40px_rgba(0,0,0,0.2)]"
                )}
                style={{
                    animation: `testimonial-slide-${direction >= 0 ? "right" : "left"} 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)`,
                }}
            >
                {/* Quote icon */}
                <div className="absolute top-6 right-8 md:top-8 md:right-10">
                    <Quote className="w-8 h-8 text-white/[0.04]" strokeWidth={1.5} />
                </div>

                {/* Avatar + info + tags */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-7">
                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white/80 font-semibold text-sm tracking-wide flex-shrink-0 border border-white/[0.08]"
                        style={{ background: item.avatarGradient }}
                    >
                        {item.initials}
                    </div>

                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white/80 tracking-tight">
                            {item.name}
                        </p>
                        <p className="text-xs text-[#8B95A5] tracking-wide">
                            {item.role}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className={cn(
                                    "text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full",
                                    tag.type === "featured"
                                        ? "bg-blue-600/60 text-white/80"
                                        : "bg-white/[0.04] text-white/40 border border-white/[0.06]"
                                )}
                            >
                                {tag.text}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Quote text */}
                <blockquote className="text-base md:text-lg leading-relaxed text-[#A0AAB8] mb-7 max-w-3xl">
                    "{item.quote}"
                </blockquote>

                {/* Stats */}
                {item.stats.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {item.stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 text-xs font-medium text-[#8B95A5]"
                                >
                                    <Icon className="w-3.5 h-3.5 text-blue-500/60" strokeWidth={2} />
                                    <span>{stat.text}</span>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-5 mt-8">
                <button
                    onClick={() => go(-1)}
                    className="w-9 h-9 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-white/25 hover:text-white/50 hover:border-white/[0.12] transition-all duration-400"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-4 h-4" strokeWidth={2} />
                </button>

                <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > active ? 1 : -1);
                                setActive(idx);
                            }}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-400",
                                idx === active
                                    ? "w-7 bg-blue-500/60"
                                    : "w-1.5 bg-white/[0.08] hover:bg-white/[0.14]"
                            )}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => go(1)}
                    className="w-9 h-9 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-white/25 hover:text-white/50 hover:border-white/[0.12] transition-all duration-400"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-4 h-4" strokeWidth={2} />
                </button>
            </div>

            <style>{`
        @keyframes testimonial-slide-right {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes testimonial-slide-left {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
        </div>
    );
}

export default GlassTestimonialSwiper;
