import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { BookCallWidget } from "@/components/layout/BookCallWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quantumflowautomation.ai"),
  title: "Quantum Flow Automation | AI First Agency",
  description: "We build digital intelligence.",
  openGraph: {
    title: "Quantum Flow Automation | AI First Agency",
    description: "We build digital intelligence.",
    url: "https://quantumflowautomation.ai",
    siteName: "Quantum Flow Automation",
    locale: "en_US",
    type: "website",
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
