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

// Import rich blog content from centralized data module
import { BLOG_POSTS_LIST } from "./blogData";

const MOCK_POSTS: BlogPost[] = BLOG_POSTS_LIST;

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
