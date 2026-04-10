import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import ParticleBackground from "@/components/backgrounds/ParticleBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rewynd — Synthetic Markets Protocol",
  description:
    "Rewynd creates time-compressed, tradable synthetic markets shaped by historical structure, world events, and agent behavior.",
  openGraph: {
    title: "Rewynd — Synthetic Markets Protocol",
    description:
      "Time-compressed, tradable synthetic markets shaped by historical structure, world events, and agent behavior.",
    siteName: "Rewynd",
    type: "website",
    url: "https://rewynd.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewynd — Synthetic Markets Protocol",
    description:
      "Time-compressed, tradable synthetic markets shaped by historical structure, world events, and agent behavior.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ParticleBackground />
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(12,13,16,0.95)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.8)",
            },
          }}
        />
      </body>
    </html>
  );
}
