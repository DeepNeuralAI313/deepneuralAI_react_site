import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Database, Code, Cpu, Rocket, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LifecycleSection = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);

    const steps = [
        {
            icon: Search,
            title: "1. Analysis & Strategy",
            desc: "We begin by deeply understanding your business goals, auditing your existing data infrastructure, and defining clear KPIs. This ensures our AI solution is perfectly aligned with your strategic objectives."
        },
        {
            icon: Database,
            title: "2. Data Engineering",
            desc: "High-quality AI requires high-quality data. We build robust pipelines for data collection, cleaning, and augmentation, ensuring a pristine foundation for model training."
        },
        {
            icon: Code,
            title: "3. Model Prototyping",
            desc: "We don't guess; we experiment. Our team rapidly prototypes various architectures to identify the most promising models, balancing accuracy with computational efficiency."
        },
        {
            icon: Cpu,
            title: "4. Training & Optimization",
            desc: "Using state-of-the-art GPUs, we train selected models with rigorous cross-validation. We perform hyperparameter tuning to squeeze out maximum performance and ensure generalization."
        },
        {
            icon: Rocket,
            title: "5. Deployment & Integration",
            desc: "We deploy models as scalable APIs using containerization (Docker/Kubernetes). We ensure seamless integration into your existing software ecosystem with minimal latency."
        },
        {
            icon: Activity,
            title: "6. Monitoring & MLOps",
            desc: "AI isn't 'set and forget'. We implement continuous monitoring, automated drift detection, and retraining pipelines to ensure your model maintains peak performance over time."
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const line = lineRef.current;
            const stepElements = document.querySelectorAll('.lifecycle-step');

            // 1. Animate the central line drawing down
            gsap.fromTo(line,
                { height: '0%' },
                {
                    height: '100%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        end: 'bottom 80%',
                        scrub: 1,
                    }
                }
            );

            // 2. Animate each step (Dot + Card)
            stepElements.forEach((step, index) => {
                const card = step.querySelector('.lifecycle-card');
                const dot = step.querySelector('.lifecycle-dot');
                const isLeft = index % 2 === 0;
                const xOffset = isLeft ? -100 : 100;

                // Animate Card (Slide in)
                gsap.fromTo(card,
                    { opacity: 0, x: xOffset },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 80%',
                            end: 'bottom 90%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );

                // Animate Dot (Scale up)
                gsap.fromTo(dot,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <section ref={sectionRef} className="section container" style={{ position: 'relative', overflow: 'hidden', padding: '5rem 20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '5rem', fontSize: '2.5rem' }}>Our Development Lifecycle</h2>

            {/* Central Timeline Line */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '180px',
                bottom: '100px',
                width: '4px',
                background: 'var(--bg-secondary)',
                transform: 'translateX(-50%)',
                zIndex: 0
            }}>
                <div ref={lineRef} style={{
                    width: '100%',
                    background: 'var(--gradient-text)',
                    height: '0%'
                }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', position: 'relative', zIndex: 1 }}>
                {steps.map((step, index) => (
                    <div key={index} className="lifecycle-step" style={{
                        display: 'flex',
                        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                        {/* Center Dot */}
                        <div className="lifecycle-dot" style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'white',
                            border: '4px solid var(--accent-blue)',
                            zIndex: 2,
                            boxShadow: '0 0 0 4px rgba(236, 72, 153, 0.2)'
                        }} />

                        {/* Card */}
                        <div className="lifecycle-card" style={{
                            width: '45%',
                            padding: '2rem',
                            background: 'var(--bg-card)',
                            borderRadius: '24px',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                display: 'inline-flex',
                                padding: '12px',
                                borderRadius: '12px',
                                background: 'rgba(236, 72, 153, 0.1)',
                                marginBottom: '1rem',
                                color: 'var(--accent-blue)'
                            }}>
                                <step.icon size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .lifecycle-step {
                        justify-content: flex-start !important;
                    }
                    .lifecycle-card {
                        width: 85% !important;
                        margin-left: 50px !important;
                    }
                    .section > div:nth-child(2) { /* The Line */
                        left: 20px !important;
                    }
                    .lifecycle-dot {
                        left: 20px !important;
                        right: auto !important;
                        transform: translate(-50%, -50%) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default LifecycleSection;
