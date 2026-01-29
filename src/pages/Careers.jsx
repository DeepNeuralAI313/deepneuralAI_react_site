import React, { useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container section">
            <SEO
                title="Careers | DeepNeural AI - Join Our AI Team"
                description="Join the DeepNeural AI team and help build the future of artificial intelligence. Work with leading AI researchers and engineers on cutting-edge AI projects."
                canonical="/careers"
                keywords="AI careers, machine learning jobs, AI engineer jobs, AI researcher positions, deep learning careers, join AI team, artificial intelligence jobs"
            />
            <AnimatedSection>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1>Join Our Team</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Build the future of AI with us.</p>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <div style={{
                    background: 'var(--bg-card)',
                    padding: '4rem',
                    borderRadius: '24px',
                    textAlign: 'center',
                    border: '1px solid var(--border-color)',
                    boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)'
                }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>No Openings Currently</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        We are not actively hiring at the moment, but we are always looking for exceptional talent.
                        Feel free to send your resume for future consideration.
                    </p>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default Careers;
