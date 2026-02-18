import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/splinetest/', '/api/'],
            },
        ],
        sitemap: 'https://quantumflowautomation.ai/sitemap.xml',
        host: 'https://quantumflowautomation.ai',
    }
}
