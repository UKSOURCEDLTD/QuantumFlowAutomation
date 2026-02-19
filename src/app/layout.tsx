import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { BookCallWidget } from "@/components/layout/BookCallWidget";
import { OrganizationSchema, WebSiteSchema } from "@/lib/jsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quantumflowautomation.ai"),
  title: {
    default: "Quantum Flow Automation | AI Automation Agency — Lancashire, UK",
    template: "%s | Quantum Flow Automation",
  },
  description:
    "Quantum Flow Automation builds AI employees, workflow automation, and AI-powered websites for UK businesses. Automate operations, cut costs, and scale without hiring. Based in Lancashire.",
  keywords: [
    "AI automation agency",
    "AI employees",
    "workflow automation",
    "AI-powered websites",
    "business automation UK",
    "AI consulting Lancashire",
    "digital employees",
    "agentic AI",
  ],
  authors: [{ name: "Luke Needham" }],
  creator: "Quantum Flow Automation",
  openGraph: {
    title: "Quantum Flow Automation | AI Automation Agency",
    description:
      "We build AI employees, workflow automation, and AI-powered websites that run your business operations 24/7. Based in Lancashire, serving UK businesses.",
    url: "https://quantumflowautomation.ai",
    siteName: "Quantum Flow Automation",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Flow Automation | AI Automation Agency",
    description:
      "AI employees, workflow automation, and AI-powered websites for UK businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://quantumflowautomation.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        {/* Prefetch Spline 3D scene so it's cached before the user hits /services */}
        <link rel="prefetch" href="https://prod.spline.design/QYEJMLhOC333ohDS/scene.splinecode" as="fetch" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-black text-white antialiased selection:bg-primary/30 selection:text-white`}>
        <SmoothScroll>
          <CustomCursor />
          {children}
          <BookCallWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
