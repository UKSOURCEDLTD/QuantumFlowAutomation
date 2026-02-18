import type { BlogPost } from "./cms";
import { CONTENT_AGENTIC_AI, CONTENT_GOOGLE_STACK, CONTENT_NEURAL_ENTERPRISE } from "./blogContent1";
import { CONTENT_AI_READINESS, CONTENT_COST_OF_WAITING, CONTENT_AI_WEBSITE } from "./blogContent2";
import { CONTENT_AGENTS_VS_AUTOMATION, CONTENT_AI_AUDIT } from "./blogContent3";
import { CONTENT_FIRST_AGENT, CONTENT_UK_SME } from "./blogContent4";
import { CONTENT_OPENCLAW, CONTENT_ANTIGRAVITY_IDE } from "./blogContent5";
import { CONTENT_VIBE_CODING, CONTENT_SELF_HOSTING } from "./blogContent6";
import { CONTENT_FULL_STACK } from "./blogContent7";

// High-quality Unsplash images for blog hero sections
const IMAGES = {
    agenticAI: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    googleStack: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    neuralEnterprise: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    aiReadiness: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    costOfWaiting: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
    aiWebsite: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    agentsVsAutomation: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    aiAudit: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
    firstAgent: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
    ukSme: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    openclaw: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80",
    antigravity: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80",
    vibeCoding: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=1200&q=80",
    selfHosting: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    fullStack: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
};

export const BLOG_POSTS_LIST: BlogPost[] = [
    // === NEW: OpenClaw + Antigravity posts (most recent) ===
    {
        id: "15",
        slug: "openclaw-antigravity-full-stack",
        title: "Antigravity + OpenClaw + Google Cloud: The Stack That Lets Two People Outship an Agency",
        date: "2026-02-18",
        category: "Engineering",
        image: IMAGES.fullStack,
        author: "Luke Needham",
        readTime: "14 min read",
        excerpt: "People ask us what tools we use. The answer is three: Antigravity for building, OpenClaw for deploying, and Google Cloud for running. Here's exactly how the pieces fit together — and how you can replicate it.",
        content: CONTENT_FULL_STACK
    },
    {
        id: "11",
        slug: "openclaw-agent-orchestration",
        title: "OpenClaw: The Open-Source OS for AI Agents (And Why We Run Everything on It)",
        date: "2026-02-17",
        category: "Engineering",
        image: IMAGES.openclaw,
        author: "Luke Needham",
        readTime: "16 min read",
        excerpt: "Every serious AI deployment hits the same wall: you need your agent on WhatsApp, Slack, Telegram, and email — all at once. OpenClaw solves this with a hub-and-spoke architecture that we deploy for every client.",
        content: CONTENT_OPENCLAW
    },
    {
        id: "12",
        slug: "google-antigravity-ide-review",
        title: "Google Antigravity IDE: 3 Months In — An Honest Review",
        date: "2026-02-16",
        category: "Engineering",
        image: IMAGES.antigravity,
        author: "Luke Needham",
        readTime: "15 min read",
        excerpt: "Google's agent-first IDE promised to change how we write software. It did — but not in the way we expected. Here's our unfiltered assessment after using it daily for 90 days.",
        content: CONTENT_ANTIGRAVITY_IDE
    },
    {
        id: "13",
        slug: "vibe-coding-done-right",
        title: "Vibe Coding Done Right: How to Direct AI Agents Without Producing Slop",
        date: "2026-02-15",
        category: "Tutorials",
        image: IMAGES.vibeCoding,
        author: "Luke Needham",
        readTime: "13 min read",
        excerpt: "Google coined the term. The internet mocked it. Then developers tried it and couldn't go back. Here's how to vibe code effectively — and avoid the AI slop that gives it a bad name.",
        content: CONTENT_VIBE_CODING
    },
    {
        id: "14",
        slug: "self-hosting-ai-agents",
        title: "Self-Hosting AI Agents: The Architecture, The Costs, and Why It Beats Managed Services",
        date: "2026-02-14",
        category: "Engineering",
        image: IMAGES.selfHosting,
        author: "Luke Needham",
        readTime: "14 min read",
        excerpt: "£25-75/month for a 24/7 AI workforce? We break down our self-hosting architecture on Google Cloud — with real cost numbers, real infrastructure diagrams, and real deployment timelines.",
        content: CONTENT_SELF_HOSTING
    },

    // === Original 10 posts ===
    {
        id: "7",
        slug: "ai-agents-vs-automation",
        title: "AI Agents vs. Traditional Automation: What's Actually Different",
        date: "2026-02-13",
        category: "AI Strategy",
        image: IMAGES.agentsVsAutomation,
        author: "Luke Needham",
        readTime: "10 min read",
        excerpt: "Zapier, Make, and n8n changed the game. But AI agents are playing a completely different sport. Here's why the distinction matters — and which one your business actually needs.",
        content: CONTENT_AGENTS_VS_AUTOMATION
    },
    {
        id: "8",
        slug: "ai-audit-deep-dive",
        title: "The £500 AI Audit: What We Actually Do and Why It Works",
        date: "2026-02-12",
        category: "Case Studies",
        image: IMAGES.aiAudit,
        author: "Luke Needham",
        readTime: "11 min read",
        excerpt: "We've audited dozens of businesses for AI readiness. Here's exactly what happens during our audit, what we look for, and the patterns we see over and over again.",
        content: CONTENT_AI_AUDIT
    },
    {
        id: "1",
        slug: "agentic-ai-revolution",
        title: "The Agentic AI Revolution: Why Chatbots Are Dead",
        date: "2026-02-10",
        category: "AI Strategy",
        image: IMAGES.agenticAI,
        author: "Luke Needham",
        readTime: "12 min read",
        excerpt: "We are moving beyond simple Q&A. Autonomous agents that can plan, execute, and correct their own actions are the new standard for business automation — and most companies are already behind.",
        content: CONTENT_AGENTIC_AI
    },
    {
        id: "9",
        slug: "first-ai-agent-guide",
        title: "Building Your First AI Agent: A Practical Guide for Business Owners",
        date: "2026-02-08",
        category: "Tutorials",
        image: IMAGES.firstAgent,
        author: "Luke Needham",
        readTime: "15 min read",
        excerpt: "You don't need to be a developer to understand how AI agents work. This guide walks you through the anatomy of an agent, how to identify the right first project, and how to avoid the most common mistakes.",
        content: CONTENT_FIRST_AGENT
    },
    {
        id: "2",
        slug: "google-unified-stack",
        title: "Why We Bet Everything on the Google Unified Stack",
        date: "2026-02-05",
        category: "Engineering",
        image: IMAGES.googleStack,
        author: "Luke Needham",
        readTime: "14 min read",
        excerpt: "From Gemini's 2M token context window to Cloud Run's serverless compute, we explain exactly why Google's ecosystem is the only enterprise-grade infrastructure capable of supporting true agentic workflows at scale.",
        content: CONTENT_GOOGLE_STACK
    },
    {
        id: "10",
        slug: "uk-sme-ai-2026",
        title: "The State of AI in UK SMEs: A 2026 Reality Check",
        date: "2026-01-30",
        category: "Industry News",
        image: IMAGES.ukSme,
        author: "Luke Needham",
        readTime: "12 min read",
        excerpt: "We surveyed our network and the data is stark: UK SMEs are simultaneously the most excited about AI and the least prepared to deploy it. Here's where things actually stand — and what to do about it.",
        content: CONTENT_UK_SME
    },
    {
        id: "3",
        slug: "neural-enterprise",
        title: "Building the Neural Enterprise: The Architecture That Replaces Hierarchy",
        date: "2026-01-28",
        category: "AI Strategy",
        image: IMAGES.neuralEnterprise,
        author: "Luke Needham",
        readTime: "11 min read",
        excerpt: "Most businesses are structured like factories — slow, lossy, and inefficient. The Neural Enterprise is structured like a brain. Here's how to make the transition without breaking everything.",
        content: CONTENT_NEURAL_ENTERPRISE
    },
    {
        id: "4",
        slug: "ai-readiness-assessment",
        title: "Is Your Business Ready for AI? The Honest 5-Point Checklist",
        date: "2026-01-20",
        category: "Tutorials",
        image: IMAGES.aiReadiness,
        author: "Luke Needham",
        readTime: "9 min read",
        excerpt: "Before you invest a single pound in AI, you need to know if your business can actually use it. Most can't — yet. Here are the five critical factors that determine whether you'll get ROI or waste money.",
        content: CONTENT_AI_READINESS
    },
    {
        id: "5",
        slug: "cost-of-waiting",
        title: "The Hidden Cost of Waiting: Why Q1 2026 Is the AI Tipping Point",
        date: "2026-01-15",
        category: "Industry News",
        image: IMAGES.costOfWaiting,
        author: "Luke Needham",
        readTime: "10 min read",
        excerpt: "Every month you delay AI adoption, your competitors compound their advantage. Here's the hard data on why early 2026 is the moment to move — and what happens to businesses that don't.",
        content: CONTENT_COST_OF_WAITING
    },
    {
        id: "6",
        slug: "ai-website-case-study",
        title: "Case Study: How We Built an AI-Powered Website in 48 Hours",
        date: "2026-01-08",
        category: "Case Studies",
        image: IMAGES.aiWebsite,
        author: "Luke Needham",
        readTime: "13 min read",
        excerpt: "A behind-the-scenes look at how we deployed a swarm of specialised AI agents to design, develop, and ship a complete business website — from blank canvas to production — in just two days.",
        content: CONTENT_AI_WEBSITE
    }
];

// Create lookup map by slug for the detail page
export const BLOG_POSTS_MAP: Record<string, BlogPost> = {};
BLOG_POSTS_LIST.forEach(post => {
    BLOG_POSTS_MAP[post.slug] = post;
});
