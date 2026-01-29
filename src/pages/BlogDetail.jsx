import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Calendar, Clock, Tag, ArrowLeft, Share2, User } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);

                // First, fetch the index to find the blog
                const indexResponse = await fetch('https://storage.googleapis.com/ai-blog-images-unique-2025/deep_web_blog/index.json');
                if (!indexResponse.ok) {
                    throw new Error('Failed to fetch blog index');
                }
                const indexData = await indexResponse.json();

                // Find the blog that matches the slug
                let foundBlog = null;
                for (const blogPath of indexData.blogs) {
                    const blogUrl = `https://storage.googleapis.com/ai-blog-images-unique-2025/${blogPath}`;
                    const response = await fetch(blogUrl);
                    if (response.ok) {
                        const blogData = await response.json();
                        if (blogData.SEO?.slug === slug || blogData.SEO?.blog_id === slug || blogData.id === slug) {
                            foundBlog = blogData;
                            break;
                        }
                    }
                }

                if (!foundBlog) {
                    throw new Error('Blog post not found');
                }

                setBlog(foundBlog);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching blog:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    // Handle smooth scrolling for table of contents links
    useEffect(() => {
        const handleTocClick = (e) => {
            // Check if the clicked element is a TOC link
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                e.preventDefault();
                const id = target.getAttribute('href').substring(1);
                const element = document.getElementById(id);

                if (element) {
                    // Calculate offset for navbar
                    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80;
                    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementTop - navHeight - 20; // 20px extra padding

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        // Add event listener to document for TOC clicks
        document.addEventListener('click', handleTocClick);

        return () => {
            document.removeEventListener('click', handleTocClick);
        };
    }, []);

    if (loading) {
        return (
            <div className="section container" style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    <p style={{ color: 'var(--text-secondary)' }}>Loading blog post...</p>
                </div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="section container" style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Blog Post Not Found</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{error || 'The blog post you are looking for does not exist.'}</p>
                    <Link to="/blog" className="btn btn-primary">
                        <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const seo = blog.SEO || {};
    const title = seo.title || 'Blog Post';
    const metaTitle = seo.meta_title || title;
    const metaDescription = seo.meta_description || '';
    const image = seo.image || seo.og?.image || '';
    const category = seo.category || 'AI';
    const date = seo.date || '';
    const readTime = seo.readTime || '5 min read';
    const tags = seo.tags || [];
    const keywords = tags.join(', ') || 'AI, machine learning, deep learning';
    const publishedTime = date ? new Date(date).toISOString() : null;
    const modifiedTime = seo.last_updated ? new Date(seo.last_updated).toISOString() : null;

    // Structured data for blog article
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": metaDescription,
        "image": image,
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "author": {
            "@type": "Organization",
            "name": "DeepNeural AI"
        },
        "publisher": {
            "@type": "Organization",
            "name": "DeepNeural AI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://deepneuralai.in/Logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://deepneuralai.in/blog/${slug}`
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: metaDescription,
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

    return (
        <>
            <SEO
                title={metaTitle}
                description={metaDescription}
                canonical={`/blog/${slug}`}
                type="article"
                image={image}
                keywords={keywords}
                publishedTime={publishedTime}
                modifiedTime={modifiedTime}
                structuredData={articleSchema}
            />

            <article>
                {/* Back Button */}
                <div className="container" style={{ paddingTop: '2rem' }}>
                    <Link
                        to="/blog"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--accent-blue)',
                            fontWeight: '600',
                            transition: 'gap 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'}
                        onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                    >
                        <ArrowLeft size={20} />
                        Back to Blog
                    </Link>
                </div>

                {/* Blog Header */}
                <div className="container" style={{
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                    maxWidth: '900px'
                }}>
                    <AnimatedSection>
                        {/* Category Badge */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1.2rem',
                                background: 'rgba(236, 72, 153, 0.1)',
                                color: 'var(--accent-blue)',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                textTransform: 'capitalize'
                            }}>
                                <Tag size={16} />
                                {category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 style={{
                            fontSize: '3rem',
                            fontWeight: '800',
                            lineHeight: '1.2',
                            marginBottom: '1.5rem',
                            color: 'var(--text-primary)'
                        }}>
                            {title}
                        </h1>

                        {/* Meta Info */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                            flexWrap: 'wrap',
                            marginBottom: '2rem',
                            paddingBottom: '2rem',
                            borderBottom: '1px solid var(--border-color)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <Calendar size={18} />
                                <span>{date}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <User size={18} />
                                <span>deepneuralai.in</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <Clock size={18} />
                                <span>{readTime}</span>
                            </div>
                            <button
                                onClick={handleShare}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'var(--bg-secondary)',
                                    color: 'var(--accent-blue)',
                                    border: 'none',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease'
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
                                Share
                            </button>
                        </div>

                        {/* Tags */}
                        {tags.length > 0 && (
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.75rem',
                                marginBottom: '2rem'
                            }}>
                                {tags.map((tag, i) => (
                                    <span key={i} style={{
                                        padding: '0.4rem 1rem',
                                        background: 'var(--bg-secondary)',
                                        color: 'var(--text-secondary)',
                                        borderRadius: '16px',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </AnimatedSection>
                </div>

                {/* Blog Content with Table of Contents */}
                <div className="container" style={{ paddingBottom: '4rem' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 300px',
                        gap: '4rem',
                        alignItems: 'start'
                    }}
                        className="blog-layout"
                    >
                        {/* Main Content */}
                        <AnimatedSection delay={0.2}>
                            <div
                                style={{
                                    background: 'var(--bg-card)',
                                    padding: '3rem',
                                    borderRadius: '16px',
                                    border: '1px solid var(--border-color)'
                                }}
                                className="blog-content"
                                dangerouslySetInnerHTML={{ __html: blog.content_html }}
                            />
                        </AnimatedSection>

                        {/* Table of Contents - Sticky */}
                        <AnimatedSection delay={0.3}>
                            <div style={{
                                position: 'sticky',
                                top: 'calc(var(--nav-height) + 2rem)'
                            }}>
                                <div
                                    className="blog-toc"
                                    dangerouslySetInnerHTML={{ __html: blog.table_of_contents }}
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

                {/* Related Topics / Back Button */}
                <div className="container" style={{
                    paddingBottom: '4rem',
                    textAlign: 'center'
                }}>
                    <Link to="/blog" className="btn btn-primary">
                        <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} />
                        View All Blog Posts
                    </Link>
                </div>
            </article>

            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                /* Blog Content Styling */
                .blog-content h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    color: var(--text-primary);
                }
                
                .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 0.8rem;
                    color: var(--text-primary);
                }
                
                .blog-content p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                }
                
                .blog-content ul,
                .blog-content ol {
                    margin-bottom: 1.5rem;
                    padding-left: 2rem;
                    list-style: inherit;
                }
                
                .blog-content li {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--text-secondary);
                    margin-bottom: 0.5rem;
                }
                
                .blog-content a {
                    color: var(--accent-blue);
                    text-decoration: underline;
                    transition: opacity 0.3s ease;
                }
                
                .blog-content a:hover {
                    opacity: 0.8;
                }
                
                .blog-content img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 12px;
                    margin: 2rem 0;
                }
                
                .blog-content table {
                    width: 100%;
                    margin: 2rem 0;
                    border-collapse: collapse;
                }
                
                .blog-content table th,
                .blog-content table td {
                    padding: 1rem;
                    border: 1px solid var(--border-color);
                    text-align: left;
                }
                
                .blog-content table th {
                    background: var(--bg-secondary);
                    font-weight: 600;
                    color: var(--text-primary);
                }
                
                .blog-content mark {
                    background: rgba(236, 72, 153, 0.1);
                    padding: 0.2rem 0.4rem;
                    border-radius: 4px;
                }
                
                .blog-content code {
                    background: var(--bg-secondary);
                    padding: 0.2rem 0.6rem;
                    border-radius: 4px;
                    font-family: 'Courier New', monospace;
                    font-size: 0.95rem;
                }
                
                .blog-content pre {
                    background: var(--bg-secondary);
                    padding: 1.5rem;
                    border-radius: 8px;
                    overflow-x: auto;
                    margin: 1.5rem 0;
                }
                
                .blog-content pre code {
                    background: none;
                    padding: 0;
                }
                
                /* Table of Contents Styling */
                .blog-toc nav {
                    background: var(--bg-card) !important;
                    border: 1px solid var(--border-color) !important;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05) !important;
                }
                
                .blog-toc h2 {
                    font-size: 1.3rem !important;
                    color: var(--text-primary) !important;
                }
                
                .blog-toc a {
                    color: var(--text-secondary) !important;
                    transition: all 0.2s ease !important;
                    display: block;
                    padding: 0.4rem 0;
                }
                
                .blog-toc a:hover {
                    color: var(--accent-blue) !important;
                    padding-left: 0.5rem;
                }
                
                /* Responsive Layout */
                @media (max-width: 1024px) {
                    .blog-layout {
                        grid-template-columns: 1fr !important;
                    }
                    
                    .blog-toc {
                        position: relative !important;
                        top: 0 !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .blog-content {
                        padding: 2rem !important;
                    }
                    
                    .blog-content h2 {
                        font-size: 1.5rem !important;
                    }
                    
                    .blog-content h3 {
                        font-size: 1.2rem !important;
                    }
                }
            `}</style>
        </>
    );
};

export default BlogDetail;
