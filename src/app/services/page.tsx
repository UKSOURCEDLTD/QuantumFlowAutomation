import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuantumField } from "@/components/3d/QuantumField";
import { Database, Bot, BrainCircuit, Globe, Code2, Server } from "lucide-react";

const services = [
    {
        id: "01",
        title: "AI-First Web Architecture",
        description: "Rebuilding your digital presence from the ground up with neural search, dynamic personalization, and generative interfaces. We don't just build websites; we build living digital entities.",
        icon: Globe,
        tech: ["Next.js 14", "Vercel AI SDK", "Tailwind 4"]
    },
    {
        id: "02",
        title: "Autonomous Agent SWARM",
        description: "Deploying fleets of autonomous agents to handle support, sales, and operations. 24/7 execution with human-level reasoning capabilities.",
        icon: Bot,
        tech: ["LangChain", "OpenAI", "Pinecone"]
    },
    {
        id: "03",
        title: "Legacy System Mutation",
        description: "Injecting AI layers into your existing legacy stack. We wrap your old databases in a cognitive API layer, allowing modern AI tools to interact with decades-old data.",
        icon: Database,
        tech: ["Python", "Docker", "GraphQL"]
    },
    {
        id: "04",
        title: "Cognitive Business Audits",
        description: "Deep-dive analysis of your operational workflows to identify high-impact automation opportunities. We deliver a blueprint for removing human latency.",
        icon: BrainCircuit,
        tech: ["Process Mining", "Data Vis", "Consulting"]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-20">
            <Navbar />
            <QuantumField />

            <main className="container mx-auto px-6 py-20">
                <h1 className="text-6xl font-bold mb-4">SERVICE PROTOCOLS</h1>
                <p className="text-gray-400 text-xl max-w-2xl mb-20">
                    Our capability stack is designed for total operational dominance.
                    Select a vector for deployment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="group p-10 border border-white/10 bg-black/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                            <div className="flex justify-between items-start mb-8">
                                <service.icon className="w-12 h-12 text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                                <span className="text-gray-600 font-mono text-sm">{service.id} // DEPLOY</span>
                            </div>

                            <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <div className="flex gap-2 flex-wrap">
                                {service.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300 uppercase tracking-wider rounded-sm">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
