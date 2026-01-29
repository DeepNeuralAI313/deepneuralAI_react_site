import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsSection from '../components/StatsSection';
import AnimatedSection from '../components/AnimatedSection';
import LifecycleSection from '../components/LifecycleSection';
import HorizontalIndustries from '../components/HorizontalIndustries';
import BrandMarquee from '../components/BrandMarquee';
import DNAAdvantage from '../components/DNAAdvantage';
import { demos } from '../data/demos';
import { testimonials } from '../data/testimonials';
import { ArrowRight, CheckCircle2, Cpu, Database, Share2, Layers, Search, Code, Layout, Globe, ShieldCheck } from 'lucide-react';

import SEO from '../components/SEO';

const Home = () => {
    // Show top 3 demos
    const featuredDemos = demos.slice(0, 3);

    // Structured data for organization
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DeepNeural AI",
        "url": "https://deepneuralai.in",
        "logo": "https://deepneuralai.in/Logo.png",
        "description": "DeepNeural AI specializes in custom AI solutions, computer vision, and NLP to transform your business operations and drive growth.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "T58, Almukam Complex, Vishala Circle, near APMC Market",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "postalCode": "380055",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXX-XXX-XXXX",
            "email": "info@deepneuralai.in",
            "contactType": "Customer Service"
        },
        "sameAs": [
            "https://www.linkedin.com/company/deepneural-ai",
            "https://twitter.com/DeepNeuralAI"
        ]
    };

    return (
        <>
            <SEO
                title="DeepNeural AI | Transforming Ideas into Intelligent Solutions"
                description="DeepNeural AI specializes in custom AI solutions, computer vision, and NLP to transform your business operations and drive growth."
                canonical="/"
                keywords="AI solutions, artificial intelligence, machine learning, deep learning, computer vision, NLP, natural language processing, AI consulting, custom AI development, neural networks, predictive analytics"
                structuredData={organizationSchema}
            />
            <Hero />

            {/* Brand Marquee */}
            <BrandMarquee />

            <StatsSection />

            {/* Mission & Vision Section */}
            <AnimatedSection className="section container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div className="card-hover" style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ padding: '12px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '12px' }}>
                                <Cpu size={32} color="var(--accent-blue)" />
                            </div>
                            <h2 style={{ margin: 0, fontSize: '2rem' }}>Our Mission</h2>
                        </div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            To democratize artificial intelligence by providing accessible, high-performance solutions that solve real-world business complexities with precision.
                        </p>
                    </div>
                    <div className="card-hover" style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ padding: '12px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '12px' }}>
                                <Globe size={32} color="var(--accent-purple)" />
                            </div>
                            <h2 style={{ margin: 0, fontSize: '2rem' }}>Our Vision</h2>
                        </div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            To be the world's most trusted partner in AI innovation, creating a seamless bridge between raw enterprise data and actionable intelligence.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* DNA Advantage Section */}
            <DNAAdvantage />

            {/* Featured Demos Section */}
            <AnimatedSection className="section container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <span style={{ color: 'var(--accent-blue)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Portfolio</span>
                        <h2 style={{ marginBottom: '0.5rem' }}>Latest Innovations</h2>
                    </div>
                    <Link to="/demos" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)', fontWeight: '700' }}>
                        View All Projects <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-3">
                    {featuredDemos.map((demo, index) => (
                        <AnimatedSection key={demo.id} delay={index * 0.2}>
                            <FeatureCard demo={demo} index={index} />
                        </AnimatedSection>
                    ))}
                </div>
            </AnimatedSection>

            {/* Industries Section - Horizontal Scroll */}
            <HorizontalIndustries />

            {/* Development Lifecycle */}
            <LifecycleSection />

            {/* Testimonials Section */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 0' }}>
                <AnimatedSection className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Trusted by Industry Leaders</h2>
                    <div className="grid grid-cols-3">
                        {testimonials.map((t, i) => (
                            <AnimatedSection key={t.id} delay={i * 0.2}>
                                <TestimonialCard testimonial={t} />
                            </AnimatedSection>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* Contact Section Anchor */}
            <AnimatedSection id="contact" className="section container" style={{ textAlign: 'center' }}>
                <div style={{
                    background: 'var(--gradient-main)',
                    padding: '4rem',
                    borderRadius: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.2)'
                }}>
                    <h2 style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>Ready to Transform Your Business?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.2rem' }}>
                        Book a consultation with our AI experts to discuss your specific needs and use cases.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                        Start Your Journey
                    </Link>
                </div>
            </AnimatedSection>
        </>
    );
};

const IndustryCard = ({ icon: Icon, title, desc, delay }) => (
    <AnimatedSection delay={delay} className="card-hover" style={{ padding: '2rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ padding: '15px', background: 'var(--bg-secondary)', borderRadius: '50%', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px' }}>
            <Icon size={32} color="var(--accent-cyan)" />
        </div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{desc}</p>
    </AnimatedSection>
);

export default Home;
