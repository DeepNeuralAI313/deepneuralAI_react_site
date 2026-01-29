import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
    title, 
    description, 
    canonical, 
    type, 
    name, 
    image, 
    keywords,
    author,
    publishedTime,
    modifiedTime,
    structuredData 
}) => {
    const siteUrl = 'https://deepneuralai.in';
    const siteName = 'DeepNeural AI';
    const defaultImage = `${siteUrl}/og-image.png`; // Default OG image
    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const ogImage = image || defaultImage;

    // Default keywords if not provided
    const defaultKeywords = 'AI solutions, artificial intelligence, machine learning, deep learning, computer vision, NLP, natural language processing, AI consulting, AI development, neural networks';
    const metaKeywords = keywords || defaultKeywords;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name="description" content={description} data-testid="seo-description" />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content={author || siteName} />
            <link rel="canonical" href={fullCanonical} data-testid="seo-canonical" />

            {/* Open Graph / Facebook tags */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type || 'website'} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:locale" content="en_US" />
            
            {/* Article specific tags */}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {type === 'article' && (
                <meta property="article:author" content={author || siteName} />
            )}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content={type === 'article' ? 'summary_large_image' : 'summary_large_image'} />
            <meta name="twitter:site" content="@DeepNeuralAI" />
            <meta name="twitter:creator" content={name || '@DeepNeuralAI'} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content={title} />

            {/* Additional SEO tags */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            
            {/* Structured Data (JSON-LD) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    canonical: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.string,
    author: PropTypes.string,
    publishedTime: PropTypes.string,
    modifiedTime: PropTypes.string,
    structuredData: PropTypes.object
};

export default SEO;
