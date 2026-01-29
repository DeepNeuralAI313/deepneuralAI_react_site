import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ demoTitle }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: demoTitle ? `I'm interested in the ${demoTitle} solution.` : ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `New Inquiry from ${formData.name}${demoTitle ? ` regarding ${demoTitle}` : ''}`
        };

        emailjs.send(
            'service_pyilvrt',
            'template_yk3lry7',
            templateParams,
            'nfndp5KfNwVKut0W7'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, (err) => {
                console.log('FAILED...', err);
                setStatus('error');
            });
    };

    return (
        <div style={{
            background: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Start a Conversation</h3>

            {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#10b981' }}>
                    <h4>Message Sent!</h4>
                    <p>We'll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')} className="btn btn-secondary" style={{ marginTop: '1rem' }}>Send Another</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                        <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                        <textarea
                            rows="4"
                            required
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                resize: 'vertical'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                        />
                    </div>

                    {status === 'error' && (
                        <div style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.9rem' }}>
                            Failed to send message. Please try again later.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn btn-primary"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            opacity: status === 'submitting' ? 0.7 : 1
                        }}
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
