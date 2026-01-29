import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div style={{
            background: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            position: 'relative'
        }}>
            <Quote
                size={40}
                color="var(--accent-purple)"
                style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: 0.2 }}
            />

            <p style={{
                fontStyle: 'italic',
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: '1.6',
                color: 'var(--text-primary)'
            }}>
                "{testimonial.content}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    color: 'white'
                }}>
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>{testimonial.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {testimonial.role}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
