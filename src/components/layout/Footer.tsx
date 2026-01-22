import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-20 pb-10 schematic-grid relative corner-brackets">
            {/* Technical Metadata */}
            <div className="absolute top-4 left-6 text-[8px] text-primary/50 text-mono uppercase tracking-wider">
                LATENCY: 14MS // PROTOCOL: QF-2026 // ENCRYPTION: ACTIVE
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-primary mb-6 text-mono">QF // 2026</h3>
                        <p className="text-gray-400 max-w-sm">
                            Driving high-impact transformation through disruptive efficiency
                            and the next generation of autonomous engineering systems.
                        </p>
                    </div>

                    {/* Vertical Accent Separator */}
                    <div className="hidden md:block absolute left-1/2 top-20 bottom-20 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary"></div>
                    </div>

                    <div className="relative">
                        <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-6 text-mono">Connect</h4>
                        <ul className="space-y-4">
                            {['Twitter', 'LinkedIn', 'Github'].map((social) => (
                                <li key={social}>
                                    <Link href="#" className="nav-link flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wider group">
                                        {social}
                                        <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 text-mono">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/terms" className="nav-link text-gray-400 hover:text-white text-sm">Terms of Protocol</Link></li>
                            <li><Link href="/privacy" className="nav-link text-gray-400 hover:text-white text-sm">Privacy Core</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600 uppercase tracking-widest text-mono">
                    <p>© 2026 QUANTUM FLOW AUTOMATION. PAN-MARTIAN DESIGN.</p>
                    <p className="flex items-center gap-2">
                        <span className="text-primary status-pulse">●</span>
                        SF // NEOM // TOKYO
                    </p>
                </div>

                {/* Bottom Corner Technical Specs */}
                <div className="absolute bottom-4 right-6 text-[8px] text-secondary/50 text-mono uppercase tracking-wider">
                    BUILD: 2026.01.21 // STATUS: OPERATIONAL
                </div>
            </div>
        </footer>
    );
}
