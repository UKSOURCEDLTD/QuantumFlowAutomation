import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuantumField } from "@/components/3d/QuantumField";
import Link from "next/link";
import { ArrowRight, Cpu, Zap, Globe, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-40 relative overflow-hidden">
        {/* 3D Background confined to Hero */}
        <QuantumField />

        <div className="max-w-4xl relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Status: Cutting Edge</span>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 tracking-tighter">
            BRING YOUR BRAND<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">INTO THE 2026</span>
          </h1>

          <div className="flex flex-col md:flex-row items-start gap-12 mt-12">
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Propelling enterprises into unparalleled efficiency with autonomous ecosystems.
              We engineer the future of high-impact B2B automation.
            </p>

            <Link
              href="/network"
              className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest flex items-center gap-4 hover:bg-white transition-colors"
            >
              Initiate Protocol
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Feature Grid Placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32 relative z-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative aspect-video bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/vis${i}.png`}
                alt="Quantum Data Vis"
                className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 z-20">
                <div className="w-1 h-1 bg-primary"></div>
                <span className="text-[10px] uppercase font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">SYS_0{i}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section className="container mx-auto px-6 py-32 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Our Edge</h2>
            <p className="text-gray-400">Approaches & Infrastructure designed for market dominance and zero-latency execution.</p>
          </div>

          <div className="md:col-span-8 grid gap-8">
            <div className="p-8 border border-white/10 bg-black/50 backdrop-blur-sm group hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-6">
                <span className="text-4xl font-bold text-primary opacity-50">01.</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Strategic Dominance</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Aggressive market positioning through predictive intelligence.
                    We identify and capture competitive advantages before they manifest in the current timeline.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 border border-white/10 bg-black/50 backdrop-blur-sm group hover:border-secondary/50 transition-colors">
              <div className="flex items-start gap-6">
                <span className="text-4xl font-bold text-secondary opacity-50">02.</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">Velocity Engineering</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Rapid-deployment architectures that eliminate operational latency.
                    Engineering high-speed systems for instantaneous market response across global nodes.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 border border-white/10 bg-black/50 backdrop-blur-sm group hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-6">
                <span className="text-4xl font-bold text-accent opacity-50">03.</span>
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">Innovation Catalyst</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Disruptive neural frameworks that rewrite industry standards.
                    Continuous evolution designed to maintain your technological lead in 2026 and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-32">
        <div className="relative border border-primary/20 rounded-3xl p-12 md:p-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">
              Unleash<br />Potential
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-12">
              Secure your position as a market leader. We are architecting the future for elite enterprises ready for total transformation.
            </p>
            <Link
              href="/network"
              className="inline-flex px-12 py-5 bg-white text-black font-bold uppercase tracking-widest items-center gap-2 hover:bg-primary transition-colors"
            >
              Activate Partnership
              <Zap className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
