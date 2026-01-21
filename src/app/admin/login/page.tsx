"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuantumField } from "@/components/3d/QuantumField";

export default function LoginPage() {
    const [pass, setPass] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple mock auth for demonstration. Use Firebase Auth in production.
        if (pass === "admin2026") {
            router.push("/admin");
        } else {
            alert("ACCESS DENIED");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <QuantumField />
            <div className="z-10 bg-black/50 backdrop-blur-md p-12 border border-white/10 rounded-xl w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-8 uppercase tracking-widest">System Access</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <input
                        type="password"
                        className="w-full bg-white/5 border border-white/10 p-4 text-center text-white focus:outline-none focus:border-primary transition-colors font-mono tracking-widest"
                        placeholder="ENTER PASSKEY"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                    />
                    <button className="w-full py-4 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-colors">
                        Authenticate
                    </button>
                </form>
            </div>
        </div>
    );
}
