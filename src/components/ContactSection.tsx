import { motion } from "framer-motion";
import { Mail, Calendar, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="section bg-white">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="label mb-6">GET IN TOUCH</p>
                        <h2 className="mb-6">Let's work together</h2>
                        <p className="text-base text-[#6B7280] leading-relaxed">
                            Have a project in mind or want to discuss design opportunities? I'd love to hear from you.
                        </p>
                    </motion.div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        <motion.a
                            href="mailto:sagar.sah.design@gmail.com"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="card-soft hover:shadow-md transition-shadow flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-[#0066FF]" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase text-[#9CA3AF] mb-1">Email</p>
                                <p className="text-sm font-medium text-[#1A1A1A]">sagar.sah.design@gmail.com</p>
                            </div>
                        </motion.a>

                        <motion.a
                            href="#"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="card-soft hover:shadow-md transition-shadow flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-[#FF6B35]" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase text-[#9CA3AF] mb-1">Schedule</p>
                                <p className="text-sm font-medium text-[#1A1A1A]">Book a Call</p>
                            </div>
                        </motion.a>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="card"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-pill btn-pill-primary w-full md:w-auto"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
