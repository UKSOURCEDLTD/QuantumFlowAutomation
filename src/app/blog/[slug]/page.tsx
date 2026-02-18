import type { Metadata } from "next";
import { BLOG_POSTS_MAP, BLOG_POSTS_LIST } from "@/lib/blogData";
import { ArticleSchema, BreadcrumbSchema } from "@/lib/jsonLd";
import { BlogPostContent } from "@/components/blog/BlogPostContent";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS_MAP[slug];

    if (!post) {
        return {
            title: "Article Not Found",
            description: "This article does not exist.",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        authors: [{ name: post.author || "Luke Needham" }],
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://quantumflowautomation.ai/blog/${post.slug}`,
            type: "article",
            publishedTime: post.date,
            authors: [post.author || "Luke Needham"],
            images: post.image
                ? [
                    {
                        url: post.image,
                        width: 1200,
                        height: 630,
                        alt: post.title,
                    },
                ]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: post.image ? [post.image] : [],
        },
    };
}

export function generateStaticParams() {
    return BLOG_POSTS_LIST.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = BLOG_POSTS_MAP[slug];

    return (
        <>
            {post && (
                <>
                    <ArticleSchema post={post} />
                    <BreadcrumbSchema
                        items={[
                            { name: "Home", url: "/" },
                            { name: "Blog", url: "/blog" },
                            { name: post.title, url: `/blog/${post.slug}` },
                        ]}
                    />
                </>
            )}
            <BlogPostContent />
        </>
    );
}
