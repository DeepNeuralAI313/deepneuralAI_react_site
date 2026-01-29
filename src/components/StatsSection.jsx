import React from 'react';

const StatItem = ({ number, label }) => (
    <div className="card-hover" style={{
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--bg-card)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    }}>
        <h3 style={{
            fontSize: '3rem',
            fontWeight: '800',
            margin: 0,
            background: 'var(--gradient-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
            lineHeight: 1.2
        }}>
            {number}
        </h3>
        <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{label}</p>
    </div>
);

const StatsSection = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="grid grid-cols-3" style={{ maxWidth: '900px', margin: '0 auto', gap: '4rem' }}>
                    <StatItem number="157+" label="Happy Clients" />
                    <StatItem number="14+" label="Years Experience" />
                    <StatItem number="146+" label="Projects Done" />
                </div>
            </div>
        </section>
    );
};
// C:\Users\Win\.gemini\antigravity\brain\5c17075d-2190-4bb8-a5cd-7a037f9de378\dna_tech_visualization_1766147266955.png
export default StatsSection;
