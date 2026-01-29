import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({ children, className = '', style = {}, delay = 0 }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        let scrollTriggerInstance;

        const ctx = gsap.context(() => {
            const animation = gsap.fromTo(el,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    delay: delay,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                        onEnter: (self) => { scrollTriggerInstance = self; }
                    }
                }
            );
        }, el);

        return () => {
            ctx.revert();
        };
    }, [delay]);

    return (
        <div ref={sectionRef} className={className} style={style}>
            {children}
        </div>
    );
};

export default AnimatedSection;
