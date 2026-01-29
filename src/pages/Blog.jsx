import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                // Fetch the index.json from GCP
                const indexResponse = await fetch('https://storage.googleapis.com/ai-blog-images-unique-2025/deep_web_blog/index.json');
                if (!indexResponse.ok) {
                    throw new Error('Failed to fetch blog index');
                }
                const indexData = await indexResponse.json();

                // Fetch all blog JSONs
                const blogPromises = indexData.blogs.map(async (blogPath) => {
                    const blogUrl = `https://storage.googleapis.com/ai-blog-images-unique-2025/${blogPath}`;
                    const response = await fetch(blogUrl);
                    if (!response.ok) {
                        console.error(`Failed to fetch blog: ${blogPath}`);
                        return null;
                    }
                    return response.json();
                });

                const blogResults = await Promise.all(blogPromises);
                const validBlogs = blogResults.filter(blog => blog !== null);
                setBlogs(validBlogs);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <>
                <SEO
                    title="AI Blog | DeepNeural AI - Insights & Tutorials"
                    description="Explore the latest insights, tutorials, and articles on AI, machine learning, computer vision, NLP, and deep learning from DeepNeural AI experts."
                    canonical="/blog"
                    keywords="AI blog, machine learning tutorials, AI insights, deep learning articles, computer vision blog, NLP tutorials, AI trends, artificial intelligence news"
                />
                <div className="section container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            border: '4px solid var(--border-color)',
                            borderTopColor: 'var(--accent-blue)',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            margin: '0 auto 1rem'
                        }}></div>
                        <p style={{ color: 'var(--text-secondary)' }}>Loading blogs...</p>
                    </div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <SEO
                    title="AI Blog | DeepNeural AI - Insights & Tutorials"
                    description="Explore the latest insights, tutorials, and articles on AI, machine learning, computer vision, NLP, and deep learning from DeepNeural AI experts."
                    canonical="/blog"
                    keywords="AI blog, machine learning tutorials, AI insights, deep learning articles, computer vision blog, NLP tutorials, AI trends, artificial intelligence news"
                />
                <div className="section container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Oops! Something went wrong</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>{error}</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <SEO
                title="AI Blog | DeepNeural AI - Insights & Tutorials"
                description="Explore the latest insights, tutorials, and articles on AI, machine learning, computer vision, NLP, and deep learning from DeepNeural AI experts."
                canonical="/blog"
                keywords="AI blog, machine learning tutorials, AI insights, deep learning articles, computer vision blog, NLP tutorials, AI trends, artificial intelligence news"
            />

            {/* Hero Section */}
            <section style={{
                background: 'var(--gradient-main)',
                padding: '6rem 0 4rem',
                marginBottom: '4rem'
            }}>
                <div className="container">
                    <AnimatedSection>
                        <h1 style={{
                            textAlign: 'center',
                            marginBottom: '1rem',
                            fontSize: '3.5rem'
                        }}>
                            AI Insights & <span className="text-gradient">Innovation</span>
                        </h1>
                        <p style={{
                            textAlign: 'center',
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            Discover the latest trends, techniques, and breakthroughs in artificial intelligence, machine learning, and computer vision.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section container">
                <AnimatedSection>
                    <div className="grid grid-cols-3">
                        {blogs.map((blog, index) => (
                            <BlogCard key={blog.id || blog.SEO?.blog_id} blog={blog} index={index} />
                        ))}
                    </div>
                </AnimatedSection>

                {blogs.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                            No blog posts available at the moment. Check back soon!
                        </p>
                    </div>
                )}
            </section>

            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </>
    );
};

const BlogCard = ({ blog, index }) => {
    const seo = blog.SEO || {};
    const slug = seo.slug || seo.blog_id || blog.id;
    const title = seo.title || 'Untitled Blog Post';
    const description = seo.meta_description || '';
    const image = seo.image || seo.og?.image || '';
    const category = seo.category || 'AI';
    const date = seo.date || '';
    const readTime = seo.readTime || '5 min read';
    const tags = seo.tags || [];

    return (
        <AnimatedSection delay={index * 0.1}>
            <Link to={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
                <article
                    className="card-hover"
                    style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {/* Blog Image */}
                    {image && (
                        <div style={{
                            width: '100%',
                            height: '220px',
                            overflow: 'hidden',
                            background: 'var(--bg-secondary)'
                        }}>
                            <img
                                src={image}
                                alt={title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    )}

                    {/* Blog Content */}
                    <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Category Badge */}
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.4rem 1rem',
                                background: 'rgba(236, 72, 153, 0.1)',
                                color: 'var(--accent-blue)',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                textTransform: 'capitalize'
                            }}>
                                <Tag size={14} />
                                {category}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontSize: '1.4rem',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '0.8rem',
                            lineHeight: '1.4',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {title}
                        </h3>

                        {/* Description */}
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.95rem',
                            marginBottom: '1.5rem',
                            flexGrow: 1,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {description}
                        </p>

                        {/* Tags */}
                        {tags.length > 0 && (
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                                marginBottom: '1rem'
                            }}>
                                {tags.slice(0, 3).map((tag, i) => (
                                    <span key={i} style={{
                                        padding: '0.25rem 0.75rem',
                                        background: 'var(--bg-secondary)',
                                        color: 'var(--text-secondary)',
                                        borderRadius: '12px',
                                        fontSize: '0.8rem'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Meta Info */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '1rem',
                            borderTop: '1px solid var(--border-color)',
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={14} />
                                <span>{date}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={14} />
                                <span>{readTime}</span>
                            </div>
                        </div>

                        {/* Read More */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--accent-blue)',
                            fontWeight: '600',
                            marginTop: '1rem'
                        }}>
                            Read More <ArrowRight size={16} />
                        </div>
                    </div>
                </article>
            </Link>
        </AnimatedSection>
    );
};

export default Blog;
