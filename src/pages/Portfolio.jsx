import React, { useEffect } from 'react';
import { demos } from '../data/demos';
import FeatureCard from '../components/FeatureCard';
import AnimatedSection from '../components/AnimatedSection';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = React.useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filters = ["All", "RAG System", "Computer Vision", "NLP", "Deep Learning", "Gen AI"];

    const filteredDemos = activeFilter === 'All'
        ? demos
        : demos.filter(demo => demo.categories && demo.categories.includes(activeFilter));

    useEffect(() => {
        // Wait for DOM update then refresh ScrollTrigger
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
        return () => clearTimeout(timer);
    }, [activeFilter]);

    return (
        <div className="container section">
            <SEO
                title="AI Portfolio | DeepNeural AI - Projects & Case Studies"
                description="Explore our portfolio of successful AI projects including RAG systems, Computer Vision, NLP, Generative AI, and Deep Learning applications across various industries."
                canonical="/portfolio"
                keywords="AI portfolio, AI projects, case studies, RAG systems, computer vision projects, NLP applications, generative AI, deep learning projects, AI implementations, AI success stories"
            />
            <AnimatedSection>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1>Our Portfolio</h1>
                    <p style={{ maxWidth: '600px', margin: '1rem auto 2rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        Explore our successful implementations and case studies across various industries.
                        Discover how our AI technologies are changing the landscape of architecture, legal, e-commerce, and more.
                    </p>

                    {/* Filter Buttons */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '50px',
                                    border: '1px solid var(--border-color)',
                                    backgroundColor: activeFilter === filter ? 'var(--accent-blue)' : 'var(--bg-card)',
                                    color: activeFilter === filter ? 'white' : 'var(--text-primary)',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: activeFilter === filter ? '0 4px 12px rgba(37, 99, 235, 0.3)' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeFilter !== filter) {
                                        e.target.style.backgroundColor = 'var(--bg-secondary)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeFilter !== filter) {
                                        e.target.style.backgroundColor = 'var(--bg-card)';
                                    }
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-3">
                {filteredDemos.map((demo, index) => (
                    <AnimatedSection key={demo.id} delay={index * 0.1}>
                        <FeatureCard demo={demo} index={index} />
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
