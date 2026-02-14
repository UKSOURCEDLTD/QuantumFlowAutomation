import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-20 pb-10 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-primary mb-6">Quantum Flow Automation</h3>
                        <p className="text-gray-400 max-w-sm">
                            We build AI systems that automate your operations — so you can focus on growing your business, not managing spreadsheets.
                        </p>
                        <p className="text-gray-600 text-sm mt-4">Based in Burnley, Lancashire. Working with clients across the UK.</p>
                    </div>

                    <div className="relative">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Pages</h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'Our Story', href: '/our-story' },
                                { label: 'Services', href: '/services' },
                                { label: 'AI Readiness', href: '/ai-readiness' },
                                { label: 'Blog', href: '/blog' },
                                { label: 'Contact', href: '/contact' },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Connect</h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'LinkedIn', href: '#' },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm group">
                                        {item.label}
                                        <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 mt-8">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600 uppercase tracking-widest">
                    <p>© 2026 Quantum Flow Automation. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Burnley, UK</p>
                </div>
            </div>
        </footer>
    );
}
