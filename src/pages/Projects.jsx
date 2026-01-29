import React, { useEffect } from 'react';
import { demos } from '../data/demos';
import FeatureCard from '../components/FeatureCard';
import AnimatedSection from '../components/AnimatedSection';

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container section">
            <AnimatedSection>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1>Featured Projects</h1>
                    <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        Explore our successful implementations and case studies across various industries.
                    </p>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-3">
                {demos.map((demo, index) => (
                    <AnimatedSection key={demo.id} delay={index * 0.1}>
                        <FeatureCard demo={demo} index={index} />
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default Projects;
