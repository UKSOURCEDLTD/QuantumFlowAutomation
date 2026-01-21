import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
        className={`${inter.variable} antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
