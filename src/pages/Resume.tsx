import { motion } from "framer-motion";
import { Download, MapPin, Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

const ResumePage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Header */}
            <section className="section bg-white border-b border-[#E5E7EB]">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Link */}
                        <motion.a
                            href="/"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#1A1A1A] mb-8 transition-colors"
                        >
                            ← Back to Portfolio
                        </motion.a>

                        {/* Name & Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-8"
                        >
                            <h1 className="mb-4">Sagar Sah</h1>
                            <p className="text-xl text-[#6B7280] mb-6">
                                Product Designer (UI/UX) | Security-Aware Systems
                            </p>

                            {/* Contact Info */}
                            <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                                <a href="mailto:sagar.sah.design@gmail.com" className="flex items-center gap-2 hover:text-[#0066FF] transition-colors">
                                    <Mail size={16} />
                                    sagar.sah.design@gmail.com
                                </a>
                                <a href="tel:+917416292404" className="flex items-center gap-2 hover:text-[#0066FF] transition-colors">
                                    <Phone size={16} />
                                    +91 74162 92404
                                </a>
                                <span className="flex items-center gap-2">
                                    <MapPin size={16} />
                                    Bengaluru, India
                                </span>
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap gap-3 mt-6">
                                <a
                                    href="https://fearless-yards-788912.framer.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-pill text-sm inline-flex items-center gap-2"
                                >
                                    <ExternalLink size={14} />
                                    Portfolio
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/sagar-shah-389980319/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-pill text-sm inline-flex items-center gap-2"
                                >
                                    <Linkedin size={14} />
                                    LinkedIn
                                </a>
                                <a
                                    href="#/"
                                    className="text-sm text-muted hover:text-dark transition-colors inline-flex items-center gap-1"
                                >
                                    <Download size={14} />
                                    Download PDF
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Professional Summary */}
            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-6">Professional Summary</h2>
                            <p className="text-base text-[#6B7280] leading-relaxed">
                                Product designer combining UI/UX expertise with a technical background in Cyber Security.
                                Experienced in designing accessible web and mobile interfaces and collaborating with developers
                                to deliver build-ready products. Bridges design and frontend implementation (HTML/CSS/JavaScript)
                                while applying security-first principles to user workflows. UI/UX content creator with 9k+ followers
                                sharing practical design insights and case studies.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills & Technology */}
            <section className="section bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-8">Skills & Technology</h2>

                            <div className="space-y-6">
                                {/* Core UX/UI */}
                                <div>
                                    <h4 className="font-semibold text-base mb-3 text-[#1A1A1A]">Core UX/UI</h4>
                                    <p className="text-sm text-[#6B7280] leading-relaxed">
                                        User research, information architecture, wireframing, interaction design, rapid prototyping,
                                        design systems, accessibility (WCAG), responsive web & mobile design
                                    </p>
                                </div>

                                {/* Design Strategy */}
                                <div>
                                    <h4 className="font-semibold text-base mb-3 text-[#1A1A1A]">Design Strategy</h4>
                                    <p className="text-sm text-[#6B7280] leading-relaxed">
                                        User-centered design, journey mapping, persona development, usability testing
                                    </p>
                                </div>

                                {/* Tools */}
                                <div>
                                    <h4 className="font-semibold text-base mb-3 text-[#1A1A1A]">Tools</h4>
                                    <p className="text-sm text-[#6B7280] leading-relaxed">
                                        Figma (auto-layout, components), Framer, Adobe XD, Photoshop, Illustrator, Miro,
                                        Webflow, Notion, Jira
                                    </p>
                                </div>

                                {/* Development & Technical */}
                                <div>
                                    <h4 className="font-semibold text-base mb-3 text-[#1A1A1A]">Development & Technical</h4>
                                    <p className="text-sm text-[#6B7280] leading-relaxed">
                                        HTML5, CSS3, basic JavaScript, developer handoff documentation, secure authentication UX patterns
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Professional Experience */}
            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-8">Professional Experience</h2>

                            <div className="space-y-10">
                                {/* Freelance Product Designer */}
                                <div className="card-soft">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl mb-1">Freelance Product Designer</h3>
                                            <p className="text-sm text-[#9CA3AF]">Remote</p>
                                        </div>
                                        <span className="text-sm font-medium text-[#6B7280] mt-2 md:mt-0">Jan 2024 – Present</span>
                                    </div>
                                    <ul className="space-y-2 text-sm text-[#6B7280]">
                                        <li>• Spearheaded end-to-end UI/UX design for healthcare and e-commerce products, translating complex requirements into intuitive web and mobile interfaces</li>
                                        <li>• Built scalable component libraries in Figma to improve visual consistency and streamline developer handoff</li>
                                        <li>• Redesigned onboarding and checkout flows through usability testing and iterative design</li>
                                        <li>• Collaborated with engineering teams using structured documentation (Jira/Notion) to implement secure authentication workflows</li>
                                    </ul>
                                </div>

                                {/* Freelance UI Designer */}
                                <div className="card-soft">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl mb-1">Freelance UI Designer</h3>
                                            <p className="text-sm text-[#9CA3AF]">Remote</p>
                                        </div>
                                        <span className="text-sm font-medium text-[#6B7280] mt-2 md:mt-0">Mar 2023 – Dec 2023</span>
                                    </div>
                                    <ul className="space-y-2 text-sm text-[#6B7280]">
                                        <li>• Designed modern dashboards for café management and B2B platforms, simplifying complex information for non-technical users</li>
                                        <li>• Produced high-fidelity interactive prototypes in Framer to accelerate stakeholder feedback and approvals</li>
                                        <li>• Delivered build-ready specifications (Figma + CSS guidance) to reduce design-to-development errors</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Projects */}
            <section className="section bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-8">Key Projects</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* ZenTrade */}
                                <div className="card-soft">
                                    <span className="tag mb-3">Lead Designer</span>
                                    <h4 className="font-semibold text-base mb-2">ZenTrade</h4>
                                    <p className="text-xs text-[#9CA3AF] mb-2">B2B Trading Platform</p>
                                    <p className="text-sm text-[#6B7280]">
                                        Redesigned dashboards and navigation to simplify complex workflows and improve usability.
                                    </p>
                                </div>

                                {/* Phishing Awareness */}
                                <div className="card-soft">
                                    <span className="tag mb-3">Designer & Developer</span>
                                    <h4 className="font-semibold text-base mb-2">Phishing Awareness Simulator</h4>
                                    <p className="text-xs text-[#9CA3AF] mb-2">Educational Tool</p>
                                    <p className="text-sm text-[#6B7280]">
                                        Designed an interactive educational tool simulating real-world phishing scenarios.
                                    </p>
                                </div>

                                {/* FitPulse */}
                                <div className="card-soft">
                                    <span className="tag mb-3">UI/UX Designer</span>
                                    <h4 className="font-semibold text-base mb-2">FitPulse</h4>
                                    <p className="text-xs text-[#9CA3AF] mb-2">Health Tech App</p>
                                    <p className="text-sm text-[#6B7280]">
                                        Developed an accessibility-focused health dashboard using scalable design components.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-8">Education</h2>

                            <div className="card-soft">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                    <div>
                                        <h3 className="text-xl mb-1">B.Tech in Cyber Security</h3>
                                        <p className="text-sm text-[#9CA3AF]">GIET College</p>
                                    </div>
                                    <span className="text-sm font-medium text-[#6B7280] mt-2 md:mt-0">Expected Mar 2027</span>
                                </div>
                                <p className="text-sm text-[#6B7280]">
                                    Focus: Human-Computer Interaction (HCI), ethical hacking, network security, secure UI principles
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certifications & Leadership */}
            <section className="section bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-8">Certifications & Leadership</h2>

                            <div className="space-y-4">
                                <div className="card-soft">
                                    <h4 className="font-semibold text-base mb-2">UI/UX Certifications</h4>
                                    <p className="text-sm text-[#6B7280]">
                                        Adobe XD, Figma, and Framer
                                    </p>
                                </div>

                                <div className="card-soft">
                                    <h4 className="font-semibold text-base mb-2">Design Community Leadership</h4>
                                    <p className="text-sm text-[#6B7280]">
                                        Founder of a design community with 9k+ followers on LinkedIn and Instagram
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResumePage;
