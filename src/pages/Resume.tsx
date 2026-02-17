import { motion } from "framer-motion";
import { Download, Mail, Linkedin } from "lucide-react";

const ResumePage = () => {
    return (
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
            {/* Resume Card Container */}
            <div style={{ padding: '60px 40px 80px', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bk-card"
                    style={{
                        padding: '52px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative Orange Blur Circle */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-60px',
                        right: '-60px',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: 'rgba(255,92,26,0.06)',
                        pointerEvents: 'none'
                    }} />

                    {/* Header with Avatar */}
                    <div style={{
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'flex-start',
                        marginBottom: '36px',
                        paddingBottom: '32px',
                        borderBottom: '1px solid rgba(0,0,0,0.07)',
                        position: 'relative'
                    }}>
                        {/* Avatar Circle */}
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            flexShrink: 0,
                            background: 'linear-gradient(135deg,#1a1a2e,#16213e)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Playfair Display',
                            fontSize: '26px',
                            fontWeight: 700,
                            color: '#fff'
                        }}>
                            S
                        </div>

                        {/* Name & Title */}
                        <div style={{ flex: 1 }}>
                            <h1 style={{
                                fontFamily: 'Playfair Display',
                                fontSize: 'clamp(30px,4vw,44px)',
                                fontWeight: 900,
                                lineHeight: 1.1,
                                marginBottom: '4px'
                            }}>
                                Sagar Sah
                            </h1>
                            <p style={{
                                fontSize: '12px',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: '#999999',
                                marginTop: '4px'
                            }}>
                                Lead Product Designer
                            </p>
                        </div>

                        {/* Email & Links */}
                        <div style={{
                            marginLeft: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            alignItems: 'flex-end'
                        }}>
                            <div style={{
                                fontSize: '13px',
                                color: '#555555',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}>
                                <Mail size={14} />
                                sagar.sah.design@gmail.com
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <a
                                    href="https://www.linkedin.com/in/sagar-shah-389980319/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bk-btn-icon"
                                >
                                    <Linkedin size={14} />
                                </a>
                                <a
                                    href="#/"
                                    className="text-sm text-muted hover:text-dark transition-colors inline-flex items-center gap-1"
                                >
                                    <Download size={14} />
                                    PDF
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* "Hi there!" Bubble */}
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '14px',
                        padding: '18px 22px',
                        marginBottom: '40px',
                        maxWidth: '560px',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                        position: 'relative'
                    }}>
                        <p style={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: '#111111',
                            marginBottom: '8px'
                        }}>
                            😎 Hi there!
                        </p>
                        <p style={{
                            fontSize: '13.5px',
                            lineHeight: '1.7',
                            color: '#555555',
                            marginBottom: '6px'
                        }}>
                            With 1+ year of freelance experience, building user-centric products for global clients. Combining UI/UX craft with Cyber Security knowledge and a passion for accessible design.
                        </p>
                        <p style={{
                            fontSize: '12px',
                            color: '#999999'
                        }}>
                            Sharing insights with 9k+ followers on LinkedIn & Instagram.
                        </p>
                    </div>

                    {/* Two-Column Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 280px',
                        gap: '48px'
                    }}>
                        {/* Left: Experience */}
                        <div>
                            <p style={{
                                fontSize: '11px',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: '#999999',
                                fontWeight: 600,
                                marginBottom: '28px'
                            }}>
                                Experience — 1+ Year
                            </p>

                            {/* Freelance Company */}
                            <div style={{ marginBottom: '36px' }}>
                                {/* Company Header */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    marginBottom: '16px'
                                }}>
                                    {/* Company Logo Letter Circle */}
                                    <div style={{
                                        width: '38px',
                                        height: '38px',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '16px',
                                        fontWeight: 700,
                                        color: '#fff',
                                        flexShrink: 0,
                                        background: '#ff5c1a'
                                    }}>
                                        F
                                    </div>
                                    <span style={{
                                        fontFamily: 'Playfair Display',
                                        fontSize: '22px',
                                        fontWeight: 700
                                    }}>
                                        Freelance
                                    </span>
                                </div>

                                {/* Lead Product Designer Role */}
                                <div style={{
                                    marginBottom: '18px',
                                    paddingLeft: '16px',
                                    borderLeft: '2px solid #dddddd'
                                }}>
                                    <div>
                                        <span style={{
                                            fontSize: '15px',
                                            fontWeight: 600,
                                            color: '#111111'
                                        }}>
                                            Lead Product Designer
                                        </span>
                                        <span style={{
                                            fontSize: '12px',
                                            color: '#ff5c1a',
                                            fontWeight: 500,
                                            marginLeft: '10px'
                                        }}>
                                            Jan 2024 – Present
                                        </span>
                                    </div>
                                    <ul style={{
                                        marginTop: '8px',
                                        paddingLeft: '2px'
                                    }}>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Spearheaded end-to-end UI/UX for healthcare and e-commerce products
                                        </li>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Built scalable component libraries in Figma to streamline developer handoff
                                        </li>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Redesigned onboarding and checkout flows through usability testing
                                        </li>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Collaborated with engineering teams using Jira/Notion for secure workflows
                                        </li>
                                    </ul>
                                </div>

                                {/* UI/UX Designer Role */}
                                <div style={{
                                    paddingLeft: '16px',
                                    borderLeft: '2px solid #dddddd'
                                }}>
                                    <div>
                                        <span style={{
                                            fontSize: '15px',
                                            fontWeight: 600,
                                            color: '#111111'
                                        }}>
                                            UI/UX Designer
                                        </span>
                                        <span style={{
                                            fontSize: '12px',
                                            color: '#ff5c1a',
                                            fontWeight: 500,
                                            marginLeft: '10px'
                                        }}>
                                            Mar 2023 – Dec 2023
                                        </span>
                                    </div>
                                    <ul style={{
                                        marginTop: '8px',
                                        paddingLeft: '2px'
                                    }}>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Designed modern dashboards for café management and B2B platforms
                                        </li>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Produced high-fidelity prototypes in Framer to accelerate feedback
                                        </li>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Delivered build-ready Figma + CSS specs to reduce dev errors
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Key Projects */}
                            <p style={{
                                fontSize: '11px',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: '#999999',
                                fontWeight: 600,
                                marginBottom: '28px',
                                marginTop: '32px'
                            }}>
                                Key Projects
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                {/* ZenTrade */}
                                <div style={{
                                    paddingLeft: '16px',
                                    borderLeft: '2px solid #dddddd'
                                }}>
                                    <span style={{
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        color: '#111111'
                                    }}>
                                        ZenTrade — B2B Trading Platform
                                    </span>
                                    <ul style={{
                                        marginTop: '8px',
                                        paddingLeft: '2px'
                                    }}>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Redesigned dashboards to simplify complex workflows
                                        </li>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Implemented intuitive navigation and engaging layouts
                                        </li>
                                    </ul>
                                </div>

                                {/* FitPulse */}
                                <div style={{
                                    paddingLeft: '16px',
                                    borderLeft: '2px solid #dddddd'
                                }}>
                                    <span style={{
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        color: '#111111'
                                    }}>
                                        FitPulse — Health Tech App
                                    </span>
                                    <ul style={{
                                        marginTop: '8px',
                                        paddingLeft: '2px'
                                    }}>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Built accessibility-focused health dashboard
                                        </li>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Enhanced accessibility for broader audience reach
                                        </li>
                                    </ul>
                                </div>

                                {/* Phishing Simulator */}
                                <div style={{
                                    paddingLeft: '16px',
                                    borderLeft: '2px solid #dddddd'
                                }}>
                                    <span style={{
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        color: '#111111'
                                    }}>
                                        Phishing Awareness Simulator
                                    </span>
                                    <ul style={{
                                        marginTop: '8px',
                                        paddingLeft: '2px'
                                    }}>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Designed interactive educational tool simulating phishing scenarios
                                        </li>
                                        <li style={{
                                            fontSize: '13px',
                                            lineHeight: '1.65',
                                            color: '#555555',
                                            marginBottom: '5px',
                                            listStyle: 'disc',
                                            marginLeft: '14px'
                                        }}>
                                            Developed engaging UI/UX flows for scenario engagement
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right: Sidebar */}
                        <div>
                            {/* Skills */}
                            <div style={{ marginBottom: '32px' }}>
                                <p style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    fontWeight: 600,
                                    color: '#999999',
                                    marginBottom: '14px'
                                }}>
                                    Skills
                                </p>
                                <ul style={{ listStyle: 'none' }}>
                                    {['Problem Discovery', 'User Research', 'Design Systems', 'Storytelling', 'High Fidelity Prototyping', 'Visual Design', 'UI Animation', 'Branding & Identity'].map((skill, i) => (
                                        <li key={i} style={{
                                            fontSize: '13.5px',
                                            color: '#111111',
                                            marginBottom: '7px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}>
                                            <span style={{ color: '#ff5c1a' }}>•</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tools */}
                            <div style={{ marginBottom: '32px' }}>
                                <p style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    fontWeight: 600,
                                    color: '#999999',
                                    marginBottom: '14px'
                                }}>
                                    Tools
                                </p>
                                <ul style={{ listStyle: 'none' }}>
                                    {['Figma', 'Framer', 'Adobe XD', 'Adobe Illustrator', 'Adobe Photoshop', 'Webflow', 'Miro / Notion'].map((tool, i) => (
                                        <li key={i} style={{
                                            fontSize: '13.5px',
                                            color: '#111111',
                                            marginBottom: '7px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}>
                                            <span style={{ color: '#ff5c1a' }}>•</span>
                                            {tool}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Education */}
                            <div style={{ marginBottom: '32px' }}>
                                <p style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    fontWeight: 600,
                                    color: '#999999',
                                    marginBottom: '14px'
                                }}>
                                    Education
                                </p>
                                <div style={{ marginBottom: '16px' }}>
                                    <h4 style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        lineHeight: '1.4'
                                    }}>
                                        B.Tech in Cyber Security
                                    </h4>
                                    <p style={{
                                        fontSize: '12.5px',
                                        color: '#999999',
                                        marginTop: '2px'
                                    }}>
                                        GIET College, Rajamandry<br />
                                        2023 – 2027
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        lineHeight: '1.4'
                                    }}>
                                        High School (Science)
                                    </h4>
                                    <p style={{
                                        fontSize: '12.5px',
                                        color: '#999999',
                                        marginTop: '2px'
                                    }}>
                                        DAV College, Kathmandu<br />
                                        2020 – 2022
                                    </p>
                                </div>
                            </div>

                            {/* Languages */}
                            <div>
                                <p style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    fontWeight: 600,
                                    color: '#999999',
                                    marginBottom: '14px'
                                }}>
                                    Languages
                                </p>
                                <ul style={{ listStyle: 'none' }}>
                                    {['English', 'Hindi', 'Nepali'].map((lang, i) => (
                                        <li key={i} style={{
                                            fontSize: '13.5px',
                                            color: '#111111',
                                            marginBottom: '7px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}>
                                            <span style={{ color: '#ff5c1a' }}>•</span>
                                            {lang}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <footer style={{
                background: '#0e0e0e',
                padding: '80px 40px 60px',
                marginTop: 'auto'
            }}>
                <h2 style={{
                    fontFamily: 'Playfair Display',
                    fontSize: 'clamp(40px,6vw,72px)',
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: '28px',
                    lineHeight: 1
                }}>
                    Let's have a word?
                </h2>
                <a
                    href="mailto:sagar.sah.design@gmail.com"
                    className="bk-btn-circle inline-flex"
                    style={{
                        marginBottom: '52px',
                        width: '56px',
                        height: '56px'
                    }}
                >
                    <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px' }}>
                        <polyline points="9 18 15 12 9 6" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <div style={{ marginBottom: '32px' }}>
                    <p style={{ color: '#fff', fontWeight: 600, fontSize: '16px', marginBottom: '4px' }}>Sagar Sah</p>
                    <span style={{ color: '#777', fontSize: '14px' }}>sagar.sah.design@gmail.com</span>
                </div>
                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                    <a
                        href="https://www.linkedin.com/in/sagar-shah-389980319/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            textDecoration: 'none',
                            color: '#ccc',
                            fontSize: '14px',
                            transition: 'color 0.2s'
                        }}
                    >
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '13px',
                            fontWeight: 700,
                            background: '#0077b5',
                            color: '#fff'
                        }}>
                            in
                        </div>
                        LinkedIn
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default ResumePage;
