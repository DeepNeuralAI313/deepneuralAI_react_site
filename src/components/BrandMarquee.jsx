import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BrandMarquee = () => {
    const marqueeRef = useRef(null);

    // Placeholder brands/logos text for now, could be images
    const brands = [
        "Google Cloud", "Microsoft Azure", "AWS", "NVIDIA", "OpenAI",
        "TensorFlow", "PyTorch", "Hugging Face", "Databricks", "Snowflake"
    ];

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const ctx = gsap.context(() => {
            gsap.to(marquee, {
                x: "-50%",
                duration: 20,
                ease: "none",
                repeat: -1
            });
        }, marquee);

        return () => {
            ctx.revert(); // Clean up animation
        };
    }, []);

    return (
        <section style={{
            padding: '2rem 0',
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-color)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                gap: '4rem',
                paddingLeft: '4rem' // Initial offset
            }}>
                <div ref={marqueeRef} style={{ display: 'flex', gap: '4rem' }}>
                    {/* duplicate list for seamless loop */}
                    {[...brands, ...brands, ...brands].map((brand, i) => (
                        <span key={i} style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            color: 'var(--text-secondary)',
                            opacity: 0.7,
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'default'
                        }}>
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandMarquee;
