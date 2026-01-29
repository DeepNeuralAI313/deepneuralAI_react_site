import React, { useEffect } from 'react';
import { demos } from '../data/demos';
import FeatureCard from '../components/FeatureCard';

const Demos = () => {
    const [activeFilter, setActiveFilter] = React.useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filters = ["All", "RAG System", "Computer Vision", "NLP", "Deep Learning", "Gen AI"];

    const filteredDemos = activeFilter === 'All'
        ? demos
        : demos.filter(demo => demo.categories && demo.categories.includes(activeFilter));

    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1>Our Portfolio</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Discover how our AI technologies are changing the landscape of business through intelligent automation.
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

            <div className="grid grid-cols-3">
                {filteredDemos.map((demo, index) => (
                    <FeatureCard key={demo.id} demo={demo} index={index} />
                ))}
            </div>

            {filteredDemos.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
                    <p>No projects found for this category.</p>
                </div>
            )}
        </div>
    );
};

export default Demos;
