import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, ArrowRight } from 'lucide-react';

const FeatureCard = ({ demo, index }) => {
    // Extract thumbnail from YouTube URL
    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    const videoId = demo.videoId || demo.youtubeUrl.split('v=')[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div className="feature-card" style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                    src={thumbnailUrl}
                    alt={demo.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                    }}
                    className="card-image"
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                }} className="play-overlay">
                    <PlayCircle size={48} color="white" fill="rgba(0,0,0,0.5)" />
                </div>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{
                    color: 'var(--accent-blue)',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    {demo.category || 'AI Demo'}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{demo.title}</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                    {demo.description}
                </p>

                <Link to={`/demos/${demo.title.replace(/\s+/g, '-')}`} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--accent-blue)',
                    fontWeight: '600',
                    marginTop: 'auto'
                }}>
                    View Details <ArrowRight size={16} />
                </Link>
            </div>

            <style>{`
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: var(--accent-blue);
        }
        .feature-card:hover .card-image {
          transform: scale(1.05);
        }
        .feature-card:hover .play-overlay {
          opacity: 1;
        }
      `}</style>
        </div>
    );
};

export default FeatureCard;
