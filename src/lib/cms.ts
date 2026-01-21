import { db } from "./firebase";
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

export interface BlogPost {
    id?: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
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

    async createPost(post: BlogPost) {
        if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) throw new Error("Firebase not configured");
        return addDoc(collection(db, "posts"), {
            ...post,
            createdAt: Timestamp.now()
        });
    },

    async getPost(id: string): Promise<BlogPost | null> {
        if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
            return MOCK_POSTS.find(p => p.id === id) || null;
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
        title: "The Death of Static Web: Why 2026 Belongs to Generative Interfaces",
        date: "2026-01-15",
        category: "FORECAST",
        excerpt: "The era of pre-rendered pages is ending. Users expect interfaces that adapt to their intent in real-time.",
        content: "Full content here..."
    },
    {
        id: "2",
        title: "Google Unified AI Stack: A Technical Deep Dive",
        date: "2026-01-10",
        category: "ENGINEERING",
        excerpt: "How we leveraged Google's latest Gemini models to build a self-healing infrastructure.",
        content: ""
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
