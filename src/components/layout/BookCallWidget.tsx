import Link from "next/link";
import { Calendar } from "lucide-react";

export function BookCallWidget() {
    return (
        <Link
            href="/contact"
            className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 px-6 py-4 bg-primary text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(0,255,163,0.3)] hover:shadow-[0_0_35px_rgba(0,255,163,0.6)] hover:bg-white transition-all duration-300 hover:scale-105 group border border-primary/50"
        >
            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide">BOOK CALL</span>
        </Link>
    );
}
