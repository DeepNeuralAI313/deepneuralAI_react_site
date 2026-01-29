import React, { useEffect } from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container section">
            <SEO
                title="AI Services | DeepNeural AI - Custom AI Development & Consulting"
                description="Our comprehensive AI services include Custom AI Solutions, Computer Vision, NLP, Predictive Analytics, Deep Learning, and AI Integration. Transform your business with cutting-edge artificial intelligence."
                canonical="/services"
                keywords="AI services, custom AI development, AI consulting, computer vision services, NLP solutions, natural language processing, predictive analytics, deep learning, AI integration, machine learning services"
            />
            <AnimatedSection>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{
                        color: 'var(--accent-blue)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.9rem'
                    }}>
                        What We Do
                    </span>
                    <h1 style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Our Expertise</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Comprehensive AI solutions designed to transform your business operations and drive growth.
                    </p>
                </div>
            </AnimatedSection>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {services.map((service, index) => (
                    <AnimatedSection key={service.id} delay={index * 0.1}>
                        <ServiceCard service={service} />
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default Services;
