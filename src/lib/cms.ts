import { db } from "./firebase";
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

export interface BlogPost {
    id?: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    image: string;
    author: string;
    readTime: string;
    createdAt?: any;
}

export interface Message {
    id?: string;
    name: string;
    email: string;
    org: string;
    message: string;
    createdAt?: any;
}

export const CmsAPI = {
    // Blog
    async getPosts(): Promise<BlogPost[]> {
        try {
            if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
                console.warn("Firebase not configured, returning mocks");
                return MOCK_POSTS;
            }
            const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
        } catch (e) {
            console.error("Error fetching posts:", e);
            return MOCK_POSTS;
        }
    },

    async createPost(post: Omit<BlogPost, 'id'>) {
        if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) throw new Error("Firebase not configured");
        return addDoc(collection(db, "posts"), {
            ...post,
            createdAt: Timestamp.now()
        });
    },

    async getPost(id: string): Promise<BlogPost | null> {
        if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
            return MOCK_POSTS.find(p => p.id === id || p.slug === id) || null;
        }
        try {
            const { doc, getDoc } = await import("firebase/firestore");
            const d = await getDoc(doc(db, "posts", id));
            if (d.exists()) {
                return { id: d.id, ...d.data() } as BlogPost;
            }
            return null;
        } catch (e) {
            console.error("Error fetching post:", e);
            return null;
        }
    },

    // Messages
    async submitMessage(msg: Message) {
        if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
            console.log("Mock submit:", msg);
            return;
        }
        return addDoc(collection(db, "messages"), {
            ...msg,
            createdAt: Timestamp.now()
        });
    },

    async getMessages(): Promise<Message[]> {
        if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) return MOCK_MESSAGES;
        const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
    }
};

const MOCK_POSTS: BlogPost[] = [
    {
        id: "1",
        slug: "agentic-ai-revolution",
        title: "The Agentic AI Revolution: Why Chatbots Are Dead",
        date: "2026-02-10",
        category: "AI Strategy",
        image: "",
        author: "Luke Needham",
        readTime: "5 min read",
        excerpt: "We are moving beyond simple Q&A. Autonomous agents that can plan, execute, and correct their own actions are the new standard for business automation.",
        content: `<p>The era of the simple chatbot is over. We are entering the age of the <strong>Autonomous Agent</strong>.</p>
<p>For the last two years, businesses have been obsessed with "chatting" to their data. RAG (Retrieval Augmented Generation) became the standard. But chatting is passive. You ask a question, you get an answer. Then <em>you</em> have to do the work.</p>
<p><strong>Agentic AI</strong> flips this model. Instead of waiting for a prompt, an agent is given a goal. "Increase leads by 20%," "Reconcile these invoices," or "Monitor this server log."</p>
<h2>The Shift to Agency</h2>
<p>Agents have agency. They can:</p>
<ul>
<li><strong>Plan</strong>: Break a complex goal into steps.</li>
<li><strong>Execute</strong>: Use tools (APIs, browsers, databases) to perform actions.</li>
<li><strong>Observe</strong>: See the result of their action.</li>
<li><strong>Correct</strong>: If the result isn't what they expected, they try a different approach.</li>
</ul>
<p>This loop — Plan, Execute, Observe, Correct — is what separates a toy from an employee.</p>
<h2>What This Means for Your Business</h2>
<p>The businesses that adopt agentic AI earliest will have an exponential advantage. While competitors are still asking chatbots questions and copying answers into spreadsheets, agentic organisations will have software that executes entire workflows autonomously.</p>
<p>Imagine an agent that monitors your inbox, identifies supplier invoices, cross-references them against purchase orders, flags discrepancies, and drafts a response — all before you've had your morning coffee.</p>
<h2>Getting Started</h2>
<p>The key to successfully deploying agentic AI is starting with well-defined, repeatable processes. Look for tasks that:</p>
<ul>
<li>Follow a clear sequence of steps</li>
<li>Involve data from multiple systems</li>
<li>Currently require a human to copy-paste between tools</li>
<li>Have clear success criteria</li>
</ul>
<p>These are your quick wins. Start here, prove the ROI, then expand.</p>`
    },
    {
        id: "2",
        slug: "google-unified-stack",
        title: "Why We Bet on the Google Unified Stack",
        date: "2026-02-05",
        category: "Engineering",
        image: "",
        author: "Luke Needham",
        readTime: "8 min read",
        excerpt: "From Gemini to Vertex AI, Google's ecosystem provides the only enterprise-grade infrastructure capable of supporting true agentic workflows at scale.",
        content: `<p>When building enterprise-grade AI, you need infrastructure that doesn't blink. That's why we chose Google.</p>
<p>Gemini offers an industry-leading context window. That's not just a spec; it's a fundamental change in capability. It means an agent can read your entire codebase, your entire customer history, or your entire legal archive in a single prompt.</p>
<h2>The Unified Advantage</h2>
<p>Google's stack isn't just about one model. It's about how everything connects:</p>
<ul>
<li><strong>Vertex AI</strong> — Model hosting, fine-tuning, and serving at scale</li>
<li><strong>Cloud Run</strong> — Serverless compute that scales to zero</li>
<li><strong>BigQuery</strong> — Petabyte-scale analytics with built-in ML</li>
<li><strong>Firebase</strong> — Real-time databases and authentication</li>
</ul>
<p>When your entire stack speaks the same language, you eliminate the integration tax that kills most AI projects.</p>`
    },
    {
        id: "3",
        slug: "neural-enterprise",
        title: "Building the Neural Enterprise",
        date: "2026-01-28",
        category: "AI Strategy",
        image: "",
        author: "Luke Needham",
        readTime: "6 min read",
        excerpt: "How to structure your organisation so that humans make decisions and software executes them. A guide to the modern business architecture.",
        content: `<p>Most businesses are structured like factories. Information flows down, decisions flow up. It's slow, lossy, and inefficient.</p>
<p>The Neural Enterprise is different. It's structured like a brain. Small, autonomous units (agents) operate independently but share a common nervous system (data layer).</p>
<h2>The Architecture</h2>
<p>Think of your business as three layers:</p>
<ul>
<li><strong>Decision Layer</strong> — Humans set strategy, approve budgets, handle exceptions</li>
<li><strong>Orchestration Layer</strong> — AI agents coordinate workflows, route tasks, manage state</li>
<li><strong>Execution Layer</strong> — Specialised tools and APIs perform atomic actions</li>
</ul>
<p>The magic happens in the orchestration layer. This is where agentic AI lives.</p>`
    },
    {
        id: "4",
        slug: "ai-readiness-assessment",
        title: "Is Your Business Ready for AI? The 5-Point Checklist",
        date: "2026-01-20",
        category: "Tutorials",
        image: "",
        author: "Luke Needham",
        readTime: "4 min read",
        excerpt: "Before you invest in AI, you need to know if your business is ready. Here are the five critical factors that determine AI readiness.",
        content: `<p>AI is the most powerful business tool since the internet. But deploying it without preparation is like installing a jet engine on a bicycle — impressive, but ultimately destructive.</p>
<h2>The 5-Point AI Readiness Checklist</h2>
<h3>1. Data Infrastructure</h3>
<p>Do you have clean, accessible, structured data? AI models are only as good as the data they consume. If your data lives in disconnected spreadsheets, you need to fix that first.</p>
<h3>2. Process Documentation</h3>
<p>Can you describe your business processes step-by-step? If a process lives only in someone's head, an AI agent can't execute it.</p>
<h3>3. Integration Capability</h3>
<p>Do your tools have APIs? Agents need to connect to your existing systems — CRM, ERP, email, databases.</p>
<h3>4. Team Buy-In</h3>
<p>Is your team excited or terrified? Successful AI adoption requires champions, not resistors.</p>
<h3>5. Clear Success Metrics</h3>
<p>What does success look like? "Implement AI" is not a goal. "Reduce invoice processing time by 60%" is.</p>`
    },
    {
        id: "5",
        slug: "cost-of-waiting",
        title: "The Hidden Cost of Waiting: Why Q1 2026 is the AI Tipping Point",
        date: "2026-01-15",
        category: "Industry News",
        image: "",
        author: "Luke Needham",
        readTime: "7 min read",
        excerpt: "Every month you delay AI adoption, your competitors gain ground. Here's the data on why early 2026 is the moment to move.",
        content: `<p>There's a reason every tech giant is racing to deploy AI at scale — the returns are exponential, not linear.</p>
<h2>The Compounding Advantage</h2>
<p>Businesses that adopted AI in 2024 are now 18 months ahead. That's 18 months of:</p>
<ul>
<li>Training models on proprietary data</li>
<li>Building institutional knowledge about what works</li>
<li>Automating repetitive tasks and redeploying human talent</li>
<li>Compounding efficiency gains</li>
</ul>
<p>The gap widens every quarter. And it's not linear — it's exponential.</p>
<h2>What Changed in 2026</h2>
<p>Three things converged to make Q1 2026 the tipping point:</p>
<ul>
<li><strong>Model capability</strong> — Agents can now handle multi-step, multi-tool workflows reliably</li>
<li><strong>Cost reduction</strong> — Token prices dropped 90% in 18 months</li>
<li><strong>Infrastructure maturity</strong> — Cloud providers now offer turnkey agentic platforms</li>
</ul>
<p>The barrier to entry has never been lower. The cost of waiting has never been higher.</p>`
    },
    {
        id: "6",
        slug: "ai-website-case-study",
        title: "Case Study: How We Built an AI-Powered Website in 48 Hours",
        date: "2026-01-08",
        category: "Case Studies",
        image: "",
        author: "Luke Needham",
        readTime: "10 min read",
        excerpt: "A behind-the-scenes look at how we used agentic AI to design, develop, and deploy a complete business website in just two days.",
        content: `<p>When a client came to us needing a complete website overhaul on an impossibly tight deadline, we saw it as the perfect opportunity to put our agentic workflow to the test.</p>
<h2>The Challenge</h2>
<p>The client needed:</p>
<ul>
<li>A complete redesign of their 12-page website</li>
<li>SEO-optimised content for each page</li>
<li>Integration with their existing CRM</li>
<li>Deployment to production — all in 48 hours</li>
</ul>
<h2>Our Approach</h2>
<p>We deployed a team of specialised AI agents, each responsible for a different aspect of the build:</p>
<ul>
<li><strong>Design Agent</strong> — Generated layout options based on competitor analysis</li>
<li><strong>Content Agent</strong> — Wrote and optimised copy for each page</li>
<li><strong>Development Agent</strong> — Built components and implemented designs</li>
<li><strong>QA Agent</strong> — Tested every page across devices and browsers</li>
</ul>
<h2>The Result</h2>
<p>The site went live in 41 hours. Page load time: 1.2s. Lighthouse score: 98. The client's organic traffic increased by 340% in the first month.</p>`
    }
];

const MOCK_MESSAGES: Message[] = [
    {
        id: "1",
        name: "John Doe",
        email: "john@cyberdyne.systems",
        org: "Cyberdyne",
        message: "Interested in the autonomous swarm endpoints.",
        createdAt: new Date()
    }
];
