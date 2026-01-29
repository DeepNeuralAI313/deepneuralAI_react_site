import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CheckCircle2, Brain, Zap, Users } from 'lucide-react';
import dnaTechImg from '../assets/dna_tech_visualization_1766147266955.png';
import dnaHumanImg from '../assets/dna_human_ai_1766147283725.png';

const DNAAdvantage = () => {
    return (
        <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 0' }}>
            <div className="container">
                <AnimatedSection className="text-center" style={{ marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The DNA Advantage</h2>
                    <p className="text-gradient" style={{ fontWeight: '700', fontSize: '1.2rem', margin: 0 }}>
                        Why Leading Enterprises Choose DeepNeuralAI
                    </p>
                </AnimatedSection>

                {/* Top Row: Large Text + Image */}
                <div className="grid grid-cols-2" style={{ gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                    <AnimatedSection>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
                            Bridging the Gap Between <br />
                            <span className="text-gradient">Biological Intelligence</span> & <br />
                            <span style={{ color: 'var(--accent-blue)' }}>Digital Efficiency</span>
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Our proprietary "DNA" framework combines human-centric design with state-of-the-art machine learning operations. We don't just deliver code; we deliver adaptive systems that evolve with your business needs, ensuring long-term value and scalability.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'var(--bg-card)', padding: '10px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                    <Brain size={24} color="var(--accent-pink)" />
                                </div>
                                <span style={{ fontWeight: 600 }}>Adaptive Neural Networks</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'var(--bg-card)', padding: '10px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                    <Zap size={24} color="var(--accent-purple)" />
                                </div>
                                <span style={{ fontWeight: 600 }}>Real-time Inference Engines</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Image 1: Tech Visualization */}
                    <AnimatedSection delay={0.2}>
                        <div className="card-hover" style={{
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                            height: '400px'
                        }}>
                            <img
                                src={dnaTechImg}
                                alt="DNA Tech Visualization"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </AnimatedSection>
                </div>

                {/* Bottom Row: Image + Feature Grid */}
                <div className="grid grid-cols-2" style={{ gap: '2rem', alignItems: 'center' }}>
                    {/* Image 2: Human AI */}
                    <AnimatedSection delay={0.3} style={{ order: 1 }}> {/* Default order, mobile check handled by grid */}
                        <div className="card-hover" style={{
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                            height: '400px'
                        }}>
                            <img
                                src={dnaHumanImg}
                                alt="Human AI Collaboration"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </AnimatedSection>

                    {/* Feature Grid */}
                    <AnimatedSection delay={0.4} style={{ order: 2 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            {[
                                { title: "Expert Team", desc: "Ph.D. researchers & industry veterans.", icon: Users },
                                { title: "Rapid MVP", desc: "From concept to prototype in weeks.", icon: Zap },
                                { title: "Transparent", desc: "No hidden costs, full code ownership.", icon: CheckCircle2 },
                                { title: "Scalable", desc: "Built on cloud-native architecture.", icon: Brain }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-card)',
                                    padding: '1.5rem',
                                    borderRadius: '20px',
                                    border: '1px solid var(--border-color)',
                                }}>
                                    <item.icon size={24} color="var(--accent-blue)" style={{ marginBottom: '1rem' }} />
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .grid-cols-2 {
                        grid-template-columns: 1fr !important;
                    }
                    /* Ensure images are visible on mobile */
                    img {
                        max-height: 300px;
                    }
                }
            `}</style>
        </section>
    );
};

export default DNAAdvantage;
