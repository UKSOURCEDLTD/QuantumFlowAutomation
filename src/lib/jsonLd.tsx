import React from 'react';
import type { BlogPost } from './cms';

const BASE_URL = 'https://quantumflowautomation.ai';

/**
 * Renders a JSON-LD <script> tag for structured data.
 */
function JsonLd({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

/**
 * Organization schema — used site-wide.
 */
export function OrganizationSchema() {
    return (
        <JsonLd
            data={{
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Quantum Flow Automation',
                url: BASE_URL,
                logo: `${BASE_URL}/favicon.ico`,
                description:
                    'AI-first agency that builds workflow automation, digital employees, and AI-powered websites for UK businesses.',
                email: 'info@quantumflowautomation.ai',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Burnley',
                    addressRegion: 'Lancashire',
                    addressCountry: 'GB',
                },
                sameAs: [],
                foundingDate: '2025',
                founder: {
                    '@type': 'Person',
                    name: 'Luke Needham',
                },
            }}
        />
    );
}

/**
 * WebPage schema — used on standard pages.
 */
export function WebPageSchema({
    title,
    description,
    url,
}: {
    title: string;
    description: string;
    url: string;
}) {
    return (
        <JsonLd
            data={{
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: title,
                description,
                url: `${BASE_URL}${url}`,
                isPartOf: {
                    '@type': 'WebSite',
                    name: 'Quantum Flow Automation',
                    url: BASE_URL,
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Quantum Flow Automation',
                },
            }}
        />
    );
}

/**
 * Article schema — used on blog posts.
 */
export function ArticleSchema({ post }: { post: BlogPost }) {
    return (
        <JsonLd
            data={{
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: post.title,
                description: post.excerpt,
                image: post.image,
                datePublished: post.date,
                dateModified: post.date,
                url: `${BASE_URL}/blog/${post.slug}`,
                author: {
                    '@type': 'Person',
                    name: post.author || 'Luke Needham',
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Quantum Flow Automation',
                    logo: {
                        '@type': 'ImageObject',
                        url: `${BASE_URL}/favicon.ico`,
                    },
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `${BASE_URL}/blog/${post.slug}`,
                },
            }}
        />
    );
}

/**
 * BreadcrumbList schema — used on blog posts and sub-pages.
 */
export function BreadcrumbSchema({
    items,
}: {
    items: { name: string; url: string }[];
}) {
    return (
        <JsonLd
            data={{
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: items.map((item, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: item.name,
                    item: `${BASE_URL}${item.url}`,
                })),
            }}
        />
    );
}

/**
 * FAQ schema — for pages with Q&A content.
 */
export function FAQSchema({
    questions,
}: {
    questions: { question: string; answer: string }[];
}) {
    return (
        <JsonLd
            data={{
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: questions.map((q) => ({
                    '@type': 'Question',
                    name: q.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: q.answer,
                    },
                })),
            }}
        />
    );
}

/**
 * LocalBusiness schema — for the contact page.
 */
export function LocalBusinessSchema() {
    return (
        <JsonLd
            data={{
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: 'Quantum Flow Automation',
                url: BASE_URL,
                email: 'info@quantumflowautomation.ai',
                description:
                    'AI automation agency specialising in workflow automation, digital employees, and AI-powered web applications for UK businesses.',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Burnley',
                    addressRegion: 'Lancashire',
                    addressCountry: 'GB',
                },
                areaServed: {
                    '@type': 'Country',
                    name: 'United Kingdom',
                },
                priceRange: '££',
                founder: {
                    '@type': 'Person',
                    name: 'Luke Needham',
                },
            }}
        />
    );
}

/**
 * Service schema — for the services page.
 */
export function ServiceSchema({
    services,
}: {
    services: { name: string; description: string; url?: string }[];
}) {
    return (
        <JsonLd
            data={{
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                itemListElement: services.map((service, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                        '@type': 'Service',
                        name: service.name,
                        description: service.description,
                        provider: {
                            '@type': 'Organization',
                            name: 'Quantum Flow Automation',
                        },
                        url: service.url
                            ? `${BASE_URL}${service.url}`
                            : `${BASE_URL}/services`,
                    },
                })),
            }}
        />
    );
}
