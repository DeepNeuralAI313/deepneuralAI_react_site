import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container section">
            <SEO
                title="Contact Us | DeepNeural AI - Get in Touch"
                description="Get in touch with DeepNeural AI for your artificial intelligence needs. Contact our AI experts to discuss how we can help transform your business with custom AI solutions."
                canonical="/contact"
                keywords="contact DeepNeural AI, AI consultation, get in touch, AI experts, AI inquiry, business transformation, AI solutions contact"
            />
            <AnimatedSection>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1>Get In Touch</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>We'd love to hear from you. Let us know how we can help.</p>
                </div>
            </AnimatedSection>

            <div className="contact-grid">
                {/* Contact Info */}
                <AnimatedSection style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    <div style={{ display: 'flex', gap: '1.5rem', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                        <div style={{
                            width: '50px', height: '50px', borderRadius: '12px', background: 'var(--bg-secondary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                            <MapPin color="var(--accent-blue)" />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Our Location</h4>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                T58, Almukam Complex, Vishala Circle, near APMC Market, Gujarat 380055
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                        <div style={{
                            width: '50px', height: '50px', borderRadius: '12px', background: 'var(--bg-secondary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                            <Mail color="var(--accent-purple)" />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email Us</h4>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                                info@deepneuralai.in
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                        <div style={{
                            width: '50px', height: '50px', borderRadius: '12px', background: 'var(--bg-secondary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                            <Phone color="var(--accent-cyan)" />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Call Us</h4>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                                +91 990334 45475
                            </p>
                        </div>
                    </div>

                </AnimatedSection>

                {/* Form */}
                <AnimatedSection delay={0.2} style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)' }}>
                    <ContactForm />
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Contact;
