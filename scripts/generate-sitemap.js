import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://deepneuralai.in';
const OUT_FILE = path.join(__dirname, '../public/sitemap.xml');
const DEMOS_FILE = path.join(__dirname, '../src/data/demos.js');

const STATIC_ROUTES = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/blog',
    '/contact',
    '/careers'
];

// Helper to fetch JSON from URL
function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (err) => reject(err));
    });
}

// Helper: Escape XML special characters
function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

// Generate Sitemap
async function generateSitemap() {
    console.log('Starting sitemap generation...');

    const urls = [];
    const date = new Date().toISOString().split('T')[0];

    // 1. Add Static Routes
    STATIC_ROUTES.forEach(route => {
        urls.push({
            loc: `${DOMAIN}${route}`,
            lastmod: date,
            changefreq: 'monthly',
            priority: route === '/' ? '1.0' : '0.8'
        });
    });

    // 2. Add Demo Routes
    try {
        const demosContent = fs.readFileSync(DEMOS_FILE, 'utf8');
        // Simple regex to extract titles. Assumes: title: "Title Content" or title: 'Title Content'
        const titleRegex = /title:\s*(['"`])(.*?)\1/g;
        let match;
        let demoCount = 0;

        while ((match = titleRegex.exec(demosContent)) !== null) {
            const title = match[2];
            const slug = title.replace(/\s+/g, '-');
            urls.push({
                loc: `${DOMAIN}/demos/${escapeXml(slug)}`,
                lastmod: date,
                changefreq: 'weekly',
                priority: '0.9'
            });
            demoCount++;
        }
        console.log(`Found ${demoCount} demos.`);
    } catch (err) {
        console.error('Error processing demos:', err);
    }

    // 3. Add Blog Routes
    try {
        console.log('Fetching blog index...');
        const indexUrl = 'https://storage.googleapis.com/ai-blog-images-unique-2025/deep_web_blog/index.json';
        const indexData = await fetchJson(indexUrl);

        console.log(`Found ${indexData.blogs.length} blog entries. Fetching details...`);

        const blogPromises = indexData.blogs.map(async (blogPath) => {
            try {
                const blogUrl = `https://storage.googleapis.com/ai-blog-images-unique-2025/${blogPath}`;
                const blogData = await fetchJson(blogUrl);

                const seo = blogData.SEO || {};
                const slug = seo.slug || seo.blog_id || blogData.id;

                if (slug) {
                    return {
                        loc: `${DOMAIN}/blog/${escapeXml(slug)}`,
                        lastmod: seo.date ? new Date(seo.date).toISOString().split('T')[0] : date,
                        changefreq: 'weekly',
                        priority: '0.8'
                    };
                }
            } catch (e) {
                console.error(`Failed to fetch/parse blog ${blogPath}`, e.message);
            }
            return null;
        });

        const blogUrls = (await Promise.all(blogPromises)).filter(u => u !== null);
        urls.push(...blogUrls);
        console.log(`Added ${blogUrls.length} blog posts.`);

    } catch (err) {
        console.error('Error processing blogs:', err);
    }

    // 4. Build XML
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(OUT_FILE, sitemapContent);
    console.log(`Sitemap generated successfully at ${OUT_FILE}`);
}

generateSitemap();
