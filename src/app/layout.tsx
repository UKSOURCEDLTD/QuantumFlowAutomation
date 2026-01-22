import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { VoiceOrb } from "@/components/agent/VoiceOrb";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quantum Flow Automation | AI First Agency",
  description: "We build digital intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-black text-white antialiased selection:bg-primary/30 selection:text-white`}>
        <SmoothScroll>
          <CustomCursor />
          {children}
          <VoiceOrb />
        </SmoothScroll>
      </body>
    </html>
  );
}
