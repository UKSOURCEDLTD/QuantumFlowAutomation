import type { Metadata } from "next";
import { HomeContent } from "@/components/home/HomeContent";
import { WebPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "AI Automation Agency for UK Businesses | Quantum Flow Automation",
  description:
    "Quantum Flow Automation builds AI employees, workflow automation, and AI-powered websites that run your business 24/7. Cut costs, scale operations, and automate repetitive tasks. Based in Lancashire, UK.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Automation Agency for UK Businesses",
    description:
      "We build AI employees, automated workflows, and intelligent websites that handle your operations — so you can focus on growing your business.",
    url: "https://quantumflowautomation.ai",
  },
};

export default function Home() {
  return (
    <>
      <WebPageSchema
        title="AI Automation Agency for UK Businesses"
        description="Quantum Flow Automation builds AI employees, workflow automation, and AI-powered websites that run your business 24/7."
        url="/"
      />
      <HomeContent />
    </>
  );
}
