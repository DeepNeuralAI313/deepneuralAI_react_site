import React, { useEffect } from 'react';
import StatsSection from '../components/StatsSection';
import AnimatedSection from '../components/AnimatedSection';
import { Target, Users, ShieldCheck, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title="About Us | DeepNeural AI - Pioneering AI Innovation"
                description="Learn about DeepNeural AI, our mission to democratize artificial intelligence, and our team of AI researchers and engineers dedicated to transforming businesses."
                canonical="/about"
                keywords="about DeepNeural AI, AI research team, AI engineers, artificial intelligence company, AI innovation, machine learning experts, AI consulting team"
            />
            <section className="section container" style={{ paddingBottom: 0 }}>
                <AnimatedSection style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexDirection: 'column', textAlign: 'center' }}>
                    <div>
                        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Making Businesses <span className="text-gradient">Smarter</span></h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.3rem', color: 'var(--text-secondary)' }}>
                            We are a team of AI researchers, engineers, and strategists dedicated to bringing the power of Artificial Intelligence to enterprises around the globe.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            <StatsSection />

            <section className="section container">
                <AnimatedSection>
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Choose Us</h2>
                    <div className="grid grid-cols-3">
                        {[
                            { icon: Target, color: 'var(--accent-blue)', title: "Award Winning", desc: "Recognized for excellence in AI innovation and implementation quality standards." },
                            { icon: Users, color: 'var(--accent-purple)', title: "Professional Staff", desc: "A dedicated team of Ph.D. researchers and senior engineers with deep domain expertise." },
                            { icon: ShieldCheck, color: 'var(--accent-cyan)', title: "Fair Prices", desc: "Enterprise-grade solutions at competitive rates with transparent pricing models." },
                            { icon: Heart, color: '#f43f5e', title: "24/7 Support", desc: "Round-the-clock technical support to ensure your critical systems are always running." }
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 0.1} className="card-hover" style={{ padding: '2.5rem', background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}>
                                <item.icon size={40} color={item.color} style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    {item.desc}
                                </p>
                            </AnimatedSection>
                        ))}
                    </div>
                </AnimatedSection>
            </section>
        </>
    );
};

export default About;
