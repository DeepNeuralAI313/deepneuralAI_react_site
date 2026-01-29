import React from 'react';
import { Search, ShieldCheck, Database, Layers, Share2, Layout } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const industries = [
    { icon: Search, title: "Retail & E-Commerce", desc: "Visual Search, Recommendation Engines, Dynamic Pricing." },
    { icon: ShieldCheck, title: "Fintech & Finance", desc: "Fraud Detection, E-KYC, Predictive Risk Modeling." },
    { icon: Database, title: "Healthcare", desc: "Diagnostics, Pathology Analysis, Patient Risk Scores." },
    { icon: Layers, title: "Manufacturing", desc: "Predictive Maintenance, Defect Detection, Robotic Guidance." },
    { icon: Share2, title: "Social Media", desc: "Sentiment Analysis, Trend Forecasting, Engagement Insights." },
    { icon: Layout, title: "Architecture", desc: "2D to 3D Conversion, Generative Design." }
];

const HorizontalIndustries = () => {
    return (
        <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <AnimatedSection>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Industries We Empower</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Innovative solutions for every sector</p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
                    {industries.map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div className="card-hover" style={{
                                padding: '2.5rem',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                height: '100%'
                            }}>
                                <div style={{
                                    padding: '20px',
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '50%',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '80px',
                                    height: '80px'
                                }}>
                                    <item.icon size={36} color="var(--accent-cyan)" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HorizontalIndustries;
