import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { demos } from '../data/demos';
import ContactForm from '../components/ContactForm';
import { ArrowLeft, CheckCircle, Share2 } from 'lucide-react';
import SEO from '../components/SEO';

const DemoDetail = () => {
    const { slug } = useParams();
    const demo = demos.find(d => d.title.replace(/\s+/g, '-') === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!demo) return <Navigate to="/demos" replace />;

    const videoId = demo.videoId || demo.youtubeUrl.split('v=')[1];

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: demo.title,
                    text: demo.description,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    // Structured data for demo video
    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": demo.title,
        "description": demo.description,
        "thumbnailUrl": `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        "uploadDate": new Date().toISOString(),
        "contentUrl": demo.youtubeUrl,
        "embedUrl": `https://www.youtube.com/embed/${videoId}`,
        "publisher": {
            "@type": "Organization",
            "name": "DeepNeural AI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://deepneuralai.in/Logo.png"
            }
        }
    };

    return (
        <div className="container section">
            <SEO
                title={`${demo.title} | DeepNeural AI Portfolio`}
                description={demo.description.substring(0, 160)}
                canonical={`/demos/${slug}`}
                type="article"
                keywords={`${demo.category}, AI demo, ${demo.title}, artificial intelligence, machine learning demo`}
                image={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                structuredData={videoSchema}
            />
            <Link to="/demos" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                <ArrowLeft size={20} /> Back to Demos
            </Link>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        color: 'var(--accent-cyan)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.9rem'
                    }}>
                        {demo.category || 'AI Innovation'}
                    </span>
                    <h1 style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: '2.5rem' }}>{demo.title}</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{demo.description}</p>

                    <button
                        onClick={handleShare}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--bg-secondary)',
                            color: 'var(--accent-blue)',
                            border: 'none',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            margin: '0 auto'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--accent-blue)';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bg-secondary)';
                            e.currentTarget.style.color = 'var(--accent-blue)';
                        }}
                    >
                        <Share2 size={18} />
                        Share Demo
                    </button>
                </div>

                {/* Video Player - Always Visible */}
                <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%', /* 16:9 */
                    height: 0,
                    background: 'black',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '4rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                }}>
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                        title={demo.title}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 0
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* Content Section */}
                {demo.blogContent ? (
                    <div
                        dangerouslySetInnerHTML={{ __html: demo.blogContent }}
                        className="blog-content"
                    />
                ) : (
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Business Applications</h2>
                        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
                            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <CheckCircle color="var(--accent-blue)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem' }}>Efficiency</h4>
                                <p style={{ fontSize: '0.9rem' }}>Automate manual tasks and reduce processing time by up to 80%.</p>
                            </div>
                            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <CheckCircle color="var(--accent-purple)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem' }}>Scalability</h4>
                                <p style={{ fontSize: '0.9rem' }}>Handle thousands of requests simultaneously without degradation.</p>
                            </div>
                            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <CheckCircle color="var(--accent-cyan)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem' }}>Integration</h4>
                                <p style={{ fontSize: '0.9rem' }}>Seamlessly integrates with your existing workflows and APIs.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Form */}
                <div style={{ marginTop: '4rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Get Started with this Technology</h2>
                    <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        Interested in deploying {demo.title} for your business? Let's talk.
                    </p>
                    <ContactForm demoTitle={demo.title} />
                </div>
            </div>
        </div>
    );
};

export default DemoDetail;
