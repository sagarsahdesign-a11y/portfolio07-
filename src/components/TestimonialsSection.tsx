import { GlassTestimonialSwiper } from "@/components/ui/glass-testimonial-swiper";

const TestimonialsSection = () => {
    return (
        <section className="relative py-28 md:py-36 overflow-hidden">
            {/* Ambient glow — subtle neutral */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(148,163,184,0.025) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 mb-16">
                <div className="text-center">
                    <span className="section-label mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="text-white mb-5">
                        What People Say
                    </h2>
                    <p className="text-base text-[#8B95A5] max-w-xl mx-auto">
                        Feedback from product managers, engineers, and founders I've collaborated with.
                    </p>
                </div>
            </div>

            <GlassTestimonialSwiper />
        </section>
    );
};

export default TestimonialsSection;
