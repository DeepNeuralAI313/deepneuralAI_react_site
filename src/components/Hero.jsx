import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Bot, Zap, Globe } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const btnRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Animate Header Words
            tl.fromTo(".hero-word",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" }
            )
                .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
                .fromTo(btnRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 }, "-=0.4")
                .fromTo(statsRef.current?.children || [],
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
                    "-=0.3"
                );
        }, heroRef);

        return () => {
            ctx.revert(); // Clean up all GSAP animations
        };
    }, []);

    const titleLine1 = "We Enable AI Transformation".split(" ");

    return (
        <section ref={heroRef} className="section container" style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: 'var(--nav-height)',
            backgroundColor: 'var(--bg-primary)' // Ensure white background
        }}>
            {/* Background elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.05) 0%, transparent 60%)',
                zIndex: -1
            }} />

            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', maxWidth: '1200px' }}>
                <h1 ref={titleRef} style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    <div style={{ overflow: 'hidden', display: 'flex', gap: '0.4em', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {titleLine1.map((word, i) => (
                            <span key={i} className={`hero-word ${word === 'Transformation' ? 'text-gradient' : ''}`} style={{ display: 'inline-block' }}>{word}</span>
                        ))}
                    </div>
                    <div style={{ overflow: 'hidden', display: 'flex', gap: '0.3em', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <span className="text-gradient hero-word" style={{ display: 'inline-block' }}>For Individuals And Organizations</span>
                    </div>
                </h1>

                <p ref={subRef} style={{ fontSize: '1.25rem', maxWidth: '700px' }}>
                    DeepNeuralAI delivers cutting-edge solutions in Computer Vision, NLP, and Generative AI.
                    Transform your business with our enterprise-grade AI technologies.
                </p>

                <div ref={btnRef} style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <Link to="/portfolio" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        View Demos <ArrowRight size={20} />
                    </Link>
                    <a href="#contact" className="btn btn-secondary">Get in Touch</a>
                </div>

                {/* Quick Stats / Icons */}
                <div ref={statsRef} style={{
                    display: 'flex',
                    gap: '3rem',
                    marginTop: '3rem',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '2rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Bot color="var(--accent-cyan)" size={32} />
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Smart Agents</h4>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Automated workflows</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Zap color="var(--accent-purple)" size={32} />
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Real-time</h4>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Low latency processing</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Globe color="var(--accent-blue)" size={32} />
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Global Scale</h4>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Enterprise ready</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
