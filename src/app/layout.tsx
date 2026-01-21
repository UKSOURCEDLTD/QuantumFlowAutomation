import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quantum Flow Automation | AI First Agency",
  description: "Propelling enterprises into unparalleled efficiency with autonomous ecosystems. The future of high-impact B2B automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black`}
      >
        <div className="micro-grid"></div>
        <div className="glass-prism"></div>
        {children}
      </body>
    </html>
  );
}
