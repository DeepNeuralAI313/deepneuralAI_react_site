import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ service }) => {
    const Icon = service.icon;

    return (
        <div className="service-card" style={{
            background: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            transition: 'all 0.3s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: 'rgba(59, 130, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
            }}>
                <Icon size={32} color="var(--accent-blue)" />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                {service.description}
            </p>

            <ul style={{ marginBottom: '2rem' }}>
                {service.features.map((feature, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <CheckCircle2 size={16} color="var(--accent-purple)" />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Placeholder for future detailed service page link */}
            {/* <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontWeight: '600', marginTop: 'auto', cursor: 'pointer' }}>
        Learn More <ArrowRight size={18} />
      </div> */}

            <style>{`
        .service-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-blue);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
        </div>
    );
};

export default ServiceCard;
