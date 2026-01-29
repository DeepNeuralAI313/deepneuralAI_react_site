import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Youtube, Facebook, Instagram } from 'lucide-react';
import '../styles/main.css';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            paddingTop: '3rem'
        }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Column 1: Brand */}
                    <div>
                        <Link to="/" style={{ display: 'inline-block', marginBottom: '1.5rem', textDecoration: 'none' }}>
                            <h1 style={{ fontSize: '2rem', margin: 0, color: 'var(--text-primary)' }}>
                                DeepNeural<span style={{ color: 'var(--accent-blue)' }}>.</span>AI
                            </h1>
                        </Link>
                        <p style={{ lineHeight: '1.6', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                            We harness the latest advancements in AI and Deep Learning to craft solutions designed to tackle the complex challenges and bring exceptional innovations!
                        </p>
                    </div>

                    {/* Column 2: Get In Touch */}
                    <div>
                        <h5 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Get In Touch</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                            <p style={{ display: 'flex', gap: '10px', alignItems: 'start', margin: 0 }}>
                                <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--accent-blue)' }} />
                                T58, Almukam Complex, Vishala Circle, near APMC Market, Gujarat 380055
                            </p>
                            <p style={{ display: 'flex', gap: '10px', alignItems: 'center', margin: 0 }}>
                                <Phone size={18} style={{ color: 'var(--accent-blue)' }} /> +91 990334 45475
                            </p>
                            <p style={{ display: 'flex', gap: '10px', alignItems: 'center', margin: 0 }}>
                                <Mail size={18} style={{ color: 'var(--accent-blue)' }} /> info@deepneuralai.in
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem' }}>

                            <SocialIcon Icon={Youtube} link="https://www.youtube.com/channel/UCY2RiJ3IHxkf_AW2DLrHmaA" />

                            <SocialIcon Icon={Linkedin} link="https://www.linkedin.com/company/deepneuralai/" />
                        </div>
                    </div>

                    {/* Column 3: Popular Link */}
                    <div>
                        <h5 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Popular Link</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/contact">Contact Us</FooterLink>
                            <FooterLink to="/careers">Career</FooterLink>
                            <FooterLink to="/services">Services</FooterLink>
                            <FooterLink to="/portfolio">Portfolio</FooterLink>
                        </div>
                    </div>

                    {/* Column 4: Our Services */}
                    <div>
                        <h5 style={{ color: 'black', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Our Services</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <FooterLink to="/services">AI STRATEGY CONSULTING</FooterLink>
                            <FooterLink to="/services">NLP SOLUTIONS</FooterLink>
                            <FooterLink to="/services">DATA SCIENCE</FooterLink>
                            <FooterLink to="/services">GENERATIVE AI & GANS</FooterLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 0', marginTop: '2rem' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>
                        &copy; <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>DeepNeural.AI</Link>, All Right Reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
                        <Link to="/" style={{ color: 'black' }}>Home</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper Components
const SocialIcon = ({ Icon, link }) => (
    <a
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            width: '35px',
            height: '35px',
            border: '1px solid var(--border-color)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-blue)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--accent-blue)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
    >
        <Icon size={16} />
    </a>
);

const FooterLink = ({ to, children }) => (
    <Link to={to} style={{
        color: 'var(--text-secondary)',
        transition: '0.3s',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    }}
        onMouseEnter={(e) => { e.target.style.color = 'var(--text-primary)'; e.target.style.transform = 'translateX(5px)'; }}
        onMouseLeave={(e) => { e.target.style.color = 'var(--text-secondary)'; e.target.style.transform = 'translateX(0)'; }}
    >
        <span style={{ fontSize: '1.2rem' }}>›</span> {children}
    </Link>
);

export default Footer;
