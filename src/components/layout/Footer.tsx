import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-primary mb-6">QF // 2026</h3>
                        <p className="text-gray-400 max-w-sm">
                            Driving high-impact transformation through disruptive efficiency
                            and the next generation of autonomous engineering systems.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-6">Connect</h4>
                        <ul className="space-y-4">
                            {['Twitter', 'LinkedIn', 'Github'].map((social) => (
                                <li key={social}>
                                    <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider group">
                                        {social}
                                        <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Terms of Protocol</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Privacy Core</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600 uppercase tracking-widest">
                    <p>© 2026 QUANTUM FLOW AUTOMATION. PAN-MARTIAN DESIGN.</p>
                    <p>SF // NEOM // TOKYO</p>
                </div>
            </div>
        </footer>
    );
}
